import Image from 'next/image';
import Metodologia1 from '@/assets/bschneider/metodologia1.jpg';
import Metodologia2 from '@/assets/bschneider/metodologia2.jpg';
import Metodologia3 from '@/assets/bschneider/metodologia3.png';

export default function Component() {
  return (
    <section
      id="metodologia"
      className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
        {/* Left Column - Title and Text */}
        <div className="space-y-6">
          <div className="flex items-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mr-4">
              Metodología
            </h2>
            <div className="w-16 h-px bg-gray-400" />
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            Fruto de nuestros más de 50 años de experiencia en el rubro de la
            arquitectura habitacional e industrial, sabemos cómo controlar la
            ejecución de cada proyecto en todas sus etapas. De este modo que el
            resultado es un fiel reflejo de lo que pensamos y definimos logrando
            productos de calidad acorde a las necesidades particulares de cada
            cliente.
          </p>
        </div>

        {/* Right Column - Image Grid */}
        <div className="grid grid-cols-2 gap-4 h-full">
          {/* Large image spanning two rows on the left */}
          <div className="row-span-2">
            <Image
              src={Metodologia1}
              alt="Architect working on blueprints and technical drawings"
              width={300}
              height={229}
              className="object-cover mt-12 rounded-lg h-[229px] w-full"
            />
          </div>

          {/* Top right image */}
          <div>
            <Image
              src={Metodologia2}
              alt="Person working on laptop with architectural plans"
              width={300}
              height={229}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Bottom right image */}
          <div>
            <Image
              src={Metodologia3}
              alt="Hands working on architectural building model"
              width={300}
              height={229}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
