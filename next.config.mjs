/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Necessario per export statico
  },
  // Ottimizzazioni per SEO e performance
  compress: true,
  poweredByHeader: false,
  trailingSlash: true, // Per compatibilità routing statico
  // Note: with `output: "export"` Next.js does not support automatic
  // redirects during static export. Configure redirects at the hosting
  // provider (e.g., Vercel) or implement a client-side redirect page.
  // Removed `redirects()` to avoid build-time warnings for static export.
};

export default nextConfig;
