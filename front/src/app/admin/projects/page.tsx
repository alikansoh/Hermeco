"use client";

import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import {
  Edit,
  Trash2,
  PlusCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Image as ImageIcon,
  Upload,
  Sparkles,
  Search,
  Filter,
  Star,
  Loader2,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Project = {
  _id?: string;
  title: string;
  description: string;
  date: string;
  images?: string[];
  featured?: boolean;
};

// ------------------ Image Compression Utility ------------------
async function compressImage(file: File, maxSizeMB: number = 9): Promise<File> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = document.createElement('img');
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        // Calculate new dimensions to reduce file size
        const maxDimension = 1920; // Max width/height
        if (width > height && width > maxDimension) {
          height = (height * maxDimension) / width;
          width = maxDimension;
        } else if (height > maxDimension) {
          width = (width * maxDimension) / height;
          height = maxDimension;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);

        // Try different quality levels to get under size limit
        const tryCompress = (quality: number) => {
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Failed to compress image'));
                return;
              }

              const compressedSize = blob.size / 1024 / 1024; // Size in MB
              console.log(`🖼️ Compressed to ${compressedSize.toFixed(2)}MB at ${quality * 100}% quality`);

              if (compressedSize <= maxSizeMB || quality <= 0.5) {
                const compressedFile = new File([blob], file.name, {
                  type: 'image/jpeg',
                  lastModified: Date.now(),
                });
                resolve(compressedFile);
              } else {
                // Try again with lower quality
                tryCompress(quality - 0.1);
              }
            },
            'image/jpeg',
            quality
          );
        };

        tryCompress(0.9); // Start at 90% quality
      };
      img.onerror = () => reject(new Error('Failed to load image'));
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
  });
}

// ------------------ Cloudinary Upload Utility ------------------
async function uploadToCloudinary(file: File): Promise<string> {
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!cloudName || !uploadPreset) {
    throw new Error('Cloudinary configuration missing');
  }

  // Check file size and compress if needed (Cloudinary free tier limit is 10MB)
  let fileToUpload = file;
  const fileSizeMB = file.size / 1024 / 1024;
  
  console.log(`📊 Original file size: ${fileSizeMB.toFixed(2)}MB`);

  if (fileSizeMB > 9) {
    console.log('🔄 File too large, compressing...');
    try {
      fileToUpload = await compressImage(file, 9);
      const newSizeMB = fileToUpload.size / 1024 / 1024;
      console.log(`✅ Compressed from ${fileSizeMB.toFixed(2)}MB to ${newSizeMB.toFixed(2)}MB`);
    } catch (error) {
      console.error('Compression failed:', error);
      throw new Error('Failed to compress image. Please use a smaller file.');
    }
  }

  const formData = new FormData();
  formData.append("file", fileToUpload);
  formData.append("upload_preset", uploadPreset);

  try {
    const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    console.log('📤 Uploading to Cloudinary...');
    
    const response = await axios.post(uploadUrl, formData);
    
    console.log('✅ Upload success:', response.data.secure_url);
    return response.data.secure_url;
  } catch (error) {
    const axiosError = error as { response?: { data?: { error?: { message?: string } } }; message?: string };
    console.error('❌ Cloudinary Error:', axiosError.response?.data);
    
    const errorMessage = axiosError.response?.data?.error?.message || '';
    if (errorMessage.includes('File size too large')) {
      throw new Error('Image is too large even after compression. Please use a smaller image.');
    }
    
    throw new Error(`Upload failed: ${errorMessage || axiosError.message || 'Unknown error'}`);
  }
}

