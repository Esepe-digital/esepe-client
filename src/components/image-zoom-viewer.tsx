'use client';

import type React from 'react';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { ZoomIn, ZoomOut, Move } from 'lucide-react';

interface ImageZoomViewerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ImageZoomViewer({
  src,
  alt,
  className,
}: ImageZoomViewerProps) {
  const isMobile = useMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
  const [isZooming, setIsZooming] = useState(false);

  // Valor fijo para desktop - ya no necesitamos controles
  const DESKTOP_ZOOM_LEVEL = 2.5;

  // Estado para mobile
  const [mobileZoom, setMobileZoom] = useState(1);
  const [mobilePosition, setMobilePosition] = useState({ x: 0, y: 0 });
  const [lastTouch, setLastTouch] = useState({ x: 0, y: 0 });
  const [isPinching, setIsPinching] = useState(false);
  const [startTouchDistance, setStartTouchDistance] = useState(0);
  const [startZoomLevel, setStartZoomLevel] = useState(1);
  const [showControls, setShowControls] = useState(true);

  // Usar requestAnimationFrame para optimizar el rendimiento
  const rafRef = useRef<number | null>(null);

  // Calcular la posición del zoom basado en la posición del mouse (solo desktop)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isMobile) return;

    // Cancelar cualquier frame pendiente
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    // Programar la actualización para el próximo frame de animación
    rafRef.current = requestAnimationFrame(() => {
      const { left, top, width, height } =
        containerRef.current!.getBoundingClientRect();

      // Calcular la posición relativa del mouse dentro del contenedor (0-1)
      const x = Math.max(0, Math.min(1, (e.clientX - left) / width));
      const y = Math.max(0, Math.min(1, (e.clientY - top) / height));

      setPosition({ x, y });
    });
  };

  // Limpiar el requestAnimationFrame al desmontar
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Manejar eventos táctiles para dispositivos móviles
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      // Iniciar gesto de pinch zoom
      setIsPinching(true);
      const dist = getDistanceBetweenTouches(e.touches);
      setStartTouchDistance(dist);
      setStartZoomLevel(mobileZoom);
    } else if (e.touches.length === 1 && mobileZoom > 1) {
      // Guardar la posición inicial del toque para el arrastre
      setLastTouch({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      });
      // Mostrar controles al tocar
      setShowControls(true);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isPinching && e.touches.length === 2) {
      // Calcular nuevo nivel de zoom basado en la distancia entre los dedos
      const currentDistance = getDistanceBetweenTouches(e.touches);
      const scale = currentDistance / startTouchDistance;
      const newZoom = Math.max(1, Math.min(4, startZoomLevel * scale));
      setMobileZoom(newZoom);
      e.preventDefault(); // Prevenir scroll mientras se hace zoom
    } else if (e.touches.length === 1 && mobileZoom > 1) {
      // Mejorado: Cálculo de arrastre más directo
      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;

      // Calcular el delta (cuánto se ha movido el dedo)
      const deltaX = touchX - lastTouch.x;
      const deltaY = touchY - lastTouch.y;

      // Actualizar la última posición de toque
      setLastTouch({ x: touchX, y: touchY });

      // Aplicar el movimiento a la posición de la imagen
      // Factor de sensibilidad para hacer el movimiento más natural
      const sensitivity = 1.2;

      setMobilePosition((prev) => {
        // Calcular nuevas posiciones
        let newX = prev.x + deltaX * sensitivity;
        let newY = prev.y + deltaY * sensitivity;

        // Limitar el movimiento para que la imagen no se salga demasiado
        if (containerRef.current) {
          const { width, height } =
            containerRef.current.getBoundingClientRect();
          const maxOffsetX = ((mobileZoom - 1) * width) / 2;
          const maxOffsetY = ((mobileZoom - 1) * height) / 2;

          newX = Math.max(-maxOffsetX, Math.min(maxOffsetX, newX));
          newY = Math.max(-maxOffsetY, Math.min(maxOffsetY, newY));
        }

        return { x: newX, y: newY };
      });

      // Prevenir scroll de página mientras se arrastra la imagen
      if (mobileZoom > 1) {
        e.preventDefault();
      }
    }
  };

  const handleTouchEnd = () => {
    setIsPinching(false);
  };

  // Calcular la distancia entre dos puntos de toque
  const getDistanceBetweenTouches = (touches: React.TouchList) => {
    if (touches.length < 2) return 0;
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Incrementar/decrementar zoom en móvil con botones
  const handleZoomIn = () => {
    setMobileZoom((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setMobileZoom((prev) => {
      const newZoom = Math.max(prev - 0.5, 1);
      if (newZoom === 1) {
        // Resetear posición cuando se vuelve al zoom normal
        setMobilePosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  // Resetear posición y zoom al cambiar entre móvil y desktop
  useEffect(() => {
    setMobileZoom(1);
    setMobilePosition({ x: 0, y: 0 });
    setIsZooming(false);
  }, [isMobile]);

  // Ocultar controles después de un tiempo
  useEffect(() => {
    if (mobileZoom > 1) {
      const timer = setTimeout(() => {
        setShowControls(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowControls(true);
    }
  }, [mobileZoom]);

  return (
    <div className={cn('relative w-full max-w-[2560px] mx-auto', className)}>
      {/* Contenedor principal */}
      <div
        ref={containerRef}
        className={cn(
          'relative w-full aspect-[4/3] bg-gray-100 overflow-hidden rounded-lg border border-gray-200 shadow-md will-change-transform',
          isZooming && !isMobile && 'cursor-zoom-in'
        )}
        onMouseEnter={() => !isMobile && setIsZooming(true)}
        onMouseLeave={() => !isMobile && setIsZooming(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => isMobile && setShowControls(true)}
      >
        {/* Imagen principal con zoom */}
        <div
          ref={imageRef}
          className="relative w-full h-full"
          style={
            isMobile
              ? {
                  transform: `scale(${mobileZoom}) translate(${mobilePosition.x / mobileZoom}px, ${mobilePosition.y / mobileZoom}px)`,
                  transformOrigin: 'center',
                  willChange: 'transform',
                  transition: isPinching ? 'none' : 'transform 0.05s linear', // Transición muy corta para arrastre suave
                }
              : isZooming
                ? {
                    transform: `scale(${DESKTOP_ZOOM_LEVEL})`,
                    transformOrigin: `${position.x * 100}% ${position.y * 100}%`,
                    willChange: 'transform, transform-origin',
                  }
                : undefined
          }
        >
          <Image
            src={src || '/placeholder.svg'}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Controles de zoom para móvil */}
        {isMobile && showControls && (
          <div className="absolute z-20 flex flex-col gap-2 bottom-4 right-4">
            <button
              onClick={handleZoomIn}
              className="p-2 rounded-full shadow-md bg-white/90 hover:bg-white"
              aria-label="Acercar"
            >
              <ZoomIn className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={handleZoomOut}
              className={cn(
                'bg-white/90 hover:bg-white p-2 rounded-full shadow-md',
                mobileZoom <= 1 && 'opacity-50 cursor-not-allowed'
              )}
              disabled={mobileZoom <= 1}
              aria-label="Alejar"
            >
              <ZoomOut className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        )}

        {/* Indicador de arrastre para móvil */}
        {isMobile && mobileZoom > 1 && showControls && (
          <div className="absolute z-20 p-2 rounded-full shadow-md top-4 left-4 bg-white/90">
            <Move className="w-6 h-6 text-gray-800" />
          </div>
        )}
      </div>

      {/* Instrucciones */}
      <div className="mt-2 text-sm text-gray-500">
        {isMobile ? (
          <p>
            Usa dos dedos para hacer zoom o los controles en pantalla. Arrastra
            para mover cuando hayas hecho zoom.
          </p>
        ) : (
          <p>
            Pasa el cursor sobre la imagen para hacer zoom. El zoom seguirá tu
            cursor automáticamente.
          </p>
        )}
      </div>
    </div>
  );
}
