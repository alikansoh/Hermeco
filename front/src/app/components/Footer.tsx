"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Home,
  FolderOpen,
  Users,
  MessageSquare,
  FileText,
  Shield,
  HelpCircle,
  Hammer,
  Zap,
  Droplet,
  Paintbrush,
  TreeDeciduous,
  Flower2,
  Calculator,
  ScrollText,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white via-gray-50 to-yellow-50 text-gray-700 pt-20 pb-10 border-t-4 border-yellow-500">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="Hermeco Logo"
              width={200}
              height={120}
              className="h-28 w-auto"
              priority
            />
          </Link>
          <p className="text-sm leading-relaxed text-gray-600">
            Hermeco is a trusted construction & renovation company in London,
            delivering top-quality building services with reliability, safety,
            and excellence at the core.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-yellow-600 font-semibold text-lg mb-4 border-b-2 border-yellow-500 inline-block pb-1">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services/renovations" className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                <Hammer className="h-4 w-4 text-yellow-500" /> Renovations & Remodeling
              </Link>
            </li>
            <li>
              <Link href="/services/electrical" className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                <Zap className="h-4 w-4 text-yellow-500" /> Electrical Services
              </Link>
            </li>
            <li>
              <Link href="/services/plumbing" className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                <Droplet className="h-4 w-4 text-yellow-500" /> Plumbing Services
              </Link>
            </li>
            <li>
              <Link href="/services/painting" className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                <Paintbrush className="h-4 w-4 text-yellow-500" /> Decorations & Painting
              </Link>
            </li>
            <li>
              <Link href="/services/gardening" className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                <TreeDeciduous className="h-4 w-4 text-yellow-500" /> Gardening
              </Link>
            </li>
            <li>
              <Link href="/services/landscaping" className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                <Flower2 className="h-4 w-4 text-yellow-500" /> Landscaping
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-600 font-semibold text-lg mb-4 border-b-2 border-yellow-500 inline-block pb-1">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                <Home className="h-4 w-4 text-yellow-500" /> Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                <FolderOpen className="h-4 w-4 text-yellow-500" /> Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                <Users className="h-4 w-4 text-yellow-500" /> About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                <MessageSquare className="h-4 w-4 text-yellow-500" /> Contact
              </Link>
            </li>
            <li>
              <Link href="/quote" className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                <Calculator className="h-4 w-4 text-yellow-500" /> Free Quote
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                <Shield className="h-4 w-4 text-yellow-500" /> Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                <ScrollText className="h-4 w-4 text-yellow-500" /> Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/faq" className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                <HelpCircle className="h-4 w-4 text-yellow-500" /> FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-yellow-600 font-semibold text-lg mb-4 border-b-2 border-yellow-500 inline-block pb-1">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-yellow-600" /> 07300825333</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-yellow-600" /> info@Hermeco.co.uk</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-yellow-600" /> 7 Hill Close, London, NW2</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="hover:text-yellow-600 transition-colors"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-yellow-600 transition-colors"><Instagram className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-yellow-600 transition-colors"><Linkedin className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-yellow-500 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hermeco Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;