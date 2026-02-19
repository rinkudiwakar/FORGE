export default function About() {
  return (
    <section id="about" className="py-20 bg-grid relative scroll-reveal">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white mb-6">About <span className="text-brand-orange">The Event</span>
          </h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto rounded"></div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-16 text-gray-300 space-y-6 text-lg leading-relaxed text-justify">
          <p>
            <strong className="text-white">FORGE 1.0</strong> is a hands-on buildathon designed to simulate
            real-world startup problem solving through practical system development. Participants step into the
            role of founding engineers and work in teams to design, build, and ship functional solutions to real
            operational challenges.
          </p>
          <p>
            Unlike traditional hackathons that focus on ideation or presentations, <strong
              className="text-brand-orange">FORGE 1.0 emphasizes execution over slides</strong>—teams are expected
            to create working systems that automate processes, apply backend logic, and deliver measurable
            outcomes. The focus is on building something real, not just proposing an idea.
          </p>
          <p>
            Throughout the event, participants receive mentorship, resources, and a collaborative environment to
            experiment, learn, and iterate. Projects are evaluated based on functionality, system thinking,
            clarity of design, and overall impact.
          </p>
          <p className="font-semibold text-brand-cyan">
            FORGE 1.0 is not a pitch competition—it is a build-what-you-ship experience where working demos
            matter most. Winners are selected based on the completeness, effectiveness, and technical decisions
            demonstrated in their final solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Objectives */}
          <div
            className="bg-brand-surface p-8 rounded-xl border border-white/5 hover:border-brand-orange/30 transition-all hover:-translate-y-1 shadow-lg">
            <h3 className="text-2xl text-white font-bold mb-6 flex items-center">
              <i className="fas fa-bullseye text-brand-orange mr-3"></i> Event Objectives
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-brand-orange mt-1 mr-3"></i>
                <span>Enable participants to build a <strong className="text-white">WORKING Minimum Viable
                  Product (MVP)</strong> within a limited timeframe</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-brand-orange mt-1 mr-3"></i>
                <span>Develop practical skills in backend logic and automation principles</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-brand-orange mt-1 mr-3"></i>
                <span>Foster system-level thinking and scalability considerations</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-brand-orange mt-1 mr-3"></i>
                <span>Simulate real startup founding experience under resource constraints</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-brand-orange mt-1 mr-3"></i>
                <span>Emphasize execution and delivery over ideation and presentation</span>
              </li>
            </ul>
          </div>

          {/* Audience */}
          <div
            className="bg-brand-surface p-8 rounded-xl border border-white/5 hover:border-brand-cyan/30 transition-all hover:-translate-y-1 shadow-lg">
            <h3 className="text-2xl text-white font-bold mb-6 flex items-center">
              <i className="fas fa-users text-brand-cyan mr-3"></i> Target Audience
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-user-tag text-brand-cyan mt-1 mr-3"></i>
                <span>Engineering students and early-career developers</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-user-tag text-brand-cyan mt-1 mr-3"></i>
                <span>Aspiring startup founders with technical interests</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-user-tag text-brand-cyan mt-1 mr-3"></i>
                <span>Backend developers and automation enthusiasts</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-user-tag text-brand-cyan mt-1 mr-3"></i>
                <span>Anyone interested in building real systems that solve real problems</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Team Size */}
        <div className="mt-12 text-center animate-fade-in">
          <div
            className="inline-flex items-center px-8 py-4 bg-white/5 rounded-full border border-brand-orange/50 text-white font-bold text-xl shadow-[0_0_15px_rgba(255,77,0,0.3)] backdrop-blur-sm">
            <i className="fas fa-users-cog text-brand-orange mr-3 text-2xl"></i> Team Size: <span
              className="text-brand-orange ml-2">2 or 3 members</span>
          </div>
        </div>
      </div>
    </section>
  );
}
