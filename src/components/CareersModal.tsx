import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Briefcase, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: () => void;
}

const OPEN_ROLES = [
  {
    id: 'role-1',
    title: 'Senior Interior Architect',
    type: 'Full-Time',
    location: 'London / Hybrid',
    department: 'Architecture & Spatial Planning',
    experience: '5+ Years',
    description: 'Leading high-end residential and commercial interior transformations from schematic layout through construction delivery and FF&E detailing.'
  },
  {
    id: 'role-2',
    title: 'Spatial 3D Visualizer & BIM Specialist',
    type: 'Full-Time',
    location: 'Studio / Remote',
    department: 'Visualization & Technical Design',
    experience: '3+ Years',
    description: 'Creating photorealistic spatial renderings, VR walkthroughs, and technical BIM documentation for client presentations and contractor packages.'
  },
  {
    id: 'role-3',
    title: 'FF&E & Materials Coordinator',
    type: 'Full-Time',
    location: 'London Studio',
    department: 'Material Procurement & Styling',
    experience: '2+ Years',
    description: 'Sourcing bespoke textiles, artisan stonework, lighting fixtures, and custom joinery while maintaining vendor relationships and procurement budgets.'
  },
  {
    id: 'role-4',
    title: 'Junior Design Intern',
    type: 'Paid Internship (6 Months)',
    location: 'London Studio',
    department: 'Design Studio Support',
    experience: 'Graduate / Early Career',
    description: 'Supporting senior designers in mood boards, sample library curation, site measurements, and client presentation preparations.'
  }
];

export const CareersModal: React.FC<CareersModalProps> = ({ isOpen, onClose }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [coverNote, setCoverNote] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setSelectedRole(null);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="careers-modal-title"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-3xl bg-[#FAF9F5] border border-[#E7E5E4] rounded-xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E7E5E4] bg-[#F5F3EF]">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold tracking-[0.18em] text-[#1F1C18]">SPAZIO</span>
              <span className="text-xl font-black text-[#E5A823] transform -rotate-12 select-none">/</span>
              <span className="bg-[#1F1C18] text-white font-bold tracking-[0.18em] text-xs px-1.5 py-0.5 select-none">IDEALE</span>
              <span className="text-xs text-[#78716C] ml-2 font-medium tracking-wide uppercase hidden sm:inline">
                | Careers
              </span>
            </div>
            <button
              type="button"
              id="close-careers-modal-btn"
              onClick={handleClose}
              aria-label="Close Careers modal"
              className="p-2 rounded-full text-[#57534E] hover:bg-[#E7E5E4] hover:text-[#1F1C18] transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#EFECE6] border border-[#9B815B] mx-auto flex items-center justify-center text-[#9B815B]">
                  <CheckCircle className="w-8 h-8 text-[#9B815B]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1F1C18] tracking-tight">
                  Application Received
                </h3>
                <p className="text-sm text-[#57534E] max-w-md mx-auto leading-relaxed">
                  Thank you for your interest in joining Spazio Ideale. Our design director and talent team review all portfolio submissions and will reach out if your experience matches our studio needs.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-6 py-2.5 bg-[#1F1C18] text-white text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#332E2A] transition-colors"
                  >
                    Back to Website
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9B815B]">
                    Studio Opportunities
                  </span>
                  <h3 id="careers-modal-title" className="text-2xl sm:text-3xl font-semibold text-[#1F1C18] tracking-tight">
                    Join Our Architectural & Interior Design Practice
                  </h3>
                  <p className="text-sm text-[#57534E] leading-relaxed">
                    At Spazio Ideale, we cultivate an environment where rigorous spatial planning meets artistic intuition. We are always looking for visionary architects, interior designers, and visualizers.
                  </p>
                </div>

                {/* Open Positions List */}
                <div className="space-y-4 pt-2">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#78716C]">
                    Current Openings
                  </h4>
                  <div className="space-y-3">
                    {OPEN_ROLES.map((role) => {
                      const isSelected = selectedRole === role.id;
                      return (
                        <div
                          key={role.id}
                          className={`p-5 rounded-lg border transition-all ${
                            isSelected
                              ? 'border-[#9B815B] bg-white'
                              : 'border-[#E7E5E4] bg-[#F5F3EF] hover:border-[#D6D3D1]'
                          }`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                              <h5 className="text-base font-semibold text-[#1F1C18]">
                                {role.title}
                              </h5>
                              <div className="flex flex-wrap items-center gap-3 text-xs text-[#78716C] mt-1">
                                <span className="flex items-center space-x-1">
                                  <Briefcase className="w-3.5 h-3.5 text-[#9B815B]" />
                                  <span>{role.type}</span>
                                </span>
                                <span>•</span>
                                <span className="flex items-center space-x-1">
                                  <MapPin className="w-3.5 h-3.5 text-[#9B815B]" />
                                  <span>{role.location}</span>
                                </span>
                                <span>•</span>
                                <span className="flex items-center space-x-1">
                                  <Clock className="w-3.5 h-3.5 text-[#9B815B]" />
                                  <span>{role.experience}</span>
                                </span>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => setSelectedRole(isSelected ? null : role.id)}
                              className={`text-xs font-semibold px-4 py-2 rounded-sm transition-colors self-start sm:self-auto ${
                                isSelected
                                  ? 'bg-[#1F1C18] text-white'
                                  : 'border border-[#1F1C18] text-[#1F1C18] hover:bg-[#1F1C18] hover:text-white'
                              }`}
                            >
                              {isSelected ? 'Selected' : 'Apply Now'}
                            </button>
                          </div>
                          <p className="text-xs sm:text-sm text-[#57534E] mt-3 leading-relaxed">
                            {role.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Application Form */}
                <div className="p-5 sm:p-6 bg-white border border-[#E7E5E4] rounded-lg space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1F1C18]">
                    {selectedRole ? 'Apply for Selected Role' : 'General Expression of Interest'}
                  </h4>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#57534E] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          placeholder="Your name"
                          className="w-full px-3.5 py-2 text-sm bg-[#FAF9F5] border border-[#D6D3D1] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#9B815B]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#57534E] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={applicantEmail}
                          onChange={(e) => setApplicantEmail(e.target.value)}
                          placeholder="your.email@example.com"
                          className="w-full px-3.5 py-2 text-sm bg-[#FAF9F5] border border-[#D6D3D1] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#9B815B]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#57534E] mb-1">
                        Portfolio / Website / LinkedIn URL *
                      </label>
                      <input
                        type="url"
                        required
                        value={portfolioLink}
                        onChange={(e) => setPortfolioLink(e.target.value)}
                        placeholder="https://behance.net/yourprofile or website"
                        className="w-full px-3.5 py-2 text-sm bg-[#FAF9F5] border border-[#D6D3D1] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#9B815B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#57534E] mb-1">
                        Brief Note / Cover Summary
                      </label>
                      <textarea
                        rows={2}
                        value={coverNote}
                        onChange={(e) => setCoverNote(e.target.value)}
                        placeholder="Tell us about your architectural background or design philosophy..."
                        className="w-full px-3.5 py-2 text-sm bg-[#FAF9F5] border border-[#D6D3D1] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#9B815B] resize-none"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                      <p className="text-xs text-[#78716C]">
                        Direct inquiries: <span className="font-mono text-[#1F1C18]">careers@spazioideale.com</span>
                      </p>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center space-x-2 px-6 py-2.5 bg-[#1F1C18] text-white text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#9B815B] transition-colors"
                      >
                        <span>Submit Application</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
