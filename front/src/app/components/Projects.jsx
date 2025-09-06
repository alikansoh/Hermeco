"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Shield, Hammer, ChevronLeft, ChevronRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const projects = [
  {
    title: "Garden Revitalisation with Fresh Turf & Stone Edging",
    description:
      "We transformed this garden space by laying down fresh turf to create a vibrant green lawn, bordered neatly with natural stone edging for a clean and defined look. The design includes a central feature shrub that adds structure and visual interest, while the stone boundary around the planting area provides a rustic, natural charm. The result is a tidy, refreshed garden with a blend of greenery and stonework, making it both functional and visually appealing.",
    image: "/project1.jpeg",
    date: "July 2025",
    location: "London, UK",
  },
  {
    title: "Professional Brick Wall Construction for Garden Outbuilding", 
    description:
      "We built a strong and durable brick wall to complete this garden outbuilding, ensuring both functionality and a clean, professional finish. The wall was carefully constructed using high-quality bricks for long-lasting strength and excellent insulation. This project adds both security and style to the property, blending seamlessly with the outdoor space. Our expert bricklaying guarantees a precise and tidy result, making it ideal for garden rooms, sheds, or extensions.",
    image: "/project3.jpeg",
    date: "June 2025",
    location: "London, UK",
  },
  {
    title: "Modern Wooden Pergola with Outdoor Lighting and Patio Installation",
    description:
      "We designed and installed a stunning wooden pergola complete with integrated outdoor lighting to create the perfect entertainment space. The project included a new patio area with premium stone paving, creating a seamless indoor-outdoor living experience. The pergola features weather-resistant timber construction and LED lighting system for evening ambiance.",
    image: "/project2.jpeg",
    date: "May 2025",
    location: "London, UK",
  },
  {
    title: "Brickwork Construction for Residential House Extension",
    description:
      "We carried out professional brickwork for this residential house extension, ensuring durability, precision, and a seamless match with the existing property. The extension is built with high-quality materials and skilled craftsmanship, providing a solid foundation for additional living space. Our team focused on accurate alignment, insulation, and structural strength to deliver long-lasting results. This project enhances the home’s value and functionality while maintaining a consistent aesthetic with the original building.",
    image: "/project4.jpeg",
    date: "April 2025",
    location: "London, UK",
  },
  {
    title: "Modern Outdoor Patio Renovation with Stone Paving",
    description:"This project showcases a beautifully renovated outdoor patio area, featuring sleek grey stone paving with contrasting brickwork details. The design integrates raised sections with clean brick steps, offering a contemporary yet timeless look. The mix of modern paving slabs and traditional brick creates a balanced aesthetic, perfect for both residential and commercial outdoor spaces. Ideal for enhancing curb appeal, this renovation project emphasizes durability, low maintenance, and stylish functionality.",
    image: "/project6.jpeg",
    date: "April 2025",
    location: "London, UK",
  },
  {
    title: "Structural Garage & Extension Build with Insulation Installation",
    description:"This project highlights the construction of a robust garage/extension space with steel reinforcement and timber roofing. The build integrates high-performance insulation panels for energy efficiency, ensuring long-term sustainability and comfort. With a focus on structural integrity and modern building techniques, the space is designed to support versatile usage, from storage to workshop or living expansion. This project is a prime example of combining strong foundations with eco-friendly insulation for a practical and future-proof property upgrade",
    image: "/project7.jpeg",
    date: "April 2025",
    location: "London, UK",
  },
];

const ProjectsSliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 1.1, spacing: 20 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2.1, spacing: 24 } },
      "(min-width: 1200px)": { slides: { perView: 3, spacing: 28 } },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const toggleDescription = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Function to truncate text
  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  return (
    <section className="relative bg-white py-24">
      {/* Professional Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-6 py-3 rounded-lg font-semibold mb-6">
            <Hammer className="h-5 w-5 text-amber-600" />
            BUILDING & RENOVATION SPECIALISTS
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Expert Construction &{" "}
            <span className="text-amber-500">Renovation Services</span>
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed font-medium">
            5 years of professional building services including kitchen renovation, bathroom remodeling, 
            house extensions, and complete property refurbishment across the UK.
          </p>

          {/* Company Credentials */}
          <div className="flex items-center justify-center gap-8 mt-10 flex-wrap">
            <div className="flex items-center gap-2 text-gray-700">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="font-semibold">Fully Insured Builders</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Hammer className="h-5 w-5 text-amber-500" />
              <span className="font-semibold">Quality Construction</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Hammer className="h-5 w-5 text-amber-500" />
              <span className="font-semibold">5 Years Experience</span>
            </div>
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="md:hidden flex items-center justify-center gap-2 mb-6">
          <ChevronLeft className="h-5 w-5 text-amber-500 animate-bounce" />
          <span className="text-sm text-gray-600 font-medium">Swipe to explore projects</span>
          <ChevronRight className="h-5 w-5 text-amber-500 animate-bounce" />
        </div>

        {/* Professional Slider */}
        <div ref={sliderRef} className="keen-slider mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="keen-slider__slide flex"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 flex flex-col ${
                hoveredCard === index 
                  ? 'shadow-2xl transform -translate-y-2 border-amber-300'  
                  : 'hover:shadow-xl'
              }`}>
                
                {/* Project Image */}
                <div className="relative h-79 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredCard === index ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  
                  {/* Professional overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                {/* Professional Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  
                  {/* Description with Read More */}
                  <div className="text-gray-600 flex-grow leading-relaxed mb-4">
                    <p>
                      {expandedCards[index] ? project.description : truncateText(project.description)}
                    </p>
                    {project.description.length > 150 && (
                      <button
                        onClick={() => toggleDescription(index)}
                        className="text-amber-500 hover:text-amber-600 font-semibold text-sm mt-2 transition-colors duration-200 inline-flex items-center gap-1"
                      >
                        {expandedCards[index] ? (
                          <>
                            Show less
                            <ChevronLeft className="h-3 w-3 rotate-90" />
                          </>
                        ) : (
                          <>
                            Read more
                            <ChevronRight className="h-3 w-3 -rotate-90" />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="h-4 w-4 text-amber-500" />
                        <span className="font-medium">Completed: {project.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4 text-amber-500" />
                        <span className="font-medium">{project.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Professional CTA */}
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 bg-white border-2 border-amber-500 text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 group"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Indicators */}
        <div className="flex items-center justify-center gap-2 mb-16">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => instanceRef.current?.moveToIdx(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-amber-500'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Mobile Progress Bar */}
        <div className="md:hidden mb-8">
          <div className="bg-gray-200 rounded-full h-1 max-w-xs mx-auto">
            <div 
              className="bg-amber-500 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / projects.length) * 100}%` }}
            />
          </div>
          <div className="text-center mt-2 text-sm text-gray-500">
            {currentSlide + 1} of {projects.length} projects
          </div>
        </div>

        {/* Company Stats & CTA */}
        <div className="bg-white border-2 border-amber-500 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Building Project?
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                From kitchen renovation to complete property refurbishment, we deliver 
                professional construction services with guaranteed quality workmanship.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center md:text-left">
                  <div className="text-3xl font-bold text-amber-500 mb-1">150+</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wide">Projects Completed</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-3xl font-bold text-amber-500 mb-1">5+</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wide">Years Experience</div>
                </div>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg"
              >
                View All Projects
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 text-center border-2 border-amber-200">
                <div className="text-2xl font-bold text-amber-500 mb-2">98%</div>
                <div className="text-gray-600 text-sm">On-Time Delivery</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border-2 border-amber-200">
                <div className="text-2xl font-bold text-amber-500 mb-2">100%</div>
                <div className="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border-2 border-amber-200">
                <div className="text-2xl font-bold text-amber-500 mb-2">5+</div>
                <div className="text-gray-600 text-sm">Team Members</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border-2 border-amber-200">
                <div className="text-2xl font-bold text-amber-500 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Navigation */}
      <div className="hidden md:block">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white border-2 border-gray-200 hover:border-amber-500 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <ArrowRight className="h-6 w-6 text-gray-600 group-hover:text-amber-500 rotate-180 transition-colors duration-200" />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white border-2 border-gray-200 hover:border-amber-500 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <ArrowRight className="h-6 w-6 text-gray-600 group-hover:text-amber-500 transition-colors duration-200" />
        </button>
      </div>
    </section>
  );
};

export default ProjectsSliderSection;