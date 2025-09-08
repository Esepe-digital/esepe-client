import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import HeroBschneider from '@/assets/bschneider/herob.jpg';

export default function Component() {
  return (
    <div id="servicios" className="relative w-full h-[705px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={HeroBschneider}
        alt="Modern architecture building"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C2E4A]/65 to-[#0D316C]/25" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-16 xl:px-20 ml-12">
        <div className="max-w-4xl">
          {/* Pre-title */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-4">
              <h2 className="text-white text-lg md:text-xl font-light tracking-wide">
                Servicios
              </h2>
              <div className="h-px bg-white w-20 md:w-32" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8 md:mb-12">
            Arquitectura
            <br />e ingeniería industrial
          </h1>

          {/* Description Text */}
          <div className="bg-[#123752] p-6 md:p-8 max-w-3xl mb-24">
            <p className="text-white text-base md:text-lg leading-relaxed">
              Bschneider es una empresa de arquitectura e ingeniería con larga
              experiencia en proyectos ejecutados en el área industrial y
              oficinas. La mezcla de arquitectos e ingenieros industriales por
              un lado y la juventud y experiencia por otro, permiten ofrecer
              soluciones altamente funcionales con un claro foco en el control
              del proyecto en todas sus etapas. Nuestra trayectoria es avalada
              por más de 1.500.000 m2 edificados.
            </p>
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-12 h-12   md:w-14 md:h-14 border-2 border-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors duration-300">
          <ChevronDown className="w-4 h-4 md:w-6 md:h-6 text-white" />
        </div>
      </div>
    </div>
  );
}
