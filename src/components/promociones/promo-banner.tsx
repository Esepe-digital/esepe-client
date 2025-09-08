'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export interface CarruselItem {
  imagen_desktop: string;
  imagen_mobile?: string | false;
  link?: string;
}

export interface PromoBannerProps {
  type?: 'image' | 'video' | 'carrusel';
  imageUrl?: string;
  imageMobileUrl?: string;
  altText?: string;
  linkUrl?: string;
  videoUrl?: string;
  carruselItems?: CarruselItem[];
  autoplayInterval?: number;
}

export default function PromoBanner({
  type = 'image',
  imageUrl,
  imageMobileUrl,
  altText = '',
  linkUrl = '#',
  videoUrl,
  carruselItems = [],
  autoplayInterval = 5000,
}: PromoBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = carruselItems.length;
  const { width: windowWidth } = useWindowSize();
  const isHydrated = windowWidth > 0;
  const isMobile = windowWidth < 768;

  const shouldRender = isHydrated || type === 'video';

  useEffect(() => {
    if (type !== 'carrusel' || total === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [type, total, autoplayInterval]);

  const goToSlide = (index: number) => setCurrentIndex(index);

  const getImageUrl = (item: CarruselItem) =>
    isMobile && item.imagen_mobile ? item.imagen_mobile : item.imagen_desktop;

  const renderImage = (src: string, alt: string) => {
    console.log('Rendering image:', src);
    return (
      <div className="w-full">
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={467}
          priority
          className="w-full h-auto object-cover"
        />
      </div>
    );
  };

  if (!shouldRender) {
    console.log('Banner no renderizado: shouldRender es false');
    return null;
  }

  return (
    <motion.div
      className="w-full overflow-hidden pt-[50px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative w-full h-auto bg-red-100">
        {' '}
        {/* fondo temporal para debug */}
        {/* IMAGEN ESTÁTICA */}
        {type === 'image' && imageUrl && (
          <>
            <Link href={linkUrl} className="block w-full h-full">
              {renderImage(
                isMobile && imageMobileUrl ? imageMobileUrl : imageUrl,
                altText
              )}
            </Link>
          </>
        )}
        {/* VIDEO */}
        {type === 'video' && videoUrl && (
          <>
            {console.log('Renderizando video')}
            <div className="relative w-full aspect-[16/9]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            </div>
          </>
        )}
        {/* CARRUSEL */}
        {type === 'carrusel' && total > 0 && (
          <>
            {console.log('Renderizando carrusel')}
            {carruselItems.map((item, idx) => (
              <div
                key={idx}
                className={`${
                  total === 1 ? '' : 'absolute top-0 left-0'
                } w-full transition-opacity duration-700 ease-in-out ${
                  idx === currentIndex
                    ? 'opacity-100'
                    : 'opacity-0 pointer-events-none'
                }`}
              >
                <Link href={item.link || '#'} className="block w-full h-full">
                  {renderImage(getImageUrl(item), `Slide ${idx + 1}`)}
                </Link>
              </div>
            ))}

            {/* Puntos del carrusel */}
            {total > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
                {carruselItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-2 h-2 rounded-full ${
                      idx === currentIndex ? 'bg-[#4A6792]' : 'bg-[#D1D5DA]'
                    } transition-all duration-300`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
}
