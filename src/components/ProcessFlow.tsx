import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const stages = [
  { title: 'IDEA', color: '#171717' },
  { title: 'BUILD', color: '#C65A3A' },
  { title: 'TEST', color: '#7C8B78' },
  { title: 'SHIP', color: '#171717' },
];

const connections = [
  {
    name: 'Radius',
    path: 'Android Studio → Firebase → Google Maps → APK',
    accent: '#C65A3A'
  },
  {
    name: 'Health Club',
    path: 'HTML/CSS/JS → Cloudinary → Netlify → Live Web',
    accent: '#7C8B78'
  }
];

export const ProcessFlow: React.FC = () => {
  return (
    <section className="py-28 border-b border-[#D8D3C8]">
      <div className="space-y-16">
        <div className="space-y-4 text-center">
          <span className="meta-tag text-[#77736B]">The Engineering Loop</span>
          <h2 className="title-editorial">How things get built.</h2>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 max-w-4xl mx-auto">
          {stages.map((stage, idx) => (
            <React.Fragment key={stage.title}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative z-10"
              >
                <div 
                  className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center border-2 border-[#D8D3C8] bg-[#FAF8F4] group hover:border-[#171717] transition-all duration-500"
                  style={{ borderColor: idx % 2 === 1 ? stage.color : undefined }}
                >
                  <span className="font-display text-xl sm:text-2xl font-bold tracking-widest">{stage.title}</span>
                </div>
              </motion.div>
              {idx < stages.length - 1 && (
                <div className="hidden md:block flex-1 h-px bg-[#D8D3C8] relative">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                    className="absolute inset-0 bg-[#171717] origin-left"
                  />
                </div>
              )}
              {idx < stages.length - 1 && (
                <div className="md:hidden">
                  <ArrowDown className="w-6 h-6 text-[#D8D3C8]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {connections.map((conn, idx) => (
            <motion.div
              key={conn.name}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-[#FAF8F4] border border-[#D8D3C8] space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: conn.accent }} />
                <span className="font-display text-lg font-bold">{conn.name} Pipeline</span>
              </div>
              <p className="font-mono text-[11px] text-[#77736B] leading-relaxed uppercase tracking-wider">
                {conn.path}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
