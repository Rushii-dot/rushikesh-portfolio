import React, { useEffect, useState } from 'react';

export const CustomPointer: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [hoverLabel, setHoverLabel] = useState<string | null>(null);

  useEffect(() => {
    // Only enable on devices that support hover with fine pointer (desktop mice)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsPointerFine(mediaQuery.matches);

    const handlePointerChange = (e: MediaQueryListEvent) => {
      setIsPointerFine(e.matches);
    };

    mediaQuery.addEventListener('change', handlePointerChange);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering an interactive element with data-cursor attribute
      const target = (e.target as HTMLElement)?.closest('[data-cursor]');
      if (target) {
        setHoverLabel(target.getAttribute('data-cursor'));
      } else {
        setHoverLabel(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      mediaQuery.removeEventListener('change', handlePointerChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isPointerFine || pos.x < 0) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-50 transition-opacity duration-200"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: 'translate(14px, 14px)',
      }}
    >
      {hoverLabel && (
        <div className="px-2.5 py-1 bg-[#171717] text-[#F4F1EA] font-mono text-[10px] uppercase tracking-widest border border-[#D8D3C8] shadow-sm flex items-center gap-1.5 animate-fadeIn">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C65A3A]" />
          <span>{hoverLabel}</span>
        </div>
      )}
    </div>
  );
};
