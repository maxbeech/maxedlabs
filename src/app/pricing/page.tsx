'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheck, FaArrowRight, FaRegQuestionCircle } from 'react-icons/fa';

// Define animation variants
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({ 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1],
      delay: custom * 0.1
    }
  })
};

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const toggleBillingCycle = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly');
  };

  return (
    <div className="bg-charcoal min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-charcoal to-brand-blue pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full bg-[url('/media/grid-pattern.svg')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariant}
            custom={0}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-brand-green">Simple</span> & Transparent Pricing
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              No hidden fees, no surprises. Just straightforward pricing for exceptional digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-8 bg-charcoal/80 border-t border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <span className={`text-sm font-medium mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button 
              onClick={toggleBillingCycle}
              className="relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 focus:ring-offset-charcoal"
              aria-pressed={billingCycle === 'yearly'}
              aria-labelledby="billing-cycle-toggle"
            >
              <span className="sr-only" id="billing-cycle-toggle">Toggle billing cycle</span>
              <span 
                className={`${
                  billingCycle === 'yearly' ? 'bg-brand-green' : 'bg-gray-700'
                } absolute mx-auto inset-0 rounded-full transition-colors`}
              />
              <span 
                className={`${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </button>
            <span className={`text-sm font-medium ml-3 ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-1.5 text-xs inline-flex items-center bg-brand-green/20 text-brand-green px-2 py-0.5 rounded-full">
                Save 15%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Launch Card */}
              <motion.div 
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeInUpVariant}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 transition-transform hover:transform hover:scale-[1.02] relative group"
              >
                <div className="p-8">
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Basic</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-white">Free</span>
                    <span className="ml-2 text-gray-400">launch</span>
                  </div>
                  
                  <p className="text-gray-400 mb-6">
                    We'll build your bespoke site at no cost and make any changes you need until you're completely satisfied.
                  </p>
                  
                  <Link href="/contact" className="block w-full py-3 px-6 text-center rounded-lg bg-transparent border border-brand-green text-brand-green hover:bg-brand-green hover:text-charcoal transition-colors">
                    Get Started
                  </Link>
                  
                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start">
                      <FaCheck className="text-brand-green text-sm mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Complete bespoke website development</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-brand-green text-sm mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Unlimited revisions until you're satisfied</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-brand-green text-sm mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">SEO optimization</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-brand-green text-sm mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Modern, responsive design</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Monthly/Yearly Plan Card */}
              <motion.div 
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeInUpVariant}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-brand-green transition-transform hover:transform hover:scale-[1.02] relative group md:scale-105 z-10"
              >
                <div className="absolute top-0 right-0 bg-brand-green text-charcoal text-xs font-bold px-3 py-1">
                  RECOMMENDED
                </div>
                
                <div className="p-8">
                  <h3 className="text-lg font-medium text-brand-green mb-2">All-inclusive</h3>
                  <div className="flex items-baseline mb-6">
                    {billingCycle === 'monthly' ? (
                      <>
                        <span className="text-4xl font-bold text-white">£49</span>
                        <span className="ml-2 text-gray-400">/month</span>
                      </>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-white">£499</span>
                        <span className="ml-2 text-gray-400">/year</span>
                      </>
                    )}
                  </div>
                  
                  <p className="text-gray-400 mb-6">
                    All your website needs covered, from hosting to unlimited updates, powered by AI.
                  </p>
                  
                  <Link href="/contact" className="block w-full py-3 px-6 text-center rounded-lg bg-brand-green text-charcoal hover:bg-opacity-90 transition-colors">
                    Get Started
                  </Link>
                  
                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start">
                      <FaCheck className="text-brand-green text-sm mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">All features from Basic plan</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-brand-green text-sm mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Unlimited website updates and changes</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-brand-green text-sm mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Hosting charges included (£108/yr value)</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-brand-green text-sm mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Regular AI-powered improvements</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-brand-green text-sm mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">24/7 website monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-brand-green text-sm mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Regular backups</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-brand-green text-sm mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Optional content creation with Athenic AI</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* WordPress Conversion Card */}
              <motion.div 
                initial="hidden"
                animate="visible"
                custom={3}
                variants={fadeInUpVariant}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 transition-transform hover:transform hover:scale-[1.02] relative group"
              >
                <div className="p-8">
                  <h3 className="text-lg font-medium text-gray-300 mb-2">WordPress Conversion</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-white">£150</span>
                    <span className="ml-2 text-gray-400">one-time</span>
                  </div>
                  
                  <p className="text-gray-400 mb-6">
                    If you ever decide to stop the service, we can convert your site to WordPress for full control.
                  </p>
                  
                  <Link href="/contact" className="block w-full py-3 px-6 text-center rounded-lg bg-transparent border border-brand-green text-brand-green hover:bg-brand-green hover:text-charcoal transition-colors">
                    Learn More
                  </Link>
                  
                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start">
                      <FaCheck className="text-brand-green text-sm mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Full WordPress conversion</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-brand-green text-sm mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Self-hosted solution</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-brand-green text-sm mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Complete content migration</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-brand-green text-sm mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">WordPress CMS training</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-brand-green text-sm mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">1 month of post-conversion support</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className="text-3xl font-bold mb-12 text-white text-center"
            >
              Frequently Asked <span className="text-brand-green">Questions</span>
            </motion.h2>
            
            <div className="space-y-8">
              <motion.div 
                initial="hidden"
                animate="visible"
                custom={4}
                variants={fadeInUpVariant}
                className="bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">What's included in the free launch?</h3>
                <p className="text-gray-300">
                  Our free launch includes a complete bespoke website built to your specifications. We'll make as many revisions as needed until you're completely satisfied with the design, functionality, and content. This includes responsive design, SEO optimization, and all the features you need to get started.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                animate="visible"
                custom={5}
                variants={fadeInUpVariant}
                className="bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">Are there any limits to the website updates?</h3>
                <p className="text-gray-300">
                  No limits at all. With our all-inclusive plan, you can request any number of updates, whether they're small content changes or significant redesigns. All updates are handled by our Athenic AI platform, allowing for quick turnaround times and consistent quality.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                animate="visible"
                custom={6}
                variants={fadeInUpVariant}
                className="bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">What happens if I want to cancel my subscription?</h3>
                <p className="text-gray-300">
                  If you decide to cancel, you have several options. We can transfer your website code to your preferred hosting provider at no charge. Alternatively, for a one-time fee of £150, we can convert your site to WordPress, giving you complete control over future updates and maintenance.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                animate="visible"
                custom={7}
                variants={fadeInUpVariant}
                className="bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">How does Athenic AI improve my website?</h3>
                <p className="text-gray-300">
                  Athenic AI continuously monitors your website's performance and can proactively suggest improvements based on user behavior, industry trends, and SEO best practices. It can also autonomously create content like blog posts and update your site with fresh information relevant to your business, all while maintaining your brand voice and style.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariant}
            custom={8}
            className="max-w-4xl mx-auto bg-gradient-to-r from-brand-blue to-brand-green rounded-2xl overflow-hidden"
          >
            <div className="p-1">
              <div className="bg-charcoal rounded-2xl p-8 md:p-12">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4 text-white">Ready to maximize your digital presence?</h2>
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    Book a demo to see how our AI-powered solutions can transform your business online.
                  </p>
                  
                  <Link href="/contact" className="inline-flex items-center py-3 px-8 rounded-lg bg-brand-green text-charcoal hover:bg-opacity-90 transition-colors text-lg font-medium">
                    Book a Demo
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 