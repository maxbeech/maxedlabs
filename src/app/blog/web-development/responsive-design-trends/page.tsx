'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaClock, FaShare, FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

export default function BlogPost() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
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
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeInUpVariant}
            className="max-w-4xl mx-auto"
          >
            <Link 
              href="/blog/web-development" 
              className="inline-flex items-center text-gray-400 hover:text-brand-green mb-6 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              <span>Back to Web Development</span>
            </Link>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Responsive Design Trends for Modern Websites
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4 mb-8">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-brand-green" />
                <span>March 22, 2024</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2 text-brand-green" />
                <span>5 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-[16/9] mb-10 rounded-xl overflow-hidden"
            >
              <Image 
                src="/media/case_studies/post-pit_farm_tennis-2.jpg"
                alt="Responsive Design Trends"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-strong:text-brand-green prose-a:text-brand-green prose-a:no-underline hover:prose-a:underline prose-blockquote:border-brand-green prose-blockquote:bg-gray-900 prose-blockquote:p-4 prose-blockquote:rounded-md mb-8"
            >
              <p>
                Responsive design has evolved significantly since Ethan Marcotte first coined the term in 2010. What began as a solution for adapting websites to different screen sizes has transformed into a comprehensive approach to creating seamless, device-agnostic digital experiences. In 2024, responsive design encompasses not just layout adaptability, but also performance optimization, interaction patterns, and accessibility considerations.
              </p>

              <h2>Evolution of Responsive Design</h2>
              <p>
                The landscape of responsive design has expanded dramatically over the past decade:
              </p>

              <h3>From Mobile-First to Device-Agnostic</h3>
              <p>
                While mobile-first design remains a fundamental principle, today's approach has evolved to be truly device-agnostic, acknowledging the diverse ecosystem of devices and contexts:
              </p>
              <ul>
                <li>Focus has shifted from specific device categories to flexible, fluid experiences</li>
                <li>Designs now account for non-traditional devices (foldables, smart displays, etc.)</li>
                <li>Responsive components replace responsive pages as the primary design unit</li>
                <li>Interaction patterns adapt not just to screen size but to input methods and contexts</li>
              </ul>

              <blockquote>
                <p>"Good responsive design isn't about making a design that works on a specific set of devices – it's about creating an experience that adapts to whatever device or context the user brings to the table."</p>
              </blockquote>

              <h2>Current Responsive Design Trends</h2>
              <p>
                Several emerging trends are reshaping how designers approach responsive design in 2024:
              </p>

              <h3>1. Container Queries and Style Queries</h3>
              <p>
                Perhaps the most significant technical advancement in responsive design recently has been the introduction of container queries, now supported across major browsers:
              </p>
              <ul>
                <li>Components can adapt based on their parent container's size rather than viewport dimensions</li>
                <li>This enables truly responsive components that can be placed anywhere in a layout</li>
                <li>Style queries extend this concept by allowing styles to adapt based on custom properties</li>
                <li>Together, they enable a more component-driven, modular approach to responsive design</li>
              </ul>
              <p>
                This shift from global viewport-based media queries to local container-based adaptations represents one of the most fundamental changes to responsive design since its inception.
              </p>

              <h3>2. Fluid Typography and Spacing</h3>
              <p>
                Modern responsive typography has moved beyond simple breakpoint-based size adjustments:
              </p>
              <ul>
                <li>CSS clamp() function enables truly fluid typography that scales smoothly between minimum and maximum sizes</li>
                <li>Fluid type scales maintain proper hierarchical relationships at all sizes</li>
                <li>Spacing also scales proportionally using fluid calculations based on viewport size</li>
                <li>Line heights, letter spacing, and paragraph spacing adapt to maintain optimal readability</li>
              </ul>
              <p>
                This approach ensures consistent typographic hierarchy and readability across all device sizes without relying on multiple breakpoints.
              </p>

              <h3>3. Responsive to User Preferences</h3>
              <p>
                Responsive design now extends to adapting to user preferences and needs:
              </p>
              <ul>
                <li>Color schemes adapt to light/dark mode preferences with prefers-color-scheme media query</li>
                <li>Motion is reduced for users who prefer minimal animations (prefers-reduced-motion)</li>
                <li>Contrast is enhanced for users who need higher contrast (prefers-contrast)</li>
                <li>Content adapts to language and locale preferences</li>
              </ul>
              <p>
                This user-preference responsiveness acknowledges that good design must adapt not just to devices but to individual user needs and preferences.
              </p>

              <h3>4. Multi-Modal Patterns</h3>
              <p>
                Design patterns are becoming increasingly adaptive to different input methods and contexts:
              </p>
              <ul>
                <li>Elements respond intelligently to touch, pointer, and keyboard inputs</li>
                <li>Interaction patterns adapt based on pointer precision (coarse vs. fine)</li>
                <li>Navigation transforms between visible, collapsed, and gesture-based depending on context</li>
                <li>Hover states have touch/no-hover alternatives that maintain functionality</li>
              </ul>
              <p>
                This approach ensures interfaces remain accessible and intuitive regardless of how users interact with them.
              </p>

              <h3>5. Responsive-Aware Performance</h3>
              <p>
                Performance optimization has become an integral part of responsive design:
              </p>
              <ul>
                <li>Content is prioritized based on viewport importance and user needs</li>
                <li>Images and media adapt not just in size but in type, quality, and loading priority</li>
                <li>JavaScript and CSS is loaded conditionally based on device capabilities</li>
                <li>Critical rendering paths are optimized for each device category</li>
              </ul>
              <p>
                This performance-aware approach acknowledges that a truly responsive experience must consider loading times and resource usage along with visual presentation.
              </p>

              <h2>Innovative Layouts and Visual Design</h2>
              <p>
                Visual design approaches have evolved alongside technical capabilities:
              </p>

              <h3>Adaptive Grid Systems</h3>
              <p>
                Modern responsive grid systems have evolved beyond the 12-column framework:
              </p>
              <ul>
                <li>CSS Grid and subgrid enable complex, two-dimensional layouts that adapt fluidly</li>
                <li>Auto-placement algorithms intelligently reorganize content based on available space</li>
                <li>Grids adapt not just column counts but also row heights and gap sizes</li>
                <li>Aspect-ratio preservation maintains visual harmony across screen sizes</li>
              </ul>

              <h3>Scroll-Based Experiences</h3>
              <p>
                Scrolling has become a primary interaction pattern with its own responsive considerations:
              </p>
              <ul>
                <li>Horizontal scrolling sections for specific content types on larger screens</li>
                <li>Scroll-triggered animations that adapt to viewport size and device capability</li>
                <li>Sticky elements that reposition based on available screen real estate</li>
                <li>Scroll-based navigation that transforms between formats at different breakpoints</li>
              </ul>

              <h3>Adaptive Content Presentation</h3>
              <p>
                Content structure itself has become responsive:
              </p>
              <ul>
                <li>Dynamic content hierarchies that reprioritize information based on context</li>
                <li>Progressive disclosure patterns that adapt to screen size</li>
                <li>Content that transforms between formats (e.g., tables to cards) based on available space</li>
                <li>Visual storytelling techniques that adapt narrative flow to different device contexts</li>
              </ul>

              <h2>Tools and Methodologies</h2>
              <p>
                The tooling and methodologies supporting responsive design have also evolved:
              </p>

              <h3>Design Systems for Responsive Components</h3>
              <p>
                Component-based design systems now explicitly address responsive behavior:
              </p>
              <ul>
                <li>Components document their responsive behaviors across contexts</li>
                <li>Design tokens include responsive scaling relationships</li>
                <li>Variants account for different device and interaction contexts</li>
                <li>Testing frameworks validate component behavior across breakpoints</li>
              </ul>

              <h3>Dev Tools for Responsive Testing</h3>
              <p>
                Development tools have improved to support the expanded scope of responsive design:
              </p>
              <ul>
                <li>Browser DevTools with sophisticated responsive mode capabilities</li>
                <li>Container query visualization and debugging</li>
                <li>Emulation of user preferences and device capabilities</li>
                <li>Automated testing across responsive breakpoints and scenarios</li>
              </ul>

              <h2>Looking Forward</h2>
              <p>
                Several emerging trends point to the future direction of responsive design:
              </p>
              <ul>
                <li><strong>Viewport-segments and Foldable Displays:</strong> New CSS capabilities for multi-display and foldable device layouts</li>
                <li><strong>Environmental Responsiveness:</strong> Designs that adapt to lighting conditions, noise levels, and other environmental factors</li>
                <li><strong>AI-Driven Adaptivity:</strong> User interfaces that learn and adapt based on individual usage patterns</li>
                <li><strong>Cross-Device Experiences:</strong> Seamless transitions between devices for unified user journeys</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Responsive design in 2024 has evolved far beyond its original focus on adapting layouts to different screen sizes. Today's responsive approach encompasses a holistic view of adaptability that considers device capabilities, user preferences, interaction methods, and performance constraints.
              </p>
              <p>
                By embracing modern responsive design patterns and tools, designers can create experiences that feel natural and intuitive across an increasingly diverse digital landscape. The most successful responsive designs don't just work everywhere—they feel as though they were specifically designed for whatever context the user brings to the experience.
              </p>
            </motion.div>

            {/* Share Section */}
            <div className="border-t border-gray-800 pt-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="text-gray-400 mr-4">
                    <FaShare className="inline mr-2" />
                    Share this article
                  </span>
                  <div className="inline-flex space-x-2">
                    <a 
                      href="https://twitter.com/intent/tweet?url=https://maxedlabs.com/blog/web-development/responsive-design-trends"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-brand-green text-white hover:text-charcoal p-2 rounded-full transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <FaTwitter />
                    </a>
                    <a 
                      href="https://www.linkedin.com/shareArticle?mini=true&url=https://maxedlabs.com/blog/web-development/responsive-design-trends"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-brand-green text-white hover:text-charcoal p-2 rounded-full transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a 
                      href="https://www.facebook.com/sharer/sharer.php?u=https://maxedlabs.com/blog/web-development/responsive-design-trends"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-brand-green text-white hover:text-charcoal p-2 rounded-full transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <FaFacebookF />
                    </a>
                  </div>
                </div>
                <Link 
                  href="/blog/web-development"
                  className="text-brand-green hover:underline"
                >
                  <FaArrowLeft className="inline mr-2" />
                  Back to Web Development
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 