const ImageSlider = ({ images, title }: { images: string[]; title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  if (!images || images.length === 0) {
    return (
      <div className="h-48 sm:h-56 md:h-64 w-full bg-gradient-to-br from-gray-100 via-gray-50 to-yellow-50 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex flex-col items-center justify-center text-gray-400 shadow-inner relative overflow-hidden border border-yellow-100">
        <ImageIcon size={20} className="sm:w-6 sm:h-6 text-yellow-600" />
        <span className="text-xs sm:text-sm font-medium text-gray-600 mt-2">No images</span>
      </div>
    );
  }

  return (
    <div className="relative h-48 sm:h-56 md:h-64 w-full mb-4 sm:mb-6 group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg bg-gray-900">
      <Image
        src={images[currentIndex]}
        alt={`${title} - ${currentIndex + 1}`}
        fill
        className={`object-cover transition-all duration-700 ${isLoading ? "blur-sm" : "blur-0"}`}
        sizes="(max-width: 640px) 100vw, 33vw"
        onLoad={() => setIsLoading(false)}
      />

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-20">
          <div className="w-8 h-8 border-3 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {images.length > 1 && (
        <>
          <button onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full z-20">
            <ChevronLeft size={16} />
          </button>
          <button onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full z-20">
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {images.map((_, i) => (
              <button key={i} onClick={() => setCurrentIndex(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-yellow-400 scale-125" : "bg-white/40"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const SuccessToast = ({ message, onClose }: { message: string; onClose: () => void }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);
  
  return (
    <div className="fixed top-20 right-4 z-[100] bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
      <CheckCircle size={16} />
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="ml-2"><X size={14} /></button>
    </div>
  );
};

export default function ProjectsAdminPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterFeatured, setFilterFeatured] = useState<string>("all");
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formDate, setFormDate] = useState("");
  const [formFeatured, setFormFeatured] = useState(false);
  const [formImages, setFormImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const MAX_FILE_SIZE = 50 * 1024 * 1024; // Increased to 50MB since we compress before upload

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    fetchProjects();
  }, [router]);

  useEffect(() => {
    let filtered = projects;
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (filterFeatured !== "all") {
      filtered = filtered.filter(p => filterFeatured === "featured" ? p.featured : !p.featured);
    }
    setFilteredProjects(filtered);
  }, [projects, searchTerm, filterFeatured]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await fetch("/api/projects", {
        headers: { "Authorization": `Bearer ${token}` },
      });

      if (response.status === 401) {
        localStorage.removeItem("token");
        router.push("/login");
        return;
      }

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      const projectsData = Array.isArray(data) ? data : data?.data || [];
      setProjects(projectsData);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const validFiles = Array.from(files).filter(file => {
      if (file.size > MAX_FILE_SIZE) {
        alert(`${file.name} is too large`);
        return false;
      }
      if (!["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(file.type)) {
        alert(`${file.name} format not supported`);
        return false;
      }
      return true;
    });

    setImageFiles(validFiles);

    Promise.all(validFiles.map(file => 
      new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      })
    )).then(setFormImages).catch(() => {
      alert("Failed to read images");
      setFormImages([]);
      setImageFiles([]);
    });
  };

  const openForm = (project?: Project) => {
    if (project) {
      setEditingProject(project);
      setFormTitle(project.title);
      setFormDescription(project.description);
      setFormDate(project.date.slice(0, 10));
      setFormFeatured(!!project.featured);
      setFormImages(project.images || []);
      setImageFiles([]);
    } else {
      setEditingProject(null);
      setFormTitle("");
      setFormDescription("");
      setFormDate("");
      setFormFeatured(false);
      setFormImages([]);
      setImageFiles([]);
    }
    setShowForm(true);
  };

  const closeForm = () => {
    if (!submitting) {
      setShowForm(false);
      setEditingProject(null);
      setFormTitle("");
      setFormDescription("");
      setFormDate("");
      setFormFeatured(false);
      setFormImages([]);
      setImageFiles([]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formTitle.trim() || !formDescription.trim() || !formDate) {
      alert("Please fill all required fields");
      return;
    }

    if (!editingProject && imageFiles.length === 0) {
      alert("Please upload at least one image");
      return;
    }

    setSubmitting(true);

    try {
      const token = localStorage.getItem("token");
      let uploadedUrls: string[] = [];

      if (imageFiles.length > 0) {
        console.log(`📸 Uploading ${imageFiles.length} images...`);
        uploadedUrls = await Promise.all(imageFiles.map(uploadToCloudinary));
        console.log('✅ All uploads complete');
      }

      const formData = new FormData();
      formData.append("title", formTitle.trim());
      formData.append("description", formDescription.trim());
      formData.append("date", formDate);
      formData.append("featured", formFeatured.toString());

      if (editingProject && imageFiles.length === 0) {
        formData.append("keepExistingImages", "true");
        formData.append("existingImages", JSON.stringify(editingProject.images || []));
      }

      uploadedUrls.forEach(url => formData.append("images", url));

      const url = editingProject ? `/api/projects/${editingProject._id}` : "/api/projects";
      const method = editingProject ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        body: formData,
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 401) {
        alert('Session expired');
        localStorage.removeItem("token");
        router.push("/login");
        return;
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}`);
      }

      setSuccessMessage(editingProject ? "Updated!" : "Created!");
      await fetchProjects();
      closeForm();
    } catch (err) {
      console.error("Submit error:", err);
      alert(err instanceof Error ? err.message : "Error saving project");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"?`)) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` },
      });

      if (response.status === 401) {
        localStorage.removeItem("token");
        router.push("/login");
        return;
      }

      if (!response.ok) throw new Error("Delete failed");

      setProjects(prev => prev.filter(p => p._id !== id));
      setSuccessMessage("Deleted!");
    } catch (err) {
      alert("Error deleting project");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h3 className="text-xl font-bold">Loading Projects</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-yellow-50 min-h-screen">
      {successMessage && <SuccessToast message={successMessage} onClose={() => setSuccessMessage(null)} />}

      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-4xl font-black text-gray-900">Projects Studio</h1>
              <p className="text-gray-600">Manage your portfolio</p>
            </div>
            <button onClick={() => openForm()} className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2">
              <PlusCircle size={20} />
              Create Project
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 border border-yellow-200">
              <p className="text-2xl font-bold">{projects.length}</p>
              <p className="text-sm text-gray-600">Total</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-amber-200">
              <p className="text-2xl font-bold">{projects.filter(p => p.featured).length}</p>
              <p className="text-sm text-gray-600">Featured</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-yellow-200">
              <p className="text-2xl font-bold">{projects.reduce((acc, p) => acc + (p.images?.length || 0), 0)}</p>
              <p className="text-sm text-gray-600">Images</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-green-200">
              <p className="text-2xl font-bold">{projects.filter(p => !p.featured).length}</p>
              <p className="text-sm text-gray-600">Regular</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-yellow-200 p-4 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
              />
            </div>
            <select value={filterFeatured} onChange={(e) => setFilterFeatured(e.target.value)} className="px-4 py-2 border rounded-lg">
              <option value="all">All</option>
              <option value="featured">Featured</option>
              <option value="regular">Regular</option>
            </select>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="bg-white rounded-xl border p-12 text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-yellow-600" />
            <h3 className="text-2xl font-bold mb-2">No Projects</h3>
            <p className="text-gray-600 mb-6">Create your first project</p>
            {projects.length === 0 && (
              <button onClick={() => openForm()} className="bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold">
                Get Started
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map(project => (
              <div key={project._id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl transition-all">
                <ImageSlider images={project.images || []} title={project.title} />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h2 className="font-bold text-xl mb-2">{project.title}</h2>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 bg-yellow-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => openForm(project)} className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                        <Edit size={16} />
                      </button>
                      <button onClick={() => handleDelete(project._id!, project.title)} className="p-2 bg-red-50 text-red-600 rounded-lg">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{project.description}</p>
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-2 text-amber-700">
                      <Calendar size={14} />
                      {new Date(project.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <ImageIcon size={14} />
                      {project.images?.length || 0}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {showForm && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[60]" onClick={closeForm}>
            <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-white border-b p-6">
                <button onClick={closeForm} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg" disabled={submitting}>
                  <X size={20} />
                </button>
                <h2 className="text-2xl font-bold">{editingProject ? "Edit Project" : "New Project"}</h2>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Title *</label>
                  <input type="text" value={formTitle} onChange={(e) => setFormTitle(e.target.value)} className="w-full px-4 py-3 border rounded-lg" required disabled={submitting} />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Description *</label>
                  <textarea value={formDescription} onChange={(e) => setFormDescription(e.target.value)} rows={4} className="w-full px-4 py-3 border rounded-lg resize-none" required disabled={submitting} />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Date *</label>
                    <input type="date" value={formDate} onChange={(e) => setFormDate(e.target.value)} className="w-full px-4 py-3 border rounded-lg" required disabled={submitting} />
                  </div>
                  <div className="flex items-center">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" checked={formFeatured} onChange={(e) => setFormFeatured(e.target.checked)} className="w-5 h-5" disabled={submitting} />
                      <span className="font-semibold">Feature Project</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Images {!editingProject && "*"}</label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <input type="file" multiple accept="image/*" onChange={handleFileChange} className="hidden" id="upload" disabled={submitting} />
                    <label htmlFor="upload" className="cursor-pointer">
                      <Upload className="w-12 h-12 mx-auto mb-2 text-yellow-600" />
                      <p className="font-semibold mb-1">Upload Images</p>
                      <p className="text-sm text-gray-500">JPG, PNG, WebP (Max 100MB)</p>
                    </label>
                  </div>

                  {formImages.length > 0 && (
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      {formImages.map((img, i) => (
                        <div key={i} className="relative aspect-square">
                          <Image src={img} alt={`Preview ${i + 1}`} fill className="object-cover rounded-lg" />
                          <button type="button" onClick={() => {
                            setFormImages(prev => prev.filter((_, idx) => idx !== i));
                            setImageFiles(prev => prev.filter((_, idx) => idx !== i));
                          }} className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full" disabled={submitting}>
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-4 pt-6 border-t">
                  <button type="button" onClick={closeForm} className="flex-1 px-6 py-3 bg-gray-100 rounded-xl font-semibold" disabled={submitting}>
                    Cancel
                  </button>
                  <button type="submit" className="flex-1 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-6 py-3 rounded-xl font-bold" disabled={submitting}>
                    {submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {editingProject ? "Updating..." : "Creating..."}
                      </span>
                    ) : (
                      editingProject ? "Update" : "Create"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}