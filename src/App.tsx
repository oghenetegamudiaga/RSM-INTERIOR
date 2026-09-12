import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProofStats } from './components/ProofStats';
import { About } from './components/About';
import { ProjectsGrid } from './components/ProjectsGrid';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { CareersModal } from './components/CareersModal';
import { MediaModal } from './components/MediaModal';
import { ServicesModal } from './components/ServicesModal';

export default function App() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [isCareersModalOpen, setIsCareersModalOpen] = useState(false);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);

  const handleOpenInquiry = () => {
    setIsInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1F1C18] antialiased selection:bg-[#9B815B] selection:text-white">
      {/* Sticky Header with Framer-style Mobile Navigation */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
        onOpenCareers={() => setIsCareersModalOpen(true)}
        onOpenMedia={() => setIsMediaModalOpen(true)}
        onOpenServices={() => setIsServicesModalOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-grow">
        {/* Wireframe Hero Section: 3-Slide Carousel with < o o o > & "Get Started" CTA */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* Wireframe Proof Section: 3 Stat Blocks (50+ Projects, 7+ Years, 28+ Clients) */}
        <ProofStats />

        {/* Wireframe About Section: Written Copy Left + Founder/CEO Photo Right */}
        <About onOpenInquiry={handleOpenInquiry} />

        {/* Our Projects: 4 Featured Cards + "See All Projects" CTA */}
        <ProjectsGrid onOpenInquiry={handleOpenInquiry} />

        {/* Wireframe Page 2: Client Reviews (3 Testimonial Cards with Avatar/Initial) */}
        <Reviews />

        {/* Wireframe Page 2: FAQ Accordion List */}
        <FAQ />
      </main>

      {/* Footer (Logo/Description, Nav Links, Studio Contact & Instagram) */}
      <Footer
        onOpenInquiry={handleOpenInquiry}
        onOpenServices={() => setIsServicesModalOpen(true)}
      />

      {/* Interactive Project Inquiry & Discovery Modal */}
      <InquiryModal isOpen={isInquiryModalOpen} onClose={handleCloseInquiry} />

      {/* Careers Modal */}
      <CareersModal
        isOpen={isCareersModalOpen}
        onClose={() => setIsCareersModalOpen(false)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Media & Press Modal */}
      <MediaModal
        isOpen={isMediaModalOpen}
        onClose={() => setIsMediaModalOpen(false)}
      />

      {/* Studio Services Modal */}
      <ServicesModal
        isOpen={isServicesModalOpen}
        onClose={() => setIsServicesModalOpen(false)}
        onOpenInquiry={handleOpenInquiry}
      />
    </div>
  );
}
