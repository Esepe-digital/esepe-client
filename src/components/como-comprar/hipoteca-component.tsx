import Image from 'next/image';
import HipotecaImg from '@/assets/como-comprar/hipoteca.png';

interface MortgageStepsProps {
  className?: string;
}

export default function MortgageSteps({ className = '' }: MortgageStepsProps) {
  return (
    <div className={`w-full min-h-[500px] lg:h-[650px] ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-stretch min-h-[500px] lg:h-[650px]">
        {/* Text Content - Left Side */}
        <div className="lg:col-span-8 relative min-h-[400px] lg:h-[650px] flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:pl-16 lg:pr-8 py-8 lg:py-0">
          <div className="space-y-6 md:space-y-8 relative z-10">
            {/* Step 5 */}
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#262626] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  5
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#262626]">
                  Crédito hipotecario
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed ml-8 sm:ml-10 md:ml-11">
                Para firmar escritura se necesita tener el crédito hipotecario
                aprobado, trámite que nosotros ayudamos a realizar.
              </p>
            </div>

            {/* Step 6 */}
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#262626] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  6
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#262626]">
                  Firma de escritura
                </h3>
              </div>
              <div className="ml-8 sm:ml-10 md:ml-11 space-y-3 md:space-y-4">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Una vez terminado el inmueble, y realizada la recepción
                  municipal por parte del director de obras de la comuna, deben
                  firmar ante notario la escritura de la propiedad todos los
                  involucrados, desde el cliente hasta la inmobiliaria y el ente
                  que financia el crédito.
                </p>
                <p className="font-bold leading-[140%] text-[#5C5C5C]">
                  En caso de ser una compra al contado solo participan la
                  inmobiliaria y el cliente.
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Para esto tiene un plazo de al menos 30 días desde que la
                  recepción municipal es aprobada por la municipalidad. Una vez
                  que el cliente ha firmado, y todos los papeles están correctos
                  y al día, la inmobiliaria también firma para dar por cerrado
                  el negocio.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image - Right Side */}
        <div className="lg:col-span-4 order-first lg:order-last h-[300px] md:h-[400px] lg:h-[650px]">
          <div className="relative h-full w-full">
            <Image
              src={HipotecaImg}
              alt="Professional meeting with people signing documents"
              fill
              className="object-cover rounded-2xl lg:rounded-l-2xl lg:rounded-r-none"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
