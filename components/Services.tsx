import {
  ArrowUpRight,
  Database,
  Gauge,
  Layout,
  Smartphone,
  TrendingUp,
  Zap,
} from "lucide-react";
import React from "react";
import { ServiceItem } from "../types";
import Section from "./Section";

const services: ServiceItem[] = [
  {
    id: "1",
    title: "Speed That Prints Cash",
    description:
      "Every 1-second delay costs you 7% in conversions. I build React apps that load in under 2 seconds. Your competitors won't know what hit them.",
    icon: <Zap size={28} />,
  },
  {
    id: "2",
    title: "Conversion-Obsessed Design",
    description:
      'Pretty designs don\'t pay bills. I architect user flows that move visitors from "just browsing" to "take my money" in 3 clicks or less.',
    icon: <Layout size={28} />,
  },
  {
    id: "3",
    title: "Unbreakable Backend",
    description:
      "Your app goes viral. Traffic spikes 10x. Most sites crash. Yours? It prints money while you sleep. Node.js architecture built for scale.",
    icon: <Database size={28} />,
  },
  {
    id: "4",
    title: "AI Integration",
    description:
      "Replace 3 support reps with a single AI. Auto-generate content. Personalize at scale. Cut costs 60% while improving experience.",
    icon: <TrendingUp size={28} />,
  },
  {
    id: "5",
    title: "Mobile-First Dev",
    description:
      "68% of your traffic is mobile. If your site sucks on iPhone, you're burning $68 of every $100 you spend on ads. Fix that.",
    icon: <Smartphone size={28} />,
  },
  {
    id: "6",
    title: "Performance Audit",
    description:
      "I'll tear apart your codebase, find the 3 bottlenecks killing your revenue, and fix them. Most audits pay for themselves 10x.",
    icon: <Gauge size={28} />,
  },
];

const Services: React.FC = () => {
  return (
    <Section
      id="services"
      title="The Arsenal"
      subtitle="I don't sell hours. I sell weapons that destroy your competition."
      noSpaceBelow
    >
      <div className="-mx-[var(--container-gutter)] px-[var(--container-gutter)] sm:mx-0 sm:px-0 overflow-x-auto snap-x snap-mandatory pb-[var(--section-padding-block)] sm:overflow-visible scrollbar-hide">
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-max sm:w-full min-w-0">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass group relative rounded-xl border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(234,179,8,0.2)] w-[80vw] min-w-[280px] max-w-[320px] sm:w-auto sm:max-w-none sm:min-w-0 shrink-0 snap-center"
              style={{ padding: "clamp(1.25rem, 3vw, 2rem)" }}
            >
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 opacity-0 group-hover:opacity-100 transition-opacity text-yellow-500 shrink-0">
                <ArrowUpRight size={20} />
              </div>

              <div className="mb-4 sm:mb-6 bg-black w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-neutral-800 text-neutral-400 group-hover:text-yellow-500 group-hover:border-yellow-500/50 transition-all shadow-inner shrink-0">
                {service.icon}
              </div>

              <h3
                className="font-bold text-white mb-2 sm:mb-3  tracking-tight wrap-break-word min-w-0"
                style={{ fontSize: "var(--text-card-title)" }}
              >
                {service.title}
              </h3>
              <p
                className="text-neutral-400 leading-relaxed font-medium wrap-break-word min-w-0"
                style={{ fontSize: "var(--text-body)" }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
