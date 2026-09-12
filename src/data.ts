import { StatItem, HeroSlide, ProjectItem, ReviewItem, FaqItem, ServiceItem } from './types';
import { STATS } from './data/stats';

export { STATS };


export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    title: 'Crafting Timeless Spaces Tailored to Each Client',
    subtitle: 'Full-service interior architecture, space planning, and bespoke residential and commercial environments.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80',
    alt: 'Sunlit modern minimalist living room with warm wood finishes and bespoke furniture',
    location: 'Kensington Residence'
  },
  {
    id: 'slide-2',
    title: 'Precision Space Planning and Architectural Balance',
    subtitle: 'Transforming natural light, proportion, and noble materials into calm and functional daily living.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80',
    alt: 'Warm contemporary open-plan kitchen and dining interior with curated stone island',
    location: 'Tribeca Penthouse'
  },
  {
    id: 'slide-3',
    title: 'Refined Commercial and Creative Workplaces',
    subtitle: 'Purposeful environments designed to elevate human connection, productivity, and brand presence.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80',
    alt: 'Boutique architectural office studio with warm oak joinery and linen acoustic partitions',
    location: 'Mayfair Design Studio'
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'The Claymore Residence',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern residential interior living room with natural stone fireplace and warm oak floors',
    location: 'Kensington, London',
    year: '2025',
    description: 'Complete interior renovation focusing on open sightlines, custom oak millwork, and tactile limestone finishes.'
  },
  {
    id: 'proj-2',
    title: 'Aura Studio & Headquarters',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Executive commercial boardroom with natural linen textures and integrated indirect lighting',
    location: 'Fitzrovia, London',
    year: '2024',
    description: 'Adaptive workplace layout uniting collaboration lounges, acoustic focus pods, and biophilic light wells.'
  },
  {
    id: 'proj-3',
    title: 'Pavilion Garden Villa',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    alt: 'Seamless indoor outdoor living terrace with travertine flooring and minimalist pergola',
    location: 'Cotswolds',
    year: '2025',
    description: 'Harmonizing interior entertaining spaces with exterior garden courtyards through floor-to-ceiling pivot glass.'
  },
  {
    id: 'proj-4',
    title: 'Highgate Townhouse',
    category: 'Space Planning',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    alt: 'Restored historic townhouse living room with contemporary tailored furniture and warm neutral palette',
    location: 'Highgate, London',
    year: '2024',
    description: 'Restoration of historic ceiling heights paired with modern spatial zoning and bespoke storage.'
  }
];

export const ALL_PROJECTS: ProjectItem[] = [
  ...FEATURED_PROJECTS,
  {
    id: 'proj-5',
    title: 'The Mercer Penthouse',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Serene master bedroom suite featuring natural linen drapery and soft travertine textures',
    location: 'Chelsea, London',
    year: '2025',
    description: 'A sanctuary above the city with sound-dampening fluted walls, custom headboard joinery, and private dressing room.'
  },
  {
    id: 'proj-6',
    title: 'Solstice Wellness Club',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    alt: 'Warm minimal reception lounge with sculpted clay plaster walls and curved bench seating',
    location: 'Marylebone, London',
    year: '2024',
    description: 'Holistic interior architecture celebrating warm clay plaster, diffused lighting, and grounding organic textures.'
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

export const SERVICES: ServiceItem[] = [
  {
    id: 'service-space-planning',
    title: 'Space Planning & Layout Architecture',
    description: 'Analyzing flow, sightlines, and functional zones to maximize both utility and natural illumination.',
    scope: ['Circulation & Flow Analysis', 'Zoning & Furniture Layouts', 'Structural Openings Coordination', 'Technical Floor Plans']
  },
  {
    id: 'service-residential',
    title: 'Custom Residential Interiors',
    description: 'Curating warm, timeless residential environments tailored to your personal rhythms and comfort.',
    scope: ['Full Home Renovations', 'Bespoke Joinery & Millwork', 'Kitchen & Bath Architecture', 'Curated Lighting & Materials']
  },
  {
    id: 'service-commercial',
    title: 'Commercial & Workplace Design',
    description: 'Creating inspiring work environments that strengthen culture, productivity, and client impressions.',
    scope: ['Boutique Offices & Studios', 'Acoustic & Privacy Planning', 'Executive Suites & Boardrooms', 'Brand Identity Environments']
  },
  {
    id: 'service-turnkey',
    title: 'Turnkey Execution & Styling',
    description: 'Managing the entire process from concept through contractor coordination and final styling.',
    scope: ['Contractor Oversight', 'FF&E Procurement & Tracking', 'Art & Object Curation', 'White-Glove Installation']
  }
];
