export default function Footer() {
  return (
    <footer className="bg-brand-dark py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <img src="/assets/seed_logo.jpeg" alt="SEED" className="h-10 w-auto rounded opacity-80" />
          <div className="flex flex-col">
            <span className="text-gray-400 font-bold">SEED NITJ</span>
            <div className="text-xs text-brand-orange mt-1">
              <p className="font-semibold">Event Coordinator</p>
              <p className="text-gray-400">Rinku Diwakar | +91 91374 38718</p>
              <a href="mailto:rinkud.ee.23@nitj.ac.in"
                className="hover:text-white transition-colors">rinkud.ee.23@nitj.ac.in</a>
            </div>
          </div>
        </div>
        <div className="text-gray-600 text-sm">
          &copy; 2026 Society of Electrical Engineers and Developers. All rights reserved.
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://www.instagram.com/ee__nitj" target="_blank"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:-translate-y-1 transition-all duration-300">
            <i className="fab fa-instagram text-lg"></i>
          </a>
          <a href="https://www.linkedin.com/company/seed-nitj/" target="_blank"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:-translate-y-1 transition-all duration-300">
            <i className="fab fa-linkedin text-lg"></i>
          </a>
          <a href="mailto:seed@nitj.ac.in"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:-translate-y-1 transition-all duration-300">
            <i className="fas fa-envelope text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
