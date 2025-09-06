"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  Wrench,
  Thermometer,
  AlertTriangle,
  CheckCircle,
  Award,
  Clock,
  Shield,
  Star,
  Phone,
  MapPin,
  ArrowRight,
  Home,
  Zap,
  Settings,
  Timer,
  BadgeCheck,
  Users,
  Calendar,
} from "lucide-react";

// Plumbing services data with SEO keywords
const plumbingServices = [
  {
    name: "Emergency Plumbing Services",
    description: "24/7 emergency plumbing services London - burst pipes, blocked drains, boiler breakdowns, and urgent plumbing repairs. Our Gas Safe registered emergency plumbers respond within 60 minutes across all London boroughs.",
    features: [
      "24/7 emergency callout service",
      "60-minute response time guarantee",
      "Burst pipe and leak repairs",
      "Emergency drain unblocking",
      "Boiler breakdown repairs",
      "Weekend and holiday availability"
    ],
    icon: AlertTriangle,
    color: "from-red-500 to-red-600",
  },
  {
    name: "Central Heating Installation & Repair",
    description: "Professional central heating installation, boiler replacement, and heating system repairs in London. Gas Safe certified engineers specializing in combi boilers, system boilers, and underfloor heating solutions.",
    features: [
      "Gas Safe registered engineers",
      "Combi boiler installations",
      "System boiler replacements",
      "Radiator installations and repairs",
      "Underfloor heating systems",
      "Annual boiler servicing"
    ],
    icon: Thermometer,
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Bathroom Plumbing & Installation",
    description: "Complete bathroom plumbing services including bathroom suite installations, shower installations, toilet repairs, and luxury bathroom renovations across London with full project management.",
    features: [
      "Complete bathroom installations",
      "Shower and bath installations",
      "Toilet repairs and replacements",
      "Basin and sink installations",
      "Bathroom renovations",
      "Wetroom conversions"
    ],
    icon: Home,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Drain Cleaning & Unblocking",
    description: "Professional drain cleaning services, blocked drain repairs, and CCTV drain surveys in London. High-pressure jetting, drain relining, and preventative drain maintenance for residential and commercial properties.",
    features: [
      "High-pressure drain jetting",
      "CCTV drain surveys",
      "Drain relining services",
      "Blocked toilet repairs",
      "Kitchen sink unblocking",
      "Preventative drain maintenance"
    ],
    icon: Settings,
    color: "from-green-500 to-green-600",
  },
  {
    name: "Kitchen Plumbing Services",
    description: "Specialist kitchen plumbing including dishwasher installation, washing machine connections, kitchen sink installations, and water softener systems for London homes and businesses.",
    features: [
      "Kitchen sink installations",
      "Dishwasher connections",
      "Washing machine plumbing",
      "Water softener installations",
      "Kitchen tap repairs",
      "Garbage disposal units"
    ],
    icon: Wrench,
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Gas Safety & Landlord Services",
    description: "Comprehensive landlord plumbing services including gas safety certificates, annual gas safety inspections, and tenant plumbing maintenance across London rental properties.",
    features: [
      "Annual gas safety certificates",
      "Landlord gas safety inspections",
      "Tenant maintenance services",
      "Emergency tenant callouts",
      "Property compliance checks",
      "Rental property plumbing audits"
    ],
    icon: BadgeCheck,
    color: "from-amber-500 to-yellow-500",
  },
];

// London areas served - SEO focused
const londonAreas = [
  "Central London", "North London", "South London", "East London", "West London",
  "Westminster", "Camden", "Islington", "Hackney", "Tower Hamlets",
  "Greenwich", "Lewisham", "Southwark", "Lambeth", "Wandsworth",
  "Hammersmith", "Kensington", "Chelsea", "Fulham", "Richmond"
];

// Testimonials with SEO keywords
const testimonials = [
  {
    name: "Sarah M.",
    location: "Kensington, London",
    rating: 5,
    text: "Excellent emergency plumbing service! Burst pipe repaired within an hour of calling. Professional Gas Safe registered plumber, competitive pricing, highly recommend for London plumbing services."
  },
  {
    name: "James T.",
    location: "Camden, London",
    rating: 5,
    text: "Outstanding boiler installation service. New combi boiler fitted perfectly, central heating working efficiently. Hermeco's plumbers are skilled, punctual, and provide excellent value for money."
  },
  {
    name: "Emma R.",
    location: "Greenwich, London",
    rating: 5,
    text: "Complete bathroom renovation including all plumbing work. Professional installation, quality workmanship, and finished on time. Best plumbing contractors we've used in London."
  }
];

