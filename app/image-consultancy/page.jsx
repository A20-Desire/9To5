import Link from 'next/link';
import ThemeShell from '../../components/ThemeShell';
import HeroSection from '../../HeroSection';
import ProcessSection from '../../components/ProcessSection';
import NewCollectionSection from '../../components/NewCollectionSection';

export default function ImageConsultancyPage() {
  return (
    <ThemeShell>
      <main>
        <section className="bg-black/40">
          <div className="max-w-6xl mx-auto px-6 pt-8 pb-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-xs font-zentry uppercase tracking-[0.25em] text-white/60">Image Consultancy</p>
              <h1 className="text-2xl sm:text-3xl font-zentry uppercase font-black text-white">Men&#39;s Line</h1>
            </div>
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 text-sm">
              <span className="px-4 py-2 rounded-full bg-white text-black font-medium">Men</span>
              <Link
                href="/image-consultancy/female"
                className="px-4 py-2 rounded-full text-white/70 hover:text-white transition"
              >
                Women
              </Link>
            </div>
          </div>
        </div>
      </section>
      <HeroSection />
      <ProcessSection />
      <NewCollectionSection />
      </main>
    </ThemeShell>
  );
}
