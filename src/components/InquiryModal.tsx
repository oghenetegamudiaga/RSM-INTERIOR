import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Mail, Phone } from 'lucide-react';
import { InquiryFormData } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential Interior',
    timeline: 'Within 3 to 6 months',
    budgetRange: '£50,000 - £150,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate swift, verified client submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'Residential Interior',
      timeline: 'Within 3 to 6 months',
      budgetRange: '£50,000 - £150,000',
      message: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', stiffness: 340, damping: 28 }}
            className="relative w-full max-w-xl bg-[#FAF9F5] border border-[#D6D3D1] rounded-2xl p-6 sm:p-8 z-10 my-8"
          >
            {/* Close Button */}
            <button
              type="button"
              id="close-inquiry-modal-btn"
              onClick={resetAndClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-2 rounded-full text-[#78716C] hover:bg-[#E7E5E4] hover:text-[#1F1C18] transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#EFECE6] border border-[#9B815B] mx-auto flex items-center justify-center text-[#9B815B]">
                  <CheckCircle className="w-8 h-8 text-[#9B815B]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1F1C18] tracking-tight">
                  Inquiry Received
                </h3>
                <p className="text-sm sm:text-base text-[#57534E] max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name}. Rachel Miller and the RSM Interiors team have received your project details. We will review your brief and be in touch within two business days.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={resetAndClose}
                    className="px-8 py-3 bg-[#9B815B] text-white text-sm font-medium rounded-sm hover:bg-[#886F4A] transition-colors"
                  >
                    Return to Website
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6 space-y-1">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#9B815B]">
                    Start a Project
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#1F1C18] tracking-tight">
                    Studio Consultation Brief
                  </h3>
                  <p className="text-xs sm:text-sm text-[#78716C]">
                    Tell us about your home, commercial space, or planning requirements.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="inquiry-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Eleanor Vance"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D6D3D1] rounded-sm text-sm text-[#1F1C18] focus:outline-none focus:border-[#9B815B] focus:ring-1 focus:ring-[#9B815B]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="inquiry-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="inquiry-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="eleanor@example.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D6D3D1] rounded-sm text-sm text-[#1F1C18] focus:outline-none focus:border-[#9B815B] focus:ring-1 focus:ring-[#9B815B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="inquiry-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 7700 900077"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D6D3D1] rounded-sm text-sm text-[#1F1C18] focus:outline-none focus:border-[#9B815B] focus:ring-1 focus:ring-[#9B815B]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="inquiry-projectType"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1"
                      >
                        Project Scope
                      </label>
                      <select
                        id="inquiry-projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D6D3D1] rounded-sm text-sm text-[#1F1C18] focus:outline-none focus:border-[#9B815B] focus:ring-1 focus:ring-[#9B815B]"
                      >
                        <option value="Residential Interior">Residential Interior</option>
                        <option value="Commercial Workplace">Commercial Workplace</option>
                        <option value="Space Planning Consultation">Space Planning Consultation</option>
                        <option value="Exterior Living Extension">Exterior Living Extension</option>
                        <option value="Complete Turnkey Renovation">Complete Turnkey Renovation</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-timeline"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1"
                      >
                        Estimated Timeline
                      </label>
                      <select
                        id="inquiry-timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D6D3D1] rounded-sm text-sm text-[#1F1C18] focus:outline-none focus:border-[#9B815B] focus:ring-1 focus:ring-[#9B815B]"
                      >
                        <option value="Immediate (1 to 2 months)">Immediate (1 to 2 months)</option>
                        <option value="Within 3 to 6 months">Within 3 to 6 months</option>
                        <option value="6 to 12 months">6 to 12 months</option>
                        <option value="Flexible / Early Planning">Flexible / Early Planning</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="inquiry-budgetRange"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1"
                      >
                        Approximate Budget
                      </label>
                      <select
                        id="inquiry-budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D6D3D1] rounded-sm text-sm text-[#1F1C18] focus:outline-none focus:border-[#9B815B] focus:ring-1 focus:ring-[#9B815B]"
                      >
                        <option value="£30,000 - £50,000">£30,000 - £50,000</option>
                        <option value="£50,000 - £150,000">£50,000 - £150,000</option>
                        <option value="£150,000 - £350,000">£150,000 - £350,000</option>
                        <option value="£350,000+">£350,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1"
                    >
                      Project Notes or Location *
                    </label>
                    <textarea
                      id="inquiry-message"
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share a brief overview of your property, location, and key functional priorities."
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D6D3D1] rounded-sm text-sm text-[#1F1C18] focus:outline-none focus:border-[#9B815B] focus:ring-1 focus:ring-[#9B815B]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      id="submit-inquiry-btn"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#9B815B] text-white font-medium text-sm tracking-wide rounded-sm hover:bg-[#886F4A] active:bg-[#78613F] transition-colors disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#9B815B]"
                    >
                      {isSubmitting ? 'Sending Inquiry...' : 'Submit Project Inquiry'}
                    </button>
                  </div>

                  <div className="pt-3 border-t border-[#E7E5E4] flex items-center justify-between text-[11px] text-[#78716C]">
                    <span className="flex items-center space-x-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#9B815B]" />
                      <span>inquiries@rsminteriors.com</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#9B815B]" />
                      <span>+44 (0) 20 7946 0912</span>
                    </span>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
