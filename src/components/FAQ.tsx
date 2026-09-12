import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-16 sm:py-24 lg:py-28 bg-[#FAF9F5] border-t border-[#E7E5E4]"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Wireframe FAQ Heading */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9B815B]">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1C18] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#57534E]">
            Clear insights into our design methodology, timelines, and consultation workflow.
          </p>
        </div>

        {/* Accordion List Matching Wireframe */}
        <div id="faq-accordion" className="divide-y divide-[#E7E5E4] border-y border-[#E7E5E4]">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} id={`faq-item-${faq.id}`} className="py-2">
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  onClick={() => toggleItem(faq.id)}
                  className="w-full py-5 text-left flex items-center justify-between gap-4 group focus:outline-none focus:ring-2 focus:ring-[#9B815B] rounded-sm"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-xs font-mono font-medium text-[#78716C] w-6">
                      0{index + 1}
                    </span>
                    <span className="text-base sm:text-lg font-medium text-[#1F1C18] group-hover:text-[#9B815B] transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#78716C] group-hover:text-[#1F1C18] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#9B815B]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-10 pr-6 pb-6 text-sm sm:text-base text-[#57534E] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
