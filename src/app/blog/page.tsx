'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaFilter, FaSearch, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

// Mock blog data
const blogCategories = [
  { id: 'all', name: 'All Categories' },
  { id: 'ai-technology', name: 'AI & Technology' },
  { id: 'web-development', name: 'Web Development' },
  { id: 'digital-marketing', name: 'Digital Marketing' },
];

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
    id: 'web-performance-optimization',
    title: 'Web Performance Optimization Techniques',
    excerpt: 'Learn the latest techniques to optimize your website for speed and performance.',
    category: 'web-development',
    date: 'April 28, 2024',
    imageUrl: '/media/case_studies/post-ics-1.jpg',
    readTime: '7 min read',
  },
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
    id: 'future-of-apps',
    title: 'The Future of App Development with AI',
    excerpt: 'Explore how artificial intelligence is transforming the app development landscape.',
    category: 'ai-technology',
    date: 'April 5, 2024',
    imageUrl: '/media/case_studies/post-today-1.jpg',
    readTime: '8 min read',
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
    id: 'conversion-optimization',
    title: 'Conversion Rate Optimization: A Data-Driven Approach',
    excerpt: 'Learn how to use data to drive meaningful improvements in your website conversion rates.',
    category: 'digital-marketing',
    date: 'March 10, 2024',
    imageUrl: '/media/case_studies/post-intro-1.jpg',
    readTime: '9 min read',
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

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
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
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-brand-green">Insights</span> & Resources
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Explore the latest insights on AI, web development, and digital marketing to optimize your digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 bg-charcoal/80 border-t border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2 text-white">
              <FaFilter className="text-brand-green" />
              <span className="text-sm font-medium">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                {blogCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-brand-green text-charcoal'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative w-full md:w-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
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
                        {blogCategories.find(cat => cat.id === post.category)?.name}
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
              <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="btn-primary"
              >
                View all articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights on AI, web development, and digital marketing.
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