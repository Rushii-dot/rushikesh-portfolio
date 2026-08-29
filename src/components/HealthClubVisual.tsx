import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Heart, Activity, MapPin, Layers } from 'lucide-react';

interface HealthClubVisualProps {
  isHovered: boolean;
}

export const HealthClubVisual: React.FC<HealthClubVisualProps> = ({ isHovered }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] sm:h-[400px] bg-[#FDFCFA] border border-[#D8D3C8] overflow-hidden transition-all duration-700 ease-out flex items-center justify-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#7C8B78 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md px-12 text-center space-y-8"
      >
        {/* Abstract Community Pulse Visual */}
        <div className="flex justify-center items-center gap-4 h-32">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={isHovered ? {
                height: [60, 100, 60],
                opacity: [0.3, 0.6, 0.3]
              } : {
                height: 60,
                opacity: 0.3
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
              className="w-1 bg-[#7C8B78] rounded-full"
            />
          ))}
          <div className="relative">
            <motion.div
              animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 rounded-full border border-[#7C8B78]/30 flex items-center justify-center bg-white shadow-sm"
            >
              <Heart className="w-8 h-8 text-[#7C8B78] fill-[#7C8B78]/5" />
            </motion.div>
            <div className="absolute -top-2 -right-2 bg-[#7C8B78] text-white p-1.5 rounded-full shadow-lg flex items-center gap-1 px-2">
              <Activity className="w-3 h-3" />
              <span className="text-[7px] font-mono font-bold uppercase tracking-widest leading-none">Live</span>
            </div>
          </div>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i + 3}
              animate={isHovered ? {
                height: [60, 100, 60],
                opacity: [0.3, 0.6, 0.3]
              } : {
                height: 60,
                opacity: 0.3
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
              className="w-1 bg-[#7C8B78] rounded-full"
            />
          ))}
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#7C8B78] font-bold">
              Community Health Platform
            </span>
            <h4 className="font-display text-xl text-[#171717] tracking-tight">
              Health Club Barshi
            </h4>
          </div>
          
          <div className="flex items-center justify-center gap-6 pt-2">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#77736B]" />
              <span className="font-mono text-[9px] text-[#77736B] uppercase tracking-wider">Barshi, MH</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-[#77736B]" />
              <span className="font-mono text-[9px] text-[#77736B] uppercase tracking-wider">Static Editorial</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Background Decorative Element */}
      <motion.div
        animate={isHovered ? { rotate: 90, opacity: 0.1 } : { rotate: 0, opacity: 0.05 }}
        className="absolute -bottom-24 -right-24 w-64 h-64 border border-[#7C8B78] rounded-full pointer-events-none"
      />
    </div>
  );
};
