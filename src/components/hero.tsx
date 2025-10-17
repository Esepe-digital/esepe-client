'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  InicioResponse,
  CarruselItem,
} from '@/interfaces/inicio/inicioResponse';
import dynamic from 'next/dynamic';
import { useMobile } from '@/hooks/use-mobile';

const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export function Hero({ data }: InicioResponse) {
  const { media, boton, texto_de_bajada, titulo_del_banner, imagen_mobile } =
    data?.result?.banner_principal || {};

  const [isLoading, setIsLoading] = useState(false);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const pathname = usePathname();
  const isMobile = useMobile();

  const imageUrl = isMobile && imagen_mobile ? imagen_mobile : media?.url;
  const carruselItems: CarruselItem[] = media?.carrusel || [];
  const hasCarousel = carruselItems.length > 0;

  // Carrusel automático
  useEffect(() => {
    if (!hasCarousel) return;
    const timer = setInterval(() => {
      setCurrentCarouselIndex((prev) => (prev + 1) % carruselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [hasCarousel, carruselItems.length]);

  const handlePromotionsClick = () => {
    if (pathname !== '/promociones') {
      setIsLoading(true);
    }
  };

  if (!data?.result?.banner_principal) {
    return (
      <div className="w-full bg-gray-100 flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-600 mb-4">
            Cargando banner...
          </h1>
          <p className="text-gray-500">Esperando datos del servidor</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full overflow-hidden"
    >
      {/* Fondo visual (imagen, carrusel o video) */}
      <div className="relative w-full">
        {media?.type === 'video' ? (
          <div className="relative w-full aspect-video">
            <ReactPlayer
              url={media?.url}
              playing
              loop
              muted
              controls={false}
              width="100%"
              height="100%"
              config={{
                file: {
                  attributes: {
                    style: {
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    },
                  },
                },
              }}
              playsinline
            />
          </div>
        ) : hasCarousel ? (
          <div className="relative w-full">
            {carruselItems.map((item, index) => (
              <div
                key={index}
                className={`transition-opacity duration-1000 ease-in-out ${
                  index === currentCarouselIndex
                    ? 'opacity-100'
                    : 'opacity-0 absolute inset-0'
                }`}
              >
                <Image
                  src={
                    isMobile && item.imagen_mobile
                      ? item.imagen_mobile
                      : item.imagen_desktop
                  }
                  alt={`Carrusel ${index + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        ) : (
          imageUrl && (
            <Image
              src={imageUrl}
              alt="Banner"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className="object-contain"
              priority
            />
          )
        )}
      </div>

      {/* Contenido superpuesto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <div className="container h-full px-4 text-center text-white">
          {titulo_del_banner && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={`${poppins.className} max-w-4xl mx-auto text-4xl font-semibold tracking-tight sm:text-3xl md:text-5xl`}
            >
              <span className="inline bg-black/30 px-2 py-1 rounded-xl">
                {titulo_del_banner}
              </span>
            </motion.h1>
          )}
          {texto_de_bajada && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="inline-block px-3 rounded-md max-w-2xl mx-auto my-6 bg-black/30 text-lg text-gray-200 sm:text-xl"
            >
              {texto_de_bajada}
            </motion.p>
          )}
          {boton?.url && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-4 h-full"
            >
              <Button
                asChild
                className={`px-12 py-6 w-full h-full text-transparent bg-black/0 border-2 hover:bg-black/10 ${
                  isLoading && pathname !== boton?.url
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
              >
                <Link
                  href={boton?.url}
                  target={boton?.target}
                  onClick={handlePromotionsClick}
                >
                  {isLoading && pathname !== '/promociones' ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    boton?.title
                  )}
                </Link>
              </Button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
