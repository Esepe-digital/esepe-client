import Image from 'next/image';
import LineasOrnaIzq from '@/assets/images/lineas-orna-izq.png';
import LineasOrnaDer from '@/assets/images/lineas-orna-der.png';

export default function MissionStatement() {
  return (
    <div className="relative w-full bg-[#F5F5F5]">
      <div className="max-w-4xl mx-auto p-8 md:p-12 lg:p-16">
        {/* Left decorative element */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 lg:top-16 lg:left-16">
          <Image
            src={LineasOrnaIzq}
            alt="Decorative element"
            width={100}
            height={100}
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
          />
        </div>

        {/* Right decorative element */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16">
          <Image
            src={LineasOrnaDer}
            alt="Decorative element"
            width={100}
            height={100}
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
          />
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 text-center md:w-[1000px] leading-tight line-clamp-2">
            Encontrar la mejor distribución, que maximice el
            <br />
            uso del espacio, es parte de nuestra misión.
          </h2>

          {/* Decorative lines */}
          <div className="flex items-center w-full max-w-2xl mt-10 gap-8">
            <div className="h-1 w-10 bg-gray-300 rounded-l-full"></div>
            <div className="flex-1 h-px bg-transparent border-t border-dashed border-gray-300"></div>
            <div className="h-px bg-gray-300 w-16 md:w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
