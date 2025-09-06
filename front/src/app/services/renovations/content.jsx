"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Ruler,
  Zap,
  Droplets,
  Paintbrush,
  Flower2,
  Trees,
  ArrowRight,
  CheckCircle,
  Award,
  Clock,
  Shield,
  Star,
  Phone,
  MapPin,
  Home,
  Hammer,
  Wrench,
  Building,
  Lightbulb,
  Calculator,
} from "lucide-react";

const RenovationPage = () => {
  // Renovation specialties with detailed features
  const renovationServices = [
    {
      title: "Kitchen Extensions & Remodeling",
      description: "Transform your kitchen into the heart of your home with our bespoke kitchen renovation services. From single-storey rear extensions to complete kitchen overhauls.",
      features: [
        "Planning permission assistance",
        "Structural engineering consultation",
        "Custom cabinet installation",
        "Modern appliance integration",
        "Lighting design & installation"
      ],
      icon: Building,
    },
    {
      title: "Bathroom Renovations",
      description: "Create luxurious bathroom spaces with our comprehensive renovation expertise. From powder rooms to master ensuite installations.",
      features: [
        "Wet room conversions",
        "Luxury fixture installation",
        "Waterproofing & tiling",
        "Heated flooring systems",
        "Modern ventilation solutions"
      ],
      icon: Droplets,
    },
    {
      title: "Loft Conversions",
      description: "Maximize your property value and living space with professional loft conversions. Add bedrooms, offices, or entertainment spaces.",
      features: [
        "Building regulation compliance",
        "Structural beam installation",
        "Dormer window additions",
        "Insulation & energy efficiency",
        "Staircase design & installation"
      ],
      icon: Home,
    },
    {
      title: "Basement Conversions",
      description: "Unlock hidden potential in your property with basement conversions. Create additional living space, home offices, or entertainment areas.",
      features: [
        "Waterproofing & damp-proofing",
        "Structural underpinning",
        "Natural lighting solutions",
        "Ventilation & climate control",
        "Utility integration"
      ],
      icon: Hammer,
    },
  ];

  // Other services for discovery section
  const otherServices = [
    {
      name: "Electrical Services",
      description: "Professional electrical installations and repairs by Part P certified electricians.",
      icon: Zap,
      href: "/services/electrical",
      image: "/electrical.jpg"
    },
    {
      name: "Plumbing Services", 
      description: "Gas Safe registered plumbers for all your plumbing and heating needs.",
      icon: Droplets,
      href: "/services/plumbing",
      image: "/plumbing.jpg"
    },
    {
      name: "Decorations & Painting",
      description: "Premium painting and decorating services for interior and exterior projects.",
      icon: Paintbrush,
      href: "/services/painting", 
      image: "/painting.jpg"
    },
    {
      name: "Gardening",
      description: "Professional garden maintenance and landscaping services.",
      icon: Flower2,
      href: "/services/gardening",
      image: "/gardening.jpg"
    },
    {
      name: "Landscaping",
      description: "Bespoke landscape design and construction for outdoor living spaces.",
      icon: Trees,
      href: "/services/landscaping",
      image: "/landscaping.jpg"
    },
  ];

  const renovationProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Free site visit to assess your requirements and discuss design possibilities.",
      icon: Lightbulb,
    },
    {
      step: "02", 
      title: "Design & Planning",
      description: "Detailed plans, 3D visualizations, and planning permission assistance.",
      icon: Ruler,
    },
    {
      step: "03",
      title: "Transparent Quote",
      description: "Comprehensive breakdown of costs with no hidden fees or surprises.",
      icon: Calculator,
    },
    {
      step: "04",
      title: "Professional Execution",
      description: "Skilled craftsmen deliver your renovation on time and to specification.",
      icon: Hammer,
    },
  ];

  return (
    <div className="relative">
      {/* SEO-optimized Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/renovation.jpg"
          alt="Professional home renovation and remodeling services in London - Kitchen extensions, bathroom renovations, loft conversions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 lg:px-8 max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-5 lg:mb-6 leading-tight">
            Expert
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 drop-shadow-lg">
              Renovation
            </span>
            & Remodeling
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-200 leading-relaxed mb-6 md:mb-8 lg:mb-12 font-light px-2 md:px-4">
            Transform your London property with our comprehensive renovation services. From 
            <span className="text-yellow-400 font-semibold"> kitchen extensions</span> and 
            <span className="text-yellow-400 font-semibold"> loft conversions</span> to complete 
            <span className="text-yellow-400 font-semibold"> home remodeling projects</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center items-center mb-8 md:mb-12 lg:mb-16 px-4">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 text-white px-6 sm:px-7 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 rounded-2xl font-bold text-sm sm:text-base md:text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 hover:from-yellow-600 hover:to-amber-700 flex items-center gap-2 md:gap-3 w-full sm:w-auto justify-center"
            >
              <span className="hidden md:inline">Get Free Renovation Quote</span>
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

          <div className="hidden md:flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-8 opacity-90 px-4">
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm bg-white/10 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/20">
              <Shield className="h-4 w-4 md:h-5 md:w-5 text-green-400" />
              <span>Building Regulation Compliance</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm bg-white/10 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/20">
              <Award className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
              <span>5+ Years London Experience</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm bg-white/10 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/20">
              <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
              <span>Complete Project Management</span>
            </div>
          </div>
        </div>
      </div>

      {/* Renovation Services Section */}
      <div className="bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 md:mb-8 leading-tight">
              <span className="block text-gray-900">Complete</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 drop-shadow-sm">
                Renovation Services
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4 leading-relaxed">
              From <span className="font-semibold text-amber-600">concept to completion</span>, we handle every aspect of your 
              <span className="font-semibold text-gray-900"> home renovation project</span> with 
              <span className="text-amber-600 font-semibold">precision and care</span>.
            </p>
          </div>

          {/* Renovation Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-16 md:mb-20">
            {renovationServices.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:scale-105 group border border-gray-100"
                >
                  <div className="flex items-start gap-4 md:gap-6 mb-6 md:mb-8">
                    <div className="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-amber-500/40 flex-shrink-0">
                      <ServiceIcon className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-amber-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 group/feature">
                        <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300 shadow-md">
                          <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium text-sm md:text-base lg:text-lg group-hover/feature:text-gray-900 transition-colors duration-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

     {/* Renovation Process Section */}
<div className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 sm:mb-12 md:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900">
        Our Proven
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500">
          {" "}Renovation Process
        </span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        We follow a structured approach that ensures your London home renovation project 
        runs smoothly from initial consultation to final handover.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {renovationProcess.map((step, idx) => {
        const StepIcon = step.icon;
        return (
          <div
            key={idx}
            className="flex flex-col items-center text-center group transform transition-all duration-500 hover:scale-105"
          >
            <div className="relative mb-4 sm:mb-6 md:mb-8">
              <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 mx-auto rounded-3xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-amber-500/40">
                <StepIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full bg-white border-4 border-amber-500 flex items-center justify-center">
                <span className="text-amber-600 font-bold text-xs sm:text-sm md:text-base">
                  {step.step}
                </span>
              </div>
            </div>
            <h3 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 md:mb-4 text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
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

      {/* Key Benefits Section */}
      <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-900">
              Why Choose Hermeco for Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500">
                {" "}London Renovation
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              {
                icon: Shield,
                title: "Building Regulation Expertise",
                description: "Full compliance with London building regulations and planning permissions",
                color: "from-green-400 to-green-500",
              },
              {
                icon: Award,
                title: "Proven London Experience",
                description: "5+ years specializing in London property renovations and extensions",
                color: "from-amber-400 to-yellow-500",
              },
              {
                icon: Wrench,
                title: "Complete Project Management",
                description: "End-to-end service from design consultation to final completion",
                color: "from-blue-400 to-blue-500",
              },
              {
                icon: Star,
                title: "Quality Craftsmanship",
                description: "Skilled tradesmen using premium materials and modern techniques",
                color: "from-amber-400 to-yellow-500",
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                description: "Reliable project timelines with transparent progress updates",
                color: "from-purple-400 to-purple-500",
              },
              {
                icon: Calculator,
                title: "Transparent Pricing",
                description: "Detailed quotes with no hidden costs or surprise charges",
                color: "from-amber-400 to-yellow-500",
              },
            ].map((benefit, i) => {
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
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
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

      {/* Discover Other Services Section */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-gray-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-900">
              Discover Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500">
                {" "}Other Services
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Beyond renovations, we offer a complete range of construction and maintenance services 
              to keep your London property in perfect condition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {otherServices.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:scale-105 border border-gray-100"
                >
                  <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.name} in London`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-amber-900/40 group-hover:via-amber-900/20 transition-all duration-500" />
                    
                    <div className="absolute top-4 left-4 transform transition-all duration-500 group-hover:scale-110">
                      <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 flex items-center justify-center shadow-2xl shadow-amber-500/40 group-hover:shadow-amber-400/60 transition-all duration-500">
                        <ServiceIcon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-amber-600 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-amber-600 font-bold text-sm md:text-base hover:text-amber-700 transition-colors duration-300 group-hover:gap-3"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SEO-Rich Content Section */}
      <div className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg md:prose-xl max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Professional Home Renovations in London
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-amber-600 mb-4">Kitchen Extensions London</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our kitchen extension services help London homeowners maximize their living space while adding significant property value. 
                  We specialize in single-storey rear extensions, side return extensions, and wrap-around extensions that seamlessly 
                  integrate with your existing property architecture.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From initial planning permission applications to final kitchen installation, our team manages every aspect of your 
                  kitchen extension project, ensuring compliance with London building regulations and party wall agreements.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-amber-600 mb-4">Loft Conversions & Basement Extensions</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Transform unused spaces into valuable living areas with our loft conversion and basement extension expertise. 
                  We handle everything from structural calculations and building regulation applications to insulation, 
                  waterproofing, and final decorations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our London renovation specialists understand the unique challenges of working with Victorian terraces, 
                  Edwardian houses, and modern properties throughout Central London, North London, South London, and surrounding areas.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 md:p-8 mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                Why London Homeowners Choose Hermeco
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-gray-700">
                <div>
                  <h4 className="font-bold text-amber-600 mb-2">Local Expertise</h4>
                  <p className="leading-relaxed">
                    Over 5 years of experience working specifically with London properties, understanding local building 
                    regulations, conservation area requirements, and the unique structural challenges of period properties.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-amber-600 mb-2">Complete Service</h4>
                  <p className="leading-relaxed">
                    From architectural design and planning applications to structural work, electrical installation, 
                    plumbing, and final decorations - we handle every aspect of your renovation project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8">
            Ready to Transform Your London Home?
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Get your free renovation consultation today. Our experts will assess your property, 
            discuss your vision, and provide a detailed quote with transparent pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center max-w-lg sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="group bg-white text-amber-600 px-8 md:px-10 lg:px-12 py-4 md:py-5 rounded-2xl font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-50 inline-flex items-center gap-3 justify-center w-full sm:w-auto"
            >
              <Calculator className="h-5 w-5 md:h-6 md:w-6 group-hover:rotate-12 transition-transform duration-200" />
              Get Free Renovation Quote
            </Link>
            
            <Link
              href="tel:+447300825333"
              className="group bg-white/20 backdrop-blur-md text-white px-8 md:px-10 lg:px-12 py-4 md:py-5 rounded-2xl font-bold text-sm sm:text-base md:text-lg lg:text-xl border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 justify-center w-full sm:w-auto"
            >
              <Phone className="h-5 w-5 md:h-6 md:w-6 group-hover:rotate-12 transition-transform duration-200" />
              Call: 073 0082 5333
            </Link>
          </div>

          <div className="mt-8 md:mt-12 flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 opacity-90">
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-white/90 bg-white/10 backdrop-blur-md px-4 md:px-5 py-2 md:py-3 rounded-full border border-white/20">
              <MapPin className="h-4 w-4 md:h-5 md:w-5" />
              <span>Serving All London Areas</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-white/90 bg-white/10 backdrop-blur-md px-4 md:px-5 py-2 md:py-3 rounded-full border border-white/20">
              <Shield className="h-4 w-4 md:h-5 md:w-5" />
              <span>Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-white/90 bg-white/10 backdrop-blur-md px-4 md:px-5 py-2 md:py-3 rounded-full border border-white/20">
              <Award className="h-4 w-4 md:h-5 md:w-5" />
              <span>5+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas Section - SEO Rich */}
      <div className="bg-white py-12 md:py-16 lg:py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-900">
              London Renovation
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500">
                {" "}Service Areas
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide professional renovation and remodeling services across London, 
              specializing in residential properties throughout the capital.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 text-center">
            {[
              "Central London", "North London", "South London", "East London",
              "West London", "Camden", "Islington", "Hackney",
              "Greenwich", "Wandsworth", "Hammersmith", "Kensington",
              "Westminster", "Tower Hamlets", "Southwark", "Lambeth"
            ].map((area, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200/50 rounded-xl lg:rounded-2xl p-4 md:p-6 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300 hover:scale-105 group"
              >
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-amber-600 mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-900 font-semibold text-sm md:text-base group-hover:text-amber-600 transition-colors duration-300">
                  {area}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              <span className="font-semibold text-gray-900">Hermeco Construction</span> serves homeowners across London with 
              professional renovation services including <span className="text-amber-600 font-medium">kitchen extensions</span>, 
              <span className="text-amber-600 font-medium"> bathroom renovations</span>, 
              <span className="text-amber-600 font-medium"> loft conversions</span>, and 
              <span className="text-amber-600 font-medium"> complete home remodeling projects</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8">
            Start Your Renovation Journey Today
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Contact Hermeco Construction for expert renovation services in London. 
            From initial consultation to project completion, we're here to transform your property.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center max-w-lg sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-white px-8 md:px-10 lg:px-12 py-4 md:py-5 rounded-2xl font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:to-yellow-700 inline-flex items-center gap-3 justify-center w-full sm:w-auto"
            >
              <ArrowRight className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
              Request Free Consultation
            </Link>
            
            <Link
              href="tel:+447300825333"
              className="group bg-white/10 backdrop-blur-md text-white px-8 md:px-10 lg:px-12 py-4 md:py-5 rounded-2xl font-bold text-sm sm:text-base md:text-lg lg:text-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 justify-center w-full sm:w-auto"
            >
              <Phone className="h-5 w-5 md:h-6 md:w-6 group-hover:rotate-12 transition-transform duration-200" />
              073 0082 5333
            </Link>
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <p className="text-gray-400 text-sm md:text-base">
              Licensed • Insured • 5+ Years London Experience • Free Consultations
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
};

export default RenovationPage;