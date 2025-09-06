"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Shield,
  Home,
  Lightbulb,
  Power,
  Battery,
  ArrowRight,
  CheckCircle,
  Award,
  Clock,
  Star,
  Phone,
  MapPin,
  Hammer,
  Wrench,
  Building,
  Calculator,
  Ruler,
  Droplets,
  Paintbrush,
  Flower2,
  Trees,
  AlertTriangle,
  Wifi,
  Smartphone,
  Car,
} from "lucide-react";

const ElectricalPage = () => {
  // Electrical services with detailed features
  const electricalServices = [
    {
      title: "Complete Rewiring & Installation",
      description: "Comprehensive electrical rewiring services for London homes, from Victorian terraces to modern properties. Full electrical system upgrades with Part P certification.",
      features: [
        "Full house rewiring projects",
        "Consumer unit upgrades",
        "Part P Building Regulations compliance",
        "Electrical safety certificates",
        "Underground cable installation"
      ],
      icon: Power,
    },
    {
      title: "Smart Home Automation",
      description: "Transform your London property into a smart home with our advanced automation systems. Control lighting, heating, security, and entertainment from your smartphone.",
      features: [
        "Smart lighting control systems",
        "Automated heating & cooling",
        "Security system integration",
        "Voice control compatibility",
        "Remote monitoring capabilities"
      ],
      icon: Smartphone,
    },
    {
      title: "Emergency Electrical Repairs",
      description: "24/7 emergency electrical services across London. Fast response for power outages, electrical faults, and safety concerns with fully qualified Part P electricians.",
      features: [
        "24/7 emergency call-out service",
        "Fault finding & diagnostics",
        "Power restoration services",
        "Electrical safety inspections",
        "Same-day repair availability"
      ],
      icon: AlertTriangle,
    },
    {
      title: "EV Charging Point Installation",
      description: "Professional electric vehicle charging point installation for residential and commercial properties. Fast, reliable charging solutions with government grant assistance.",
      features: [
        "Home EV charger installation",
        "Commercial charging stations",
        "Government grant applications",
        "Smart charging capabilities",
        "Tethered & untethered options"
      ],
      icon: Car,
    },
  ];

  // Other services for discovery section
  const otherServices = [
    {
      name: "Renovations & Remodeling",
      description: "Complete home transformations with comprehensive renovation and remodeling expertise.",
      icon: Hammer,
      href: "/services/renovations",
      image: "/renovation.jpg"
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

  const electricalProcess = [
    {
      step: "01",
      title: "Safety Assessment",
      description: "Comprehensive electrical safety inspection and system evaluation.",
      icon: Shield,
    },
    {
      step: "02", 
      title: "Design & Planning",
      description: "Detailed electrical plans with Part P compliance and certification.",
      icon: Lightbulb,
    },
    {
      step: "03",
      title: "Transparent Quote",
      description: "Clear pricing breakdown with no hidden costs or surprise charges.",
      icon: Calculator,
    },
    {
      step: "04",
      title: "Professional Installation",
      description: "Certified electricians complete your project safely and efficiently.",
      icon: Zap,
    },
  ];

  return (
    <div className="relative">
      {/* SEO-optimized Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/electrical.jpg"
          alt="Professional electrical services in London - Part P certified electricians, rewiring, smart home installation, EV charging points"
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
              Electrical
            </span>
            Services
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-200 leading-relaxed mb-6 md:mb-8 lg:mb-12 font-light px-2 md:px-4">
            Professional electrical services across London by 
            <span className="text-yellow-400 font-semibold"> Part P certified electricians</span>. From 
            <span className="text-yellow-400 font-semibold"> complete rewiring</span> and 
            <span className="text-yellow-400 font-semibold"> smart home installation</span> to 
            <span className="text-yellow-400 font-semibold"> emergency repairs</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center items-center mb-8 md:mb-12 lg:mb-16 px-4">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 text-white px-6 sm:px-7 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 rounded-2xl font-bold text-sm sm:text-base md:text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 hover:from-yellow-600 hover:to-amber-700 flex items-center gap-2 md:gap-3 w-full sm:w-auto justify-center"
            >
              <span className="hidden md:inline">Get Free Electrical Quote</span>
              <span className="md:hidden">Free Quote</span>
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="tel:+447300825333"
              className="group bg-white/20 backdrop-blur-md text-white px-8 md:px-10 lg:px-12 py-4 md:py-5 rounded-2xl font-bold text-sm sm:text-base md:text-lg lg:text-xl border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 justify-center w-full sm:w-auto"
            >
              <Phone className="h-5 w-5 md:h-6 md:w-6 group-hover:rotate-12 transition-transform duration-200" />
              Emergency: 073 0082 5333
            </Link>
          </div>

          <div className="mt-8 md:mt-12 flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 opacity-90">
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-white/90 bg-white/10 backdrop-blur-md px-4 md:px-5 py-2 md:py-3 rounded-full border border-white/20">
              <MapPin className="h-4 w-4 md:h-5 md:w-5" />
              <span>Serving All London Areas</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-white/90 bg-white/10 backdrop-blur-md px-4 md:px-5 py-2 md:py-3 rounded-full border border-white/20">
              <Shield className="h-4 w-4 md:h-5 md:w-5" />
              <span>Part P Certified</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-white/90 bg-white/10 backdrop-blur-md px-4 md:px-5 py-2 md:py-3 rounded-full border border-white/20">
              <Clock className="h-4 w-4 md:h-5 md:w-5" />
              <span>24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas Section - SEO Rich */}
      <div className="bg-white py-12 md:py-16 lg:py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-900">
              London Electrical
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500">
                {" "}Service Areas
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Part P certified electricians provide professional electrical services across London, 
              specializing in residential and commercial properties throughout the capital.
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
                <Zap className="h-5 w-5 md:h-6 md:w-6 text-amber-600 mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-900 font-semibold text-sm md:text-base group-hover:text-amber-600 transition-colors duration-300">
                  {area}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              <span className="font-semibold text-gray-900">Hermeco Construction</span> provides reliable electrical services across London including 
              <span className="text-amber-600 font-medium"> emergency repairs</span>, 
              <span className="text-amber-600 font-medium"> complete rewiring</span>, 
              <span className="text-amber-600 font-medium"> smart home installation</span>, and 
              <span className="text-amber-600 font-medium"> EV charging point installation</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Services Section */}
      <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-900">
              24/7 Emergency
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-500">
                {" "}Electrical Services
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Electrical emergencies require immediate attention. Our certified electricians are available 
              24/7 across London for urgent electrical repairs and safety concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              {
                icon: AlertTriangle,
                title: "Power Outages",
                description: "Complete power failure diagnosis and rapid restoration services",
                urgency: "Critical",
              },
              {
                icon: Zap,
                title: "Electrical Faults",
                description: "Tripping circuits, burning smells, and dangerous electrical issues",
                urgency: "Urgent",
              },
              {
                icon: Shield,
                title: "Safety Inspections",
                description: "Emergency electrical safety checks and hazard identification",
                urgency: "Important",
              },
            ].map((emergency, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-red-500 group"
              >
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <emergency.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                      {emergency.title}
                    </h3>
                    <span className="text-red-600 font-semibold text-sm md:text-base">
                      {emergency.urgency}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {emergency.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 text-center shadow-xl border-2 border-red-200/50">
            <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center animate-pulse shadow-xl">
                <Phone className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Emergency Electrical Helpline
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  Available 24/7 • Rapid Response • Certified Electricians
                </p>
              </div>
            </div>
            
            <Link
              href="tel:+447300825333"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 via-red-600 to-orange-600 text-white px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 rounded-2xl font-bold text-lg md:text-xl lg:text-2xl shadow-xl hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 hover:from-red-600 hover:to-orange-700"
            >
              <Phone className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 animate-bounce" />
              Call Emergency Line: 073 0082 5333
            </Link>
            
            <p className="text-gray-500 text-sm md:text-base mt-4 md:mt-6">
              For electrical emergencies requiring immediate attention
            </p>
          </div>
        </div>
      </div>

      {/* Electrical Services Section */}
      <div className="bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 md:mb-8 leading-tight">
              <span className="block text-gray-900">Comprehensive</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 drop-shadow-sm">
                Electrical Solutions
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4 leading-relaxed">
              From <span className="font-semibold text-amber-600">emergency repairs</span> to 
              <span className="font-semibold text-gray-900"> complete rewiring projects</span>, our 
              <span className="text-amber-600 font-semibold">Part P certified electricians</span> deliver 
              safe, reliable electrical solutions across London.
            </p>
          </div>

          {/* Electrical Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-16 md:mb-20">
            {electricalServices.map((service, idx) => {
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
                      <div key={i} className="flex items-start gap-3 group/feature">
                        <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/feature:scale-110 transition-transform duration-300 shadow-md">
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

      {/* Electrical Process Section */}
<div className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 sm:mb-12 md:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900">
        Our Professional
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500">
          {" "}Electrical Process
        </span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        We follow strict safety protocols and Part P regulations to ensure every electrical 
        installation meets the highest standards of safety and compliance.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {electricalProcess.map((step, idx) => {
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
                {" "}Electrical Needs
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              {
                icon: Shield,
                title: "Part P Certified",
                description: "All electricians fully certified with Part P Building Regulations compliance",
                color: "from-green-400 to-green-500",
              },
              {
                icon: Clock,
                title: "24/7 Emergency Service",
                description: "Round-the-clock emergency electrical repairs and fault finding",
                color: "from-red-400 to-red-500",
              },
              {
                icon: Award,
                title: "5+ Years Experience",
                description: "Extensive experience with London properties and electrical systems",
                color: "from-amber-400 to-yellow-500",
              },
              {
                icon: Wifi,
                title: "Smart Home Specialists",
                description: "Advanced home automation and smart electrical system installation",
                color: "from-blue-400 to-blue-500",
              },
              {
                icon: Battery,
                title: "Energy Efficient",
                description: "LED lighting and energy-saving electrical solutions",
                color: "from-green-400 to-green-500",
              },
              {
                icon: Car,
                title: "EV Charging Experts",
                description: "Professional electric vehicle charging point installation",
                color: "from-purple-400 to-purple-500",
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
              Beyond electrical services, we offer a complete range of construction and maintenance services 
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
              Professional Electrical Services in London
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-amber-600 mb-4">Part P Certified Electricians</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All our electrical work is carried out by Part P certified electricians who are fully qualified 
                  to work on domestic electrical installations across London. We ensure complete compliance with 
                  Building Regulations and provide all necessary certification upon completion.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From simple socket installations to complete rewiring projects, our certified electricians 
                  have the expertise to handle all types of electrical work safely and efficiently.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-amber-600 mb-4">Emergency Electrical Services</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Electrical emergencies can happen at any time, which is why we offer 24/7 emergency electrical 
                  services across London. Our rapid response team can quickly diagnose and resolve electrical faults, 
                  power outages, and safety concerns.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're experiencing a complete power failure, electrical burning smells, or tripping circuits, 
                  our emergency electricians are equipped to restore your electrical system safely and quickly.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 md:p-8 mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                Comprehensive London Electrical Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-gray-700">
                <div>
                  <h4 className="font-bold text-amber-600 mb-2">Rewiring & Installation</h4>
                  <p className="leading-relaxed">
                    Complete house rewiring, consumer unit upgrades, new circuit installation, and electrical 
                    system modernization for London properties of all ages and types.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-amber-600 mb-2">Smart Home Solutions</h4>
                  <p className="leading-relaxed">
                    Advanced home automation systems, smart lighting controls, security integration, and 
                    IoT device installation for modern connected living.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8">
            Professional Electrical Services Across London
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Contact Hermeco Construction for reliable electrical services by Part P certified electricians. 
            From routine installations to emergency repairs, we're here to keep your property safe and powered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center max-w-lg sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-white px-8 md:px-10 lg:px-12 py-4 md:py-5 rounded-2xl font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:to-yellow-700 inline-flex items-center gap-3 justify-center w-full sm:w-auto"
            >
              <Lightbulb className="h-5 w-5 md:h-6 md:w-6 group-hover:rotate-12 transition-transform" />
              Get Free Electrical Quote
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
              Part P Certified • Fully Insured • 5+ Years London Experience • 24/7 Emergency Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricalPage;