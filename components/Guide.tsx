export default function Guide() {
  return (
    <section id="guide" className="py-20 bg-brand-surface scroll-reveal">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">Essential <span
            className="text-brand-orange">Resources</span></h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto rounded mb-12"></div>
          <p className="text-gray-400 mb-12">Everything you need to prepare for FORGE 1.0</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Event Guide */}
            <div className="relative group">
              <div
                className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-red-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300">
              </div>
              <div className="relative bg-brand-dark p-8 rounded-lg border border-brand-orange/30">
                <div
                  className="w-16 h-16 mx-auto bg-brand-orange/20 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-book text-3xl text-brand-orange"></i>
                </div>
                <h3 className="text-xl text-white font-bold mb-3">Participant Guide</h3>
                <p className="text-gray-400 mb-6">Complete guide with rules, evaluation criteria, and PPT
                  submission details.</p>
                <a href="https://fog-airedale-655.notion.site/FORGE-1-0-Buildathon-Participant-Guide-2f9372e4badc80b9a971eafbe96b6436?pvs=141"
                  target="_blank"
                  className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-orange/80 transition-colors w-full text-center">
                  <i className="fas fa-external-link-alt mr-2"></i>View Guide
                </a>
              </div>
            </div>

            {/* Tech Guide */}
            <div className="relative group">
              <div
                className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300">
              </div>
              <div className="relative bg-brand-dark p-8 rounded-lg border border-brand-cyan/30">
                <div
                  className="w-16 h-16 mx-auto bg-brand-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-code text-3xl text-brand-cyan"></i>
                </div>
                <h3 className="text-xl text-white font-bold mb-3">Tech Preparation Guide</h3>
                <p className="text-gray-400 mb-6">Technical setup instructions, recommended tools, and
                  preparation checklist.</p>
                <a href="https://fog-airedale-655.notion.site/FORGE-1-0-Participant-Preparation-Tech-Guide-2f9372e4badc80b7859fd631fa2f8719?pvs=141"
                  target="_blank"
                  className="inline-block bg-brand-cyan text-brand-dark px-6 py-3 rounded-lg font-bold hover:bg-brand-cyan/80 transition-colors w-full text-center">
                  <i className="fas fa-external-link-alt mr-2"></i>View Tech Guide
                </a>
              </div>
            </div>

            {/* Rulebook */}
            <div className="relative group">
              <div
                className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300">
              </div>
              <div className="relative bg-brand-dark p-8 rounded-lg border border-emerald-500/30">
                <div
                  className="w-16 h-16 mx-auto bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-gavel text-3xl text-emerald-500"></i>
                </div>
                <h3 className="text-xl text-white font-bold mb-3">Official Rulebook</h3>
                <p className="text-gray-400 mb-6">Comprehensive rules, guidelines, and code of conduct.</p>
                <a href="https://fog-airedale-655.notion.site/FORGE-1-0-Hackathon-Rulebook-Official-Rules-Guidelines-2a8916b052134106963ad3c8f2ca8497"
                  target="_blank"
                  className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors w-full text-center">
                  <i className="fas fa-external-link-alt mr-2"></i>View Rulebook
                </a>
              </div>
            </div>

            {/* Brochure */}
            <div className="relative group">
              <div
                className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300">
              </div>
              <div className="relative bg-brand-dark p-8 rounded-lg border border-purple-500/30">
                <div
                  className="w-16 h-16 mx-auto bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-file-pdf text-3xl text-purple-500"></i>
                </div>
                <h3 className="text-xl text-white font-bold mb-3">Event Brochure</h3>
                <p className="text-gray-400 mb-6">Detailed overview of the event, schedule, and tracks.</p>
                <a href="https://drive.google.com/file/d/18VwJvD_aDJOSk6S0fVPc4QOsRcNl8CwU/view?usp=sharing"
                  target="_blank"
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors w-full text-center">
                  <i className="fas fa-external-link-alt mr-2"></i>View Brochure
                </a>
              </div>
            </div>

            {/* Poster */}
            <div className="relative group">
              <div
                className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300">
              </div>
              <div className="relative bg-brand-dark p-8 rounded-lg border border-pink-500/30">
                <div
                  className="w-16 h-16 mx-auto bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-image text-3xl text-pink-500"></i>
                </div>
                <h3 className="text-xl text-white font-bold mb-3">Event Poster</h3>
                <p className="text-gray-400 mb-6">Official event poster to share on your socials.</p>
                <a href="https://drive.google.com/file/d/1wK7SeiK9RFnxBmwRSOkFVoOeaBFWoQf8/view?usp=sharing"
                  target="_blank"
                  className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-pink-700 transition-colors w-full text-center">
                  <i className="fas fa-external-link-alt mr-2"></i>View Poster
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-brand-dark/50 rounded-lg border border-yellow-500/30">
            <i className="fas fa-exclamation-triangle text-yellow-500 text-2xl mb-3"></i>
            <p className="text-yellow-500 font-bold mb-2">Important: Read Both Guides Before the Event</p>
            <p className="text-gray-400 text-sm">Familiarize yourself with the rules, tech stack, and preparation
              requirements to maximize your chances of success.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
