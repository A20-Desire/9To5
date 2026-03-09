"use client";

import { motion } from 'framer-motion';
import LightboxImage from './LightboxImage';

const luxeEase = [0.25, 0.46, 0.45, 0.94];

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: luxeEase,
    },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: luxeEase,
      delay: 0.08 * index,
    },
  }),
};

const tiles = [
  {
    src: "/assets/women-wears/corporate-1.jpg",
    label: "Corporate Presence",
    sub: "Boardroom-ready, effortlessly polished.",
  },
  {
    src: "/assets/women-wears/corporate-2.jpg",
    label: "Power Dressing",
    sub: "Command the room in every setting.",
  },
  {
    src: "/assets/women-wears/designer.jpg",
    label: "Couture Edge",
    sub: "Elevated pieces for the discerning woman.",
  },
  {
    src: "/assets/women-wears/traditional-1.jpg",
    label: "Heritage Luxury",
    sub: "Aso-Oke and Aso-Ebi styled to perfection.",
  },
  {
    src: "/assets/women-wears/traditional-2.jpg",
    label: "Cultural Grandeur",
    sub: "Traditional silhouettes, modern confidence.",
  },
  {
    src: "/assets/women-wears/occasion.jpg",
    label: "Occasion Styling",
    sub: "Every celebration, dressed beautifully.",
  },
];

const HeroSectionFemale = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Soft ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(19, 255, 160, 0.35), transparent 60%)" }}
        />
        <div
          className="absolute bottom-0 left-0 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(7, 191, 122, 0.35), transparent 60%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(19, 255, 160, 0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(19, 255, 160, 0.35) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-zentry uppercase tracking-[0.25em] text-brand-green border border-white/10 rounded-full bg-white/5">
            Women&#39;s Image Consultancy
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-zentry uppercase font-black leading-tight">
            Refine Your Presence
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/70">
            Personal styling, colour direction, and wardrobe architecture crafted to align your appearance with the life you are building — from the boardroom to cultural celebrations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#book"
              className="px-6 py-3 rounded-full bg-brand-dark-green text-white font-medium hover:opacity-90 transition"
            >
              Book A Styling Session
            </a>
            <a
              href="#capsules"
              className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.src}
              className="relative h-56 sm:h-64 rounded-3xl overflow-hidden border border-white/10 shadow-lg group"
              initial="hidden"
              animate="visible"
              variants={tileVariants}
              custom={index}
            >
              <LightboxImage
                src={tile.src}
                alt={tile.label}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-base leading-tight">{tile.label}</p>
                <p className="text-white/60 text-xs mt-1">{tile.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSectionFemale;
