'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCode, FaMobileAlt, FaChartLine, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern technologies that convert visitors into customers.',
    icon: <FaCode className="text-3xl" />,
    href: '/services/website-development',
    image: '/media/website-development.jpg',
    color: 'brand-green',
    benefits: [
      'Bespoke design that represents your unique brand',
      'Optimized for speed and core web vitals',
      'Mobile-responsive and cross-browser compatible',
      'SEO-friendly structures that rank better',
      'Secure and reliable hosting with 99.9% uptime',
      'Continuous AI-powered improvements and updates'
    ]
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications designed for exceptional user experience and performance.',
    icon: <FaMobileAlt className="text-3xl" />,
    href: '/services/app-development',
    image: '/media/app-development.jpg',
    color: 'teal',
    benefits: [
      'Cross-platform development for iOS and Android',
      'Native performance and experience',
      'Intuitive user interface and experience design',
      'Offline capabilities and data synchronization',
      'Push notifications and engagement features',
      'Maintenance and updates powered by Athenic AI'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that increase traffic, conversions, and sales for your business.',
    icon: <FaChartLine className="text-3xl" />,
    href: '/services/digital-marketing',
    image: '/media/digital-marketing.jpg',
    color: 'magenta',
    benefits: [
      'SEO optimization for higher organic rankings',
      'PPC campaigns with optimal ROI targeting',
      'Content marketing strategies that engage',
      'Social media management across platforms',
      'Email marketing campaigns with high open rates',
      'Analytics and reporting for continual improvement'
    ]
  }
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
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
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-brand-green">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12">
              We combine cutting-edge technology with strategic expertise to deliver digital solutions that maximize your business growth, all powered by Athenic AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section with Parallax Effect */}
      <div ref={containerRef} className="relative z-10">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <section 
              key={service.id}
              id={service.id}
              className={`py-20 ${index > 0 ? 'border-t border-gray-800' : ''} relative overflow-hidden`}
            >
              <div className="container mx-auto px-4">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  <motion.div 
                    className="lg:w-1/2"
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className={`text-${service.color} mb-4 flex items-center`}>
                      <div className="p-3 bg-charcoal-light rounded-lg mr-4">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-gray-300 mb-8">
                      {service.description}
                    </p>
                    
                    <h3 className="text-xl font-medium mb-4">Key Benefits</h3>
                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                          <span className={`text-${service.color} mr-2 pt-1`}>✓</span>
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <Link href={service.href} className={`btn-outline-${service.color} inline-flex items-center`}>
                      Learn More
                      <FaArrowRight className="ml-2" />
                    </Link>
                  </motion.div>
                  
                  <motion.div 
                    className="lg:w-1/2"
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="gradient-border p-0.5 rounded-xl overflow-hidden">
                      <div className="bg-dark-blue p-4 rounded-xl overflow-hidden">
                        <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                          <div className={`absolute inset-0 bg-gradient-to-br from-${service.color} to-transparent opacity-20`}></div>
                          <div className="absolute inset-0 bg-charcoal-light opacity-80"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-2/3 h-2/3 relative">
                              {/* Replace with proper Image or mockup */}
                              <div className={`w-full h-full bg-gradient-to-br from-${service.color} to-dark-blue rounded-lg p-6 flex items-center justify-center`}>
                                {service.icon}
                                <span className="ml-4 text-2xl font-bold">{service.title}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

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
              Ready to <span className="text-brand-green">Maximize</span> Your Digital Potential?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let's discuss how our AI-powered solutions can help grow your business. Get in touch today for a free consultation.
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
              <Link href="/case-studies" className="btn-secondary">
                View Case Studies
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 