export const SITE_NAME = 'TlhagoCare Services';
export const SITE_TAGLINE = 'Turning Land into Legacy';
export const SITE_DESCRIPTION = 'Premium landscaping and property maintenance services in Mafikeng, North West, South Africa';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tlhagocare.co.za';

export const CONTACT_INFO = {
  phone: '+27 65 257 6538',
  email: 'tlhagocareservice@gmail.com',
  location: 'Mafikeng, North West, South Africa',
  whatsapp: '+27652576538',
};

export const SOCIAL_MEDIA = {
  tiktok: 'https://www.tiktok.com/@tlhagocare?_r=1&_t=ZS-97TiFlJW04A',
  facebook: 'https://www.facebook.com/profile.php?id=61574266743187',
  youtube: 'https://youtube.com/@tlhagocareservices?si=vzo64nUemn_e8DPm',
  googleReview: 'https://g.page/r/CTE0wCiymmU2EBI/review',
};

export const SERVICES = [
  {
    id: 1,
    name: 'Lawn Mowing',
    description: 'Professional lawn mowing services to keep your grass pristine and healthy',
    icon: '🌱',
    slug: 'lawn-mowing',
  },
  {
    id: 2,
    name: 'Garden Maintenance',
    description: 'Regular garden upkeep and seasonal maintenance for year-round beauty',
    icon: '🌿',
    slug: 'garden-maintenance',
  },
  {
    id: 3,
    name: 'Landscaping',
    description: 'Custom landscape design and installation to transform your outdoor space',
    icon: '🏞️',
    slug: 'landscaping',
  },
  {
    id: 4,
    name: 'Tree Trimming',
    description: 'Expert tree and hedge trimming services for safety and aesthetics',
    icon: '🌳',
    slug: 'tree-trimming',
  },
  {
    id: 5,
    name: 'Bush Clearing',
    description: 'Professional clearing of overgrown bushes and dense vegetation',
    icon: '✂️',
    slug: 'bush-clearing',
  },
  {
    id: 6,
    name: 'Weed Control',
    description: 'Effective chemical and organic weed management solutions',
    icon: '🌾',
    slug: 'weed-control',
  },
  {
    id: 7,
    name: 'Irrigation Installation',
    description: 'Install and maintain efficient irrigation systems for water conservation',
    icon: '💧',
    slug: 'irrigation-installation',
  },
  {
    id: 8,
    name: 'Garden Clean-ups',
    description: 'Complete garden cleaning and debris removal services',
    icon: '🧹',
    slug: 'garden-cleanup',
  },
  {
    id: 9,
    name: 'Property Maintenance',
    description: 'Full-service property maintenance for residential and commercial properties',
    icon: '🏠',
    slug: 'property-maintenance',
  },
  {
    id: 10,
    name: 'Residential Services',
    description: 'Tailored landscaping solutions for homeowners',
    icon: '🏡',
    slug: 'residential-services',
  },
  {
    id: 11,
    name: 'Commercial Services',
    description: 'Large-scale landscaping operations for businesses',
    icon: '🏢',
    slug: 'commercial-services',
  },
  {
    id: 12,
    name: 'Municipal Contracts',
    description: 'Government and municipal project work expertise',
    icon: '🏛️',
    slug: 'municipal-contracts',
  },
];

export const PRICING = [
  {
    service: 'Lawn Mowing',
    startingFrom: 'R150',
    description: 'Per session',
  },
  {
    service: 'Garden Maintenance',
    startingFrom: 'R200',
    description: 'Per visit',
  },
  {
    service: 'Landscaping',
    startingFrom: 'R500',
    description: 'Project based',
  },
  {
    service: 'Tree Trimming',
    startingFrom: 'R250',
    description: 'Per tree',
  },
  {
    service: 'Weed Control',
    startingFrom: 'R100',
    description: 'Per session',
  },
  {
    service: 'Bush Clearing',
    startingFrom: 'R300',
    description: 'Per area',
  },
];

export const FAQ = [
  {
    question: 'How often should I have my lawn mowed?',
    answer: 'We recommend lawn mowing every 1-2 weeks during the growing season, depending on rainfall and grass type.',
  },
  {
    question: 'Do you offer seasonal services?',
    answer: 'Yes, we provide seasonal garden maintenance tailored to South African climate conditions.',
  },
  {
    question: 'Can you handle large commercial properties?',
    answer: 'Absolutely! We specialize in large-scale commercial and municipal projects.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, EFT, and cash payments. Invoicing available for corporate clients.',
  },
  {
    question: 'How do I request a free quote?',
    answer: 'Simply fill out our online quote form, call us, or message us on WhatsApp with your requirements.',
  },
  {
    question: 'Do you provide emergency services?',
    answer: 'Yes, we offer emergency bush clearing and storm damage services. Contact us for availability.',
  },
];
