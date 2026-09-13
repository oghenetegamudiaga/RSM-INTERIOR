import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { FEATURED_PROJECTS, ALL_PROJECTS } from '../data';
import { ProjectItem } from '../types';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface ProjectsGridProps {
  onOpenInquiry: () => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ onOpenInquiry }) => {
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectDetail, setActiveProjectDetail] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === selectedCategory);

  const categories = ['All', 'Residential', 'Commercial', 'Space Planning', 'Exterior'];

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="py-16 sm:py-24 lg:py-28 bg-[#FAF9F5] border-t border-[#E7E5E4]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9B815B]">
            Selected Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1C18] tracking-tight">
            Our Projects
          </h2>
          <p className="text-base text-[#57534E]">
            A showcase of refined spaces where architectural balance meets personalized living.
          </p>
        </ScrollReveal>

        {/* Featured Project Cards with Overlay Titles (Matching Reference Image) */}
        <StaggerContainer
          id="featured-projects-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURED_PROJECTS.map((project) => (
            <StaggerItem key={project.id}>
              <div
                id={`project-card-${project.id}`}
                onClick={() => setActiveProjectDetail(project)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-[#E7E5E4] hover:border-[#9B815B] transition-all duration-300 shadow-xs"
              >
                {/* Project Highlight Image */}
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />

                {/* Dark Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                {/* Project Title Overlaid at Bottom Left */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#EFECE6] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA: [ See all Projects ] in solid fill #9B815B */}
        <ScrollReveal className="mt-12 sm:mt-16 text-center">
          <button
            type="button"
            id="see-all-projects-btn"
            onClick={() => setIsGalleryModalOpen(true)}
            className="inline-flex items-center justify-center px-10 py-4 bg-[#9B815B] text-white font-medium text-sm sm:text-base tracking-wide rounded-sm hover:bg-[#886F4A] active:bg-[#78613F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B815B] focus:ring-offset-2"
          >
            See All Projects
          </button>
        </ScrollReveal>
      </div>

      {/* Full Projects Portfolio Modal */}
      <AnimatePresence>
        {isGalleryModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsGalleryModalOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[#FAF9F5] border border-[#D6D3D1] rounded-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#E7E5E4] bg-[#F5F3EF]">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#1F1C18] tracking-tight">
                    Complete Project Portfolio
                  </h2>
                  <p className="text-xs sm:text-sm text-[#78716C] mt-0.5">
                    Curated residential, commercial, and spatial architecture projects
                  </p>
                </div>
                <button
                  type="button"
                  id="close-gallery-modal-btn"
                  onClick={() => setIsGalleryModalOpen(false)}
                  aria-label="Close portfolio gallery"
                  className="p-2 rounded-full text-[#57534E] hover:bg-[#E7E5E4] hover:text-[#1F1C18] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category Filter Pills */}
              <div className="px-6 py-4 border-b border-[#E7E5E4] bg-[#FAF9F5] overflow-x-auto flex items-center space-x-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs font-medium px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                      selectedCategory === cat
                        ? 'bg-[#1F1C18] text-white'
                        : 'bg-[#F5F3EF] text-[#57534E] hover:bg-[#E7E5E4] hover:text-[#1F1C18]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Gallery Grid */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => setActiveProjectDetail(p)}
                      className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-[#E7E5E4] hover:border-[#9B815B] transition-all duration-300 shadow-xs"
                    >
                      <img
                        src={p.image}
                        alt={p.alt}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                        <h4 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[#EFECE6] transition-colors">
                          {p.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-[#E7E5E4] bg-[#F5F3EF] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#78716C]">
                  Interested in discussing a custom brief for your property?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setIsGalleryModalOpen(false);
                    onOpenInquiry();
                  }}
                  className="px-6 py-2.5 bg-[#9B815B] text-white text-xs sm:text-sm font-medium rounded-sm hover:bg-[#886F4A] transition-colors"
                >
                  Inquire for Your Space
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Single Project Detail Lightbox */}
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
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center space-x-3 text-xs text-[#78716C]">
                  <span className="uppercase tracking-wider font-semibold text-[#9B815B]">
                    {activeProjectDetail.category}
                  </span>
                  <span>•</span>
                  <span>{activeProjectDetail.location}</span>
                  <span>•</span>
                  <span>Completed {activeProjectDetail.year}</span>
                </div>
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
                    className="text-xs font-semibold text-[#78716C] hover:text-[#1F1C18]"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveProjectDetail(null);
                      setIsGalleryModalOpen(false);
                      onOpenInquiry();
                    }}
                    className="px-5 py-2.5 bg-[#9B815B] text-white text-xs sm:text-sm font-medium rounded-sm hover:bg-[#886F4A] transition-colors"
                  >
                    Inquire About Similar Project
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
