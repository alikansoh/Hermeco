"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  UserCheck,
  Award,
  CheckCircle,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Star,
  Users,
  User,
} from "lucide-react";

// Company values
const values = [
  {
    icon: CheckCircle,
    title: "Integrity",
    desc: "Honest, transparent communication and ethical practices on every project.",
  },
  {
    icon: HeartHandshake,
    title: "Collaboration",
    desc: "We build strong partnerships—with clients, communities, and each other.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Constantly improving with modern techniques, green solutions, and creative problem solving.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Safety",
    desc: "Meticulous attention to detail and rigorous safety in all our work.",
  },
  {
    icon: Star,
    title: "Customer Satisfaction",
    desc: "Delivering exceptional results and experiences that exceed expectations.",
  },
  {
    icon: Award,
    title: "Professionalism",
    desc: "Upholding the highest standards in conduct, craftsmanship, and client care.",
  },
  {
    icon: Users,
    title: "Community Commitment",
    desc: "Supporting local communities through sustainable building and outreach.",
  },
];

// Core team members (images empty, show icon if not provided)
const team = [
  { name: "Sarah Thompson", role: "Lead Architect", image: "" },
  { name: "James Patel", role: "Project Manager", image: "" },
  { name: "Emily Clark", role: "Landscape Designer", image: "" },
  { name: "Daniel Lee", role: "Senior Builder", image: "" },
];

// SEO meta content (extended keywords)


