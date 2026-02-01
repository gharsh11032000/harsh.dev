import React from 'react';
import Section from './Section';
import { Project } from '../types';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Com Scale Dashboard',
    description: 'Custom analytics for a dropshipping agency handling $500k/mo.',
    outcome: '-90% Report Time',
    stack: ['React', 'Supabase', 'D3.js'],
    imageUrl: 'https://picsum.photos/seed/dash/800/600',
  },
  {
    id: '2',
    title: 'SaaS Page Builder',
    description: 'Modular landing page system for rapid campaign deployment.',
    outcome: '+24% Leads',
    stack: ['Next.js', 'Tailwind', 'Contentful'],
    imageUrl: 'https://picsum.photos/seed/saas/800/600',
  },
  {
    id: '3',
    title: 'AI SEO Writer',
    description: 'Internal tool leveraging LLMs to auto-write blog posts.',
    outcome: '20hrs/wk Saved',
    stack: ['Gemini API', 'React', 'Node'],
    imageUrl: 'https://picsum.photos/seed/ai/800/600',
  },
];

const Portfolio: React.FC = () => {
  return (
    <Section 
      id="portfolio" 
      title="The Track Record" 
      subtitle="Talk is cheap. Here are the numbers."
      darker
    >
      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <div key={project.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Image Side */}
            <div className="w-full lg:w-3/5 group relative">
              <div className="absolute inset-0 bg-yellow-500 rounded-2xl rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-neutral-800 bg-neutral-900 aspect-video">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                   <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold uppercase tracking-wider rounded-full hover:bg-yellow-500 transition-colors">
                      View Live <ExternalLink size={18} />
                   </button>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-2/5">
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-3xl font-black text-white uppercase mb-2 tracking-tight">{project.title}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed">{project.description}</p>
                </div>
                
                <div className="bg-neutral-900 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">The Outcome</p>
                  <p className="text-4xl font-black text-white">{project.outcome}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-neutral-800 text-gray-300 text-xs font-bold uppercase rounded border border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="self-start text-yellow-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all">
                  Read Case Study <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;