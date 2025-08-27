"use client";
import { Hammer, HardHat, Wrench, Home, MapPin, Clock, Trophy, Shield, Star, CheckCircle, ArrowRight, Sparkles, Users, Award } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const scaleAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.section 
      className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 py-16 md:py-24 lg:py-32 overflow-hidden"
      itemScope 
      itemType="https://schema.org/ConstructionCompany"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Enhanced animated background elements */}
      <motion.div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-yellow-200/60 to-amber-200/60 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-36 h-36 bg-gradient-to-r from-purple-200/35 to-pink-200/35 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.45, 0.25]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-orange-200/20 to-red-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.35, 0.15],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating construction elements */}
        <motion.div 
          className="absolute top-16 left-1/3 w-2 h-2 bg-yellow-400/40 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7
          }}
        />
        <motion.div 
          className="absolute top-80 right-1/3 w-3 h-3 bg-blue-400/30 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/2 w-2 h-2 bg-green-400/35 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.35, 0.75, 0.35]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
        />
      </motion.div>

      {/* Enhanced construction grid pattern overlay with decorative elements */}
      <div className="absolute inset-0 opacity-8">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 40px,
            rgba(156, 163, 175, 0.3) 40px,
            rgba(156, 163, 175, 0.3) 41px
          ), repeating-linear-gradient(
            90deg,
            transparent,
            transparent 40px,
            rgba(156, 163, 175, 0.3) 40px,
            rgba(156, 163, 175, 0.3) 41px
          )`
        }}></div>
        
        {/* Decorative geometric shapes */}
        <motion.div 
          className="absolute top-32 left-16 w-4 h-4 bg-orange-300/20 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-64 right-32 w-6 h-6 bg-blue-300/20 rotate-12"
          animate={{
            rotate: [12, 192, 12],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        <motion.div 
          className="absolute bottom-48 left-1/3 w-3 h-3 bg-yellow-300/25 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.25, 0.7, 0.25]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-32 right-1/4 w-5 h-5 bg-green-300/20 rotate-45"
          animate={{
            rotate: [45, 405, 45],
            y: [0, -10, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Construction tool silhouettes */}
        <motion.div 
          className="absolute top-20 right-20 opacity-5"
          animate={{
            rotate: [12, 32, 12],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Hammer className="h-12 w-12 text-gray-400" />
        </motion.div>
        <motion.div 
          className="absolute bottom-20 left-20 opacity-5"
          animate={{
            rotate: [-12, -32, -12],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Wrench className="h-10 w-10 text-gray-400" />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced heading section with animations */}
        <motion.header 
          className="text-center mb-12 md:mb-16 lg:mb-20"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100 to-yellow-100 backdrop-blur-xl px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-bold text-orange-700 mb-6 md:mb-8 shadow-xl border border-orange-200"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)"
            }}
            animate={floatingAnimation}
          >
            <motion.div
              animate={{
                rotate: [0, 15, -15, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <HardHat className="h-4 w-4 md:h-5 md:w-5 text-orange-600" />
            </motion.div>
            <span itemProp="name">Premier Construction Company</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-orange-600" />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 md:mb-8 leading-tight"
            variants={itemVariants}
          >
            <motion.span 
              className="block"
              animate={{
                y: [0, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Professional
            </motion.span>
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-600 drop-shadow-lg"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Building & Construction
            </motion.span>
            <motion.span 
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-700 font-semibold mt-2"
              animate={{
                y: [0, 5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              Services in London
            </motion.span>
          </motion.h1>
          
          <motion.div 
            className="max-w-4xl mx-auto" 
            itemProp="description"
            variants={itemVariants}
          >
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-4 md:mb-6 font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <strong className="text-gray-900">London's trusted construction specialists</strong> with over 20 years experience in 
              <span className="text-orange-600 font-semibold"> home renovations, building projects, electrical work, plumbing services,</span> and 
              <span className="text-blue-600 font-semibold"> landscape construction</span> across Greater London.
            </motion.p>
            <motion.p 
              className="text-base md:text-lg text-gray-600 font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              From <strong className="text-gray-900">kitchen extensions</strong> and <strong className="text-gray-900">loft conversions</strong> to complete <strong className="text-gray-900">property renovations</strong> - 
              we deliver exceptional craftsmanship with full licensing and insurance coverage.
            </motion.p>
          </motion.div>

          {/* Enhanced location badges */}
          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mt-6 md:mt-8" 
            itemProp="areaServed" 
            itemScope 
            itemType="https://schema.org/City"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center gap-2 bg-white/90 backdrop-blur-xl px-4 md:px-6 py-2 md:py-3 rounded-full text-gray-700 shadow-xl border border-gray-200"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 1)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              animate={floatingAnimation}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <MapPin className="h-4 w-4 text-orange-500" />
              </motion.div>
              <span itemProp="name" className="text-sm md:text-base">London & Greater London Area</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 bg-white/90 backdrop-blur-xl px-4 md:px-6 py-2 md:py-3 rounded-full text-gray-700 shadow-xl border border-gray-200"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 1)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              animate={{
                y: [0, -8, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Clock className="h-4 w-4 text-blue-500" />
              </motion.div>
              <span className="text-sm md:text-base">24/7 Emergency Services</span>
            </motion.div>
          </motion.div>
        </motion.header>

        {/* Enhanced responsive content grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left column - Enhanced company info */}
          <motion.div 
            className="space-y-6 md:space-y-8"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-gray-200 shadow-2xl group"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 1)",
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.15)"
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 mb-6">
                <motion.div 
                  className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl md:rounded-3xl shadow-xl"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5
                  }}
                  animate={{
                    boxShadow: [
                      "0 10px 30px rgba(251, 191, 36, 0.3)",
                      "0 20px 40px rgba(251, 191, 36, 0.5)",
                      "0 10px 30px rgba(251, 191, 36, 0.3)"
                    ]
                  }}
                  transition={{
                    boxShadow: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Home className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </motion.div>
                </motion.div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Comprehensive Construction Services</h2>
                  <p className="text-orange-600 font-semibold text-sm md:text-base">Fully Licensed & Insured Contractors</p>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  we're <strong className="text-gray-900">London's premier construction and renovation specialists</strong> serving 
                  homeowners and commercial clients across all London boroughs. Our expert team provides:
                </p>
                
                {/* Enhanced responsive service grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 my-4 md:my-6">
                  {[
                    "Kitchen Extensions & Renovations",
                    "Loft Conversions & Extensions", 
                    "Bathroom Renovations",
                    "Electrical Installation & Repair",
                    "Plumbing Services",
                    "Landscape Construction",
                    "Property Maintenance",
                    "Emergency Building Repairs"
                  ].map((service, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-2 group/item"
                      whileHover={{
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 360, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      </motion.div>
                      <span className="text-sm md:text-base font-medium text-gray-700">{service}</span>
                    </motion.div>
                  ))}
                </div>

                <p>
                  All projects come with <strong className="text-orange-600">full guarantees</strong>, 
                  comprehensive insurance coverage, and our commitment to delivering exceptional results on time and within budget.
                </p>
              </div>
            </motion.div>

            {/* Enhanced CTA section */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 md:gap-6"
              variants={itemVariants}
            >
              <motion.a
                href="/contact"
                className="flex-1 group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 text-white px-6 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg shadow-2xl"
                aria-label="Get free construction quote in London"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(251, 191, 36, 0.4)"
                }}
                whileTap={{
                  scale: 0.98
                }}
                animate={{
                  boxShadow: [
                    "0 20px 40px rgba(251, 191, 36, 0.2)",
                    "0 25px 50px rgba(251, 191, 36, 0.3)",
                    "0 20px 40px rgba(251, 191, 36, 0.2)"
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                Get Free Quote 
                <motion.div
                  animate={{
                    x: [0, 5, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
                </motion.div>
              </motion.a>
              <motion.a
                href="tel:+447300825333"
                className="flex-1 group inline-flex items-center justify-center gap-3 bg-white/90 backdrop-blur-xl text-gray-800 px-6 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg border border-gray-300"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  borderColor: "#9ca3af",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{
                  scale: 0.98
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Hammer className="h-5 w-5 md:h-6 md:w-6" />
                </motion.div>
                Call Now
              </motion.a>
            </motion.div>
            <motion.p 
              className="text-gray-600 text-sm md:text-base text-center lg:text-left"
              animate={{
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Free estimates • No obligation • Quick response within 2 hours
            </motion.p>
          </motion.div>

          {/* Right column - Enhanced responsive statistics */}
          <motion.div 
            className="grid grid-cols-2 gap-4 md:gap-6"
            variants={containerVariants}
          >
            {[
              {
                icon: Users,
                number: "5+",
                title: "Years Experience",
                subtitle: "Each Team Member",
                gradient: "from-orange-500 to-red-500",
                bgGradient: "from-orange-100 to-red-100",
                delay: 0
              },
              {
                icon: Shield,
                number: "100%",
                title: "Licensed & Insured",
                subtitle: "Full Coverage & Compliance",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-100 to-cyan-100",
                delay: 0.1
              },
              {
                icon: Trophy,
                number: "100+",
                title: "Projects Completed",
                subtitle: "Successful Renovations",
                gradient: "from-amber-500 to-yellow-500",
                bgGradient: "from-amber-100 to-yellow-100",
                delay: 0.2
              },
              {
                icon: Star,
                number: "98%",
                title: "Client Satisfaction",
                subtitle: "Happy Customers",
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-100 to-emerald-100",
                delay: 0.3
              }
            ].map((stat, index) => (
                <motion.article
                  key={index}
                  className="group bg-white/90 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl md:rounded-3xl p-4 md:p-6 text-center"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    boxShadow: "0 30px 60px rgba(0, 0, 0, 0.15)"
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: stat.delay,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${stat.bgGradient} backdrop-blur-xl rounded-xl md:rounded-2xl mb-3 md:mb-4 shadow-lg border border-gray-200`}
                    whileHover={{
                      scale: 1.2,
                      rotate: 10
                    }}
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      },
                      rotate: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.4
                      }}
                    >
                      <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-gray-700" />
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 md:mb-2`}
                    animate={{
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.6
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <motion.h3 
                    className="text-sm md:text-lg font-bold text-gray-900 mb-1"
                    whileHover={{
                      color: "#374151"
                    }}
                  >
                    {stat.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 text-xs md:text-sm font-medium leading-tight"
                    animate={{
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.8
                    }}
                  >
                    {stat.subtitle}
                  </motion.p>
                </motion.article>
              ))}
          </motion.div>
        </div>

        {/* Enhanced responsive service areas section */}
        <motion.footer 
          className="mt-16 md:mt-20 lg:mt-24 text-center border-t border-gray-200 pt-8 md:pt-12"
          variants={itemVariants}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6"
            animate={{
              y: [0, -3, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Serving All London Boroughs
          </motion.h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-2 md:gap-3 text-xs md:text-sm"
            variants={containerVariants}
          >
            {[
              "Westminster", "Camden", "Islington", "Hackney", "Tower Hamlets", "Greenwich",
              "Lewisham", "Southwark", "Lambeth","Ealing", "Wandsworth", "Hammersmith & Fulham",
              "Kensington & Chelsea", "City of London", "Barnet", "Enfield", "Haringey"
            ].map((borough, index) => (
              <motion.span
                key={index}
                className="bg-white/90 backdrop-blur-xl px-3 py-1 md:px-4 md:py-2 rounded-full text-gray-700 border border-gray-200 shadow-sm"
                whileHover={{
                  scale: 1.1,
                  borderColor: "#fb923c",
                  color: "#ea580c",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  boxShadow: "0 10px 25px rgba(251, 146, 60, 0.2)"
                }}
                initial={{ y: 0, opacity: 0 }}
                animate={{
                  y: [0, -2, 0],
                  opacity: 1
                }}
                transition={{
                  y: {
                    duration: 3 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1
                  },
                  opacity: {
                    duration: 0.6,
                    delay: index * 0.05,
                    ease: "easeOut"
                  }
                }}
              >
                {borough}
              </motion.span>
            ))}
          </motion.div>
          <motion.p 
            className="text-gray-600 text-sm md:text-base mt-4 md:mt-6 max-w-4xl mx-auto"
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Professional construction and renovation services across Greater London • Free quotes • Emergency callouts available • Licensed & insured professionals
          </motion.p>
        </motion.footer>
      </div>
    </motion.section>
  );
};

export default AboutSection;