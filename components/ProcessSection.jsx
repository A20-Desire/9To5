"use client";

import { motion } from 'framer-motion';
import LightboxImage from './LightboxImage';

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

const defaultSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We start with a personal style audit - lifestyle, goals, body lines, and the impression you want to lead with.",
    image: "/assets/main-image/9To5-room.png",
    alt: "Style consultation setting"
  },
  {
    number: "02",
    title: "Curate",
    description: "Colour direction, silhouettes, and visual identity come together in a tailored style blueprint.",
    image: "/assets/main-image/9To5-office.png",
    alt: "Wardrobe planning moodboard"
  },
  {
    number: "03",
    title: "Assemble",
    description: "We shape a wardrobe plan with outfit formulas, accessory pairings, and intentional shopping guidance.",
    image: "/assets/main-image/WhatsApp Image 2025-12-03 at 2.24.25 AM (1).jpeg",
    alt: "Curated looks selection"
  },
  {
    number: "04",
    title: "Elevate",
    description: "Your lookbook, styling notes, and upkeep schedule keep everything polished long after the session.",
    image: "/assets/main-image/WhatsApp Image 2025-12-03 at 2.24.25 AM (3).jpeg",
    alt: "Final styling reveal"
  },
];

const ProcessSection = ({ steps: stepsOverride }) => {
  const steps = stepsOverride ?? defaultSteps;
  return (
    <section className="relative bg-black py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(19, 255, 160, 0.35)" strokeWidth="0.5"/>
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
          <span className="inline-block px-4 py-2 text-xs font-zentry font-semibold uppercase tracking-[0.2em] text-white/60 border border-white/10 rounded-full mb-6">
            How we work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-zentry uppercase font-bold text-white leading-tight max-w-2xl">
            A Process Built For Presence
          </h2>
          <p className="mt-6 text-white/70 max-w-xl">
            From personal style discovery to wardrobe execution, every step is crafted to make your image feel intentional and powerful.
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
              stroke="rgba(19, 255, 160, 0.2)"
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
                  <div className="bg-white/5 rounded-3xl p-8 md:p-10 shadow-xl border border-white/10 relative overflow-hidden group">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full" />
                    
                    {/* Step Number */}
                    <div className="flex items-start gap-4 mb-6">
                      <span className="text-6xl md:text-7xl font-zentry font-black text-white/10 leading-none select-none">
                        {step.number}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-white/10 mb-6">
                      <LightboxImage
                        src={step.image}
                        alt={step.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                    </div>

                    {/* Title with decorative star */}
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl md:text-3xl font-zentry uppercase font-bold text-white">
                        {step.title}
                      </h3>
                      <svg 
                        className="w-6 h-6 text-brand-green opacity-70"
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
                      </svg>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-green group-hover:w-full transition-all duration-500" />
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
                  className="absolute -top-16 -left-12 w-16 h-16 text-white/30 hidden md:block"
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
                className="text-2xl md:text-3xl lg:text-4xl text-white/80 font-sans italic font-light"
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
