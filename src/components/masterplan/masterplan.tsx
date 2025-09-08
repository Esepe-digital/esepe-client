'use client';

import Image, { StaticImageData } from 'next/image';
import { useState, useEffect, useRef } from 'react';
import {
  PropertyCardInterface,
  ModelCardInterface,
} from '@/interfaces/proyectos/model-card';
import React from 'react';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import IndicationImg from '@/assets/images/indication.png';
import { formatPrice } from '@/lib/utils';
import { createPortal } from 'react-dom';

export interface LoteConCoord {
  ID_INMUEBLE: string;
  NRO_INMUEBLE: string;
  MODELO: string;
  PRECIO_LISTA: string;
  ORIENTACION: string;
  SUPERFICIE_TOTAL: string;
  top: number;
  left: number;
}

interface MasterplanProps {
  lotes: LoteConCoord[];
  allProperties: PropertyCardInterface[];
  imageSrc: StaticImageData | string;
  title?: string;
  modeloImages?: Record<string, StaticImageData>;
  colorMapping?: Record<string, string>;
  onContinue: (lote: PropertyCardInterface) => void;
  onClose?: () => void;
  shouldClose?: boolean;
  modelData?: ModelCardInterface;
  onModeloSelect?: (modelo: string) => void; // NUEVA PROP
  selectedModelo?: string; // NUEVA PROP
  isModelLoading?: boolean;
  setIsModelLoading?: (loading: boolean) => void;
  proyecto?: string; // Prop para identificar el proyecto
}

