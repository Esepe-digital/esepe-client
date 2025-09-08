import type React from 'react';
import Image from 'next/image';
import ReservationImg from '@/assets/como-comprar/reserva.png';

interface ReservationStepProps {
  stepNumber?: number;
  title?: string;
  content?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

export default function ReservationStep({
  stepNumber = 2,
  title = 'Reserva',
  imageAlt = 'People working on architectural plans',
  content,
}: ReservationStepProps) {
  const defaultContent = (
    <>
      <p className="text-gray-700 mb-4">
        Para reservar ese hogar con que estas soñando deberás realizar un abono
        de{' '}
        <span className="font-bold leading-[140%] text-[#5C5C5C]">
          $250.000 pesos
        </span>
        , el cual será respaldado con un documento escrito que individualiza la
        propiedad y el precio de ésta. Puedes{' '}
        <span className="font-bold leading-[140%] text-[#5C5C5C]">
          reservar en línea
        </span>{' '}
        en la página de cada proyecto y también en las salas de ventas.
      </p>
      <p className="text-gray-700">
        Una vez recibido el comprobante la reserva tiene una duración de{' '}
        <span className="font-bold leading-[140%] text-[#5C5C5C]">
          30 días corridos para firmar la promesa de compraventa
        </span>
        . En el caso de las propiedades en promoción el plazo para firmar la
        promesa es de 7 días corridos.
      </p>
    </>
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Text Content - Takes up 8 columns on large screens */}
        <div className="lg:col-span-8 order-2 lg:order-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0 w-8 h-8 bg-[#262626] text-white rounded-full flex items-center justify-center font-semibold">
              {stepNumber}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#262626]">
              {title}
            </h2>
          </div>
          <div className="text-base md:text-lg leading-relaxed">
            {content || defaultContent}
          </div>
        </div>

        {/* Image - Takes up 4 columns on large screens */}
        <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
            <Image
              src={ReservationImg}
              alt={imageAlt}
              fill
              className="object-cover rounded-full shadow-lg"
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, (max-width: 1280px) 288px, 320px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
