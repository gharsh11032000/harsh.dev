import React from 'react';
import Section from './Section';
import { Testimonial } from '../types';
import { Quote, Star } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CEO',
    company: 'GrowthFlow',
    quote: "Alex didn't just build the app, he challenged our business model. The pivot he suggested doubled our LTV. The code is flawless, but the strategic advice was priceless.",
    avatarUrl: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: '2',
    name: 'Mike Ross',
    role: 'Product Lead',
    company: 'FinTech Startup',
    quote: "We had 3 other devs fail to deliver this dashboard. Alex came in, cleaned up the mess in 2 weeks, and we launched on time. Absolute weapon.",
    avatarUrl: 'https://picsum.photos/seed/mike/100/100'
  },
  {
    id: '3',
    name: 'David Chen',
    role: 'Founder',
    company: 'EcomGiant',
    quote: "Fast. Reliable. Expensive. And worth every single penny. If you want cheap, go elsewhere. If you want it done right, hire Alex.",
    avatarUrl: 'https://picsum.photos/seed/dave/100/100'
  }
];

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" title="Social Proof" subtitle="Real clients. Real revenue. Real results.">
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative flex flex-col hover:border-neutral-700 transition-colors">
            
            {/* Stars */}
            <div className="flex gap-1 text-yellow-500 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
            </div>

            <p className="text-gray-200 font-medium leading-relaxed mb-8 flex-1">"{t.quote}"</p>
            
            <div className="flex items-center gap-4 pt-6 border-t border-neutral-800">
              <img src={t.avatarUrl} alt={t.name} loading="lazy" className="w-12 h-12 rounded-full border-2 border-yellow-500" />
              <div>
                <h4 className="text-white font-black text-sm uppercase">{t.name}</h4>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{t.role}, {t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;