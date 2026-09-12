import React from 'react';
import { Mail, Phone, MapPin, Instagram, ArrowUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FooterProps {
  onOpenInquiry: () => void;
  onOpenServices?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry, onOpenServices }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home', type: 'scroll' },
    { label: 'About Us', href: '#about', type: 'scroll' },
    { label: 'Our Services', href: '#services', type: 'scroll' },
    { label: 'Projects', href: '#projects', type: 'scroll' },
    { label: 'Contact', href: '#contact', type: 'scroll' },
  ];

  return (
    <footer
      id="contact"
      aria-label="Footer and Studio Information"
      className="bg-[#1F1C18] text-[#E7E5E4] pt-16 sm:pt-20 pb-12 border-t border-[#38332E]"
    >
      <ScrollReveal className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Grid: Logo/Philosophy, Links, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#38332E]">
          {/* Column 1: Logo & Studio Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center select-none">
              <img
                src="/images/logo.svg"
                alt="RSM Interiors Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#A8A29E] mt-1 font-medium">
              Interior Architecture & Space Planning
            </p>
            <p className="text-sm text-[#A8A29E] max-w-sm leading-relaxed">
              Crafting timeless spaces tailored to each client. Specializing in space planning, custom residential renovations, and high-performance commercial environments.
            </p>
            <div className="pt-2">
              <button
                type="button"
                id="footer-inquire-btn"
                onClick={onOpenInquiry}
                className="px-6 py-3 bg-[#9B815B] text-white text-xs sm:text-sm font-medium tracking-wide rounded-sm hover:bg-[#886F4A] active:bg-[#78613F] transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              >
                Inquire for Your Space
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D6D3D1]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A8A29E]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.type === 'services' && onOpenServices && !document.querySelector(link.href)) {
                        e.preventDefault();
                        onOpenServices();
                      }
                    }}
                    className="hover:text-white transition-colors block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Instagram */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D6D3D1]">
              Studio Inquiries
            </h4>
            <div className="space-y-3 text-sm text-[#A8A29E]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#9B815B] shrink-0 mt-0.5" />
                <span>14 Berkeley Square, Mayfair, London W1J 6BQ</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#9B815B] shrink-0" />
                <a
                  href="mailto:inquiries@rsminteriors.com"
                  className="hover:text-white transition-colors"
                >
                  inquiries@rsminteriors.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#9B815B] shrink-0" />
                <a
                  href="tel:+442079460912"
                  className="hover:text-white transition-colors"
                >
                  +44 (0) 20 7946 0912
                </a>
              </div>
            </div>

            {/* Social Link to Instagram */}
            <div className="pt-2">
              <span className="text-xs text-[#78716C] block mb-2">Follow Our Work</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                id="footer-instagram-link"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-[#E7E5E4] hover:text-[#9B815B] transition-colors py-1"
              >
                <Instagram className="w-4 h-4 text-[#9B815B]" />
                <span>@rsminteriors on Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716C] gap-4">
          <p>© 2026 RSM Interiors. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#A8A29E] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#A8A29E] cursor-pointer">Terms of Service</span>
            <button
              type="button"
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-[#A8A29E] hover:text-white transition-colors"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
};
