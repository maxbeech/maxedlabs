'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaArrowRight, 
  FaChartLine, 
  FaSearchPlus, 
  FaBullhorn, 
  FaHashtag, 
  FaEnvelope, 
  FaRobot, 
  FaTachometerAlt, 
  FaChartBar, 
  FaBullseye, 
  FaUserFriends,
  FaRocket
} from 'react-icons/fa';

export default function DigitalMarketingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  // Marketing services
  const services = [
    {
      title: 'Search Engine Optimization',
      description: 'We improve your website\'s visibility in search results to drive more organic traffic.',
      icon: <FaSearchPlus className="text-2xl" />,
      features: [
        'Keyword research and strategy',
        'On-page optimization',
        'Technical SEO improvements',
        'Content strategy and creation',
        'Link building campaigns',
        'Local SEO optimization'
      ]
    },
    {
      title: 'Paid Advertising',
      description: 'Strategic ad campaigns that deliver high ROI across search, social, and display networks.',
      icon: <FaBullhorn className="text-2xl" />,
      features: [
        'Google Ads management',
        'Social media advertising',
        'Retargeting campaigns',
        'Shopping ads optimization',
        'Landing page optimization',
        'Budget management and reporting'
      ]
    },
    {
      title: 'Social Media Marketing',
      description: 'Build and engage your audience across relevant social platforms for your business.',
      icon: <FaHashtag className="text-2xl" />,
      features: [
        'Social strategy development',
        'Content creation and curation',
        'Community management',
        'Influencer partnerships',
        'Platform-specific campaigns',
        'Analytics and performance tracking'
      ]
    },
    {
      title: 'Email Marketing',
      description: 'Nurture leads and customers with targeted, automated email campaigns that convert.',
      icon: <FaEnvelope className="text-2xl" />,
      features: [
        'Email campaign strategy',
        'Automation workflows',
        'List segmentation',
        'A/B testing',
        'Newsletter design and content',
        'Performance optimization'
      ]
    },
    {
      title: 'AI-Powered Marketing',
      description: 'Leverage Athenic AI to automate and optimize your marketing for maximum efficiency.',
      icon: <FaRobot className="text-2xl" />,
      features: [
        'Automated content generation',
        'Predictive analytics',
        'AI-driven personalization',
        'Conversion optimization',
        'Automated social posting',
        'Continuous improvement cycles'
      ]
    }
  ];
  
  // Results metrics
  const metrics = [
    { label: 'Average Traffic Increase', value: '183%', icon: <FaChartLine /> },
    { label: 'Conversion Rate Improvement', value: '47%', icon: <FaTachometerAlt /> },
    { label: 'ROI on Marketing Spend', value: '310%', icon: <FaChartBar /> },
    { label: 'Cost Per Acquisition Reduction', value: '42%', icon: <FaBullseye /> },
    { label: 'Customer Retention Increase', value: '38%', icon: <FaUserFriends /> }
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
            <div className="flex items-center text-magenta mb-4">
              <Link href="/services" className="text-white hover:text-magenta transition-colors">
                Services
              </Link>
              <span className="mx-2">/</span>
              <span>Digital Marketing</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Digital <span className="text-magenta">Marketing</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl">
              We drive traffic, conversions, and sales through data-driven, AI-enhanced 
              marketing strategies tailored to your business goals and target audience.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-magenta">
                Get Started
                <FaArrowRight className="ml-2" />
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Delivering <span className="text-magenta">Results</span> That Matter
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {metrics.map((metric, i) => (
                  <motion.div 
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-magenta/10 flex items-center justify-center text-magenta text-2xl mx-auto mb-4">
                      {metric.icon}
                    </div>
                    <div className="text-3xl font-bold text-magenta mb-2">{metric.value}</div>
                    <div className="text-sm text-gray-300">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Marketing <span className="text-magenta">Services</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We deliver comprehensive digital marketing solutions powered by Athenic AI to help your business grow.
              Each service is tailored to your unique needs and continuously optimized for maximum results.
            </motion.p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <div className={`${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="bg-charcoal-light p-8 rounded-xl">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-lg bg-magenta/10 text-magenta mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, j) => (
                        <motion.div 
                          key={j}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: j * 0.05 }}
                        >
                          <span className="text-magenta mr-2 pt-1">✓</span>
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={`${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <div className="aspect-square max-w-[350px] mx-auto bg-gradient-to-br from-magenta/20 to-transparent rounded-xl overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-magenta text-7xl transform transition-transform hover:scale-110 duration-500">
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                      <div className="absolute w-20 h-20 rounded-full bg-magenta/10" style={{top: '10%', left: '70%'}}></div>
                      <div className="absolute w-12 h-12 rounded-full bg-magenta/5" style={{top: '70%', left: '20%'}}></div>
                      <div className="absolute w-32 h-32 rounded-full bg-magenta/5" style={{top: '40%', left: '50%'}}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
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
              Our Marketing <span className="text-magenta">Process</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We follow a data-driven approach to marketing that delivers consistent results 
              and continuous improvement for your business.
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: 1,
                  title: 'Research & Strategy',
                  description: 'We analyze your business, competitors, and target audience to develop a custom marketing strategy.',
                  icon: <FaSearchPlus />
                },
                {
                  step: 2,
                  title: 'Implementation',
                  description: 'Our team deploys marketing campaigns across relevant channels with Athenic AI assistance.',
                  icon: <FaRocket />
                },
                {
                  step: 3,
                  title: 'Optimization & Growth',
                  description: 'We continuously monitor, test, and refine strategies to maximize performance and ROI.',
                  icon: <FaChartLine />
                }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  className="bg-charcoal-light rounded-xl p-6 md:p-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="w-14 h-14 rounded-full bg-magenta/10 flex items-center justify-center text-magenta text-xl font-bold mb-6">
                    {step.step}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="text-magenta mr-3">{step.icon}</span>
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-16 bg-gradient-to-r from-magenta/20 to-transparent p-8 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-magenta/10 rounded-xl text-magenta text-2xl">
                  <FaRobot />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The Athenic AI Advantage</h3>
                  <p className="text-gray-300">
                    Our marketing services are enhanced by Athenic AI, which automates content creation, optimizes campaigns, 
                    analyzes performance data, and suggests improvements in real-time. This allows us to achieve better results, 
                    faster, while maintaining the human strategic oversight that&apos;s essential for marketing success.
                  </p>
                </div>
              </div>
            </motion.div>
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
              Frequently Asked <span className="text-magenta">Questions</span>
            </motion.h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'How soon will I see results from digital marketing?',
                  answer: 'Results timeline varies by strategy. Paid advertising can show immediate results, while SEO typically takes 3-6 months to show significant improvements. Social media marketing usually shows initial engagement within weeks, with more substantial business impact developing over 2-3 months.'
                },
                {
                  question: 'What makes your digital marketing different?',
                  answer: 'Our approach is unique because it\'s powered by Athenic AI, which continuously analyzes performance data, automates optimizations, and creates content at scale. This allows us to work more efficiently, respond faster to market changes, and deliver better ROI than traditional agencies.'
                },
                {
                  question: 'How much should I budget for digital marketing?',
                  answer: 'Our subscription model starts at £49/month and includes a comprehensive marketing strategy. We also work with clients to determine appropriate ad spend budgets based on their specific goals, industry, and competition.'
                },
                {
                  question: 'How do you measure marketing success?',
                  answer: 'We establish clear KPIs aligned with your business goals from the start. These typically include metrics like traffic growth, conversion rates, cost per acquisition, and ROI. We provide detailed reporting through an interactive dashboard so you can track progress in real-time.'
                },
                {
                  question: 'Can your AI create content for my industry?',
                  answer: 'Yes, Athenic AI can create high-quality content for virtually any industry. We combine AI capabilities with human oversight to ensure all content is accurate, on-brand, and effective for your specific audience and goals.'
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
        <div className="absolute inset-0 bg-gradient-to-br from-magenta/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to <span className="text-magenta">Maximize</span> Your Digital Marketing?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let&apos;s create a data-driven marketing strategy that drives growth for your business.
              Get started with a free consultation to discuss your goals.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/contact" className="btn-magenta">
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