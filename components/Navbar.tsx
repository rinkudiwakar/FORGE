'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: SEED Presents + Logo */}
        <a href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
          <img src="/assets/seed_logo.jpeg" alt="SEED Logo" className="h-10 w-auto rounded-md" />
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs uppercase tracking-wider">SEED Presents</span>
            <span className="font-display font-bold text-xl tracking-wider text-white">FORGE<span
              className="text-brand-orange">1.0</span></span>
          </div>
        </a>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-btn"
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>

        {/* Right: Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="hover:text-brand-cyan transition-colors text-sm text-gray-300">About</a>
          <a href="#prizes" className="hover:text-brand-cyan transition-colors text-sm text-gray-300">Prizes</a>
          <a href="#certificates" className="hover:text-brand-cyan transition-colors text-sm text-gray-300">Certificates</a>
          <a href="#timeline" className="hover:text-brand-cyan transition-colors text-sm text-gray-300">Timeline</a>
          <a href="#guide" className="hover:text-brand-cyan transition-colors text-sm text-gray-300">Guides</a>
          <a href="#sponsors" className="hover:text-brand-cyan transition-colors text-sm text-gray-300">Sponsor</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSez5FNre4moJEgHFhAeXGRyJ1x24RQqUObyMH0sR6KsNecKpg/viewform?usp=publish-editor"
            target="_blank" className="btn-forge px-6 py-2 text-sm no-underline flex items-center">Register Now</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-brand-surface border-t border-white/5">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <a href="#about" className="text-gray-300 hover:text-brand-orange transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#prizes" className="text-gray-300 hover:text-brand-orange transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Prizes</a>
            <a href="#certificates" className="text-gray-300 hover:text-brand-orange transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Certificates</a>
            <a href="#timeline" className="text-gray-300 hover:text-brand-orange transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Timeline</a>
            <a href="#guide" className="text-gray-300 hover:text-brand-orange transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Guides</a>
            <a href="#sponsors" className="text-gray-300 hover:text-brand-orange transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Sponsor</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSez5FNre4moJEgHFhAeXGRyJ1x24RQqUObyMH0sR6KsNecKpg/viewform?usp=publish-editor"
              target="_blank" className="text-brand-orange font-bold">Register Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}
