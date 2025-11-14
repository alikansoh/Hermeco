"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle, Phone, Wrench, MessageSquare, Send, User, X } from "lucide-react";
import Image from "next/image";

interface FormData {
  fullName: string;
  email: string;
  telephone: string;
  service: string;
  details: string;
}

const HeroSection = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    telephone: "",
    service: "",
    details: "",
  });

  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    "Licensed & Insured Professionals",
    "5+ Years Experience",
    "Professional Consultations",
    "Emergency Services Available",
  ];

  const services = [
    "Complete Renovation",
    "Electrical Services",
    "Plumbing Services",
    "Landscaping",
    "Kitchen Remodeling",
    "Bathroom Remodeling",
    "Other",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.telephone || !formData.service) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: { message?: string } = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      alert("Booking created successfully!");
      setFormData({ fullName: "", email: "", telephone: "", service: "", details: "" });
      setIsModalOpen(false);
    } catch (err: unknown) {
      console.error(err);

      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Failed to create booking");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Professional construction and renovation services"
            className="w-full h-full object-cover"
            fill
            
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="text-white space-y-8">
              <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 drop-shadow-lg">
                  Dream Home
                </span>
                Into Reality
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl font-light">
                From complete renovations to specialized electrical, plumbing, and landscaping services. We bring expertise, quality, and reliability to every project.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 hover:from-yellow-600 hover:to-amber-700 group"
                >
                  Our Work
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <a
                  href="tel:+447300825333"
                  className="inline-flex items-center justify-center gap-3 bg-white/15 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 group"
                >
                  <Phone className="h-6 w-6 group-hover:rotate-12 transition-transform duration-200" />
                  Call Now
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="lg:hidden inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:to-orange-700 group"
                >
                  get free quote
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* Right Column - Booking Form (Large Screen Only) */}
            <div className="lg:justify-self-end w-full max-w-lg hidden lg:block">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">get your free quote</h2>
                  <p className="text-gray-300">Free quote take 1 minute </p>
                </div>

                <div className="space-y-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Your Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
                    />
                  </div>

                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="tel"
                      name="telephone"
                      placeholder="Your Phone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
                    />
                  </div>

                  <div className="relative">
                    <Wrench className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 appearance-none"
                    >
                      <option value="">Select Service</option>
                      {services.map((s, i) => (
                        <option key={i} value={s} className="bg-gray-800 text-white">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-gray-400 h-5 w-5" />
                    <textarea
                      name="details"
                      placeholder="Tell us about your project..."
                      value={formData.details}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group flex items-center justify-center gap-3"
                  >
                    {loading ? "Booking..." : "get free quote"}
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Mobile */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/20 rounded-3xl shadow-2xl animate-slideUp max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors duration-200 bg-white/10 hover:bg-white/20 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-6 sm:p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">get your free quote</h2>
                <p className="text-gray-300">Free quote take 1 minute</p>
              </div>

              <div className="space-y-5">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-400 h-5 w-5 z-10" />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-400 h-5 w-5 z-10" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-400 h-5 w-5 z-10" />
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Your Phone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
                  />
                </div>

                <div className="relative">
                  <Wrench className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-400 h-5 w-5 z-10" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 appearance-none"
                  >
                    <option value="">Select Service</option>
                    {services.map((s, i) => (
                      <option key={i} value={s} className="bg-gray-800 text-white">{s}</option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-yellow-400 h-5 w-5 z-10" />
                  <textarea
                    name="details"
                    placeholder="Tell us about your project..."
                    value={formData.details}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Booking..." : "get free quote"}
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default HeroSection;