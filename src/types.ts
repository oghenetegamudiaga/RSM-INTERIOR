export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  location: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Space Planning' | 'Exterior';
  image: string;
  alt: string;
  location: string;
  year: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  clientType: string;
  quote: string;
  initials: string;
  location: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  scope: string[];
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  timeline: string;
  budgetRange: string;
  message: string;
}
