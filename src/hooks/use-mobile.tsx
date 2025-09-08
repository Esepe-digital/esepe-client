'use client';

import { useState, useEffect } from 'react';

export function useMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para verificar si es un dispositivo móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Verificar al cargar
    checkMobile();

    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', checkMobile);

    // Limpiar listener
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
}

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Update the state with the current value
    const updateMatches = () => {
      setMatches(media.matches);
    };

    // Set the initial value
    updateMatches();

    // Add the listener
    media.addEventListener('change', updateMatches);

    // Clean up
    return () => {
      media.removeEventListener('change', updateMatches);
    };
  }, [query]);

  return matches;
}
