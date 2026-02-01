import { ExternalLink } from "lucide-react";
import React from "react";
import { Project } from "../types";
import Section from "./Section";

const projects: Project[] = [
  {
    id: "1",
    title: "E-Com Scale Dashboard",
    description:
      "Custom analytics for a dropshipping agency handling $500k/mo.",
    outcome: "-90% Report Time",
    stack: ["React", "Supabase", "D3.js"],
    imageUrl: "https://picsum.photos/seed/dash/800/600",
  },
  {
    id: "2",
    title: "SaaS Page Builder",
    description: "Modular landing page system for rapid campaign deployment.",
    outcome: "+24% Leads",
    stack: ["Next.js", "Tailwind", "Contentful"],
    imageUrl: "https://picsum.photos/seed/saas/800/600",
  },
  {
    id: "3",
    title: "AI SEO Writer",
    description: "Internal tool leveraging LLMs to auto-write blog posts.",
    outcome: "20hrs/wk Saved",
    stack: ["Gemini API", "React", "Node"],
    imageUrl: "https://picsum.photos/seed/ai/800/600",
  },
];

const Portfolio: React.FC = () => {
  return (
    <Section
      id="portfolio"
      title="The Track Record"
      subtitle="Talk is cheap. Here are the numbers."
      darker
      noSpaceBelow
    >
      <div className="-mx-[var(--container-gutter)] px-[var(--container-gutter)] sm:mx-0 sm:px-0 overflow-x-auto snap-x snap-mandatory pb-[var(--section-padding-block)] lg:overflow-visible scrollbar-hide">
        <div className="flex lg:flex-col gap-6 sm:gap-8 lg:gap-16 w-max lg:w-full min-w-0">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-stretch lg:items-center w-[85vw] min-w-[280px] lg:w-full shrink-0 snap-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            {/* Image Side */}
            <div className="w-full min-w-0 lg:min-w-0 lg:flex-[1.2] group relative">
              <div className="absolute -inset-1 sm:-inset-1.5 rounded-lg sm:rounded-xl bg-neutral-800/80 border border-white/5 -z-10" aria-hidden />
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-video min-w-0 shadow-lg">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 min-w-0"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 sm:gap-4">
                  <button className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black font-bold uppercase tracking-wider rounded-full hover:bg-yellow-500 transition-colors text-sm sm:text-base">
                    View Live <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full min-w-0 lg:flex-[0.8] flex flex-col">
              <div className="flex flex-col gap-4 sm:gap-6 min-w-0">
                <div className="min-w-0">
                  <h3
                    className="font-bold text-white uppercase mb-2 tracking-tight wrap-break-word"
                    style={{ fontSize: "var(--text-card-title)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-neutral-400 font-medium leading-relaxed wrap-break-word min-w-0"
                    style={{ fontSize: "var(--text-body)" }}
                  >
                    {project.description}
                  </p>
                </div>

                <div
                  className="bg-neutral-900 border-l-4 border-yellow-500 rounded-r-lg min-w-0"
                  style={{ padding: "clamp(1rem, 2vw, 1.5rem)" }}
                >
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">
                    The Outcome
                  </p>
                  <p
                    className="font-bold text-white wrap-break-word"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                  >
                    {project.outcome}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 min-w-0">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs font-bold uppercase rounded-lg border border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
