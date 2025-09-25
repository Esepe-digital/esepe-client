import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import WhatsappButton from '@/components/whatsapp-button';
import { Open_Sans } from 'next/font/google';

import ReCaptchaProvider from '@/providers/recaptcha-provider';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
//import MetaPixel from '@/components/utils/meta-pixel';
import esepeLogo from '@/assets/logos/esepe-logo.png';
import Script from 'next/script';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ??
      (() => {
        throw new Error('NEXT_PUBLIC_BASE_URL is not defined');
      })()
  ),
  title: 'Encuentra tu casa o departamento aquí | Inmobiliaria ESEPE',
  description:
    'Explora proyectos en venta en Chile con ESEPE. Encuentra tu hogar ideal y comienza el proceso hoy. ¡Contáctanos y da el primer paso!',
  openGraph: {
    title: 'Encuentra tu casa o departamento aquí | Inmobiliaria ESEPE',
    description:
      'Explora proyectos en venta en Chile con ESEPE. Encuentra tu hogar ideal y comienza el proceso hoy. ¡Contáctanos y da el primer paso!',
    images: [esepeLogo.src],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_ENVIRONMENT === 'production' && (
        <GoogleTagManager gtmId="GTM-WL9RHFB" />
      )}
      { 
      '<!-- Google Tag Manager -->'
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WL9RHFB');</script>
      '<!-- End Google Tag Manager -->'
      }
      {process.env.NEXT_PUBLIC_ENVIRONMENT === 'production' && (
        <GoogleAnalytics gaId="AW-10877400073" />
      )}
      <head>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${openSans.className} antialiased`}>
        <Navbar />
        <ReCaptchaProvider>{children}</ReCaptchaProvider>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
