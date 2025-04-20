'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaSearch, FaArrowRight, FaChartLine, FaBullhorn, FaSearchDollar, FaUsers } from 'react-icons/fa';
import Image from 'next/image';

// Mock blog data for Digital Marketing category
const blogPosts = [
  {
    id: 'seo-strategies-2024',
    title: 'SEO Strategies That Actually Work in 2024',
    excerpt: 'Stay ahead with these proven SEO techniques that deliver real results for your business.',
    category: 'digital-marketing',
    date: 'April 15, 2024',
    imageUrl: '/media/case_studies/post-willthishappen-2.jpg',
    readTime: '6 min read',
  },
  {
    id: 'conversion-optimization',
    title: 'Conversion Rate Optimization: A Data-Driven Approach',
    excerpt: 'Learn how to use data to drive meaningful improvements in your website conversion rates.',
    category: 'digital-marketing',
    date: 'March 10, 2024',
    imageUrl: '/media/case_studies/post-intro-1.jpg',
    readTime: '9 min read',
  },
  {
    id: 'social-media-strategy',
    title: 'Building an Effective Social Media Strategy',
    excerpt: 'A comprehensive guide to creating a social media strategy that aligns with your business goals.',
    category: 'digital-marketing',
    date: 'February 25, 2024',
    imageUrl: '/media/case_studies/post-ee_site-1.jpg',
    readTime: '7 min read',
  },
  {
    id: 'email-marketing-automation',
    title: 'Email Marketing Automation Best Practices',
    excerpt: 'Discover how to implement effective email marketing automation to nurture leads and drive conversions.',
    category: 'digital-marketing',
    date: 'February 8, 2024',
    imageUrl: '/media/case_studies/post-spm-3.jpg',
    readTime: '8 min read',
  },
];

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function DigitalMarketingPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts based on search query
  const filteredPosts = blogPosts.filter(post => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
  });

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
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-brand-green">Digital Marketing</span> Blog
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Explore the latest insights on digital marketing strategies, SEO, and conversion optimization
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-charcoal/80 border-t border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white">
              <Link href="/blog" className="flex items-center text-brand-green hover:underline">
                <svg className="mr-1 w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Back to all categories
              </Link>
            </div>
            
            <div className="relative w-full md:w-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search digital marketing articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map(post => (
                <motion.div
                  key={post.id}
                  variants={fadeInUpVariant}
                  className="bg-gray-900 rounded-xl overflow-hidden transition-transform hover:transform hover:scale-[1.02] hover:shadow-xl group"
                >
                  <Link href={`/blog/${post.category}/${post.id}`} className="block">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-brand-green px-3 py-1 rounded-full text-xs font-medium text-charcoal">
                        Digital Marketing
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-green transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-brand-green">
                        <span className="text-sm font-medium">Read article</span>
                        <FaArrowRight className="ml-2 text-xs transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl text-white mb-4">No articles found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search criteria</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="btn-primary"
              >
                View all articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Marketing Services */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariant}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">
              Our Digital Marketing <span className="text-brand-green">Services</span>
            </h2>
            <p className="text-gray-300 mt-4">
              Discover how our AI-powered marketing solutions can help your business grow
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
              <FaSearchDollar className="text-brand-green text-3xl mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">SEO Optimization</h3>
              <p className="text-gray-400 mb-4">
                Data-driven SEO strategies to improve your search rankings and organic traffic.
              </p>
              <Link href="/services/digital-marketing" className="text-brand-green hover:underline flex items-center">
                Learn more
                <FaArrowRight className="ml-2 text-xs" />
              </Link>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
              <FaChartLine className="text-brand-green text-3xl mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Conversion Optimization</h3>
              <p className="text-gray-400 mb-4">
                Turn more visitors into customers with our data-driven CRO strategies.
              </p>
              <Link href="/services/digital-marketing" className="text-brand-green hover:underline flex items-center">
                Learn more
                <FaArrowRight className="ml-2 text-xs" />
              </Link>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
              <FaBullhorn className="text-brand-green text-3xl mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Content Marketing</h3>
              <p className="text-gray-400 mb-4">
                AI-powered content creation that resonates with your audience and drives engagement.
              </p>
              <Link href="/services/digital-marketing" className="text-brand-green hover:underline flex items-center">
                Learn more
                <FaArrowRight className="ml-2 text-xs" />
              </Link>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
              <FaUsers className="text-brand-green text-3xl mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Social Media</h3>
              <p className="text-gray-400 mb-4">
                Strategic social media management to build your brand and engage your audience.
              </p>
              <Link href="/services/digital-marketing" className="text-brand-green hover:underline flex items-center">
                Learn more
                <FaArrowRight className="ml-2 text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Guide */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariant}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-brand-blue/20 to-brand-green/20 rounded-2xl overflow-hidden p-0.5">
              <div className="bg-gray-900 rounded-2xl p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      2024 Digital Marketing <span className="text-brand-green">Playbook</span>
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Our comprehensive guide to digital marketing success in 2024. Download it for free and transform your marketing strategy.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <div className="text-brand-green mr-2">✓</div>
                        <span className="text-gray-300">Latest SEO best practices</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-brand-green mr-2">✓</div>
                        <span className="text-gray-300">Social media strategy templates</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-brand-green mr-2">✓</div>
                        <span className="text-gray-300">Content marketing frameworks</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-brand-green mr-2">✓</div>
                        <span className="text-gray-300">Conversion optimization checklist</span>
                      </li>
                    </ul>
                    <button className="btn-primary">
                      Download Free Guide
                    </button>
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="rounded-xl overflow-hidden border-4 border-gray-800 shadow-xl">
                      <div className="aspect-[4/5] relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-green/10"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center p-6">
                            <div className="bg-brand-green/10 h-24 w-24 rounded-full mx-auto flex items-center justify-center mb-4">
                              <FaChartLine className="text-brand-green text-4xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                              Marketing Playbook
                            </h3>
                            <p className="text-gray-300">2024 Edition</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Stay Ahead of Marketing Trends</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for the latest digital marketing insights, tips, and strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent flex-grow max-w-md"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 