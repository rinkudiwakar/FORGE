export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-brand-dark border-y border-white/5 scroll-reveal">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-white text-center mb-16">The <span
          className="text-brand-cyan">Agenda</span></h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 h-full w-px bg-white/10 transform md:-translate-x-1/2"></div>

          {/* Time Items */}
          <div className="space-y-12">
            {/* Item 1 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between group">
              <div className="md:w-5/12 text-left md:text-right mb-4 md:mb-0 ml-12 md:ml-0">
                <h4 className="text-xl text-white font-bold">Registration & Check-in</h4>
                <p className="text-gray-500">Team setup and ID distribution</p>
              </div>
              <div
                className="absolute left-0 md:left-1/2 w-8 h-8 bg-brand-surface border-2 border-brand-orange rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 group-hover:bg-brand-orange transition-colors">
                <i className="fas fa-id-badge text-xs text-white"></i>
              </div>
              <div className="md:w-5/12 ml-12 md:ml-0">
                <span className="text-brand-orange font-display font-bold text-lg">09:00 AM</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
              <div className="md:w-5/12 text-left mb-4 md:mb-0 ml-12 md:ml-0">
                <h4 className="text-xl text-white font-bold">Build Phase Starts</h4>
                <p className="text-gray-500">Design, code, and automate. Mentor support active.</p>
              </div>
              <div
                className="absolute left-0 md:left-1/2 w-8 h-8 bg-brand-surface border-2 border-brand-cyan rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 group-hover:bg-brand-cyan transition-colors">
                <i className="fas fa-code text-xs text-white"></i>
              </div>
              <div className="md:w-5/12 text-right md:text-left ml-12 md:ml-0">
                <span className="text-brand-cyan font-display font-bold text-lg">10:00 AM</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between group">
              <div className="md:w-5/12 text-left md:text-right mb-4 md:mb-0 ml-12 md:ml-0">
                <h4 className="text-xl text-white font-bold">Submission Deadline</h4>
                <p className="text-gray-500">Submit PPT (max 5 pages) with embedded video, GitHub & live links.
                  Strict cutoff.</p>
              </div>
              <div
                className="absolute left-0 md:left-1/2 w-8 h-8 bg-brand-surface border-2 border-red-500 rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 group-hover:bg-red-500 transition-colors">
                <i className="fas fa-flag-checkered text-xs text-white"></i>
              </div>
              <div className="md:w-5/12 ml-12 md:ml-0">
                <span className="text-red-500 font-display font-bold text-lg">02:00 PM</span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
              <div className="md:w-5/12 text-left mb-4 md:mb-0 ml-12 md:ml-0">
                <h4 className="text-xl text-white font-bold">Results & Prize Distribution</h4>
                <p className="text-gray-500">Winners announced. Certificates awarded.</p>
              </div>
              <div
                className="absolute left-0 md:left-1/2 w-8 h-8 bg-brand-surface border-2 border-brand-orange rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 group-hover:bg-brand-orange transition-colors">
                <i className="fas fa-trophy text-xs text-white"></i>
              </div>
              <div className="md:w-5/12 text-right md:text-left ml-12 md:ml-0">
                <span className="text-brand-orange font-display font-bold text-lg">06:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
