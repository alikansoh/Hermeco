"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import FAQItem from "./FAQItem";
import {
  Flower2,
  Trees,
  Wrench,
  Award,
  Shield,
  Star,
  Phone,
  Clock,
  Calculator,
  Lightbulb,
  Ruler,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const GardeningPage = () => {
  const gardeningServices = [
    {
      title: "Garden Maintenance & Care",
      description:
        "Keep your London garden pristine year-round with our expert maintenance services, including lawn care, pruning, and seasonal planting.",
      features: [
        "Lawn mowing & edging",
        "Hedge trimming & shaping",
        "Weeding & soil care",
        "Planting seasonal flowers",
        "Pest & disease management",
      ],
      icon: Flower2,
    },
    {
      title: "Landscape Design & Construction",
      description:
        "Transform outdoor spaces with bespoke garden designs, patios, decking, pathways, and water features for aesthetic and functional appeal.",
      features: [
        "Custom garden layouts",
        "Decking & patio installation",
        "Pathways & paving solutions",
        "Water features & ponds",
        "Outdoor lighting design",
      ],
      icon: Trees,
    },
    {
      title: "Garden Renovations",
      description:
        "Upgrade tired or outdated gardens into stunning outdoor retreats with full-scale renovations and modern landscaping solutions.",
      features: [
        "Garden clearing & preparation",
        "Soil improvement & drainage",
        "Planting & tree work",
        "Garden structures installation",
        "Seasonal planting & styling",
      ],
      icon: Wrench,
    },
  ];

  const gardeningProcess = [
    {
      step: "01",
      title: "Free Consultation",
      description:
        "We assess your garden needs, discuss ideas, and provide expert recommendations.",
      icon: Lightbulb,
    },
    {
      step: "02",
      title: "Custom Design & Planning",
      description:
        "Tailored garden plans, 3D visualizations, and planting schemes.",
      icon: Ruler,
    },
    {
      step: "03",
      title: "Transparent Quote",
      description: "Detailed breakdown of costs with no hidden charges.",
      icon: Calculator,
    },
    {
      step: "04",
      title: "Professional Execution",
      description:
        "Our expert gardeners and landscapers transform your vision into reality.",
      icon: Wrench,
    },
  ];

  const otherBenefits = [
    {
      icon: Shield,
      title: "Fully Insured & Licensed",
      description: "Peace of mind with all work completed safely and legally.",
      color: "from-green-400 to-green-500",
    },
    {
      icon: Award,
      title: "Experienced London Gardeners",
      description:
        "Over 5 years of professional landscaping experience across London.",
      color: "from-amber-400 to-yellow-500",
    },
    {
      icon: Star,
      title: "Bespoke Garden Solutions",
      description: "Customized landscaping, planting, and maintenance plans.",
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: Clock,
      title: "Timely & Reliable",
      description: "Projects completed on schedule with minimal disruption.",
      color: "from-purple-400 to-purple-500",
    },
    {
      icon: Calculator,
      title: "Transparent Pricing",
      description:
        "Clear quotes and no surprise costs for your garden project.",
      color: "from-amber-400 to-yellow-500",
    },
  ];

  const serviceAreas = [
    "Central London",
    "North London",
    "South London",
    "East London",
    "West London",
    "Camden",
    "Islington",
    "Hackney",
    "Greenwich",
    "Wandsworth",
    "Hammersmith",
    "Kensington",
    "Westminster",
    "Tower Hamlets",
    "Southwark",
    "Lambeth",
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/gardening.jpg"
          alt="Professional gardening and landscaping services in London"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 leading-tight">
            Expert
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-lime-400 animate-gradient-x drop-shadow-lg">
              Gardening
            </span>
            & Landscaping
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-200 leading-relaxed mb-6 md:mb-8 font-light">
            Premium garden maintenance, landscaping, and design services across
            London. From
            <span className="text-green-400 font-semibold"> lawn care</span> to
            <span className="text-green-400 font-semibold">
              {" "}
              bespoke garden design
            </span>{" "}
            and
            <span className="text-green-400 font-semibold">
              {" "}
              outdoor renovations
            </span>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center items-center mb-8 md:mb-12 px-4">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-green-500 via-green-600 to-lime-500 text-white px-6 sm:px-7 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 rounded-2xl font-bold text-sm sm:text-base md:text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-lime-600 flex items-center gap-2 md:gap-3 w-full sm:w-auto justify-center"
            >
              <span className="hidden md:inline">Get Free Gardening Quote</span>
              <span className="md:hidden">Free Quote</span>
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="tel:+447300825333"
              className="group bg-white/15 backdrop-blur-md text-white px-6 sm:px-7 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 rounded-2xl font-bold text-sm sm:text-base md:text-lg border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 flex items-center gap-2 md:gap-3 w-full sm:w-auto justify-center"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5 group-hover:rotate-12 transition-transform duration-200" />
              Call: 073 0082 5333
            </Link>
          </div>
        </div>
      </div>

      {/* Gardening Services Section (Paragraph Style) */}
      <div className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 md:mb-8 leading-tight">
              <span className="block text-gray-900">Premium</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-600 to-lime-400 drop-shadow-sm">
                Gardening Services
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From{" "}
              <span className="font-semibold text-green-600">
                garden maintenance
              </span>{" "}
              to
              <span className="font-semibold text-gray-900">
                {" "}
                bespoke landscaping
              </span>
              , we bring your outdoor spaces to life.
            </p>
          </div>

          <div className="space-y-12">
            {gardeningServices.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row items-start gap-6 md:gap-8"
                >
                  <div className="flex-shrink-0 h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-r from-green-500 via-green-600 to-lime-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <ServiceIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-lg mb-3">
                      {service.description}
                    </p>
                    <ul className="list-none space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gardening Process Section */}
<div className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 sm:mb-12 md:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900">
        Our Proven
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-600 to-lime-400">
          {" "}Gardening Process
        </span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        A structured approach to ensure every London garden project is executed flawlessly.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {gardeningProcess.map((step, idx) => {
        const StepIcon = step.icon;
        return (
          <div
            key={idx}
            className="flex flex-col items-center text-center group transform transition-all duration-500 hover:scale-105"
          >
            <div className="relative mb-4 sm:mb-6 md:mb-8">
              <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 mx-auto rounded-3xl bg-gradient-to-r from-green-500 via-green-600 to-lime-500 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl">
                <StepIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full bg-white border-4 border-green-500 flex items-center justify-center">
                <span className="text-green-600 font-bold text-xs sm:text-sm md:text-base">
                  {step.step}
                </span>
              </div>
            </div>
            <h3 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 md:mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
              {step.title}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              {step.description}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-green-50 via-lime-50 to-green-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-900">
              Why Choose Hermeco for Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-600 to-lime-400">
                {" "}
                London Garden
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {otherBenefits.map((benefit, i) => {
              const BenefitIcon = benefit.icon;
              return (
                <div
                  key={i}
                  className="text-center group px-4 md:px-2 transform transition-all duration-500 hover:scale-105"
                >
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div
                      className={`h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-2xl`}
                    >
                      <BenefitIcon className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-500 via-green-600 to-lime-500 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8">
            Ready to Transform Your Garden?
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your free consultation today. Our expert gardeners will plan,
            design, and maintain your dream outdoor space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center max-w-lg sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="group bg-white text-green-600 px-8 md:px-10 lg:px-12 py-4 md:py-5 rounded-2xl font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3 justify-center w-full sm:w-auto"
            >
              <Calculator className="h-5 w-5 md:h-6 md:w-6 group-hover:rotate-12 transition-transform duration-200" />
              Get Free Gardening Quote
            </Link>

            <Link
              href="tel:+447300825333"
              className="group bg-white/10 backdrop-blur-md text-white px-8 md:px-10 lg:px-12 py-4 md:py-5 rounded-2xl font-bold text-sm sm:text-base md:text-lg lg:text-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 justify-center w-full sm:w-auto"
            >
              <Phone className="h-5 w-5 md:h-6 md:w-6 rotate-0 group-hover:rotate-12 transition-transform duration-200" />
              Call Us: 073 0082 5333
            </Link>
          </div>
        </div>
      </div>

      {/* Service Areas Section */}
      <div className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Gardening Services Across London
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
            We proudly provide premium gardening and landscaping services
            throughout all major London areas.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 text-center">
            {serviceAreas.map((area, i) => (
              <div
                key={i}
                className="bg-white rounded-xl py-3 md:py-4 shadow hover:shadow-lg transition-all duration-300 text-gray-800 font-medium text-sm md:text-base"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* FAQs Section */}
      <div className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-gray-900">
              Frequently Asked
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-600 to-lime-400">
                {" "}
                Gardening Questions
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about professional garden care,
              maintenance, and improvement across London.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What gardening services do you offer in London?",
                answer:
                  "We provide complete garden maintenance, planting seasonal flowers, lawn care, hedge trimming, tree pruning, soil care, and pest management. Our team can also create bespoke garden designs tailored to your space.",
              },
              {
                question: "How often should I maintain my garden?",
                answer:
                  "We recommend regular maintenance at least every 2-4 weeks during the growing season to keep lawns, plants, and hedges healthy. Seasonal visits for pruning, planting, and soil improvement are also important.",
              },
              {
                question:
                  "Do you offer organic or eco-friendly gardening options?",
                answer:
                  "Yes! We prioritize eco-friendly gardening practices, using organic fertilizers, sustainable pest management, and water-efficient planting to keep your garden healthy and environmentally safe.",
              },
              {
                question:
                  "Can you help with garden preparation for seasonal planting?",
                answer:
                  "Absolutely. We prepare soil, plant seasonal flowers, shrubs, and vegetables, and provide expert guidance to ensure your garden thrives throughout the year.",
              },
              {
                question: "Are your gardeners insured and licensed?",
                answer:
                  "Yes, all our professional gardeners are fully insured and licensed, ensuring safety, reliability, and peace of mind for every project.",
              },
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardeningPage;
