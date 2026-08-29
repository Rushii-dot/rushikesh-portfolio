import React from 'react';
import { motion } from 'motion/react';
import { journeyMilestones } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  return (
    <section className="py-28 border-b border-[#D8D3C8]">
      <div className="space-y-20">
        <div className="space-y-4">
          <span className="meta-tag text-[#C65A3A]">03 / TIMELINE</span>
          <h2 className="title-editorial">Growth & Education.</h2>
        </div>

        <div className="relative space-y-32 before:absolute before:left-6 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-[#D8D3C8] before:-translate-x-1/2">
          {journeyMilestones.map((milestone, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Year Marker */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#171717] border-4 border-[#F4F1EA] z-20 shadow-[0_0_0_8px_#D8D3C840]" />
                
                <div className="w-full md:w-1/2 space-y-4 pl-12 md:pl-0 md:text-right">
                  <div className={`${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="font-display text-6xl md:text-8xl font-bold text-[#171717] opacity-10 leading-none">
                      {milestone.period.split(' ')[0]}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold -mt-4 md:-mt-8 text-[#171717]">
                      {milestone.phase}
                    </h3>
                  </div>
                </div>

                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={`p-8 bg-[#FAF8F4] border border-[#D8D3C8] space-y-6 ${isEven ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="space-y-2">
                      <span className="meta-tag text-[#C65A3A] text-[10px]">{milestone.focus}</span>
                      <p className="text-sm text-[#77736B] leading-relaxed font-light">
                        {milestone.description}
                      </p>
                    </div>
                    
                    <div className="pt-4 border-t border-[#D8D3C8] space-y-3">
                      <span className="meta-tag text-[9px] text-[#9E998E]">Core Takeaways</span>
                      <ul className="space-y-2">
                        {milestone.learnings.map((l, i) => (
                          <li key={i} className="flex items-start gap-3 text-[11px] font-mono text-[#171717] leading-tight">
                            <span className="text-[#C65A3A] mt-0.5">→</span>
                            <span>{l}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
