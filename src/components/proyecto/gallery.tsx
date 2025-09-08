'use client';

import type React from 'react';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageGalleryProps } from '@/interfaces/proyectos/gallery';
import esepeLogo from '@/assets/logos/esepe-logo.png';

// Helper function to detect if the media is a video
const isVideo = (src: string, type?: 'image' | 'video'): boolean => {
  if (type) return type === 'video';

  const videoExtensions = [
    '.mp4',
    '.webm',
    '.ogg',
    '.mov',
    '.avi',
    '.mkv',
    '.m4v',
  ];
  return videoExtensions.some((ext) => src.toLowerCase().includes(ext));
};

// Media component that renders either Image or Video
const MediaComponent = ({
  src,
  alt,
  type,
  fill = false,
  className = '',
  priority = false,
  controls = true,
}: {
  src: string;
  alt: string;
  type?: 'image' | 'video';
  fill?: boolean;
  className?: string;
  priority?: boolean;
  controls?: boolean;
}) => {
  if (isVideo(src, type)) {
    return (
      <video
        src={src}
        className={`${fill ? 'w-full h-full object-cover' : ''} ${className}`}
        controls={controls}
        preload="metadata"
        style={
          fill
            ? {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }
            : {}
        }
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
    );
  }

  return (
    <Image
      src={src || '/placeholder.svg'}
      alt={alt}
      fill={fill}
      className={className}
      priority={priority}
    />
  );
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const itemWidth = 100;
  const [showThumbnailArrows, setShowThumbnailArrows] = useState(false);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  }, [images.length]);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (thumbnailsRef.current) {
      const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
      const newPosition = scrollPosition + scrollAmount;

      // Ensure we don't scroll beyond the limits
      if (
        newPosition >= 0 &&
        newPosition <=
          images.length * itemWidth - thumbnailsRef.current.clientWidth
      ) {
        setScrollPosition(newPosition);
        thumbnailsRef.current.scrollTo({
          left: newPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  // Ensure the active thumbnail is visible
  useEffect(() => {
    if (thumbnailsRef.current) {
      const thumbnailPosition = currentIndex * itemWidth;

      // If the current thumbnail is not visible in the current scroll view
      if (
        thumbnailPosition < scrollPosition ||
        thumbnailPosition >
          scrollPosition + thumbnailsRef.current.clientWidth - itemWidth
      ) {
        setScrollPosition(thumbnailPosition);
        thumbnailsRef.current.scrollTo({
          left: thumbnailPosition,
          behavior: 'smooth',
        });
      }
    }
  }, [currentIndex, scrollPosition]);

  // Handle touch events for mobile swipe
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    // If the swipe distance is significant enough
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left, go to next
        handleNext();
      } else {
        // Swiped right, go to previous
        handlePrevious();
      }
    }

    touchStartX.current = null;
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePrevious, handleNext]);

  useEffect(() => {
    const checkIfArrowsNeeded = () => {
      if (thumbnailsRef.current) {
        const containerWidth = thumbnailsRef.current.clientWidth;
        const scrollWidth = thumbnailsRef.current.scrollWidth;
        const isOverflowing = scrollWidth > containerWidth;
        setShowThumbnailArrows(isOverflowing);

        // Ajustar el ancho máximo del contenedor de miniaturas
        if (isOverflowing) {
          thumbnailsRef.current.style.maxWidth = `calc(100% - 5rem)`; // 5rem para dejar espacio para los botones
        } else {
          thumbnailsRef.current.style.maxWidth = '100%';
        }
      }
    };

    // Comprobar inicialmente
    checkIfArrowsNeeded();

    // Comprobar cuando cambie el tamaño de la ventana
    window.addEventListener('resize', checkIfArrowsNeeded);

    return () => {
      window.removeEventListener('resize', checkIfArrowsNeeded);
    };
  }, [images.length]);

  if (images.length === 0) {
    return <div className="p-8 text-center">No hay imágenes disponibles</div>;
  }

  const currentMedia = images[currentIndex];
  const isCurrentVideo = isVideo(currentMedia.src, currentMedia.type);

  return (
    <div className="w-full max-w-5xl mx-auto" id="galeria">
      {/* Main Media Container */}
      <div
        className="relative aspect-[16/9] w-full overflow-hidden rounded-lg mb-4"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <MediaComponent
          src={currentMedia.src}
          alt={currentMedia.alt}
          type={currentMedia.type}
          fill={true}
          className="transition-opacity duration-300"
          priority={true}
        />

        {/* Navigation Arrows for Main Media - Only show if not a video or video is paused */}
        <button
          onClick={handlePrevious}
          className="absolute p-2 text-white transition-colors -translate-y-1/2 rounded-full left-2 top-1/2 bg-black/30 hover:bg-black/50"
          aria-label="Media anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute p-2 text-white transition-colors -translate-y-1/2 rounded-full right-2 top-1/2 bg-black/30 hover:bg-black/50"
          aria-label="Media siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Media Counter and Type Indicator */}
        <div className="absolute px-2 py-1 text-sm text-white rounded bottom-2 right-2 bg-black/50">
          {isCurrentVideo && <span className="mr-1">🎬</span>}
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails Container */}
      <div className="relative flex justify-center">
        <div
          ref={thumbnailsRef}
          className={`flex overflow-x-auto scrollbar-hide gap-2 py-2 ${
            showThumbnailArrows ? 'px-10 max-w-full' : 'px-4'
          }`}
          style={{ scrollBehavior: 'smooth' }}
        >
          {images.map((image, index) => {
            const isThumbVideo = isVideo(image.src, image.type);

            return (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`flex-shrink-0 w-20 h-20 relative rounded overflow-hidden transition-all duration-200 ${
                  index === currentIndex
                    ? 'ring-2 ring-primary ring-offset-2'
                    : 'opacity-70 hover:opacity-100'
                }`}
                aria-label={`Ver ${isThumbVideo ? 'video' : 'imagen'} ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              >
                {isThumbVideo ? (
                  // Para videos, usamos el logo de ESEPE como fondo
                  <div className="relative w-full h-full">
                    <div className="w-full h-full bg-gradient-to-br from-slate-100 via-white to-slate-200 flex items-center justify-center">
                      {/* Logo de ESEPE como fondo */}
                      <div className="relative w-20 h-20">
                        <Image
                          src={esepeLogo}
                          alt="ESEPE Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Overlay con ícono de play */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="bg-white/95 rounded-full p-2 shadow-lg">
                        <svg
                          className="w-4 h-4 text-gray-800 ml-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Para imágenes, usamos el componente Image normal
                  <MediaComponent
                    src={image.src}
                    alt={image.alt}
                    type={image.type}
                    fill={true}
                    controls={false}
                  />
                )}
              </button>
            );
          })}
        </div>

        {showThumbnailArrows && (
          <>
            <button
              onClick={() => scrollThumbnails('left')}
              className="absolute left-0 p-1 text-white transition-colors -translate-y-1/2 rounded-full top-1/2 bg-black/30 hover:bg-black/50"
              aria-label="Ver miniaturas anteriores"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollThumbnails('right')}
              className="absolute right-0 p-1 text-white transition-colors -translate-y-1/2 rounded-full top-1/2 bg-black/30 hover:bg-black/50"
              aria-label="Ver más miniaturas"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
