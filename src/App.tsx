import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import {
  ArrowUpRight,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
  FileCode,
} from 'lucide-react';
import {
  portfolioProfile,
  realProjects,
} from './data/portfolioData';
import { EditorialProgress } from './components/EditorialProgress';
import { ContactForm } from './components/ContactForm';
import { CustomPointer } from './components/CustomPointer';
import { ProofSection } from './components/ProofSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ProcessFlow } from './components/ProcessFlow';
import { TechWall } from './components/TechWall';
import { Timeline } from './components/Timeline';

const cinematicEase = [0.16, 1, 0.3, 1];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#171717] font-sans antialiased selection:bg-[#C65A3A] selection:text-[#F4F1EA] relative">
      <CustomPointer />
      <EditorialProgress />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#C65A3A] origin-left z-[60]"
        style={{ scaleX }}
      />

      <header
        id="main-navigation"
        className="sticky top-0 z-50 bg-[#F4F1EA]/95 backdrop-blur-md border-b border-[#D8D3C8] transition-colors"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          <button
            id="brand-logo-btn"
            onClick={() => scrollToSection('hero')}
            className="group text-left flex flex-col justify-center cursor-pointer"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#171717] group-hover:text-[#C65A3A] transition-colors duration-300">
              {portfolioProfile.name}
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-[#77736B]">
            {['projects', 'capabilities', 'journey', 'contact'].map((id, i) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="hover:text-[#171717] transition-colors cursor-pointer relative group"
              >
                <span className="mr-2 text-[#C65A3A] opacity-40 group-hover:opacity-100">0{i+1}</span>
                {id}
                <motion.span className="absolute -bottom-1 left-0 w-0 h-px bg-[#171717] transition-all group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-editorial-primary px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 cursor-pointer"
            >
              <span>Dispatch</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#171717] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-[#FAF8F4] border-b border-[#D8D3C8] px-8 py-10 space-y-8 flex flex-col"
            >
              {['projects', 'capabilities', 'journey', 'contact'].map((id, i) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left font-display text-3xl font-bold text-[#171717] hover:text-[#C65A3A]"
                >
                  <span className="text-xs font-mono mr-4 opacity-40">0{i+1}</span>
                  {id.toUpperCase()}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* 1. HERO — STRONGER VISUAL OPENING */}
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center border-b border-[#D8D3C8] py-20">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: cinematicEase }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-[#C65A3A]" />
                <span className="meta-tag text-[#C65A3A] text-xs">{portfolioProfile.role}</span>
              </div>
              <h1 className="font-display text-[15vw] sm:text-[10vw] font-bold leading-[0.85] text-[#171717] tracking-tighter">
                I BUILD<br />
                <span className="italic font-normal text-[#C65A3A]">DIGITAL</span><br />
                THINGS<br />
                THAT WORK.
              </h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="md:col-span-7 space-y-6"
              >
                <p className="text-xl sm:text-2xl text-[#77736B] leading-relaxed font-light max-w-xl">
                  {portfolioProfile.shortBio}
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="btn-editorial-primary px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 cursor-pointer"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={portfolioProfile.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#77736B] hover:text-[#171717] transition-colors flex items-center gap-2"
                  >
                    <FileCode className="w-4 h-4 text-[#C65A3A]" />
                    <span>View Resume</span>
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="md:col-span-5 border-l border-[#D8D3C8] pl-8 space-y-6"
              >
                <div className="space-y-1">
                   <span className="meta-tag text-[10px] text-[#9E998E]">Verified Direct Links</span>
                   <div className="flex flex-col gap-3 pt-2">
                      <a href={portfolioProfile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs font-bold hover:text-[#C65A3A] transition-colors">
                        <Github className="w-4 h-4" /> GITHUB
                      </a>
                      <a href={portfolioProfile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs font-bold hover:text-[#C65A3A] transition-colors">
                        <Linkedin className="w-4 h-4" /> LINKEDIN
                      </a>
                      <a href={`mailto:${portfolioProfile.email}`} className="flex items-center gap-3 text-xs font-bold hover:text-[#C65A3A] transition-colors">
                        <Mail className="w-4 h-4" /> EMAIL
                      </a>
                   </div>
                </div>
                <div className="space-y-1 pt-4 border-t border-[#D8D3C8]">
                   <span className="meta-tag text-[10px] text-[#9E998E]">Location</span>
                   <p className="text-xs font-bold flex items-center gap-2 uppercase tracking-widest">
                     <MapPin className="w-4 h-4 text-[#C65A3A]" /> {portfolioProfile.location}
                   </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. PROOF MOMENT */}
        <ProofSection />

        {/* 3 & 4. PROJECTS AS CASE STUDIES */}
        <section id="projects">
          {realProjects.map((project, i) => (
            <ProjectShowcase key={project.id} project={project} index={i} />
          ))}
        </section>

        {/* 5. BUILD -> TEST -> SHIP */}
        <ProcessFlow />

        {/* 6. SKILLS GRID */}
        <div id="capabilities">
          <TechWall />
        </div>

        {/* 7. JOURNEY TIMELINE */}
        <div id="journey">
          <Timeline />
        </div>

        {/* 8. CONTACT */}
        <section id="contact" className="py-32 scroll-mt-24">
          <div className="space-y-16">
            <div className="space-y-4">
              <span className="meta-tag text-[#C65A3A]">04 / INQUIRIES & DISPATCH</span>
              <h2 className="title-editorial text-[#171717]">Start a Conversation.</h2>
              <p className="text-lg text-[#77736B] max-w-xl font-light">
                Open for internships, junior full-stack developer roles, and collaborative engineering discussions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-8 bg-[#FAF8F4] p-10 border border-[#D8D3C8]">
                  <div className="space-y-6">
                    <div className="space-y-1">
                       <p className="text-[10px] font-bold text-[#77736B] uppercase tracking-widest">Direct Dispatch</p>
                       <a href={`mailto:${portfolioProfile.email}`} className="font-display text-2xl font-bold text-[#171717] hover:text-[#C65A3A] transition-colors break-all">
                        {portfolioProfile.email}
                       </a>
                    </div>
                    <div className="space-y-1 pt-6 border-t border-[#D8D3C8]">
                       <p className="text-[10px] font-bold text-[#77736B] uppercase tracking-widest">Current Status</p>
                       <p className="text-lg font-medium text-[#171717]">{portfolioProfile.status}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#D8D3C8] bg-[#FAF8F4] py-20 text-xs text-[#77736B]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-12">
          <div className="space-y-2 text-center sm:text-left">
            <p className="text-[#171717] font-bold font-display text-2xl">
              {portfolioProfile.name}
            </p>
            <p className="meta-tag text-[10px] text-[#9E998E] uppercase tracking-widest">
              Set in Newsreader & Plus Jakarta Sans • Handcrafted in 2026
            </p>
          </div>

          <button
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-3 font-bold uppercase tracking-[0.3em] text-[#171717] hover:text-[#C65A3A] transition-colors cursor-pointer"
          >
            Top of Page 
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              ↑
            </motion.div>
          </button>
        </div>
      </footer>
    </div>
  );
}
