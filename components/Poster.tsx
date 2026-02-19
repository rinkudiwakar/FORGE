export default function Poster() {
  return (
    <section id="poster" className="py-20 bg-brand-dark border-y border-white/5 scroll-reveal">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl text-white mb-12">Official <span className="text-brand-orange">Poster</span>
        </h2>
        <div className="max-w-3xl mx-auto p-4 bg-brand-surface rounded-xl border border-white/10 shadow-2xl">
          <img src="/assets/FORGE 1.0 POSTER.png" alt="FORGE 1.0 Official Poster" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </section>
  );
}
