import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  ArrowRight,
  Send,
  Github,
  Linkedin,
  Mail,
  MapPin,
  CheckCircle2,
  Menu,
  X,
  Layers,
  Terminal,
  Compass,
  FileCode,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Server,
  Database,
  Cloud,
} from 'lucide-react';
import {
  portfolioProfile,
  realProjects,
  skillGroups,
  journeyMilestones,
  Project,
} from './data/portfolioData';
import { RadiusVisual } from './components/RadiusVisual';
import { HealthClubVisual } from './components/HealthClubVisual';
import { EditorialProgress } from './components/EditorialProgress';
import { ContactForm } from './components/ContactForm';
import { CustomPointer } from './components/CustomPointer';

const editorialEase = [0.22, 1, 0.36, 1];
const cinematicEase = [0.16, 1, 0.3, 1];

export default function App() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#171717] font-sans antialiased selection:bg-[#C65A3A] selection:text-[#F4F1EA] relative">
      {/* Desktop Context Cursor */}
      <CustomPointer />

      {/* Editorial Vertical Scroll Index */}
      <EditorialProgress />

      {/* Top Editorial Header */}
      <header
        id="main-navigation"
        className="sticky top-0 z-50 bg-[#F4F1EA]/95 backdrop-blur-md border-b border-[#D8D3C8] transition-colors"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          <button
            id="brand-logo-btn"
            onClick={() => scrollToSection('hero')}
            data-cursor="TOP"
            className="group text-left flex flex-col justify-center cursor-pointer"
          >
            <span className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#171717] group-hover:text-[#C65A3A] transition-colors duration-300">
              {portfolioProfile.name}
            </span>
            <span className="meta-tag text-[#77736B] text-[10px] tracking-wider">
              {portfolioProfile.academicStatus}
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-menu"
            className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-[#77736B]"
          >
            <button
              id="nav-projects"
              onClick={() => scrollToSection('projects')}
              data-cursor="WORK"
              className="editorial-link text-[#77736B] hover:text-[#171717] transition-colors cursor-pointer"
            >
              01 / Projects
            </button>
            <button
              id="nav-capabilities"
              onClick={() => scrollToSection('capabilities')}
              data-cursor="SKILLS"
              className="editorial-link text-[#77736B] hover:text-[#171717] transition-colors cursor-pointer"
            >
              02 / Capabilities
            </button>
            <button
              id="nav-journey"
              onClick={() => scrollToSection('journey')}
              data-cursor="JOURNEY"
              className="editorial-link text-[#77736B] hover:text-[#171717] transition-colors cursor-pointer"
            >
              03 / Journey
            </button>
            <button
              id="nav-contact"
              onClick={() => scrollToSection('contact')}
              data-cursor="DISPATCH"
              className="editorial-link text-[#77736B] hover:text-[#171717] transition-colors cursor-pointer"
            >
              04 / Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {portfolioProfile.resumeUrl && (
              <a
                id="cta-resume-nav"
                href={portfolioProfile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="RESUME"
                className="editorial-link px-4 py-2 text-xs font-medium tracking-wider uppercase flex items-center gap-2 cursor-pointer border border-transparent hover:border-[#D8D3C8] transition-all"
              >
                <FileCode className="w-3.5 h-3.5 text-[#C65A3A]" />
                <span>View Resume</span>
              </a>
            )}
            <button
              id="cta-contact-nav"
              onClick={() => scrollToSection('contact')}
              data-cursor="TALK"
              className="btn-editorial-primary px-4 py-2 text-xs font-medium tracking-wider uppercase flex items-center gap-2 cursor-pointer"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#171717] hover:text-[#C65A3A] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu with Clip-path Transition */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu-panel"
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{ clipPath: 'inset(0 0 0% 0)' }}
              exit={{ clipPath: 'inset(0 0 100% 0)' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden bg-[#FAF8F4] border-b border-[#D8D3C8] px-8 py-10 space-y-6 overflow-hidden flex flex-col"
            >
              {[
                { id: 'projects', label: 'Selected Projects', num: '01' },
                { id: 'capabilities', label: 'Capabilities', num: '02' },
                { id: 'journey', label: 'Builder Journey', num: '03' },
                { id: 'contact', label: 'Contact', num: '04' },
              ].map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left font-display text-2xl text-[#171717] hover:text-[#C65A3A]"
                >
                  <span className="text-[10px] font-mono mr-4 opacity-40">{item.num}</span>
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 space-y-28 pb-24">
        {/* ==================================================
            01 / HERO SECTION — Editorial Cover Page Layout
            ================================================== */}
        <section id="hero" className="pt-14 sm:pt-28 border-b border-[#D8D3C8] pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-8">
              {/* Availability Indicator */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: editorialEase, delay: 0.5 }}
                className="inline-flex items-center gap-2.5 px-3 py-1 border border-[#D8D3C8] bg-[#FAF8F4] text-[#77736B] meta-tag"
              >
                <span className="w-2 h-2 rounded-full bg-[#7C8B78] inline-block" />
                <span>{portfolioProfile.status}</span>
              </motion.div>

              <div className="space-y-4">
                <motion.div
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ clipPath: 'inset(0 0% 0 0)' }}
                  transition={{ duration: 1, ease: cinematicEase, delay: 0.2 }}
                >
                  <span className="font-mono text-[10px] tracking-[0.4em] text-[#77736B] uppercase mb-2 block">
                    Portfolio / {new Date().getFullYear()}
                  </span>
                </motion.div>

                {/* Large Editorial Headline with Masked Reveal */}
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: cinematicEase, delay: 0.4 }}
                    className="headline-editorial-lg text-[#171717] leading-[0.95]"
                  >
                    Rushikesh <span className="italic font-normal text-[#C65A3A]">Shinde</span>
                  </motion.h1>
                </div>

                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: cinematicEase, delay: 0.6 }}
                    className="text-xl sm:text-2xl font-display text-[#171717]"
                  >
                    Engineering software with an editorial sense of craft.
                  </motion.div>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: editorialEase, delay: 1 }}
                className="text-base sm:text-lg text-[#77736B] max-w-xl leading-relaxed font-sans font-light"
              >
                {portfolioProfile.shortBio}
              </motion.p>

              {/* Subtle CTA Actions */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: editorialEase }}
                className="pt-4 flex flex-wrap items-center gap-4"
              >
                <button
                  id="hero-cta-projects"
                  onClick={() => scrollToSection('projects')}
                  data-cursor="VIEW PROJECTS"
                  className="btn-editorial-primary px-6 py-3 text-xs font-medium uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Real Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  id="hero-cta-contact"
                  onClick={() => scrollToSection('contact')}
                  data-cursor="INQUIRE"
                  className="btn-editorial-outline px-6 py-3 text-xs font-medium uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <span>Get in Touch</span>
                </button>
                {portfolioProfile.resumeUrl && (
                  <a
                    id="hero-cta-resume"
                    href={portfolioProfile.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="CURRICULUM"
                    className="editorial-link text-xs font-medium uppercase tracking-wider text-[#77736B] hover:text-[#171717] transition-colors flex items-center gap-1.5 ml-2"
                  >
                    <FileCode className="w-3.5 h-3.5 text-[#C65A3A]" />
                    <span>View Resume</span>
                  </a>
                )}
              </motion.div>
            </div>

            {/* Asymmetric Editorial Metadata Column */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#D8D3C8] pt-6 lg:pt-0 lg:pl-8 space-y-6 text-sm text-[#77736B]">
              <div className="space-y-1">
                <span className="meta-tag text-[10px] text-[#9E998E]">Profile</span>
                <p className="text-[#171717] font-medium">{portfolioProfile.name}</p>
                <p className="text-xs text-[#77736B]">{portfolioProfile.role}</p>
              </div>

              <div className="space-y-1">
                <span className="meta-tag text-[10px] text-[#9E998E]">Location</span>
                <p className="text-[#171717] font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C65A3A]" />
                  {portfolioProfile.location}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#D8D3C8]">
                <span className="meta-tag text-[10px] text-[#9E998E]">Verified Direct Links</span>
                <div className="flex items-center gap-4 text-xs font-medium text-[#171717]">
                  <a
                    id="hero-social-github"
                    href={portfolioProfile.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="GITHUB"
                    className="editorial-link flex items-center gap-1 hover:text-[#C65A3A]"
                  >
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                  <a
                    id="hero-social-linkedin"
                    href={portfolioProfile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="LINKEDIN"
                    className="editorial-link flex items-center gap-1 hover:text-[#C65A3A]"
                  >
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                  <a
                    id="hero-social-email"
                    href={`mailto:${portfolioProfile.email}`}
                    data-cursor="EMAIL"
                    className="editorial-link flex items-center gap-1 hover:text-[#C65A3A]"
                  >
                    <Mail className="w-3.5 h-3.5" /> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            02 / SELECTED REAL PROJECTS (RADIUS & HEALTH CLUB)
            ================================================== */}
        <section id="projects" className="scroll-mt-28 border-b border-[#D8D3C8] pb-20">
          <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: cinematicEase }}
                className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[#D8D3C8]"
              >
                <div className="space-y-2">
                  <span className="meta-tag text-[#C65A3A]">01 / INDEXED WORKS</span>
                  <h2 className="title-editorial text-[#171717]">Featured Production Projects</h2>
                  <p className="text-sm text-[#77736B] font-light max-w-xl">
                    Native mobile applications and community web platforms focused on localized connectivity and collective wellness.
                  </p>
                </div>
                <div className="meta-tag text-xs text-[#77736B]">
                  TOTAL: 02 REAL SHIPPED WORKS
                </div>
              </motion.div>

            {/* Project Cards with Interactive Distinctive Motion */}
            <div className="space-y-24">
              {realProjects.map((project, idx) => {
                const isHovered = hoveredProject === project.id;
                const isRadius = project.id === 'proj-radius';

                return (
                  <motion.article
                    key={project.id}
                    id={`project-card-${project.id}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, ease: cinematicEase, delay: idx * 0.2 }}
                    data-cursor={`EXPLORE ${project.title.toUpperCase()}`}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className={`group relative transition-all duration-700 bg-[#FAF8F4] border-b border-[#D8D3C8] pb-16 overflow-visible`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                      {/* Left: Metadata, Title & Narrative */}
                      <div className="lg:col-span-5 space-y-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-[#9E998E]">
                              0{idx + 1}
                            </span>
                            <span
                              className={`meta-tag text-[10px] px-2 py-0.5 border ${
                                project.accent === 'terracotta'
                                  ? 'text-[#C65A3A] border-[#C65A3A]/30 bg-[#C65A3A]/5'
                                  : 'text-[#7C8B78] border-[#7C8B78]/40 bg-[#7C8B78]/10'
                              }`}
                            >
                              {project.category}
                            </span>
                            {project.clientStatus && (
                              <span className="meta-tag text-[10px] px-2 py-0.5 border border-[#7C8B78] text-[#7C8B78] bg-[#7C8B78]/5 font-bold animate-pulse">
                                {project.clientStatus}
                              </span>
                            )}
                            <span className="meta-tag text-[10px] text-[#77736B]">
                              {project.year}
                            </span>
                          </div>

                          <div className="flex items-center gap-4">
                            <h3
                              className={`font-display text-3xl sm:text-4xl transition-all duration-300 ${
                                isHovered
                                  ? project.accent === 'terracotta'
                                    ? 'text-[#C65A3A] translate-x-1'
                                    : 'text-[#7C8B78] translate-x-1'
                                  : 'text-[#171717]'
                              }`}
                            >
                              {project.title}
                            </h3>
                            {project.logo && (
                              <img 
                                src={project.logo} 
                                alt={`${project.title} logo`}
                                className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-sm"
                              />
                            )}
                          </div>
                          <p className="text-xs font-mono text-[#77736B]">
                            {project.subtitle}
                          </p>
                        </div>

                        <p className="text-sm text-[#77736B] leading-relaxed font-light">
                          {project.description}
                        </p>

                        {/* What I Built */}
                        {project.whatIBuilt && (
                          <div className="space-y-2">
                            <span className="meta-tag text-[10px] text-[#9E998E] block">
                              What I Built
                            </span>
                            <div className="grid grid-cols-1 gap-2">
                              {project.whatIBuilt.map((feature, fIdx) => (
                                <div key={fIdx} className="flex items-center gap-2 text-[11px] text-[#171717] font-medium">
                                  <CheckCircle2 className={`w-3 h-3 ${project.accent === 'terracotta' ? 'text-[#C65A3A]' : 'text-[#7C8B78]'}`} />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Real Cloud Architecture Stack Details */}
                        <div className="border-t border-[#D8D3C8] pt-4 space-y-2">
                          <span className="meta-tag text-[10px] text-[#9E998E] block">
                            Production Infrastructure
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] font-mono text-[#171717]">
                            <div className="p-2 bg-[#EBE6DC] border border-[#D8D3C8]">
                              <span className="text-[#77736B] block text-[9px]">HOSTING</span>
                              {project.deployment}
                            </div>
                            <div className="p-2 bg-[#EBE6DC] border border-[#D8D3C8]">
                              <span className="text-[#77736B] block text-[9px]">STORAGE/MEDIA</span>
                              {project.storage}
                            </div>
                            <div className="p-2 bg-[#EBE6DC] border border-[#D8D3C8]">
                              <span className="text-[#77736B] block text-[9px]">DATABASE/AUTH</span>
                              {project.backend}
                            </div>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono px-2 py-0.5 bg-[#FAF8F4] text-[#171717] border border-[#D8D3C8]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Direct Links */}
                        <div className="flex items-center gap-4 pt-2">
                          {project.demoUrl && (
                            <a
                              id={`link-demo-${project.id}`}
                              href={project.demoUrl}
                              target="_blank"
                              rel="noreferrer"
                              data-cursor={project.category === 'Android Application' ? 'DOWNLOAD' : 'LIVE DEMO'}
                              className="btn-editorial-outline px-4 py-2 text-xs font-medium tracking-wider uppercase flex items-center gap-1.5 hover:border-[#171717]"
                            >
                              <span>{project.category === 'Android Application' ? 'Download App' : 'Live Preview'}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-[#C65A3A]" />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              id={`link-code-${project.id}`}
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              data-cursor="SOURCE"
                              className="editorial-link text-xs font-medium text-[#77736B] hover:text-[#171717] flex items-center gap-1"
                            >
                              <Github className="w-3.5 h-3.5" /> Source Code
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Right: Distinctive Interactive Visual Canvas */}
                      <div className="lg:col-span-7 space-y-4">
                        <div className="transition-transform duration-500 ease-out">
                          {isRadius ? (
                            <RadiusVisual isHovered={isHovered} />
                          ) : (
                            <HealthClubVisual isHovered={isHovered} />
                          )}
                        </div>

                        {/* Architecture Notes List */}
                        <div className="p-4 bg-[#F4F1EA] border border-[#D8D3C8] space-y-4">
                          <div className="space-y-2">
                            <span className="meta-tag text-[10px] text-[#77736B] block">
                              Key Architectural Highlights
                            </span>
                            <ul className="space-y-1.5 text-xs text-[#77736B] font-light">
                              {project.architectureNotes.map((note, noteIdx) => (
                                <li key={noteIdx} className="flex items-start gap-2">
                                  <span className="text-[#C65A3A] font-mono mt-0.5">—</span>
                                  <span>{note}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Build Notes: Problem -> Build -> Ship */}
                          {project.buildNotes && (
                            <div className="pt-4 border-t border-[#D8D3C8] space-y-3">
                              <span className="meta-tag text-[10px] text-[#77736B] block uppercase tracking-widest">
                                Developer Build Notes
                              </span>
                              <div className="grid grid-cols-1 gap-3">
                                <div className="space-y-1">
                                  <span className="text-[9px] font-mono text-[#9E998E] uppercase tracking-tighter block">Problem</span>
                                  <p className="text-[11px] text-[#171717] leading-relaxed">{project.buildNotes.problem}</p>
                                </div>
                                <div className="space-y-1">
                                  <span className="text-[9px] font-mono text-[#9E998E] uppercase tracking-tighter block">Build</span>
                                  <p className="text-[11px] text-[#171717] leading-relaxed">{project.buildNotes.build}</p>
                                </div>
                                <div className="space-y-1">
                                  <span className="text-[9px] font-mono text-[#9E998E] uppercase tracking-tighter block">Ship</span>
                                  <p className="text-[11px] text-[#171717] leading-relaxed">{project.buildNotes.ship}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================================================
            03 / CAPABILITIES & TECHNICAL TOOLING
            ================================================== */}
        <section id="capabilities" className="scroll-mt-28 border-b border-[#D8D3C8] pb-20">
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="meta-tag text-[#7C8B78]">02 / TOOLING & FRAMEWORKS</span>
              <h2 className="title-editorial text-[#171717]">Core Engineering Competencies</h2>
              <p className="text-sm text-[#77736B] font-light max-w-2xl">
                Practiced technologies and architectural patterns applied across frontend interfaces, server backends, and cloud deployment pipelines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skillGroups.map((group, idx) => (
                <motion.div
                  key={group.category}
                  id={`skill-group-${idx}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  data-cursor="CAPABILITY"
                  className="border border-[#D8D3C8] bg-[#FAF8F4] hover:bg-[#FDFCFA] transition-colors p-8 space-y-6"
                >
                  <div className="space-y-2 border-b border-[#D8D3C8] pb-4">
                    <span className="meta-tag text-[10px] text-[#9E998E]">Area 0{idx + 1}</span>
                    <h3 className="font-display text-xl font-medium text-[#171717]">
                      {group.category}
                    </h3>
                    <p className="text-xs text-[#77736B] leading-relaxed font-light">
                      {group.description}
                    </p>
                  </div>

                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center justify-between text-xs py-2 px-3 bg-[#F4F1EA] border border-[#D8D3C8] text-[#171717] font-mono"
                      >
                        <span>{item}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7C8B78]" />
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            04 / BUILDER JOURNEY & LEARNING MILESTONES
            ================================================== */}
        <section id="journey" className="scroll-mt-28 border-b border-[#D8D3C8] pb-20">
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="meta-tag text-[#C65A3A]">03 / TIMELINE</span>
              <h2 className="title-editorial text-[#171717]">Builder Journey & Education</h2>
              <p className="text-sm text-[#77736B] font-light max-w-2xl">
                An honest overview of academic progress, engineering self-study, and practical software shipping milestones.
              </p>
            </div>

            <div className="space-y-8">
              {journeyMilestones.map((milestone, idx) => (
                <motion.div
                  key={milestone.id}
                  id={`milestone-${milestone.id}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="border-l-2 border-[#171717] pl-6 sm:pl-8 py-2 space-y-3 bg-[#FAF8F4]/50 border-y border-r border-[#D8D3C8]/70 p-6 sm:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <span className="meta-tag text-[10px] text-[#C65A3A] block">
                        {milestone.phase}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl text-[#171717]">
                        {milestone.focus}
                      </h3>
                    </div>
                    <span className="meta-tag text-[#77736B]">{milestone.period}</span>
                  </div>

                  <p className="text-sm text-[#77736B] leading-relaxed max-w-3xl font-light">
                    {milestone.description}
                  </p>

                  <div className="pt-2 border-t border-[#D8D3C8]/60 space-y-1.5">
                    <span className="meta-tag text-[10px] text-[#9E998E]">Core Takeaways</span>
                    <ul className="space-y-1 text-xs text-[#77736B] font-mono">
                      {milestone.learnings.map((l, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#C65A3A]">—</span>
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            05 / CONTACT & DISPATCH
            ================================================== */}
        <section id="contact" className="scroll-mt-28 pb-12">
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="meta-tag text-[#C65A3A]">04 / INQUIRIES & DISPATCH</span>
              <h2 className="title-editorial text-[#171717]">Start a Conversation</h2>
              <p className="text-sm text-[#77736B] max-w-xl font-light">
                Open for internships, junior full-stack developer roles, open-source projects, and collaborative engineering discussions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Contact Dispatch Information */}
              <div className="lg:col-span-5 space-y-8 border border-[#D8D3C8] bg-[#FAF8F4] p-8 sm:p-10">
                <div className="space-y-4">
                  <span className="meta-tag text-[#9E998E]">Direct Communication</span>
                  <div className="space-y-2">
                    <p className="text-xs text-[#77736B] uppercase tracking-wider">Email Address</p>
                    <a
                      href={`mailto:${portfolioProfile.email}`}
                      data-cursor="EMAIL"
                      className="font-display text-xl text-[#171717] hover:text-[#C65A3A] transition-colors break-all"
                    >
                      {portfolioProfile.email}
                    </a>
                  </div>
                  <div className="space-y-1 pt-4 border-t border-[#D8D3C8]">
                    <p className="text-xs text-[#77736B] uppercase tracking-wider">Current Location</p>
                    <p className="text-sm text-[#171717] font-medium">{portfolioProfile.location}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-[#D8D3C8]">
                  <span className="meta-tag text-[#9E998E]">Developer Networks</span>
                  <div className="flex items-center gap-6 text-xs uppercase tracking-wider font-mono text-[#171717]">
                    <a
                      id="contact-social-github"
                      href={portfolioProfile.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="GITHUB"
                      className="editorial-link flex items-center gap-1.5 hover:text-[#C65A3A]"
                    >
                      <Github className="w-3.5 h-3.5" /> GitHub
                    </a>
                    <a
                      id="contact-social-linkedin"
                      href={portfolioProfile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="LINKEDIN"
                      className="editorial-link flex items-center gap-1.5 hover:text-[#C65A3A]"
                    >
                      <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Message Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Editorial Colophon / Footer */}
      <footer id="main-footer" className="border-t border-[#D8D3C8] bg-[#FAF8F4] py-12 text-xs text-[#77736B]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-[#171717] font-medium font-display text-base">
              {portfolioProfile.name} — Student Developer & Software Builder
            </p>
            <p className="meta-tag text-[10px] text-[#9E998E]">
              Handcrafted with precision • Set in Newsreader & Plus Jakarta Sans
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection('hero')}
              data-cursor="TOP"
              className="editorial-link uppercase font-mono text-[11px] text-[#171717] hover:text-[#C65A3A] transition-colors cursor-pointer"
            >
              Top of Page ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
