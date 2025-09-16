import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async redirects() {
    return [
      // ... todos tus redirects tal como ya están ...
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/blog',
        destination: 'https://api.esepe.cl/wp-json/esepe/v2/blog',
      },
      {
        source: '/api/paginas',
        destination: 'https://api.esepe.cl/wp-json/esepe/v2/paginas',
      },
      {
        source: '/api/proyectos',
        destination: 'https://api.esepe.cl/wp-json/esepe/v2/proyectos',
      },
      {
        source: '/api/legales',
        destination: 'https://api.esepe.cl/wp-json/esepe/v2/paginas?name=legales',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: 'esepe-wp.test-3.soho.cl',
        protocol: 'https',
      },
      {
        hostname: 'esepe.cl',
        protocol: 'https',
      },
      {
        hostname: 'esepe-wp-uat.soho.cl',
        protocol: 'https',
      },
      {
        hostname: 'v0-esepe.vercel.app',
        protocol: 'https',
      },
      {
        hostname: 'esepe-uat.soho.cl',
        protocol: 'https',
      },
      {
        hostname: 'img.youtube.com',
        protocol: 'https',
      },
      {
        hostname: 'api.esepe.cl',
        protocol: 'https',
      },
      {
        hostname: 'topclass-entertainment.com',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
