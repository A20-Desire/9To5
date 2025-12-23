"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const luxeEase = [0.25, 0.46, 0.45, 0.94];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: luxeEase,
      staggerChildren: 0.15,
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
  hidden: { opacity: 0, y: 50, scale: 0.95 },
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

// Product data
const products = [
  {
    id: 1,
    name: "AURORA SILVER",
    subtitle: "Reflective Puffer Jacket",
    price: "$899.99",
    colors: ["#FFFFFF", "#3B82F6"],
    colorNames: ["WHITE", "BLUE"],
    image: "/images/hero-image.jpg",
  },
  {
    id: 2,
    name: "ORBIT SILVER",
    subtitle: "High-Gloss Puffer",
    price: "$1,299.99",
    colors: ["#C0C0C0"],
    colorNames: ["SILVER"],
    image: "/images/interior.jpg",
  },
  {
    id: 3,
    name: "STEALTH BLACK",
    subtitle: "Heavy Shield Puffer",
    price: "$1,199.99",
    colors: ["#000000", "#FFFFFF"],
    colorNames: ["BLACK", "WHITE"],
    image: "/images/event.jpg",
  },
];

// Chamfered corner clip path
const chamferedClipPath = "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))";

const NewCollectionSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-green-700 via-green-800 to-green-900 py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background noise texture overlay */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="techGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#techGrid)" />
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
        <motion.div 
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12"
          variants={fadeInUp}
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-gray-400 tracking-widest">[ NEW COLLECTION ]</span>
              <span className="text-xs font-mono text-gray-500">SERIES: 01</span>
              <span className="text-xs font-mono text-gray-500">[ PUFFERS ]</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-zentry uppercase font-black text-white tracking-tight">
              NEW COLLECTION
            </h2>
            <div className="flex gap-4 mt-3 text-xs font-mono text-gray-400">
              <span>PUFFER JACKETS</span>
              <span>MULTI LAYERS</span>
              <span>GLOSS SERIES</span>
            </div>
          </div>
          
          {/* Filters Button */}
          <motion.button
            className="px-6 py-3 bg-white text-black text-sm font-bold rounded-full 
                       hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            FILTERS
          </motion.button>
        </motion.div>

        {/* Main Grid - Feature Card + Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Feature Card - Wide */}
          <motion.div
            className="lg:col-span-5 relative group"
            variants={cardVariants}
          >
            <div 
              className="relative h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-br from-green-600 to-green-800"
              style={{ clipPath: chamferedClipPath }}
            >
              {/* Background Image */}
              <Image
                src="/images/hero-image.jpg"
                alt="Aurora Collection"
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Graffiti Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Graffiti Art - SVG Decoration */}
              <div className="absolute bottom-20 left-4 opacity-40">
                <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
                  <text x="0" y="60" fontSize="48" fontWeight="bold" fill="white" fontFamily="sans-serif" style={{ fontStyle: 'italic' }}>
                    FRN
                  </text>
                  <path d="M 0 80 Q 50 70, 100 85 T 200 75" stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top Tags */}
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-mono rounded">
                    [ FEATURED ]
                  </span>
                </div>

                {/* Bottom Content */}
                <div>
                  <h3 className="text-5xl md:text-6xl font-zentry uppercase font-black text-white mb-4 tracking-tight">
                    AURORA™
                  </h3>
                  <p className="text-gray-300 text-sm font-mono mb-6 max-w-xs">
                    Premium reflective puffer jacket with advanced thermal insulation technology.
                  </p>
                  
                  {/* Add to Cart Button */}
                  <motion.button
                    className="flex items-center gap-4 group/btn"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:border-white transition-all duration-300">
                      <svg 
                        className="w-5 h-5 text-white group-hover/btn:text-black transition-colors" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-white text-sm font-mono">ADD TO CART</p>
                      <p className="text-white text-xl font-zentry font-bold">$1,999</p>
                    </div>
                  </motion.button>
                </div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30" />
            </div>
          </motion.div>

          {/* Right Product Grid - 3 Vertical Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="relative group cursor-pointer"
                variants={cardVariants}
                custom={index}
                whileHover={{ y: -10 }}
              >
                <div 
                  className="relative h-[400px] lg:h-[600px] overflow-hidden bg-gradient-to-br from-green-500 to-green-700"
                  style={{ clipPath: chamferedClipPath }}
                >
                  {/* Product Image */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/10 transition-colors duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    {/* Product Name */}
                    <h4 className="text-white text-sm font-zentry uppercase font-bold tracking-wide mb-1">
                      {product.name}
                    </h4>
                    <p className="text-gray-400 text-xs font-mono mb-3">
                      {product.subtitle}
                    </p>

                    {/* Color Dots */}
                    <div className="flex items-center gap-2 mb-3">
                      {product.colors.map((color, i) => (
                        <div key={i} className="flex items-center gap-1">
                          <div 
                            className="w-3 h-3 rounded-full border border-white/30"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-[10px] text-gray-400 font-mono">
                            {product.colorNames[i]}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <p className="text-white text-lg font-zentry font-bold">
                      {product.price}
                    </p>
                  </div>

                  {/* Top Corner Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Tech Details */}
        <motion.div 
          className="mt-8 flex flex-wrap justify-between items-center gap-4 text-xs font-mono text-gray-500"
          variants={fadeInUp}
        >
          <div className="flex gap-6">
            <span>[ EXTREME COLD LINE ]</span>
            <span>THERMAL RATING: -40°C</span>
          </div>
          <div className="flex gap-4">
            <span>01 / 07</span>
            <div className="flex gap-1">
              <div className="w-8 h-0.5 bg-white" />
              <div className="w-8 h-0.5 bg-gray-600" />
              <div className="w-8 h-0.5 bg-gray-600" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NewCollectionSection;
