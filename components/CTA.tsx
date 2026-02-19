export default function CTA() {
  return (
    <section id="register" className="py-24 bg-brand-surface relative overflow-hidden scroll-reveal">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to <span
          className="text-brand-cyan">Forge</span>?</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Limited seats available. Join the premier engineering buildathon and turn your ideas into functional
          prototypes.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSez5FNre4moJEgHFhAeXGRyJ1x24RQqUObyMH0sR6KsNecKpg/viewform?usp=publish-editor"
          target="_blank" className="btn-forge px-12 py-5 text-xl shadow-2xl inline-block animate-pulse hover:text-white">Register
          Now</a>
        <p className="mt-6 text-sm text-gray-500">Registration: Feb 6 - Feb 14, 2026 • No Registration Fee</p>
      </div>
    </section>
  );
}
