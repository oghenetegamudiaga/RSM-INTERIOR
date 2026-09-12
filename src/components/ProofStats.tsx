import React from 'react';
import { STATS } from '../data';
import { ScrollReveal } from './ScrollReveal';

export const ProofStats: React.FC = () => {
  return (
    <section
      id="proof-section"
      aria-label="Studio Statistics and Proof"
      className="py-8 sm:py-12 border-y border-[#E7E5E4] bg-[#F5F3EF]"
    >
      <ScrollReveal className="max-w-7xl mx-auto px-3 sm:px-8">
        <div className="grid grid-cols-3 divide-x divide-[#D6D3D1] text-center items-center">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              id={`stat-block-${stat.id}`}
              className="px-1.5 xs:px-3 sm:px-6 flex flex-col items-center justify-center"
            >
              <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F1C18] tracking-tight leading-none">
                {stat.value}
              </span>
              <span className="mt-1 sm:mt-2 text-[10px] xs:text-xs sm:text-sm font-medium tracking-wider text-[#78716C] uppercase leading-tight text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};
