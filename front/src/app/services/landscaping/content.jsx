"use client";
import React, { useState, useEffect } from "react";
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
  Leaf,
  MapPin,
  Users,
  ChevronDown,
  ChevronUp,
  Play,
  Quote,
} from "lucide-react";
import Image from "next/image";
import { image } from "framer-motion/client";

// FAQItem: Responsive padding, font sizes, and spacing.
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-semibold text-gray-900 text-base sm:text-lg">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-green-600 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 sm:px-6 pb-4 sm:pb-5">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{answer}</p>
        </div>
      )}
    </div>
  );
};

// FloatingElement: unchanged.
const FloatingElement = ({ children, delay = 0 }) => {
  return (
    <div
      className="animate-float"
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

// ParallaxSection: unchanged.
const ParallaxSection = ({ children, className = "" }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${scrollY * 0.1}px)`,
      }}
    >
      {children}
    </div>
  );
};

// AnimatedCounter: unchanged.
const AnimatedCounter = ({ target, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${target}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [target]);

  useEffect(() => {
    if (isVisible) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, target, duration]);

  return (
    <span
      id={`counter-${target}`}
      className="font-bold text-2xl sm:text-3xl md:text-4xl text-white"
    >
      {count}
      {suffix}
    </span>
  );
};

const LandscapingPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Data Arrays (unchanged)
  const landscapingServices = [
    {
      title: "Garden & Landscape Design",
      description:
        "Transform your London garden into a stunning outdoor retreat with bespoke landscaping plans, patios, decking, pathways, and planting schemes.",
      features: [
        "Custom garden layouts",
        "Patio & decking installation",
        "Water features & ponds",
        "Planting seasonal flowers & shrubs",
        "Outdoor lighting design",
      ],
      icon: Trees,
      image: "1.jpg",
      color: "from-emerald-500 to-green-600",
      bgPattern: "bg-gradient-to-br from-emerald-50 to-green-100",
    },
    {
      title: "Garden Maintenance & Care",
      description:
        "Keep your outdoor spaces healthy and vibrant with regular lawn care, pruning, hedge trimming, and seasonal planting.",
      features: [
        "Lawn mowing & edging",
        "Hedge shaping & pruning",
        "Weeding & soil care",
        "Planting seasonal flowers",
        "Pest & disease control",
      ],
      icon: Flower2,
      image: "2.jpg",
      color: "from-lime-500 to-emerald-600",
      bgPattern: "bg-gradient-to-br from-lime-50 to-emerald-100",
    },
    {
      title: "Outdoor Renovations",
      description:
        "Upgrade old or tired gardens with expert landscaping renovations, including hardscaping, planting, and design improvements.",
      features: [
        "Garden clearing & preparation",
        "Soil improvement & drainage",
        "Tree & shrub planting",
        "Patios, decking, and pathways",
        "Seasonal styling & layout optimization",
      ],
      icon: Wrench,
      image: "3.jpg",
      color: "from-green-500 to-lime-600",
      bgPattern: "bg-gradient-to-br from-green-50 to-lime-100",
    },
  ];

  const landscapingProcess = [
    {
      step: "01",
      title: "Free Consultation",
      description:
        "We discuss your vision, assess your garden, and provide expert landscaping advice.",
      icon: Lightbulb,
    },
    {
      step: "02",
      title: "Tailored Design",
      description:
        "Our team creates a custom garden and landscape plan with detailed visuals and plant selection.",
      icon: Ruler,
    },
    {
      step: "03",
      title: "Transparent Quote",
      description:
        "Receive a clear, detailed estimate with no hidden costs for your landscaping project.",
      icon: Calculator,
    },
    {
      step: "04",
      title: "Professional Execution",
      description:
        "We implement the plan with skilled gardeners and landscapers, ensuring high-quality results.",
      icon: Wrench,
    },
  ];

  const landscapingBenefits = [
    {
      icon: Shield,
      title: "Fully Insured & Licensed",
      description:
        "All landscaping work is fully insured, giving you peace of mind and professional standards.",
      color: "from-green-400 to-green-500",
    },
    {
      icon: Award,
      title: "Expert London Landscapers",
      description:
        "Over 5 years of professional experience designing and maintaining gardens across London.",
      color: "from-amber-400 to-yellow-500",
    },
    {
      icon: Star,
      title: "Custom Outdoor Solutions",
      description:
        "Every garden design and maintenance plan is tailored to your space and preferences.",
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: Clock,
      title: "Timely & Reliable",
      description:
        "Projects completed on schedule with minimal disruption to your home.",
      color: "from-purple-400 to-purple-500",
    },
    {
      icon: Calculator,
      title: "Transparent Pricing",
      description:
        "Clear quotes with no surprises, ensuring your landscaping project stays within budget.",
      color: "from-rose-400 to-pink-500",
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

  const faqList = [
    {
      question: "What landscaping services do you offer in London?",
      answer:
        "We provide comprehensive landscaping services including garden design, patios, decking, lawn care, hedge trimming, seasonal planting, and bespoke garden renovation.",
    },
    {
      question: "How often should I maintain my garden?",
      answer:
        "For optimal health, gardens should be maintained every 2-4 weeks during the growing season, including lawn care, pruning, and seasonal planting.",
    },
    {
      question: "Do you offer sustainable and eco-friendly landscaping?",
      answer:
        "Yes, we use eco-friendly practices including organic fertilizers, water-efficient planting, and sustainable pest management to protect your garden and the environment.",
    },
    {
      question: "Can you redesign an old garden?",
      answer:
        "Absolutely! Our landscaping renovation services include full garden transformations with new layouts, patios, pathways, and plantings.",
    },
    {
      question: "Are your landscapers licensed and insured?",
      answer:
        "Yes, all our professional landscapers are fully insured and licensed, ensuring safety, quality, and reliability for every project.",
    },
  ];

  const testimonials = [
    {
      name: "Mohmamad M",
      location: "wembley",
      text: "Hermeco transformed our small London garden into an absolute paradise. The attention to detail and quality of work exceeded our expectations.",
      rating: 5,
    },
    {
      name: "George K",
      location: "Acton",
      text: "Professional, reliable, and creative. Our new patio and garden design has become the centerpiece of our home.",
      rating: 5,
    },
    {
      name: "Barbara S",
      location: "Greenford",
      text: "Excellent maintenance service. They keep our garden looking pristine year-round with their expert seasonal care.",
      rating: 5,
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(34, 197, 94, 0.6);
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .glass-morphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .service-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .service-card:hover {
          transform: translateY(-12px) scale(1.02);
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <FloatingElement delay={0}>
          <div className="absolute top-20 left-10 w-20 sm:w-32 h-20 sm:h-32 bg-green-200 rounded-full opacity-20 blur-xl"></div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute top-40 right-10 sm:right-20 w-28 sm:w-40 h-28 sm:h-40 bg-lime-200 rounded-full opacity-15 blur-2xl"></div>
        </FloatingElement>
        <FloatingElement delay={4}>
          <div className="absolute bottom-40 left-1/4 w-24 sm:w-36 h-24 sm:h-36 bg-emerald-200 rounded-full opacity-10 blur-xl"></div>
        </FloatingElement>
      </div>

      {/* Enhanced Hero Section */}
      <div className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-lime-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              animation: "float 20s ease-in-out infinite",
            }}
          ></div>
        </div>

        <ParallaxSection className="relative z-10 text-center text-white px-2 xs:px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-none tracking-tight">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 animate-gradient-x drop-shadow-2xl">
                Outdoor Paradise
              </span>
            </h1>

            <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-5xl mx-auto text-gray-200 leading-relaxed mb-8 xs:mb-12 font-light">
              Award-winning{" "}
              <span className="text-green-400 font-bold">landscape design</span>
              ,
              <span className="text-lime-400 font-bold">
                {" "}
                premium maintenance
              </span>
              , and
              <span className="text-emerald-400 font-bold">
                {" "}
                stunning garden renovations
              </span>{" "}
              across London.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 xs:mb-16 w-full">
            <button className="group relative bg-gradient-to-r from-green-500 via-emerald-600 to-lime-500 text-white px-6 xs:px-10 md:px-12 py-3 xs:py-4 md:py-5 rounded-2xl font-bold text-base xs:text-lg md:text-xl shadow-2xl hover:shadow-green-500/30 transition-all duration-500 hover:scale-110 animate-pulse-glow flex items-center gap-3 w-full sm:w-auto justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Get Free Quote Today</span>
              <ArrowRight className="relative z-10 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>

            <button className="group glass-morphism text-white px-6 xs:px-10 md:px-12 py-3 xs:py-4 md:py-5 rounded-2xl font-bold text-base xs:text-lg md:text-xl border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center hover:scale-105">
              <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>073 0082 5333</span>
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-8 glass-morphism rounded-3xl p-4 xs:p-8 max-w-4xl mx-auto">
            <div className="text-center flex flex-col items-center">
              <AnimatedCounter target={100} suffix="+" />
              <p className="text-gray-300 mt-2 text-xs xs:text-sm">Projects Completed</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <AnimatedCounter target={5} suffix="+" />
              <p className="text-gray-300 mt-2 text-xs xs:text-sm">Years Experience</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <AnimatedCounter target={100} suffix="%" />
              <p className="text-gray-300 mt-2 text-xs xs:text-sm">Client Satisfaction</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <AnimatedCounter target={16} suffix="+" />
              <p className="text-gray-300 mt-2 text-xs xs:text-sm">London Boroughs</p>
            </div>
          </div>
        </ParallaxSection>
      </div>

      {/* Enhanced Services Section */}
      <div className="relative py-10 xs:py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-emerald-50"></div>

        <div className="relative max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 xs:mb-20">
            <div className="inline-flex items-center gap-2 px-4 xs:px-6 py-2 xs:py-3 bg-green-100 rounded-full border border-green-200 text-green-800 font-semibold mb-4 xs:mb-8">
              <Trees className="h-5 w-5" />
              <span>Our Premium Services</span>
            </div>

            <h2 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-4 xs:mb-8 leading-tight">
              <span className="block text-gray-900">Transform Every</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-lime-600">
                Outdoor Space
              </span>
            </h2>

            <p className="text-base xs:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              From concept to completion, we deliver exceptional landscaping
              solutions that enhance your property value and lifestyle.
            </p>
          </div>

          <div className="space-y-12 xs:space-y-24">
            {landscapingServices.map((service, idx) => {
              const ServiceIcon = service.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-8 xs:gap-12 lg:gap-20`}
                >
                  <div className="flex-1 w-full min-w-[250px]">
                    <div
                      className={`p-6 xs:p-12 rounded-3xl ${service.bgPattern} service-card relative overflow-hidden`}
                    >
                      <div className="absolute top-0 right-0 w-24 xs:w-40 h-24 xs:h-40 bg-white/30 rounded-full -translate-y-10 xs:-translate-y-20 translate-x-10 xs:translate-x-20"></div>
                      <div className="relative">
                        <div
                          className={`inline-flex p-2 xs:p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-xl mb-4 xs:mb-6`}
                        >
                          <ServiceIcon className="h-8 xs:h-12 w-8 xs:w-12 text-white" />
                        </div>

                        <h3 className="text-xl xs:text-3xl md:text-4xl font-bold text-gray-900 mb-2 xs:mb-6">
                          {service.title}
                        </h3>
                        <p className="text-base xs:text-xl text-gray-700 mb-4 xs:mb-8 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="space-y-2 xs:space-y-4">
                          {service.features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 xs:gap-4 group"
                            >
                              <div className="p-1 xs:p-2 rounded-full bg-white shadow-md group-hover:shadow-lg transition-shadow duration-300">
                                <CheckCircle className="h-4 xs:h-5 w-4 xs:w-5 text-green-600" />
                              </div>
                              <span className="text-gray-800 text-sm xs:text-lg font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 w-full min-w-[250px]">
                    <div className="xs:h-60 md:h-96 lg:h-150 bg-gradient-to-br from-green-200 to-emerald-300 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"></div>

                      <Image
                        src={`/${service.image}`}
                        alt={service.title}
                        fill
                        className="object-cover rounded-3xl"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      <FloatingElement delay={idx}>
                        <div className="absolute top-4 xs:top-10 right-4 xs:right-10 w-12 xs:w-20 h-12 xs:h-20 bg-white/30 rounded-full"></div>
                      </FloatingElement>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Process Section */}
      <div className="relative py-10 xs:py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>

        <div className="relative max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 xs:mb-20">
            <div className="inline-flex items-center gap-2 px-4 xs:px-6 py-2 xs:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-semibold mb-4 xs:mb-8">
              <Lightbulb className="h-5 w-5 text-yellow-400" />
              <span>Our Proven Process</span>
            </div>

            <h2 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-4 xs:mb-8 text-white">
              From Vision to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400">
                Reality
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8">
            {landscapingProcess.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className="group relative">
                  <div className="text-center transform transition-all duration-700 hover:scale-110 flex flex-col items-center">
                    <div className="relative mb-4 xs:mb-8">
                      <div className="h-20 xs:h-32 w-20 xs:w-32 mx-auto rounded-3xl bg-gradient-to-r from-green-500 via-emerald-600 to-lime-500 flex items-center justify-center group-hover:rotate-6 transition-transform duration-500 shadow-2xl group-hover:shadow-green-500/50">
                        <StepIcon className="h-10 xs:h-16 w-10 xs:w-16 text-white" />
                      </div>
                      <div className="absolute -top-2 xs:-top-4 -right-2 xs:-right-4 h-8 xs:h-12 w-8 xs:w-12 rounded-full bg-white border-2 xs:border-4 border-green-500 flex items-center justify-center shadow-lg">
                        <span className="text-green-600 font-black text-base xs:text-lg">
                          {step.step}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-black text-lg xs:text-2xl mb-2 xs:mb-4 text-white group-hover:text-green-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm xs:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {idx < landscapingProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-green-400 to-transparent transform translate-y-8"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-10 xs:py-20 lg:py-32 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 xs:mb-20">
            <div className="inline-flex items-center gap-2 px-4 xs:px-6 py-2 xs:py-3 bg-green-100 rounded-full border border-green-200 text-green-800 font-semibold mb-4 xs:mb-8">
              <Quote className="h-5 w-5" />
              <span>Client Success Stories</span>
            </div>

            <h2 className="text-2xl xs:text-4xl sm:text-5xl font-black mb-4 xs:mb-8 text-gray-900">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-4 xs:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 xs:hover:-translate-y-4 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 xs:w-32 h-20 xs:h-32 bg-green-100 rounded-full -translate-y-8 xs:-translate-y-16 translate-x-8 xs:translate-x-16"></div>
                <div className="relative">
                  <div className="flex mb-2 xs:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 xs:h-5 w-4 xs:w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm xs:text-lg mb-4 xs:mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-2 xs:gap-3">
                    <div className="w-8 xs:w-12 h-8 xs:h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <Users className="h-5 xs:h-6 w-5 xs:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm xs:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 flex items-center gap-1 text-xs xs:text-sm">
                        <MapPin className="h-3 xs:h-4 w-3 xs:w-4" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="relative py-10 xs:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-700 to-lime-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated background elements */}
        <FloatingElement delay={0}>
          <div className="absolute top-8 xs:top-20 left-8 xs:left-20 w-40 xs:w-64 h-40 xs:h-64 bg-white/10 rounded-full blur-2xl xs:blur-3xl"></div>
        </FloatingElement>
        <FloatingElement delay={3}>
          <div className="absolute bottom-8 xs:bottom-20 right-8 xs:right-20 w-52 xs:w-80 h-52 xs:h-80 bg-lime-300/20 rounded-full blur-2xl xs:blur-3xl"></div>
        </FloatingElement>

        <div className="relative max-w-5xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-morphism rounded-3xl p-4 xs:p-12 lg:p-16">
            <h2 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 xs:mb-8 leading-tight">
              Ready to Create Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-200 to-green-200">
                Dream Garden?
              </span>
            </h2>

            <p className="text-white/90 text-base xs:text-xl md:text-2xl mb-4 xs:mb-12 max-w-4xl mx-auto leading-relaxed">
              Join hundreds of satisfied London homeowners who have transformed
              their outdoor spaces with our expert landscaping services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 xs:gap-6 justify-center max-w-2xl mx-auto">
              <button className="group bg-white text-green-700 px-6 xs:px-12 py-3 xs:py-5 rounded-2xl font-black text-base xs:text-xl shadow-2xl hover:shadow-white/25 hover:scale-110 inline-flex items-center gap-2 xs:gap-4 justify-center w-full sm:w-auto transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-lime-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Calculator className="relative h-5 xs:h-6 w-5 xs:w-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Get Your Free Quote</span>
              </button>

              <button className="group glass-morphism text-white border border-white/30 px-6 xs:px-12 py-3 xs:py-5 rounded-2xl font-black text-base xs:text-xl hover:bg-white/20 hover:border-white transition-all duration-300 inline-flex items-center gap-2 xs:gap-4 justify-center w-full sm:w-auto">
                <Phone className="h-5 xs:h-6 w-5 xs:w-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Call: 073 0082 5333</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-white py-8 xs:py-16">
        <div className="max-w-6xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl xs:text-4xl sm:text-5xl font-black mb-2 xs:mb-6 text-gray-900">
            Landscaping Services Across
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-600 to-lime-400">
              London
            </span>
          </h2>
          <p className="text-gray-600 text-base xs:text-lg mb-4 xs:mb-12 max-w-3xl mx-auto">
            We provide expert landscaping, garden design, and outdoor renovation
            services in all major London boroughs.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 xs:gap-4 md:gap-6 text-gray-700 font-medium">
            {serviceAreas.map((area, idx) => (
              <div
                key={idx}
                className="py-1 xs:py-2 px-2 xs:px-3 rounded-lg hover:bg-green-50 transition-all duration-300 text-xs xs:text-sm md:text-base"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-green-50 py-8 xs:py-16">
        <div className="max-w-6xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 xs:mb-12">
            <h2 className="text-2xl xs:text-4xl sm:text-5xl font-black mb-2 xs:mb-4 text-gray-900">
              Frequently Asked
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-600 to-lime-400">
                Landscaping Questions
              </span>
            </h2>
            <p className="text-gray-600 text-base xs:text-lg max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about our London landscaping and
              garden services.
            </p>
          </div>

          <div className="space-y-4 xs:space-y-6">
            {faqList.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandscapingPage;