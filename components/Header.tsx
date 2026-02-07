"use client";

import { TrendingUp } from "lucide-react";
import React from "react";

interface HeaderProps {
  onScrollToContact: () => void;
  onScrollToTop: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onScrollToContact,
  onScrollToTop,
}) => {
  return (
    <nav className="glass-heavy backdrop-blur-md w-max fixed top-3 sm:top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 rounded-full px-2 sm:px-3 py-2 sm:py-3 shadow-2xl transition-all duration-300 border border-white/10">
      <div className="flex justify-between items-center w-full gap-4 sm:gap-6 md:gap-10">
        {/* Logo - HG Monogram */}
        <button
          onClick={onScrollToTop}
          className="flex items-center gap-2 cursor-pointer group pl-2 sm:pl-3"
          aria-label="Scroll to top"
        >
          <TrendingUp className="text-yellow-500 stroke-2 " size={28} />
          <span className="text-base md:text-xl font-bold tracking-tight text-white">
            Harsh
          </span>
        </button>

        {/* CTA Button */}
        <button
          onClick={onScrollToContact}
          className="bg-white cursor-pointer text-black px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full hover:bg-yellow-500 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] active:scale-95"
        >
          Book Call
        </button>
      </div>
    </nav>
  );
};

export default Header;
