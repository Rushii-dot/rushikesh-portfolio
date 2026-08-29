import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Smartphone } from 'lucide-react';

interface RadiusVisualProps {
  isHovered: boolean;
}

export const RadiusVisual: React.FC<RadiusVisualProps> = ({ isHovered }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Real screenshot paths from the project root
  const screenshots = [
    '/Screenshot_20260829_124115.jpg',
    '/Screenshot_20260829_124102.jpg',
    '/Screenshot_20260829_123948.jpg',
    '/Screenshot_20260829_124201.jpg',
    '/Screenshot_20260829_124221.jpg',
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[450px] sm:h-[580px] bg-[#EBE6DC] overflow-hidden border border-[#D8D3C8] transition-all duration-700 ease-out flex items-center group"
    >
      {/* Editorial Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #171717 1px, transparent 1px),
            linear-gradient(to bottom, #171717 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* 3D Gallery Track */}
      <div className="relative w-full overflow-x-auto no-scrollbar py-12 px-8 sm:px-16">
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-6 sm:gap-10 items-center min-w-max"
        >
          {screenshots.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                rotateY: 5,
                z: 50
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-[220px] sm:w-[260px] aspect-[9/19.5] bg-[#121212] rounded-[32px] sm:rounded-[40px] border-[6px] sm:border-[8px] border-[#171717] shadow-2xl overflow-hidden cursor-pointer group/card"
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              <img
                src={src}
                alt={`Radius Screenshot ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
              />
              
              {/* Glossy Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              
              {/* Shadow depth effect */}
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Meta Labels */}
      <div className="absolute top-8 left-8 flex flex-col gap-1 z-20">
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#C65A3A] font-bold">
          Native Android Interface
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#77736B]">
          Verified UI Captures
        </span>
      </div>

      <div className="absolute bottom-8 right-8 text-right space-y-1 z-20">
        <div className="flex items-center gap-2 justify-end">
          <Smartphone className="w-3 h-3 text-[#C65A3A]" />
          <span className="font-mono text-[9px] text-[#77736B] uppercase tracking-[0.2em]">
            Production APK v1.0
          </span>
        </div>
        <p className="text-[10px] text-[#171717] font-medium uppercase tracking-tight">
          Actual Application Screenshots
        </p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[#C65A3A]/40 sm:hidden"
      >
        <span className="text-[8px] font-mono uppercase tracking-widest">Swipe to Explore</span>
      </motion.div>

      {/* Hover Decoration */}
      <motion.div
        animate={isHovered ? { opacity: 0.05, scale: 1.1 } : { opacity: 0, scale: 1 }}
        className="absolute inset-0 bg-[#C65A3A] pointer-events-none transition-all duration-700"
      />
    </div>
  );
};

