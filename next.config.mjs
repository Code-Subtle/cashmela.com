/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  compress: true,
  poweredByHeader: false,
  
  // Package optimization for sub-second bundle parsing & navigation
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion', 'chart.js'],
  },

  // Image optimization for ultra-fast asset loading
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },

  async redirects() {
    return [
      {
        source: '/author',
        destination: '/authors',
        permanent: true,
      },
      {
        source: '/author/:slug',
        destination: '/authors/:slug',
        permanent: true,
      },
      {
        source: '/blogs/what-is-debt-consolidation',
        destination: '/blogs/easy-personal-loan-guide',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
