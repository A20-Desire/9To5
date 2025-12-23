"use client";


import Image from 'next/image';
import { motion } from 'framer-motion';

// Premium easing curve for luxury feel
const luxeEase = [0.25, 0.46, 0.45, 0.94];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: luxeEase,
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: luxeEase,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: luxeEase,
      delay: 0.15 + index * 0.1,
    },
  }),
};

// Smooth scale-in for bento cards with elegant timing
const zoomCardVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: luxeEase,
    },
  },
};

// Background color fade-in variant for gradient overlays
const colorFadeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

// Arrow slide-in animation for CTA
const arrowSlideVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: luxeEase,
    },
  },
  hover: {
    x: 6,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-white via-[#F0F4F8] to-white text-[#1c1c1c] min-h-screen flex flex-col overflow-hidden">
      
      {/* Futuristic Tunnel Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial gradient for depth/vanishing point effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(240, 244, 248, 0.8) 0%, rgba(255, 255, 255, 0) 70%)',
          }}
        />
        
        {/* Geometric Tunnel Ribs - SVG */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
        >
          {/* Perspective lines converging to center */}
          {[...Array(12)].map((_, i) => {
            const offset = i * 50;
            const scale = 1 - (i * 0.07);
            return (
              <g key={i} style={{ transform: `translateY(${offset}px) scale(${scale})`, transformOrigin: 'center bottom' }}>
                {/* Left trapezoid rib */}
                <path
                  d={`M 0 ${800 - offset} L ${200 + i * 30} ${600 - offset} L ${250 + i * 35} ${550 - offset} L 0 ${700 - offset} Z`}
                  stroke="#E2E8F0"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Right trapezoid rib */}
                <path
                  d={`M 1200 ${800 - offset} L ${1000 - i * 30} ${600 - offset} L ${950 - i * 35} ${550 - offset} L 1200 ${700 - offset} Z`}
                  stroke="#E2E8F0"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Top connecting beam */}
                <path
                  d={`M ${250 + i * 35} ${550 - offset} Q 600 ${480 - offset}, ${950 - i * 35} ${550 - offset}`}
                  stroke="#E2E8F0"
                  strokeWidth="1"
                  fill="none"
                />
              </g>
            );
          })}
          
          {/* Central vanishing point glow */}
          <ellipse cx="600" cy="300" rx="200" ry="80" fill="url(#centerGlow)" />
          
          {/* Light strip effects */}
          {[...Array(8)].map((_, i) => (
            <line
              key={`light-${i}`}
              x1={100 + i * 40}
              y1={800}
              x2={400 + i * 25}
              y2={200}
              stroke="url(#lightGradient)"
              strokeWidth="2"
              opacity="0.3"
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <line
              key={`light-r-${i}`}
              x1={1100 - i * 40}
              y1={800}
              x2={800 - i * 25}
              y2={200}
              stroke="url(#lightGradient)"
              strokeWidth="2"
              opacity="0.3"
            />
          ))}
          
          {/* Gradients */}
          <defs>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="lightGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#F0F4F8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floor reflection effect */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/3"
          style={{
            background: 'linear-gradient(to top, rgba(240, 244, 248, 0.6) 0%, transparent 100%)',
          }}
        />

        {/* Animated floating light particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-100 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Subtle grid overlay for glossy floor effect */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/2 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(226, 232, 240, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(226, 232, 240, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'bottom',
          }}
        />
      </div>

      {/* Floating Badge - Top Left */}
      <motion.div 
        className="absolute top-24 left-4 lg:left-12 z-10 hidden xl:block"
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
            <path
              id="curve"
              d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
              fill="transparent"
            />
            <text className="text-[10px] uppercase font-bold tracking-widest">
              <textPath href="#curve">
                Learn about us • Learn about us •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-full" />
          </div>
        </div>
      </motion.div>

      <motion.section
        className="relative flex flex-col flex-grow"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.header
          className="relative flex flex-col items-center gap-6 py-12 text-center px-4"
          variants={fadeInUp}
        >
          <div className="relative max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl font-zentry uppercase font-black leading-tight tracking-tight text-black sm:text-6xl lg:text-7xl"
              variants={fadeInUp}
            >
              Elevate Your Style With Bold Fashion
            </motion.h1>
            
            {/* Floating Avatar Stack - Top Right of Headline */}
            <motion.div 
              className="absolute -top-8 -right-4 lg:-right-24 hidden md:flex items-center"
              variants={zoomCardVariants}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                    <Image src={`/images/hero-image.jpg`} alt="User" fill className="object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-black text-white flex items-center justify-center text-xs font-bold">
                  +
                </div>
              </div>
            </motion.div>
          </div>
        </motion.header>

        {/* Main 5-Column Grid */}
        <div className="flex-grow px-6 pb-12 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 h-auto lg:h-[600px]">
            
            {/* Column 1: Dark Theme (Split) */}
            <div className="flex flex-col gap-4 lg:gap-6 h-full">
              {/* Top: Tall Vertical (60%) */}
              <motion.div 
                className="relative flex-[1.5] overflow-hidden rounded-3xl group bg-gradient-to-br from-gray-800 via-gray-900 to-black"
                variants={zoomCardVariants}
              >
                {/* Noise Texture */}
                <div 
                  className="absolute inset-0 opacity-20 z-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />
                <Image 
                  src="/assets/fashion men/Burgundy crystal coated Agbada for Men_3piece men's wedding Outfit_African men Clothing_Dashiki_ All Ceremonial dress for Groommen,Prom suit.jpg" 
                  alt="Burgundy Agbada Fashion" 
                  fill 
                  className="object-cover object-top" 
                />
              </motion.div>
              {/* Bottom: Small Landscape (40%) */}
              <motion.div 
                className="relative flex-1 overflow-hidden rounded-3xl group bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900"
                variants={zoomCardVariants}
              >
                {/* Noise Texture */}
                <div 
                  className="absolute inset-0 opacity-20 z-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />
                <Image 
                  src="/assets/fashion men/Screenshot 2025-12-04 154339.png" 
                  alt="Fashion Style" 
                  fill 
                  className="object-cover object-top" 
                />
              </motion.div>
            </div>

            {/* Column 2: Dark Theme (Full Height Pillar) */}
            <motion.div 
              className="relative h-full overflow-hidden rounded-3xl group min-h-[300px] bg-gradient-to-br from-gray-900 via-black to-gray-800"
              variants={zoomCardVariants}
            >
              {/* Noise Texture */}
              <div 
                className="absolute inset-0 opacity-20 z-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />
              <Image 
                src="/assets/fashion men/download (6).jpg" 
                alt="Men Fashion" 
                fill 
                className="object-cover object-top" 
              />
            </motion.div>

            {/* Column 3: Dark Theme (Center Split) */}
            <div className="flex flex-col gap-4 lg:gap-6 h-full">
              {/* Top: Square */}
              <motion.div 
                className="relative aspect-square overflow-hidden rounded-3xl group bg-gradient-to-br from-gray-800 via-gray-900 to-black"
                variants={zoomCardVariants}
              >
                {/* Noise Texture */}
                <div 
                  className="absolute inset-0 opacity-20 z-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />
                <Image 
                  src="/assets/fashion men/Screenshot 2025-12-04 192518.png" 
                  alt="Fashion Style" 
                  fill 
                  className="object-cover object-top" 
                />
              </motion.div>
              
              {/* Bottom: CTA Button (Takes up card space) */}
              <motion.div 
                className="flex-1 flex items-start justify-center pt-4"
                variants={zoomCardVariants}
              >
                <button className="w-full bg-black text-white rounded-full py-4 px-8 text-lg font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2 group">
                  Explore Collections
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </button>
              </motion.div>
            </div>

            {/* Column 4: Dark Theme (Full Height Pillar) */}
            <motion.div 
              className="relative h-full overflow-hidden rounded-3xl group min-h-[300px] bg-gradient-to-br from-black via-gray-900 to-gray-800"
              variants={zoomCardVariants}
            >
              {/* Noise Texture */}
              <div 
                className="absolute inset-0 opacity-20 z-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />
              <Image 
                src="/assets/fashion men/Screenshot 2025-12-04 192606.png" 
                alt="Fashion Style" 
                fill 
                className="object-cover object-top" 
              />
            </motion.div>

            {/* Column 5: Dark Theme (Split) */}
            <div className="flex flex-col gap-4 lg:gap-6 h-full">
              {/* Top: Square/Portrait */}
              <motion.div 
                className="relative flex-[1.2] overflow-hidden rounded-3xl group bg-gradient-to-br from-gray-700 via-gray-800 to-black"
                variants={zoomCardVariants}
              >
                {/* Noise Texture */}
                <div 
                  className="absolute inset-0 opacity-20 z-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />
                <Image 
                  src="/assets/fashion men/Screenshot 2025-12-04 192647.png" 
                  alt="Fashion Style" 
                  fill 
                  className="object-cover object-top" 
                />
              </motion.div>
              {/* Bottom: Small Rect */}
              <motion.div 
                className="relative flex-[0.8] overflow-hidden rounded-3xl group bg-gradient-to-br from-gray-900 via-black to-gray-800"
                variants={zoomCardVariants}
              >
                {/* Noise Texture */}
                <div 
                  className="absolute inset-0 opacity-20 z-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />
                <Image 
                  src="/assets/fashion men/Screenshot 2025-12-04 142518.png" 
                  alt="Fashion Style" 
                  fill 
                  className="object-cover object-top" 
                />
              </motion.div>
            </div>

          </div>

          {/* Bottom Floating Elements */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            {/* Bottom Left: Testimonial */}
            <motion.div variants={fadeInUp} className="max-w-md">
              <span className="text-6xl text-gray-300 font-zentry">“</span>
              <p className="text-gray-600 font-medium text-lg -mt-4 relative z-10">
                TrendZone's styles are fresh, bold, and exactly what I needed to upgrade my wardrobe. Loved the quality and vibe!
              </p>
              <p className="mt-4 font-zentry uppercase text-xl text-yellow-600">Rafi H.</p>
            </motion.div>

            {/* Bottom Right: Lifestyle */}
            <motion.div variants={fadeInUp} className="flex flex-col items-start md:items-end text-right">
              <div className="flex items-baseline gap-4">
                <span className="text-6xl font-light text-black">01</span>
                <span className="text-xl font-medium text-gray-500">Lifestyle</span>
              </div>
              <h3 className="text-2xl font-bold text-black mt-2 max-w-xs text-left md:text-right">
                Set Up Your Fashion With The Latest Trends
              </h3>
              <span className="mt-4 text-2xl">→</span>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
