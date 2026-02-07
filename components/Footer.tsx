import { Github, Linkedin, TrendingUp, Twitter } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-neutral-800 overflow-hidden">
      <div
        className="container flex flex-col items-center min-w-0 w-full"
        style={{ paddingBlock: "clamp(2rem, 6vw, 4rem)" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <TrendingUp className="text-yellow-500 stroke-2" size={28} />
          <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white">
            Harsh
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 mb-6 sm:mb-8">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 sm:hover:text-yellow-500 sm:hover:border-yellow-500/50 transition-all sm:hover:-translate-y-1 touch-target"
            aria-label="Twitter"
          >
            <Twitter size={18} fill="currentColor" strokeWidth={0} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 sm:hover:text-yellow-500 sm:hover:border-yellow-500/50 transition-all sm:hover:-translate-y-1 touch-target"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} fill="currentColor" strokeWidth={0} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 sm:hover:text-yellow-500 sm:hover:border-yellow-500/50 transition-all sm:hover:-translate-y-1 touch-target"
            aria-label="GitHub"
          >
            <Github size={18} fill="currentColor" strokeWidth={0} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-neutral-800 rounded-full mb-6 sm:mb-8" />

        {/* Copyright & Tagline */}
        <div className="text-center space-y-2">
          <p className="text-neutral-500 text-sm font-medium">
            Building Assets. Creating Freedom.
          </p>
          <p className="text-neutral-600 text-xs sm:text-sm">
            © {currentYear} Harsh Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
