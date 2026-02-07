import { Star } from "lucide-react";
import React from "react";
import { Testimonial } from "../types";
import Section from "./Section";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    role: "CEO",
    company: "GrowthFlow",
    quote:
      "Harsh didn't just build the app—he 3x'd our conversion rate. The strategic advice alone was worth $50k. We went from $23k/mo to $89k/mo in 4 months.",
    avatarUrl: "https://picsum.photos/seed/sarah/100/100",
  },
  {
    id: "2",
    name: "Mike Ross",
    role: "Product Lead",
    company: "FinTech Startup",
    quote:
      "3 devs failed us. $40k wasted. Harsh came in, fixed everything in 2 weeks, and we launched on time. Best money I've ever spent on development.",
    avatarUrl: "https://picsum.photos/seed/mike/100/100",
  },
  {
    id: "3",
    name: "David Chen",
    role: "Founder",
    company: "EcomGiant",
    quote:
      "Is he expensive? Yes. Did the app pay for itself in 6 weeks? Also yes. We went from $0 to $127k MRR. Stop looking for cheap. Start looking for ROI.",
    avatarUrl: "https://picsum.photos/seed/dave/100/100",
  },
];

const Testimonials: React.FC = () => {
  return (
    <Section
      id="testimonials"
      title="The Results Speak"
      subtitle="Don't take my word for it. Look at what they achieved."
      noSpaceBelow
    >
      <div className="-mx-(--container-gutter) px-(--container-gutter) sm:mx-0 sm:px-0 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-(--section-padding-block) scrollbar-hide">
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-max sm:w-full min-w-0">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass rounded-lg border border-white/10 relative flex flex-col hover:border-white/20 transition-colors w-[85vw] min-w-[280px] sm:w-auto sm:min-w-0 shrink-0 snap-center"
              style={{ padding: "clamp(1.25rem, 3vw, 2rem)" }}
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-500 mb-4 sm:mb-6 shrink-0">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p
                className="text-neutral-200 font-medium leading-relaxed mb-6 sm:mb-8 flex-1 min-w-0 wrap-break-word"
                style={{ fontSize: "var(--text-body)" }}
              >
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-neutral-800 min-w-0">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  loading="lazy"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-yellow-500 shrink-0 object-cover"
                />
                <div className="min-w-0">
                  <h4
                    className="text-white font-bold uppercase wrap-break-word"
                    style={{ fontSize: "var(--text-body)" }}
                  >
                    {t.name}
                  </h4>
                  <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider wrap-break-word">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
