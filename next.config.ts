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
      {
        source: '/citas-inolvidables',
        destination: '/',
        permanent: true,
      },
      {
        source: '/como-reservar-o-cotizar',
        destination: '/',
        permanent: true,
      },
      {
        source: '/comprar-o-arrendar',
        destination: '/',
        permanent: true,
      },
      {
        source: '/consejos-para-elegir-maestro-constructor',
        destination: '/',
        permanent: true,
      },
      {
        source: '/creditos-hipotecarios-a-40-anos',
        destination: '/',
        permanent: true,
      },
      {
        source: '/impacto-de-la-ubicacion-al-comprar-una-propiedad',
        destination: '/',
        permanent: true,
      },
      {
        source: '/manuales',
        destination: '/',
        permanent: true,
      },
      {
        source: '/mapa-proyecto', // Redirección base para /mapa-proyecto (sin query params específicos)
        destination: '/proyecto',
        permanent: true,
      },
      {
        source: '/opciones-para-comprar-una-casa',
        destination: '/',
        permanent: true,
      },
      {
        source: '/proceso-de-compra',
        destination: '/',
        permanent: true,
      },
      {
        source: '/proyecto/altos-de-quilicura',
        destination: '/',
        permanent: true,
      },
      {
        source: '/proyecto/altos-del-alba-i-y-ii',
        destination: '/',
        permanent: true,
      },
      {
        source: '/proyecto/altos-del-alba-ii',
        destination: '/',
        permanent: true,
      },
      {
        source: '/proyecto/altos-quilicura-etapas-i-ii',
        destination: '/',
        permanent: true,
      },
      {
        source: '/proyecto/brisas-del-maipo',
        destination: '/',
        permanent: true,
      },
      {
        source: '/proyecto/casas-en-puente-alto-sf',
        destination: '/proyecto/san-francisco',
        permanent: true,
      },
      {
        source: '/proyecto/casas-en-puente-alto',
        destination: '/proyecto/san-francisco',
        permanent: true,
      },
      {
        source: '/proyecto/casas-nuevas-en-buin-2',
        destination: '/proyecto/volare',
        permanent: true,
      },

      {
        source: '/proyecto/casas-volare',
        destination: '/proyecto/volare',
        permanent: true,
      },
      {
        source: '/proyecto/los-jardines-de-pocuro',
        destination: '/',
        permanent: true,
      },
      // {
      //   source: '/proyecto/matta-sur',
      //   destination: '/',
      //   permanent: true,
      // },
      {
        source: '/proyecto/nueva-inglaterra',
        destination: '/',
        permanent: true,
      },
      {
        source: '/proyecto/portal-del-valle',
        destination: '/',
        permanent: true,
      },
      {
        source: '/proyecto/reina-isabel',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tendencias-en-diseno-de-interiores-2025',
        destination: '/',
        permanent: true,
      },
      {
        source: '/mapa-proyecto',
        destination: '/proyecto',
        permanent: true,
      },

      {
        source: '/modelo',
        destination: '/proyecto',
        permanent: true,
      },
      // Redirect old /proyectos/ routes to new /proyecto/ routes
      {
        source: '/proyectos/:slug*',
        destination: '/proyecto/:slug*',
        permanent: true,
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
    ],
  },
};

export default nextConfig;
