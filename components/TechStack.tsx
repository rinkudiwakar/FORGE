export default function TechStack() {
  return (
    <section id="tech" className="py-20 relative overflow-hidden scroll-reveal">
      {/* Decorational elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-cyan/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl text-white text-center mb-16">Recommended <span
          className="text-white">Stack</span></h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="tech-card bg-brand-surface p-8 rounded-xl text-center">
            <div
              className="w-16 h-16 mx-auto bg-gray-800 rounded-lg flex items-center justify-center mb-6 text-brand-cyan">
              <i className="fas fa-robot text-3xl"></i>
            </div>
            <h3 className="text-xl text-white font-bold mb-3">AI Editors</h3>
            <p className="text-gray-400 text-sm mb-4">Speed up development with AI assistance.</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">Cursor</span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">Windsurf</span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">Antigravity</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="tech-card bg-brand-surface p-8 rounded-xl text-center">
            <div
              className="w-16 h-16 mx-auto bg-gray-800 rounded-lg flex items-center justify-center mb-6 text-brand-orange">
              <i className="fas fa-bolt text-3xl"></i>
            </div>
            <h3 className="text-xl text-white font-bold mb-3">Automation</h3>
            <p className="text-gray-400 text-sm mb-4">Connect apps and build workflows.</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">Make.com</span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">Zapier</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="tech-card bg-brand-surface p-8 rounded-xl text-center">
            <div
              className="w-16 h-16 mx-auto bg-gray-800 rounded-lg flex items-center justify-center mb-6 text-yellow-500">
              <i className="fas fa-database text-3xl"></i>
            </div>
            <h3 className="text-xl text-white font-bold mb-3">Backend & DB</h3>
            <p className="text-gray-400 text-sm mb-4">Real-time data and serverless logic.</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">Firebase</span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">Supabase</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 italic max-w-2xl mx-auto border-t border-white/10 pt-6">
            &quot;Solutions should automate a real process, apply backend logic, and deliver measurable outcomes. The
            focus is on building working Minimum Viable Products (MVPs) that solve real-world problems.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
