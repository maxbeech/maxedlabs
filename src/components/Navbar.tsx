'use client';

import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

type NavLink = {
  name: string;
  href: string;
  children?: NavLink[];
};

type NavbarProps = {
  links: NavLink[];
};

const Navbar = ({ links }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Variant for sidebar animation
  const sidebarVariants = {
    closed: { x: '100%', opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } }
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-charcoal/90 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative w-10 h-10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary rounded-md animate-gradient bg-[length:200%_200%]"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-charcoal font-bold text-xl">M</div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-white">
                    Maxed<span className="text-brand-green">Labs</span>
                  </span>
                  <span className="text-xs font-medium text-gray-400">
                    Powered by Athenic AI
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              {links.map((item, index) => {
                // Special handling for Case Studies or items without children
                const isRegularLink = item.name === 'Case Studies' || !item.children?.length;
                
                return isRegularLink ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 mx-1 text-sm font-medium rounded-md transition-all duration-300 hover:text-brand-green ${
                      pathname === item.href
                        ? 'text-brand-green'
                        : 'text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Popover key={item.name} className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={`group inline-flex items-center px-3 py-2 mx-1 text-sm font-medium rounded-md outline-none transition-all duration-300 ${
                            pathname?.startsWith(item.href)
                              ? 'text-brand-green'
                              : 'text-white hover:text-brand-green'
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDownIcon
                            className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                              open ? 'rotate-180' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 mt-3 w-56 transform px-2 sm:px-0 left-0">
                            <div className="overflow-hidden rounded-lg shadow-lg">
                              <div className="relative grid gap-1 bg-dark-blue p-2">
                                {item.children.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-charcoal/50 hover:text-brand-green transition-colors"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                )
              })}
              <Link
                href="/contact"
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-charcoal bg-brand-green hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 rounded-full bg-brand-green/10 text-brand-green transition-colors duration-300 hover:bg-brand-green/20"
                aria-expanded={isSidebarOpen}
              >
                <span className="sr-only">Open navigation menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating sidebar navigation menu */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsSidebarOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-dark-blue shadow-xl p-6 z-50 overflow-y-auto"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-md bg-gradient-primary"></div>
                  <span className="text-lg font-bold text-white">MaxedLabs</span>
                </div>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 rounded-full bg-charcoal text-white"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-2">
                {links.map((item) => {
                  // Special handling for Case Studies or items without children
                  const isRegularLink = item.name === 'Case Studies' || !item.children?.length;
                  
                  return (
                    <div key={item.name}>
                      {isRegularLink ? (
                        <Link
                          href={item.href}
                          className={`block py-3 px-4 rounded-md text-base font-medium transition-colors ${
                            pathname === item.href
                              ? 'text-brand-green bg-charcoal'
                              : 'text-white hover:bg-charcoal hover:text-brand-green'
                          }`}
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <div className="py-2">
                          <div className="px-4 py-2 text-base font-medium text-white">{item.name}</div>
                          <div className="mt-1 pl-4 border-l border-gray-600 ml-4 space-y-1">
                            {item.children.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block py-2 px-4 text-sm font-medium text-gray-300 hover:text-brand-green transition-colors"
                                onClick={() => setIsSidebarOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
                <div className="pt-6 mt-6 border-t border-gray-700">
                  <Link
                    href="/contact"
                    className="block w-full text-center py-3 px-4 bg-brand-green text-charcoal rounded-md font-medium"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 