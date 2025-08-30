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
} from "lucide-react";

// Helper function to get service features
const getServiceFeatures = (serviceName) => {
  const features = {
    "Renovations & Remodeling": [
      "Complete home transformations",
      "Kitchen & bathroom extensions",
      "Building regulation compliance"
    ],
    "Electrical Services": [
      "Part P certified electricians",
      "Smart home installations",
      "Emergency fault finding"
    ],
    "Plumbing Services": [
      "Gas Safe registered plumbers",
      "24/7 emergency response",
      "Central heating upgrades"
    ],
    "Decorations & Painting": [
      "Premium quality materials",
      "Interior & exterior painting",
      "Wallpaper & specialist finishes"
    ],
    "Gardening": [
      "Regular maintenance programs",
      "Seasonal garden cleanups",
      "Tree surgery & hedge trimming"
    ],
    "Landscaping": [
      "Bespoke garden design",
      "Hard & soft landscaping",
      "Water features & patios"
    ]
  };
  return features[serviceName] || [];
};

// Service images mapping
const getServiceImage = (serviceName) => {
  const images = {
    "Renovations & Remodeling": "/renovation.jpg",
    "Electrical Services": "/electrical.jpg",
    "Plumbing Services": "/plumbing.jpg",
    "Decorations & Painting": "/painting.jpg",
    "Gardening": "/gardening.jpg",
    "Landscaping": "/landscaping.jpg"
  };
  return images[serviceName] || "";
};

const services = [
  {
    name: "Renovations & Remodeling",
    description:
      "Transform your living spaces with our comprehensive renovation and remodeling expertise that spans over five years of dedicated service in London. Our skilled craftsmen understand that your home is more than just a building—it's your sanctuary, your investment, and the backdrop to your most precious memories.",
    extendedInfo: "From kitchen extensions that create the heart of your home to bathroom renovations that provide a spa-like retreat, our renovation services encompass every aspect of home improvement. We work closely with architects, interior designers, and local councils to ensure all projects meet building regulations.",
    icon: Ruler,
    href: "/services/renovations",
  },
  {
    name: "Electrical Services",
    description:
      "Ensure the safety and efficiency of your property with our comprehensive electrical services, carried out exclusively by Part P certified electricians who understand the unique challenges of London's diverse housing stock. From Victorian terraces requiring modern electrical systems to new-build properties.",
    extendedInfo: "Our electrical expertise covers everything from emergency fault finding and repair to complete rewiring projects, energy-efficient LED lighting installations, EV charging point installations, and smart home automation systems.",
    icon: Zap,
    href: "/services/electrical",
  },
  {
    name: "Plumbing Services",
    description:
      "Experience worry-free plumbing with our professional team of Gas Safe registered plumbers who bring decades of combined experience to every project across London. Understanding that plumbing issues can be both disruptive and costly, we provide rapid response emergency services.",
    extendedInfo: "From burst pipe emergencies to luxury bathroom installations, central heating system upgrades to routine maintenance contracts, our plumbing services are designed around your needs and budget.",
    icon: Droplets,
    href: "/services/plumbing",
  },
  {
    name: "Decorations & Painting",
    description:
      "Refresh and revitalize your spaces with our premium painting and decoration services that combine traditional craftsmanship with modern techniques and materials. Our experienced decorators understand that the right finish can completely transform the look and feel of any room.",
    extendedInfo: "Whether you're looking for classic elegance with period-appropriate finishes, contemporary sophistication with designer wallpapers and specialist paint effects, or protective exterior coatings that weather London's challenging climate.",
    icon: Paintbrush,
    href: "/services/painting",
  },
  {
    name: "Gardening",
    description:
      "Maintain the beauty and health of your outdoor spaces with our comprehensive gardening services that keep London gardens thriving throughout the seasons. Our experienced horticulturists and garden maintenance specialists understand the unique challenges of urban gardening.",
    extendedInfo: "Our gardening services encompass everything from weekly maintenance visits and seasonal cleanups to specialist services like tree surgery, hedge trimming, and lawn care programs.",
    icon: Flower2,
    href: "/services/gardening",
  },
  {
    name: "Landscaping",
    description:
      "Create stunning outdoor living spaces with our bespoke landscaping services that transform ordinary gardens into extraordinary outdoor environments. Our landscape designers and construction specialists work collaboratively to design and build outdoor spaces.",
    extendedInfo: "Our landscaping projects encompass hard landscaping elements like patios, driveways, retaining walls, and water features, alongside soft landscaping including plant selection, lawn installation, and garden borders.",
    icon: Trees,
    href: "/services/landscaping",
  },
];

