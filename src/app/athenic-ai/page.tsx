'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight, FaRobot, FaCode, FaPencilAlt, FaChartLine, FaMagic, FaBrain, FaRocket, FaSyncAlt, FaHashtag, FaShoppingBag, FaAd } from 'react-icons/fa';

export default function AthenisAIPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  // Athenic AI capabilities
  const capabilities = [
    {
      title: 'AI-Powered Website Updates',
      description: 'Athenic AI can make any change to your website, from minor text edits to major redesigns, all with a simple request.',
      icon: <FaCode className="text-3xl" />,
      features: [
        'Text and content updates',
        'Design changes and styling',
        'New page creation',
        'Feature implementation',
        'Media and asset management',
        'Responsive design adjustments'
      ]
    },
    {
      title: 'Automated Content Creation',
      description: 'Generate high-quality, SEO-optimized content for your website, blog, and marketing channels.',
      icon: <FaPencilAlt className="text-3xl" />,
      features: [
        'Blog posts and articles',
        'Product descriptions',
        'Landing page copy',
        'Email newsletters',
        'Social media content',
        'SEO metadata'
      ]
    },
    {
      title: 'Data-Driven Optimization',
      description: 'Continuously analyze performance data to identify and implement improvements to your digital presence.',
      icon: <FaChartLine className="text-3xl" />,
      features: [
        'Conversion rate optimization',
        'User experience enhancements',
        'Performance speed-ups',
        'SEO improvements',
        'A/B testing',
        'Analytics and reporting'
      ]
    },
    {
      title: 'Autonomous Growth Engine',
      description: 'Let Athenic AI work proactively to grow your online presence through continuous improvements.',
      icon: <FaRocket className="text-3xl" />,
      features: [
        'Automatic content publishing',
        'SEO ranking improvements',
        'Social media management',
        'Regular feature updates',
        'Competitor analysis',
        'Trend implementation'
      ]
    }
  ];
  
  return (
    <div className="bg-charcoal text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute w-1/2 h-1/2 bg-gradient-conic animate-rotate rounded-full blur-3xl" style={{top: '10%', left: '60%'}}></div>
            <div className="absolute w-1/3 h-1/3 bg-gradient-conic animate-rotate rounded-full blur-3xl" style={{top: '60%', left: '10%'}}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Meet <span className="text-brand-green">Athenic AI</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
                The autonomous AI engine powering MaxedLabs. Athenic AI can handle any website update, 
                create content, optimize performance, and continuously improve your digital presence.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="https://getathenic.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Visit Athenic Website
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Request a Demo
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* AI Visualization */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-green/20 to-transparent animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-3/4 h-3/4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaBrain className="text-8xl text-brand-green" />
                    </div>
                    
                    {/* Orbiting elements */}
                    <div className="absolute w-full h-full animate-spin-slow">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-green rounded-full p-3">
                        <FaCode className="text-charcoal text-xl" />
                      </div>
                    </div>
                    <div className="absolute w-full h-full animate-spin-slow" style={{ animationDelay: '-3s' }}>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-teal rounded-full p-3">
                        <FaPencilAlt className="text-charcoal text-xl" />
                      </div>
                    </div>
                    <div className="absolute w-full h-full animate-spin-slow" style={{ animationDelay: '-6s' }}>
                      <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-magenta rounded-full p-3">
                        <FaChartLine className="text-charcoal text-xl" />
                      </div>
                    </div>
                    <div className="absolute w-full h-full animate-spin-slow" style={{ animationDelay: '-9s' }}>
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-brand-blue rounded-full p-3">
                        <FaRocket className="text-charcoal text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-gray-800" ref={containerRef}>
        <motion.div style={{ opacity, scale }} className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              How Athenic AI <span className="text-brand-green">Works</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Athenic AI combines advanced machine learning, natural language processing, and automation 
              to deliver an unprecedented level of digital service.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Request',
                description: 'Simply request any change or update through chat, email, or our portal.',
                icon: <FaPencilAlt />
              },
              {
                step: 2,
                title: 'Process',
                description: 'Athenic AI analyzes your request and formulates the optimal solution.',
                icon: <FaBrain />
              },
              {
                step: 3,
                title: 'Implement',
                description: 'Changes are implemented quickly and accurately across your digital ecosystem.',
                icon: <FaCode />
              },
              {
                step: 4,
                title: 'Optimize',
                description: 'Athenic continuously monitors and improves performance over time.',
                icon: <FaSyncAlt />
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                className="bg-charcoal-light rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-green to-teal flex items-center justify-center text-white text-2xl mx-auto mb-6">
                  {step.icon}
                </div>
                
                <div className="w-10 h-10 rounded-full bg-brand-green text-charcoal flex items-center justify-center text-xl font-bold mx-auto -mt-16 mb-6">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Capabilities */}
      <section className="py-20 border-t border-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Athenic AI <span className="text-brand-green">Capabilities</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              From simple updates to complex implementations, Athenic AI can handle virtually any digital task 
              with unprecedented speed and accuracy.
            </motion.p>
          </div>
          
          <div className="space-y-16">
            {capabilities.map((capability, i) => (
              <motion.div 
                key={i}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-brand-green/10 text-brand-green mr-4">
                      {capability.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{capability.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-8">
                    {capability.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {capability.features.map((feature, j) => (
                      <motion.div 
                        key={j}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: j * 0.05 }}
                      >
                        <span className="text-brand-green mr-2 pt-1">✓</span>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <div className="p-1 bg-gradient-to-br from-brand-green via-teal to-brand-blue rounded-xl">
                    <div className="bg-charcoal-light rounded-xl aspect-video overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-brand-green text-6xl animate-pulse">
                          {capability.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 border-t border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Simple, Transparent <span className="text-brand-green">Pricing</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              No complicated tiers or hidden fees. Just straightforward pricing that delivers incredible value.
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-charcoal-light rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-brand-green to-teal p-1">
                <div className="bg-charcoal-light px-6 py-3">
                  <div className="text-xl text-center font-bold text-brand-green">
                    The Athenic Advantage
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 flex items-center">
                        <FaMagic className="text-brand-green mr-3" />
                        Initial Website Development
                      </h3>
                      <p className="text-gray-300">
                        We provide a completely custom, bespoke website designed to your specifications at no upfront cost.
                      </p>
                      <div className="mt-4 bg-charcoal rounded-lg p-4 inline-block">
                        <span className="text-4xl font-bold text-brand-green">FREE</span>
                        <span className="text-gray-400 ml-2">Initial development</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-2 flex items-center">
                        <FaCode className="text-brand-green mr-3" />
                        WordPress Conversion
                      </h3>
                      <p className="text-gray-300">
                        If you ever decide to leave, we&apos;ll convert your site to be editable via WordPress for a small one-time fee.
                      </p>
                      <div className="mt-4 bg-charcoal rounded-lg p-4 inline-block">
                        <span className="text-4xl font-bold text-brand-green">£150</span>
                        <span className="text-gray-400 ml-2">One-time fee</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="bg-gradient-to-br from-brand-green/20 to-transparent rounded-xl p-6 h-full">
                      <h3 className="text-2xl font-bold mb-4 flex items-center">
                        <FaSyncAlt className="text-brand-green mr-3" />
                        Ongoing Service
                      </h3>
                      <div className="mb-6">
                        <div className="flex items-baseline">
                          <span className="text-5xl font-bold text-brand-green">£49</span>
                          <span className="text-xl text-gray-300 ml-2">/month</span>
                        </div>
                        <div className="text-gray-300 mt-1">or £499/year (save £89)</div>
                      </div>
                      <ul className="space-y-3">
                        {[
                          'Unlimited website updates and changes',
                          'Content creation and publishing',
                          'Hosting and domain management',
                          'Security maintenance and backups',
                          'Performance optimization',
                          'SEO improvements',
                          'Dedicated support'
                        ].map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-brand-green mr-2 pt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Future <span className="text-brand-green">Roadmap</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Athenic AI is constantly evolving. Here&apos;s a glimpse of the exciting capabilities coming soon.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Autonomous Social Media',
                description: 'Athenic will automatically create, schedule, and publish content to your social media channels based on your business goals.',
                timeline: 'Coming Q3 2023',
                icon: <FaHashtag />
              },
              {
                title: 'E-commerce Integration',
                description: 'Advanced product optimization, inventory management, and sales strategies to maximize your online store performance.',
                timeline: 'Coming Q4 2023',
                icon: <FaShoppingBag />
              },
              {
                title: 'Full Ad Campaign Management',
                description: 'Athenic will create, manage, and optimize your digital advertising campaigns across multiple platforms.',
                timeline: 'Coming Q1 2024',
                icon: <FaAd />
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className="bg-charcoal-light rounded-xl p-6 md:p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-brand-green/20 to-transparent rounded-full flex items-center justify-center text-brand-green text-2xl mb-6">
                  {feature.icon || <FaMagic />}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <div className="text-sm text-brand-green font-medium">{feature.timeline}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Experience the <span className="text-brand-green">Future</span>?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join the growing number of businesses transforming their digital presence with Athenic AI.
              Get started today with a free consultation.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/contact" className="btn-primary">
                Get Started
                <FaArrowRight className="ml-2" />
              </Link>
              <Link href="https://getathenic.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 