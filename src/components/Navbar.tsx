import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
  onOpenCareers: () => void;
  onOpenMedia: () => void;
  onOpenServices: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenInquiry,
  onOpenCareers,
  onOpenMedia,
  onOpenServices,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'reviews', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home', type: 'scroll' },
    { label: 'About Us', href: '#about', id: 'about', type: 'scroll' },
    { label: 'Our Services', href: '#services', id: 'services', type: 'scroll' },
    { label: 'Projects', href: '#projects', id: 'projects', type: 'scroll' },
    { label: 'Contact', href: '#contact', id: 'contact', type: 'scroll' },
  ];

  const handleLinkClick = (link: { href: string; type: string }) => {
    setMobileMenuOpen(false);
    if (link.type === 'services' && !document.querySelector(link.href)) {
      onOpenServices();
      return;
    }
    const target = document.querySelector(link.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Sticky Header */}
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E7E5E4] py-4'
            : 'bg-white/90 backdrop-blur-xs border-b border-[#E7E5E4]/60 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* RSM Interiors Confirmed Logo */}
          <a
            href="#home"
            id="desktop-logo"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick({ href: '#home', type: 'scroll' });
            }}
            className="flex items-center focus:outline-none group select-none cursor-pointer"
            aria-label="RSM Interiors Home"
          >
            <img
              src="/images/logo.svg"
              alt="RSM Interiors Logo"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-opacity group-hover:opacity-85"
            />
          </a>

          {/* Desktop Navigation Links matching exact image layout */}
          <nav
            id="desktop-nav"
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-7 xl:space-x-9"
          >
            {navLinks.map((link) => {
              return (
                <button
                  key={link.id}
                  type="button"
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link)}
                  className="text-xs xl:text-[13px] font-bold tracking-wider text-[#1F1C18] hover:text-[#9B815B] transition-colors py-1 cursor-pointer focus:outline-none whitespace-nowrap"
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Framer-style Floating Menu Toggle Button */}
          <div className="lg:hidden">
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative z-50 flex items-center justify-center w-11 h-11 rounded-full bg-[#1F1C18] text-white hover:bg-[#2E2A26] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B815B]"
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="w-5 h-[2px] bg-white rounded-full origin-center"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.15 }}
                  className="w-5 h-[2px] bg-white rounded-full"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="w-5 h-[2px] bg-white rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Framer-Style Mobile Navigation Overlay & Spring Dock */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
            />

            {/* Framer-Style Floating Pill Menu Panel */}
            <motion.div
              id="framer-mobile-nav-panel"
              initial={{ opacity: 0, y: -24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{
                type: 'spring',
                stiffness: 340,
                damping: 28,
              }}
              className="fixed top-20 left-4 right-4 z-40 lg:hidden max-h-[calc(100vh-6rem)] overflow-y-auto bg-[#FAF9F5] border border-[#E7E5E4] rounded-2xl p-6"
            >
              <div className="flex flex-col space-y-5">
                {/* Header in menu */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[#E7E5E4]">
                  <div className="flex items-center">
                    <img
                      src="/images/logo.svg"
                      alt="RSM Interiors Logo"
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EFECE6] text-[#57534E] font-semibold">
                    Menu
                  </span>
                </div>

                {/* Staggered Navigation Links */}
                <div className="flex flex-col space-y-1.5">
                  {navLinks.map((link, idx) => {
                    const isActive = activeSection === link.id;
                    return (
                      <motion.button
                        key={link.id}
                        type="button"
                        id={`mobile-nav-link-${link.id}`}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * idx, type: 'spring', stiffness: 300, damping: 25 }}
                        onClick={() => handleLinkClick(link)}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#EFECE6] text-[#1F1C18] font-semibold'
                            : 'text-[#44403C] hover:bg-[#F5F3EF] hover:text-[#1F1C18]'
                        }`}
                      >
                        <span className="text-sm tracking-wider font-semibold uppercase">{link.label}</span>
                        <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-[#E5A823] translate-x-0.5' : 'text-[#A8A29E]'}`} />
                      </motion.button>
                    );
                  })}
                </div>

                {/* Mobile Call To Action */}
                <div className="pt-2">
                  <button
                    type="button"
                    id="mobile-inquiry-cta"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenInquiry();
                    }}
                    className="w-full py-3 bg-[#1F1C18] text-white text-center font-medium rounded-xl hover:bg-[#332E2A] active:bg-[#44403C] transition-colors text-sm tracking-wide uppercase"
                  >
                    Start Studio Consultation
                  </button>
                </div>

                {/* Studio Contact Info in Mobile Menu */}
                <div className="pt-3 border-t border-[#E7E5E4] space-y-2 text-xs text-[#78716C]">
                  <div className="flex items-center space-x-2.5">
                    <Mail className="w-3.5 h-3.5 text-[#E5A823] shrink-0" />
                    <span>inquiries@spazioideale.com</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Phone className="w-3.5 h-3.5 text-[#E5A823] shrink-0" />
                    <span>+44 (0) 20 7946 0912</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E5A823] shrink-0" />
                    <span>14 Berkeley Square, Mayfair, London</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