const PlumbingServicesPage = () => {
  return (
    <>
      {/* SEO Meta Tags - would be in head in real implementation */}
      <div className="hidden">
        {/* Title: Professional Plumbing Services London | Emergency Plumbers | Gas Safe Registered | Hermeco */}
        {/* Description: Expert plumbing services London - 24/7 emergency plumbers, boiler installation, bathroom plumbing, drain cleaning. Gas Safe registered. Call 073 0082 5333 */}
        {/* Keywords: plumbing services London, emergency plumbers London, Gas Safe registered plumbers, boiler installation London, bathroom plumbing, drain cleaning London, central heating repair, plumbing contractors London */}
      </div>

      <section className="relative">
        {/* Professional Plumbing Hero Banner */}
        <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/plumbing.jpg"
            alt="Professional plumbing services London - Gas Safe registered plumbers, emergency repairs, boiler installation"
            fill
            className="object-cover"
            priority
          />
          {/* Hero overlay matching main services page */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

          <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 lg:px-8 max-w-6xl mx-auto">
            {/* SEO optimized main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-5 lg:mb-6 leading-tight">
              Professional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 drop-shadow-lg">
                Plumbing Services
              </span>
              London
            </h1>

            {/* SEO rich subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-200 leading-relaxed mb-6 md:mb-8 lg:mb-12 font-light px-2 md:px-4">
              Gas Safe registered emergency plumbers serving all London boroughs with{" "}
              <span className="text-yellow-400 font-semibold">
                24/7 emergency response, boiler installation & bathroom plumbing
              </span>
            </p>

            {/* Enhanced CTA section */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center items-center mb-8 md:mb-12 lg:mb-16 px-4">
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 text-white px-6 sm:px-7 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 rounded-2xl font-bold text-sm sm:text-base md:text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 hover:from-yellow-600 hover:to-amber-700 flex items-center gap-2 md:gap-3 w-full sm:w-auto justify-center"
              >
                <span className="hidden md:inline">
                  Free Plumbing Quote London
                </span>
                <span className="md:hidden">Free Plumbing Quote</span>
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="tel:+447300825333"
                className="group bg-white/15 backdrop-blur-md text-white px-6 sm:px-7 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 rounded-2xl font-bold text-sm sm:text-base md:text-lg border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 flex items-center gap-2 md:gap-3 w-full sm:w-auto justify-center"
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5 group-hover:rotate-12 transition-transform duration-200" />
                Emergency: 073 0082 5333
              </Link>
            </div>

            {/* Professional credentials with plumbing focus */}
            <div className="hidden md:flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-8 opacity-90 px-4">
              <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm bg-white/10 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/20">
                <Shield className="h-4 w-4 md:h-5 md:w-5 text-green-400" />
                <span>Gas Safe Registered</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm bg-white/10 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/20">
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm bg-white/10 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/20">
                <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
                <span>5+ Years London Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Plumbing Services Section */}
        <div id="plumbing-services" className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 md:mb-8 leading-tight">
                <span className="block text-gray-900">Complete Plumbing</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 drop-shadow-sm">
                  Solutions London
                </span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto px-4 leading-relaxed">
                From <span className="font-semibold text-gray-900">emergency plumbing repairs</span> to 
                <span className="text-amber-600 font-semibold"> complete bathroom installations</span>, our 
                <span className="text-gray-900 font-medium"> Gas Safe registered plumbers</span> deliver 
                professional plumbing services across all London boroughs with 
                <span className="text-amber-600 font-semibold"> guaranteed workmanship</span>.
              </p>
            </div>

            {/* Plumbing Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-16 md:mb-20">
              {plumbingServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl lg:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group border border-gray-100 hover:border-amber-200"
                  >
                    {/* Service icon */}
                    <div className="flex justify-center mb-6">
                      <div className={`h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl`}>
                        <Icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                      </div>
                    </div>

                    {/* Service name */}
                    <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4 text-center text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                      {service.name}
                    </h3>

                    {/* Service description */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 text-center group-hover:text-gray-700 transition-colors duration-200">
                      {service.description}
                    </p>

                    {/* Service features */}
                    <div className="space-y-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 group/item">
                          <div className="h-5 w-5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm md:text-base group-hover/item:text-gray-900 transition-colors duration-200">
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

        {/* London Areas Served - SEO Section */}
        <div className="bg-white py-12 md:py-16 lg:py-20 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Plumbing Services Across
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500">
                  {" "}London
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Our Gas Safe registered plumbers provide emergency and routine plumbing services 
                across all London boroughs with rapid response times.
              </p>
            </div>

            {/* London areas grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
              {londonAreas.map((area, i) => (
                <div key={i} className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200/50 rounded-xl p-3 md:p-4 text-center hover:from-amber-100 hover:to-yellow-100 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-600" />
                    <span className="text-gray-900 font-medium text-sm md:text-base">{area}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 text-sm md:text-base">
                <strong className="text-gray-900">Emergency Plumbing Available:</strong> 24/7 emergency callout service 
                across all London postcodes including same-day appointments and weekend availability.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Testimonials - SEO focused */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-gray-50 py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                What Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500">
                  {" "}Customers Say
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Real reviews from London customers who've experienced our professional plumbing services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-100">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Our Plumbing Services */}
        <div className="bg-white py-12 md:py-16 lg:py-20 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Why Choose Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500">
                  {" "}Plumbing Services
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Professional, reliable plumbing services with Gas Safe registered engineers 
                and transparent pricing across London.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
              {[
                {
                  icon: Shield,
                  title: "Gas Safe Registered",
                  description: "All plumbers fully certified with comprehensive insurance coverage",
                  color: "from-green-400 to-green-500",
                },
                {
                  icon: Clock,
                  title: "24/7 Emergency Service",
                  description: "Round-the-clock emergency plumbing response across London",
                  color: "from-red-400 to-red-500",
                },
                {
                  icon: Star,
                  title: "Quality Guaranteed",
                  description: "Premium materials and workmanship with warranty protection",
                  color: "from-amber-400 to-yellow-500",
                },
                {
                  icon: Timer,
                  title: "Rapid Response",
                  description: "60-minute emergency response time with transparent pricing",
                  color: "from-blue-400 to-blue-500",
                },
              ].map((feature, i) => {
                const FeatureIcon = feature.icon;
                return (
                  <div
                    key={i}
                    className="text-center group px-4 md:px-2 transform transition-all duration-500 hover:scale-105"
                  >
                    <div className="flex justify-center mb-6">
                      <div
                        className={`h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-2xl`}
                      >
                        <FeatureIcon className="h-10 w-10 md:h-12 md:w-12 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-xl md:text-2xl mb-4 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 py-16 md:py-20 border-t border-amber-200/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-100 backdrop-blur-xl rounded-3xl p-8 md:p-12 text-center border-2 border-amber-200/50 shadow-xl shadow-amber-100/50">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Need Professional Plumbing Services in London?
              </h3>
              <p className="text-gray-700 mb-8 max-w-3xl mx-auto text-lg md:text-xl px-4 leading-relaxed">
                Our Gas Safe registered plumbers are available 24/7 for emergency repairs, 
                boiler installations, and complete bathroom renovations. Get your free quote today 
                with transparent pricing and guaranteed workmanship.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:to-yellow-700 inline-flex items-center gap-3 justify-center w-full"
                >
                  <ArrowRight className="h-6 w-6" />
                  Get Free Plumbing Quote
                </Link>
                
                <Link
                  href="tel:+447300825333"
                  className="bg-white border-2 border-amber-300 hover:bg-amber-50 text-gray-900 px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl hover:border-amber-400 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 justify-center w-full shadow-lg hover:shadow-xl"
                >
                  <Phone className="h-6 w-6" />
                  Emergency: 073 0082 5333
                </Link>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 text-base md:text-lg">
                  <strong className="text-gray-900">Available Now:</strong> Emergency plumbing services, 
                  same-day appointments, and weekend callouts across all London boroughs.
                </p>
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
    </>
  );
};

export default PlumbingServicesPage;