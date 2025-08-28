"use client";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Clock,
  Award,
  Leaf,
  ThumbsUp,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Insured",
    description:
      "Certified London builders and contractors, complying with all UK building regulations and safety standards for complete peace of mind.",
  },
  {
    icon: Award,
    title: "Proven Expertise",
    description:
      "With over 5 years of construction, renovation, and landscaping experience, we deliver results that enhance both residential and commercial properties.",
  },
  {
    icon: Clock,
    title: "On-Time, On-Budget",
    description:
      "Projects delivered on schedule and within budget with no hidden costs — ensuring a smooth and stress-free construction process.",
  },
  {
    icon: Users,
    title: "200+ Happy Clients",
    description:
      "Our satisfied clients across London trust us for reliable workmanship, outstanding service, and long-lasting results.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "We use eco-friendly materials and modern landscaping techniques, creating greener, more sustainable environments across Greater London.",
  },
  {
    icon: ThumbsUp,
    title: "Tailored Solutions",
    description:
      "From bespoke renovations to complete property development, every project is customised to match your vision and lifestyle.",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const WhyChooseUs = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 md:py-32 overflow-hidden"
      aria-labelledby="why-choose-us-heading"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-20 w-80 h-80 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            id="why-choose-us-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 relative inline-block"
          >
            Why Choose Us
            <span className="block h-1 w-24 mx-auto mt-3 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover why property owners across London trust us for{" "}
            <strong className="text-gray-900">
              construction, renovation, landscaping, and property development
            </strong>{" "}
            projects that are delivered with precision, quality, and care.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative bg-white shadow-xl rounded-3xl p-10 border border-yellow-100 hover:border-amber-300 transition-all duration-500 group overflow-hidden"
              >
                {/* Gradient hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                {/* Number Badge */}
                <div className="absolute top-6 right-6 text-5xl font-extrabold text-yellow-100 group-hover:text-yellow-300 transition-colors duration-500">
                  {index + 1}
                </div>

                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-yellow-100 to-amber-100 mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Divider + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full mb-10"></div>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-12 py-5 rounded-2xl font-bold shadow-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-300"
            aria-label="Request your free construction, renovation and landscaping quote in London"
          >
            Request Your Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
