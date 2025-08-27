"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  HardHat,
  Wrench,
  Building,
  Users,
  FileText,
  ChevronDown,
  ChevronRight,
  Ruler,
  Plug,
  Trees,
  Paintbrush,
  Flower2,
  Zap,
  Droplets,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMobileDropdownOpen(false); // Close dropdown when main menu toggles
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  // Function to check if link is active
  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Function to check if any service link is active
  const isServicesActive = () => {
    return services.some(service => pathname.startsWith(service.href));
  };

  const navItems = [
    { name: "Home", href: "/", icon: Building },
    { name: "Services", href: "/services", icon: Wrench, hasDropdown: true },
    { name: "Projects", href: "/projects", icon: HardHat },
    { name: "About", href: "/about", icon: Users },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  const services = [
    {
      name: "Renovations & Remodeling",
      icon: Ruler,
      href: "/services/renovations",
    },
    {
      name: "Electrical Services",
      icon: Zap,
      href: "/services/electrical",
    },
    {
      name: "Plumbing Services",
      icon: Droplets,
      href: "/services/plumbing",
    },
    {
      name: "Decorations & Painting",
      icon: Paintbrush,
      href: "/services/painting",
    },
    {
      name: "Gardening",
      icon: Flower2,
      href: "/services/gardening",
    },
    {
      name: "Landscaping",
      icon: Trees,
      href: "/services/landscaping",
    },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>07300825333</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@Hermeco.co.uk</span>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>7 Hill Close,London,NW2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32 lg:h-40">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.png"
                alt="Hermeco Logo"
                width={500}
                height={300}
                className="w-auto h-28 sm:h-30 lg:h-38"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.hasDropdown 
                  ? isActiveLink(item.href) || isServicesActive()
                  : isActiveLink(item.href);
                
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-300 rounded-lg ${
                        isActive
                          ? "text-yellow-600 bg-yellow-50 shadow-sm"
                          : "text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                      )}
                    </Link>

                    {/* Dropdown */}
                    {item.hasDropdown && (
                      <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-yellow-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <div className="p-4 grid gap-2">
                          {services.map((service, index) => {
                            const ServiceIcon = service.icon;
                            const isServiceActive = isActiveLink(service.href);
                            return (
                              <Link
                                key={index}
                                href={service.href}
                                className={`flex items-center gap-3 p-2 text-sm rounded-lg transition-all duration-200 ${
                                  isServiceActive
                                    ? "text-yellow-600 bg-yellow-50"
                                    : "text-gray-600 hover:text-yellow-600 hover:bg-yellow-50"
                                }`}
                              >
                                <ServiceIcon className="h-4 w-4" />
                                <span>{service.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/quote"
                className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                  isActiveLink("/quote")
                    ? "bg-gradient-to-r from-yellow-600 to-yellow-700 text-white"
                    : "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
                }`}
              >
                <FileText className="h-5 w-5" />
                <span>Free Quote</span>
              </Link>
              <button
                onClick={toggleMenu}
                className="lg:hidden p-3 rounded-lg text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 border border-gray-200 transition-all"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible overflow-hidden"
          }`}
        >
          <div className="px-4 py-6 space-y-3 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.hasDropdown 
                ? isActiveLink(item.href) || isServicesActive()
                : isActiveLink(item.href);

              return (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    // Services with dropdown button
                    <div>
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 flex-1 ${
                            isActive
                              ? "text-yellow-600 bg-yellow-50"
                              : "text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <Icon className="h-5 w-5" />
                          {item.name}
                        </Link>
                        <button
                          onClick={toggleMobileDropdown}
                          className={`p-2 rounded-lg transition-all duration-300 ${
                            mobileDropdownOpen
                              ? "text-yellow-600 bg-yellow-50"
                              : "text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
                          }`}
                        >
                          <ChevronRight 
                            className={`h-5 w-5 transition-transform duration-300 ${
                              mobileDropdownOpen ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                      </div>
                      
                      {/* Mobile Services Dropdown */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          mobileDropdownOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="ml-4 pl-4 border-l border-yellow-200 space-y-2 mt-2">
                          {services.map((service, index) => {
                            const ServiceIcon = service.icon;
                            const isServiceActive = isActiveLink(service.href);
                            return (
                              <Link
                                key={index}
                                href={service.href}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                                  isServiceActive
                                    ? "text-yellow-600 bg-yellow-50 font-medium"
                                    : "text-gray-600 hover:text-yellow-600 hover:bg-yellow-50"
                                }`}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileDropdownOpen(false);
                                }}
                              >
                                <ServiceIcon className="h-4 w-4" />
                                {service.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Regular navigation items
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                        isActive
                          ? "text-yellow-600 bg-yellow-50"
                          : "text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                href="/quote"
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105 ${
                  isActiveLink("/quote")
                    ? "bg-gradient-to-r from-yellow-600 to-yellow-700 text-white"
                    : "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <FileText className="h-5 w-5" />
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;