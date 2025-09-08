import Image from 'next/image';
import EntregaImg from '@/assets/como-comprar/entrega.png';

interface CotizaComponentProps {
  stepNumber?: number;
  title?: string;
  description?: string;
  detailText?: string;
  durationText?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function EntregaComponent({
  stepNumber = 7,
  title = 'Entrega',
  imageAlt = 'entrega de llave',
}: CotizaComponentProps) {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Text Content - Left side on desktop */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg">
              <Image
                src={EntregaImg}
                alt={imageAlt}
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Decorative curved line */}
            <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-gray-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20,80 Q80,20 80,80" />
              </svg>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-6">
          {/* Step number and title */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-[#262626] text-white rounded-full flex items-center justify-center text-sm font-semibold">
              {stepNumber}
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#262626]">
              {title}
            </h2>
          </div>

          {/* Description */}
          <p className="text-[#5C5C5C] text-base lg:text-lg leading-relaxed">
            Llegó el momento más esperado. Una vez firmada la escritura se
            agenda, con un plazo máximo de 15 días hábiles, la entrega de la
            propiedad. Para ello,{' '}
            <span className="font-bold leading-[140%] text-[#5C5C5C]">
              se reúne el cliente con nuestro departamento de post venta y
              realizan en conjunto un chequeo completo del inmueble.
            </span>
          </p>

          {/* Detail text */}
          <p className="text-[#5C5C5C] text-base lg:text-lg leading-relaxed">
            <span className="font-bold leading-[140%] text-[#5C5C5C]">
              En caso de haber observaciones estas serán tratadas por Post
              Venta,
            </span>
            para dejar la propiedad bajo el estándar esperado por nuestro
            cliente.
          </p>

          {/* Duration text */}
          <p className="text-[#5C5C5C] text-base lg:text-lg leading-relaxed">
            A su vez se entrega un{' '}
            <span className="font-bold leading-[140%] text-[#5C5C5C]">
              manual de uso de propiedad
            </span>
            , el cual le llegará en formato digital.
          </p>
        </div>
      </div>
    </div>
  );
}
