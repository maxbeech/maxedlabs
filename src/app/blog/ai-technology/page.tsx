'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

// Mock blog data for AI Technology category
const blogPosts = [
  {
    id: 'ai-driven-content-strategy',
    title: 'AI-Driven Content Strategy for 2024',
    excerpt: 'Discover how AI is revolutionizing content creation and strategy for modern businesses.',
    category: 'ai-technology',
    date: 'May 2, 2024',
    imageUrl: '/media/case_studies/post-eu_ref-1.png',
    readTime: '5 min read',
  },
  {
    id: 'future-of-apps',
    title: 'The Future of App Development with AI',
    excerpt: 'Explore how artificial intelligence is transforming the app development landscape.',
    category: 'ai-technology',
    date: 'April 5, 2024',
    imageUrl: '/media/case_studies/post-today-1.jpg',
    readTime: '8 min read',
  },
  {
    id: 'ai-automation-business',
    title: 'AI Automation: Transforming Business Operations',
    excerpt: 'Learn how AI automation is streamlining operations and boosting efficiency across industries.',
    category: 'ai-technology',
    date: 'March 18, 2024',
    imageUrl: '/media/case_studies/post-willthishappen-2.jpg',
    readTime: '6 min read',
  },
  {
    id: 'ml-for-small-business',
    title: 'Machine Learning for Small Business: A Practical Guide',
    excerpt: 'Practical approaches for small businesses to leverage machine learning without big budgets.',
    category: 'ai-technology',
    date: 'February 28, 2024',
    imageUrl: '/media/case_studies/post-spm-1.jpg',
    readTime: '7 min read',
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

export default function AiTechnologyPage() {
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
              <span className="text-brand-green">AI & Technology</span> Blog
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Explore the latest insights on artificial intelligence and emerging technologies
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
                placeholder="Search AI & Technology articles..."
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
                        AI & Technology
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

      {/* Featured Resources */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariant}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">
              Featured <span className="text-brand-green">Resources</span>
            </h2>
            <p className="text-gray-300 mt-4">
              Discover our most popular guides and resources on AI and technology
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-brand-green transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white ml-4">AI Implementation Guide</h3>
              </div>
              <p className="text-gray-300 mb-4">
                A comprehensive guide for businesses looking to implement AI solutions effectively.
              </p>
              <Link href="#" className="flex items-center text-brand-green hover:underline">
                Download Guide
                <FaArrowRight className="ml-2 text-xs" />
              </Link>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-brand-green transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white ml-4">AI ROI Calculator</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Calculate the potential return on investment for implementing AI solutions in your business.
              </p>
              <Link href="#" className="flex items-center text-brand-green hover:underline">
                Access Calculator
                <FaArrowRight className="ml-2 text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated on AI Trends</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights on AI, machine learning, and emerging technologies.
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