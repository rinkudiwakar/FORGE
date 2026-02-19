export default function Sponsors() {
  return (
    <section id="sponsors"
      className="py-20 bg-gradient-to-b from-brand-dark to-brand-surface relative overflow-hidden scroll-reveal">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span
              className="text-brand-orange font-bold uppercase tracking-widest text-sm px-4 py-2 border border-brand-orange/30 bg-brand-orange/10 rounded-full animate-pulse">Powered
              By</span>
          </div>
          <h2 className="text-3xl md:text-4xl text-white mb-4">Our <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Premium
            Partner</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            <div
              className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500 animate-glow">
            </div>
            <div
              className="relative bg-gradient-to-br from-brand-surface to-brand-dark p-12 rounded-2xl border border-purple-500/30">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div
                  className="flex-shrink-0 bg-white p-6 rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <img src="/assets/plaksha_logo.jpeg" alt="Plaksha University"
                    className="h-32 md:h-40 object-contain" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Plaksha University</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">Plaksha University is a pioneering
                    institution offering a <span className="text-purple-300 font-semibold">Master&apos;s in
                      AI</span> program, dedicated to fostering innovation, technology, and
                    entrepreneurship. As
                    our premium partner, they empower students to build the future with cutting-edge AI
                    education.</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold">Master&apos;s
                      in AI</span>
                    <span
                      className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs font-semibold">Innovation</span>
                    <span
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold">Technology</span>
                    <span
                      className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs font-semibold">Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 italic">&quot;Empowering the next generation of innovators and builders&quot;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
