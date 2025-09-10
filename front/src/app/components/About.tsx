  "use client";
  import { motion } from "framer-motion";
  import Image from "next/image";
  import { useEffect, useState } from "react";
  import {
    Building2,
    ShieldCheck,
    Award,
    Users,
    CheckCircle,
    MapPin,
    Clock,
    Sprout,
    Home,
    ArrowUp,
    Wrench,
    Trees,
    Tractor,
    Briefcase,
  } from "lucide-react";
  import { useInView } from "react-intersection-observer";

  const stats = [
    {
      icon: Building2,
      value: 5,
      label: "Years Experience",
      description: "Five years of construction excellence",
    },
    {
      icon: ShieldCheck,
      value: 50,
      label: "Licensed Projects",
      description: "Fully licensed and insured work",
    },
    {
      icon: Award,
      value: 125,
      label: "Successful Renovations",
      description: "Completed residential transformations",
    },
    {
      icon: Users,
      value: 200,
      label: "Happy Clients",
      description: "Satisfied customers across London",
    },
  ];

  const achievements = [
    { icon: CheckCircle, text: "Fully Licensed & Insured Contractors" },
    { icon: Wrench, text: "Expert Engineering Solutions" },
    { icon: Clock, text: "On-Time Project Completion Guarantee" },
  ];

  const services = [
    { name: "Construction & Renovation", icon: Building2 },
    { name: "Home Extensions", icon: Home },
    { name: "Landscaping Services", icon: Trees },
    { name: "Agriculture Engineering", icon: Tractor },
    { name: "Property Development", icon: Briefcase }
  ];

  const londonBoroughs = [
    "Westminster", "Camden", "Islington", 
    "Greenwich", "Southwark",
    "Hammersmith", "Chelsea", "Brent", "Ealing",
    "Hounslow", "Richmond upon Thames", "Kingston upon Thames", 
    "Sutton", "Croydon", "Bromley", "Barnet", "Harrow", 
    "Enfield"
  ];

  const Counter = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 16);

      return () => clearInterval(counter);
    }, [value]);

    return <span>{count}+</span>;
  };

  const AboutSection = () => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });

    return (
      <>
        <section
          className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-10 md:py-32 overflow-hidden"
          role="main"
          aria-labelledby="about-heading"
        >
          {/* Background pattern only */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            {/* SEO-optimized heading */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h1
                id="about-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6"
              >
                Transforming Properties with{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  Quality & Expertise
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
              >
                We are London&apos;s premier{" "}
                <strong className="text-gray-900">
                  construction, renovation, and landscaping company
                </strong>
                , specialising in{" "}
                <strong className="text-yellow-700">
                  home extensions, loft conversions, property renovations, landscaping services, agriculture engineering, and complete property improvements
                </strong>{" "}
                across Greater London with unmatched quality, attention to detail,
                and customer satisfaction.
              </motion.p>

              {/* Services showcase */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-3 mt-6 mb-8"
              >
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-amber-50 px-4 py-2 rounded-full shadow-sm border border-yellow-200"
                    >
                      <IconComponent className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm font-medium text-gray-800">
                        {service.name}
                      </span>
                    </div>
                  );
                })}
              </motion.div>

              {/* Achievement badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-yellow-100"
                  >
                    <achievement.icon className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm font-medium text-gray-800">
                      {achievement.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Enhanced Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Left - Enhanced Image with overlay */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative group"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[600px] transform group-hover:scale-[1.02] transition-transform duration-700">
                  <Image
                    src="/about-construction.jpg"
                    alt="Professional construction, renovation and landscaping work in London - experienced builders and contractors"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Floating stats card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          5+ Years
                        </h3>
                        <p className="text-gray-600">Construction Excellence</p>
                      </div>
                      <div className="text-right">
                        <h3 className="text-2xl font-bold text-yellow-600">
                          200+
                        </h3>
                        <p className="text-gray-600">Happy Customers</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right - Enhanced Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg leading-relaxed text-gray-700"
                  >
                    With over{" "}
                    <strong className="text-gray-900">
                      5 years of construction and landscaping experience
                    </strong>{" "}
                    across London, we&apos;ve transformed countless residential
                    and commercial properties. Whether it&apos;s a{" "}
                    <em className="text-yellow-700 font-semibold">
                      bespoke home renovation, single storey extension, double
                      storey extension, loft conversion, garden landscaping, or agriculture engineering project
                    </em>
                    , our commitment to exceptional quality and customer satisfaction never wavers.
                  </motion.p>

                  <motion.div
                    className="relative border-l-4 border-gradient-to-b from-yellow-500 to-amber-600 pl-6 py-2"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-500 to-amber-600"></div>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Our team of{" "}
                      <strong className="text-gray-900">
                        certified builders, landscape architects, agriculture engineers, qualified architects, experienced
                        project managers, and skilled tradespeople
                      </strong>{" "}
                      combine years of technical expertise with a client-first
                      approach. From initial consultation to final completion, we
                      deliver safe, precise, and timely results that exceed
                      expectations and stand the test of time.
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg leading-relaxed text-gray-700"
                  >
                    <strong className="text-gray-900">
                      Fully licensed, insured,we serve all areas of Greater London. Our comprehensive services include planning permission assistance, building regulations compliance, landscape design, sustainable agriculture solutions, and complete project management from start to finish.
                    </strong>
                  </motion.p>
                </div>

                {/* Enhanced CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.a
                    href="/services"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 text-center relative overflow-hidden"
                    aria-label="Explore our construction, renovation and landscaping services in London"
                  >
                    <span className="relative z-10">Explore Our Services</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </motion.a>

                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 text-center"
                    aria-label="Get a free construction and landscaping quote in London"
                  >
                    Get Free Quote
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>

            {/* Enhanced Stats Section */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Track Record Speaks for Itself
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Proven results from years of construction and landscaping excellence
                  across London
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm shadow-lg rounded-3xl p-8 text-center hover:shadow-2xl hover:bg-white transition-all duration-500 border border-yellow-100/50"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      ease: "easeOut",
                    }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <motion.div
                      className="mb-4"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <stat.icon className="h-12 md:h-16 w-12 md:w-16 text-yellow-600 mx-auto group-hover:text-amber-600 transition-colors duration-300" />
                    </motion.div>

                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                      {inView && <Counter value={stat.value} />}
                    </h3>

                    <p className="text-gray-800 font-semibold text-lg mb-2">
                      {stat.label}
                    </p>

                    <p className="text-gray-500 text-sm leading-tight">
                      {stat.description}
                    </p>

                    {/* Hover effect gradient border */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-yellow-400/20 via-transparent to-amber-600/20 pointer-events-none"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Areas We Cover Section */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center"
            >
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Areas We Cover Across London
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Providing construction, renovation, and landscaping services throughout all London boroughs
                </p>
              </div>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {londonBoroughs.map((borough, index) => (
                  <motion.div
                    key={borough}
                    className="flex items-center justify-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border border-gray-200 hover:border-yellow-300 hover:bg-yellow-50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <MapPin className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700 text-center">
                      {borough}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl border border-yellow-200"
              >
                <p className="text-lg text-gray-700">
                  <strong className="text-yellow-700">Covering All London Boroughs:</strong> From Central London to the outer boroughs, 
                  our experienced team provides comprehensive construction, renovation, and landscaping services with the same 
                  commitment to quality and customer satisfaction everywhere we work.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </>
    );
  };

  export default AboutSection;