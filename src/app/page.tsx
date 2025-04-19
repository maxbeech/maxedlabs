'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaArrowRight, FaCode, FaMobileAlt, FaChartLine, FaDatabase, FaRocket, FaMagic } from 'react-icons/fa';

// Components for animations
type FadeInSectionProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

const FadeInSection = ({ children, delay = 0, className = '' }: FadeInSectionProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Services data
const services = [
  {
    title: 'Website Development',
    description: 'Custom, responsive, and fast-loading websites built with modern technologies and best practices.',
    icon: <FaCode className="text-2xl" />,
    href: '/services/website-development',
    color: 'brand-green',
  },
  {
    title: 'App Development',
    description: 'Native and cross-platform mobile applications designed for performance and user experience.',
    icon: <FaMobileAlt className="text-2xl" />,
    href: '/services/app-development',
    color: 'teal',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that increase traffic, conversions, and sales.',
    icon: <FaChartLine className="text-2xl" />,
    href: '/services/digital-marketing',
    color: 'magenta',
  }
];

// Case studies data
const caseStudies = [
  {
    title: 'TechFusion Redesign',
    description: 'Complete website redesign for a tech startup with 43% increase in conversion rate.',
    icon: <FaRocket className="text-3xl" />,
    href: '/case-studies/techfusion',
    type: 'Live Site',
    color: 'from-brand-green to-teal',
  },
  {
    title: 'GreenLeaf Mobile App',
    description: 'Native iOS and Android app development for a sustainability-focused business.',
    icon: <FaMobileAlt className="text-3xl" />,
    href: '/case-studies/greenleaf',
    type: 'Portfolio',
    color: 'from-teal to-magenta',
  },
  {
    title: 'FitConnect Marketing Campaign',
    description: 'Multi-channel digital marketing strategy resulting in 78% growth in organic traffic.',
    icon: <FaChartLine className="text-3xl" />,
    href: '/case-studies/fitconnect',
    type: 'Live Site',
    color: 'from-magenta to-brand-green',
  }
];

export default function HomePage() {
  // Refs for smooth scrolling
  const servicesRef = useRef<HTMLElement>(null);
  const caseStudiesRef = useRef<HTMLElement>(null);
  const athenicRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-charcoal text-white">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Abstract background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute w-1/2 h-1/2 bg-gradient-conic animate-rotate rounded-full blur-3xl" style={{top: '10%', left: '60%'}}></div>
            <div className="absolute w-1/3 h-1/3 bg-gradient-conic animate-rotate rounded-full blur-3xl" style={{top: '60%', left: '10%'}}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-24 pb-20 md:pt-32 md:pb-24">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-3/5 lg:w-1/2 mb-12 md:mb-0 md:pr-12">
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                Your Digital Growth, <span className="text-brand-green">Maxed</span> by AI
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                We maximize business sales through cutting‑edge digital solutions, combining AI-powered website development, app development, and data-driven marketing.
              </motion.p>
              
              <motion.div
                className="flex flex-wrap gap-4 md:gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href="/contact" className="btn-primary">
                  Get Started
                  <FaArrowRight className="ml-2" />
                </Link>
                <button onClick={() => scrollToSection(servicesRef)} className="btn-secondary">
                  Explore Services
                </button>
              </motion.div>
              
              <motion.div 
                className="mt-12 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-charcoal bg-gray-${200 + (i * 100)}`}></div>
                  ))}
                </div>
                <div className="ml-4">
                  <p className="font-medium">Trusted by businesses</p>
                  <div className="flex items-center text-yellow-400">
                    <span>★★★★★</span>
                    <span className="ml-1 text-sm text-gray-400">(30+ Reviews)</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-2/5 lg:w-1/2 relative">
              <motion.div
                className="gradient-border p-0.5 rounded-xl relative z-10 overflow-hidden"
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="bg-charcoal p-4 rounded-xl overflow-hidden">
                  {/* Replace image with stylized dashboard UI mockup */}
                  <div className="w-full aspect-[4/3] relative overflow-hidden rounded-lg bg-gradient-to-br from-brand-blue to-charcoal p-4 flex flex-col">
                    <motion.div
                      className="w-full h-full absolute inset-0 bg-gradient-primary opacity-20"
                      animate={{ 
                        background: [
                          'linear-gradient(45deg, rgba(130, 208, 155, 0.2) 0%, rgba(63, 191, 192, 0.2) 100%)',
                          'linear-gradient(45deg, rgba(63, 191, 192, 0.2) 0%, rgba(211, 69, 187, 0.2) 100%)',
                          'linear-gradient(45deg, rgba(211, 69, 187, 0.2) 0%, rgba(130, 208, 155, 0.2) 100%)'
                        ]
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    />
                    
                    {/* Dashboard mockup elements */}
                    <div className="flex justify-between items-center mb-4 relative z-10">
                      <div className="bg-brand-green/20 p-1.5 rounded-md w-24"></div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-brand-green"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 mb-4 relative z-10">
                      <div className="w-1/3">
                        <div className="h-20 bg-white/5 rounded-lg mb-2"></div>
                        <div className="h-2 w-12 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="w-1/3">
                        <div className="h-20 bg-white/5 rounded-lg mb-2"></div>
                        <div className="h-2 w-12 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="w-1/3">
                        <div className="h-20 bg-white/5 rounded-lg mb-2"></div>
                        <div className="h-2 w-12 bg-white/20 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="h-24 bg-white/5 rounded-lg mb-4 relative z-10"></div>
                    
                    <div className="mt-auto grid grid-cols-4 gap-2 relative z-10">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-2 bg-brand-green/20 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold">Athenic Dashboard</h3>
                      <p className="text-sm text-gray-400">AI-powered analytics and content management</p>
                    </div>
                    <button 
                      onClick={() => scrollToSection(athenicRef)}
                      className="bg-brand-green/10 hover:bg-brand-green/20 text-brand-green p-2 rounded-full transition-colors duration-300"
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
              
              <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 hidden lg:block z-20">
                <motion.div
                  className="w-32 h-32 rounded-xl glass overflow-hidden shadow-glow p-4 flex flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="text-3xl font-bold text-brand-green">24/7</div>
                  <p className="text-xs mt-1">AI-Powered Updates & Improvements</p>
                </motion.div>
              </div>
              
              <div className="absolute -bottom-10 -left-10 hidden lg:block z-20">
                <motion.div
                  className="glass p-3 rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm">Automated updates running</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              onClick={() => scrollToSection(servicesRef)}
              className="flex flex-col items-center text-gray-400 hover:text-brand-green transition-colors"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section ref={servicesRef} className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Our <span className="text-brand-green">Services</span>
                </h2>
                <p className="text-gray-400 max-w-xl">
                  Maximize your business potential with our comprehensive suite of digital services, 
                  all supercharged with Athenic AI technology.
                </p>
              </div>
              <Link href="/services" className="inline-flex items-center mt-6 md:mt-0 text-brand-green hover:text-white transition-colors">
                <span className="custom-underline">View all services</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={service.title} delay={0.2 * (index + 1)}>
                <div className="relative gradient-border p-0.5 rounded-xl h-full">
                  <div className="bg-brand-blue rounded-xl p-8 h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-lg bg-${service.color}/20 flex items-center justify-center mb-6`}>
                      <span className={`text-${service.color}`}>
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6 flex-grow">{service.description}</p>
                    <Link 
                      href={service.href}
                      className="inline-flex items-center text-brand-green hover:text-white transition-colors mt-auto"
                    >
                      <span className="custom-underline">Learn more</span>
                      <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Athenic AI Section */}
      <section ref={athenicRef} className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full opacity-10">
            <div className="absolute w-1/2 h-1/2 bg-gradient-conic animate-rotate rounded-full blur-3xl" style={{top: '20%', right: '10%'}}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <FadeInSection className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <div className="inline-block mb-6 bg-brand-green/10 px-4 py-2 rounded-full">
                <span className="text-brand-green font-medium">Powered by Athenic AI</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Automated Updates & Content Creation
              </h2>
              <p className="text-gray-300 mb-8">
                Experience instant website changes with our Athenic AI platform. Request any modification—big or small—and 
                get results in seconds, not days. Our AI even proactively suggests improvements to keep your site 
                performing at its best.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-brand-green/20 p-2 rounded-md mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="#82D09B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Instant Updates</h4>
                    <p className="text-sm text-gray-400">Request any change and see results in seconds</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-green/20 p-2 rounded-md mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="#82D09B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Proactive Suggestions</h4>
                    <p className="text-sm text-gray-400">AI-generated blog posts and conversion optimizations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-green/20 p-2 rounded-md mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="#82D09B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Human Support</h4>
                    <p className="text-sm text-gray-400">Engineering team ready to step in when needed</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-green/20 p-2 rounded-md mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="#82D09B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Affordable Plan</h4>
                    <p className="text-sm text-gray-400">Unlimited changes for just $49/month</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/athenic-ai" className="btn-primary">
                  Learn about Athenic
                  <FaArrowRight className="ml-2" />
                </Link>
                <a href="https://getathenic.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  Visit Athenic Website
                </a>
              </div>
            </FadeInSection>
            
            <FadeInSection className="lg:w-1/2" delay={0.3}>
              <div className="relative">
                <div className="gradient-border p-0.5 rounded-xl overflow-hidden">
                  <div className="bg-charcoal rounded-xl overflow-hidden">
                    {/* AI Chat Interface Mockup */}
                    <div className="w-full aspect-[16/10] bg-gradient-to-r from-brand-blue to-dark-blue flex flex-col">
                      {/* Chat header */}
                      <div className="bg-white/10 backdrop-blur-md p-4 flex justify-between items-center border-b border-white/10">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-md bg-gradient-primary flex items-center justify-center">
                            <span className="text-white font-bold">A</span>
                          </div>
                          <span className="text-white font-medium">Athenic</span>
                        </div>
                        <div className="flex space-x-4">
                          <span className="text-white">Dashboard</span>
                          <span className="text-white">Messages</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                      </div>
                      
                      {/* Chat messages */}
                      <div className="flex-1 p-6 overflow-y-auto flex flex-col space-y-6">
                        {/* User Message - first (top) */}
                        <div className="max-w-[80%] bg-indigo-500 text-white p-6 rounded-xl self-end">
                          <p className="text-white">I need a new case studies page that showcases our recent projects.</p>
                        </div>
                        
                        {/* AI Message - second (bottom) */}
                        <div className="max-w-[80%] bg-white/10 backdrop-blur-sm p-6 rounded-xl self-start">
                          <p className="text-white mb-4">I've created a new case studies page with all your recent projects. You can preview it here:</p>
                          <a href="#" className="text-brand-green underline">https://example.com/case-studies</a>
                        </div>
                      </div>
                      
                      {/* Chat input */}
                      <div className="p-4 bg-white/5 backdrop-blur-sm border-t border-white/10 flex">
                        <input 
                          type="text" 
                          placeholder="Type a message..." 
                          className="flex-1 bg-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none"
                          readOnly
                        />
                        <button className="ml-3 px-6 py-3 bg-brand-green text-charcoal rounded-lg font-medium">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section ref={caseStudiesRef} className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Case <span className="text-brand-green">Studies</span>
                </h2>
                <p className="text-gray-400 max-w-xl">
                  Explore how we've helped businesses achieve their digital goals
                  with our AI-powered solutions.
                </p>
              </div>
              <Link href="/case-studies" className="inline-flex items-center mt-6 md:mt-0 text-brand-green hover:text-white transition-colors">
                <span className="custom-underline">View all case studies</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <FadeInSection key={study.title} delay={0.2 * (index + 1)}>
                <Link href={study.href} className="block h-full transform transition-transform duration-500 hover:-translate-y-2">
                  <div className="gradient-border p-0.5 rounded-xl h-full">
                    <div className="bg-brand-blue rounded-xl h-full overflow-hidden flex flex-col">
                      {/* Replace image with gradient background and icon */}
                      <div className="relative">
                        <div className="w-full aspect-[4/3] relative bg-gradient-to-r flex items-center justify-center p-6" style={{backgroundImage: `linear-gradient(to right, var(--${study.color.split(' ')[0].substring(5)}), var(--${study.color.split(' ')[1].substring(3)}))`}}>
                          <div className="absolute top-4 left-4">
                            <span className={`text-xs font-medium px-3 py-1 rounded-full ${study.type === 'Live Site' ? 'bg-green-500/80' : 'bg-blue-500/80'}`}>
                              {study.type}
                            </span>
                          </div>
                          <div className="text-white opacity-90">
                            {study.icon}
                          </div>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                        <p className="text-gray-300 mb-4 flex-grow">{study.description}</p>
                        <div className="inline-flex items-center text-brand-green mt-auto">
                          <span className="custom-underline">View case study</span>
                          <FaArrowRight className="ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section Teaser */}
      <section className="py-24 md:py-32 bg-brand-blue/50">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Simple, <span className="text-brand-green">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a bespoke website at no upfront cost, with all updates and hosting for just £49/month.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link href="/pricing" className="btn-primary">
                See Pricing Details
                <FaArrowRight className="ml-2" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Request a Demo
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-0 w-full h-full opacity-10">
            <div className="absolute w-1/2 h-1/2 bg-gradient-conic animate-rotate rounded-full blur-3xl" style={{bottom: '10%', left: '10%'}}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection className="max-w-4xl mx-auto">
            <div className="gradient-border p-1 rounded-2xl overflow-hidden">
              <div className="bg-brand-blue rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to <span className="text-brand-green">Maximize</span> Your Digital Potential?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let our AI-powered solutions take your business to new heights. 
                  Schedule a consultation to see how we can help you grow.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/contact" className="btn-primary">
                    Get Started Now
                    <FaArrowRight className="ml-2" />
                  </Link>
                  <Link href="/case-studies" className="btn-secondary">
                    See More Examples
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
} 