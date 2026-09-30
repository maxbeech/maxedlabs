/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The site's canonical address is the bare domain (metadata, sitemap and
  // robots.txt all name it), so www must send visitors there. The platform
  // edge cannot know that; without this, www would serve a duplicate site.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.maxedlabs.com' }],
        destination: 'https://maxedlabs.com/:path*',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
    unoptimized: false, // Use Next.js image optimization for better performance
  },
  // Configure webpack to handle video files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
}

module.exports = nextConfig 