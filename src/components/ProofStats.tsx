import React from 'react';
import { STATS } from '../data';

export const ProofStats: React.FC = () => {
  return (
    <section
      id="proof-section"
      aria-label="Studio Statistics and Proof"
      className="py-12 border-y border-[#E7E5E4] bg-[#F5F3EF]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#D6D3D1] text-center">
          {STATS.map((stat, idx) => (
            <div
              key={stat.id}
              id={`stat-block-${stat.id}`}
              className={`flex flex-col items-center justify-center ${
                idx > 0 ? 'pt-8 sm:pt-0' : ''
              }`}
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F1C18] tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-sm sm:text-base font-medium tracking-wider text-[#78716C] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
