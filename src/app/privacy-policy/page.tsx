'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Animation variants
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function PrivacyPolicyPage() {
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
              Privacy <span className="text-brand-green">Policy</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Last updated: May 15, 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p>
                This Privacy Policy describes how MaxedLabs ("we," "us," or "our") collects, uses, and discloses your personal information when you visit our website, use our services, or interact with us in any way. Please read this policy carefully to understand our practices regarding your information.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Personal Information</h3>
              <p>
                We may collect the following types of personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Contact information (such as name, email address, phone number)</li>
                <li>Business information (such as company name, job title)</li>
                <li>Payment information (processed securely through our payment processors)</li>
                <li>Communications and correspondence with us</li>
                <li>Information you provide in forms, surveys, or feedback</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>IP address and device information</li>
                <li>Browser type and settings</li>
                <li>Pages viewed and interactions with our website</li>
                <li>Referral source and time spent on our website</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">How We Use Your Information</h2>
              <p>
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing transactions and fulfilling orders</li>
                <li>Communicating with you about our services, updates, and promotions</li>
                <li>Responding to your inquiries and support requests</li>
                <li>Analyzing usage patterns and optimizing our website</li>
                <li>Protecting against fraud and unauthorized access</li>
                <li>Complying with legal obligations</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">Information Sharing and Disclosure</h2>
              <p>
                We may share your personal information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>With service providers and partners who assist us in operating our business</li>
                <li>In connection with a business transaction (e.g., merger or acquisition)</li>
                <li>When required by law or to protect our rights</li>
                <li>With your consent or at your direction</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Restricting or objecting to our processing of your information</li>
                <li>Requesting a copy of your information in a portable format</li>
                <li>Withdrawing consent where processing is based on consent</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided at the end of this policy.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your activities on our website. You can manage your cookie preferences through your browser settings, but blocking certain cookies may affect your ability to use some features of our website.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">International Data Transfers</h2>
              <p>
                Your personal information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We will take appropriate measures to ensure that your personal information receives an adequate level of protection in the countries where we process it.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p className="mt-2 text-brand-green">
                Email: <a href="mailto:privacy@maxedlabs.com" className="text-brand-green hover:underline">privacy@maxedlabs.com</a>
              </p>
              <p className="mt-1 text-brand-green">
                Address: MaxedLabs, London, United Kingdom
              </p>
              
              <div className="mt-12 p-6 bg-gray-800 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-white">Need More Information?</h3>
                <p className="mb-4 text-gray-300">
                  If you have any questions about our privacy practices or would like to exercise your rights, please don't hesitate to contact us.
                </p>
                <Link href="/contact" className="inline-flex items-center text-brand-green hover:underline">
                  Contact Us
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 