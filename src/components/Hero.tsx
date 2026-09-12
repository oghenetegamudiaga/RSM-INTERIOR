import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data';

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Auto-advance with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      nextSlide();
    } else if (diff < -40) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="home"
      aria-label="Hero Carousel"
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Hero Visual Card / Carousel Container */}
        <div
          id="hero-carousel-container"
          className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden bg-[#E7E5E4] border border-[#D6D3D1]"
        >
          {/* Animated Slide Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
              />
              {/* Solid neutral dark overlay for high contrast readability - strictly NO gradients */}
              <div className="absolute inset-0 bg-black/45" />

              {/* Slide Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-14 text-white">
                <div className="max-w-2xl space-y-3 sm:space-y-4">
                  <span className="inline-block text-xs uppercase tracking-[0.2em] font-medium text-[#E7E5E4] bg-[#1F1C18]/60 backdrop-blur-xs px-3 py-1 rounded-sm">
                    {slide.location}
                  </span>
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] text-white tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-[#E7E5E4] leading-relaxed max-w-xl">
                    {slide.subtitle}
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      id="hero-get-started-cta"
                      onClick={onOpenInquiry}
                      className="inline-flex items-center justify-center px-8 py-3.5 bg-[#9B815B] text-white font-medium text-sm sm:text-base tracking-wide rounded-sm hover:bg-[#886F4A] active:bg-[#78613F] transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Matching Wireframe: < o o o > */}
        <div
          id="hero-carousel-controls"
          aria-label="Carousel navigation"
          className="mt-6 flex items-center justify-center space-x-6 select-none"
        >
          {/* Wireframe Left Arrow "<" */}
          <button
            type="button"
            id="hero-prev-slide-btn"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#D6D3D1] bg-[#FAF9F5] text-[#1F1C18] hover:bg-[#EFECE6] active:bg-[#E7E5E4] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B815B]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Wireframe Dots "o o o" */}
          <div className="flex items-center space-x-3" role="tablist" aria-label="Slide selector">
            {HERO_SLIDES.map((s, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={s.id}
                  type="button"
                  id={`hero-slide-dot-${index}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${index + 1}: ${s.location}`}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9B815B] focus:ring-offset-2 rounded-full ${
                    isActive
                      ? 'w-8 h-2.5 bg-[#9B815B]'
                      : 'w-2.5 h-2.5 bg-[#D6D3D1] hover:bg-[#A8A29E]'
                  }`}
                />
              );
            })}
          </div>

          {/* Wireframe Right Arrow ">" */}
          <button
            type="button"
            id="hero-next-slide-btn"
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#D6D3D1] bg-[#FAF9F5] text-[#1F1C18] hover:bg-[#EFECE6] active:bg-[#E7E5E4] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B815B]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
