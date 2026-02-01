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
    <section className="bg-yellow-500 py-24 border-y border-yellow-600">
      <div className="container mx-auto px-6">
        <div className="bg-black text-white rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Texture */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-size-[20px_20px]"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-500 text-black font-bold px-4 py-1.5 rounded text-xs uppercase mb-6 tracking-widest">
                <ShieldCheck size={16} />
                Top Secret Access
              </div>
              <h2 className="text-4xl md:text-6xl font-bold uppercase mb-6 leading-[0.9] tracking-tighter">
                Steal My <br />
                <span className="text-yellow-500">7-Figure</span> App Blueprint
              </h2>
              <p className="text-gray-400 mb-8 text-lg font-medium">
                I've compiled the exact libraries, databases, and frameworks
                used by unicorns to scale. This isn't theory. It's the cheat
                sheet I use for every $50k+ project.
              </p>
              <div className="space-y-4">
                {[
                  "Frontend Architecture Diagram",
                  "Top 5 Performance Killers Checklist",
                  "The 'Clean Code' SOP",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 bg-neutral-900/50 p-4 rounded-xl border border-neutral-800"
                  >
                    <CheckCircle
                      className="text-black bg-yellow-500 rounded-full shrink-0"
                      size={24}
                    />
                    <span className="font-bold text-sm md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-neutral-900 p-8 md:p-10 h-full items-center justify-center flex rounded-2xl border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 w-full">
                  <div className="text-center mb-8">
                    <h3 className="font-bold text-2xl text-white uppercase tracking-tight">
                      Get Instant Access
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">
                      Enter your details below to unlock.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-black border border-neutral-800 text-white p-4 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                      className="w-full bg-black border border-neutral-800 text-white p-4 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all font-medium"
                    />
                  </div>

                  <Button
                    type="submit"
                    fullWidth
                    className="mt-4 flex items-center justify-center gap-2 text-lg"
                  >
                    Send Me The Blueprint <Download size={20} strokeWidth={3} />
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-gray-600 mt-4 uppercase font-bold tracking-wider">
                    <Lock size={12} />
                    <span>100% Secure. Zero Spam.</span>
                  </div>
                </form>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 uppercase">
                    You're In!
                  </h3>
                  <p className="text-gray-400 font-medium">
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