export default function Masterplan({
  lotes,
  allProperties,
  imageSrc,
  title,
  modeloImages = {},
  colorMapping,
  onContinue,
  onClose,
  shouldClose,
  modelData,
  onModeloSelect,
  selectedModelo: selectedModeloProp,
  isModelLoading = false,
  proyecto,
}: MasterplanProps) {
  const [selectedLote, setSelectedLote] =
    useState<PropertyCardInterface | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const masterplanRef = useRef<HTMLDivElement>(null);
  const [showInfoModal, setShowInfoModal] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [selectedModelo, setSelectedModelo] = useState<string>(
    selectedModeloProp || ''
  );
  const [pendingModelo, setPendingModelo] = useState<string | null>(null);

  // Estados para el pan (desplazamiento)
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const panStart = useRef({ x: 0, y: 0 });

  // Sincronizar con la prop
  useEffect(() => {
    if (
      selectedModeloProp !== undefined &&
      selectedModeloProp !== selectedModelo
    ) {
      setSelectedModelo(selectedModeloProp);
    }
  }, [selectedModeloProp, selectedModelo]);

  // Cuando el usuario selecciona un modelo, guardar el pendingModelo si está cargando
  const handleModeloClick = (modeloBase: string) => {
    setSelectedModelo(''); // Limpia selección visual
    setPendingModelo(null);
    const nuevoModelo = selectedModelo === modeloBase ? '' : modeloBase;
    if (onModeloSelect) onModeloSelect(nuevoModelo);
  };

  // Sincronizar pendingModelo con selectedModelo cuando termine el loading
  useEffect(() => {
    if (!isModelLoading && pendingModelo !== null) {
      setSelectedModelo(pendingModelo);
      if (onModeloSelect) onModeloSelect(pendingModelo);
      setPendingModelo(null);
    }
  }, [isModelLoading, pendingModelo, onModeloSelect]);

  // Cuando termine el loading, mostrar el masterplan de nuevo
  useEffect(() => {
    if (!isModelLoading) {
      // setShowMasterplan(true); // Eliminado
    }
  }, [isModelLoading]);

  // Modelos únicos disponibles en el masterplan
  const uniqueModelosBase = Array.from(
    new Set(
      lotes.map((lote) => {
        // Si el modelo contiene un guión, tomar solo la primera parte (nombre del modelo)
        // Si no contiene guión, usar el modelo completo
        const modeloParts = lote.MODELO.split('-');
        return modeloParts.length > 1 ? modeloParts[0] : lote.MODELO;
      })
    )
  );

  // Unidades disponibles por modelo
  const unidadesPorModelo = uniqueModelosBase.reduce(
    (acc, modeloBase) => {
      acc[modeloBase] = lotes.filter((l) => {
        const modeloParts = l.MODELO.split('-');
        const modeloName = modeloParts.length > 1 ? modeloParts[0] : l.MODELO;
        return modeloName === modeloBase;
      }).length;
      return acc;
    },
    {} as Record<string, number>
  );

  // Filtrar lotes por modelo base seleccionado
  const lotesFiltrados = selectedModelo
    ? lotes.filter((l) => {
        const modeloParts = l.MODELO.split('-');
        const modeloName = modeloParts.length > 1 ? modeloParts[0] : l.MODELO;
        return modeloName === selectedModelo;
      })
    : lotes;

  // Handlers para el pan (desplazamiento)
  const handleMouseDown = (e: React.MouseEvent) => {
    // Verificar si el click fue en un lote (button)
    const target = e.target as HTMLElement;
    if (target.tagName === 'BUTTON') {
      return; // No iniciar pan si se clickeó en un lote
    }

    if (zoom > 1) {
      setIsPanning(true);
      dragStart.current = { x: e.clientX, y: e.clientY };
      panStart.current = { x: pan.x, y: pan.y };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPanning && zoom > 1) {
      const deltaX = e.clientX - dragStart.current.x;
      const deltaY = e.clientY - dragStart.current.y;

      setPan({
        x: panStart.current.x + deltaX,
        y: panStart.current.y + deltaY,
      });
    }
  };

  // Handlers para eventos táctiles
  const handleTouchStart = (e: React.TouchEvent) => {
    // Verificar si el touch fue en un lote (button)
    const target = e.target as HTMLElement;
    if (target.tagName === 'BUTTON') {
      return; // No iniciar pan si se tocó un lote
    }

    if (zoom > 1 && e.touches.length === 1) {
      setIsPanning(true);
      dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      panStart.current = { x: pan.x, y: pan.y };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isPanning && zoom > 1 && e.touches.length === 1) {
      e.preventDefault(); // Prevenir scroll de la página
      const deltaX = e.touches[0].clientX - dragStart.current.x;
      const deltaY = e.touches[0].clientY - dragStart.current.y;

      setPan({
        x: panStart.current.x + deltaX,
        y: panStart.current.y + deltaY,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsPanning(false);
  };

  // Event listener global para mouse up
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsPanning(false);
    };

    const handleGlobalTouchEnd = () => {
      setIsPanning(false);
    };

    if (isPanning) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('mouseleave', handleGlobalMouseUp);
      document.addEventListener('touchend', handleGlobalTouchEnd);
      document.addEventListener('touchcancel', handleGlobalTouchEnd);
    }

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mouseleave', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
      document.removeEventListener('touchcancel', handleGlobalTouchEnd);
    };
  }, [isPanning]);

  // Reset pan cuando el zoom vuelve a 1
  useEffect(() => {
    if (zoom <= 1) {
      setPan({ x: 0, y: 0 });
    }
  }, [zoom]);

  useEffect(() => {
    if (shouldClose && selectedLote) {
      setSelectedLote(null);
      if (onClose) {
        onClose();
      }
    }
  }, [shouldClose, selectedLote, onClose]);

  // Handle clicking outside the tooltip
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setSelectedLote(null);
      }
    };

    if (selectedLote) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedLote]);

  const handleLoteClick = (lote: LoteConCoord) => {
    const property = allProperties.find((p) =>
      p.nombre.startsWith(lote.ID_INMUEBLE)
    );
    if (property) {
      setSelectedLote(property);
    } else {
      console.warn(
        'No se encontró la propiedad correspondiente para el lote:',
        lote
      );
    }
  };

  const getColorForModelo = (modelo: string) => {
    // Use custom color mapping if provided
    if (colorMapping && colorMapping[modelo]) {
      return colorMapping[modelo];
    }

    switch (modelo) {
      case 'Barreno':
        return '#FFFF54';
      case 'Legón':
        return '#75FB4C';
      case 'Mayal':
        return '#75FBFC';
      default:
        return '#E933F7';
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Menú de modelos y leyenda siempre visibles, sin loader ni deshabilitar botones */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {uniqueModelosBase.map((modeloBase) => {
          const isActive = selectedModelo === modeloBase;
          return (
            <button
              key={modeloBase}
              className={`px-3 py-1 rounded-full border transition-colors duration-150
                ${isActive ? 'bg-[#1a3049] text-white border-[#1a3049]' : 'bg-white text-[#1a3049] border-[#1a3049] hover:bg-[#1a3049] hover:text-white'}`}
              onClick={() => handleModeloClick(modeloBase)}
            >
              {modeloBase}
            </button>
          );
        })}
      </div>
      {/* Masterplan siempre visible, no ocultar por showMasterplan */}
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: 500 }}
      >
        {/* Botones de zoom dentro del contenedor */}
        <div className="absolute right-4 top-4 z-20 flex flex-col gap-2">
          <button
            onClick={() => setZoom((z) => Math.min(z + 0.2, 2))}
            className="bg-white p-2 rounded shadow border"
          >
            <Plus />
          </button>
          <button
            onClick={() => setZoom((z) => Math.max(z - 0.2, 0.6))}
            className="bg-white p-2 rounded shadow border"
          >
            <Minus />
          </button>
        </div>
        <div className="absolute left-4 z-10 flex flex-col gap-4 w-56 sm:flex">
          <div className="bg-white rounded-xl shadow-lg p-4 space-y-4 hidden sm:block mt-2">
            {/* Mostrar unidades disponibles debajo del nombre del modelo */}
            {(selectedModelo ? [selectedModelo] : uniqueModelosBase).map(
              (modeloBase, index) => (
                <div key={modeloBase}>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: getColorForModelo(modeloBase),
                      }}
                    />
                    <div className="text-sm">
                      <p className="text-gray-700">
                        Casa <strong>{modeloBase}</strong>
                      </p>
                      <p className="font-bold text-gray-900">
                        {unidadesPorModelo[modeloBase]} unidades disponibles
                      </p>
                    </div>
                  </div>
                  {index < uniqueModelosBase.length - 1 && (
                    <hr className="border-t border-gray-200" />
                  )}
                </div>
              )
            )}
          </div>
          {/* Info Card: Modal on mobile, static on desktop */}
          {showInfoModal && (
            <div>
              {/* Modal overlay and card for mobile */}
              <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center sm:hidden">
                <div className="bg-white rounded-xl shadow-lg p-4 mt-4 flex flex-col relative w-11/12 max-w-xs">
                  <button
                    className="absolute top-2 right-2 text-gray-400 text-xl"
                    onClick={() => setShowInfoModal(false)}
                  >
                    ✕
                  </button>
                  <div className="flex items-center gap-2 mb-1">
                    <Image
                      src={IndicationImg}
                      alt="Selecciona desde el mapa"
                      className="object-cover rounded"
                      width={40}
                      height={40}
                    />
                    <h2 className="font-bold text-base">¿Cómo cotizo?</h2>
                  </div>
                  <p className="font-bold leading-tight text-sm mb-1">
                    Selecciona desde el mapa tu nuevo hogar
                  </p>
                  <p className="text-gray-800 text-xs">
                    Haz click sobre la ubicación de la casa que te interesa para
                    conocer detalles y cotización
                  </p>
                </div>
              </div>
              {/* Static card for desktop */}
              <div className="hidden sm:flex bg-white rounded-xl shadow-lg p-4 flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <Image
                    src={IndicationImg}
                    alt="Selecciona desde el mapa"
                    className="object-cover rounded"
                    width={40}
                    height={40}
                  />
                  <h2 className="font-bold text-base">¿Cómo cotizo?</h2>
                </div>
                <p className="font-bold leading-tight text-sm mb-1">
                  Selecciona desde el mapa tu nuevo hogar
                </p>
                <p className="text-gray-800 text-xs">
                  Haz click sobre la ubicación de la casa que te interesa para
                  conocer detalles y cotización
                </p>
              </div>
            </div>
          )}

          {/* Etapas Card for Altos del Valle */}
          {proyecto === 'Viña Carmen' && (
            <div className="mt-2">
              {/* Static card for desktop */}
              <div className="hidden sm:flex bg-white rounded-xl shadow-lg p-4 flex-col">
                <div className="text-center">
                  <h2 className="font-bold text-base mb-2">Estado de Etapas</h2>
                  <div className="space-y-2 text-sm">
                    <p className="font-semibold text-gray-800">
                      Etapa 1 y 2: <span>Venta en verde</span>
                    </p>
                    <p className="font-semibold text-gray-800">
                      Etapa 3: <span>Entrega Inmediata</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Imagen y puntos del masterplan con zoom y pan */}
        <div
          ref={masterplanRef}
          className={`w-full h-full flex items-center justify-center ${
            zoom > 1 ? (isPanning ? 'cursor-grabbing' : 'cursor-grab') : ''
          }`}
          style={{ userSelect: 'auto', height: '100%', width: '100%' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{
              transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
              transformOrigin: 'center center',
              transition: isPanning ? 'none' : 'transform 0.2s',
              width: '100%',
              height: '100%',
            }}
          >
            {lotesFiltrados.map((lote) => (
              <button
                key={lote.ID_INMUEBLE}
                onClick={() => {
                  handleLoteClick(lote);
                }}
                className="absolute w-2 h-2 rounded-full border border-white shadow-md sm:w-2 sm:h-2"
                style={{
                  top: `${lote.top}%`,
                  left: `${lote.left}%`,
                  backgroundColor: getColorForModelo(lote.MODELO),
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'auto',
                }}
                title={lote.NRO_INMUEBLE}
              />
            ))}
            <Image
              src={imageSrc}
              alt={`Mapa del barrio ${title || ''}`}
              width={1180}
              height={799}
              className="w-full h-full object-cover"
              style={{
                maxHeight: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
              draggable={false}
            />
          </div>
        </div>
        {/* Tooltip */}
        {selectedLote &&
          masterplanRef.current &&
          typeof window !== 'undefined' &&
          createPortal(
            <Tooltip
              ref={tooltipRef}
              selectedProperty={selectedLote}
              lotes={lotes}
              modeloImages={modeloImages}
              onContinue={onContinue}
              onClose={() => setSelectedLote(null)}
              modelData={modelData}
              masterplanRef={masterplanRef as React.RefObject<HTMLDivElement>}
              zoom={zoom}
              pan={pan}
            />,
            document.body
          )}
      </div>
    </div>
  );
}

const Tooltip = React.forwardRef<
  HTMLDivElement,
  {
    selectedProperty: PropertyCardInterface;
    lotes: LoteConCoord[];
    modeloImages: Record<string, StaticImageData>;
    onContinue: (property: PropertyCardInterface) => void;
    onClose: () => void;
    modelData?: ModelCardInterface;
    masterplanRef: React.RefObject<HTMLDivElement>;
    zoom: number;
    pan: { x: number; y: number };
  }
>(
  (
    {
      selectedProperty,
      lotes,
      modeloImages,
      onContinue,
      onClose,
      modelData,
      masterplanRef,
      zoom,
      pan,
    },
    ref
  ) => {
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [isPositioned, setIsPositioned] = useState(false);
    const propertyKey = selectedProperty.nombre.split(' ')[0];
    const activeLote = lotes.find((l) => l.ID_INMUEBLE === propertyKey);

    // Detectar si es móvil
    const isMobile =
      typeof window !== 'undefined' ? window.innerWidth < 768 : false;

    // Calcular la posición del tooltip considerando zoom y pan
    const calculatePosition = () => {
      if (!masterplanRef.current || !activeLote) return;

      const masterplanRect = masterplanRef.current.getBoundingClientRect();
      const loteX = (activeLote.left / 100) * masterplanRect.width;
      const loteY = (activeLote.top / 100) * masterplanRect.height;

      // Aplicar zoom y pan a la posición del lote
      const scaledX = loteX * zoom + pan.x;
      const scaledY = loteY * zoom + pan.y;

      // En desktop, usar la lógica original
      // Posición final del tooltip (usando getBoundingClientRect que ya considera el scroll)
      const tooltipX = masterplanRect.left + scaledX;
      const tooltipY = masterplanRect.top + scaledY;

      // Verificar si el punto está dentro del área visible del masterplan
      const isPointVisible =
        scaledX >= 0 &&
        scaledX <= masterplanRect.width &&
        scaledY >= 0 &&
        scaledY <= masterplanRect.height;

      const tooltipWidth = 320;
      const tooltipHeight = 320;
      let finalLeft, finalTop;

      if (isMobile) {
        // En móvil, centrar el modal en la pantalla
        finalLeft = (window.innerWidth - tooltipWidth) / 2;
        finalTop = (window.innerHeight - tooltipHeight) / 2;

        // Asegurar que el modal no se salga de los bordes de la pantalla
        if (finalLeft < 20) {
          finalLeft = 20;
        }
        if (finalLeft + tooltipWidth > window.innerWidth - 20) {
          finalLeft = window.innerWidth - tooltipWidth - 20;
        }
        if (finalTop < 20) {
          finalTop = 20;
        }
        if (finalTop + tooltipHeight > window.innerHeight - 20) {
          finalTop = window.innerHeight - tooltipHeight - 20;
        }
      } else {
        // En desktop, usar la lógica actual
        if (isPointVisible) {
          // Si el punto está visible, posicionar cerca del punto pero dentro del masterplan
          const spaceBelow = masterplanRect.bottom - tooltipY - 20;
          const spaceAbove = tooltipY - masterplanRect.top - 20;
          const showAbove =
            spaceBelow < tooltipHeight && spaceAbove > tooltipHeight;
          finalTop = showAbove ? tooltipY - tooltipHeight - 20 : tooltipY + 20;

          // Ajustar horizontalmente para que no se salga del masterplan
          finalLeft = tooltipX;
          if (finalLeft - tooltipWidth / 2 < masterplanRect.left) {
            finalLeft = masterplanRect.left + tooltipWidth / 2;
          } else if (finalLeft + tooltipWidth / 2 > masterplanRect.right) {
            finalLeft = masterplanRect.right - tooltipWidth / 2;
          }
        } else {
          // Si el punto no está visible, posicionar fijo dentro del masterplan
          finalLeft = masterplanRect.right - tooltipWidth - 20;
          finalTop = masterplanRect.bottom - tooltipHeight - 20;
        }

        // Asegurar que el modal esté completamente dentro del masterplan
        if (finalLeft < masterplanRect.left) {
          finalLeft = masterplanRect.left + 20;
        }
        if (finalLeft + tooltipWidth > masterplanRect.right) {
          finalLeft = masterplanRect.right - tooltipWidth - 20;
        }
        if (finalTop < masterplanRect.top) {
          finalTop = masterplanRect.top + 20;
        }
        if (finalTop + tooltipHeight > masterplanRect.bottom) {
          finalTop = masterplanRect.bottom - tooltipHeight - 20;
        }
      }

      setTooltipPosition({ x: finalLeft, y: finalTop });
      setIsPositioned(true);
    };
    // Calcular posición inicial
    useEffect(() => {
      if (activeLote && masterplanRef.current) {
        setIsPositioned(false); // Resetear estado antes de calcular nueva posición
        calculatePosition();
      }
    }, [zoom, pan, activeLote]);

    // Actualizar posición en scroll
    useEffect(() => {
      if (!activeLote || !masterplanRef.current) return;

      const handleScroll = () => {
        calculatePosition();
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, [zoom, pan, activeLote]);

    if (!activeLote || !masterplanRef.current) {
      // If we can't find the coordinates or masterplan ref, don't render the tooltip.
      return null;
    }

    // No renderizar hasta que esté posicionado
    if (!isPositioned) {
      return null;
    }

    return (
      <div
        ref={ref}
        className="fixed z-50 bg-white border border-gray-200 shadow-xl p-4 rounded-xl w-80 text-sm"
        style={{
          left: tooltipPosition.x,
          top: tooltipPosition.y,
          transform: isMobile ? 'none' : 'translateX(-50%)',
        }}
      >
        {modeloImages[selectedProperty.modelo] && (
          <div className="mb-3 rounded-md overflow-hidden">
            <Image
              src={modeloImages[selectedProperty.modelo]}
              alt={`Modelo ${selectedProperty.modelo}`}
              width={288}
              height={162}
              className="object-cover"
            />
          </div>
        )}

        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-base font-semibold text-gray-900">
              Propiedad: {selectedProperty.nombre}
            </h3>
            <p className="text-sm text-gray-500">
              Modelo: {selectedProperty.modelo}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-xs text-gray-400 hover:text-gray-600"
            title="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className="space-y-1 text-sm text-gray-700">
          <p>
            <span className="font-medium">Etapa:</span> {selectedProperty.etapa}
          </p>

          {/* Add model specifications if modelData is available */}
          {modelData && (
            <div className="space-y-1 mt-2 pt-2 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">•</span>
                <span>
                  {Math.round(Number(modelData.construccion)).toLocaleString(
                    'es-CL'
                  )}{' '}
                  m² de Construcción
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">•</span>
                <span>
                  Desde{' '}
                  {Math.round(Number(modelData.terreno)).toLocaleString(
                    'es-CL'
                  )}{' '}
                  m² de Terreno
                </span>
              </div>
            </div>
          )}

          <p className="font-bold text-lg text-gray-900 mt-3">
            UF {formatPrice(selectedProperty.precio)}
          </p>
        </div>

        <button
          type="button"
          className="mt-4 w-full bg-[#0D2F4C] text-white font-medium py-2 rounded-full flex items-center justify-center gap-2"
          onClick={() => {
            onContinue(selectedProperty);
          }}
        >
          <ArrowRight className="w-5 h-5" />
          Continuar
        </button>
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';
