import React from 'react';
import { REVIEWS } from '../data';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const Reviews: React.FC = () => {
  return (
    <section
      id="reviews"
      aria-label="Client Reviews"
      className="py-16 sm:py-24 lg:py-28 bg-[#F5F3EF] border-t border-[#E7E5E4]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9B815B]">
            Client Words
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1C18] tracking-tight">
            Client Reviews
          </h2>
          <p className="text-base text-[#57534E]">
            Direct feedback from homeowners, directors, and commercial partners.
          </p>
        </ScrollReveal>

        {/* 3 Testimonial Cards with Staggered Scroll Reveal and Hover Scale */}
        <StaggerContainer
          id="reviews-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch"
        >
          {REVIEWS.map((rev) => (
            <StaggerItem key={rev.id}>
              <div
                id={`review-card-${rev.id}`}
                className="bg-[#FAF9F5] border border-[#E7E5E4] rounded-xl p-8 flex flex-col justify-between hover:border-[#9B815B] hover:scale-[1.03] transition-all duration-500 ease-out h-full"
              >
                <div className="space-y-6">
                  {/* Wireframe Avatar Circle with Clean Initials */}
                  <div className="w-12 h-12 rounded-full bg-[#EFECE6] border border-[#D6D3D1] flex items-center justify-center text-[#1F1C18] font-bold text-base">
                    {rev.initials}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-base sm:text-lg text-[#1F1C18] leading-relaxed font-normal">
                    "{rev.quote}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="mt-8 pt-6 border-t border-[#E7E5E4]">
                  <h4 className="text-sm font-semibold text-[#1F1C18]">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-[#78716C] mt-0.5">
                    {rev.clientType}
                  </p>
                  <p className="text-[11px] text-[#9B815B] mt-1 font-medium">
                    {rev.location}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
