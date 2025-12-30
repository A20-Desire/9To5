"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ZentryHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-hidden selection:bg-brand-green selection:text-black">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-dark-green/20 via-black to-black" />
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'url("assets/grid-pattern.svg")', backgroundSize: '50px 50px' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-10">
        
        {/* Hero Text */}
        <div className="text-center space-y-2 mb-12 relative">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] leading-[0.8] font-black tracking-tighter mix-blend-difference"
          >
            REDEFINE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-green to-brand-dark-green">
              STYLE
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl font-light tracking-wide text-gray-400 max-w-2xl mx-auto mt-8"
          >
            ENTER THE 9TO5 EXPERIENCE
          </motion.p>
        </div>

        {/* Central Visual / Portal */}
        <motion.div 
          style={{ y, opacity }}
          className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-dark-green/20"
        >
          {/* Placeholder for a Hero Video or Main Image */}
          <div className="absolute inset-0 bg-gray-900">
             {/* Using one of the existing images as a hero background for now */}
             <Image 
                src="/assets/main-image/Hero.png" 
                alt="Hero Visual" 
                fill 
                className="object-cover opacity-60 hover:scale-105 transition-transform duration-700"
             />
             
             {/* Overlay Text */}
             <div className="absolute bottom-8 left-8 text-left">
                <h3 className="text-2xl font-bold uppercase tracking-wider">The New Standard</h3>
                <p className="text-sm text-gray-300 font-mono mt-2">/// SYSTEM.INIT_FASHION_MODULE</p>
                            {/* End Overlay Text */}
             </div>
          </div>
          
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-brand-green rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-brand-green rounded-br-2xl" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-green to-transparent" />
        </motion.div>

      </div>
    </div>
  );
};

export default ZentryHero;
