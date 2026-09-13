import { StatItem, HeroSlide, ProjectItem, ReviewItem, FaqItem } from './types';
import { STATS } from './data/stats';
import { PROJECTS } from './data/projects';

export { STATS, PROJECTS };

export const FEATURED_PROJECTS: ProjectItem[] = PROJECTS.slice(0, 4);
export const ALL_PROJECTS: ProjectItem[] = PROJECTS;

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    title: 'Crafting Timeless Spaces',
    subtitle: 'Bespoke residential and commercial interior architecture tailored to how you live.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80',
    alt: 'Sunlit modern minimalist living room with warm wood finishes and bespoke furniture',
    location: 'Kensington Residence'
  },
  {
    id: 'slide-2',
    title: 'Architectural Balance & Space Planning',
    subtitle: 'Transforming light, proportion, and noble materials into calm daily environments.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80',
    alt: 'Warm contemporary open-plan kitchen and dining interior with curated stone island',
    location: 'Tribeca Penthouse'
  },
  {
    id: 'slide-3',
    title: 'Refined Workplaces & Studios',
    subtitle: 'Purposeful commercial spaces designed to elevate human connection and focus.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80',
    alt: 'Boutique architectural office studio with warm oak joinery and linen acoustic partitions',
    location: 'Mayfair Design Studio'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Eleanor Vance',
    clientType: 'Private Homeowner',
    quote: 'RSM Interiors transformed our dark Victorian layout into a bright, cohesive home that feels both grounded and deeply comfortable for our family.',
    initials: 'EV',
    location: 'Kensington Residence'
  },
  {
    id: 'rev-2',
    name: 'Marcus Sterling',
    clientType: 'Managing Partner, Sterling & Co',
    quote: 'From space planning to final material selection, the studio delivered our commercial office on schedule with exceptional attention to acoustic and visual detail.',
    initials: 'MS',
    location: 'Mayfair Headquarters'
  },
  {
    id: 'rev-3',
    name: 'Sophia Chen',
    clientType: 'Residential Client',
    quote: 'The team listened closely to how we live before drawing a single line. The bespoke cabinetry and lighting scheme continue to bring us joy every single day.',
    initials: 'SC',
    location: 'Chelsea Penthouse'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What types of projects does RSM Interiors take on?',
    answer: 'We undertake comprehensive residential renovations, new build interior architecture, commercial workplaces, boutique hospitality spaces, and exterior living extensions. We also offer dedicated space planning consultations for clients needing early spatial clarity.'
  },
  {
    id: 'faq-2',
    question: 'How does your design and planning process work?',
    answer: 'Every project begins with an in-depth discovery consultation to understand your lifestyle, functional requirements, and aesthetic goals. We then advance through concept design, spatial layout plans, 3D visualizations, material sourcing, and complete on-site project oversight.'
  },
  {
    id: 'faq-3',
    question: 'Can you work within my established timeline and budget?',
    answer: 'Yes. Transparent budget management is central to our philosophy. During the initial briefing, we establish realistic milestone schedules and line-item allocations, ensuring every design decision aligns with your target investment.'
  },
  {
    id: 'faq-4',
    question: 'Do you manage contractors and procurement?',
    answer: 'We provide full turnkey execution. We coordinate directly with architects, general contractors, structural engineers, and specialty craftsmen, overseeing technical drawings, procurement, and on-site installations through completion.'
  },
  {
    id: 'faq-5',
    question: 'How do I start a project with RSM Interiors?',
    answer: 'You can submit a project inquiry through our website contact form or email our studio directly. We will schedule an introductory discovery conversation within two business days to review your scope and next steps.'
  }
];
