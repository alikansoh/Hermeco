"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Calendar,
  Award,
  Users,
  Wrench,
  Clock,
  User,
  Mail,
  MessageSquare,
  MapPin,
  Send,
} from "lucide-react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const features = [
    "Licensed & Insured Professionals",
    "20+ Years Experience",
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Add your form submission logic
  };

  return (
    <section className="relative  flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg" // Replace with your hero image path
          alt="Professional construction and renovation services"
          fill
          className="object-cover"
          priority
        />
        {/* Enhanced Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-8">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 drop-shadow-lg">
                  Dream Home
                </span>
                Into Reality
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl font-light">
                From complete renovations to specialized electrical, plumbing,
                and landscaping services. We bring expertise, quality, and
                reliability to every project.
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-gray-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/Projects"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 hover:from-yellow-600 hover:to-amber-700 group"
              >
                Our Work
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              {/* Direct call button */}
              <a
                href="tel:+447300825333" 
                className="inline-flex items-center justify-center gap-3 bg-white/15 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 group"
              >
                <Phone className="h-6 w-6 group-hover:rotate-12 transition-transform duration-200" />
                Call Now
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:justify-self-end w-full max-w-lg hidden lg:block">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Get Your Quote
                </h2>
                <p className="text-gray-300">Tell us about your project</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                {/* Email Field */}

                {/* Phone Field */}
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Service Selection */}
                <div className="relative">
                  <Wrench className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="" className="bg-gray-800">
                      Select Service
                    </option>
                    {services.map((service, index) => (
                      <option
                        key={index}
                        value={service}
                        className="bg-gray-800 text-white"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400 h-5 w-5" />
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 hover:from-yellow-600 hover:to-amber-700 group flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>

              {/* Trust Badge */}
              <div className="text-center mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-gray-400"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
