import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

const pillars = [
  {
    key: 'transformation',
    title: 'Transformation',
    description:
      'Dynamic change, evolution, and breakthrough. Symbolized by shifting glass sculpture refracting light.',
    image: '/assets/pillars/transformation.jpg', // Use a custom abstract glass image
    imageAlt: 'Abstract glass sculpture morphing',
    imageConcept:
      'Abstract glass shards in motion, cool silvers/blues, energetic lighting, premium/futuristic mood.'
  },
  {
    key: 'growth',
    title: 'Growth',
    description:
      'Organic progress, resilience, and aspiration. Symbolized by a vibrant green shoot breaking through stone.',
    image: '/assets/pillars/growth.jpg', // Use a custom shoot/stone image
    imageAlt: 'Green shoot breaking through stone',
    imageConcept:
      'Close-up of green shoot, deep greens/charcoal/gold, soft backlight, aspirational and organic.'
  },
  {
    key: 'clarity',
    title: 'Clarity & Impact',
    description:
      'Insight, precision, and enlightenment. Symbolized by a faceted crystal prism casting prismatic beams.',
    image: '/assets/pillars/clarity.jpg', // Use a custom prism image
    imageAlt: 'Crystal prism with prismatic beams',
    imageConcept:
      'Suspended prism, clear whites/prismatic colors/black, sharp beams, premium and enlightening.'
  }
];

export default function ThreePillarsSection({ onReveal }) {
  const [active, setActive] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-24 px-4 md:px-12 lg:px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-zentry uppercase font-black tracking-tight mb-4">
          The Three Pillars of Complete Transformation
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Each pillar represents a journey—transformation, growth, and clarity—driven by impact and aspiration.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={pillar.key}
            className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-gray-900 via-black to-gray-800"
            initial="rest"
            animate={active === pillar.key ? 'active' : 'rest'}
            whileHover="hover"
            variants={{
              rest: { boxShadow: '0 4px 32px rgba(0,0,0,0.12)', scale: 1 },
              hover: { scale: 1.03, boxShadow: '0 8px 48px rgba(0,0,0,0.18)' },
              active: { scale: 1.08, zIndex: 10 }
            }}
            style={{ transition: 'box-shadow 0.3s, scale 0.3s' }}
            onClick={() => setActive(pillar.key)}
            tabIndex={0}
            aria-label={`Reveal ${pillar.title}`}
          >
            <motion.div
              className="relative w-full h-72 md:h-96"
              initial={false}
              animate={active === pillar.key ? 'reveal' : 'rest'}
              variants={{
                rest: {
                  clipPath: 'circle(60% at 50% 50%)',
                  filter: 'brightness(0.9)'
                },
                reveal: shouldReduceMotion
                  ? { filter: 'brightness(1.1)' }
                  : {
                      clipPath: 'circle(150% at 50% 50%)',
                      filter: 'brightness(1.1)',
                      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
                    }
              }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src={pillar.image}
                alt={pillar.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={idx === 0}
              />
              {/* Mask overlay for cinematic effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"
                initial={{ opacity: 0.7 }}
                animate={active === pillar.key ? { opacity: 0.2 } : { opacity: 0.7 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
            <div className="relative z-10 p-8 flex flex-col items-center justify-center">
              <h3 className="text-2xl font-zentry uppercase font-bold mb-2 tracking-wide">
                {pillar.title}
              </h3>
              <p className="text-base text-gray-300 mb-4">
                {pillar.description}
              </p>
              <span className="text-xs text-gray-500 italic mb-2">{pillar.imageConcept}</span>
              <button
                className="mt-4 px-6 py-2 rounded-full bg-brand-green text-black font-bold shadow-lg hover:bg-brand-dark-green hover:text-white transition"
                onClick={() => {
                  setActive(pillar.key);
                  setTimeout(() => {
                    if (onReveal) onReveal(pillar.key);
                  }, shouldReduceMotion ? 0 : 800);
                }}
              >
                Reveal Journey
              </button>
            </div>
            {/* Cinematic mask transition to next section */}
            <AnimatePresence>
              {active === pillar.key && (
                <motion.div
                  className="absolute inset-0 z-20 bg-black"
                  initial={{ clipPath: 'circle(0% at 50% 50%)', opacity: 0 }}
                  animate={{ clipPath: 'circle(150% at 50% 50%)', opacity: 0.9 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
