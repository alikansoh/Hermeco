"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Eye,
  ArrowRight,
  Search,
  X,
  Users,
  Star,
  Award,
  TrendingUp,
  Briefcase,
  Calendar,
  Grid,
  List,
  Loader,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

// Project type matching your API structure
interface Project {
  _id: string;
  title: string;
  description: string;
  date: string;
  images?: string[];
  featured?: boolean;
}

interface ApiResponse {
  success: boolean;
  data?: Project | Project[];
  error?: string;
}

interface HeroSliderProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

interface StatsSectionProps {
  projectsCount: number;
}

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  onRefresh: () => void;
  isRefreshing: boolean;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

interface ProjectCardProps {
  project: Project;
  viewMode: "grid" | "list";
  onClick: () => void;
}

interface ErrorStateProps {
  error: string | null;
  onRetry: () => void;
}

// API service functions
const projectsApi = {
  getAll: async (): Promise<Project[]> => {
    const response = await fetch('/api/projects', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const result: ApiResponse = await response.json();
    if (!result.success) {
      throw new Error(result.error || 'Failed to fetch projects');
    }
    
    return Array.isArray(result.data) ? result.data : [];
  },
};

const HeroSlider: React.FC<HeroSliderProps> = ({ projects, onProjectClick }) => {
  const [current, setCurrent] = useState<number>(0);
  const featuredProjects = projects.filter((p) => p.featured);

  useEffect(() => {
    if (featuredProjects.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  const nextSlide = (): void =>
    setCurrent((prev) => (prev + 1) % featuredProjects.length);
  const prevSlide = (): void =>
    setCurrent(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );

  const handleViewProject = (): void => {
    onProjectClick(featuredProjects[current]);
  };

  if (featuredProjects.length === 0) {
    return (
      <div className="h-[50vh] bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl mb-20 shadow-2xl flex items-center justify-center">
        <div className="text-center text-white">
          <Award className="w-16 h-16 mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold mb-2">No Featured Projects</h2>
          <p className="text-xl opacity-90">Check back soon for featured work!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[70vh] overflow-hidden rounded-3xl mb-20 shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={featuredProjects[current]?._id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
          {featuredProjects[current]?.images?.[0] ? (
            <Image
              src={featuredProjects[current].images[0]}
              alt={featuredProjects[current].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
              <Building2 className="w-32 h-32 text-white/50" />
            </div>
          )}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mb-4"
                >
                  <span className="inline-flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold text-sm">
                    <Award className="w-4 h-4" />
                    Featured Project
                  </span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-5xl md:text-6xl font-black text-white mb-4"
                >
                  {featuredProjects[current]?.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-xl text-gray-200 mb-6 leading-relaxed line-clamp-3"
                >
                  {featuredProjects[current]?.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                    <Calendar className="w-4 h-4" />
                    {featuredProjects[current]?.date ? new Date(featuredProjects[current].date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long'
                    }) : 'No date'}
                  </div>
                </motion.div>
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  onClick={handleViewProject}
                  className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
                >
                  <Eye className="w-5 h-5" />
                  View Project Details
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {featuredProjects.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition z-30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition z-30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
            {featuredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === idx ? "bg-yellow-500 w-8" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const StatsSection: React.FC<StatsSectionProps> = ({ projectsCount }) => {
  const stats = [
    {
      icon: Building2,
      label: "Projects Completed",
      value: `100+`,
      color: "text-blue-500",
    },
    {
      icon: Users,
      label: "Happy Clients",
      value: `150+`,
      color: "text-green-500",
    },
    {
      icon: Star,
      label: "5-Star Reviews",
      value: "5.0",
      color: "text-yellow-500",
    },
    {
      icon: TrendingUp,
      label: "Years Experience",
      value: "5+",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.6 }}
          className="text-center"
        >
          <div
            className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-white rounded-2xl shadow-lg mb-4 mx-auto`}
          >
            <stat.icon className="w-8 h-8" />
          </div>
          <div className="text-3xl font-black text-gray-900 mb-2">
            {stat.value}
          </div>
          <div className="text-gray-600 font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

const FilterBar: React.FC<FilterBarProps> = ({
  searchTerm,
  onSearchChange,
  viewMode,
  onViewModeChange,
  onRefresh,
  isRefreshing
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-12 border border-gray-100">
      <div className="flex flex-wrap gap-6 items-center justify-between">
        <div className="flex items-center flex-1">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent w-full min-w-64"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-700"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh
          </button>

          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-2 rounded-lg transition ${
                viewMode === "grid"
                  ? "bg-white shadow-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => onViewModeChange("list")}
              className={`p-2 rounded-lg transition ${
                viewMode === "list"
                  ? "bg-white shadow-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  if (!isOpen || !project) return null;

  const images = project.images && project.images.length > 0 ? project.images : ['/api/placeholder/800/600'];

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Main image */}
          <div className="mb-6 relative  h-96 md:h-150 w-full rounded-lg overflow-hidden">
            <Image
              src={images[currentImage]}
              alt={`${project.title} ${currentImage + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            />
          </div>

          {/* Thumbnail gallery */}
          {images.length > 1 && (
            <div className="grid grid-cols-6 gap-2 mb-8">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`relative rounded-lg overflow-hidden aspect-square ${
                    currentImage === idx
                      ? "ring-2 ring-yellow-500"
                      : "hover:opacity-80"
                  } transition`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 20vw, (max-width: 1200px) 15vw, 10vw"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Project details */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                <Calendar className="w-4 h-4 text-yellow-500" />
                <span className="font-medium">
                  {project.date ? new Date(project.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }) : 'No date available'}
                </span>
              </div>
              {project.featured && (
                <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-lg">
                  <Award className="w-4 h-4 text-yellow-600" />
                  <span className="font-medium text-yellow-800">Featured</span>
                </div>
              )}
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Project Description
              </h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, viewMode, onClick }) => {
  const primaryImage = project.images && project.images.length > 0 
    ? project.images[0] 
    : '/api/placeholder/600/400';

  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex gap-6 hover:shadow-2xl transition-all group cursor-pointer"
        onClick={onClick}
      >
        <div className="w-48 h-32 rounded-xl overflow-hidden flex-shrink-0 relative">
          <Image
            src={primaryImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 40vw, 200px"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <div className="flex items-center gap-4 text-gray-500 mb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {project.date ? new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long'
                    }) : 'No date'}
                  </span>
                </div>
                {project.featured && (
                  <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                    <Award className="w-3 h-3 text-yellow-600" />
                    <span className="text-xs font-medium text-yellow-800">Featured</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex items-center justify-end">
            <button className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold transition group">
              View Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={primaryImage}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {project.featured && (
          <div className="absolute top-4 left-4 flex items-center gap-1 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
            <Award className="w-3 h-3" />
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 text-gray-500 mb-4">
          <Calendar className="w-4 h-4" />
          <span>
            {project.date ? new Date(project.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long'
            }) : 'No date'}
          </span>
        </div>
        <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>

        <div className="flex items-center justify-end">
          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105">
            <Eye className="w-4 h-4" />
            View
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const LoadingSpinner: React.FC = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-yellow-50 flex items-center justify-center">
    <div className="flex flex-col items-center justify-center text-center">
      <div className="relative w-20 h-20 mb-6">
        <div className="w-20 h-20 border-4 border-yellow-200 rounded-full"></div>
        <div className="w-20 h-20 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin absolute inset-0"></div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Loading Projects</h3>
      <p className="text-gray-600">Fetching our amazing work...</p>
    </div>
  </div>
);

const ErrorState: React.FC<ErrorStateProps> = ({ error, onRetry }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50 flex items-center justify-center p-6">
    <div className="text-center max-w-md">
      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <AlertCircle className="w-10 h-10 text-red-500" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Unable to Load Projects
      </h3>
      <p className="text-gray-600 mb-8">
        {error || 'There was a problem connecting to our server. Please try again.'}
      </p>
      <button
        onClick={onRetry}
        className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold transition-all hover:scale-105"
      >
        Try Again
      </button>
    </div>
  </div>
);

const ProjectPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState<number>(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const PAGE_SIZE = viewMode === "list" ? 5 : 6;

  // Fetch projects from API
  const fetchProjects = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const data = await projectsApi.getAll();
      setProjects(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch projects';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);
  const pageProjects = filteredProjects.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  useEffect(() => {
    setPage(1);
  }, [searchTerm, viewMode]);

  const handleProjectClick = (project: Project): void => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error && projects.length === 0) {
    return <ErrorState error={error} onRetry={fetchProjects} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-200 px-6 py-3 rounded-full shadow-sm mb-8"
          >
            <Building2 className="w-6 h-6 text-yellow-700" />
            <span className="text-yellow-800 font-bold text-lg">
              Portfolio Showcase
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Discover our exceptional portfolio of construction, renovation, and
            design projects. Each project represents our commitment to quality,
            innovation, and client satisfaction.
          </motion.p>
        </div>

        {/* Featured Projects Slider */}
        <HeroSlider projects={projects} onProjectClick={handleProjectClick} />

        {/* Stats Section */}
        <StatsSection projectsCount={projects.length} />

        {/* Filter Bar */}
        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onRefresh={fetchProjects}
          isRefreshing={loading}
        />

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {pageProjects.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900">
              {filteredProjects.length}
            </span>{" "}
            projects
          </div>
          {totalPages > 1 && (
            <div className="text-sm text-gray-500">
              Page {page} of {totalPages}
            </div>
          )}
        </div>

        {/* Projects Grid/List */}
        <div
          className={`${
            viewMode === "grid"
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          } mb-12`}
        >
          <AnimatePresence mode="wait">
            {pageProjects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
                viewMode={viewMode}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && !loading && (
          <div className="text-center py-20">
            <Building2 className="w-20 h-20 text-gray-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No projects found
            </h3>
            <p className="text-gray-600 mb-8">
              {searchTerm ? 
                'Try adjusting your search to find more projects.' : 
                'No projects have been added yet. Check back soon!'
              }
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Clear Search
              </button>
            )}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mb-16">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <div className="flex gap-2">
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                let pageNum: number;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (page <= 3) {
                  pageNum = i + 1;
                } else if (page >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = page - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`w-12 h-12 rounded-xl font-bold transition-all ${
                      page === pageNum
                        ? "bg-yellow-500 text-black shadow-lg scale-110"
                        : "bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 shadow-sm"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            Let&apos;s Discuss Your Next Project
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your space? Get in touch with our expert team for
            a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg">
              Contact Us Today
            </button>
            <button className="inline-flex items-center justify-center bg-white border-2 border-yellow-500 hover:bg-yellow-50 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg">
              View All Services
            </button>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProjectPage;