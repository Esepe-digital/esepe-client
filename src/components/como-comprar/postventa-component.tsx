import type React from 'react';
import Image from 'next/image';
import PostventaImg from '@/assets/como-comprar/postventa.png';

interface ReservationStepProps {
  stepNumber?: number;
  title?: string;
  content?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

export default function PostventaStep({
  stepNumber = 8,
  title = 'Post Venta',
  imageAlt = 'Post Venta',
  content,
}: ReservationStepProps) {
  const defaultContent = (
    <>
      <p className="text-gray-700 mb-4">
        En caso de necesitar activar la garantía de la propiedad, en el manual
        de uso de la casa encontrarán el correo electrónico de Post Venta y
        proceso a seguir.
      </p>
      <p className="text-gray-700">
        Cualquier requerimiento se debe hacer por escrito para proceder a su
        evaluación y posterior reparación al correo:{' '}
        <span className="font-semibold text-[#4A6793]">
          postventas@esepe.cl
        </span>
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
              src={PostventaImg}
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
