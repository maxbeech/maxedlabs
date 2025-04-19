'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaCode, FaMobileAlt, FaChartLine, FaExternalLinkAlt, FaLaptop, FaMobile, FaChartBar, FaUsers, FaShieldAlt, FaServer } from 'react-icons/fa';
import { ReactNode } from 'react';

// Define types for our case study data
interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

interface Result {
  metric: string;
  before: string;
  after: string;
  increase: string;
}

interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  type: string;
  image: string;
  icon: ReactNode;
  color: string;
  link: string | null;
  client: string;
  duration: string;
  year: string;
  services: string[];
  challenge: string;
  solution: string;
  results: Result[];
  testimonial: Testimonial;
  features: Feature[];
  relatedCaseStudies: string[];
}

// Case study data - in a real app, this would come from a CMS or API
const caseStudies: CaseStudy[] = [
  {
    id: 'techfusion',
    title: 'TechFusion Redesign',
    description: 'A complete website redesign for a tech startup that increased conversions by 43% and improved user engagement metrics across the board.',
    longDescription: 'TechFusion came to us with an outdated website that wasn&apos;t converting visitors into customers. Through a comprehensive redesign focused on user experience, modern aesthetics, and performance optimization, we transformed their digital presence and helped them achieve their business goals.',
    category: 'website',
    type: 'Live Site',
    image: '/media/case-study-1.jpg',
    icon: <FaCode className="text-xl" />,
    color: 'brand-green',
    link: 'https://techfusion-example.com',
    client: 'TechFusion Inc.',
    duration: '12 weeks',
    year: '2023',
    services: ['Web Design', 'UX/UI', 'Frontend Development', 'CMS Integration', 'SEO'],
    challenge: 'TechFusion faced challenges with an outdated website that had poor navigation, slow load times, and lacked mobile optimization. Their conversion rate was significantly below industry average, and they weren\'t effectively communicating their value proposition.',
    solution: 'We implemented a complete redesign based on extensive user research and competitive analysis. The new design features intuitive navigation, responsive layouts, and strategic placement of calls-to-action. We optimized the site for speed and implemented a modern tech stack including Next.js, ensuring flexibility and scalability.',
    results: [
      { metric: 'Conversion Rate', before: '1.8%', after: '4.3%', increase: '139%' },
      { metric: 'Page Load Time', before: '4.2s', after: '0.9s', increase: '79%' },
      { metric: 'Mobile Traffic', before: '22%', after: '48%', increase: '118%' },
      { metric: 'Average Session Duration', before: '1:25', after: '3:42', increase: '164%' }
    ],
    testimonial: {
      quote: "MaxedLabs transformed our online presence completely. The new website not only looks beautiful but has dramatically improved our conversion rates and helped us reach more customers.",
      author: "Sarah Chen",
      title: "CMO, TechFusion Inc."
    },
    features: [
      { 
        title: 'Responsive Design',
        description: 'Fully responsive design that works flawlessly across all devices and screen sizes.',
        icon: <FaLaptop className="text-xl" />
      },
      { 
        title: 'Mobile Optimization',
        description: 'Specifically optimized for mobile users, ensuring a seamless experience on smartphones and tablets.',
        icon: <FaMobile className="text-xl" />
      },
      { 
        title: 'Performance',
        description: 'Lightning-fast load times and optimized assets for the best possible user experience.',
        icon: <FaChartBar className="text-xl" />
      },
      { 
        title: 'User Experience',
        description: 'Intuitive navigation and clear user journeys designed to guide visitors towards conversion.',
        icon: <FaUsers className="text-xl" />
      },
      { 
        title: 'Security',
        description: 'Built with modern security best practices to protect both the site and its users.',
        icon: <FaShieldAlt className="text-xl" />
      },
      { 
        title: 'Scalable Infrastructure',
        description: 'Backend architecture designed for growth, ensuring the site can handle increased traffic.',
        icon: <FaServer className="text-xl" />
      }
    ],
    relatedCaseStudies: ['alpine', 'fitconnect']
  },
  {
    id: 'greenleaf',
    title: 'GreenLeaf Mobile App',
    description: 'Native iOS and Android app development for a sustainability-focused business that streamlined customer interactions and boosted retention.',
    longDescription: 'GreenLeaf, a sustainable products marketplace, needed a mobile app to enhance customer experience and facilitate eco-friendly shopping. We developed a feature-rich native application that aligned with their brand values while delivering exceptional functionality.',
    category: 'app',
    type: 'Portfolio',
    image: '/media/case-study-2.jpg',
    icon: <FaMobileAlt className="text-xl" />,
    color: 'teal',
    link: null,
    client: 'GreenLeaf Eco Products',
    duration: '16 weeks',
    year: '2023',
    services: ['Mobile App Development', 'UX/UI Design', 'API Integration', 'Backend Development'],
    challenge: 'GreenLeaf wanted to increase customer engagement and make sustainable shopping more convenient for their users. They needed a mobile app that would showcase their eco-friendly products, provide educational content about sustainability, and simplify the purchasing process.',
    solution: 'We developed native iOS and Android applications with a focus on user experience and brand consistency. The app includes features like product scanning, carbon footprint tracking, and personalized recommendations based on user preferences and purchase history.',
    results: [
      { metric: 'App Downloads', before: '0', after: '45,000+', increase: '100%' },
      { metric: 'Customer Retention', before: '62%', after: '78%', increase: '26%' },
      { metric: 'Average Order Value', before: '$42', after: '$68', increase: '62%' },
      { metric: 'Time Spent in App', before: '0', after: '8.5 min/session', increase: '100%' }
    ],
    testimonial: {
      quote: "The app developed by MaxedLabs has transformed how our customers interact with our brand. The intuitive interface and innovative features have significantly boosted our sales and customer loyalty.",
      author: "Michael Green",
      title: "Founder, GreenLeaf Eco Products"
    },
    features: [
      { 
        title: 'Product Scanner',
        description: 'Scan any product barcode to instantly check its sustainability rating and alternative options.',
        icon: <FaMobile className="text-xl" />
      },
      { 
        title: 'Carbon Footprint Tracker',
        description: 'Helps users track the environmental impact of their purchases and lifestyle choices.',
        icon: <FaChartBar className="text-xl" />
      },
      { 
        title: 'Personalized Recommendations',
        description: 'AI-powered product suggestions based on user preferences and purchase history.',
        icon: <FaUsers className="text-xl" />
      },
      { 
        title: 'Secure Checkout',
        description: 'Streamlined, secure purchasing process with multiple payment options.',
        icon: <FaShieldAlt className="text-xl" />
      },
      { 
        title: 'Offline Functionality',
        description: 'Key features available even when users are offline or have limited connectivity.',
        icon: <FaServer className="text-xl" />
      },
      { 
        title: 'Educational Content',
        description: 'Articles, videos, and tips about sustainable living integrated into the user experience.',
        icon: <FaLaptop className="text-xl" />
      }
    ],
    relatedCaseStudies: ['travelbuddy', 'fitconnect']
  },
  // Additional case studies would be defined here
];

