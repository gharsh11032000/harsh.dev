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

  const inputClass =
    "w-full min-w-0 max-w-full bg-black border border-neutral-700 text-white rounded-sm focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-all placeholder:text-neutral-500 box-border";
  const labelClass = "block text-xs font-bold uppercase text-neutral-500 mb-2";

  return (
    <Section
      id="contact"
      title="Ready to Scale?"
      subtitle="I only take on 2 new clients per month. Apply below."
      darker
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 glass border border-white/10 rounded-2xl sm:rounded-3xl min-w-0 w-full overflow-hidden"
        style={{ padding: "clamp(1.25rem, 4vw, 4rem)" }}
      >
        <div className="min-w-0">
          <h3
            className="font-bold text-white mb-6 sm:mb-8 uppercase tracking-tight wrap-break-word"
            style={{ fontSize: "var(--text-card-title)" }}
          >
            The Process
          </h3>
          <div className="space-y-6 sm:space-y-8 relative">
            <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-neutral-800 rounded-full" />

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
              <div key={i} className="relative flex gap-4 sm:gap-6 min-w-0">
                <div className="shrink-0 w-10 h-10 rounded-full bg-neutral-950 border-2 border-yellow-500 text-yellow-500 font-bold flex items-center justify-center z-10 text-sm">
                  {i + 1}
                </div>
                <div className="min-w-0">
                  <h4
                    className="font-bold text-white wrap-break-word"
                    style={{ fontSize: "var(--text-body)" }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="text-neutral-400 mt-1 wrap-break-word min-w-0"
                    style={{ fontSize: "var(--text-body)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-10 sm:mt-12 bg-black/50 rounded-xl border border-neutral-800 space-y-4 min-w-0"
            style={{ padding: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            <div className="flex items-center gap-3 sm:gap-4 text-neutral-300 min-w-0">
              <div className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center text-yellow-500 shrink-0">
                <Mail size={16} />
              </div>
              <span className="font-medium wrap-break-word min-w-0">HARSH@example.com</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-neutral-300 min-w-0">
              <div className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center text-yellow-500 shrink-0">
                <MapPin size={16} />
              </div>
              <span className="font-medium wrap-break-word min-w-0">Remote / Global</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-neutral-300 min-w-0">
              <div className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center text-yellow-500 shrink-0">
                <Calendar size={16} />
              </div>
              <span className="min-w-0 wrap-break-word">
                Next Slot:{" "}
                <span className="font-semibold bg-yellow-500/20 px-3 leading-none py-1 rounded-lg text-yellow-500 text-sm">
                  November 1st
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          {!submitted ? (
            <form className="space-y-4 sm:space-y-5 min-w-0 w-full" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 min-w-0">
                <div className="min-w-0">
                  <label className={labelClass}>Full Name</label>
                  <input
                    required
                    type="text"
                    className={`${inputClass} p-3 sm:p-4`}
                    placeholder="John Doe"
                  />
                </div>
                <div className="min-w-0">
                  <label className={labelClass}>Work Email</label>
                  <input
                    required
                    type="email"
                    className={`${inputClass} p-3 sm:p-4`}
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="min-w-0">
                <label className={labelClass}>Budget Range</label>
                <select
                  required
                  className={`${inputClass} p-3 sm:p-4`}
                >
                  <option value="">Select Investment Level</option>
                  <option value="1-3k">$1,000 - $3,000</option>
                  <option value="3-5k">$3,000 - $5,000</option>
                  <option value="5k+">$5,000+</option>
                  <option value="custom">Custom Budget</option>
                </select>
              </div>

              <div className="min-w-0">
                <label className={labelClass}>Project Details</label>
                <textarea
                  required
                  rows={4}
                  className={`${inputClass} p-3 sm:p-4 resize-y min-h-24`}
                  placeholder="Tell me what you need built and what your goals are."
                />
              </div>

              <Button className="w-full min-w-0" style={{ fontSize: "var(--text-body)" }}>
                Apply For A Slot
              </Button>

              <p className="text-center text-xs text-neutral-600 mt-4 wrap-break-word min-w-0">
                By clicking "Apply", you agree to our terms. We reply within 24
                hours.
              </p>
            </form>
          ) : (
            <div
              className="h-full flex flex-col items-center justify-center text-center bg-black rounded-2xl border border-yellow-500/30 min-w-0"
              style={{ padding: "clamp(2rem, 4vw, 2.5rem)" }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 shrink-0">
                <CheckCircle size={40} className="shrink-0" />
              </div>
              <h3
                className="font-bold text-white mb-2 uppercase wrap-break-word"
                style={{ fontSize: "var(--text-card-title)" }}
              >
                Application Received
              </h3>
              <p
                className="text-neutral-400 wrap-break-word min-w-0"
                style={{ fontSize: "var(--text-body)" }}
              >
                I'll review your details and get back to you within 24 hours if
                it's a fit.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 sm:mt-8 text-yellow-500 underline font-bold min-w-0"
                style={{ fontSize: "var(--text-body)" }}
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
