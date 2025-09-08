import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

import imageBanner from '@/assets/proyecto-ph/parquegermania.png';

const itemsMiniNavbar = [
  { id: 'descripcion', label: 'Descripción' },
  { id: 'galeria', label: 'Galería' },
  { id: 'modelos', label: 'Modelos' },
  //{ id: 'avances', label: 'Avances' },
  { id: 'ubicacion', label: 'Ubicación' },
  { id: 'cotizar', label: 'Cotizar' },
];

export default function HeroBannerProjectPh() {
  return (
    <div className="relative w-full sm:h-[800px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="w-full lg:w-[35%] bg-[#006A6A] text-white p-6 md:p-10 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <MapPin className="w-5 h-5 mr-2" />
            <span className="text-lg">Puerto Montt</span>
          </div>

          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Parque Germania
          </h1>

          <p className="mb-8 text-sm md:text-base">
            A sólo 30 minutos de Santiago, te invitamos a conocer un proyecto
            con los atributos y las comodidades que tu familia se merece,
            rodeados de un entorno natural.
          </p>

          <div className="mb-6">
            <p className="text-sm">Desde</p>
            <p className="text-3xl font-bold md:text-4xl">UF 2.633</p>
          </div>

          <Link
            href="#modelos"
            className="inline-block bg-transparent border-2 border-white text-white py-3 px-8 rounded-full text-center hover:bg-white hover:text-[#8B1A3A] transition-colors duration-300 w-full md:w-auto"
          >
            Ver modelos
          </Link>
        </div>

        {/* Sección derecha con imagen */}
        <div className="w-full lg:w-[65%] relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto">
          <Image
            src={imageBanner}
            alt="Barrio Viña Carmen"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 65vw"
            priority
          />
        </div>
      </div>

      {/* Mini navbar */}
      <div className="absolute bottom-0 right-0 lg:w-[52%] w-full bg-white shadow-md">
        <div className="grid grid-cols-3 lg:flex lg:flex-row lg:justify-between">
          {itemsMiniNavbar.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="px-4 py-4 text-sm text-center whitespace-nowrap transition-colors duration-200 text-gray-600 hover:text-[#8B1A3A]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
