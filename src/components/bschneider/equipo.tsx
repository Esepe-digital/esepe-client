'use client';

import Image from 'next/image';
import ImgEquipo from '@/assets/images/nosotros-img.png';
import { motion } from 'framer-motion';

export default function SomosEsepe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row items-center" id="equipo">
        {/* Circular image */}
        <div className="w-full md:w-[45%] flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
            <Image
              src={ImgEquipo}
              alt="Edificio residencial Esepe"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="w-full md:w-[55%] md:text-left md space-y-6 px-6 md:px-0">
          <div className="flex items-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mr-4">
              Nuestro Equipo
            </h2>
            <div className="w-16 h-px bg-gray-400" />
          </div>

          <p className="text-gray-700 leading-relaxed max-w-md text-[18px]">
            Contamos con un sólido grupo humano compuesto por arquitectos e
            ingenieros que se unen para dar vida a Bschneider con el objetivo
            común de entregar a nuestros clientes soluciones logísticas y
            arquitectónicas de alto nivel para el desarrollo industrial,
            garantizando excelencia y eficacia en cada proyecto.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
