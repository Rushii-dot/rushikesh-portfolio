import React, { useEffect, useState } from 'react';

interface SectionItem {
  id: string;
  number: string;
  label: string;
}

const sections: SectionItem[] = [
  { id: 'hero', number: '01', label: 'INTRO' },
  { id: 'projects', number: '02', label: 'PROJECTS' },
  { id: 'capabilities', number: '03', label: 'CAPABILITIES' },
  { id: 'journey', number: '04', label: 'JOURNEY' },
  { id: 'contact', number: '05', label: 'CONTACT' },
];

export const EditorialProgress: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall page scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check which section is in view
      const scrollPosition = window.scrollY + 250;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      id="editorial-scroll-navigator"
      aria-label="Editorial Section Navigation"
      className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3 select-none pointer-events-auto"
    >
      <div className="bg-[#FAF8F4]/90 backdrop-blur-md border border-[#D8D3C8] px-3.5 py-4 flex flex-col gap-3 shadow-xs">
        <div className="flex items-center justify-between gap-3 border-b border-[#D8D3C8] pb-2 text-[9px] font-mono text-[#9E998E]">
          <span>INDEX</span>
          <span className="text-[#171717] font-medium">{Math.round(scrollProgress)}%</span>
        </div>

        <nav className="flex flex-col gap-2">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`group flex items-center justify-between gap-3 text-left transition-all duration-300 py-1 px-1.5 ${
                  isActive
                    ? 'text-[#C65A3A] font-semibold'
                    : 'text-[#77736B] hover:text-[#171717]'
                }`}
              >
                <span className="font-mono text-[10px] tracking-wider">
                  {section.number} / {section.label}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#C65A3A] scale-125'
                      : 'bg-[#D8D3C8] group-hover:bg-[#77736B]'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Vertical subtle indicator line */}
        <div className="w-full h-1 bg-[#EBE6DC] overflow-hidden mt-1">
          <div
            className="h-full bg-[#C65A3A] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </aside>
  );
};
