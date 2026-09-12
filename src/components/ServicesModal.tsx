import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Layers, Compass, Palette, Key, ArrowRight, Check } from 'lucide-react';

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: () => void;
}

const SERVICES_DATA = [
  {
    icon: Compass,
    title: 'Space Planning & Layout Optimization',
    description: 'Data-informed spatial zoning that eliminates wasted circulation, enhances natural daylight penetration, and optimizes human flow for serene residential living and high-performance commercial environments.',
    deliverables: [
      'Comprehensive measured survey & 2D spatial layouts',
      'Sightline analysis & acoustic zoning strategy',
      'Circulation flow & accessibility planning',
      'Custom joinery & storage spatial integration'
    ]
  },
  {
    icon: Layers,
    title: 'Bespoke Interior Architecture',
    description: 'Transformative structural alterations, wall realignment, dropped ceiling details, and architectural lighting layouts tailored to the building’s heritage and modern spatial comfort.',
    deliverables: [
      'Architectural technical drawings & elevation packages',
      'Circadian-aligned lighting & electrical schemes',
      'Custom ceiling troughs, pockets & acoustic details',
      'Bespoke architectural millwork & doors'
    ]
  },
  {
    icon: Palette,
    title: 'FF&E & Noble Material Curation',
    description: 'Curating enduring tactile palettes of natural stone, smoked timber, patinated bronze, Belgian linen, and bespoke furniture pieces crafted by master artisans across Europe.',
    deliverables: [
      'Tactile material moodboards & finish samples',
      'Custom furniture commissions & artisan upholstery',
      'Sanitaryware, ironmongery & luminaire specification',
      'Procurement scheduling & trade discount management'
    ]
  },
  {
    icon: Key,
    title: 'Turnkey Construction & Project Delivery',
    description: 'Rigorous end-to-end management ensuring your design vision is translated with precision from initial tender through site administration and turnkey handover.',
    deliverables: [
      'Contractor tender documentation & bid appraisal',
      'Periodic site inspections & technical quality control',
      'Programme tracking & budget contingency management',
      'Snagging audit, defect clearance & final handover'
    ]
  }
];

export const ServicesModal: React.FC<ServicesModalProps> = ({
  isOpen,
  onClose,
  onOpenInquiry,
}) => {
  if (!isOpen) return null;

  const handleInquire = () => {
    onClose();
    onOpenInquiry();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="services-modal-title"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl bg-[#FAF9F5] border border-[#E7E5E4] rounded-xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E7E5E4] bg-[#F5F3EF]">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold tracking-[0.18em] text-[#1F1C18]">SPAZIO</span>
              <span className="text-xl font-black text-[#E5A823] transform -rotate-12 select-none">/</span>
              <span className="bg-[#1F1C18] text-white font-bold tracking-[0.18em] text-xs px-1.5 py-0.5 select-none">IDEALE</span>
              <span className="text-xs text-[#78716C] ml-2 font-medium tracking-wide uppercase hidden sm:inline">
                | Our Services
              </span>
            </div>
            <button
              type="button"
              id="close-services-modal-btn"
              onClick={onClose}
              aria-label="Close Services modal"
              className="p-2 rounded-full text-[#57534E] hover:bg-[#E7E5E4] hover:text-[#1F1C18] transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9B815B]">
                Studio Practice
              </span>
              <h3 id="services-modal-title" className="text-2xl sm:text-3xl font-semibold text-[#1F1C18] tracking-tight">
                Architectural & Interior Design Services
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed max-w-2xl">
                From initial space planning and schematic development to bespoke joinery detailing and turnkey project delivery, we deliver spaces of enduring quality.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              {SERVICES_DATA.map((svc, idx) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-white border border-[#E7E5E4] rounded-lg space-y-3 hover:border-[#9B815B] transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-md bg-[#F5F3EF] border border-[#E7E5E4] flex items-center justify-center text-[#9B815B]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-semibold text-[#1F1C18]">
                        {svc.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      {svc.description}
                    </p>
                    <div className="pt-2 border-t border-[#F5F3EF] space-y-1.5">
                      {svc.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start space-x-2 text-[11px] text-[#78716C]">
                          <Check className="w-3.5 h-3.5 text-[#9B815B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Inquire CTA */}
            <div className="p-5 bg-[#F5F3EF] border border-[#E7E5E4] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h5 className="text-sm font-semibold text-[#1F1C18]">
                  Ready to discuss your project requirements?
                </h5>
                <p className="text-xs text-[#78716C] mt-0.5">
                  Book an initial studio consultation with our principal architects and space planners.
                </p>
              </div>
              <button
                type="button"
                onClick={handleInquire}
                className="inline-flex items-center justify-center space-x-2 px-6 py-2.5 bg-[#1F1C18] text-white text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#332E2A] transition-colors shrink-0"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
