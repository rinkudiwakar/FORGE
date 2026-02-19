export default function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/assets/forge 1.0 with bg.jpeg" alt="Forge Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-6 text-center">
        {/* SEED Presents Badge */}
        <div className="mb-4 animate-fade-in">
          <span className="text-white/80 font-bold text-sm uppercase tracking-wider backdrop-blur-sm">SEED
            Presents</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 animate-fade-in delay-200">
          FORGE <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-600">1.0</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light animate-fade-in delay-300">
          From <span className="text-brand-cyan font-medium">Breadboards</span> to <span
            className="text-brand-cyan font-medium">Breakthroughs</span>.<br />
          Build Real. Ship Fast.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in delay-400">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSez5FNre4moJEgHFhAeXGRyJ1x24RQqUObyMH0sR6KsNecKpg/viewform?usp=publish-editor"
            target="_blank" className="btn-forge px-8 py-4 text-lg flex items-center justify-center">Start Building</a>
          <a href="#guide"
            className="px-8 py-4 border border-white/20 hover:border-brand-cyan hover:text-brand-cyan transition-all text-white font-bold uppercase tracking-wider backdrop-blur-sm clip-path-polygon flex items-center justify-center">
            View Guide
          </a>
        </div>

        {/* Event Date & Venue */}
        <div className="mt-10 animate-fade-in delay-500">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            {/* Date */}
            <div
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10 hover:border-brand-orange/50 transition-all">
              <i className="fas fa-calendar-day text-brand-orange text-2xl"></i>
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Event Date</p>
                <p className="text-white font-bold text-lg">February 15, 2026</p>
              </div>
            </div>

            {/* Venue */}
            <div
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10 hover:border-brand-cyan/50 transition-all">
              <i className="fas fa-map-marker-alt text-brand-cyan text-2xl"></i>
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Venue</p>
                <p className="text-white font-bold text-lg">CENTRAL SEMINAR HALL (CSH)</p>
                <p className="text-gray-300 text-sm">NIT JALANDHAR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
