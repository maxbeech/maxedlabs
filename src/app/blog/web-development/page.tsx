'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

// Mock blog data for Web Development category
const blogPosts = [
  {
    id: 'web-performance-optimization',
    title: 'Web Performance Optimization Techniques',
    excerpt: 'Learn the latest techniques to optimize your website for speed and performance.',
    category: 'web-development',
    date: 'April 28, 2024',
    imageUrl: '/media/case_studies/post-ics-1.jpg',
    readTime: '7 min read',
  },
  {
    id: 'responsive-design-trends',
    title: 'Responsive Design Trends for Modern Websites',
    excerpt: 'Discover the latest responsive design patterns that enhance user experience across all devices.',
    category: 'web-development',
    date: 'March 22, 2024',
    imageUrl: '/media/case_studies/post-pit_farm_tennis-2.jpg',
    readTime: '5 min read',
  },
  {
    id: 'headless-cms-solutions',
    title: 'A Guide to Headless CMS Solutions',
    excerpt: 'Explore the benefits and implementation strategies for headless content management systems.',
    category: 'web-development',
    date: 'March 5, 2024',
    imageUrl: '/media/case_studies/post-eu_ref-2.png',
    readTime: '6 min read',
  },
  {
    id: 'jamstack-architecture',
    title: 'Building with Jamstack Architecture',
    excerpt: 'Learn how Jamstack architecture can improve performance, security, and developer experience.',
    category: 'web-development',
    date: 'February 15, 2024',
    imageUrl: '/media/case_studies/post-eu_ref-3.png',
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

export default function WebDevelopmentPage() {
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
              <span className="text-brand-green">Web Development</span> Blog
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Explore the latest insights on web development trends, best practices, and optimization techniques
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
                placeholder="Search web development articles..."
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
                        Web Development
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

      {/* Web Development Topics */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariant}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">
              Popular <span className="text-brand-green">Topics</span>
            </h2>
            <p className="text-gray-300 mt-4">
              Explore our most popular web development topics
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Next.js', icon: '▲' },
              { name: 'Frontend', icon: '🎨' },
              { name: 'Backend', icon: '⚙️' },
              { name: 'Accessibility', icon: '♿' },
              { name: 'Performance', icon: '⚡' },
              { name: 'SEO', icon: '🔍' },
              { name: 'UI/UX', icon: '📱' },
            ].map(topic => (
              <Link 
                key={topic.name}
                href="#"
                className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-brand-green transition-colors text-center"
              >
                <div className="text-4xl mb-2">{topic.icon}</div>
                <h3 className="text-lg font-semibold text-white">{topic.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools and Resources */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariant}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gray-900 rounded-2xl overflow-hidden">
              <div className="p-8 md:p-10">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Web Development <span className="text-brand-green">Resources</span>
                </h2>
                <p className="text-gray-300 mb-8">
                  We've curated a list of the best tools, libraries, and resources to help you build better websites.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-3">Frontend Development Kit</h3>
                    <p className="text-gray-400 mb-4">
                      A curated collection of tools, libraries, and frameworks for modern frontend development.
                    </p>
                    <Link href="#" className="flex items-center text-brand-green hover:underline">
                      Download Kit
                      <FaArrowRight className="ml-2 text-xs" />
                    </Link>
                  </div>
                  
                  <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-3">Web Performance Checklist</h3>
                    <p className="text-gray-400 mb-4">
                      A comprehensive checklist for optimizing website performance and Core Web Vitals.
                    </p>
                    <Link href="#" className="flex items-center text-brand-green hover:underline">
                      Download Checklist
                      <FaArrowRight className="ml-2 text-xs" />
                    </Link>
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
            <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated on Web Trends</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights on web development trends and best practices.
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