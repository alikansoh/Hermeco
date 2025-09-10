"use client";

import { useEffect, useState, FormEvent, ChangeEvent } from "react";
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
  Eye,
  Sparkles,
  Search,
  Filter,
  Star,
  Clock,
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

// Image Slider Component
const ImageSlider = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!images || images.length === 0) {
    return (
      <div className="h-48 sm:h-56 md:h-64 w-full bg-gradient-to-br from-gray-100 via-gray-50 to-yellow-50 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex flex-col items-center justify-center text-gray-400 shadow-inner relative overflow-hidden border border-yellow-100">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 to-amber-50/30"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-100 to-amber-200 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 shadow-sm">
            <ImageIcon size={20} className="sm:w-6 sm:h-6 text-yellow-600" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-600">
            No images available
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-48 sm:h-56 md:h-64 w-full mb-4 sm:mb-6 group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-yellow-200/20">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>

      <Image
        src={images[currentIndex]}
        alt={`${title} - Image ${currentIndex + 1}`}
        fill
        className={`object-cover transition-all duration-700 group-hover:scale-110 ${
          isLoading ? "blur-sm" : "blur-0"
        }`}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        onLoad={() => setIsLoading(false)}
      />

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-20">
          <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 sm:border-3 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {images.length > 1 && !isLoading && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 z-20 shadow-lg backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 z-20 shadow-lg backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight size={16} className="sm:w-5 sm:h-5" />
          </button>

          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-yellow-400 shadow-lg scale-125"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/40 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full z-20 font-medium backdrop-blur-sm">
            {currentIndex + 1}/{images.length}
          </div>
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

// Success Toast
const SuccessToast = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);
  return (
    <div className="fixed top-20 right-4 left-4 sm:left-auto z-[100] bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 animate-in slide-in-from-top-2 duration-300 max-w-sm mx-auto sm:mx-0 border border-green-400">
      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white/20 rounded-full flex items-center justify-center">
        <CheckCircle size={12} className="text-white" />
      </div>
      <span className="font-medium text-sm sm:text-base flex-1">{message}</span>
      <button onClick={onClose} className="text-white/80 hover:text-white p-1">
        <X size={14} />
      </button>
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

  // Form state
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Form fields
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formDate, setFormDate] = useState("");
  const [formFeatured, setFormFeatured] = useState(false);
  const [formImages, setFormImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  // Check authentication on mount
  useEffect(() => {
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/login");
          return false;
        }
      }
      return true;
    };

    if (checkAuth()) {
      fetchProjects();
    }
  }, [router]);

  // Filter projects based on search and filter criteria
  useEffect(() => {
    let filtered = projects;
    
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (filterFeatured !== "all") {
      filtered = filtered.filter(project => 
        filterFeatured === "featured" ? project.featured : !project.featured
      );
    }
    
    setFilteredProjects(filtered);
  }, [projects, searchTerm, filterFeatured]);

  // Fetch projects from API
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      
      const response = await fetch("/api/projects", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("token");
          router.push("/login");
          return;
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      // Handle different API response formats
      const projectsData = Array.isArray(data) ? data : data?.data || data?.projects || [];
      
      if (Array.isArray(projectsData)) {
        setProjects(projectsData);
        setError(null);
      } else {
        console.error("Unexpected response format:", data);
        setError("Invalid response format from server.");
      }
    } catch (err) {
      console.error("Fetch projects error:", err);
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch projects";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Convert uploaded files to base64 strings for preview
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    
    // Validate file sizes and types
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    
    const validFiles = fileArray.filter(file => {
      if (file.size > maxSize) {
        alert(`File ${file.name} is too large. Maximum size is 10MB.`);
        return false;
      }
      if (!allowedTypes.includes(file.type)) {
        alert(`File ${file.name} is not a supported image format.`);
        return false;
      }
      return true;
    });

    setImageFiles(validFiles);

    // Convert to base64 for preview
    Promise.all(
      validFiles.map(
        (file) =>
          new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () =>
              typeof reader.result === "string"
                ? resolve(reader.result)
                : reject("Failed to read file");
            reader.onerror = (err) => reject(err);
          })
      )
    )
      .then((base64Images) => setFormImages(base64Images))
      .catch((err) => {
        console.error("File reading error:", err);
        alert("Failed to read one or more images");
        setFormImages([]);
        setImageFiles([]);
      });
  };

  // Open form for new or edit
  const openForm = (project?: Project) => {
    if (project) {
      setEditingProject(project);
      setFormTitle(project.title);
      setFormDescription(project.description);
      setFormDate(project.date ? project.date.slice(0, 10) : "");
      setFormFeatured(Boolean(project.featured));
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
    if (submitting) return;
    setShowForm(false);
    setEditingProject(null);
    setFormTitle("");
    setFormDescription("");
    setFormDate("");
    setFormFeatured(false);
    setFormImages([]);
    setImageFiles([]);
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formTitle.trim()) {
      alert("Please enter a project title.");
      return;
    }
    if (!formDescription.trim()) {
      alert("Please enter a project description.");
      return;
    }
    if (!formDate) {
      alert("Please select a project date.");
      return;
    }
    if (!editingProject && imageFiles.length === 0) {
      alert("Please upload at least one image for new projects.");
      return;
    }

    setSubmitting(true);

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      
      formData.append("title", formTitle.trim());
      formData.append("description", formDescription.trim());
      formData.append("date", formDate);
      formData.append("featured", formFeatured.toString());

      // Add new images if any
      if (imageFiles.length > 0) {
        imageFiles.forEach((file) => {
          formData.append("images", file);
        });
      }

      // For edits, include existing images to keep
      if (editingProject && imageFiles.length === 0) {
        formData.append("keepExistingImages", "true");
        formData.append("existingImages", JSON.stringify(editingProject.images || []));
      }

      const url = editingProject 
        ? `/api/projects/${editingProject._id}` 
        : "/api/projects";
      const method = editingProject ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        body: formData,
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("token");
          router.push("/login");
          return;
        }
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (result.success !== false) {
        setSuccessMessage(
          editingProject
            ? "Project updated successfully!"
            : "Project created successfully!"
        );
        await fetchProjects();
        closeForm();
      } else {
        throw new Error(result.message || "Failed to save project");
      }
    } catch (err) {
      console.error("Submit error:", err);
      const errorMessage = err instanceof Error ? err.message : "Error saving project";
      alert(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  // Handle project deletion
  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) {
      return;
    }

    try {
      const token = localStorage.getItem("token");
      
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("token");
          router.push("/login");
          return;
        }
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (result.success !== false) {
        setProjects((prev) => prev.filter((p) => p._id !== id));
        setSuccessMessage("Project deleted successfully!");
      } else {
        throw new Error(result.message || "Failed to delete project");
      }
    } catch (err) {
      console.error("Delete error:", err);
      const errorMessage = err instanceof Error ? err.message : "Error deleting project";
      alert(errorMessage);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="relative w-16 h-16 mb-6 mx-auto">
            <div className="w-16 h-16 border-4 border-yellow-200 rounded-full"></div>
            <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin absolute inset-0"></div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Loading Projects
            </h3>
            <p className="text-gray-600 px-4">
              Please wait while we fetch your amazing work...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error && projects.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50 flex items-center justify-center p-4">
        <div className="bg-white border border-yellow-200 rounded-2xl p-8 max-w-md shadow-xl w-full">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <X size={24} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
            Connection Error
          </h3>
          <p className="text-yellow-700 text-center mb-6">{error}</p>
          <button
            onClick={fetchProjects}
            className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white py-3 rounded-xl font-semibold transition-all duration-200"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-yellow-50 min-h-screen">
      {successMessage && (
        <SuccessToast 
          message={successMessage} 
          onClose={() => setSuccessMessage(null)} 
        />
      )}

      <div className="max-w-7xl mx-auto p-4 sm:p-6 pt-6">
        {/* Enhanced Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles size={24} className="text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-black text-gray-900">Projects Studio</h1>
                  <p className="text-gray-600 text-lg">Craft, manage, and showcase your creative portfolio</p>
                </div>
              </div>
              {error && (
                <div className="text-amber-700 text-sm bg-amber-50 px-3 py-2 rounded-lg border border-amber-200">
                  API connection unstable: {error}
                </div>
              )}
            </div>

            <button
              onClick={() => openForm()}
              className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <PlusCircle size={20} />
                <span>Create New Project</span>
              </div>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 border border-yellow-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{projects.length}</p>
                  <p className="text-sm text-gray-600">Total Projects</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-amber-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {projects.filter(p => p.featured).length}
                  </p>
                  <p className="text-sm text-gray-600">Featured</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-yellow-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {projects.reduce((acc, p) => acc + (p.images?.length || 0), 0)}
                  </p>
                  <p className="text-sm text-gray-600">Total Images</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-green-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {projects.filter(p => !p.featured).length}
                  </p>
                  <p className="text-sm text-gray-600">Regular</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-xl shadow-sm border border-yellow-200 p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects by title or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={filterFeatured}
                  onChange={(e) => setFilterFeatured(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white transition-all duration-200"
                >
                  <option value="all">All Projects</option>
                  <option value="featured">Featured Only</option>
                  <option value="regular">Regular Only</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {projects.length === 0 ? "Your Canvas Awaits" : "No Projects Found"}
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              {projects.length === 0 
                ? "Ready to showcase your amazing work? Create your first project and bring your creative vision to life."
                : "No projects match your current search criteria. Try adjusting your filters or search terms."
              }
            </p>
            {projects.length === 0 && (
              <button
                onClick={() => openForm()}
                className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Start Creating
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={project._id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl hover:border-yellow-300 transition-all duration-300"
              >
                <ImageSlider
                  images={project.images || []}
                  title={project.title}
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 pr-3">
                      <h2 className="font-bold text-xl text-gray-900 line-clamp-2 mb-2">
                        {project.title}
                      </h2>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold border border-amber-200">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button
                        onClick={() => openForm(project)}
                        className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                        title="Edit Project"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(project._id!, project.title)}
                        className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-200"
                        title="Delete Project"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-amber-700">
                      <Calendar size={14} />
                      <span className="text-sm font-medium">
                        {project.date
                          ? new Date(project.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })
                          : ""}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <ImageIcon size={14} />
                      <span className="text-sm">
                        {project.images?.length || 0} images
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Enhanced Modal Form */}
        {showForm && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[60]"
            onClick={closeForm}
          >
            <div
              className="bg-white rounded-2xl w-full max-w-4xl overflow-auto max-h-[90vh] shadow-2xl border border-yellow-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 rounded-t-2xl p-6">
                <button
                  onClick={closeForm}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  disabled={submitting}
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-lg flex items-center justify-center">
                    {editingProject ? <Edit className="w-5 h-5 text-white" /> : <PlusCircle className="w-5 h-5 text-white" />}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {editingProject ? "Edit Project" : "Create New Project"}
                    </h2>
                    <p className="text-gray-600">
                      {editingProject ? "Update your project details" : "Add a new project to your portfolio"}
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Project Title */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter an inspiring project title..."
                    disabled={submitting}
                    required
                  />
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    value={formDescription}
                    onChange={(e) => setFormDescription(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Describe your project in detail. What makes it special?"
                    disabled={submitting}
                    required
                  />
                </div>

                {/* Project Date and Featured Toggle */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Project Date *
                    </label>
                    <input
                      type="date"
                      value={formDate}
                      onChange={(e) => setFormDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                      disabled={submitting}
                      required
                    />
                  </div>

                  <div className="flex items-center h-full">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formFeatured}
                        onChange={(e) => setFormFeatured(e.target.checked)}
                        className="w-5 h-5 text-yellow-500 border-2 border-gray-300 rounded focus:ring-yellow-500 focus:ring-2 transition-all duration-200"
                        disabled={submitting}
                      />
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-semibold text-gray-900">
                          Feature this project
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Image Upload Section */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Project Images {!editingProject && "*"}
                  </label>
                  
                  {/* Upload Area */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-400 transition-colors duration-200">
                    <input
                      type="file"
                      multiple
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      onChange={handleFileChange}
                      className="hidden"
                      id="image-upload"
                      disabled={submitting}
                    />
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer block"
                    >
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Upload className="w-6 h-6 text-yellow-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Upload Project Images
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Click to browse or drag and drop your images here
                      </p>
                      <p className="text-gray-500 text-xs mt-2">
                        Supports JPG, PNG, WebP (Max 10MB per file)
                      </p>
                    </label>
                  </div>

                  {/* Image Previews */}
                  {formImages.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">
                        Image Previews ({formImages.length})
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {formImages.map((image, index) => (
                          <div
                            key={index}
                            className="relative group aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200"
                          >
                            <Image
                              src={image}
                              alt={`Preview ${index + 1}`}
                              fill
                              className="object-cover"
                              sizes="150px"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                setFormImages(prev => prev.filter((_, i) => i !== index));
                                setImageFiles(prev => prev.filter((_, i) => i !== index));
                              }}
                              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                              disabled={submitting}
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={closeForm}
                    className="flex-1 px-6 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50"
                    disabled={submitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>
                          {editingProject ? "Updating..." : "Creating..."}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>
                          {editingProject ? "Update Project" : "Create Project"}
                        </span>
                      </div>
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