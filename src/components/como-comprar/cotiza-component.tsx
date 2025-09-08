import Image from 'next/image';
import CotizaImg from '@/assets/como-comprar/cotiza.png';
import Flecha from '@/assets/como-comprar/flecha-primera.svg';
interface CotizaComponentProps {
  stepNumber?: number;
  title?: string;
  description?: string;
  detailText?: string;
  durationText?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function CotizaComponent({
  stepNumber = 1,
  title = 'Cotiza',

  detailText = 'Lo importante es que te fijes en la cantidad de dormitorios y baños, los metros útiles y totales, la orientación, número de piso si es un departamento, fecha de entrega y precio; además de los descuentos y promociones que pueda haber.',

  imageAlt = 'Woman working on laptop',
}: CotizaComponentProps) {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Text Content - Left side on desktop */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg">
              <Image
                src={CotizaImg}
                alt={imageAlt}
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Decorative curved line */}
          </div>
        </div>
        <div className="lg:col-span-8 space-y-6 relative">
          <div className="absolute top-[1%] left-[95%] z-10 hidden md:block">
            <Flecha
              className="text-gray-400"
              style={{
                width: '250px',
                height: '250px',
                transform: 'rotate(45deg)',
                opacity: '20%',
              }}
            />
          </div>

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
            En la búsqueda de tu hogar cotizarás varias opciones.{' '}
            <span className="font-bold leading-[140%] text-[#5C5C5C]">
              En ESEPE ese proceso puede ser online o presencial
            </span>{' '}
          </p>

          {/* Detail text */}
          <p className="text-[#5C5C5C] text-sm lg:text-base leading-relaxed">
            {detailText}
          </p>

          {/* Duration text */}
          <p className="text-[#5C5C5C] text-sm lg:text-base font-medium">
            <span className="font-bold leading-[140%] text-[#5C5C5C]">
              Una vez realizada la cotización, esta tiene una duración de 7
              días.
            </span>{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
