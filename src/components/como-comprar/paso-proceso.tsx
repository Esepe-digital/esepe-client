'use client';

import Image from 'next/image';
import { PasoProceso } from '@/interfaces/paginas';
import Flecha1 from '@/assets/como-comprar/flecha1.svg';
import Flecha3 from '@/assets/como-comprar/flecha3.svg';
import Flecha4 from '@/assets/como-comprar/flecha4.svg';
import UltimaFlecha from '@/assets/como-comprar/last-arrow.svg';

interface PasoProcesoComponentProps {
  paso: PasoProceso;
  index: number;
}

export default function PasoProcesoComponent({
  paso,
  index,
}: PasoProcesoComponentProps) {
  const renderFlecha = (index: number) => {
    if (index === 0) {
      return (
        <div className="relative">
          <Flecha1
            className="absolute right-0 z-10 text-black hidden md:block"
            style={{
              width: '250px',
              height: '250px',
              transform: 'rotate(0deg)',
              opacity: '20%',
              top: '-58px',
              left: '604px',
            }}
          />
        </div>
      );
    } else if (index === 2) {
      return (
        <div className="relative">
          <Flecha3
            className="absolute right-0 z-10 text-black hidden md:block"
            style={{
              width: '250px',
              height: '250px',
              transform: 'rotate(0deg)',
              opacity: '20%',
              top: '-58px',
              left: '804px',
            }}
          />
        </div>
      );
    } else if (index === 4) {
      return (
        <div className="relative">
          <Flecha4
            className="absolute right-0 z-10 text-black hidden md:block"
            style={{
              width: '250px',
              height: '250px',
              transform: 'rotate(0deg)',
              opacity: '20%',
              top: '-58px',
              left: '144px',
            }}
          />
        </div>
      );
    } else if (index === 6) {
      return (
        <div className="relative">
          <UltimaFlecha
            className="absolute right-0 z-10 text-black hidden md:block"
            style={{
              width: '250px',
              height: '250px',
              transform: 'rotate(0deg)',
              opacity: '20%',
              top: '-58px',
              left: '904px',
            }}
          />
        </div>
      );
    }
    return null;
  };

  const renderPasoSimple = () => (
    <div
      className={`py-16 border-b border-gray-100 ${
        index % 2 === 0 ? 'bg-[#F5F5F5]' : ''
      }`}
    >
      <div className="w-full max-w-6xl mx-auto p-6 lg:p-8">
        <div
          className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
            paso.posicion_columna_imagen === 'derecha'
              ? 'lg:flex-row-reverse'
              : ''
          }`}
        >
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg">
                {paso.imagen ? (
                  <Image
                    src={String(paso.imagen)}
                    alt={`Imagen ilustrativa del paso ${paso.numero_indicador}: ${paso.titulo}`}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-full">
                    <div className="text-gray-400">Sin imagen</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            {/* Step number and title */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#262626] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                {paso.numero_indicador}
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#262626]">
                {paso.titulo}
              </h2>
            </div>

            {/* Description */}
            <div
              className="text-[#5C5C5C] text-base lg:text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: paso.descripcion }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderPasoDoble = () => (
    <div
      className={`relative border-b border-gray-100 ${
        index % 2 === 0 ? 'bg-[#F5F5F5]' : ''
      }`}
    >
      <div className="w-full">
        <div
          className={`flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 ${
            paso.posicion_columna_imagen === 'derecha'
              ? 'lg:flex-row-reverse'
              : ''
          }`}
        >
          {/* Image */}
          <div className="flex-shrink-0 lg:w-1/3">
            <div className="relative h-full min-h-[300px] lg:min-h-[400px] ">
              <div
                className={`absolute inset-0 overflow-hidden shadow-lg ${
                  paso.posicion_columna_imagen === 'derecha'
                    ? 'rounded-l-xl'
                    : 'rounded-r-xl'
                }`}
              >
                {paso.imagen ? (
                  <Image
                    src={String(paso.imagen)}
                    alt={`Imagen ilustrativa del paso ${paso.numero_indicador}: ${paso.titulo}`}
                    fill
                    className={`object-cover ${
                      paso.posicion_columna_imagen === 'derecha'
                        ? 'rounded-l-xl'
                        : 'rounded-r-xl'
                    }`}
                    priority
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gray-200 flex items-center justify-center ${
                      paso.posicion_columna_imagen === 'derecha'
                        ? 'rounded-l-xl'
                        : 'rounded-r-xl'
                    }`}
                  >
                    <div className="text-gray-400">Sin imagen</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content - Two steps */}
          <div className="flex-1 lg:w-2/3 flex flex-col justify-center p-12 lg:py-24 space-y-8">
            {paso.paso?.map((subPaso, subIndex) => (
              <div key={subIndex} className="space-y-4">
                {/* Step number and title */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#262626] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {subPaso.numero_indicador}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#262626]">
                    {subPaso.titulo}
                  </h3>
                </div>

                {/* Description */}
                <div
                  className="text-[#5C5C5C] text-base lg:text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: subPaso.descripcion }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {paso.acf_fc_layout === 'seccion_paso_simple'
        ? renderPasoSimple()
        : renderPasoDoble()}
      {renderFlecha(index)}
    </>
  );
}
