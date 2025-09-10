"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import {
  Phone, Mail, MapPin, Facebook, Instagram, Linkedin,
  MessageSquare, Send, ShieldCheck, Award, Users,
  CheckCircle, HardHat, Clock, Star,
} from "lucide-react";

// Interface matching HeroSection
interface FormData {
  fullName: string;
  email: string;
  telephone: string;
  service: string;
  details: string;
}

// Stats for animated counters
const stats = [
  {
    icon: HardHat,
    value: 5,
    label: "Years Experience",
    description: "5+ years of construction excellence",
  },
  {
    icon: Users,
    value: 20,
    label: "Team Members",
    description: "Skilled professionals at your service",
  },
  
  {
    icon: Award,
    value: 100,
    label: "Projects Completed",
    description: "Residential & Commercial delivery",
  },
  {
    icon: Star,
    value: 98,
    label: "Customer Satisfaction (%)",
    description: "5-Star rated by clients",
  },
];

// Contact details
const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "07300 825333",
    href: "tel:07300825333",
    description: "24/7 Emergency Support"
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@Hermeco.co.uk",
    href: "mailto:info@Hermeco.co.uk",
    description: "Professional Enquiries"
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: "7 Hill Close, London, NW2",
    href: "https://goo.gl/maps/office-location",
    description: "Licensed & Registered"
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

// Services matching HeroSection
const services = [
  "Complete Renovation",
  "Electrical Services",
  "Plumbing Services",
  "Landscaping",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Other",
];

// Animated Counter
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

  return <span>{count}{value > 20 ? "+" : ""}</span>;
};

const ContactUs = () => {
  // Updated form data structure matching HeroSection
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    telephone: "",
    service: "",
    details: "",
  });
  
  const [loading, setLoading] = useState(false);

  // Updated input change handler matching HeroSection
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Updated submit handler matching HeroSection
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: { message?: string } = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      toast.success("Booking created successfully!");
      setFormData({ fullName: "", email: "", telephone: "", service: "", details: "" });
    } catch (err: unknown) {
      console.error(err);

      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("Failed to create booking");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-amber-50 to-gray-100 min-h-screen overflow-hidden">
      <Toaster position="top-right" />
      {/* Professional header pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-700"></div>
      {/* SVG subtle pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-3 bg-white border border-yellow-200 px-6 py-3 rounded-lg shadow-sm mb-6"
          >
            <HardHat className="w-5 h-5 text-yellow-700" />
            <span className="text-yellow-800 font-semibold">Professional Construction Services</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Contact <span className="bg-gradient-to-r from-yellow-500 to-amber-700 bg-clip-text text-transparent">Hermeco</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Get in touch with London&apos;s most trusted construction professionals. We deliver excellence in every project with uncompromising quality and reliability.
          </p>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-yellow-100 hover:shadow-2xl hover:bg-white transition-all duration-500 text-center relative"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: idx * 0.18 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="mb-4">
                  <stat.icon className="h-12 w-12 text-yellow-600 mx-auto group-hover:text-amber-600 transition-colors duration-300" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-2">
                  <Counter value={stat.value} />
                </h3>
                <p className="text-yellow-800 font-semibold text-lg mb-2">{stat.label}</p>
                <p className="text-gray-500 text-sm">{stat.description}</p>
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-yellow-400/20 via-transparent to-amber-600/20 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-yellow-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                Get in Touch
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl hover:bg-yellow-50 transition-colors duration-200">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-yellow-700" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.label}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-gray-700 hover:text-yellow-700 transition-colors duration-200 font-medium" aria-label={item.label}>
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-700 font-medium">{item.value}</span>
                      )}
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Business Hours */}
              <div className="mt-8 pt-6 border-t border-yellow-100">
                <h4 className="font-semibold text-gray-900 mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-900 font-medium">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-900 font-medium">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-900 font-medium">Emergency Only</span>
                  </div>
                </div>
              </div>
              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-yellow-100">
                <h4 className="font-semibold text-gray-900 mb-4">Connect With Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a key={social.label} href={social.href} className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all duration-300" aria-label={social.label} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Updated to match HeroSection */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-2"
          >
            <form className="bg-white rounded-2xl p-8 shadow-xl border border-yellow-200" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                Request a Professional Quote
              </h2>
              <p className="text-gray-700 mb-8">Fill out the form below and our team will provide you with a detailed, no-obligation quote within 24 hours.</p>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200 bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200 bg-white"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      required
                      placeholder="Your Phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200 bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700">
                      Service Type *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200 bg-white appearance-none"
                    >
                      <option value="">Select Service</option>
                      {services.map((s, i) => (
                        <option key={i} value={s} className="bg-gray-800 text-white">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="details" className="block text-sm font-semibold text-gray-700">
                    Project Details *
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200 bg-white resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-yellow-500/50 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Booking...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <Send className="w-5 h-5" />
                      Book Now
                    </div>
                  )}
                </button>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="text-yellow-800 font-semibold mb-1">Your Privacy is Protected</p>
                      <p className="text-yellow-700">We respond within 24 hours. Your information is confidential and will never be shared with third parties.</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our address </h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-yellow-200">
            <iframe
              title="Hermeco Professional Office Location"
              src="https://www.google.com/maps?q=7+Hill+Close,+London,+NW2&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-amber-700 rounded-2xl p-12 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
              Join over 500 satisfied clients who trust Hermeco for their construction needs.
              Get your professional quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07300825333"
                className="inline-flex items-center gap-3 bg-white text-yellow-700 hover:bg-yellow-200 px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <Phone className="w-6 h-6" />
                Call 07300 825333
              </a>
              <a
                href="mailto:info@Hermeco.co.uk"
                className="inline-flex items-center gap-3 bg-yellow-700 hover:bg-yellow-800 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <Mail className="w-6 h-6" />
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;