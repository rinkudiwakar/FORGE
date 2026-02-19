export default function Prizes() {
  return (
    <section id="prizes"
      className="py-20 bg-gradient-to-b from-brand-dark to-brand-surface relative overflow-hidden scroll-reveal">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white mb-4 animate-fade-in">Total Prize Pool: <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 font-black animate-pulse">₹6,000</span>
          </h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* 1st Prize */}
          <div className="relative group">
            <div
              className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300">
            </div>
            <div
              className="relative bg-brand-surface p-8 rounded-lg border border-yellow-500/30 text-center transform group-hover:scale-105 transition-transform duration-300">
              <div
                className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-trophy text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">1st Prize</h3>
              <p className="text-4xl font-black text-white mb-2">₹2,500</p>
              <p className="text-gray-400 text-sm">Champion Team</p>
            </div>
          </div>

          {/* 2nd Prize */}
          <div className="relative group">
            <div
              className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300">
            </div>
            <div
              className="relative bg-brand-surface p-8 rounded-lg border border-gray-500/30 text-center transform group-hover:scale-105 transition-transform duration-300">
              <div
                className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-medal text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-400 mb-2">2nd Prize</h3>
              <p className="text-4xl font-black text-white mb-2">₹2,000</p>
              <p className="text-gray-400 text-sm">Runner-up Team</p>
            </div>
          </div>

          {/* 3rd Prize */}
          <div className="relative group">
            <div
              className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300">
            </div>
            <div
              className="relative bg-brand-surface p-8 rounded-lg border border-orange-500/30 text-center transform group-hover:scale-105 transition-transform duration-300">
              <div
                className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-award text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-orange-400 mb-2">3rd Prize</h3>
              <p className="text-4xl font-black text-white mb-2">₹1,500</p>
              <p className="text-gray-400 text-sm">Third Place Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
