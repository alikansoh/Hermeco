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
      "Building regulation compliance",
    ],
    "Electrical Services": [
      "Part P certified electricians",
      "Smart home installations",
      "Emergency fault finding",
    ],
    "Plumbing Services": [
      "Gas Safe registered plumbers",
      "24/7 emergency response",
      "Central heating upgrades",
    ],
    "Decorations & Painting": [
      "Premium quality materials",
      "Interior & exterior painting",
      "Wallpaper & specialist finishes",
    ],
    Gardening: [
      "Regular maintenance programs",
      "Seasonal garden cleanups",
      "Tree surgery & hedge trimming",
    ],
    Landscaping: [
      "Bespoke garden design",
      "Hard & soft landscaping",
      "Water features & patios",
    ],
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
    Gardening: "/gardening.jpg",
    Landscaping: "/landscaping.jpg",
  };
  return images[serviceName] || "";
};

const services = [
  {
    name: "Renovations & Remodeling",
    description:
      "Transform your living spaces with our comprehensive renovation and remodeling expertise that spans over five years of dedicated service in London. Our skilled craftsmen understand that your home is more than just a building—it's your sanctuary, your investment, and the backdrop to your most precious memories.",
    extendedInfo:
      "From kitchen extensions that create the heart of your home to bathroom renovations that provide a spa-like retreat, our renovation services encompass every aspect of home improvement. We work closely with architects, interior designers, and local councils to ensure all projects meet building regulations.",
    icon: Ruler,
    href: "/services/renovations",
  },
  {
    name: "Electrical Services",
    description:
      "Ensure the safety and efficiency of your property with our comprehensive electrical services, carried out exclusively by Part P certified electricians who understand the unique challenges of London's diverse housing stock. From Victorian terraces requiring modern electrical systems to new-build properties.",
    extendedInfo:
      "Our electrical expertise covers everything from emergency fault finding and repair to complete rewiring projects, energy-efficient LED lighting installations, EV charging point installations, and smart home automation systems.",
    icon: Zap,
    href: "/services/electrical",
  },
  {
    name: "Plumbing Services",
    description:
      "Experience worry-free plumbing with our professional team of Gas Safe registered plumbers who bring decades of combined experience to every project across London. Understanding that plumbing issues can be both disruptive and costly, we provide rapid response emergency services.",
    extendedInfo:
      "From burst pipe emergencies to luxury bathroom installations, central heating system upgrades to routine maintenance contracts, our plumbing services are designed around your needs and budget.",
    icon: Droplets,
    href: "/services/plumbing",
  },
  {
    name: "Decorations & Painting",
    description:
      "Refresh and revitalize your spaces with our premium painting and decoration services that combine traditional craftsmanship with modern techniques and materials. Our experienced decorators understand that the right finish can completely transform the look and feel of any room.",
    extendedInfo:
      "Whether you're looking for classic elegance with period-appropriate finishes, contemporary sophistication with designer wallpapers and specialist paint effects, or protective exterior coatings that weather London's challenging climate.",
    icon: Paintbrush,
    href: "/services/painting",
  },
  {
    name: "Gardening",
    description:
      "Maintain the beauty and health of your outdoor spaces with our comprehensive gardening services that keep London gardens thriving throughout the seasons. Our experienced horticulturists and garden maintenance specialists understand the unique challenges of urban gardening.",
    extendedInfo:
      "Our gardening services encompass everything from weekly maintenance visits and seasonal cleanups to specialist services like tree surgery, hedge trimming, and lawn care programs.",
    icon: Flower2,
    href: "/services/gardening",
  },
  {
    name: "Landscaping",
    description:
      "Create stunning outdoor living spaces with our bespoke landscaping services that transform ordinary gardens into extraordinary outdoor environments. Our landscape designers and construction specialists work collaboratively to design and build outdoor spaces.",
    extendedInfo:
      "Our landscaping projects encompass hard landscaping elements like patios, driveways, retaining walls, and water features, alongside soft landscaping including plant selection, lawn installation, and garden borders.",
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
            Delivering exceptional construction, renovation, and maintenance
            services across London with{" "}
            <span className="text-yellow-400 font-semibold">
              over 5 years of proven expertise
            </span>
          </p>

          {/* CTA buttons with improved tablet layout */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center items-center mb-8 md:mb-12 lg:mb-16 px-4">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 text-white px-6 sm:px-7 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 rounded-2xl font-bold text-sm sm:text-base md:text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 hover:from-yellow-600 hover:to-amber-700 flex items-center gap-2 md:gap-3 w-full sm:w-auto justify-center"
            >
              <span className="hidden md:inline">
                Request Free Consultation
              </span>
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

      {/* Professional Services Section - Enhanced with animations and amber colors */}
      <div id="services" className="bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 md:mb-8 leading-tight animate-fade-in-up">
              <span className="block text-gray-900">Comprehensive</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 drop-shadow-sm">
                Construction Solutions
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4 animate-fade-in-up animation-delay-200 leading-relaxed">
  From your <span className="font-semibold text-gray-900">first consultation</span> 
  to the <span className="font-semibold text-amber-600">final handover</span>, we provide 
  <span className="text-gray-900 font-medium"> tailored construction solutions</span>  
  built on craftsmanship, attention to detail, and a 
  <span className="text-amber-600 font-semibold"> commitment to excellence</span>.
</p>

          </div>

          {/* Professional Services List - Enhanced with animations */}
          <div className="space-y-0">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const serviceImage = getServiceImage(service.name);
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div
                    className={`flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center py-8 md:py-12 lg:py-16 ${
                      !isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Service Image - Better tablet sizing with enhanced animations */}
                    <div className="w-full lg:w-1/2 relative group px-4 sm:px-0">
                      <div className="relative h-64 md:h-72 lg:h-96 w-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
                        <Image
                          src={serviceImage}
                          alt={service.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-amber-900/40 group-hover:via-amber-900/20 transition-all duration-500" />

                        {/* Floating icon - Enhanced with animations */}
                        <div className="absolute top-4 md:top-6 left-4 md:left-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                          <div className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-xl lg:rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 flex items-center justify-center shadow-2xl shadow-amber-500/40 group-hover:shadow-amber-400/60 transition-all duration-500">
                            <Icon className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white transform transition-transform duration-300 group-hover:scale-110" />
                          </div>
                        </div>

                        {/* Animated overlay on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-400/20 via-transparent to-yellow-400/20" />
                      </div>
                    </div>

                    {/* Service Content - Enhanced with amber colors and animations */}
                    <div className="w-full lg:w-1/2 space-y-4 md:space-y-5 lg:space-y-6 px-4 sm:px-6 lg:px-0">
                      <div className="space-y-3 md:space-y-4">
                        {/* Enhanced service name with amber gradient and bigger mobile text */}
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight transform transition-all duration-500 hover:scale-105">
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-700 hover:via-amber-600 hover:to-yellow-600 transition-all duration-300 drop-shadow-sm">
                            {service.name}
                          </span>
                        </h3>

                        {/* Description with vertical amber line */}
                        <div className="relative pl-6 md:pl-8">
                          {/* Vertical amber line */}
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 via-amber-600 to-yellow-500 rounded-full shadow-lg shadow-amber-500/30 transform transition-all duration-500 hover:w-1.5 hover:shadow-amber-400/50"></div>

                          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed transform transition-all duration-300 hover:text-gray-700">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Key Features - Enhanced animations */}
                      <div className="space-y-2 md:space-y-3 pl-6 md:pl-8">
                        {getServiceFeatures(service.name).map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 group transform transition-all duration-300 hover:translate-x-2"
                            style={{
                              animationDelay: `${idx * 150 + i * 100}ms`,
                            }}
                          >
                            <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-lg shadow-amber-500/30">
                              <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-white transform transition-transform duration-200 group-hover:rotate-12" />
                            </div>
                            <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200 text-sm md:text-base lg:text-lg leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 md:pt-4 lg:pt-6 pl-6 md:pl-8">
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-white px-6 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 rounded-xl lg:rounded-2xl font-bold text-sm md:text-base lg:text-lg shadow-xl hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-500 hover:scale-105 hover:from-amber-600 hover:to-yellow-700 group w-full sm:w-auto justify-center sm:justify-start transform hover:-translate-y-1"
                        >
                          <span className="hidden sm:inline md:hidden lg:inline">
                            Learn More About {service.name.split(" ")[0]}
                          </span>
                          <span className="sm:hidden md:inline lg:hidden">
                            Learn More About {service.name.split(" ")[0]}
                          </span>
                          <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Professional Divider - Enhanced with amber accent */}
                  {idx < services.length - 1 && (
                    <div className="relative px-4 sm:px-6 lg:px-0">
                      <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                      >
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <div className="bg-gray-50 px-6 py-2">
                          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 opacity-80 animate-pulse shadow-lg shadow-amber-400/30"></div>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500">
                {" "}
                Hermeco
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We combine years of experience with modern techniques and
              materials to deliver exceptional results that exceed expectations.
            </p>
          </div>

          {/* Enhanced tablet grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-8 mb-10 md:mb-12 lg:mb-16">
            {[
              {
                icon: Shield,
                title: "Licensed & Insured",
                description:
                  "Full certification with comprehensive insurance coverage",
                color: "from-green-400 to-green-500",
              },
              {
                icon: Award,
                title: "5+ Years Experience",
                description: "Proven track record across London properties",
                color: "from-amber-400 to-yellow-500",
              },
              {
                icon: Star,
                title: "Quality Materials",
                description: "Premium components for lasting results",
                color: "from-amber-400 to-yellow-500",
              },
              {
                icon: Clock,
                title: "Reliable Service",
                description: "On-time completion with transparent pricing",
                color: "from-blue-400 to-blue-500",
              },
            ].map((feature, i) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={i}
                  className="text-center group px-4 md:px-2 transform transition-all duration-500 hover:scale-105"
                >
                  <div className="flex justify-center mb-4 md:mb-5 lg:mb-6">
                    <div
                      className={`h-16 w-16 md:h-18 md:w-18 lg:h-20 lg:w-20 xl:h-24 xl:w-24 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-2xl`}
                    >
                      <FeatureIcon className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Call to Action - Enhanced with amber colors */}
          <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-10 text-center border-2 border-amber-200/50 mx-4 sm:mx-0 shadow-xl shadow-amber-100/50">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-900">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-700 mb-6 md:mb-7 lg:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-4 leading-relaxed">
              Contact us today for a free consultation and detailed quote. Our
              team will assess your requirements and provide transparent,
              competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 md:py-4 lg:py-5 rounded-2xl font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:to-yellow-700 inline-flex items-center gap-2 md:gap-3 justify-center w-full sm:w-auto"
              >
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                Get Free Quote
              </Link>
              <Link
                href="tel:+447300825333"
                className="bg-white border-2 border-amber-300 hover:bg-amber-50 text-gray-900 px-6 sm:px-8 md:px-10 lg:px-12 py-3 md:py-4 lg:py-5 rounded-2xl font-bold text-sm sm:text-base md:text-lg lg:text-xl hover:border-amber-400 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 md:gap-3 justify-center w-full sm:w-auto shadow-lg hover:shadow-xl"
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                Call Now
              </Link>
            </div>
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
    </section>
  );
};

export default ServicesPage;
