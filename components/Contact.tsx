import { Calendar, CheckCircle, Mail, MapPin } from "lucide-react";
import React, { useState } from "react";
import Button from "./Button";
import Section from "./Section";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <Section
      id="contact"
      title="Ready to Scale?"
      subtitle="I only take on 2 new clients per month. Apply below."
      darker
    >
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-16">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase tracking-tight">
            The Process
          </h3>
          <div className="space-y-8 relative">
            {/* Connector Line */}
            <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-neutral-800"></div>

            {[
              {
                title: "Discovery Call",
                desc: "We talk for 15 minutes. If I can't help you make money, I'll tell you.",
              },
              {
                title: "The Strategy",
                desc: "I map out the architecture and the roadmap to ROI.",
              },
              { title: "Execution", desc: "I build. You launch. We scale." },
            ].map((step, i) => (
              <div key={i} className="relative flex gap-6">
                <div className="shrink-0 w-10 h-10 rounded-full bg-neutral-950 border-2 border-yellow-500 text-yellow-500 font-bold flex items-center justify-center z-10">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{step.title}</h4>
                  <p className="text-gray-400 text-sm mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-black/50 p-6 rounded-xl border border-neutral-800 space-y-4">
            <div className="flex items-center gap-4 text-gray-300 break-all">
              <div className="w-8 h-8 bg-neutral-800 rounded flex items-center justify-center text-yellow-500">
                <Mail size={16} />
              </div>
              <span className="font-medium">HARSH@example.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-8 h-8 bg-neutral-800 rounded flex items-center justify-center text-yellow-500">
                <MapPin size={16} />
              </div>
              <span className="font-medium">Remote / Global</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-8 h-8 bg-neutral-800 rounded flex items-center justify-center text-yellow-500">
                <Calendar size={16} />
              </div>
              <span>
                Next Slot:{" "}
                <span className="text-sm font-semibold bg-yellow-500/20 px-2 py-1 rounded text-yellow-500">
                  November 1st
                </span>
              </span>
            </div>
          </div>
        </div>

        <div>
          {!submitted ? (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-black border border-neutral-700 text-white p-4 rounded-lg focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-all placeholder:text-gray-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
                    Work Email
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full bg-black border border-neutral-700 text-white p-4 rounded-lg focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-all placeholder:text-gray-500"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
                  Budget Range
                </label>
                <select
                  required
                  className="w-full bg-black border border-neutral-700 p-4 rounded-lg focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-all text-gray-400"
                >
                  <option value="">Select Investment Level</option>
                  <option value="1-3k">$1,000 - $3,000</option>
                  <option value="3-5k">$3,000 - $5,000</option>
                  <option value="5k+">$5,000+</option>
                  <option value="custom">Custom Budget</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
                  Project Details
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-black border border-neutral-700 text-white p-4 rounded-lg focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-all placeholder:text-gray-500"
                  placeholder="Tell me what you need built and what your goals are."
                ></textarea>
              </div>

              <Button className="w-full text-lg">Apply For A Slot</Button>

              <p className="text-center text-xs text-gray-600 mt-4">
                By clicking "Apply", you agree to our terms. We reply within 24
                hours.
              </p>
            </form>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-black rounded-2xl border border-yellow-500/30">
              <div className="w-20 h-20 bg-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 uppercase">
                Application Received
              </h3>
              <p className="text-gray-400">
                I'll review your details and get back to you within 24 hours if
                it's a fit.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 text-sm text-yellow-500 underline font-bold"
              >
                Send another application
              </button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
