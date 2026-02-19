import Link from 'next/link';
import ThemeShell from '../../../components/ThemeShell';
import HeroSectionFemale from '../../../components/HeroSectionFemale';
import ProcessSection from '../../../components/ProcessSection';

export default function ImageConsultancyFemalePage() {
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
      <ProcessSection />

      <section className="bg-black/60 text-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-white/70">[ SIGNATURE CAPSULES ]</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-zentry uppercase font-black">
                Tailored Looks For Every Season
              </h2>
            </div>
            <button className="px-6 py-3 rounded-full border border-white/30 text-white/90 hover:bg-white hover:text-black transition">
              Request A Lookbook
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Boardroom Presence",
                copy: "Sharper silhouettes and refined palettes built for leadership.",
                accent: "from-brand-green via-brand-dark-green to-black",
              },
              {
                title: "Signature Evenings",
                copy: "Elevated textures and statement layers for high-impact nights.",
                accent: "from-brand-green/80 via-brand-dark-green to-black",
              },
              {
                title: "Everyday Elegance",
                copy: "Soft structure and breathable luxury for modern routines.",
                accent: "from-brand-green/70 via-brand-dark-green to-black",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 min-h-[220px] flex flex-col justify-between"
              >
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${item.accent}`} />
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
    </ThemeShell>
  );
}
