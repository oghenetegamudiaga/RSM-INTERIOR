import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface ServicesProps {
  onOpenInquiry: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenInquiry }) => {
  return (
    <section
      id="services"
      aria-label="Our Services"
      className="py-16 sm:py-24 bg-[#F5F3EF] border-t border-[#E7E5E4]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9B815B]">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1C18] tracking-tight">
              Comprehensive Design from Planning to Completion
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              type="button"
              id="services-inquire-btn"
              onClick={onOpenInquiry}
              className="inline-flex items-center space-x-2 text-sm font-semibold tracking-wide text-[#1F1C18] hover:text-[#9B815B] transition-colors pb-1 border-b border-[#1F1C18] hover:border-[#9B815B]"
            >
              <span>Request Service Overview</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

        {/* 4 Architectural Services Cards with Staggered Scroll Reveal */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <StaggerItem key={service.id}>
              <div
                id={`service-card-${service.id}`}
                className="bg-[#FAF9F5] border border-[#E7E5E4] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#9B815B] transition-all duration-300 group h-full"
              >
                <div className="space-y-4">
                  <span className="text-xs font-mono font-medium text-[#78716C]">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1F1C18] group-hover:text-[#9B815B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#57534E] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-[#E7E5E4] space-y-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#78716C] block">
                    Included Scope
                  </span>
                  <ul className="space-y-1 text-xs text-[#57534E]">
                    {service.scope.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9B815B] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
