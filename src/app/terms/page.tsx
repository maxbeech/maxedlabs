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

export default function TermsPage() {
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
              Terms & <span className="text-brand-green">Conditions</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Last updated: May 15, 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p>
                Please read these Terms and Conditions ("Terms") carefully before using the MaxedLabs website or services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the MaxedLabs website, applications, or any services provided by MaxedLabs (collectively, the "Services"), you agree to be bound by these Terms. If you do not agree to all of these Terms, you may not access or use our Services.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">2. Services Description</h2>
              <p>
                MaxedLabs provides AI-powered digital solutions, including website development, app development, and digital marketing services. Our services are powered by Athenic AI, our proprietary AI platform.
              </p>
              <p className="mt-4">
                We offer different service plans as described on our website, including free initial website development and ongoing subscription-based services for maintenance and updates.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">3. Account Registration</h2>
              <p>
                To access certain features of our Services, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>
              <p className="mt-4">
                You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">4. Payment Terms</h2>
              <p>
                For paid services, you agree to pay all fees specified at the time of purchase. All payments are non-refundable unless otherwise specified or required by law.
              </p>
              <p className="mt-4">
                Subscription fees will be billed on a recurring basis according to the billing cycle you select (monthly or yearly). You may cancel your subscription at any time, but no refunds will be provided for any unused portion of your current billing cycle.
              </p>
              <p className="mt-4">
                If we are unable to process your payment, we reserve the right to suspend or terminate your access to the paid services.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">5. Intellectual Property</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Our Intellectual Property</h3>
              <p>
                The Services, including all content, features, and functionality, are owned by MaxedLabs or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Your Content</h3>
              <p>
                You retain ownership of any content you provide to us for inclusion in websites or applications we develop for you. By providing such content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display the content solely for the purpose of providing our Services to you.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Deliverables</h3>
              <p>
                Upon completion of our Services and full payment (if applicable), you will own the final deliverables we create for you, subject to any third-party licenses that may be incorporated into the deliverables. We retain ownership of pre-existing materials, tools, and frameworks we use to create the deliverables.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">6. Restrictions</h2>
              <p>
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Use the Services for any illegal purpose or in violation of any laws</li>
                <li>Infringe or violate the intellectual property or other rights of any third party</li>
                <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
                <li>Attempt to gain unauthorized access to any portion of the Services</li>
                <li>Use any automated means to access the Services</li>
                <li>Transmit any viruses, malware, or other malicious code</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">7. Termination</h2>
              <p>
                We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
              </p>
              <p className="mt-4">
                Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may simply discontinue using the Services or contact us to request account deletion.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">8. Service Transitions</h2>
              <p>
                If you decide to stop your subscription service with us, we will transfer your website code to your new hosting provider at no charge, as specified in our service agreements.
              </p>
              <p className="mt-4">
                For an additional fee (currently £150), we can convert your site to a WordPress-editable format if you wish to manage the site yourself after termination.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">9. Disclaimer of Warranties</h2>
              <p>
                Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
              <p className="mt-4">
                We do not guarantee that the Services will be uninterrupted, timely, secure, or error-free, or that any errors in the Services will be corrected.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, in no event shall MaxedLabs be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">11. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless MaxedLabs and its officers, directors, employees, agents, and suppliers from and against all claims, losses, expenses, damages, and costs, including reasonable attorneys' fees, arising out of or relating to your use of the Services or your violation of these Terms.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of the Services after such modifications constitutes your acceptance of the revised Terms.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">13. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">14. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-2 text-brand-green">
                Email: <a href="mailto:terms@maxedlabs.com" className="text-brand-green hover:underline">terms@maxedlabs.com</a>
              </p>
              <p className="mt-1 text-brand-green">
                Address: MaxedLabs, London, United Kingdom
              </p>
              
              <div className="mt-12 p-6 bg-gray-800 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-white">Have Questions?</h3>
                <p className="mb-4 text-gray-300">
                  If you have any questions about our terms or would like to discuss your specific needs, our team is here to help.
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