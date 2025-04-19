import { Metadata } from 'next';
import Link from 'next/link';
import { siteLinks, utilityLinks } from '../layout';

export const metadata: Metadata = {
  title: 'Sitemap | MaxedLabs',
  description: 'Navigate all pages on the MaxedLabs website with our comprehensive sitemap.',
};

// Define the NavLink type to match layout.tsx
type NavLink = {
  name: string;
  href: string;
  children?: NavLink[];
};

export default function SitemapPage() {
  // Combine all links for the sitemap
  const allLinks: NavLink[] = [...siteLinks, ...utilityLinks];

  return (
    <div className="bg-charcoal">
      <div className="max-w-5xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white">
          <span className="text-brand-green">Site</span>map
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {allLinks.map((section) => (
            <div key={section.name} className="mb-10">
              <h2 className="text-xl font-semibold mb-4 text-brand-green">
                {section.name}
              </h2>
              
              <ul className="space-y-3">
                {/* If it's not a utility link and it's not the Home page (which doesn't need its own entry) */}
                {section.name !== 'Home' && (
                  <li className="text-white hover:text-brand-green transition-colors">
                    <Link href={section.href}>{section.name}</Link>
                  </li>
                )}
                
                {/* Add subpages if they exist */}
                {section.children?.map((subpage: NavLink) => (
                  <li key={subpage.name} className="ml-4 text-gray-300 hover:text-brand-green transition-colors">
                    <Link href={subpage.href}>
                      {subpage.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Can't find what you're looking for? <Link href="/contact" className="text-brand-green hover:text-white transition-colors">Contact us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
} 