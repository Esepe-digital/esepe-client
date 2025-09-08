import Image from 'next/image';
import Arquitectura from '@/assets/images/arq-nosotros.png';

export default function Testimonio() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="flex w-full items-center justify-center px-6 pt-12 lg:w-3/5 lg:px-12 lg:py-16">
          <div className="leading-relaxed max-w-2xl text-[18px]">
            <div className="w-16 h-1 bg-gray-800 border-full my-4"></div>
            <p className="mb-6 text-gray-900">
              Seleccionamos el terreno ideal,{' '}
              <strong>diseñamos proyectos únicos</strong> y gestionamos el
              financiamiento con recursos propios y el respaldo de
              inversionistas de confianza.
            </p>

            <p className="mb-8 text-gray-900">
              {' '}
              Nuestro equipo combina{' '}
              <strong>experiencia, compromiso y excelencia.</strong>
            </p>
            <p className="mb-8 text-gray-900">
              Acompañamos a nuestros clientes en cada paso del camino. Porque en
              Esepe no solo creamos casas y departamentos, sino{' '}
              <strong>espacios para toda la vida.</strong>
            </p>
          </div>
        </div>

        <div className="relative h-[400px] w-full lg:h-[611px] lg:w-3/5">
          <div className="absolute inset-0">
            <Image
              src={Arquitectura}
              alt="Arquitectura"
              fill
              className="md:rounded-l-[6rem] object-cover "
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
