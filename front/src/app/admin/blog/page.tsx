"use client";

import { useEffect, useState } from "react";
import NextImage from "next/image";
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  FileText,
  User,
  Tag,
  Link,
  Calendar,
  Search,
  Image as ImageIcon,
  Upload,
  Sparkles,
  Eye,
  Clock,
  BookOpen,
} from "lucide-react";

type Blog = {
  _id: string;
  title: string;
  slug: string;
  content: string;
  image?: string;
  author?: string;
  tags?: string[];
  createdAt?: string;
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState(""); // can be blob:... or remote url
  const [author, setAuthor] = useState("Admin");
  const [tags, setTags] = useState("");

  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [showForm, setShowForm] = useState(false);

  // Toast replacement
  const toast = {
    success: (m: string) => console.log("Success:", m),
    error: (m: string) => console.error("Error:", m),
  };

  // fetch blogs list
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      const list: Blog[] = data?.data ?? [];
      setBlogs(list);
      setFilteredBlogs(list);
    } catch (err) {
      toast.error("Failed to fetch blogs");
      console.error("Fetch blogs error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // search filter
  useEffect(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      setFilteredBlogs(blogs);
      return;
    }
    const filtered = blogs.filter((blog) => {
      return (
        blog.title.toLowerCase().includes(term) ||
        (blog.author ?? "").toLowerCase().includes(term) ||
        (blog.tags ?? []).some((t) => t.toLowerCase().includes(term))
      );
    });
    setFilteredBlogs(filtered);
  }, [searchTerm, blogs]);

  // validate selected image
  const validateFile = (file: File) => {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (file.size > maxSize) {
      toast.error("File size must be less than 10MB");
      return false;
    }
    if (!allowed.includes(file.type)) {
      toast.error("Only JPEG, PNG, WebP and GIF allowed");
      return false;
    }
    return true;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!validateFile(file)) {
      e.target.value = "";
      return;
    }

    // cleanup previous blob preview if any
    if (imagePreview && imagePreview.startsWith("blob:")) {
      URL.revokeObjectURL(imagePreview);
    }

    setImageFile(file);
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  const handleSubmit = async () => {
    if (!title.trim() || !slug.trim() || !content.trim()) {
      return toast.error("Title, slug and content are required");
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("title", title.trim());
      formData.append("slug", slug.trim());
      formData.append("content", content.trim());
      formData.append("author", author.trim() || "Admin");
      formData.append(
        "tags",
        tags
          .split(",")
          .map((t) => t.trim())
          .filter((t) => t.length > 0)
          .join(",")
      );

      if (imageFile) {
        formData.append("image", imageFile);
      } else if (editingBlog && editingBlog.image) {
        formData.append("existingImage", editingBlog.image);
      }

      // IMPORTANT: use slug for update route (not _id)
      const url = editingBlog ? `/api/blogs/${editingBlog.slug}` : "/api/blogs";
      const method = editingBlog ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || err.error || "Failed saving blog");
      }

      toast.success(editingBlog ? "Blog updated" : "Blog created");
      resetForm();
      setShowForm(false);
      fetchBlogs();
    } catch (error) {
      console.error("Submit error:", error);
      toast.error(error instanceof Error ? error.message : "Failed saving blog");
    } finally {
      setUploading(false);
    }
  };

  // Now handleDelete uses slug (not _id)
  const handleDelete = async (slugToDelete: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      const res = await fetch(`/api/blogs/${slugToDelete}`, { method: "DELETE" });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || err.error || "Failed deleting blog");
      }
      toast.success("Blog deleted");
      fetchBlogs();
    } catch (error) {
      console.error("Delete error:", error);
      toast.error(error instanceof Error ? error.message : "Failed deleting blog");
    }
  };

  const resetForm = () => {
    setTitle("");
    setSlug("");
    setContent("");
    setImageFile(null);
    if (imagePreview && imagePreview.startsWith("blob:")) {
      URL.revokeObjectURL(imagePreview);
    }
    setImagePreview("");
    setAuthor("Admin");
    setTags("");
    setEditingBlog(null);
  };

  const startEdit = (blog: Blog) => {
    if (imagePreview && imagePreview.startsWith("blob:")) {
      URL.revokeObjectURL(imagePreview);
    }
    setEditingBlog(blog);
    setTitle(blog.title);
    setSlug(blog.slug);
    setContent(blog.content);
    setImageFile(null);
    setImagePreview(blog.image || "");
    setAuthor(blog.author || "Admin");
    setTags((blog.tags || []).join(", "));
    setShowForm(true);
  };

  useEffect(() => {
    if (title && !editingBlog) {
      const generatedSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
      setSlug(generatedSlug);
    }
  }, [title, editingBlog]);

  useEffect(() => {
    return () => {
      if (imagePreview && imagePreview.startsWith("blob:")) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  // GOLD COLOR PALETTE
  const goldGradient = "from-yellow-500 via-yellow-400 to-amber-500";
  const goldText = "text-yellow-700";
  const goldBg = "bg-gradient-to-r " + goldGradient;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center justify-center w-20 h-20 ${goldBg} rounded-3xl mb-6 shadow-2xl`}>
            <Sparkles className="w-10 h-10 text-white animate-pulse" />
          </div>
          <h1 className={`text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r ${goldGradient} mb-6 tracking-tight`}>
            Blog Studio
          </h1>
          <div className={`w-24 h-1 ${goldBg} mx-auto rounded-full mb-6`}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Craft compelling stories and manage your content with our elegant, intuitive dashboard
          </p>
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-xl hover:scale-105 transition-all duration-500">
              <div className={`flex items-center justify-center w-12 h-12 ${goldBg} rounded-2xl mb-4 mx-auto`}>
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{blogs.length}</div>
              <div className={goldText + " text-sm"}>Total Posts</div>
            </div>
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-xl hover:scale-105 transition-all duration-500">
              <div className={`flex items-center justify-center w-12 h-12 ${goldBg} rounded-2xl mb-4 mx-auto`}>
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{filteredBlogs.length}</div>
              <div className={goldText + " text-sm"}>Visible Posts</div>
            </div>
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-xl hover:scale-105 transition-all duration-500">
              <div className={`flex items-center justify-center w-12 h-12 ${goldBg} rounded-2xl mb-4 mx-auto`}>
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">Recent</div>
              <div className={goldText + " text-sm"}>Activity</div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-yellow-500 group-focus-within:text-yellow-700 transition-colors" />
            <input
              type="text"
              placeholder="Search blogs by title, author, or tags..."
              className="w-full pl-12 pr-6 py-4 border-2 border-yellow-200 rounded-2xl focus:outline-none focus:border-yellow-400 bg-white/70 backdrop-blur-xl transition-all duration-300 text-gray-700 placeholder-gray-500 shadow-xl hover:shadow-2xl focus:shadow-2xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-amber-400/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          <button
            onClick={() => {
              resetForm();
              setShowForm(true);
            }}
            className="group relative bg-gradient-to-r from-yellow-600 via-yellow-700 to-amber-700 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Plus className="h-6 w-6 relative z-10 group-hover:rotate-90 transition-transform duration-300" />
            <span className="relative z-10">Create New Post</span>
            <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
          </button>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/20 animate-in slide-in-from-bottom-4 duration-500">
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${goldGradient} flex items-center gap-4`}>
                    <div className={`w-10 h-10 ${goldBg} rounded-2xl flex items-center justify-center`}>
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                    {editingBlog ? "Edit Blog Post" : "Create New Blog Post"}
                  </h2>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors hover:scale-110 duration-200 p-2 hover:bg-gray-100 rounded-xl"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                {/* FORM FIELDS (unchanged except gold accents) */}
                <div className="space-y-8">
                  {/* Title */}
                  <div className="group">
                    <label className={`flex items-center gap-3 text-sm font-bold ${goldText} mb-3`}>
                      <div className={`w-8 h-8 ${goldBg} rounded-xl flex items-center justify-center`}>
                        <FileText className="h-4 w-4 text-white" />
                      </div>
                      Title *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter an engaging blog title..."
                      className="w-full p-4 border-2 border-yellow-200 rounded-2xl focus:outline-none focus:border-yellow-400 transition-all duration-300 bg-white/80 backdrop-blur-sm group-focus-within:shadow-xl"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  {/* Slug */}
                  <div className="group">
                    <label className={`flex items-center gap-3 text-sm font-bold ${goldText} mb-3`}>
                      <div className={`w-8 h-8 ${goldBg} rounded-xl flex items-center justify-center`}>
                        <Link className="h-4 w-4 text-white" />
                      </div>
                      URL Slug *
                    </label>
                    <input
                      type="text"
                      placeholder="blog-post-url-slug"
                      className="w-full p-4 border-2 border-yellow-200 rounded-2xl focus:outline-none focus:border-yellow-400 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                    />
                  </div>
                  {/* Content */}
                  <div className="group">
                    <label className={`flex items-center gap-3 text-sm font-bold ${goldText} mb-3`}>
                      <div className={`w-8 h-8 ${goldBg} rounded-xl flex items-center justify-center`}>
                        <FileText className="h-4 w-4 text-white" />
                      </div>
                      Content *
                    </label>
                    <textarea
                      placeholder="Write your amazing blog content here..."
                      className="w-full p-4 border-2 border-yellow-200 rounded-2xl focus:outline-none focus:border-yellow-400 transition-all duration-300 resize-vertical bg-white/80 backdrop-blur-sm"
                      rows={8}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                  {/* Image Upload */}
                  <div className="group">
                    <label className={`flex items-center gap-3 text-sm font-bold ${goldText} mb-3`}>
                      <div className={`w-8 h-8 ${goldBg} rounded-xl flex items-center justify-center`}>
                        <ImageIcon className="h-4 w-4 text-white" />
                      </div>
                      Featured Image
                    </label>
                    {imagePreview && (
                      <div className="mb-4 relative group">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-64 object-cover rounded-2xl border-2 border-yellow-200 shadow-xl group-hover:scale-[1.02] transition-transform duration-300"
                        />
                        <button
                          onClick={() => {
                            setImageFile(null);
                            if (imagePreview.startsWith("blob:")) {
                              URL.revokeObjectURL(imagePreview);
                            }
                            setImagePreview("");
                          }}
                          className="absolute top-3 right-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-2 shadow-xl hover:scale-110 transition-all duration-200"
                          disabled={uploading}
                          title="Remove image"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      disabled={uploading}
                      className="w-full p-4 border-2 border-yellow-200 rounded-2xl focus:outline-none focus:border-yellow-400 transition-all duration-300 bg-white/80 backdrop-blur-sm file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-medium file:bg-gradient-to-r file:from-yellow-500 file:to-amber-500 file:text-white hover:file:scale-105 file:transition-transform file:duration-200"
                    />
                    <p className="text-xs text-gray-500 mt-2 flex items-center gap-2">
                      <Upload className="h-3 w-3" />
                      Select an image to upload — processed securely through Cloudinary
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Author */}
                    <div className="group">
                      <label className={`flex items-center gap-3 text-sm font-bold ${goldText} mb-3`}>
                        <div className={`w-8 h-8 ${goldBg} rounded-xl flex items-center justify-center`}>
                          <User className="h-4 w-4 text-white" />
                        </div>
                        Author
                      </label>
                      <input
                        type="text"
                        placeholder="Author name"
                        className="w-full p-4 border-2 border-yellow-200 rounded-2xl focus:outline-none focus:border-yellow-400 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                      />
                    </div>
                    {/* Tags */}
                    <div className="group">
                      <label className={`flex items-center gap-3 text-sm font-bold ${goldText} mb-3`}>
                        <div className={`w-8 h-8 ${goldBg} rounded-xl flex items-center justify-center`}>
                          <Tag className="h-4 w-4 text-white" />
                        </div>
                        Tags
                      </label>
                      <input
                        type="text"
                        placeholder="tech, javascript, tutorial"
                        className="w-full p-4 border-2 border-yellow-200 rounded-2xl focus:outline-none focus:border-yellow-400 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* Actions */}
                <div className="flex gap-4 mt-10 pt-8 border-t border-yellow-200">
                  <button
                    onClick={handleSubmit}
                    disabled={uploading || !title || !slug || !content}
                    className={`flex-1 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
                  >
                    {uploading ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Save className="h-5 w-5" />
                        {editingBlog ? "Update Blog" : "Publish Blog"}
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setShowForm(false)}
                    disabled={uploading}
                    className="px-8 py-4 border-2 border-yellow-300 text-yellow-700 rounded-2xl font-bold hover:bg-yellow-50 hover:border-yellow-400 transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blogs Grid */}
        <div>
          {loading ? (
            <div className="flex flex-col justify-center items-center py-20">
              <div className={`w-16 h-16 ${goldBg} rounded-2xl animate-spin mb-6`}></div>
              <p className="text-yellow-700 font-medium">Loading your amazing content...</p>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-20 bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-yellow-200">
              <div className={`w-24 h-24 ${goldBg} rounded-3xl mx-auto mb-8 flex items-center justify-center`}>
                <FileText className="h-12 w-12 text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${goldText} mb-4`}>No blogs found</h3>
              <p className="text-yellow-600 text-lg mb-8">
                {searchTerm ? "Try adjusting your search terms" : "Start by creating your first masterpiece"}
              </p>
              {!searchTerm && (
                <button
                  onClick={() => {
                    resetForm();
                    setShowForm(true);
                  }}
                  className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
                >
                  <Plus className="h-5 w-5" />
                  Create Your First Post
                </button>
              )}
            </div>
          ) : (
            <div className="grid gap-8">
              {filteredBlogs.map((blog, index) => (
                <div
                  key={blog._id}
                  className={`group bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-yellow-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-in slide-in-from-bottom-4`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Image */}
                      {blog.image && (
                        <div className="lg:w-64 h-48 lg:h-40 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl overflow-hidden flex-shrink-0 relative group-hover:scale-105 transition-transform duration-500 shadow-xl">
                          <NextImage
                            src={blog.image}
                            alt={blog.title}
                            fill
                            style={{ objectFit: "cover" }}
                            className="group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                          <div className="flex-1">
                            <h3 className={`text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:${goldText} transition-colors duration-300`}>
                              {blog.title}
                            </h3>
                            <p className="text-gray-600 text-base mb-6 line-clamp-3 leading-relaxed">
                              {blog.content.substring(0, 200)}...
                            </p>
                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-4">
                              <span className="flex items-center gap-2 bg-yellow-50 px-3 py-2 rounded-xl">
                                <User className="h-4 w-4 text-yellow-500" />
                                {blog.author}
                              </span>
                              {blog.createdAt && (
                                <span className="flex items-center gap-2 bg-yellow-50 px-3 py-2 rounded-xl">
                                  <Calendar className="h-4 w-4 text-yellow-500" />
                                  {new Date(blog.createdAt).toLocaleDateString()}
                                </span>
                              )}
                              <span className="flex items-center gap-2 bg-yellow-50 px-3 py-2 rounded-xl">
                                <Link className="h-4 w-4 text-yellow-500" />
                                /{blog.slug}
                              </span>
                            </div>
                            {blog.tags && blog.tags.length > 0 && (
                              <div className="flex flex-wrap gap-3 mb-6">
                                {blog.tags.map((tag, i) => (
                                  <span
                                    key={i}
                                    className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 rounded-full text-sm font-semibold border border-yellow-200 hover:scale-105 transition-transform duration-200 cursor-pointer"
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <button
                              onClick={() => startEdit(blog)}
                              className="group/btn bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
                            >
                              <Edit className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(blog.slug)}
                              className="group/btn bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
                            >
                              <Trash2 className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Hover effect border */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/0 via-amber-400/0 to-yellow-400/0 group-hover:from-yellow-400/20 group-hover:via-amber-400/20 group-hover:to-yellow-400/20 transition-all duration-500 pointer-events-none`}></div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-xl rounded-2xl border border-yellow-200 shadow-xl">
            <Sparkles className="h-5 w-5 text-yellow-500" />
            <span className="text-yellow-600 font-medium">Powered by Creative Excellence</span>
            <Sparkles className="h-5 w-5 text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
  