import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Github, Smartphone, Globe, CheckCircle2, ChevronRight } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { RadiusVisual } from './RadiusVisual';
import { HealthClubVisual } from './HealthClubVisual';

interface ProjectShowcaseProps {
  project: Project;
  index: number;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isRadius = project.id === 'proj-radius';

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="py-32 border-b border-[#D8D3C8] scroll-mt-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-24">
        {/* 1. Visual Hook (Large Composition) */}
        <div className="space-y-8">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <span className="meta-tag text-[#77736B]">0{index + 1} / FEATURED CASE STUDY</span>
                <h2 className="title-editorial text-[#171717] leading-none">{project.title}</h2>
              </div>
              <div className="flex items-center gap-4">
                 <span className="text-xs font-mono uppercase tracking-widest text-[#77736B]">{project.year}</span>
                 <div className={`px-3 py-1 border ${project.accent === 'terracotta' ? 'border-[#C65A3A]/30 text-[#C65A3A]' : 'border-[#7C8B78]/30 text-[#7C8B78]'} text-[10px] font-bold uppercase tracking-wider`}>
                    {project.category}
                 </div>
              </div>
           </div>

           <div className="relative group overflow-hidden">
              {isRadius ? (
                <RadiusVisual isHovered={isHovered} />
              ) : (
                <div className="relative w-full h-[500px] sm:h-[650px] bg-[#EBE6DC] overflow-hidden border border-[#D8D3C8]">
                   <HealthClubVisual isHovered={isHovered} />
                   <div className="absolute top-8 left-8 space-y-1">
                      <span className="block font-mono text-[10px] text-[#7C8B78] font-bold uppercase tracking-[0.3em]">Client Production Website</span>
                      <span className="block font-display text-4xl font-bold text-[#171717]">Health Club Barshi</span>
                   </div>
                </div>
              )}
           </div>
        </div>

        {/* 2. Short Statement */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
           <div className="md:col-span-8 space-y-6">
              <h3 className="font-display text-4xl sm:text-6xl font-bold text-[#171717] leading-[1.1]">
                {isRadius ? "What's happening around me?" : "A real client. A real community. A real website."}
              </h3>
              <p className="text-lg sm:text-xl text-[#77736B] leading-relaxed font-light">
                {project.description}
              </p>
           </div>
           <div className="md:col-span-4 pt-4">
              <div className="border-t-2 border-[#171717] pt-6 space-y-4">
                 <span className="meta-tag text-[10px] text-[#9E998E] block">Identity Markers</span>
                 <div className="flex flex-wrap gap-2">
                    {isRadius ? (
                      ['Android', 'Firebase', 'Google Maps', 'Real-time', 'Privacy'].map(label => (
                        <span key={label} className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 bg-[#171717] text-[#F4F1EA]">
                          {label}
                        </span>
                      ))
                    ) : (
                      ['Client Project', 'Deployed', 'Netlify', 'Cloudinary'].map(label => (
                        <span key={label} className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 bg-[#7C8B78] text-[#F4F1EA]">
                          {label}
                        </span>
                      ))
                    )}
                 </div>
              </div>
           </div>
        </div>

        {/* 3. Real Project & Proof (Stats/Infrastructure) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           <div className="lg:col-span-5 space-y-8">
              <div className="space-y-6 bg-[#FAF8F4] p-8 border border-[#D8D3C8]">
                 <div className="space-y-4">
                    <span className="meta-tag text-[10px] text-[#9E998E]">Technical Infrastructure</span>
                    <div className="space-y-3">
                       {[
                         { icon: Globe, label: 'DEPLOYMENT', value: project.deployment },
                         { icon: Smartphone, label: 'ASSET MGMT', value: project.storage },
                         { icon: CheckCircle2, label: 'BACKEND', value: project.backend },
                       ].map(item => (
                         <div key={item.label} className="flex items-center justify-between border-b border-[#D8D3C8] pb-2">
                            <div className="flex items-center gap-2">
                               <item.icon className="w-3 h-3 text-[#77736B]" />
                               <span className="text-[10px] font-mono text-[#77736B] uppercase tracking-wider">{item.label}</span>
                            </div>
                            <span className="text-[11px] font-bold text-[#171717] uppercase">{item.value}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="flex items-center gap-4 pt-4">
                    {project.demoUrl && (
                       <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn-editorial-primary px-6 py-3 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"
                       >
                         <span>{isRadius ? 'Download App' : 'Launch Preview'}</span>
                         <ArrowUpRight className="w-3 h-3" />
                       </a>
                    )}
                    {project.githubUrl && (
                       <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-[#77736B] hover:text-[#171717] transition-colors"
                       >
                         <Github className="w-4 h-4" />
                         <span>Source Code</span>
                       </a>
                    )}
                 </div>
              </div>

              <div className="space-y-4">
                 <span className="meta-tag text-[10px] text-[#9E998E]">What I Built</span>
                 <div className="grid grid-cols-1 gap-4">
                    {project.whatIBuilt?.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 border border-[#D8D3C8] bg-[#FAF8F4] group hover:border-[#171717] transition-all duration-300">
                         <span className="text-[10px] font-mono text-[#C65A3A] font-bold">0{i+1}</span>
                         <span className="text-xs font-medium text-[#171717] leading-tight">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* 4. Technical Detail (Build Notes & Highlights) */}
           <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                 <span className="meta-tag text-[10px] text-[#9E998E]">Engineering Narrative</span>
                 <div className="grid grid-cols-1 gap-8">
                    {[
                      { label: 'The Problem', value: project.buildNotes?.problem },
                      { label: 'The Build', value: project.buildNotes?.build },
                      { label: 'The Ship', value: project.buildNotes?.ship },
                    ].map(note => (
                      <div key={note.label} className="space-y-2">
                         <h4 className="font-display text-xl font-bold text-[#171717] flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-[#C65A3A]" />
                            {note.label}
                         </h4>
                         <p className="text-sm text-[#77736B] leading-relaxed font-light pl-6">
                            {note.value}
                         </p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="space-y-4 pt-12 border-t border-[#D8D3C8]">
                 <span className="meta-tag text-[10px] text-[#9E998E]">Architectural Highlights</span>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.architectureNotes.map((note, i) => (
                      <div key={i} className="p-4 bg-[#F4F1EA] border-l-2 border-[#171717] text-[11px] text-[#77736B] leading-relaxed">
                         {note}
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </motion.section>
  );
};
