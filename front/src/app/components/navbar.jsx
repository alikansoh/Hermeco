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
  ChevronDown,
  ChevronRight,
  Ruler,
  Zap,
  BookOpen,
  Droplets,
  Paintbrush,
  Flower2,
  HelpCircle,
  Trees,
} from "lucide-react";

const CONTACT_BAR_HEIGHT = 40; // px, adjust to match your actual py-2 + text size

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // Fix hydration mismatch
  const pathname = usePathname();

  useEffect(() => {
    setHasMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileDropdownOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMobileDropdownOpen(false);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  const isActiveLink = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isServicesActive = () => {
    return services.some((service) => pathname.startsWith(service.href));
  };

  const navItems = [
    { name: "Home", href: "/", icon: Building },
    { name: "Services", href: "/services", icon: Wrench, hasDropdown: true },
    { name: "Projects", href: "/projects", icon: HardHat },
    { name: "About", href: "/about", icon: Users },
    { name: "Contact", href: "/contact", icon: Phone },
    { name: "FAQ", href: "/faq", icon: HelpCircle },
    { name: "Blog", href: "/blog", icon:BookOpen },

  ];

  const services = [
    { name: "Renovations & Remodeling", icon: Ruler, href: "/services/renovations" },
    { name: "Electrical Services", icon: Zap, href: "/services/electrical" },
    { name: "Plumbing Services", icon: Droplets, href: "/services/plumbing" },
    { name: "Decorations & Painting", icon: Paintbrush, href: "/services/painting" },
    { name: "Gardening", icon: Flower2, href: "/services/gardening" },
    { name: "Landscaping", icon: Trees, href: "/services/landscaping" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div
        className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-2 px-4 text-sm fixed w-full top-0 left-0 z-50"
        style={hasMounted ? { height: `${CONTACT_BAR_HEIGHT}px`, minHeight: `${CONTACT_BAR_HEIGHT}px` } : {}}
      >
        <div className={`max-w-7xl mx-auto flex flex-wrap items-center justify-between${hasMounted ? " h-full" : ""}`}>
          <div className={`flex items-center gap-6${hasMounted ? " h-full" : ""}`}>
            <Link
              href="tel:07300825333"
              className="flex items-center gap-2 hover:underline"
              prefetch={false}
            >
              <Phone className="h-4 w-4" />
              <span>07300825333</span>
            </Link>
            <Link
              href="mailto:info@Hermeco.co.uk"
              className="flex items-center gap-2 hover:underline"
              prefetch={false}
            >
              <Mail className="h-4 w-4" />
              <span>info@Hermeco.co.uk</span>
            </Link>
            <div className="hidden lg:flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>7 Hill Close,London,NW2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed w-full left-0 z-50 transition-all duration-500 ${
          hasMounted && isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-white shadow-md"
        }`}
        style={hasMounted ? { top: `${CONTACT_BAR_HEIGHT}px` } : {}}
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

                    {/* Desktop Dropdown */}
                    {item.hasDropdown && (
                      <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-yellow-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-60">
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

            {/* Mobile Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleMenu}
                className="lg:hidden p-3 rounded-lg text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 border border-gray-200 transition-all z-50 relative"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {hasMounted && isOpen && (
          <div className="lg:hidden absolute left-0 right-0 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 shadow-xl z-40 transition-all duration-300">
            <div className="px-4 py-6 space-y-3 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.hasDropdown
                  ? isActiveLink(item.href) || isServicesActive()
                  : isActiveLink(item.href);

                return (
                  <div key={item.name}>
                    {item.hasDropdown ? (
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

                        {/* Mobile Dropdown */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            mobileDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
            </div>
            <div
              className="absolute z-30"
              onClick={() => setIsOpen(false)}
            />
          </div>
        )}
      </nav>
      {/* Spacer to prevent content being hidden behind fixed nav and contact bar */}
      <div style={{ height: `${CONTACT_BAR_HEIGHT + 128}px` }} className="w-full"></div>
    </>
  );
};

export default Navbar;