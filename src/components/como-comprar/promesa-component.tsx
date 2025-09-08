import Image from 'next/image';
import React from 'react';
import PromesaImg from '@/assets/como-comprar/promesa.png';
import Flecha3 from '@/assets/como-comprar/flecha3.svg';

interface RealEstateSectionProps {
  className?: string;
}

export default function RealEstateSection({
  className = '',
}: RealEstateSectionProps) {
  return (
    <div className={`w-full min-h-[500px] lg:h-[650px] ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-16 items-stretch min-h-[500px] lg:h-[650px]">
        {/* Image Section - 4 columns on large screens */}
        <div className="lg:col-span-4 order-first lg:order-first h-[300px] md:h-[400px] lg:h-full">
          <div className="relative w-full h-full">
            <Image
              src={PromesaImg}
              alt="Real estate team reviewing documents"
              fill
              className="object-cover rounded-2xl lg:rounded-r-2xl lg:rounded-l-none"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Content Section - 8 columns on large screens */}
        <div className="lg:col-span-8 mt-28 space-y-8 md:space-y-10 lg:space-y-12 px-4 sm:px-6 md:px-8 lg:pl-12 lg:pr-48 min-h-[400px] lg:h-[480px] flex flex-col justify-center py-8 lg:py-0">
          {/* Preaprobación Section */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[#262626] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#262626]">
                Preaprobación
              </h2>
            </div>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-600 leading-relaxed">
              <p>
                Para firmar tu promesa tienes que presentar una pre aprobación
                bancaria en relación al crédito hipotecario, o acreditar los
                recursos propios para efectuar la compra
              </p>
              <p>
                En caso de necesitar ayuda,{' '}
                <span className="font-bold leading-[140%] text-[#5C5C5C]">
                  nosotros con gusto podemos gestionar la pre aprobación.
                </span>
              </p>
            </div>
          </div>

          {/* Promesa de compraventa Section */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[#262626] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                4
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#262626]">
                Promesa de compraventa
              </h2>
            </div>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-600 leading-relaxed">
              <p>
                La promesa es un contrato notarial que especifica los detalles
                de la transacción, desde las obligaciones de la inmobiliaria
                hasta las del cliente, incluyendo precio, ubicación, programa,
                metros cuadrados y forma de pago.
              </p>
              <p>
                En caso de venta en verde este documento{' '}
                <span className="font-bold leading-[140%] text-[#5C5C5C]">
                  va respaldado por una póliza de seguro
                </span>
                , la que nosotros financiamos para proteger el pago del pie de
                nuestro cliente.
              </p>
            </div>
            <div className="relative">
              <Flecha3
                className="absolute right-0 z-10 text-black hidden sm:hidden md:block"
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
          </div>
        </div>
      </div>
    </div>
  );
}
