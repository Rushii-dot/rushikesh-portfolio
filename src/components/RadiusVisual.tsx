import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Smartphone } from 'lucide-react';

interface RadiusVisualProps {
  isHovered: boolean;
}

export const RadiusVisual: React.FC<RadiusVisualProps> = ({ isHovered }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(1); // Start with center image
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Using 3 primary real screenshots for the showcase composition
  const mainScreenshots = [
    '/Screenshot_20260829_124115.jpg', // Left
    '/Screenshot_20260829_123948.jpg', // Center (Main)
    '/Screenshot_20260829_124201.jpg', // Right
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % mainScreenshots.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + mainScreenshots.length) % mainScreenshots.length);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] sm:h-[650px] bg-[#EBE6DC] overflow-hidden border border-[#D8D3C8] transition-all duration-700 ease-out flex items-center justify-center group touch-none"
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

      {/* Composition Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {!isMobile ? (
          /* Desktop View - LOCKED */
          <>
            {/* Left Phone */}
            <motion.div
              initial={{ x: -100, opacity: 0, rotate: -15, scale: 0.8 }}
              animate={isInView ? { x: -80, opacity: 0.6, rotate: -12, scale: 0.85 } : {}}
              whileHover={{ x: -100, opacity: 1, rotate: -5, scale: 0.9, zIndex: 30 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-[20%] w-[280px] aspect-[9/19.5] bg-[#121212] rounded-[48px] border-[10px] border-[#171717] shadow-2xl overflow-hidden cursor-pointer"
              style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
            >
              <img src={mainScreenshots[0]} alt="Radius Left" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>

            {/* Right Phone */}
            <motion.div
              initial={{ x: 100, opacity: 0, rotate: 15, scale: 0.8 }}
              animate={isInView ? { x: 80, opacity: 0.6, rotate: 12, scale: 0.85 } : {}}
              whileHover={{ x: 100, opacity: 1, rotate: 5, scale: 0.9, zIndex: 30 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-[20%] w-[280px] aspect-[9/19.5] bg-[#121212] rounded-[48px] border-[10px] border-[#171717] shadow-2xl overflow-hidden cursor-pointer"
              style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
            >
              <img src={mainScreenshots[2]} alt="Radius Right" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>

            {/* Center Phone (Main) */}
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 2 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 w-[320px] aspect-[9/19.5] bg-[#121212] rounded-[56px] border-[12px] border-[#171717] shadow-[0_40px_80px_rgba(0,0,0,0.4)] overflow-hidden cursor-pointer"
              style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
            >
              <img src={mainScreenshots[1]} alt="Radius Center" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </>
        ) : (
          /* Mobile View - CORRECTED SWIPE CAROUSEL */
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false}>
              {mainScreenshots.map((src, idx) => {
                const position = (idx - activeIndex + mainScreenshots.length) % mainScreenshots.length;
                let x = 0;
                let zIndex = 10;
                let scale = 0.8;
                let opacity = 0.4;
                let filter = 'blur(2px)';
                let rotate = 0;

                if (position === 0) {
                  // Active
                  x = 0;
                  zIndex = 30;
                  scale = 1;
                  opacity = 1;
                  filter = 'blur(0px)';
                  rotate = 0;
                } else if (position === 1 || position === -2) {
                  // Next
                  x = 60;
                  zIndex = 20;
                  scale = 0.85;
                  opacity = 0.5;
                  rotate = 5;
                } else if (position === 2 || position === -1) {
                  // Previous
                  x = -60;
                  zIndex = 20;
                  scale = 0.85;
                  opacity = 0.5;
                  rotate = -5;
                }

                return (
                  <motion.div
                    key={idx}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
                      if (swipe < -swipeConfidenceThreshold) {
                        handleNext();
                      } else if (swipe > swipeConfidenceThreshold) {
                        handlePrev();
                      }
                    }}
                    initial={false}
                    animate={{
                      x,
                      zIndex,
                      scale,
                      opacity,
                      filter,
                      rotate,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="absolute w-[220px] aspect-[9/19.5] bg-[#121212] rounded-[40px] border-[8px] border-[#171717] shadow-xl overflow-hidden cursor-grab active:cursor-grabbing"
                  >
                    <img src={src} alt={`Screenshot ${idx}`} className="w-full h-full object-cover pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
            
            {/* Subtle Swipe Indicator */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 z-40">
              {mainScreenshots.map((_, i) => (
                <div 
                  key={i}
                  className={`h-1 transition-all duration-300 rounded-full ${i === activeIndex ? 'w-4 bg-[#C65A3A]' : 'w-1.5 bg-[#D8D3C8]'}`}
                />
              ))}
            </div>
          </div>
        )}
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

      <div className="absolute bottom-8 right-8 text-right space-y-1 z-20 hidden sm:block">
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

      {/* Mobile Hint */}
      {isMobile && (
        <motion.div 
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[#C65A3A] z-40"
        >
          <span className="text-[9px] font-mono uppercase tracking-widest font-bold">Swipe to Interact</span>
        </motion.div>
      )}

      {/* Hover Decoration */}
      <motion.div
        animate={isHovered ? { opacity: 0.05, scale: 1.1 } : { opacity: 0, scale: 1 }}
        className="absolute inset-0 bg-[#C65A3A] pointer-events-none transition-all duration-700"
      />
    </div>
  );
};


