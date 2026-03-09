import Link from 'next/link';
import LightboxImage from '../../../components/LightboxImage';
import ThemeShell from '../../../components/ThemeShell';
import HeroSectionFemale from '../../../components/HeroSectionFemale';
import ProcessSection from '../../../components/ProcessSection';

export default function ImageConsultancyFemalePage() {
  const womenSteps = [
    {
      number: "01",
      title: "Discover",
      description: "We start with a personal style audit - lifestyle, goals, body lines, and the impression you want to lead with.",
      image: "/assets/women-wears/download (23).jpg",
      alt: "Women's style discovery"
    },
    {
      number: "02",
      title: "Curate",
      description: "Colour direction, silhouettes, and visual identity come together in a tailored style blueprint.",
      image: "/assets/women-wears/download (20).jpg",
      alt: "Curated womenswear palette"
    },
    {
      number: "03",
      title: "Assemble",
      description: "We shape a wardrobe plan with outfit formulas, accessory pairings, and intentional shopping guidance.",
      image: "/assets/women-wears/download (17).jpg",
      alt: "Wardrobe look building"
    },
    {
      number: "04",
      title: "Elevate",
      description: "Your lookbook, styling notes, and upkeep schedule keep everything polished long after the session.",
      image: "/assets/women-wears/download (9).jpg",
      alt: "Designer ready finish"
    },
  ];

  return (
    <ThemeShell>
      <main>
        <section className="bg-black/40">
          <div className="max-w-6xl mx-auto px-6 pt-8 pb-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-xs font-zentry uppercase tracking-[0.25em] text-white/60">Image Consultancy</p>
              <h1 className="text-2xl sm:text-3xl font-zentry uppercase font-black text-white">Women&#39;s Line</h1>
            </div>
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 text-sm">
              <Link
                href="/image-consultancy"
                className="px-4 py-2 rounded-full text-white/70 hover:text-white transition"
              >
                Men
              </Link>
              <span className="px-4 py-2 rounded-full bg-white text-black font-medium">Women</span>
            </div>
          </div>
        </div>
      </section>

      <HeroSectionFemale />
      <ProcessSection steps={womenSteps} />

      {/* Signature Capsules */}
      <section id="capsules" className="bg-black/60 text-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-white/70">[ SIGNATURE CAPSULES ]</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-zentry uppercase font-black">
                A Look For Every Version Of You
              </h2>
            </div>
            <a
              href="#book"
              className="px-6 py-3 rounded-full border border-white/30 text-white/90 hover:bg-white hover:text-black transition text-center"
            >
              Request A Lookbook
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Boardroom Authority",
                copy: "Structured tailoring, polished palettes, and accessory precision for rooms where influence matters.",
                image: "/assets/women-wears/corporate-2.jpg",
                accent: "from-brand-green via-brand-dark-green to-black",
              },
              {
                title: "Evening Distinction",
                copy: "Luxe textures, sculpted silhouettes, and a refined finish for gala moments and cultural nights.",
                image: "/assets/women-wears/occasion.jpg",
                accent: "from-brand-green/80 via-brand-dark-green to-black",
              },
              {
                title: "Everyday Elegance",
                copy: "Effortless layers and elevated essentials that keep you impeccable across work, errands, and weekends.",
                image: "/assets/women-wears/traditional-1.jpg",
                accent: "from-brand-green/70 via-brand-dark-green to-black",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden min-h-[260px] flex flex-col"
              >
                <div className="relative h-40">
                  <LightboxImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  <div className={`absolute bottom-3 left-4 h-1 w-16 rounded-full bg-gradient-to-r ${item.accent}`} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="bg-black text-white py-20 px-6 md:px-12 lg:px-20 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-mono tracking-widest text-white/50">[ GET STARTED ]</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-zentry uppercase font-black">
            Book Your Styling Session
          </h2>
          <p className="mt-4 text-white/60 text-base leading-relaxed">
            Ready to elevate your wardrobe? Share a few details and our consultants will reach out to schedule your personal session.
          </p>
          <form className="mt-10 flex flex-col gap-4 text-left">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-green transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-green transition"
            />
            <input
              type="tel"
              placeholder="Phone / WhatsApp Number"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-green transition"
            />
            <select
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white/70 focus:outline-none focus:border-brand-green transition"
              defaultValue=""
            >
              <option value="" disabled>What is your budget?</option>
              <option value="under-250">Under 250</option>
              <option value="250-500">250 - 500</option>
              <option value="500-1000">500 - 1000</option>
              <option value="1000-2500">1000 - 2500</option>
              <option value="2500-plus">2500+</option>
            </select>
            <textarea
              rows={4}
              placeholder="Tell us a little about your style goals..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-green transition resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-brand-dark-green text-white font-semibold hover:opacity-90 transition text-base"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
      </main>
    </ThemeShell>
  );
}

