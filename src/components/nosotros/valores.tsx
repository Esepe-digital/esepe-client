import Image from 'next/image';
import { Valor } from '@/interfaces/paginas';

interface ValoresProps {
  titulo: string;
  valores: Valor[];
  imagen: string;
}

export default function ValoresComponent({
  titulo,
  valores,
  imagen,
}: ValoresProps) {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left column with circular image */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src={imagen}
              alt="Valores - Hands representing our commitment"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>

        {/* Right column with title and text */}
        <div className="space-y-6 text-center md:text-left w-full md:w-[55%]">
          <h2 className="text-3xl sm:text-4xl mt-4 md:mt-0 md:text-[40px] font-bold text-gray-800">
            {titulo}
          </h2>

          <div className="space-y-6 text-base sm:text-[16px] w-full">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="flex justify-center md:justify-normal items-start gap-x-2 sm:gap-x-4"
              >
                <div>
                  <p className="font-semibold mb-2">★ {valor.titulo}</p>
                  <p>{valor.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
