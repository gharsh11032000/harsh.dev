import { ChevronRight, Download } from "lucide-react";
import Image from "next/image";
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
    <div
      className="relative sm:min-h-screen flex items-center bg-[#050505] overflow-hidden selection:bg-yellow-500 selection:text-black pt-24 pb-7 sm:pt-16 sm:pb-6 lg:pt-[clamp(5rem,10vw,7.5rem)] lg:pb-[clamp(2rem,5vw,4rem)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="absolute top-0 left-0 right-0 h-[500px] bg-linear-to-b from-yellow-500/10 to-transparent blur-[100px] pointer-events-none" />

      <div className="relative z-10 container w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-8 items-center min-w-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-500/50 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div
          className="flex flex-col justify-center glass rounded-2xl sm:rounded-3xl min-w-0 w-full max-w-full"
          style={{ padding: "clamp(1.25rem, 4vw, 3rem)" }}
        >
          <div className="inline-flex items-center gap-2 self-start bg-black/40 border border-white/10 text-yellow-500 font-bold px-4 py-2 rounded-full mb-6 sm:mb-8 text-xs uppercase tracking-widest shadow-lg backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            Accepting New Clients
          </div>

          <h1
            className="font-bold text-white leading-[0.9] mb-6 sm:mb-8 tracking-tighter uppercase drop-shadow-2xl text-balance wrap-break-word"
            style={{ fontSize: "var(--text-hero)" }}
          >
            I Build <br />
            <span className="text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">
              Revenue
            </span>{" "}
            <br />
            Engines.
          </h1>

          <p
            className="text-gray-300 font-medium leading-relaxed border-l-4 border-yellow-500 pl-4 sm:pl-6 mix-blend-plus-lighter min-w-0 mb-8 sm:mb-10 max-w-[min(32rem,100%)]"
            style={{ fontSize: "var(--text-body)" }}
          >
            Stop paying for "code". Start paying for{" "}
            <span className="text-white font-bold">outcomes</span>. I engineer
            high-performance applications that print cash.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap">
            <Button
              onClick={scrollToContact}
              className="flex items-center justify-center gap-2 px-5!"
              style={{ fontSize: "var(--text-body)" }}
            >
              Start Scaling <ChevronRight size={24}  />
            </Button>
            <Button
              variant="outline"
              onClick={scrollToPortfolio}
              className="flex items-center justify-center gap-2 px-5!"
              style={{ fontSize: "var(--text-body)" }}
            >
              See Proof <Download size={24}  />
            </Button>
          </div>

          <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 text-sm font-semibold text-gray-400 uppercase tracking-wider min-w-0">
            <div className="flex flex-col">
              <span className="text-white font-bold" style={{ fontSize: "var(--text-body)" }}>3yr+</span>
              <span>Exp</span>
            </div>
            <div className="block w-px h-10 bg-white/10 shrink-0" />
            <div className="flex flex-col">
              <span className="text-white font-bold" style={{ fontSize: "var(--text-body)" }}>100%</span>
              <span>Delivery</span>
            </div>
            <div className="block w-px h-10 bg-white/10 shrink-0" />
            <div className="flex flex-col">
              <span className="text-white font-bold" style={{ fontSize: "var(--text-body)" }}>$500k+</span>
              <span>Client Rev</span>
            </div>
          </div>
        </div>

        {/* Right: Visual/Image */}
        <div className="relative hidden lg:block h-full min-w-0">
          <div className="relative z-10 rounded-2xl sm:rounded-3xl h-full overflow-hidden border border-neutral-800 bg-neutral-900 min-w-0">
            <Image
              src="https://picsum.photos/600/700?grayscale"
              alt="HARSH Developer"
              className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-all duration-700 hover:scale-105 min-w-0"
              width={600}
              height={700}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />

            {/* Floating Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 glass-heavy rounded-xl sm:rounded-2xl shadow-2xl min-w-0" style={{ padding: "clamp(1rem, 2vw, 1.5rem)" }}>
              <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold shrink-0" style={{ fontSize: "var(--text-body)" }}>
                  $
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-white leading-none wrap-break-word" style={{ fontSize: "var(--text-body)" }}>
                    ROI Focused
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                    Development Philosophy
                  </p>
                </div>
              </div>
              <p className="text-gray-300 font-medium text-sm sm:text-base wrap-break-word min-w-0">
                "If the code doesn't increase your bottom line, I haven't done
                my job."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
