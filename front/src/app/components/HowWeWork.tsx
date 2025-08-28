"use client";

import { motion } from "framer-motion";
import { Clipboard, Ruler, Hammer, Key } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: <Clipboard className="w-10 h-10 text-white" />,
    title: "Initial Consultation",
    description:
      "We begin with a comprehensive consultation to understand your requirements, assess your property, and provide you with a detailed, transparent quotation.",
    step: "01",
  },
  {
    icon: <Ruler className="w-10 h-10 text-white" />,
    title: "Design & Planning",
    description:
      "Our experienced team develops detailed architectural plans, selects premium materials, and establishes a precise project timeline tailored to your specifications.",
    step: "02",
  },
  {
    icon: <Hammer className="w-10 h-10 text-white" />,
    title: "Professional Execution",
    description:
      "We execute your project with meticulous attention to detail, maintaining the highest standards of craftsmanship while providing regular progress updates.",
    step: "03",
  },
  {
    icon: <Key className="w-10 h-10 text-white" />,
    title: "Project Completion",
    description:
      "Following thorough quality inspections and final approvals, we deliver your completed project, ready for immediate use and built to last for generations.",
    step: "04",
  },
];

export default function ProcessSection() {
  return (
    <section
      className="py-28 relative bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100"
      id="process"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Our Professional <span className="text-yellow-600">Process</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-yellow-500 to-amber-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With decades of experience in construction excellence, our
            structured methodology guarantees efficiency, quality, and lasting
            results for every project.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-12 top-0 w-1 h-full bg-gradient-to-b from-yellow-500 via-amber-500 to-yellow-600 rounded-full shadow-md"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 relative"
              >
                {/* Icon */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-tr from-yellow-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 hover:scale-110 hover:shadow-yellow-400/40">
                    {step.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-2xl shadow-md border border-gray-200 p-8 hover:shadow-xl hover:shadow-amber-100/60 transition duration-300">
                    <div className="flex items-center gap-4 mb-5">
                      <span className="text-5xl font-extrabold bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent leading-none">
                        {step.step}
                      </span>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <div className="w-14 h-1 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


{/* CTA */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
  className="relative text-center mt-28 rounded-2xl overflow-hidden"
>
  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-amber-600 to-yellow-700 opacity-95"></div>

  {/* Content */}
  <div className="relative z-10 px-6 py-16 lg:py-20 text-white">
    <h3 className="text-3xl lg:text-4xl font-extrabold mb-4 drop-shadow-md">
      Ready to Begin Your Project?
    </h3>
    <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
      Contact us today for your complimentary consultation and discover how our 
      proven process can bring your construction vision to life.
    </p>
    <Link href="/contact">
      <button className="bg-white text-yellow-700 font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
        Schedule Consultation
      </button>
    </Link>
  </div>
</motion.div>

      </div>
    </section>
  );
}
