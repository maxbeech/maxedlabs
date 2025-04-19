'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight, FaCode, FaMagic, FaRocket, FaCog, FaDesktop, FaMobile, FaSearch } from 'react-icons/fa';

export default function WebsiteDevelopmentPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  // Process steps
  const steps = [
    {
      title: 'Discovery & Strategy',
      description: 'We learn about your business, goals, target audience, and industry to develop a strategic plan.',
      icon: <FaSearch className="text-2xl" />,
    },
    {
      title: 'Design & Prototyping',
      description: 'Our AI-powered design process creates mockups and prototypes for your review and feedback.',
      icon: <FaDesktop className="text-2xl" />,
    },
    {
      title: 'Development & Testing',
      description: 'We build your website using modern technologies while ensuring compatibility and performance.',
      icon: <FaCode className="text-2xl" />,
    },
    {
      title: 'Launch & Optimization',
      description: 'Your website goes live, and we fine-tune it for maximum speed, usability, and search visibility.',
      icon: <FaRocket className="text-2xl" />,
    },
    {
      title: 'Maintenance & Growth',
      description: 'Athenic AI continuously monitors, updates, and improves your website to maximize results.',
      icon: <FaMagic className="text-2xl" />,
    }
  ];
  
  // Technologies used
  const technologies = [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Framer Motion', level: 75 },
  ];
  
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
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center text-brand-green mb-4">
              <Link href="/services" className="text-white hover:text-brand-green transition-colors">
                Services
              </Link>
              <span className="mx-2">/</span>
              <span>Website Development</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Website <span className="text-brand-green">Development</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl">
              We build beautiful, high-performance websites that drive conversions and growth, 
              tailored to your unique business needs and continuously improved by Athenic AI.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Get Started
                <FaArrowRight className="ml-2" />
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Related Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual showcase section */}
      <section className="py-20 border-t border-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, i) => (
              <motion.div 
                key={i}
                className="relative gradient-border p-0.5 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="bg-charcoal-light rounded-xl aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Replace with actual website screenshots */}
                    <div className="text-xl font-bold">Website Example {item}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/case-studies" className="text-brand-green hover:text-white transition-colors inline-flex items-center">
              <span className="custom-underline">See more examples in our case studies</span>
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 border-t border-gray-800 relative overflow-hidden" ref={containerRef}>
        <motion.div style={{ opacity, scale }} className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our <span className="text-brand-green">Approach</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We follow a proven process to create websites that not only look stunning but also deliver results.
              Our AI-enhanced workflow ensures efficiency without compromising quality.
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Process steps */}
            <div className="space-y-16 md:space-y-24 relative z-10">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="md:w-1/2 relative">
                    {/* Step indicator */}
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:right-0 md:mr-[-40px] z-20 hidden md:block">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-charcoal border-2 border-brand-green text-brand-green text-xl font-bold">
                        {i+1}
                      </div>
                    </div>
                    
                    <div className="bg-charcoal-light p-8 rounded-xl">
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-lg bg-brand-green/10 text-brand-green mr-4">
                          {step.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    {/* Visual representation for each step - could be illustrations or icons */}
                    <div className="aspect-square max-w-[300px] mx-auto rounded-xl bg-gradient-to-br from-brand-green/20 to-transparent flex items-center justify-center p-8">
                      <div className="text-brand-green text-5xl">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Technologies Used */}
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
              Technologies We <span className="text-brand-green">Master</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We use cutting-edge technologies and frameworks to build fast, scalable, and secure websites.
              Our tech stack is constantly evolving to embrace the latest innovations.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, i) => (
              <motion.div 
                key={i}
                className="bg-charcoal-light rounded-xl p-6"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-lg">{tech.name}</h3>
                  <span className="text-brand-green">{tech.level}%</span>
                </div>
                <div className="w-full bg-charcoal rounded-full h-2.5">
                  <motion.div 
                    className="bg-brand-green h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked <span className="text-brand-green">Questions</span>
            </motion.h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'How long does it take to build a website?',
                  answer: 'Typically, a standard business website takes 4-6 weeks from concept to launch. More complex projects may take 8-12 weeks. With our AI-powered workflow, we can often accelerate this timeline without sacrificing quality.'
                },
                {
                  question: 'What makes your websites different from others?',
                  answer: 'Our websites are built with a focus on conversion optimization, not just aesthetics. Each site is custom-designed to meet your specific business goals, and with Athenic AI, your site continuously improves over time rather than becoming outdated.'
                },
                {
                  question: 'Do you provide website maintenance?',
                  answer: 'Yes, we include comprehensive maintenance with our £49/month subscription. Athenic AI handles updates, security patches, content changes, and even creates new pages or features as your business needs evolve.'
                },
                {
                  question: 'Can I edit the website myself?',
                  answer: 'While we handle all updates through our service, we can convert your site to a WordPress-editable format for a one-time fee of £150 if you ever decide to manage it yourself.'
                },
                {
                  question: 'What if I need changes after the website launches?',
                  answer: 'Our £49/month subscription includes unlimited changes, so you can request any updates, no matter how big or small, at any time. Athenic AI can implement most changes within 24-48 hours.'
                }
              ].map((faq, i) => (
                <motion.div 
                  key={i}
                  className="bg-charcoal-light rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
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
              Ready for a Website That <span className="text-brand-green">Performs</span>?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let's create a website that not only looks stunning but also drives real business results.
              Get started with a free consultation and see how Athenic AI can transform your online presence.
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
              <Link href="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 