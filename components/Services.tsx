import React from 'react';
import Section from './Section';
import { Zap, Layout, Database, TrendingUp, Smartphone, Lock, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'High-Velocity Web Apps',
    description: 'Stop losing customers to slow load times. I build React apps optimized for sub-second interaction.',
    icon: <Zap size={28} />
  },
  {
    id: '2',
    title: 'Conversion-First UI/UX',
    description: 'Design that doesn\'t just "look pretty" but guides the user to the "Buy" button.',
    icon: <Layout size={28} />
  },
  {
    id: '3',
    title: 'Scalable Backend',
    description: 'Built to handle traffic spikes without crashing. Node.js architectures that grow with your revenue.',
    icon: <Database size={28} />
  },
  {
    id: '4',
    title: 'AI Integration',
    description: 'Leverage Gemini API to automate support or generate content. Cut overhead, increase output.',
    icon: <TrendingUp size={28} />
  },
  {
    id: '5',
    title: 'Mobile-First Dev',
    description: '50%+ of your traffic is mobile. If your site breaks on iPhone, you are burning money.',
    icon: <Smartphone size={28} />
  },
  {
    id: '6',
    title: 'Perf. Audit',
    description: 'I will tear down your existing codebase, find bottlenecks, and implement fixes.',
    icon: <Lock size={28} />
  },
];

const Services: React.FC = () => {
  return (
    <Section 
      id="services" 
      title="How I Add Value" 
      subtitle="I don't sell 'hours'. I sell assets that solve expensive problems."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="group relative bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:border-yellow-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(234,179,8,0.2)]"
          >
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-yellow-500">
              <ArrowUpRight size={24} />
            </div>

            <div className="mb-6 bg-black w-14 h-14 rounded-xl flex items-center justify-center border border-neutral-800 text-gray-400 group-hover:text-yellow-500 group-hover:border-yellow-500/50 transition-all shadow-inner">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm font-medium">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;