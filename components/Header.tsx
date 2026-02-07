"use client";

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
    <nav className="glass-heavy backdrop-blur-sm w-max fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 rounded-full px-3 pl-6 pr-3 py-4 shadow-2xl transition-all duration-300 border border-white/10">
      <div className="flex justify-between items-center w-full gap-12">
        <div
          className="md:text-2xl text-xl font-bold tracking-tighter cursor-pointer z-50 relative hover:text-yellow-500 transition-colors"
          onClick={onScrollToTop}
        >
          harsh<span className="text-yellow-500">.</span>xyz
        </div>

        <div className="block">
          <button
            onClick={onScrollToContact}
            className="bg-white cursor-pointer text-black px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-full hover:bg-yellow-500 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]"
          >
            Book Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
