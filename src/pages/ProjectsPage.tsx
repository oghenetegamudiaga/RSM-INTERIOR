import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { ProjectItem } from '../types';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

interface ProjectsPageProps {
  onOpenInquiry: () => void;
  onNavigate?: (path: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenInquiry }) => {
  const [activeProjectDetail, setActiveProjectDetail] = useState<ProjectItem | null>(null);

  return (
    <>
      <main className="flex-grow pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Page Heading */}
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9B815B]">
              Full Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F1C18]">
              Our Projects
            </h1>
            <p className="text-base text-[#57534E]">
              A showcase of refined spaces where architectural balance meets personalized living.
            </p>
          </ScrollReveal>

          {/* Reference Grid Structure: 3 columns desktop & tablet, 1 column mobile */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {PROJECTS.map((project) => (
              <StaggerItem key={project.id}>
                <div
                  id={`projects-page-card-${project.id}`}
                  onClick={() => setActiveProjectDetail(project)}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-[#E7E5E4] hover:border-[#9B815B] transition-all duration-300 shadow-xs"
                >
                  {/* Full Bleed Image */}
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />

                  {/* Scoped Dark Gradient Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                  {/* Project Name Overlaid at Bottom Left */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                    <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#EFECE6] transition-colors">
                      {project.title}
                    </h2>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </main>

      {/* Project Detail Lightbox Modal */}
      <AnimatePresence>
        {activeProjectDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProjectDetail(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-[#FAF9F5] border border-[#D6D3D1] rounded-2xl overflow-hidden z-10"
            >
              <div className="aspect-[16/9] w-full bg-[#E7E5E4] relative">
                <img
                  src={activeProjectDetail.image}
                  alt={activeProjectDetail.alt}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setActiveProjectDetail(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1F1C18] tracking-tight">
                  {activeProjectDetail.title}
                </h3>
                <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                  {activeProjectDetail.description}
                </p>
                <div className="pt-4 flex items-center justify-between border-t border-[#E7E5E4]">
                  <button
                    type="button"
                    onClick={() => setActiveProjectDetail(null)}
                    className="text-xs font-semibold text-[#78716C] hover:text-[#1F1C18] cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveProjectDetail(null);
                      onOpenInquiry();
                    }}
                    className="px-5 py-2.5 bg-[#9B815B] text-white text-xs sm:text-sm font-medium rounded-sm hover:bg-[#886F4A] transition-colors cursor-pointer"
                  >
                    Inquire About Similar Project
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
