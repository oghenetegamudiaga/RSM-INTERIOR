import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { About } from '../components/About';
import { ScrollReveal } from '../components/ScrollReveal';

interface AboutPageProps {
  onOpenInquiry: () => void;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenInquiry, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1F1C18] antialiased">
      <Navbar onOpenInquiry={onOpenInquiry} onNavigate={onNavigate} currentPath="/about" />
      <main className="flex-grow pt-24 sm:pt-28 lg:pt-32">
        <ScrollReveal className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9B815B] block mb-2">
            Studio Overview
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F1C18]">
            About RSM Interiors
          </h1>
        </ScrollReveal>
        <About onOpenInquiry={onOpenInquiry} />
      </main>
      <Footer onOpenInquiry={onOpenInquiry} onNavigate={onNavigate} />
    </div>
  );
};