const AboutUsVisionMission = () => (
  <section
    className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-10 md:py-24 overflow-x-hidden"
    aria-label="About Us Section - Vision, Mission, Values, Team"
  >
    {/* SEO: Meta tags for enhanced search engine optimization */}
   

    {/* Decorative Background */}
    <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
          <span className="bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-lg">
            About Us
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
          We’re more than builders—we’re partners in shaping your vision.<br />
          Our London-based team delivers exceptional spaces through innovation, collaboration, and a relentless commitment to excellence.<br />
          From architectural design and property refurbishment to eco-friendly landscaping and extensions, we specialize in transforming homes and commercial spaces across London and the surrounding counties. As accredited, family-run builders, we combine modern techniques with trusted values to guarantee satisfaction and sustainable results.
        </p>
        <div className="flex items-center justify-center gap-6 mt-8">
          <Users className="h-8 w-8 text-yellow-500" />
          <span className="text-gray-700 font-semibold">5+ Years Experience</span>
          <Star className="h-8 w-8 text-yellow-600" />
          <span className="text-gray-700 font-semibold">Award-Winning Projects</span>
          <ShieldCheck className="h-8 w-8 text-amber-500" />
          <span className="text-gray-700 font-semibold">Fully Insured & Guaranteed</span>
        </div>
      </motion.div>

      {/* VISION / MISSION / VALUES as paragraphs */}
      <div className="flex flex-col gap-12 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/95 rounded-2xl shadow-xl px-8 py-10 border-l-4 border-yellow-400"
          aria-label="Vision"
        >
          <div className="flex items-center gap-4 mb-3">
            <Award className="h-10 w-10 text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
          </div>
          <p className="text-gray-700 text-lg ml-14">
            To elevate London’s homes, gardens, and commercial spaces, creating lasting value for families, communities, and businesses by blending tradition with innovation. Our vision is to lead the industry in sustainable building, architectural excellence, and community engagement—making London a greener, more beautiful place to live and work.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/95 rounded-2xl shadow-xl px-8 py-10 border-l-4 border-amber-500"
          aria-label="Mission"
        >
          <div className="flex items-center gap-4 mb-3">
            <CheckCircle className="h-10 w-10 text-amber-500" />
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-700 text-lg ml-14">
            To deliver safe, beautiful, and sustainable spaces—on time and on budget—through teamwork, expertise, and genuine care. We champion eco-friendly practices, transparent communication, and innovative design at every step. Whether it’s a kitchen renovation, loft conversion, or large-scale landscaping, our mission is to exceed expectations with guaranteed workmanship and exceptional customer service.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/95 rounded-2xl shadow-xl px-8 py-10 border-l-4 border-yellow-600"
          aria-label="Values"
        >
          <div className="flex items-center gap-4 mb-3">
            <HeartHandshake className="h-10 w-10 text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
          </div>
          <div className="space-y-6 ml-14">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-3">
                <v.icon className="h-6 w-6 text-yellow-500 shrink-0 mt-1" />
                <div>
                  <span className="text-gray-800 font-semibold">{v.title}:</span>
                  <span className="text-gray-600 ml-2">{v.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* TEAM - only name and occupation, icon if no image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-28"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.13 }}
              className="flex flex-col items-center bg-white rounded-xl shadow-lg border border-yellow-100 p-7"
              aria-label={`Team member: ${member.name}`}
            >
              {/* Show icon if no image */}
              {member.image ? (
                <div className="rounded-full overflow-hidden w-20 h-20 mb-4 border-4 border-yellow-100 relative flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                    priority={i === 0}
                  />
                </div>
              ) : (
                <User className="w-16 h-16 text-yellow-500 mb-4" />
              )}
              <span className="font-bold text-gray-900 text-lg text-center">{member.name}</span>
              <span className="text-yellow-700 font-medium mt-2 text-center">{member.role}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA: Start Project */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl border border-yellow-200 py-14 px-10 mx-auto max-w-3xl text-center shadow-lg"
        aria-label="Contact Call To Action"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Start Your Project With Us
        </h3>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Let our experienced team bring your vision to life—request a free quote and expert advice today! We respond within 24 hours.<br />
          Whether you’re planning a full property renovation, bespoke landscaping, or a new extension, trust our licensed, insured, and award-winning builders to deliver results that last.
        </p>
        <a
          href="/contact"
          className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-10 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 inline-block hover:scale-105 hover:shadow-amber-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          aria-label="Start your project with us"
        >
          Get Free Quote
        </a>
        <span className="block text-gray-500 mt-4 text-sm">
          Or call us directly: <a href="tel:+447300 825333" className="underline hover:text-yellow-600">07300 825333</a>
        </span>
      </motion.div>

      {/* FAQ for SEO & UX */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-20 max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8"
        aria-label="Frequently Asked Questions"
      >
        <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
          Frequently Asked Questions
        </h4>
        <ul className="space-y-5">
          <li>
            <span className="font-semibold text-yellow-700">What areas do you serve?</span>
            <br />
            <span className="text-gray-700">We proudly deliver projects throughout London, Greater London, and surrounding counties including Surrey, Kent, and Essex.</span>
          </li>
          <li>
            <span className="font-semibold text-yellow-700">Are your services insured and guaranteed?</span>
            <br />
            <span className="text-gray-700">Yes, we are fully insured and all our work comes with a satisfaction guarantee. We adhere to strict health & safety standards and provide warranties for peace of mind.</span>
          </li>
          <li>
            <span className="font-semibold text-yellow-700">Do you offer sustainable and eco-friendly solutions?</span>
            <br />
            <span className="text-gray-700">Absolutely! Sustainability is core to our values, and we use green materials, energy-efficient techniques, and promote biodiversity in landscaping and construction wherever possible.</span>
          </li>
          <li>
            <span className="font-semibold text-yellow-700">Can you help with architectural planning and permissions?</span>
            <br />
            <span className="text-gray-700">Yes, our team includes experienced architects and planners who can manage designs, planning permissions, and building regulations for all types of projects.</span>
          </li>
          <li>
            <span className="font-semibold text-yellow-700">Do you handle both residential and commercial projects?</span>
            <br />
            <span className="text-gray-700">Yes, we are specialists in residential and commercial builds, including offices, retail spaces, and multi-unit developments.</span>
          </li>
        </ul>
      </motion.div>
    </div>
  </section>
);

export default AboutUsVisionMission;