"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LeadMagnet from "../components/LeadMagnet";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

export default function Home() {
  const scrollToContact = () => {
      const contactSection = document.getElementById("contact");

    if (contactSection) {
      window.scrollTo({ top: contactSection.offsetTop - 50, behavior: "smooth" });
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      <nav className="glass-heavy w-max fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 rounded-full px-3 pl-6 pr-3 py-4 shadow-2xl transition-all duration-300 border border-white/10">
        <div className="flex justify-between items-center w-full gap-12">
          <div
            className="md:text-2xl text-xl font-bold tracking-tighter cursor-pointer z-50 relative"
            onClick={scrollTop}
          >
            harsh<span className="text-yellow-500">.</span>xyz
          </div>


          <div className="block">
            <a
              onClick={scrollToContact}
              className="bg-white cursor-pointer text-black px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-full hover:bg-yellow-500 transition-colors shadow-lg"
            >
              Book Call
            </a>
          </div>

        </div>

      </nav>

      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <LeadMagnet />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
