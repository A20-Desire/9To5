"use client";

import { motion } from 'framer-motion';

const luxeEase = [0.25, 0.46, 0.45, 0.94];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: luxeEase,
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: luxeEase,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: luxeEase,
    },
  },
};

const steps = [
  {
    number: "01",
    title: "Define",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie libero at nulla rhoncus, eu sed consectetur odio consequat."
  },
  {
    number: "02",
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie libero at nulla rhoncus, eu sed consectetur odio consequat."
  },
  {
    number: "03",
    title: "Build",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie libero at nulla rhoncus, eu sed consectetur odio consequat."
  },
  {
    number: "04",
    title: "Launch",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie libero at nulla rhoncus, eu sed consectetur odio consequat."
  },
];

const ProcessSection = () => {
  return (
    <section className="relative bg-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="mb-20" variants={fadeInUp}>
          <span className="inline-block px-4 py-2 text-xs font-zentry font-semibold uppercase tracking-[0.2em] text-gray-500 border border-gray-200 rounded-full mb-6">
            How we work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-zentry uppercase font-bold text-black leading-tight max-w-2xl">
            Let us show you how we drive your brand to new heights
          </h2>
          <p className="mt-6 text-gray-600 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie libero at nulla rhoncus, eu.
          </p>
        </motion.div>

        {/* Process Cards with Zig-Zag Layout */}
        <div className="relative">
          {/* Dotted Line Path - SVG */}
          <svg
            className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 pointer-events-none hidden lg:block"
            viewBox="0 0 800 1200"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 400 0 
                 Q 400 100, 200 150 
                 Q 0 200, 200 300 
                 Q 400 400, 600 350 
                 Q 800 300, 600 450 
                 Q 400 600, 200 550 
                 Q 0 500, 200 700 
                 Q 400 900, 600 850 
                 Q 800 800, 600 1000 
                 Q 400 1200, 400 1200"
              stroke="#e5e7eb"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          {/* Process Steps */}
          <div className="relative space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } ${index !== 0 ? 'lg:mt-[-60px]' : ''}`}
                variants={cardVariants}
                custom={index}
              >
                {/* Card */}
                <motion.div
                  className={`relative w-full lg:w-[45%] ${
                    index % 2 === 0 ? 'lg:ml-0' : 'lg:mr-0'
                  }`}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: luxeEase }}
                >
                  <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden group">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-full" />
                    
                    {/* Step Number */}
                    <div className="flex items-start gap-4 mb-6">
                      <span className="text-6xl md:text-7xl font-zentry font-black text-gray-100 leading-none select-none">
                        {step.number}
                      </span>
                    </div>

                    {/* Title with decorative star */}
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl md:text-3xl font-zentry uppercase font-bold text-black">
                        {step.title}
                      </h3>
                      <svg 
                        className="w-6 h-6 text-black opacity-60"
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
                      </svg>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-black group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.div>

                {/* Spacer for zig-zag */}
                <div className="hidden lg:block lg:w-[10%]" />

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block lg:w-[45%]" />
              </motion.div>
            ))}
          </div>

          {/* End Note - Handwritten Style */}
          <motion.div
            className="mt-20 lg:mt-12 flex justify-center lg:justify-end"
            variants={fadeInUp}
          >
            <div className="relative">
              {/* Decorative arrow pointing to text */}
              <svg
                className="absolute -top-16 -left-12 w-16 h-16 text-gray-300 hidden md:block"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M 80 20 Q 40 30, 50 70"
                  strokeDasharray="4 4"
                />
                <path d="M 45 60 L 50 72 L 58 65" />
              </svg>
              
              <p 
                className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-sans italic font-light"
              >
                Ready to be delivered!
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProcessSection;
