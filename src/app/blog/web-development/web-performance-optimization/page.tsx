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
              Web Performance Optimization Techniques
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4 mb-8">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-brand-green" />
                <span>April 28, 2024</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2 text-brand-green" />
                <span>7 min read</span>
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
                src="/media/case_studies/post-ics-1.jpg"
                alt="Web Performance Optimization"
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
                Web performance optimization has become more critical than ever as user expectations for speed and responsiveness continue to rise. With Google's Core Web Vitals now directly impacting search rankings and users abandoning slow sites within seconds, optimizing your website's performance is no longer optional—it's essential for business success.
              </p>

              <h2>Why Web Performance Matters in 2024</h2>
              <p>
                The impact of web performance extends far beyond user experience:
              </p>
              <ul>
                <li>Google now uses page experience signals (including loading performance) as ranking factors</li>
                <li>A 100ms delay in site speed can reduce conversion rates by up to 7%</li>
                <li>53% of mobile users abandon sites that take more than 3 seconds to load</li>
                <li>Performance optimization directly impacts accessibility for users with limited bandwidth</li>
              </ul>
              <p>
                With these statistics in mind, let's explore the most effective techniques for optimizing web performance in today's environment.
              </p>

              <h2>Core Web Vitals Optimization</h2>
              <p>
                Google's Core Web Vitals have become the industry standard for measuring user experience, focusing on three key metrics:
              </p>

              <h3>1. Largest Contentful Paint (LCP)</h3>
              <p>
                LCP measures loading performance—specifically how quickly the largest content element becomes visible to users. To optimize LCP:
              </p>
              <ul>
                <li>Implement server-side rendering (SSR) or static site generation (SSG) for critical content</li>
                <li>Optimize and properly size images using modern formats like WebP or AVIF</li>
                <li>Minimize CSS blocking time with critical CSS inline techniques</li>
                <li>Implement proper resource prioritization with preload, prefetch, and preconnect hints</li>
                <li>Consider implementing priority hints (importance attribute) for crucial resources</li>
              </ul>

              <h3>2. First Input Delay (FID) / Interaction to Next Paint (INP)</h3>
              <p>
                FID measures interactivity—how quickly your site responds to user input. In 2024, Google has begun transitioning to INP as the primary interactivity metric. To optimize:
              </p>
              <ul>
                <li>Break up long tasks into smaller, asynchronous operations</li>
                <li>Defer non-critical JavaScript with async/defer attributes</li>
                <li>Implement code-splitting to reduce main thread blocking</li>
                <li>Utilize web workers for computationally intensive tasks</li>
                <li>Optimize event listeners and reduce their impact on the main thread</li>
              </ul>

              <h3>3. Cumulative Layout Shift (CLS)</h3>
              <p>
                CLS measures visual stability—how much unexpected layout shift occurs during page loading. To minimize CLS:
              </p>
              <ul>
                <li>Always specify dimensions for images, videos, and embeds</li>
                <li>Reserve space for ads, iframes, and dynamically injected content</li>
                <li>Avoid inserting content above existing content unless in response to user interaction</li>
                <li>Use CSS transform animations instead of properties that trigger layout changes</li>
                <li>Implement content-visibility and contain CSS properties for better rendering control</li>
              </ul>

              <blockquote>
                <p>"The fastest code is code that doesn't run, the fastest asset is an asset not requested."</p>
              </blockquote>

              <h2>Modern Image and Video Optimization</h2>
              <p>
                Media optimization has evolved significantly with new formats and delivery techniques:
              </p>

              <h3>Responsive Images 2.0</h3>
              <p>
                Modern responsive image strategies go beyond basic srcset implementations:
              </p>
              <ul>
                <li>Implement client hints for automated, precise image selection</li>
                <li>Use art direction with the picture element to deliver context-appropriate images</li>
                <li>Consider image CDNs with on-the-fly optimization and adaptive serving</li>
                <li>Implement lazy loading with fetchpriority attributes for optimal resource allocation</li>
              </ul>

              <h3>Next-Gen Formats and Delivery</h3>
              <p>
                New image and video formats offer substantial performance benefits:
              </p>
              <ul>
                <li>Adopt AVIF for images (30-50% smaller than WebP with better quality)</li>
                <li>Use AV1 for video content (more efficient than VP9 and H.265)</li>
                <li>Implement adaptive streaming for video with HTTP Live Streaming (HLS) or DASH</li>
                <li>Consider using MP4 with alpha channel for animated content as WebP alternative</li>
              </ul>

              <h2>JavaScript Optimization Techniques</h2>
              <p>
                JavaScript remains one of the most significant performance bottlenecks for many websites:
              </p>

              <h3>Modern Bundling Strategies</h3>
              <p>
                Bundle optimization has evolved beyond simple minification:
              </p>
              <ul>
                <li>Implement module/nomodule pattern for modern/legacy browser differentiation</li>
                <li>Use granular chunking strategies based on route-based code splitting</li>
                <li>Consider implementing import maps for direct ESM usage in modern browsers</li>
                <li>Adopt partial hydration techniques in frameworks for reduced client-side JavaScript</li>
                <li>Implement tree-shaking at the component level for more effective dead code elimination</li>
              </ul>

              <h3>Runtime Optimization</h3>
              <p>
                Optimizing JavaScript execution is just as important as reducing bundle size:
              </p>
              <ul>
                <li>Use requestIdleCallback and requestAnimationFrame for scheduling non-critical work</li>
                <li>Implement virtualization for long lists and complex UI elements</li>
                <li>Adopt the PRPL pattern (Push, Render, Pre-cache, Lazy-load)</li>
                <li>Consider using Islands Architecture for partial hydration</li>
                <li>Implement priority-based resource loading with fetch priority hints</li>
              </ul>

              <h2>Network and Delivery Optimization</h2>
              <p>
                Advanced network optimization techniques can significantly improve perceived performance:
              </p>

              <h3>HTTP/3 and QUIC</h3>
              <p>
                The latest HTTP protocol version offers substantial performance benefits:
              </p>
              <ul>
                <li>Implement HTTP/3 with QUIC for improved connection establishment and multiplexing</li>
                <li>Reduced impact of packet loss on overall performance</li>
                <li>Better performance on mobile and unstable connections</li>
                <li>More efficient connection migration when network conditions change</li>
              </ul>

              <h3>Edge Computing and CDN Strategies</h3>
              <p>
                Moving computing closer to users has become more accessible and effective:
              </p>
              <ul>
                <li>Implement edge functions for dynamic content with near-static performance</li>
                <li>Use CDN-level image optimization and adaptation</li>
                <li>Consider implementing compute-at-edge for personalization without origin round-trips</li>
                <li>Optimize CDN cache hit rates with smarter cache key strategies</li>
              </ul>

              <h2>Measuring and Monitoring Performance</h2>
              <p>
                Effective performance optimization requires robust measurement and monitoring:
              </p>

              <h3>Real User Monitoring (RUM)</h3>
              <p>
                Lab metrics are useful, but real user data should drive optimization decisions:
              </p>
              <ul>
                <li>Implement Web Vitals measurement with detailed breakdowns by user segments</li>
                <li>Track user-centric metrics like Interaction to Next Paint (INP)</li>
                <li>Monitor long tasks and input latency for deeper interactivity insights</li>
                <li>Set up performance budgets with automated alerts for regressions</li>
              </ul>

              <h3>Advanced DevTools Techniques</h3>
              <p>
                Modern Chrome DevTools offer powerful performance analysis capabilities:
              </p>
              <ul>
                <li>Use the Performance Insights panel for automatic bottleneck detection</li>
                <li>Implement User Timing API markers for custom performance measurement</li>
                <li>Analyze JavaScript execution with the Performance panel's Bottom-Up and Call Tree views</li>
                <li>Use Lighthouse in CI/CD pipelines for automated performance regression testing</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Web performance optimization is a continuous process rather than a one-time effort. By focusing on Core Web Vitals, implementing modern image and JavaScript optimization techniques, and leveraging advanced delivery mechanisms, you can significantly improve both perceived and actual performance metrics.
              </p>
              <p>
                The techniques outlined in this article represent the current best practices in web performance optimization, but the field continues to evolve rapidly. Staying current with new browser capabilities, measurement methodologies, and optimization techniques will help ensure your web properties deliver the fast, responsive experience users expect in 2024 and beyond.
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
                      href="https://twitter.com/intent/tweet?url=https://maxedlabs.com/blog/web-development/web-performance-optimization"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-brand-green text-white hover:text-charcoal p-2 rounded-full transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <FaTwitter />
                    </a>
                    <a 
                      href="https://www.linkedin.com/shareArticle?mini=true&url=https://maxedlabs.com/blog/web-development/web-performance-optimization"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-brand-green text-white hover:text-charcoal p-2 rounded-full transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a 
                      href="https://www.facebook.com/sharer/sharer.php?u=https://maxedlabs.com/blog/web-development/web-performance-optimization"
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