import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillGroups } from '../data/portfolioData';

export const TechWall: React.FC = () => {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  // Flatten skills for the wall
  const allSkills = skillGroups.flatMap(group => 
    group.items.map(item => ({ name: item, category: group.category }))
  );

  const getTechDescription = (name: string) => {
    const descriptions: Record<string, string> = {
      'HTML / CSS': 'Structure and editorial styling for high-performance web interfaces.',
      'JavaScript': 'Core scripting for interactivity and complex application logic.',
      'React': 'Building component-driven architectures with advanced state management.',
      'TypeScript': 'Ensuring type safety and architectural integrity across the codebase.',
      'Firebase': 'Real-time database, authentication, and cloud functions for mobile/web apps.',
      'Cloudinary': 'Automated media optimization and high-speed asset delivery.',
      'Render': 'Scalable cloud hosting for backend services and full-stack deployments.',
      'APIs': 'Designing and consuming RESTful services for data synchronization.',
      'Git / GitHub': 'Version control and collaborative engineering workflows.',
      'Android Studio': 'Native mobile development with Java/Kotlin and Material Design.',
      'Netlify': 'Continuous deployment and static hosting with global CDN presence.',
      'Google AI Studio / Gemini': 'Integrating advanced LLM capabilities and AI-driven logic.'
    };
    return descriptions[name] || 'Applied technical competency in modern software development.';
  };

  return (
    <section className="py-28 border-b border-[#D8D3C8]">
      <div className="space-y-16">
        <div className="space-y-4">
          <span className="meta-tag text-[#7C8B78]">02 / TOOLING & FRAMEWORKS</span>
          <h2 className="title-editorial">Technical Stack.</h2>
          <p className="text-sm text-[#77736B] font-light max-w-2xl">
            A practiced collection of technologies used to build, test, and deploy functional products. 
            Tap or hover to explore applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-l border-t border-[#D8D3C8]">
          {allSkills.map((tech, idx) => (
            <div 
              key={tech.name}
              onMouseEnter={() => setActiveTech(tech.name)}
              onMouseLeave={() => setActiveTech(null)}
              className="relative aspect-square border-r border-b border-[#D8D3C8] bg-[#FAF8F4] group cursor-pointer overflow-hidden p-6 flex flex-col justify-between"
            >
              <span className="text-[10px] font-mono text-[#9E998E] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                0{idx + 1}
              </span>
              
              <div className="space-y-1">
                <span className="block font-display text-lg font-bold leading-tight group-hover:text-[#C65A3A] transition-colors duration-300">
                  {tech.name}
                </span>
                <span className="block text-[8px] font-mono uppercase tracking-widest text-[#77736B]">
                  {tech.category}
                </span>
              </div>

              <motion.div 
                animate={activeTech === tech.name ? { height: '100%' } : { height: '0%' }}
                className="absolute inset-0 bg-[#171717] z-10 pointer-events-none origin-bottom flex flex-col justify-end p-6"
              >
                <div className="space-y-2 overflow-hidden">
                  <span className="block text-[10px] font-mono text-[#F4F1EA] uppercase tracking-[0.2em] mb-2 border-b border-[#F4F1EA]/20 pb-2">
                    Application
                  </span>
                  <p className="text-[11px] text-[#F4F1EA] font-light leading-relaxed">
                    {getTechDescription(tech.name)}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
