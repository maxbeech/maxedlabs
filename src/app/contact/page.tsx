'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane, FaCheck } from 'react-icons/fa';

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

// Define service types for the form
const serviceTypes = [
  { id: 'website', label: 'Website Development' },
  { id: 'app', label: 'App Development' },
  { id: 'marketing', label: 'Digital Marketing' },
  { id: 'other', label: 'Other' }
];

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is updated
    if (formErrors[name]) {
      setFormErrors(prev => {
        const errors = { ...prev };
        delete errors[name];
        return errors;
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.serviceType) errors.serviceType = 'Please select a service type';
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        company: '',
        serviceType: '',
        message: '',
      });
    }, 1500);
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
              <span className="text-brand-green">Get in</span> Touch
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Reach out to us to discuss how we can help maximize your business through cutting-edge digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariant}
                custom={1}
                className="bg-gray-900 rounded-2xl overflow-hidden p-8"
              >
                <h2 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-green/20 text-brand-green rounded-full mb-4">
                      <FaCheck className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Thank You!</h3>
                    <p className="text-gray-300">
                      Your message has been sent successfully. We'll get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 px-6 py-3 bg-brand-green text-charcoal rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white font-medium mb-2">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-800 border ${formErrors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent`}
                          placeholder="Your name"
                        />
                        {formErrors.name && <p className="mt-1 text-red-500 text-sm">{formErrors.name}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-white font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-800 border ${formErrors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent`}
                          placeholder="Your email"
                        />
                        {formErrors.email && <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-white font-medium mb-2">Company (Optional)</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                          placeholder="Your company"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="serviceType" className="block text-white font-medium mb-2">Service Type *</label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-800 border ${formErrors.serviceType ? 'border-red-500' : 'border-gray-700'} rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent`}
                        >
                          <option value="">Select a service</option>
                          {serviceTypes.map(service => (
                            <option key={service.id} value={service.id}>
                              {service.label}
                            </option>
                          ))}
                        </select>
                        {formErrors.serviceType && <p className="mt-1 text-red-500 text-sm">{formErrors.serviceType}</p>}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-white font-medium mb-2">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full px-4 py-3 bg-gray-800 border ${formErrors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent`}
                        placeholder="Tell us about your project"
                      ></textarea>
                      {formErrors.message && <p className="mt-1 text-red-500 text-sm">{formErrors.message}</p>}
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-8 py-3 bg-brand-green text-charcoal rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin mr-2 h-4 w-4 border-2 border-charcoal border-t-transparent rounded-full"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <FaPaperPlane className="ml-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
              
              {/* Contact Information */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariant}
                custom={2}
                className="lg:mt-0"
              >
                <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center text-brand-green">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-medium">Location</h3>
                      <p className="text-gray-400 mt-1">London, United Kingdom</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center text-brand-green">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-medium">Email</h3>
                      <a href="mailto:hello@maxedlabs.com" className="text-gray-400 mt-1 hover:text-brand-green transition-colors">
                        hello@maxedlabs.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center text-brand-green">
                      <FaPhone className="text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-medium">Phone</h3>
                      <a href="tel:+442071234567" className="text-gray-400 mt-1 hover:text-brand-green transition-colors">
                        +44 20 7123 4567
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-white mb-4">How We Work</h3>
                  
                  <ol className="space-y-6">
                    <li className="flex">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-green rounded-full flex items-center justify-center text-charcoal font-bold">
                        1
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white font-medium">Initial Consultation</h4>
                        <p className="text-gray-400 mt-1">
                          We'll discuss your business needs and goals to understand how we can help.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-green rounded-full flex items-center justify-center text-charcoal font-bold">
                        2
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white font-medium">Proposal & Planning</h4>
                        <p className="text-gray-400 mt-1">
                          We'll create a tailored proposal with a clear timeline and deliverables.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-green rounded-full flex items-center justify-center text-charcoal font-bold">
                        3
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white font-medium">Development & Launch</h4>
                        <p className="text-gray-400 mt-1">
                          Our AI-powered system will develop your solution with continuous feedback.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-green rounded-full flex items-center justify-center text-charcoal font-bold">
                        4
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white font-medium">Ongoing Optimization</h4>
                        <p className="text-gray-400 mt-1">
                          Athenic AI continually optimizes your digital presence for maximum results.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariant}
              custom={0}
              className="text-3xl font-bold mb-12 text-white text-center"
            >
              Frequently Asked <span className="text-brand-green">Questions</span>
            </motion.h2>
            
            <div className="space-y-8">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariant}
                custom={3}
                className="bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">How quickly can you build my website?</h3>
                <p className="text-gray-300">
                  Thanks to our AI-powered approach, we can typically have a first version ready within days rather than weeks or months. We'll then work with you to refine it until you're completely satisfied.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariant}
                custom={4}
                className="bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">What makes MaxedLabs different from other agencies?</h3>
                <p className="text-gray-300">
                  We combine the strategic thinking of a traditional agency with the speed and efficiency of AI. Our Athenic AI platform allows us to deliver high-quality work faster and more cost-effectively than traditional agencies, while still providing a personalized service.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariant}
                custom={5}
                className="bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">Do you offer ongoing support?</h3>
                <p className="text-gray-300">
                  Absolutely! Our all-inclusive monthly/yearly plan covers unlimited updates and changes to your website, plus hosting and regular improvements. It's designed to be a complete, hassle-free solution for your digital presence.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 