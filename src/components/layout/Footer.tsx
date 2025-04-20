'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaPinterestP, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

type NavLink = {
  name: string;
  href: string;
  children?: NavLink[];
};

type FooterProps = {
  links: NavLink[];
  utilityLinks: NavLink[];
};

const Footer = ({ links, utilityLinks }: FooterProps) => {
  const mainLinks = links.filter(link => 
    link.name !== 'Home' && 
    link.name !== 'Contact'
  );

  const currentYear = new Date().getFullYear();
  
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  };

  const footerAnimationDelayed = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  });

  return (
    <footer className="bg-brand-blue text-white relative overflow-hidden">
      {/* Abstract shape decoration */}
      <div className="absolute top-0 left-0 opacity-10 w-1/3">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#82D09B" d="M37.9,-65.5C47.4,-56.3,53,-43.1,60.5,-30.1C68,-17.2,77.5,-4.6,77.7,8.4C77.9,21.4,68.8,34.7,58.1,44.9C47.3,55.2,34.9,62.3,21.1,68.2C7.2,74.1,-8.1,78.7,-21.4,74.9C-34.8,71.1,-46.1,58.9,-56.4,46.1C-66.7,33.3,-75.9,19.9,-77.5,5.3C-79.1,-9.3,-73.2,-24.9,-63.3,-35.8C-53.5,-46.7,-39.8,-52.8,-27.1,-60.4C-14.4,-68,-7.2,-77,2.7,-81.3C12.7,-85.6,25.4,-85.1,37.9,-65.5Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 opacity-10 w-1/3">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#3FBFC0" d="M36.3,-58.8C46.1,-50.4,52.5,-38.5,59.6,-25.8C66.7,-13.1,74.3,0.5,74.4,14.3C74.5,28.2,67,42.3,55.7,51.6C44.4,60.9,29.3,65.3,14.2,68.5C-0.9,71.7,-16,73.5,-29.9,69.6C-43.9,65.7,-56.7,56,-63.9,43C-71.1,29.9,-72.8,13.5,-72.5,-2.9C-72.2,-19.4,-70,-36,-60.9,-47.4C-51.9,-58.8,-36,-65.1,-21.2,-68.7C-6.4,-72.3,7.3,-73.3,19.9,-70.1C32.4,-67,44.8,-59.6,36.3,-58.8Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Company info and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-md bg-gradient-primary animate-gradient bg-[length:200%_200%]"></div>
              <span className="text-xl font-bold">Maxed<span className="text-brand-green">Labs</span></span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We maximize business sales through cutting-edge digital solutions, 
              combining website development, app development, and data-driven 
              marketing - all supercharged by Athenic AI.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/maxedlabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-charcoal p-3 rounded-full text-brand-green hover:bg-brand-green hover:text-charcoal transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/maxedlabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-charcoal p-3 rounded-full text-brand-green hover:bg-brand-green hover:text-charcoal transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/maxedlabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-charcoal p-3 rounded-full text-brand-green hover:bg-brand-green hover:text-charcoal transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation Links - dynamically from site structure */}
          {mainLinks.map((category, index) => (
            <div key={category.name}>
              <h3 className="text-lg font-semibold mb-4 text-brand-green">{category.name}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href={category.href} className="text-gray-300 hover:text-brand-green transition-colors duration-300 custom-underline">
                    {category.name}
                  </Link>
                </li>
                {category.children?.map((subcategory) => (
                  <li key={subcategory.name}>
                    <Link href={subcategory.href} className="text-gray-300 hover:text-brand-green transition-colors duration-300 custom-underline">
                      {subcategory.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-green">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">
                <span className="font-medium text-white">Email:</span> hello@maxedlabs.com
              </li>
              <li className="text-gray-300">
                <span className="font-medium text-white">Location:</span> London, UK
              </li>
              <li className="mt-6">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-brand-green hover:text-white transition-colors duration-300"
                >
                  <span className="custom-underline">Get in touch</span>
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section with copyright and utility links */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
          <p>&copy; {currentYear} MaxedLabs. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
            {utilityLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-brand-green transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 