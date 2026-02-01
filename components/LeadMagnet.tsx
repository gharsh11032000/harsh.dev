import { CheckCircle, Download, Lock, ShieldCheck } from "lucide-react";
import React, { useState } from "react";
import Button from "./Button";

const LeadMagnet: React.FC = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && phone) {
      setSubmitted(true);
      // In a real app, send to backend/CRM
    }
  };

  return (
    <section
      className="bg-yellow-500 border-y border-yellow-600 overflow-hidden"
      style={{
        paddingBlock: "var(--section-padding-block)",
      }}
    >
      <div className="container">
        <div
          className="bg-black text-white rounded-2xl sm:rounded-3xl shadow-2xl relative overflow-hidden min-w-0 w-full max-w-full"
          style={{ padding: "clamp(1.5rem, 4vw, 4rem)" }}
        >
          {/* Texture */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-size-[20px_20px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-16 items-stretch lg:items-center min-w-0 w-full">
            {/* Copy */}
            <div className="min-w-0 flex flex-col">
              <div className="inline-flex items-center gap-1 bg-yellow-500 pr-3 text-black font-bold px-2 py-2 rounded-full text-xs uppercase mb-4 sm:mb-6 tracking-widest w-fit">
                <ShieldCheck size={16} className="shrink-0" />
                Top Secret Access
              </div>
              <h2
                className="font-bold uppercase mb-4 sm:mb-6 leading-[0.95] tracking-tighter text-balance wrap-break-word"
                style={{ fontSize: "var(--text-section-title)" }}
              >
                Steal My <span className="text-yellow-500">7-Figure</span> App
                Blueprint
              </h2>
              <p
                className="text-neutral-400 mb-6 sm:mb-8 font-medium min-w-0"
                style={{ fontSize: "var(--text-body)" }}
              >
                I've compiled the exact libraries, databases, and frameworks
                used by unicorns to scale. This isn't theory. It's the cheat
                sheet I use for every $10k+ project.
              </p>
              <div className="space-y-3 sm:space-y-4 min-w-0">
                {[
                  "Frontend Architecture Diagram",
                  "Top 5 Performance Killers Checklist",
                  "The 'Clean Code' SOP",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 sm:gap-4 bg-neutral-900/50 p-3 sm:p-4 rounded-xl border border-neutral-800 min-w-0"
                  >
                    <CheckCircle
                      className="text-black bg-yellow-500 rounded-full shrink-0"
                      size={24}
                    />
                    <span className="font-bold text-sm sm:text-base wrap-break-word min-w-0">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div
              className="glass rounded-xl sm:rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center min-w-0 w-full"
              style={{
                padding: "clamp(1.25rem, 3vw, 2.5rem)",
              }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 w-full min-w-0 max-w-full">
                  <div className="text-center mb-8 flex flex-col items-center gap-2">
                    <h3 className="font-bold text-xl sm:text-2xl text-white uppercase tracking-tight">
                      Get Instant Access
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                      Enter your details below to unlock.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full min-w-0 max-w-full bg-black border border-neutral-800 text-white p-3 sm:p-4 rounded-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all font-medium placeholder:text-neutral-500 box-border"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                      className="w-full min-w-0 max-w-full bg-black border border-neutral-800 text-white p-3 sm:p-4 rounded-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all font-medium placeholder:text-neutral-500 box-border"
                    />
                  </div>

                  <Button
                    type="submit"
                    fullWidth
                    className="mt-4 flex items-center justify-center gap-2 py-3 px-6 sm:py-4 sm:px-8"
                    style={{ fontSize: "var(--text-body)" }}
                  >
                    Send Me The Blueprint <Download size={18} className="shrink-0" />
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-600 mt-4 uppercase font-bold tracking-wider">
                    <Lock size={12} />
                    <span>100% Secure. Zero Spam.</span>
                  </div>
                </form>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase">
                    You're In!
                  </h3>
                  <p className="text-neutral-400 font-medium">
                    Check your inbox. The blueprint is on its way.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
