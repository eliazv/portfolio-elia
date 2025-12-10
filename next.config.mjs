/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Necessario per export statico
  },
  // Ottimizzazioni per SEO e performance
  compress: true,
  poweredByHeader: false,
  trailingSlash: true, // Per compatibilità routing statico
};

export default nextConfig;
