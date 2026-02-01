import {
  ArrowUpRight,
  Database,
  Layout,
  Lock,
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
    title: "High-Velocity Web Apps",
    description:
      "Stop losing customers to slow load times. I build React apps optimized for sub-second interaction.",
    icon: <Zap size={28} />,
  },
  {
    id: "2",
    title: "Conversion-First UI/UX",
    description:
      'Design that doesn\'t just "look pretty" but guides the user to the "Buy" button.',
    icon: <Layout size={28} />,
  },
  {
    id: "3",
    title: "Scalable Backend",
    description:
      "Built to handle traffic spikes without crashing. Node.js architectures that grow with your revenue.",
    icon: <Database size={28} />,
  },
  {
    id: "4",
    title: "AI Integration",
    description:
      "Leverage Gemini API to automate support or generate content. Cut overhead, increase output.",
    icon: <TrendingUp size={28} />,
  },
  {
    id: "5",
    title: "Mobile-First Dev",
    description:
      "50%+ of your traffic is mobile. If your site breaks on iPhone, you are burning money.",
    icon: <Smartphone size={28} />,
  },
  {
    id: "6",
    title: "Perf. Audit",
    description:
      "I will tear down your existing codebase, find bottlenecks, and implement fixes.",
    icon: <Lock size={28} />,
  },
];

const Services: React.FC = () => {
  return (
    <Section
      id="services"
      title="How I Add Value"
      subtitle="I don't sell 'hours'. I sell assets that solve expensive problems."
      withDepth
    >
      <div className="-mx-[var(--container-gutter)] px-[var(--container-gutter)] sm:mx-0 sm:px-0 overflow-x-auto snap-x snap-mandatory pb-2 sm:pb-0 sm:overflow-visible scrollbar-hide">
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-max sm:w-full min-w-0">
          {services.map((service) => (
          <div
            key={service.id}
            className="glass group relative rounded-xl sm:rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(234,179,8,0.2)] w-[85vw] min-w-[280px] sm:w-auto sm:min-w-0 shrink-0 snap-center"
            style={{ padding: "clamp(1.25rem, 3vw, 2rem)" }}
          >
            <div className="absolute top-4 right-4 sm:top-5 sm:right-5 opacity-0 group-hover:opacity-100 transition-opacity text-yellow-500 shrink-0">
              <ArrowUpRight size={22} />
            </div>

            <div className="mb-4 sm:mb-6 bg-black w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border border-neutral-800 text-neutral-400 group-hover:text-yellow-500 group-hover:border-yellow-500/50 transition-all shadow-inner shrink-0">
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
