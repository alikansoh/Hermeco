"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Paintbrush,
  Palette,
  Droplets,
  Award,
  Star,
  Clock,
  Calculator,
  Phone,
  Home,
  ArrowRight,
  Shield,
} from "lucide-react";

const PaintingDecorationPage = () => {
  // Service features
  const paintingFeatures = [
    {
      title: "Interior Painting",
      description: "Transform your living spaces with expert wall, ceiling, and woodwork painting using premium finishes. Our London team delivers flawless finishes for bedrooms, lounges, kitchens, hallways, and staircases.",
      icon: Paintbrush,
    },
    {
      title: "Exterior Painting",
      description: "Weatherproof, long-lasting exterior painting for facades, windows, doors, fences, and outbuildings. Protect your property from the elements and enhance curb appeal with professional exterior painters.",
      icon: Paintbrush,
    },
    {
      title: "Wallpapering & Feature Walls",
      description: "Professional wallpaper installation and bespoke feature wall designs for unique spaces. Our decorators handle all wallpaper types, including vinyl, textured, mural, and designer papers.",
      icon: Palette,
    },
    {
      title: "Decorative Finishes",
      description: "Specialist finishes including Venetian plaster, murals, stencilling, and textured effects for luxury interiors and commercial premises in London.",
      icon: Droplets,
    },
  ];

  // SEO keywords - you can scatter and repeat these throughout the page in visible and invisible content for SEO optimization
  const seoKeywords = [
    "London painting and decorating",
    "professional painters London",
    "interior painting London",
    "exterior painting London",
    "wallpaper hanging London",
    "feature wall decorating",
    "commercial painting London",
    "residential painting services",
    "trusted decorators London",
    "quality paint finishes",
    "property painting London",
    "home decoration services London",
    "licensed painters London",
    "insured decorators London",
    "affordable painting London",
    "fast painting service London",
    "luxury decorating London",
    "eco-friendly painting London",
    "painters near me London",
    "best painting company London",
    "London house painting",
    "office painting London",
    "school painting London",
    "hotel painting London",
    "shop painting London"
  ];

  // Benefits
  const benefits = [
    {
      icon: Award,
      title: "Skilled Decorators",
      description: "Experienced London decorators with proven expertise and a portfolio of outstanding projects for homes and businesses.",
      color: "from-amber-400 to-yellow-500",
    },
    {
      icon: Star,
      title: "Premium Materials",
      description: "We use trusted brands such as Dulux, Farrow & Ball, and Crown Paints for beautiful, durable results that last for years.",
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Efficient project timelines and minimal disruption to your routine. We work quickly and tidy up every day.",
      color: "from-purple-400 to-purple-500",
    },
    {
      icon: Calculator,
      title: "Transparent Pricing",
      description: "Clear, competitive quotes—no hidden fees. Get a detailed breakdown for every painting and decorating job.",
      color: "from-amber-400 to-yellow-500",
    },
    {
      icon: Shield,
      title: "Insured & Guaranteed",
      description: "Fully insured with workmanship guarantee. All our work is covered for your peace of mind.",
      color: "from-green-400 to-green-500",
    },
  ];

  // Areas served
  const areas = [
    "Central London", "North London", "South London", "East London", "West London",
    "Kensington", "Chelsea", "Islington", "Camden", "Greenwich", "Hampstead", "Richmond",
    "Westminster", "Tower Hamlets", "Lambeth", "Hammersmith", "Ealing", "Barnet", "Brent"
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[55vh] md:h-[65vh] lg:h-[75vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/painting.jpg"
          alt="Professional painting and decorating London"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-transparent"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-600">Painting</span> & Decoration London
          </h1>
          <p className="text-base md:text-xl font-light mb-6">
            Expert interior and exterior painting, wallpapering, and bespoke decorative finishes for homes, offices, shops, and hotels across London.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/quote"
              className="group bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-8 py-3 rounded-2xl font-bold text-base shadow-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              Free Quote <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="tel:+447300825333"
              className="group bg-white/15 backdrop-blur-md text-white px-8 py-3 rounded-2xl font-bold text-base border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all flex items-center gap-2"
            >
              <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
              Call: 073 0082 5333
            </Link>
          </div>
          {/* Hidden SEO keywords */}
          <div style={{ display: "none" }}>
            {seoKeywords.join(", ")}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500">Painting & Decorating Services London</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-xl mx-auto">
              From single rooms to whole property transformations, we deliver perfect finishes tailored to your style and needs. Whether you&apos;re a homeowner, landlord, business or property manager, our London painters deliver excellence every time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paintingFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-amber-50 via-white to-yellow-50 p-7 rounded-2xl shadow-lg border border-gray-100 hover:scale-105 transition-transform group"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{feature.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm md:text-base">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500">Painting Process</span>
            </h2>
            <p className="text-gray-700 max-w-xl mx-auto mb-8">
              Hermeco Construction follows a comprehensive process for painting and decorating in London to ensure a flawless finish and complete customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Consultation & Survey",
                description: "Free site visit and assessment of your painting and decorating requirements. We advise on colours, finishes and paint brands.",
                icon: Paintbrush,
              },
              {
                step: "02",
                title: "Preparation",
                description: "Surface cleaning, filling cracks, sanding, masking and protecting furniture/floors for a perfect base.",
                icon: Shield,
              },
              {
                step: "03",
                title: "Painting & Decorating",
                description: "Application of paint, wallpaper or decorative finishes according to the agreed design and finish.",
                icon: Palette,
              },
              {
                step: "04",
                title: "Inspection & Handover",
                description: "Final inspection with you, touch-ups as needed, and a tidy clean handover. All work is guaranteed.",
                icon: Star,
              },
            ].map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center group hover:scale-105 transition-all duration-300">
                  <div className="relative mb-4">
                    <div className="h-16 w-16 mx-auto rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400 flex items-center justify-center group-hover:scale-110 shadow-xl">
                      <StepIcon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-white border-4 border-amber-500 flex items-center justify-center">
                      <span className="text-amber-600 font-bold">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-base md:text-lg mb-2 text-gray-900 group-hover:text-amber-600 transition-colors">{step.title}</h3>
                  <p className="text-gray-700 text-sm md:text-base">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500">Hermeco</span> for Painting & Decorating in London?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {benefits.map((benefit, i) => {
              const BenefitIcon = benefit.icon;
              return (
                <div
                  key={i}
                  className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-7 text-center shadow-lg hover:scale-105 border border-gray-100 transition-transform group"
                >
                  <div className={`h-14 w-14 mx-auto mb-4 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <BenefitIcon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-amber-600 transition-colors">{benefit.title}</h3>
                  <p className="text-gray-700 text-base">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="bg-amber-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg md:prose-xl max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              London Painting & Decorating Specialists
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hermeco Construction is your trusted local painting and decorating company in London. With a team of experienced painters and decorators, we provide high-quality painting, wallpapering and decorative services for residential and commercial properties.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our painting and decorating services cover all areas of London, including North London, South London, West London, East London, and Central London. We specialise in interior painting for houses, flats, apartments, offices, shops, schools, hotels, and restaurants. Our expert decorators are highly skilled in exterior painting, including masonry paint, wood paint, metal paint, and specialist coatings for all types of buildings.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you need a single room painted, full house decoration, commercial painting, or luxury decorative finishes, Hermeco delivers on-time and on-budget. Our process includes free consultations, expert colour advice, surface preparation, use of eco-friendly paints, and a written guarantee for all work.
            </p>
            <ul className="text-gray-700 mb-6">
              <li>Interior painting: walls, ceilings, doors, windows, woodwork</li>
              <li>Exterior painting: brickwork, render, fences, window frames</li>
              <li>Wallpaper hanging: vinyl, murals, designer papers</li>
              <li>Feature wall design and decoration</li>
              <li>Commercial painting for offices, shops, schools, hotels</li>
              <li>Residential painting for homes, flats, and apartments</li>
              <li>Specialist finishes: Venetian plaster, murals, stencilling</li>
              <li>Eco-friendly and low-VOC paints available</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our London painters are fully insured, certified and experienced. We offer competitive prices, free quotes, and flexible working hours to suit your needs. Hermeco Construction is rated among the best painting and decorating companies in London for quality, reliability, and customer satisfaction.
            </p>
            <h3 className="text-2xl font-bold text-amber-600 mb-4">Request Your Free Painting Quote</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Contact Hermeco Construction for a free, no-obligation quote for painting and decorating in London. Our experts will visit your property, assess your needs, and provide a detailed quote with transparent pricing. Whether you need home painting, office decoration, shop painting or school painting, we guarantee professional results.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Call us today on <span className="font-bold text-amber-600">073 0082 5333</span> or use our online quote form. Discover why London homeowners and businesses trust Hermeco for painting and decorating services.
            </p>
          </div>
        </div>
      </div>

      {/* Service Areas Section */}
      <div className="bg-white py-10 md:py-14 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
              Painting & Decorating <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500">London Service Areas</span>
            </h2>
            <p className="text-gray-600 text-base max-w-xl mx-auto">
              We serve residential and commercial clients across London. No job too big or small!
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {areas.map((area, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200/50 rounded-xl p-4 hover:border-amber-300 hover:shadow-lg transition-all group"
              >
                <Home className="h-5 w-5 text-amber-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-gray-900 font-semibold text-sm group-hover:text-amber-600 transition-colors">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for a Fresh Look?
          </h2>
          <p className="text-white/90 text-base md:text-xl mb-8">
            Get your free painting and decoration quote today. Fast, friendly service across London for homes, offices, shops, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="group bg-white text-amber-600 px-8 py-4 rounded-2xl font-bold text-base shadow-xl hover:bg-gray-50 transition-all flex items-center gap-3 justify-center"
            >
              <Calculator className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              Free Quote
            </Link>
            <Link
              href="tel:+447300825333"
              className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all flex items-center gap-3 justify-center"
            >
              <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              Call: 073 0082 5333
            </Link>
          </div>
          <div className="mt-8 text-center">
            <p className="text-white/80 text-sm">
              Fully Insured • Free Consultations • Quality Guaranteed • London Painting & Decorating Specialists
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingDecorationPage;