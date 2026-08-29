import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Heart, Activity, MapPin, Layers, Globe } from 'lucide-react';

interface HealthClubVisualProps {
  isHovered: boolean;
}

export const HealthClubVisual: React.FC<HealthClubVisualProps> = ({ isHovered }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-[#FAF8F4] overflow-hidden transition-all duration-700 ease-out flex items-center justify-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#7C8B78 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-4xl px-6 sm:px-12 flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-16"
      >
        {/* The "Actual Preview" - Mobile focused presentation */}
        <div className="relative group">
          {/* Browser-like frame for the logo/preview */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative w-[280px] sm:w-[400px] aspect-video bg-white border border-[#D8D3C8] shadow-2xl rounded-lg overflow-hidden flex flex-col"
          >
            {/* Browser Top Bar */}
            <div className="h-6 sm:h-8 bg-[#F4F1EA] border-b border-[#D8D3C8] px-3 flex items-center gap-1.5">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D8D3C8]" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D8D3C8]" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D8D3C8]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-1/2 h-2 sm:h-3 bg-white rounded-full border border-[#D8D3C8] flex items-center px-2">
                   <Globe className="w-1.5 sm:w-2 h-1.5 sm:h-2 text-[#9E998E]" />
                </div>
              </div>
            </div>
            
            {/* Actual Logo/Image Content */}
            <div className="flex-1 relative overflow-hidden bg-[#FAF8F4] flex items-center justify-center p-4 sm:p-8">
               <img 
                src="/Health club logo.jpg" 
                alt="Health Club Logo" 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/5 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Floating Accents */}
          <div className="absolute -top-4 -right-4 bg-[#7C8B78] text-white p-2 rounded-sm shadow-xl z-20 hidden sm:block">
            <Activity className="w-4 h-4" />
          </div>
        </div>

        {/* Info Panel (Mobile optimized spacing) */}
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2 py-1 bg-[#7C8B78]/10 text-[#7C8B78] rounded-sm">
               <Heart className="w-3 h-3 fill-current" />
               <span className="text-[10px] font-bold uppercase tracking-widest">Active Production</span>
            </div>
            <h4 className="font-display text-2xl sm:text-3xl text-[#171717] font-bold leading-tight">
              A community health <br className="hidden sm:block" /> initiative in Barshi.
            </h4>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 pt-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#77736B]" />
              <div className="text-left">
                 <p className="text-[9px] font-mono text-[#9E998E] uppercase leading-none">Location</p>
                 <p className="text-[11px] font-bold text-[#171717]">BARSHI, INDIA</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#77736B]" />
              <div className="text-left">
                 <p className="text-[9px] font-mono text-[#9E998E] uppercase leading-none">Stack</p>
                 <p className="text-[11px] font-bold text-[#171717]">MODERN WEB</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Circles */}
      <motion.div
        animate={isHovered ? { rotate: 90, opacity: 0.1 } : { rotate: 0, opacity: 0.05 }}
        className="absolute -bottom-32 -left-32 w-80 h-80 border-2 border-[#7C8B78] rounded-full pointer-events-none"
      />
    </div>
  );
};

