import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-neutral-900 text-center">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-white uppercase mb-6 tracking-tighter">
          HARSH<span className="text-yellow-500">.</span>Dev
        </h2>

        <div className="flex gap-6 mb-8">
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={24} fill="currentColor" strokeWidth={0} />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} fill="currentColor" strokeWidth={0} />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} fill="currentColor" strokeWidth={0} />
          </a>
        </div>

        <div className="flex gap-6 mb-8 text-sm text-gray-500 font-medium">
          <a href="#" className="hover:text-yellow-500 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-yellow-500 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-yellow-500 transition-colors">
            Cookie Policy
          </a>
        </div>

        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Harsh Gupta. All rights reserved. <br />
          Building Assets. Creating Freedom.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
