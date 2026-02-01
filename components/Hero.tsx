import { ChevronRight, Download } from "lucide-react";
import React from "react";
import Button from "./Button";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center pt-20 bg-[#050505] overflow-hidden selection:bg-yellow-500 selection:text-black">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      {/* Radial Gradient for spotlight effect */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-linear-to-b from-yellow-500/10 to-transparent blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 self-start bg-neutral-900 border border-neutral-800 text-yellow-500 font-bold px-4 py-2 rounded-full mb-8 text-xs uppercase tracking-widest shadow-lg">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            Accepting New Clients
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] mb-8 tracking-tighter uppercase">
            I Build <br />
            <span className="text-yellow-500">Revenue</span> <br />
            Engines.
          </h1>

          <p className="text-xl text-gray-400 mb-10 font-medium leading-relaxed max-w-lg border-l-4 border-yellow-500 pl-6">
            Stop paying for "code". Start paying for{" "}
            <span className="text-white font-bold">outcomes</span>. I engineer
            high-performance applications that print cash.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Button
              onClick={scrollToContact}
              className="flex items-center justify-center gap-2 text-lg px-10"
            >
              Start Scaling <ChevronRight size={24} strokeWidth={3} />
            </Button>
            <Button
              variant="outline"
              onClick={scrollToPortfolio}
              className="flex items-center justify-center gap-2 text-lg px-10"
            >
              See Proof <Download size={24} strokeWidth={3} />
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm font-bold text-gray-500 uppercase tracking-wider">
            <div className="flex flex-col">
              <span className="text-white text-2xl font-bold">4yr+</span>
              <span>Exp</span>
            </div>
            <div className="w-px h-10 bg-neutral-800"></div>
            <div className="flex flex-col">
              <span className="text-white text-2xl font-bold">100%</span>
              <span>Delivery</span>
            </div>
            <div className="w-px h-10 bg-neutral-800"></div>
            <div className="flex flex-col">
              <span className="text-white text-2xl font-bold">$5M+</span>
              <span>Client Rev</span>
            </div>
          </div>
        </div>

        {/* Right: Visual/Image */}
        <div className="relative hidden lg:block">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_0_50px_-12px_rgba(234,179,8,0.3)] border border-neutral-800 bg-neutral-900">
            <img
              src="https://picsum.photos/600/700?grayscale"
              alt="HARSH Developer"
              className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-all duration-700 hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80"></div>

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-neutral-900/90 backdrop-blur-xl p-6 rounded-2xl border border-neutral-700/50 shadow-2xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-xl">
                  $
                </div>
                <div>
                  <p className="font-bold text-white text-lg leading-none">
                    ROI Focused
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                    Development Philosophy
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-300 font-medium">
                "If the code doesn't increase your bottom line, I haven't done
                my job."
              </p>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-yellow-500/20 blur-[80px] rounded-full pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
