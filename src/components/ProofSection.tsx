import React from 'react';
import { motion } from 'motion/react';

const proofStats = [
  { label: 'REAL PROJECTS', value: '02' },
  { label: 'ANDROID APPLICATION', value: '01' },
  { label: 'REAL CLIENT WEBSITE', value: '01' },
  { label: 'DEPLOYED PROJECTS', value: '02' },
  { label: 'DOWNLOADABLE APK', value: '01' },
];

export const ProofSection: React.FC = () => {
  return (
    <section className="py-24 border-b border-[#D8D3C8]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {proofStats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 group"
          >
            <span className="block font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-[#171717] leading-none tracking-tighter group-hover:text-[#C65A3A] transition-colors duration-500">
              {stat.value}
            </span>
            <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#77736B] leading-tight">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
