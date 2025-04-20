import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const clash = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'], 
  variable: '--font-clash' 
})

export const metadata: Metadata = {
  title: 'MaxedLabs | AI-Powered Digital Agency',
  description: 'MaxedLabs is a digital agency that maximizes business sales through cutting-edge AI-powered website development, app development, and digital marketing solutions.',
  keywords: 'MaxedLabs, AI website development, automated web design agency, AI digital marketing agency, Athenic AI, AI-powered site maintenance',
  icons: {
    icon: '/media/favicon.png',
    apple: '/media/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://maxedlabs.com',
    title: 'MaxedLabs | AI-Powered Digital Agency',
    description: 'MaxedLabs is a digital agency that maximizes business sales through cutting-edge AI-powered website development, app development, and digital marketing solutions.',
    siteName: 'MaxedLabs',
    images: [
      {
        url: '/media/logo.png',
        width: 1200,
        height: 630,
        alt: 'MaxedLabs',
      },
    ],
  },
}

// This data structure will be used to generate the sitemap dynamically
export const siteLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    children: [
      { name: 'Website Development', href: '/services/website-development' },
      { name: 'App Development', href: '/services/app-development' },
      { name: 'Digital Marketing', href: '/services/digital-marketing' },
    ]
  },
  { name: 'Athenic AI', href: '/athenic-ai' },
  { 
    name: 'Case Studies', 
    href: '/case-studies',
    children: []
  },
  { name: 'Pricing & Plans', href: '/pricing' },
  { 
    name: 'Blog', 
    href: '/blog',
    children: [
      { name: 'AI & Technology', href: '/blog/ai-technology' },
      { name: 'Web Development', href: '/blog/web-development' },
      { name: 'Digital Marketing', href: '/blog/digital-marketing' },
    ]
  },
  { name: 'Contact', href: '/contact' },
];

// Utility links for footer
export const utilityLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Sitemap', href: '/sitemap' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${clash.variable}`}>
      <body className="font-sans antialiased">
        <Navbar links={siteLinks} />
        <main>
          {children}
        </main>
        <Footer links={siteLinks} utilityLinks={utilityLinks} />
      </body>
    </html>
  )
} 