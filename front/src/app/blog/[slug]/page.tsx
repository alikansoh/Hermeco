"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NextImage from "next/image";
import Link from "next/link";
import { Calendar, User, Tag, Clock, ArrowLeft, Share2, BookOpen, Eye } from "lucide-react";

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

export default function BlogPage() {
  const params = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!params || !params.slug) return;
      setLoading(true);
      try {
        const res = await fetch(`/api/blogs/${params.slug}`);
        const data = await res.json();
        setBlog(data?.data ?? null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [params?.slug]);

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
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
        <div className="flex flex-col items-center justify-center py-32 relative z-10">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-yellow-200 border-t-yellow-600 rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-600 text-lg mt-6">Loading amazing content...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
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
        <div className="text-center py-32 relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-md mx-auto border border-yellow-100/50">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-yellow-200/50">
              <BookOpen className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Article Not Found</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The article you&apos;re looking for doesn&apos;t exist or may have been moved.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

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

      <div className="relative z-10 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Articles
            </Link>
          </div>

          {/* Featured Image */}
          {blog.image && (
            <div className="relative group mb-12">
              <div className="relative h-64 sm:h-96 lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <NextImage 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  style={{ objectFit: "cover" }} 
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Floating reading time badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-yellow-200/50">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                    <Eye className="w-4 h-4 text-yellow-600" />
                    {getReadingTime(blog.content)} min read
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Article Header */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-yellow-100/50 mb-12">
            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-50 to-amber-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-200 shadow-sm"
                  >
                    <Tag className="w-3 h-3 text-yellow-600" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
              {blog.author && (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full flex items-center justify-center border border-yellow-200/50">
                    <User className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Written by</p>
                    <p className="text-sm font-bold text-yellow-700">{blog.author}</p>
                  </div>
                </div>
              )}
              
              {blog.createdAt && (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full flex items-center justify-center border border-yellow-200/50">
                    <Calendar className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Published on</p>
                    <p className="text-sm font-bold text-yellow-700">{formatDate(blog.createdAt)}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full flex items-center justify-center border border-yellow-200/50">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Reading time</p>
                  <p className="text-sm font-bold text-yellow-700">{getReadingTime(blog.content)} minutes</p>
                </div>
              </div>
            </div>

            {/* Share Button */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: blog.title,
                      url: window.location.href
                    });
                  }
                }}
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-amber-50 hover:from-yellow-100 hover:to-amber-100 text-yellow-700 px-6 py-3 rounded-xl font-semibold border border-yellow-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Share2 className="w-4 h-4 transition-transform group-hover:scale-110" />
                Share Article
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-yellow-100/50">
            <article className="prose prose-lg prose-gray max-w-none">
              <style jsx>{`
                article {
                  line-height: 1.8;
                }
                article p {
                  margin-bottom: 1.5rem;
                  color: #374151;
                  font-size: 1.125rem;
                }
                article p:first-child {
                  font-size: 1.25rem;
                  font-weight: 500;
                  color: #1f2937;
                }
                article strong {
                  color: #b45309;
                  font-weight: 700;
                }
                article em {
                  color: #d97706;
                  font-style: italic;
                }
              `}</style>
              {blog.content.split('\n').filter(line => line.trim()).map((paragraph, i) => (
                <p key={i} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </article>
          </div>

          {/* Call to Action Footer */}
          <div className="mt-16 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-yellow-100/50 max-w-3xl mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/10 via-transparent to-amber-600/10 pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4">
                  Enjoyed This Article?
                </h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Discover more insights and expert perspectives in our blog collection.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/blog"
                    className="group inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span className="relative z-10">Read More Articles</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
                  </Link>
                  <button className="group inline-flex items-center gap-2 border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300">
                    <Share2 className="w-5 h-5 transition-transform group-hover:scale-110" />
                    Share This Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}