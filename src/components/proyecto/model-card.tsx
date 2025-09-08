'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ModelCardInterface } from '@/interfaces/proyectos/model-card';
import { formatPrice } from '@/lib/utils';

import AngleIcon from '@/assets/icons/angle-tool.svg';
import BathIcon from '@/assets/icons/bathroom.svg';
import RoomIcon from '@/assets/icons/bedroom.svg';
import FrameIcon from '@/assets/icons/frame.svg';
import VideoIcon from '@/assets/icons/video.svg';
import DescargaIcon from '@/assets/icons/descarga.svg';
import PlantaIcon from '@/assets/icons/planta.svg';

export const ModelCard = ({
  modelo,
  scrollToCotizador,
}: {
  modelo: ModelCardInterface;
  scrollToCotizador: (isReserva: boolean, selectedModel?: string) => void;
}) => {
  const {
    nombre,
    recamaras,
    banos,
    construccion,
    terreno,
    precio,
    imagenes,
    virtualTour,
    arquitectonicPlans,
    brochure,
    link_de_cotizador_externo,
  } = modelo;

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % modelo.imagenes.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + modelo.imagenes.length) % modelo.imagenes.length
    );
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="py-8  border-gray-200">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Galería de imágenes */}
        <div className="flex flex-col w-full md:w-2/5">
          <div className="relative flex-grow h-[280px]">
            <Image
              src={imagenes[currentImage] || '/placeholder.svg'}
              alt={`${nombre} - Imagen ${currentImage + 1}`}
              fill
              style={{ objectFit: 'cover' }}
            />
            {imagenes.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute p-1 -translate-y-1/2 rounded-full shadow-md left-2 top-1/2 bg-white/80"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute p-1 -translate-y-1/2 rounded-full shadow-md right-2 top-1/2 bg-white/80"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </>
            )}
          </div>
          <div className="flex justify-center gap-2 mt-3">
            {imagenes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2 h-2 rounded-full ${currentImage === index ? 'bg-[#4A6793]' : 'bg-gray-300'}`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Información del modelo */}
        <div className="flex flex-col w-full md:w-1/3">
          <div>
            <h3 className="mb-4 text-3xl font-medium  text-[#123752]">
              {nombre}
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <RoomIcon
                  className={` ${!precio ? 'text-[#AFAFAF]' : 'text-gray-500'}`}
                />
                <span
                  className={`${!precio ? 'text-[#AFAFAF]' : 'text-gray-500'}`}
                >
                  {recamaras} Dormitorios
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BathIcon
                  className={` ${!precio ? 'text-[#AFAFAF]' : 'text-gray-500'}`}
                />
                <span
                  className={`${!precio ? 'text-[#AFAFAF]' : 'text-gray-500'}`}
                >
                  {banos} Baños
                </span>
              </div>
              {/* Construcción */}
              <div className="flex items-center gap-2">
                <AngleIcon
                  className={` ${
                    !construccion ||
                    isNaN(Number(construccion)) ||
                    Number(construccion) <= 0
                      ? 'text-[#AFAFAF]'
                      : 'text-gray-500'
                  }`}
                />
                <span
                  className={` ${
                    !construccion ||
                    isNaN(Number(construccion)) ||
                    Number(construccion) <= 0
                      ? 'text-[#AFAFAF]'
                      : 'text-gray-500'
                  }`}
                >
                  {isNaN(Number(construccion)) || Number(construccion) <= 0
                    ? 'm² de Construcción'
                    : `${Math.round(Number(construccion)).toLocaleString('es-CL')} m² de Construcción`}
                </span>
              </div>

              {/* Terreno */}
              <div className="flex items-center gap-2">
                <FrameIcon
                  className={` ${
                    !terreno || isNaN(Number(terreno)) || Number(terreno) <= 0
                      ? 'text-[#AFAFAF]'
                      : 'text-gray-500'
                  }`}
                />
                <span
                  className={` ${
                    !terreno || isNaN(Number(terreno)) || Number(terreno) <= 0
                      ? 'text-[#AFAFAF]'
                      : 'text-gray-500'
                  }`}
                >
                  {isNaN(Number(terreno)) || Number(terreno) <= 0
                    ? 'm² de Terreno'
                    : `Desde ${Math.round(Number(terreno)).toLocaleString('es-CL')} m² de Terreno`}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="pt-4 mb-4 border-t border-gray-200"></div>

            <div className="space-y-3">
              {virtualTour && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={virtualTour}
                  className={`flex items-center gap-2 ${
                    precio
                      ? 'text-[#4A6793] hover:text-[#3a5275]'
                      : 'text-[#AFAFAF] pointer-events-none'
                  }`}
                >
                  <VideoIcon
                    className={`h-7 w-7 ${
                      precio ? 'text-[#4A6793]' : 'text-[#AFAFAF]'
                    }`}
                  />
                  Ver recorrido virtual
                </a>
              )}
              {brochure && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={brochure}
                  className={`flex items-center gap-2 ${
                    precio
                      ? 'text-[#4A6793] hover:text-[#3a5275]'
                      : 'text-[#AFAFAF] pointer-events-none'
                  }`}
                >
                  <DescargaIcon
                    className={`h-7 w-7 ${
                      precio ? 'text-[#4A6793]' : 'text-[#AFAFAF]'
                    }`}
                  />
                  Descargar brochure
                </a>
              )}
              {arquitectonicPlans && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={arquitectonicPlans}
                  className={`flex items-center gap-2 ${
                    precio
                      ? 'text-[#4A6793] hover:text-[#3a5275]'
                      : 'text-[#AFAFAF] pointer-events-none'
                  }`}
                >
                  <PlantaIcon
                    className={`h-7 w-7 ${
                      precio ? 'text-[#4A6793]' : 'text-[#AFAFAF]'
                    }`}
                  />
                  Ver plantas arquitectónicas
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Precio y botones */}
        <div className="flex flex-col justify-center w-full md:w-1/4">
          {precio ? (
            <div className="mb-4 text-left">
              <p className="text-sm text-gray-500">Desde</p>
              <p className="text-3xl font-bold text-[#123752]">
                UF {formatPrice(precio)}
              </p>
            </div>
          ) : (
            <div className="mb-4 text-left">
              <p className="text-3xl font-bold text-[#123752] ml-4">AGOTADO</p>
            </div>
          )}

          <div className="w-full space-y-3">
            <button
              onClick={() => {
                scrollToCotizador(false, modelo.nombre);
              }}
              disabled={!precio}
              className={`w-[264px] h-[40px] rounded-full transition-colors ${
                precio
                  ? 'bg-white border-2 border-[#4A6793] text-[#4A6793] hover:bg-[#f0f4fa]'
                  : 'bg-[#AFAFAF] text-white cursor-not-allowed'
              }`}
            >
              Cotizar
            </button>

            {!link_de_cotizador_externo && (
              <button
                onClick={() => {
                  scrollToCotizador(true, modelo.nombre);
                }}
                disabled={!precio} // 🚨 Aquí agregamos que se deshabilite si no hay precio
                className={`w-[264px] h-[40px] rounded-full transition-colors ${
                  precio
                    ? 'bg-[#123752] text-white hover:bg-[#3b5477]'
                    : 'bg-[#AFAFAF] text-white cursor-not-allowed'
                }`}
              >
                Reservar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
