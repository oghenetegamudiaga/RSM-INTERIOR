import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface AboutProps {
  onOpenInquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenInquiry }) => {
  return (
    <section
      id="about"
      aria-label="About RSM Interiors"
      className="py-16 sm:py-24 lg:py-28 bg-[#FAF9F5]"
    >
      <ScrollReveal className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Written Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9B815B]">
                Studio Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1C18] leading-[1.2] tracking-tight">
                Spaces Rooted in Purpose, Balance, and Quiet Elegance
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
              <p>
                RSM Interiors was founded on a singular conviction: thoughtful design transforms how people experience their daily lives. We are an interior architecture and design practice offering comprehensive space planning, custom residential design, commercial environments, and exterior living spaces.
              </p>
              <p>
                Rather than imposing a rigid house style, we listen intently to how you live, work, and move. Every floor plan, joinery detail, and textural palette is developed with architectural discipline and deep respect for natural illumination.
              </p>
              <p>
                From private family residences in London and the countryside to high-performance corporate studios, our team manages each phase with rigor. We ensure that every project is delivered on schedule, within defined investment parameters, and crafted to endure for generations.
              </p>
            </div>

            {/* Core Values / Competencies */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#E7E5E4]">
              <div className="pt-3">
                <span className="block text-xs uppercase tracking-wider font-semibold text-[#1F1C18]">
                  Space Planning
                </span>
                <span className="text-xs text-[#78716C] mt-1 block">
                  Optimized circulation, functional zones, and natural lighting pathways.
                </span>
              </div>
              <div className="pt-3">
                <span className="block text-xs uppercase tracking-wider font-semibold text-[#1F1C18]">
                  Noble Materials
                </span>
                <span className="text-xs text-[#78716C] mt-1 block">
                  Honest stone, sustainable timber, tailored linen, and blackened steel.
                </span>
              </div>
              <div className="pt-3">
                <span className="block text-xs uppercase tracking-wider font-semibold text-[#1F1C18]">
                  Turnkey Delivery
                </span>
                <span className="text-xs text-[#78716C] mt-1 block">
                  Direct coordination with architects, contractors, and artisan builders.
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                id="about-consultation-btn"
                onClick={onOpenInquiry}
                className="inline-flex items-center space-x-2 text-sm font-semibold tracking-wide text-[#1F1C18] hover:text-[#9B815B] transition-colors pb-1 border-b border-[#1F1C18] hover:border-[#9B815B]"
              >
                <span>Start a Project Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Founder / CEO Photo Matching Wireframe */}
          <div className="lg:col-span-5">
            <div
              id="founder-photo-card"
              className="relative bg-[#F5F3EF] border border-[#D6D3D1] rounded-xl p-3 sm:p-4"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[#E7E5E4]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                  alt="Rachel S. Miller, Founder and Principal Designer of RSM Interiors"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Caption & Title */}
              <div className="mt-4 px-2 pb-1">
                <h3 className="text-xl font-semibold text-[#1F1C18]">
                  Rachel S. Miller
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#9B815B] uppercase tracking-wider mt-0.5">
                  Founder & Principal Designer
                </p>
                <p className="text-xs text-[#78716C] mt-2 leading-relaxed">
                  With over a decade of architectural design and spatial planning practice, Rachel leads every project from conceptual zoning to final material installation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
