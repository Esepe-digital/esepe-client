import Image from 'next/image';
import Arquitectura from '@/assets/images/arquitectura.jpg';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Testimonio() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="flex w-full items-center justify-center px-6 py-12 lg:w-3/5 lg:px-12 lg:py-16">
          <div className="text-center lg:text-left max-w-[600px] mx-auto relative">
            <div className="absolute left-0 top-0 h-1 w-16 bg-[#123752] rounded-full"></div>

            <p className="mb-6 text-base text-gray-700 text-left max-w-[400px] leading-relaxed mt-6">
              La experiencia enseña, y con más de 50 años en el rubro de la
              arquitectura habitacional e industrial, sabemos cómo controlar la
              ejecución de cada proyecto en todas sus etapas, de modo que el
              resultado sea fiel reflejo de lo que pensamos y definimos para
              lograr productos de calidad.
            </p>

            <Link href="/bschneider" target="_blank" rel="noopener noreferrer">
              <button className="text-[#4A6793] px-4 py-2 rounded-md flex items-center gap-2">
                <ArrowRight size={16} className="text-[#4A6793]" />
                Visitar la web de Bschneider
              </button>
            </Link>
          </div>
        </div>

        <div className="relative w-full lg:w-2/5 min-h-[400px] h-[500px] lg:h-auto">
          <div className="absolute inset-0">
            <Image
              src={Arquitectura}
              alt="Familia"
              fill
              className="md:rounded-tl-[2rem] object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
