import React, { useState } from 'react';
import { Mail, Phone, Instagram, Send, CheckCircle2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

interface ContactPageProps {
  onOpenInquiry: () => void;
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenInquiry, onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1F1C18] antialiased">
      <Navbar onOpenInquiry={onOpenInquiry} onNavigate={onNavigate} currentPath="/contact" />
      <main className="flex-grow pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9B815B]">
              Direct Connection
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F1C18]">
              Contact Studio
            </h1>
            <p className="text-base text-[#57534E]">
              Reach out to initiate a discovery conversation for your residential or commercial project.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left Column: Direct Studio Details (NO PHYSICAL ADDRESS) */}
            <ScrollReveal className="lg:col-span-5 space-y-8 bg-[#F5F3EF] border border-[#E7E5E4] rounded-2xl p-8 sm:p-10">
              <div>
                <h2 className="text-2xl font-semibold text-[#1F1C18] tracking-tight">
                  Studio Inquiries
                </h2>
                <p className="text-sm text-[#78716C] mt-2 leading-relaxed">
                  We welcome initial inquiries for space planning, architectural renovations, and commercial workplace design.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-[#E7E5E4]">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#EFECE6] border border-[#D6D3D1] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#9B815B]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#78716C] block">
                      Direct Telephone
                    </span>
                    <a
                      href="tel:+2347033333523"
                      className="text-base font-semibold text-[#1F1C18] hover:text-[#9B815B] transition-colors"
                    >
                      +234 703 333 3523
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#EFECE6] border border-[#D6D3D1] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#9B815B]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#78716C] block">
                      Email Communication
                    </span>
                    <a
                      href="mailto:inquiries@rsminteriors.com"
                      className="text-base font-semibold text-[#1F1C18] hover:text-[#9B815B] transition-colors"
                    >
                      inquiries@rsminteriors.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#EFECE6] border border-[#D6D3D1] flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4 text-[#9B815B]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#78716C] block">
                      Follow Our Work
                    </span>
                    <a
                      href="https://www.instagram.com/rsminteriors_?stkn=a21mcmo4cWh0ZGQ5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#1F1C18] hover:text-[#9B815B] transition-colors"
                    >
                      @rsminteriors_ on Instagram
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Working Contact Form */}
            <ScrollReveal className="lg:col-span-7 bg-white border border-[#E7E5E4] rounded-2xl p-8 sm:p-10 shadow-xs">
              <h3 className="text-2xl font-semibold text-[#1F1C18] tracking-tight mb-6">
                Send a Message
              </h3>

              {status === 'success' ? (
                <div className="p-8 text-center bg-[#FAF9F5] border border-[#E7E5E4] rounded-xl space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#9B815B] mx-auto" />
                  <h4 className="text-xl font-semibold text-[#1F1C18]">Message Received</h4>
                  <p className="text-sm text-[#57534E] max-w-md mx-auto">
                    Thank you for reaching out to RSM Interiors. Our principal team will review your message and reply within two business days.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 bg-[#1F1C18] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#332E2A] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider font-semibold text-[#1F1C18] mb-2">
                      Your Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahma Muhammed"
                      className="w-full px-4 py-3 bg-[#FAF9F5] border border-[#E7E5E4] rounded-lg text-sm text-[#1F1C18] focus:outline-none focus:ring-2 focus:ring-[#9B815B]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider font-semibold text-[#1F1C18] mb-2">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-[#FAF9F5] border border-[#E7E5E4] rounded-lg text-sm text-[#1F1C18] focus:outline-none focus:ring-2 focus:ring-[#9B815B]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider font-semibold text-[#1F1C18] mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 ..."
                        className="w-full px-4 py-3 bg-[#FAF9F5] border border-[#E7E5E4] rounded-lg text-sm text-[#1F1C18] focus:outline-none focus:ring-2 focus:ring-[#9B815B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider font-semibold text-[#1F1C18] mb-2">
                      Project Details / Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your space, timeline, or scope..."
                      className="w-full px-4 py-3 bg-[#FAF9F5] border border-[#E7E5E4] rounded-lg text-sm text-[#1F1C18] focus:outline-none focus:ring-2 focus:ring-[#9B815B]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-[#9B815B] text-white font-medium text-sm tracking-wide uppercase rounded-sm hover:bg-[#886F4A] active:bg-[#78613F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B815B] flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75"
                  >
                    <span>{status === 'submitting' ? 'Sending Message...' : 'Send Inquiry Message'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </main>
      <Footer onOpenInquiry={onOpenInquiry} onNavigate={onNavigate} />
    </div>
  );
};
