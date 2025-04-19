'use client';

import { ReactNode } from 'react';
import { FaCode, FaMobileAlt, FaChartLine, FaLaptop, FaMobile, FaChartBar, FaUsers, FaShieldAlt, FaServer, FaDesktop, FaDatabase, FaRegWindowRestore } from 'react-icons/fa';
import IconWrapper from '@/components/IconWrapper';

// Define types for our case study data
export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Result {
  metric: string;
  before: string;
  after: string;
  increase: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  type: string;
  image: string;
  images?: string[];
  icon: ReactNode;
  color: string;
  link: string | null;
  client: string;
  duration?: string;
  year?: string;
  services: string[];
  challenge?: string;
  solution?: string;
  results?: Result[];
  testimonial?: Testimonial;
  features?: Feature[];
  relatedCaseStudies?: string[];
}

// Case study data
const caseStudies: CaseStudy[] = [
  {
    id: 'ics-courses',
    title: 'Sailing Course Website',
    description: 'Bespoke development and ongoing maintenance for a sailing course provider, built from scratch with custom wireframing and UI design.',
    longDescription: 'Built entirely from scratch, I worked directly with the client as a paid freelancer to wireframe every page, build the UI in Sketch and then develop the site utilising web languages including PHP, Javascript, HTML and CSS.',
    category: 'website',
    type: 'Live Site',
    image: '/media/case_studies/post-ics-1.jpg',
    images: ['/media/case_studies/post-ics-1.jpg'],
    icon: <IconWrapper className="text-xl"><FaCode /></IconWrapper>,
    color: 'brand-green',
    link: 'https://icscourses.co.uk',
    client: 'ICS Courses',
    services: ['Website', 'WordPress Website Design', 'Web Development'],
    features: [
      { 
        title: 'Custom Design',
        description: 'Fully customized design created from scratch based on client requirements.',
        icon: <IconWrapper className="text-xl"><FaDesktop /></IconWrapper>
      },
      { 
        title: 'Responsive Framework',
        description: 'Mobile-friendly design that works seamlessly across all devices.',
        icon: <IconWrapper className="text-xl"><FaMobile /></IconWrapper>
      },
      { 
        title: 'Content Management',
        description: 'Easy to use WordPress backend for client content updates.',
        icon: <IconWrapper className="text-xl"><FaDatabase /></IconWrapper>
      }
    ]
  },
  {
    id: 'pit-farm',
    title: 'Tennis Club Website',
    description: 'Bespoke development and ongoing maintenance for a tennis club, with continuous improvements spanning over a decade.',
    longDescription: 'Developed the bespoke site from scratch, and have been made regular improvements to the site for 10 years.',
    category: 'website',
    type: 'Live Site',
    image: '/media/case_studies/post-pit_farm_tennis-2.jpg',
    images: ['/media/case_studies/post-pit_farm_tennis-2.jpg'],
    icon: <IconWrapper className="text-xl"><FaCode /></IconWrapper>,
    color: 'brand-green',
    link: 'https://pitfarmtennis.co.uk',
    client: 'Pit Farm Tennis Club',
    services: ['Website', 'Web Development', 'WordPress', 'WordPress Website'],
    features: [
      { 
        title: 'Long-term Partnership',
        description: 'Continuous improvements and maintenance over 10 years.',
        icon: <IconWrapper className="text-xl"><FaUsers /></IconWrapper>
      },
      { 
        title: 'Content Management',
        description: 'Custom WordPress integration for easy content updates.',
        icon: <IconWrapper className="text-xl"><FaDatabase /></IconWrapper>
      },
      { 
        title: 'Responsive Design',
        description: 'Mobile-friendly layout that works on all devices.',
        icon: <IconWrapper className="text-xl"><FaMobile /></IconWrapper>
      }
    ]
  },
  {
    id: 'intro-app',
    title: 'B2B App',
    description: 'React Native app development with team management, now used by over 150 businesses for B2B connections.',
    longDescription: 'Built JS React Native app before hiring and managing a team to help further develop and market Intro. Used by over 150 businesses.',
    category: 'app',
    type: 'Live Site',
    image: '/media/case_studies/post-intro-1.jpg',
    images: ['/media/case_studies/post-intro-1.jpg', '/media/case_studies/post-intro-4.jpg'],
    icon: <IconWrapper className="text-xl"><FaMobileAlt /></IconWrapper>,
    color: 'teal',
    link: null,
    client: 'Intro',
    services: ['React Native', 'App Design', 'App Development', 'B2B Marketing', 'Application'],
    features: [
      { 
        title: 'Cross-platform Development',
        description: 'Built with React Native for iOS and Android compatibility.',
        icon: <IconWrapper className="text-xl"><FaMobile /></IconWrapper>
      },
      { 
        title: 'B2B Focus',
        description: 'Specialized features to support business-to-business connections.',
        icon: <IconWrapper className="text-xl"><FaUsers /></IconWrapper>
      },
      { 
        title: 'Team Leadership',
        description: 'Managed development team for ongoing improvements.',
        icon: <IconWrapper className="text-xl"><FaUsers /></IconWrapper>
      }
    ]
  },
  {
    id: 'will-this-happen',
    title: 'Prediction Web App',
    description: 'Node.js and AWS-powered political probability service with custom UX design and development.',
    longDescription: 'Developed code and designed UX for the Node.js and AWS-powered political probability service.',
    category: 'webapp',
    type: 'Live Site',
    image: '/media/case_studies/post-willthishappen-2.jpg',
    images: ['/media/case_studies/post-willthishappen-2.jpg'],
    icon: <IconWrapper className="text-xl"><FaRegWindowRestore /></IconWrapper>,
    color: 'brand-green',
    link: null,
    client: 'Will This Happen',
    services: ['Web Application', 'Node.js', 'AWS Lambda', 'Amazon Web Services'],
    features: [
      { 
        title: 'Cloud Architecture',
        description: 'Built on AWS for scalability and reliability.',
        icon: <IconWrapper className="text-xl"><FaServer /></IconWrapper>
      },
      { 
        title: 'Node.js Backend',
        description: 'Modern JavaScript backend for efficient processing.',
        icon: <IconWrapper className="text-xl"><FaCode /></IconWrapper>
      },
      { 
        title: 'Custom UX Design',
        description: 'Intuitive user experience for complex probability data.',
        icon: <IconWrapper className="text-xl"><FaDesktop /></IconWrapper>
      }
    ]
  },
  {
    id: 'today-app',
    title: 'To-Do App',
    description: 'Complete design and development of a unique task management app built with Flutter and Firebase for iOS and Android.',
    longDescription: 'Carried out the complete design and development of Today, a unique iOS and Android app designed to improve task/to-do management. Built from scratch using Flutter and Firebase.',
    category: 'app',
    type: 'Live Site',
    image: '/media/case_studies/post-today-1.jpg',
    images: ['/media/case_studies/post-today-1.jpg'],
    icon: <IconWrapper className="text-xl"><FaMobileAlt /></IconWrapper>,
    color: 'teal',
    link: 'https://thetoday.app',
    client: 'Today',
    services: ['App Design', 'App Development', 'Flutter', 'iOS Development', 'Android App Development'],
    features: [
      { 
        title: 'Cross-platform Development',
        description: 'Built with Flutter for seamless iOS and Android experience.',
        icon: <IconWrapper className="text-xl"><FaMobile /></IconWrapper>
      },
      { 
        title: 'Real-time Database',
        description: 'Firebase integration for reliable data storage and sync.',
        icon: <IconWrapper className="text-xl"><FaDatabase /></IconWrapper>
      },
      { 
        title: 'Custom UI/UX',
        description: 'Unique design focused on improving task management workflows.',
        icon: <IconWrapper className="text-xl"><FaDesktop /></IconWrapper>
      }
    ]
  },
  {
    id: 'eu-ref',
    title: 'Election Support Web App',
    description: 'UI/UX design for an independent, impartial voter support website for the EU referendum.',
    longDescription: 'Worked in a small team to develop the concept and structure for an independent, impartial voter support website for the EU referendum. Went on to develop initial graphical designs for the site.',
    category: 'webapp',
    type: 'Live Site',
    image: '/media/case_studies/post-eu_ref-1.png',
    images: [
      '/media/case_studies/post-eu_ref-1.png', 
      '/media/case_studies/post-eu_ref-2.png', 
      '/media/case_studies/post-eu_ref-3.png'
    ],
    icon: <IconWrapper className="text-xl"><FaRegWindowRestore /></IconWrapper>,
    color: 'brand-green',
    link: null,
    client: 'EU Referendum Support',
    services: ['Web Application', 'UX & UI', 'UX & UI Design', 'UX Research'],
    features: [
      { 
        title: 'Impartial Information',
        description: 'Carefully balanced content to provide unbiased voter information.',
        icon: <IconWrapper className="text-xl"><FaUsers /></IconWrapper>
      },
      { 
        title: 'User Research',
        description: 'Evidence-based design informed by voter needs.',
        icon: <IconWrapper className="text-xl"><FaChartBar /></IconWrapper>
      },
      { 
        title: 'Visual Design',
        description: 'Clean, accessible graphical design for complex information.',
        icon: <IconWrapper className="text-xl"><FaDesktop /></IconWrapper>
      }
    ]
  },
  {
    id: 'ee-society',
    title: 'Society Website',
    description: 'Unique, graphically-focused university society website designed and developed from scratch.',
    longDescription: 'Designed and developed a unique, graphical focused university society website from scratch.',
    category: 'website',
    type: 'Live Site',
    image: '/media/case_studies/post-ee_site-1.jpg',
    images: [
      '/media/case_studies/post-ee_site-1.jpg', 
      '/media/case_studies/post-ee_site-2.png'
    ],
    icon: <IconWrapper className="text-xl"><FaCode /></IconWrapper>,
    color: 'brand-green',
    link: null,
    client: 'University Society',
    services: ['HTML', 'CSS', 'JavaScript', 'Web Design', 'Web Development'],
    features: [
      { 
        title: 'Visual Focus',
        description: 'Graphically rich design to showcase society activities.',
        icon: <IconWrapper className="text-xl"><FaDesktop /></IconWrapper>
      },
      { 
        title: 'Custom Development',
        description: 'Built from scratch with HTML, CSS, and JavaScript.',
        icon: <IconWrapper className="text-xl"><FaCode /></IconWrapper>
      },
      { 
        title: 'Responsive Design',
        description: 'Mobile-friendly layout for student access on any device.',
        icon: <IconWrapper className="text-xl"><FaMobile /></IconWrapper>
      }
    ]
  },
  {
    id: 'orchestra',
    title: 'Orchestra Website',
    description: 'Tailor-made site developed from a basic responsive framework, with ongoing maintenance and updates.',
    longDescription: 'Created a new, tailor-made site from a basic responsive framework. I continued to maintain and update the site, most recently adding a Competition page. Client described my work as "efficient and impressive".',
    category: 'website',
    type: 'Live Site',
    image: '/media/case_studies/post-spm-1.jpg',
    images: [
      '/media/case_studies/post-spm-1.jpg', 
      '/media/case_studies/post-spm-3.jpg'
    ],
    icon: <IconWrapper className="text-xl"><FaCode /></IconWrapper>,
    color: 'brand-green',
    link: null,
    client: 'Orchestra',
    services: ['Website', 'Web Design', 'HTML', 'CSS', 'jQuery'],
    testimonial: {
      quote: "Efficient and impressive",
      author: "Client",
      title: "Orchestra Director"
    },
    features: [
      { 
        title: 'Framework-based',
        description: 'Built upon a responsive framework for reliability.',
        icon: <IconWrapper className="text-xl"><FaLaptop /></IconWrapper>
      },
      { 
        title: 'Ongoing Updates',
        description: 'Regular maintenance and feature additions over time.',
        icon: <IconWrapper className="text-xl"><FaServer /></IconWrapper>
      },
      { 
        title: 'Client Satisfaction',
        description: 'Work described as "efficient and impressive" by the client.',
        icon: <IconWrapper className="text-xl"><FaUsers /></IconWrapper>
      }
    ]
  }
];

// Helper function to filter case studies
export const getCaseStudies = (filter?: string) => {
  if (!filter || filter === 'all') return caseStudies;
  if (filter === 'live') return caseStudies.filter(study => study.type === 'Live Site');
  if (filter === 'portfolio') return caseStudies.filter(study => study.type === 'Portfolio');
  return caseStudies.filter(study => study.category === filter);
};

// Helper function to get a single case study by ID
export const getCaseStudyById = (id: string) => {
  return caseStudies.find(study => study.id === id) || null;
};

// Helper function to get related case studies
export const getRelatedCaseStudies = (id: string, limit = 2) => {
  const study = getCaseStudyById(id);
  if (!study) return [];
  
  // If study has specified related studies, use those
  if (study.relatedCaseStudies && study.relatedCaseStudies.length > 0) {
    return study.relatedCaseStudies
      .map(relatedId => getCaseStudyById(relatedId))
      .filter(Boolean) as CaseStudy[];
  }
  
  // Otherwise, find studies in the same category
  return caseStudies
    .filter(s => s.id !== id && s.category === study.category)
    .slice(0, limit);
};

export default caseStudies; 