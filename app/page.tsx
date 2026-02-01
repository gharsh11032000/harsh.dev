"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import ChatBot from "../components/ChatBot";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LeadMagnet from "../components/LeadMagnet";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Helper to smooth scroll (optional if not using native behavior, but native href=# works too)
  // For Next.js, standard anchors work for hashes on the same page.

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      {/* Navbar Overlay */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
        <div className="container mx-auto px-6 w-full flex justify-between items-center">
          <div
            className="text-2xl font-bold tracking-tighter cursor-pointer z-50 relative"
            onClick={() => window.scrollTo(0, 0)}
          >
            HARSH<span className="text-yellow-500">.</span>DEV
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors">
              Work
            </a>
            <a
              href="#testimonials"
              className="hover:text-white transition-colors"
            >
              Results
            </a>
          </div>
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-white text-black px-5 py-2 text-sm font-bold uppercase tracking-wider rounded hover:bg-yellow-500 transition-colors"
            >
              Book Call
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 md:hidden animate-in fade-in slide-in-from-top-10 duration-200">
            <a
              href="#services"
              onClick={closeMenu}
              className="text-2xl font-bold uppercase hover:text-yellow-500"
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={closeMenu}
              className="text-2xl font-bold uppercase hover:text-yellow-500"
            >
              Work
            </a>
            <a
              href="#testimonials"
              onClick={closeMenu}
              className="text-2xl font-bold uppercase hover:text-yellow-500"
            >
              Results
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="bg-yellow-500 text-black px-8 py-4 text-lg font-bold uppercase tracking-wider rounded"
            >
              Book Call
            </a>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <Services />
        <LeadMagnet />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
