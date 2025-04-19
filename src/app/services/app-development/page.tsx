'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight, FaMobileAlt, FaAppStoreIos, FaGooglePlay, FaMagic, FaRocket, FaCogs, FaUserFriends, FaShieldAlt } from 'react-icons/fa';

export default function AppDevelopmentPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  // App development phases
  const phases = [
    {
      title: 'Strategy & Conceptualization',
      description: 'We define app features, target audience, and business objectives to create a solid foundation.',
      icon: <FaUserFriends className="text-2xl" />,
    },
    {
      title: 'UI/UX Design',
      description: 'Our designers create intuitive, engaging user interfaces with a focus on user experience.',
      icon: <FaMobileAlt className="text-2xl" />,
    },
    {
      title: 'Development & Integration',
      description: 'Expert developers build your app using modern frameworks and APIs for optimal performance.',
      icon: <FaCogs className="text-2xl" />,
    },
    {
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing across devices and scenarios to ensure your app works flawlessly.',
      icon: <FaShieldAlt className="text-2xl" />,
    },
    {
      title: 'Launch & Growth',
      description: 'We help you release your app and provide ongoing updates and enhancements via Athenic AI.',
      icon: <FaRocket className="text-2xl" />,
    }
  ];
  
  // Technologies we use
  const technologies = [
    { name: 'React Native', description: 'Cross-platform development for iOS and Android' },
    { name: 'Flutter', description: 'Google\'s UI toolkit for building natively compiled applications' },
    { name: 'Swift', description: 'Apple\'s programming language for iOS development' },
    { name: 'Kotlin', description: 'Modern programming language for Android development' },
    { name: 'Firebase', description: 'Backend services for authentication, databases, and more' },
    { name: 'GraphQL', description: 'API query language for efficient data loading' },
  ];
  
  // App features we can implement
  const features = [
    { 
      title: 'User Authentication', 
      description: 'Secure login systems with social media integration and biometric authentication.',
      icon: <FaShieldAlt /> 
    },
    { 
      title: 'Push Notifications', 
      description: 'Engage users with timely, relevant notifications to increase retention.',
      icon: <FaMobileAlt /> 
    },
    { 
      title: 'Offline Functionality', 
      description: 'Allow users to access key features even without internet connection.',
      icon: <FaCogs /> 
    },
    { 
      title: 'Analytics Integration', 
      description: 'Track user behavior and app performance to make data-driven decisions.',
      icon: <FaUserFriends /> 
    },
    { 
      title: 'Payment Processing', 
      description: 'Secure payment gateways for in-app purchases and subscriptions.',
      icon: <FaShieldAlt /> 
    },
    { 
      title: 'AI-Powered Features', 
      description: 'Implement machine learning capabilities for personalized experiences.',
      icon: <FaMagic /> 
    },
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
            <div className="flex items-center text-teal mb-4">
              <Link href="/services" className="text-white hover:text-teal transition-colors">
                Services
              </Link>
              <span className="mx-2">/</span>
              <span>App Development</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              App <span className="text-teal">Development</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl">
              We create powerful, user-friendly mobile applications that help businesses connect with their customers, 
              streamline operations, and unlock new revenue streams.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-12">
              <div className="flex items-center">
                <FaAppStoreIos className="text-2xl mr-2 text-teal" />
                <span>iOS Apps</span>
              </div>
              <div className="flex items-center">
                <FaGooglePlay className="text-2xl mr-2 text-teal" />
                <span>Android Apps</span>
              </div>
              <div className="flex items-center">
                <FaMobileAlt className="text-2xl mr-2 text-teal" />
                <span>Cross-Platform Apps</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-teal">
                Get Started
                <FaArrowRight className="ml-2" />
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View App Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Mockup Showcase */}
      <section className="py-20 border-t border-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto relative">
            <motion.div 
              className="grid grid-cols-3 gap-4 md:gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* App mockups display - these would be real images in production */}
              <div className="col-span-1">
                <div className="relative aspect-[9/19] w-full bg-charcoal-light rounded-3xl overflow-hidden border-8 border-charcoal-light">
                  <div className="absolute inset-0 bg-gradient-to-b from-teal/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-teal font-bold">App Screen 1</div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 transform translate-y-8">
                <div className="relative aspect-[9/19] w-full bg-charcoal-light rounded-3xl overflow-hidden border-8 border-charcoal-light shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-teal/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-teal font-bold">App Screen 2</div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="relative aspect-[9/19] w-full bg-charcoal-light rounded-3xl overflow-hidden border-8 border-charcoal-light">
                  <div className="absolute inset-0 bg-gradient-to-b from-teal/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-teal font-bold">App Screen 3</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="mt-12 text-center">
              <Link href="/case-studies" className="text-teal hover:text-white transition-colors inline-flex items-center">
                <span className="custom-underline">See our app development case studies</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Development Process */}
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
              Our Development <span className="text-teal">Process</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We follow a structured approach to app development that ensures quality, efficiency, and alignment with your business objectives.
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Process phases */}
            <div className="space-y-16 md:space-y-24 relative z-10">
              {phases.map((phase, i) => (
                <motion.div 
                  key={i}
                  className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="md:w-1/2 relative">
                    {/* Phase indicator */}
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:right-0 md:mr-[-40px] z-20 hidden md:block">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-charcoal border-2 border-teal text-teal text-xl font-bold">
                        {i+1}
                      </div>
                    </div>
                    
                    <div className="bg-charcoal-light p-8 rounded-xl">
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-lg bg-teal/10 text-teal mr-4">
                          {phase.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold">{phase.title}</h3>
                      </div>
                      <p className="text-gray-300">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    {/* Visual representation for each phase */}
                    <div className="aspect-square max-w-[300px] mx-auto rounded-xl bg-gradient-to-br from-teal/20 to-transparent flex items-center justify-center p-8">
                      <div className="text-teal text-5xl">
                        {phase.icon}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Technologies & Features */}
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
              Technologies & <span className="text-teal">Features</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We use cutting-edge technologies to build apps with powerful features that deliver exceptional user experiences.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="p-2 rounded-lg bg-teal/10 text-teal mr-3">
                  <FaCogs className="text-xl" />
                </span>
                Technologies We Use
              </h3>
              
              <div className="space-y-4">
                {technologies.map((tech, i) => (
                  <motion.div 
                    key={i}
                    className="bg-charcoal-light p-5 rounded-xl"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <h4 className="font-bold text-lg mb-1">{tech.name}</h4>
                    <p className="text-gray-300 text-sm">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="p-2 rounded-lg bg-teal/10 text-teal mr-3">
                  <FaMagic className="text-xl" />
                </span>
                Features We Can Implement
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <motion.div 
                    key={i}
                    className="bg-charcoal-light p-5 rounded-xl h-full"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="text-teal mb-2">{feature.icon}</div>
                    <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
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
              Frequently Asked <span className="text-teal">Questions</span>
            </motion.h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'How long does it take to develop a mobile app?',
                  answer: 'Development time varies based on complexity, but typically ranges from 2-4 months for a standard app to 4-6 months for more complex applications. Our AI-powered development process can often accelerate this timeline.'
                },
                {
                  question: 'How much does app development cost?',
                  answer: 'App development is included in our service packages starting at £49/month. We offer a free initial app development with ongoing updates and maintenance included in the subscription price.'
                },
                {
                  question: 'Do you develop for both iOS and Android?',
                  answer: 'Yes, we develop for both platforms using cross-platform technologies like React Native and Flutter, as well as native development when required for specific functionality or performance reasons.'
                },
                {
                  question: 'Can you handle app store submission?',
                  answer: 'Absolutely. We manage the entire app submission process for both Apple App Store and Google Play Store, including preparing all required assets and documentation.'
                },
                {
                  question: 'How do you ensure app quality?',
                  answer: 'We implement rigorous testing throughout development, including functional testing, usability testing, performance testing, and security testing across multiple devices and OS versions.'
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
        <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Build Your <span className="text-teal">App</span>?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let's turn your app idea into reality. Get started with a free consultation and discover how our app development services can help your business grow.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/contact" className="btn-teal">
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