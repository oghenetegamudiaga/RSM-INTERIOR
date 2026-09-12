import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Download, Newspaper, Award, Mail, CheckCircle } from 'lucide-react';

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRESS_ITEMS = [
  {
    publication: 'Architectural Digest',
    title: 'The Art of Light and Spatial Balance in Contemporary Urban Homes',
    date: 'February 2025',
    category: 'Feature Story',
    snippet: 'Spazio Ideale redefines minimalist urban residences by stripping away excess ornamentation to honor tactile stone, bespoke millwork, and balanced natural illumination.',
    readTime: '4 min read'
  },
  {
    publication: 'Dezeen',
    title: 'How Spazio Ideale Transformed a Mayfair Heritage Property into a Fluid Workplace',
    date: 'November 2024',
    category: 'Commercial Architecture',
    snippet: 'Preserving historic cornicing while introducing acoustic linen partitions and monolithic oak tables for modern creative collaboration.',
    readTime: '6 min read'
  },
  {
    publication: 'Elle Decoration',
    title: 'Noble Materials and Quiet Luxury: Designing Spaces with Sensory Restraint',
    date: 'August 2024',
    category: 'Material Spotlight',
    snippet: 'An exploration into the studio’s bespoke sourcing: Travertine, honed Belgian bluestone, smoked oak, and hand-finished bronze joinery.',
    readTime: '5 min read'
  },
  {
    publication: 'Wallpaper* Magazine',
    title: 'Spatial Planning Masters: Top 10 Design Practices Shaping Sustainable Living',
    date: 'April 2024',
    category: 'Studio Profile',
    snippet: 'Recognized for human-centric architectural zoning and circadian-aligned lighting layouts that foster sustained calmness.',
    readTime: '3 min read'
  }
];

export const MediaModal: React.FC<MediaModalProps> = ({ isOpen, onClose }) => {
  const [downloadRequested, setDownloadRequested] = useState(false);

  if (!isOpen) return null;

  const handleDownloadKit = () => {
    setDownloadRequested(true);
    setTimeout(() => {
      setDownloadRequested(false);
    }, 4000);
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
          aria-labelledby="media-modal-title"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-3xl bg-[#FAF9F5] border border-[#E7E5E4] rounded-xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E7E5E4] bg-[#F5F3EF]">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold tracking-[0.18em] text-[#1F1C18]">SPAZIO</span>
              <span className="text-xl font-black text-[#E5A823] transform -rotate-12 select-none">/</span>
              <span className="bg-[#1F1C18] text-white font-bold tracking-[0.18em] text-xs px-1.5 py-0.5 select-none">IDEALE</span>
              <span className="text-xs text-[#78716C] ml-2 font-medium tracking-wide uppercase hidden sm:inline">
                | Media & Press
              </span>
            </div>
            <button
              type="button"
              id="close-media-modal-btn"
              onClick={onClose}
              aria-label="Close Media modal"
              className="p-2 rounded-full text-[#57534E] hover:bg-[#E7E5E4] hover:text-[#1F1C18] transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9B815B]">
                  Press & Publications
                </span>
                <h3 id="media-modal-title" className="text-2xl sm:text-3xl font-semibold text-[#1F1C18] tracking-tight">
                  Editorial Coverage & Industry Recognition
                </h3>
                <p className="text-sm text-[#57534E] leading-relaxed max-w-xl">
                  Explore publications, interviews, and design reviews showcasing Spazio Ideale's interior architecture and spatial methodology.
                </p>
              </div>

              {/* Press Kit CTA */}
              <button
                type="button"
                onClick={handleDownloadKit}
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#1F1C18] text-white text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#332E2A] transition-colors shrink-0"
              >
                {downloadRequested ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-[#9B815B]" />
                    <span>Kit Prepared</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Press Kit</span>
                  </>
                )}
              </button>
            </div>

            {/* Publication Cards */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#78716C]">
                Featured Articles & Reviews
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PRESS_ITEMS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white border border-[#E7E5E4] rounded-lg flex flex-col justify-between hover:border-[#9B815B] transition-colors group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-[#78716C]">
                        <span className="font-semibold text-[#9B815B] uppercase tracking-wider">
                          {item.publication}
                        </span>
                        <span>{item.date}</span>
                      </div>
                      <h5 className="text-base font-semibold text-[#1F1C18] group-hover:text-[#9B815B] transition-colors leading-snug">
                        {item.title}
                      </h5>
                      <p className="text-xs text-[#57534E] line-clamp-3 leading-relaxed">
                        {item.snippet}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#F5F3EF] flex items-center justify-between text-xs text-[#78716C]">
                      <span>{item.category} • {item.readTime}</span>
                      <span className="text-[#1F1C18] font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                        <span>Read</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#9B815B]" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Press Office Contact Box */}
            <div className="p-5 bg-[#F5F3EF] border border-[#E7E5E4] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#9B815B] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-semibold text-[#1F1C18]">
                    Press & Editorial Inquiries
                  </h5>
                  <p className="text-xs text-[#78716C] mt-0.5">
                    For high-resolution photography assets, interviews, or project licensing inquiries:
                  </p>
                  <p className="text-xs font-mono font-semibold text-[#1F1C18] mt-1">
                    press@spazioideale.com
                  </p>
                </div>
              </div>
              <a
                href="mailto:press@spazioideale.com?subject=Editorial%20Inquiry%20-%20Spazio%20Ideale"
                className="inline-flex items-center justify-center px-4 py-2 border border-[#1F1C18] text-xs font-semibold text-[#1F1C18] rounded-sm hover:bg-[#1F1C18] hover:text-white transition-colors self-start sm:self-auto"
              >
                Contact Press Office
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
