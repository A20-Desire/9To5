"use client";

import { motion } from 'framer-motion';

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
  "linear-gradient(135deg, rgba(6, 41, 27, 0.9), rgba(0, 0, 0, 0.4))",
  "linear-gradient(135deg, rgba(7, 70, 45, 0.9), rgba(0, 0, 0, 0.35))",
  "linear-gradient(135deg, rgba(4, 28, 18, 0.95), rgba(6, 41, 27, 0.4))",
  "linear-gradient(135deg, rgba(9, 83, 53, 0.9), rgba(0, 0, 0, 0.35))",
  "linear-gradient(135deg, rgba(5, 36, 23, 0.9), rgba(0, 0, 0, 0.4))",
  "linear-gradient(135deg, rgba(8, 65, 42, 0.9), rgba(0, 0, 0, 0.35))",
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
            Curated styling, color direction, and wardrobe architecture designed to align your appearance with the life you are building.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-full bg-brand-dark-green text-white font-medium hover:opacity-90 transition">
              Book A Styling Session
            </button>
            <button className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition">
              View Portfolio
            </button>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tiles.map((bg, index) => (
            <motion.div
              key={bg}
              className="relative h-48 sm:h-56 rounded-3xl overflow-hidden border border-[#2b1a1a]/10 shadow-lg"
              style={{ backgroundImage: bg }}
              initial="hidden"
              animate="visible"
              variants={tileVariants}
              custom={index}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.25), transparent 45%), radial-gradient(circle at 20% 80%, rgba(19, 255, 160, 0.3), transparent 50%)",
                }}
              />
              <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, rgba(255,255,255,0.35) 0 1px, transparent 1px 12px)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSectionFemale;
