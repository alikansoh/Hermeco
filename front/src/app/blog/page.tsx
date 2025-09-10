"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { Search, User, Calendar, Tag, Eye, Clock, ArrowRight, Sparkles } from "lucide-react";

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

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return <span>{count}</span>;
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // fetch blogs
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      const list: Blog[] = data?.data ?? [];
      setBlogs(list);
      setFilteredBlogs(list);
    } catch (err) {
      console.error("Fetch blogs error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBlogs(); }, []);

  useEffect(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) { setFilteredBlogs(blogs); return; }
    setFilteredBlogs(
      blogs.filter(blog =>
        blog.title.toLowerCase().includes(term) ||
        (blog.author ?? "").toLowerCase().includes(term) ||
        (blog.tags ?? []).some(t => t.toLowerCase().includes(term))
      )
    );
  }, [searchTerm, blogs]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-amber-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-amber-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm border border-yellow-200">
              <Sparkles className="w-4 h-4 text-yellow-600" />
              Latest Insights & Updates
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Discover thought-provoking articles, industry insights, and expert perspectives 
              that drive innovation and inspire growth in the digital landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 relative z-10">
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-1 border border-yellow-200/50">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-600 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles by title, author, or topic..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 text-gray-900 placeholder-gray-500 text-lg bg-white/90 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        {!loading && (
          <div className="mb-12 text-center">
            <p className="text-lg text-gray-700">
              {searchTerm ? (
                <>Showing <span className="font-bold text-gray-900">{filteredBlogs.length}</span> results for {searchTerm}</>
              ) : (
                <>Explore our collection of <span className="font-bold text-gray-900"><Counter value={blogs.length} /></span> articles</>
              )}
            </p>
          </div>
        )}

        {/* Blog Content */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-yellow-200 border-t-yellow-600 rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-600 text-lg mt-6">Discovering amazing content...</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-32">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-md mx-auto border border-yellow-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-yellow-200/50">
                <Search className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No articles found</h3>
              <p className="text-gray-600 leading-relaxed">
                {searchTerm 
                  ? "We couldn't find any articles matching your search. Try different keywords or browse all articles." 
                  : "Our content library is growing. Check back soon for fresh insights and expert perspectives!"
                }
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-all duration-300"
                >
                  View All Articles
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredBlogs.map((blog, index) => (
              <article
                key={blog._id}
                className="group bg-white/80 backdrop-blur-sm shadow-lg rounded-3xl hover:shadow-2xl hover:bg-white transition-all duration-500 overflow-hidden border border-yellow-100/50 hover:border-yellow-300/70 hover:-translate-y-2"
              >
                {/* Blog Image */}
                {blog.image ? (
                  <Link href={`/blog/${blog.slug}`} className="block relative overflow-hidden">
                    <div className="relative h-56 w-full overflow-hidden rounded-t-3xl">
                      <NextImage
                        src={blog.image}
                        alt={blog.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg">
                        Featured
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="h-56 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 flex items-center justify-center rounded-t-3xl border-b border-yellow-200/50">
                    <div className="text-yellow-600 text-center">
                      <Tag className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm font-semibold">Article</p>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Tags */}
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-50 to-amber-50 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold border border-yellow-200 shadow-sm"
                        >
                          <Tag className="w-3 h-3 text-yellow-600" />
                          {tag}
                        </span>
                      ))}
                      {blog.tags.length > 2 && (
                        <span className="text-yellow-600 text-sm font-semibold">
                          +{blog.tags.length - 2} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-xl font-black text-gray-900 mb-4 leading-tight group-hover:text-yellow-700 transition-colors line-clamp-2">
                    <Link href={`/blog/${blog.slug}`} className="hover:underline">
                      {blog.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-700 mb-6 line-clamp-3 leading-relaxed">
                    {blog.content.slice(0, 150)}...
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-4">
                      {blog.author && (
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4 text-yellow-600" />
                          <span className="font-semibold">{blog.author}</span>
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-yellow-600" />
                        <span className="font-semibold">{getReadingTime(blog.content)} min read</span>
                      </span>
                    </div>
                    {blog.createdAt && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-yellow-600" />
                        <span className="font-semibold">{formatDate(blog.createdAt)}</span>
                      </span>
                    )}
                  </div>

                  {/* Read More Button */}
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  >
                    <Eye className="w-4 h-4" />
                    Read Full Article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>

                {/* Hover effect gradient border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-yellow-400/20 via-transparent to-amber-600/20 pointer-events-none"></div>
              </article>
            ))}
          </div>
        )}

        {/* Newsletter Section */}
        {!loading && filteredBlogs.length > 0 && !searchTerm && (
          <div className="text-center mt-20">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-yellow-100/50 max-w-4xl mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/10 via-transparent to-amber-600/10 pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  Stay Updated
                </h3>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Subscribe to our newsletter for the latest insights and updates delivered to your inbox.
                </p>
                <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  <span className="relative z-10">Subscribe Now</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}