// Color map for Tailwind classes with proper typing
const colorMap: Record<string, string> = {
  'brand-green': 'text-green-500',
  'teal': 'text-teal-500',
  'magenta': 'text-magenta',
  // Add other colors as needed
};

export default function CaseStudyPage() {
  const params = useParams();
  const router = useRouter();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (params.id) {
      // Find the case study with the matching ID
      const study = caseStudies.find(study => study.id === params.id);
      
      if (study) {
        setCaseStudy(study);
      } else {
        // If no matching case study is found, redirect to the case studies index
        router.push('/case-studies');
      }
      
      setLoading(false);
    }
  }, [params.id, router]);
  
  if (loading) {
    return (
      <div className="bg-charcoal text-white min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-green"></div>
      </div>
    );
  }
  
  if (!caseStudy) {
    return null;
  }
  
  // Get related case studies
  const relatedStudies = caseStudy.relatedCaseStudies 
    ? caseStudies.filter(study => caseStudy.relatedCaseStudies.includes(study.id)) 
    : [];
  
  return (
    <div className="bg-charcoal text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute w-1/2 h-1/2 bg-gradient-conic animate-rotate rounded-full blur-3xl" style={{top: '10%', left: '60%'}}></div>
            <div className="absolute w-1/3 h-1/3 bg-gradient-conic animate-rotate rounded-full blur-3xl" style={{top: '60%', left: '10%'}}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/case-studies" className="inline-flex items-center text-gray-400 hover:text-brand-green mb-8 transition-colors">
            <FaArrowLeft className="mr-2" />
            Back to all case studies
          </Link>
          
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-2/3"
            >
              <div className="flex items-center mb-4">
                <span className={`mr-2 ${colorMap[caseStudy.color] || 'text-white'}`}>
                  {caseStudy.icon}
                </span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  caseStudy.type === 'Live Site' 
                    ? 'bg-blue-500/20 text-blue-300' 
                    : 'bg-purple-500/20 text-purple-300'
                }`}>
                  {caseStudy.type}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {caseStudy.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {caseStudy.longDescription}
              </p>
              
              {caseStudy.link && (
                <a 
                  href={caseStudy.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary inline-flex items-center"
                >
                  Visit Live Site
                  <FaExternalLinkAlt className="ml-2" />
                </a>
              )}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/3"
            >
              <div className="gradient-border p-0.5 rounded-xl overflow-hidden">
                <div className="bg-charcoal-light rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-400">Client</p>
                      <p className="font-medium">{caseStudy.client}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-400">Duration</p>
                      <p className="font-medium">{caseStudy.duration}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-400">Year</p>
                      <p className="font-medium">{caseStudy.year}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-400">Services</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {caseStudy.services.map((service: string, index: number) => (
                          <span key={index} className="text-xs bg-charcoal rounded-full px-3 py-1">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Challenge & Solution Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-gray-300">{caseStudy.challenge}</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-gray-300">{caseStudy.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 bg-charcoal-light relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Results
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.results.map((result, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-charcoal rounded-xl p-6 text-center"
              >
                <p className="text-gray-400 mb-2">{result.metric}</p>
                <div className="flex justify-center items-baseline gap-4 mb-2">
                  <p className="text-red-400 line-through text-lg">{result.before}</p>
                  <p className="text-green-400 text-3xl font-bold">{result.after}</p>
                </div>
                <p className="text-brand-green font-medium">
                  +{result.increase} Improvement
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Key Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-charcoal-light rounded-xl p-6"
              >
                <div className={`mb-4 text-2xl ${colorMap[caseStudy.color] || 'text-white'}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      {caseStudy.testimonial && (
        <section className="py-16 bg-gradient-to-r from-charcoal-light to-charcoal relative">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl text-brand-green mb-6">"</div>
              <p className="text-xl md:text-2xl italic mb-6">
                {caseStudy.testimonial.quote}
              </p>
              <p className="font-medium">{caseStudy.testimonial.author}</p>
              <p className="text-gray-400">{caseStudy.testimonial.title}</p>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Related Projects
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <Link href={`/case-studies/${study.id}`}>
                    <div className="gradient-border p-0.5 rounded-xl overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02]">
                      <div className="bg-charcoal-light rounded-xl overflow-hidden">
                        <div className="relative aspect-video w-full overflow-hidden">
                          {/* Project image would be here in production */}
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-charcoal opacity-80"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-60"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`text-6xl ${colorMap[study.color] || 'text-white'}`}>
                              {study.icon}
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-bold">{study.title}</h3>
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                              study.type === 'Live Site' 
                                ? 'bg-blue-500/20 text-blue-300' 
                                : 'bg-purple-500/20 text-purple-300'
                            }`}>
                              {study.type}
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm mb-4">{study.description}</p>
                          <div className={`flex items-center ${colorMap[study.color] || 'text-white'}`}>
                            <span className="mr-2">View Details</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Create Your <span className="text-brand-green">Success Story</span>?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let&apos;s discuss how we can help your business achieve similar results with our AI-powered solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/contact" className="btn-primary">
                Start Your Project
                <FaArrowRight className="ml-2" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 