const ServicesPage = () => {
  return (
    <section className="relative">
      {/* Professional Hero Banner - Enhanced tablet responsiveness */}
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/services.jpg" 
          alt="Professional construction and renovation services in London"
          fill
          className="object-cover"
          priority
        />
        {/* Hero-matching overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 lg:px-8 max-w-6xl mx-auto">
          {/* Main heading with better tablet scaling */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-5 lg:mb-6 leading-tight">
            Professional
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 drop-shadow-lg">
              Construction
            </span>
            Services
          </h1>

          {/* Professional subtitle with tablet optimization */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-200 leading-relaxed mb-6 md:mb-8 lg:mb-12 font-light px-2 md:px-4">
            Delivering exceptional construction, renovation, and maintenance services across London 
            with <span className="text-yellow-400 font-semibold">over 5 years of proven expertise</span>
          </p>

          {/* CTA buttons with improved tablet layout */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center items-center mb-8 md:mb-12 lg:mb-16 px-4">
            <Link
              href="/quote"
              className="group bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 text-white px-6 sm:px-7 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 rounded-2xl font-bold text-sm sm:text-base md:text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 hover:from-yellow-600 hover:to-amber-700 flex items-center gap-2 md:gap-3 w-full sm:w-auto justify-center"
            >
              <span className="hidden md:inline">Request Free Consultation</span>
              <span className="md:hidden">Free Consultation</span>
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

          {/* Professional credentials - Better tablet visibility */}
          <div className="hidden md:flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-8 opacity-90 px-4">
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm bg-white/10 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/20">
              <Shield className="h-4 w-4 md:h-5 md:w-5 text-green-400" />
              <span>Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm bg-white/10 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/20">
              <Award className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
              <span>Certified Professionals</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm bg-white/10 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/20">
              <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
              <span>5+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Services Section - Enhanced tablet layout */}
      <div id="services" className="bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              From initial consultation to project completion, we deliver professional construction 
              services with attention to detail and commitment to excellence.
            </p>
          </div>

          {/* Professional Services List - Optimized for tablets */}
          <div className="space-y-0">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const serviceImage = getServiceImage(service.name);
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx}>
                  <div
                    className={`flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center py-8 md:py-12 lg:py-16 ${
                      !isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Service Image - Better tablet sizing */}
                    <div className="w-full lg:w-1/2  relative group px-4 sm:px-0">
                      <div className="relative h-80 md:h-120 lg:h-96 w-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl">
                        <Image
                          src={serviceImage}
                          alt={service.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        
                        {/* Floating icon - Tablet optimized */}
                        <div className="absolute top-4 md:top-6 left-4 md:left-6">
                          <div className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-xl lg:rounded-2xl bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 flex items-center justify-center shadow-2xl shadow-yellow-500/25">
                            <Icon className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Service Content - Enhanced tablet typography */}
                    <div className="w-full lg:w-1/2 space-y-4 md:space-y-5 lg:space-y-6 px-4 sm:px-6 lg:px-0">
                      <div className="space-y-3 md:space-y-4">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                          {service.name}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Key Features - Tablet optimized */}
                      <div className="space-y-2 md:space-y-3">
                        {getServiceFeatures(service.name).map((feature, i) => (
                          <div key={i} className="flex items-start gap-3 group">
                            <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-white" />
                            </div>
                            <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200 text-sm md:text-base lg:text-lg leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 md:pt-4 lg:pt-6">
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 text-white px-6 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 rounded-xl lg:rounded-2xl font-bold text-sm md:text-base lg:text-lg shadow-xl hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 hover:from-yellow-600 hover:to-amber-700 group w-full sm:w-auto justify-center sm:justify-start"
                        >
                          <span className="hidden sm:inline md:hidden lg:inline">Learn More About {service.name.split(' ')[0]}</span>
                          <span className="sm:hidden md:inline lg:hidden">Learn More About {service.name.split(' ')[0]}</span>
                          <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Professional Divider - Only show between services, not after the last one */}
                  {idx < services.length - 1 && (
                    <div className="relative px-4 sm:px-6 lg:px-0">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <div className="bg-gray-50 px-6 py-2">
                          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 opacity-60"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Professional Why Choose Us Section - Enhanced tablet grid */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-gray-50 py-12 md:py-16 lg:py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 text-gray-900">
              Why Choose 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-500"> Hermeco</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We combine years of experience with modern techniques and materials to deliver 
              exceptional results that exceed expectations.
            </p>
          </div>
          
          {/* Enhanced tablet grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-8 mb-10 md:mb-12 lg:mb-16">
            {[
              {
                icon: Shield,
                title: "Licensed & Insured",
                description: "Full certification with comprehensive insurance coverage",
                color: "from-green-400 to-green-500"
              },
              {
                icon: Award,
                title: "5+ Years Experience",
                description: "Proven track record across London properties",
                color: "from-yellow-400 to-amber-500"
              },
              {
                icon: Star,
                title: "Quality Materials",
                description: "Premium components for lasting results",
                color: "from-yellow-400 to-amber-500"
              },
              {
                icon: Clock,
                title: "Reliable Service",
                description: "On-time completion with transparent pricing",
                color: "from-blue-400 to-blue-500"
              },
            ].map((feature, i) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={i} className="text-center group px-4 md:px-2">
                  <div className="flex justify-center mb-4 md:mb-5 lg:mb-6">
                    <div className={`h-16 w-16 md:h-18 md:w-18 lg:h-20 lg:w-20 xl:h-24 xl:w-24 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-2xl`}>
                      <FeatureIcon className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Call to Action - Enhanced tablet layout */}
          <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-50 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-10 text-center border-2 border-yellow-200/50 mx-4 sm:mx-0 shadow-xl shadow-yellow-100/50">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Ready to Start Your Project?</h3>
            <p className="text-gray-700 mb-6 md:mb-7 lg:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-4 leading-relaxed">
              Contact us today for a free consultation and detailed quote. Our team will assess 
              your requirements and provide transparent, competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                href="/quote"
                className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 md:py-4 lg:py-5 rounded-2xl font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-xl hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 hover:from-yellow-600 hover:to-amber-700 inline-flex items-center gap-2 md:gap-3 justify-center w-full sm:w-auto"
              >
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                Get Free Quote
              </Link>
              <Link
                href="tel:+447300825333"
                className="bg-white border-2 border-yellow-300 hover:bg-yellow-50 text-gray-900 px-6 sm:px-8 md:px-10 lg:px-12 py-3 md:py-4 lg:py-5 rounded-2xl font-bold text-sm sm:text-base md:text-lg lg:text-xl hover:border-yellow-400 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 md:gap-3 justify-center w-full sm:w-auto shadow-lg hover:shadow-xl"
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;