# MaxedLabs Website

A modern, avant-garde website for MaxedLabs, an AI-powered digital agency that maximizes business sales through cutting-edge digital solutions.

## Features

- Modern, asymmetrical layouts with dynamic animations
- Premium, non-template aesthetic design
- Responsive across all device sizes
- High performance with optimized images and animations
- SEO-friendly markup and structure
- Dynamic sitemap generation

## Technologies Used

- Next.js 14 (React framework)
- TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Headless UI for accessible UI components
- React Icons for iconography

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/maxedlabs.git
cd maxedlabs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

- `/src/app` - Next.js app router pages and layouts
- `/src/components` - React components organized by feature/functionality
- `/src/components/layout` - Layout components like headers and footers
- `/src/components/ui` - Reusable UI components
- `/public/media` - Static assets (images, icons, etc.)

## Deployment

This site is hosted on Helm7, which builds the `helm7` branch of this repository with `npm run build` and serves it with `npm start` (the port comes from `$PORT`). `www.maxedlabs.com` redirects to `maxedlabs.com`, which is the canonical address.

```bash
npm run build
npm start
```

Checks: `npm run typecheck` and `npm test`.

## Adding/Modifying Content

To add or modify content:

1. For adding new pages, create files in the appropriate directories under `/src/app`
2. Update the `siteLinks` array in `/src/app/layout.tsx` to include new pages in navigation and sitemap
3. Images should be placed in the `/public/media` directory

## About MaxedLabs

MaxedLabs is a digital agency that maximizes business sales through:
- Website development
- App development
- Digital marketing

All services are powered by Athenic AI, which provides autonomous updates and content creation.

## License

Copyright © MaxedLabs, all rights reserved. 