'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaMobileAlt, FaChartLine, FaExternalLinkAlt, FaBriefcase, FaRegWindowRestore } from 'react-icons/fa';
import { getCaseStudies } from '@/data/case-studies';

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState('all');
  
  // Get filtered case studies from our data source
  const filteredCaseStudies = getCaseStudies(filter);
  
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
              Our <span className="text-brand-green">Case Studies</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Explore our portfolio of successful projects across website development, app creation, and digital marketing campaigns.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
              <button 
                onClick={() => setFilter('all')} 
                className={`px-4 py-2 rounded-md transition-all ${filter === 'all' ? 'bg-brand-green text-charcoal' : 'bg-charcoal-light hover:bg-gray-700'}`}
              >
                All Projects
              </button>
              <button 
                onClick={() => setFilter('website')} 
                className={`px-4 py-2 rounded-md transition-all ${filter === 'website' ? 'bg-brand-green text-charcoal' : 'bg-charcoal-light hover:bg-gray-700'}`}
              >
                <FaCode className="inline mr-2" />
                Websites
              </button>
              <button 
                onClick={() => setFilter('app')} 
                className={`px-4 py-2 rounded-md transition-all ${filter === 'app' ? 'bg-teal text-charcoal' : 'bg-charcoal-light hover:bg-gray-700'}`}
              >
                <FaMobileAlt className="inline mr-2" />
                Apps
              </button>
              <button 
                onClick={() => setFilter('webapp')} 
                className={`px-4 py-2 rounded-md transition-all ${filter === 'webapp' ? 'bg-brand-green text-charcoal' : 'bg-charcoal-light hover:bg-gray-700'}`}
              >
                <FaRegWindowRestore className="inline mr-2" />
                Web Apps
              </button>
              <button 
                onClick={() => setFilter('marketing')} 
                className={`px-4 py-2 rounded-md transition-all ${filter === 'marketing' ? 'bg-magenta text-charcoal' : 'bg-charcoal-light hover:bg-gray-700'}`}
              >
                <FaChartLine className="inline mr-2" />
                Marketing
              </button>
              <button 
                onClick={() => setFilter('live')} 
                className={`px-4 py-2 rounded-md transition-all ${filter === 'live' ? 'bg-blue-500 text-charcoal' : 'bg-charcoal-light hover:bg-gray-700'}`}
              >
                <FaExternalLinkAlt className="inline mr-2" />
                Live Sites
              </button>
              <button 
                onClick={() => setFilter('portfolio')} 
                className={`px-4 py-2 rounded-md transition-all ${filter === 'portfolio' ? 'bg-purple-500 text-charcoal' : 'bg-charcoal-light hover:bg-gray-700'}`}
              >
                <FaBriefcase className="inline mr-2" />
                Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <Link href={`/case-studies/${study.id}`}>
                  <div className="gradient-border p-0.5 rounded-xl overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="bg-charcoal-light rounded-xl overflow-hidden">
                      <div className="relative aspect-video w-full overflow-hidden">
                        {/* Project image */}
                        {study.image && (
                          <Image 
                            src={study.image}
                            alt={study.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-charcoal opacity-80"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-60"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`text-${study.color} text-6xl`}>
                            {study.icon}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold">{study.title}</h3>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                            study.type === 'Live Site' 
                              ? 'bg-blue-500/20 text-blue-300' 
                              : 'bg-purple-500/20 text-purple-300'
                          }`}>
                            {study.type}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mb-4">{study.description}</p>
                        <div className="flex justify-between items-center">
                          <div className={`text-${study.color} flex items-center`}>
                            <span className="mr-2">View Details</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                          </div>
                          
                          {study.link && (
                            <a 
                              href={study.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaExternalLinkAlt />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4 text-gray-600">
                <FaBriefcase />
              </div>
              <h3 className="text-2xl font-bold mb-2">No matching case studies</h3>
              <p className="text-gray-400">Try adjusting your filter criteria</p>
            </div>
          )}
        </div>
      </section>

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
              Ready for Your <span className="text-brand-green">Success Story</span>?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let&apos;s discuss how we can help your business grow with our AI-powered digital solutions.
              Your project could be our next case study.
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
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 