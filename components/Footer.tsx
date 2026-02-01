import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-neutral-800 text-center overflow-hidden">
      <div
        className="container flex flex-col items-center min-w-0 w-full"
        style={{ paddingBlock: "var(--section-padding-block)" }}
      >
        <h2
          className="font-bold text-white uppercase mb-5 sm:mb-6 tracking-tighter wrap-break-word"
          style={{ fontSize: "var(--text-card-title)" }}
        >
          HARSH<span className="text-yellow-500">.</span>Dev
        </h2>

        <div className="flex gap-5 sm:gap-6 mb-6 sm:mb-8 flex-wrap justify-center">
          <a
            href="#"
            className="text-neutral-500 hover:text-yellow-500 transition-colors p-1"
            aria-label="Twitter"
          >
            <Twitter size={22} fill="currentColor" strokeWidth={0} />
          </a>
          <a
            href="#"
            className="text-neutral-500 hover:text-yellow-500 transition-colors p-1"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} fill="currentColor" strokeWidth={0} />
          </a>
          <a
            href="#"
            className="text-neutral-500 hover:text-yellow-500 transition-colors p-1"
            aria-label="GitHub"
          >
            <Github size={22} fill="currentColor" strokeWidth={0} />
          </a>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8 justify-center text-neutral-500 font-medium min-w-0" style={{ fontSize: "var(--text-body)" }}>
          <a href="#" className="hover:text-yellow-500 transition-colors wrap-break-word">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-yellow-500 transition-colors wrap-break-word">
            Terms of Service
          </a>
          <a href="#" className="hover:text-yellow-500 transition-colors wrap-break-word">
            Cookie Policy
          </a>
        </div>

        <p className="text-neutral-600 wrap-break-word min-w-0 max-w-[min(32rem,100%)]" style={{ fontSize: "var(--text-body)" }}>
          © {new Date().getFullYear()} Harsh Gupta. All rights reserved.
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> </span>
          Building Assets. Creating Freedom.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
