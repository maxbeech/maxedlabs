'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { getCaseStudyById, getRelatedCaseStudies, CaseStudy } from '@/data/case-studies';

export default function CaseStudyPage() {
  const params = useParams();
  const router = useRouter();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [relatedStudies, setRelatedStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (params.id) {
      // Find the case study with the matching ID
      const study = getCaseStudyById(params.id as string);
      
      if (study) {
        setCaseStudy(study);
        setRelatedStudies(getRelatedCaseStudies(study.id));
      } else {
        // If no matching case study is found, redirect to the case studies index
        router.push('/case-studies');
      }
      
      setLoading(false);
    }
  }, [params.id, router]);
  
  if (loading) {
    return (
      <div className="bg-charcoal text-white min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-green"></div>
      </div>
    );
  }
  
  if (!caseStudy) {
    return null;
  }
  
  // Color map for Tailwind classes with proper typing
  const colorMap: Record<string, string> = {
    'brand-green': 'text-green-500',
    'teal': 'text-teal-500',
    'magenta': 'text-magenta',
    // Add other colors as needed
  };
  
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
          <Link href="/case-studies" className="inline-flex items-center text-gray-400 hover:text-brand-green mb-8 transition-colors">
            <FaArrowLeft className="mr-2" />
            Back to all case studies
          </Link>
          
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-2/3"
            >
              <div className="flex items-center mb-4">
                <span className={`mr-2 ${colorMap[caseStudy.color] || 'text-white'}`}>
                  {caseStudy.icon}
                </span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  caseStudy.type === 'Live Site' 
                    ? 'bg-blue-500/20 text-blue-300' 
                    : 'bg-purple-500/20 text-purple-300'
                }`}>
                  {caseStudy.type}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {caseStudy.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {caseStudy.longDescription}
              </p>
              
              {caseStudy.link && (
                <a
                  href={caseStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Visit Live Site
                  <FaExternalLinkAlt className="ml-2" />
                </a>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/3"
            >
              <div className="gradient-border p-0.5 rounded-xl overflow-hidden">
                <div className="bg-charcoal-light rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-400">Client</p>
                      <p className="font-medium">{caseStudy.client}</p>
                    </div>
                    
                    {caseStudy.duration && (
                      <div>
                        <p className="text-sm text-gray-400">Duration</p>
                        <p className="font-medium">{caseStudy.duration}</p>
                      </div>
                    )}
                    
                    {caseStudy.year && (
                      <div>
                        <p className="text-sm text-gray-400">Year</p>
                        <p className="font-medium">{caseStudy.year}</p>
                      </div>
                    )}
                    
                    <div>
                      <p className="text-sm text-gray-400">Services</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {caseStudy.services.map((service, index) => (
                          <span key={index} className="text-xs bg-charcoal rounded-full px-3 py-1">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Project Images Section */}
      {caseStudy.images && caseStudy.images.length > 0 && (
        <section className="py-16 border-t border-gray-800 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.images.map((image, index) => (
                <motion.div
                  key={index}
                  className="gradient-border p-0.5 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="bg-charcoal-light rounded-xl overflow-hidden">
                    <div className="relative aspect-video">
                      <Image 
                        src={image}
                        alt={`${caseStudy.title} - Image ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenge & Solution Section */}
      {(caseStudy.challenge || caseStudy.solution) && (
        <section className="py-16 border-t border-gray-800 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              {caseStudy.challenge && (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="md:w-1/2"
                >
                  <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                  <p className="text-gray-300">{caseStudy.challenge}</p>
                </motion.div>
              )}
              
              {caseStudy.solution && (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="md:w-1/2"
                >
                  <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
                  <p className="text-gray-300">{caseStudy.solution}</p>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {caseStudy.results && caseStudy.results.length > 0 && (
        <section className="py-16 bg-charcoal-light relative">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Results & <span className="text-brand-green">Impact</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.results.map((result, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-charcoal rounded-xl p-6 text-center"
                >
                  <p className="text-gray-400 mb-2">{result.metric}</p>
                  <div className="flex justify-center items-baseline gap-4 mb-2">
                    <p className="text-red-400 line-through text-lg">{result.before}</p>
                    <p className="text-green-400 text-3xl font-bold">{result.after}</p>
                  </div>
                  <p className="text-brand-green font-medium">
                    {result.increase} Increase
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {caseStudy.features && caseStudy.features.length > 0 && (
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Key <span className="text-brand-green">Features</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-charcoal-light rounded-xl p-6"
                >
                  <div className={`mb-4 text-2xl ${colorMap[caseStudy.color] || 'text-white'}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {caseStudy.testimonial && (
        <section className="py-16 bg-gradient-to-r from-charcoal-light to-charcoal relative">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl text-brand-green mb-6">"</div>
              <p className="text-xl md:text-2xl italic mb-6">
                {caseStudy.testimonial.quote}
              </p>
              <p className="font-medium">{caseStudy.testimonial.author}</p>
              <p className="text-gray-400">{caseStudy.testimonial.title}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Related <span className="text-brand-green">Projects</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedStudies.map((study) => (
                <motion.div 
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative group"
                >
                  <Link href={`/case-studies/${study.id}`}>
                    <div className="gradient-border p-0.5 rounded-xl overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02]">
                      <div className="bg-charcoal-light rounded-xl overflow-hidden">
                        <div className="relative aspect-video w-full overflow-hidden">
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
                            <div className={`text-6xl ${colorMap[study.color] || 'text-white'}`}>
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
                          <div className={`flex items-center ${colorMap[study.color] || 'text-white'}`}>
                            <span className="mr-2">View Details</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
              Ready to Create Your <span className="text-brand-green">Success Story</span>?
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
              <Link href="/services" className="btn-secondary">
                View Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 