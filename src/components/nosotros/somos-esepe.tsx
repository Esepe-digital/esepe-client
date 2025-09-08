'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface SomosEsepeProps {
  titulo: string;
  texto: string;
  imagen: string;
}

export default function SomosEsepe({ titulo, texto, imagen }: SomosEsepeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row items-center">
        {/* Circular image */}
        <div className="w-full md:w-[45%] flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
            <Image
              src={imagen}
              alt="Edificio residencial Esepe"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="w-full md:w-[55%] md:text-left md space-y-6 px-6 md:px-0">
          <div className="space-y-2">
            <h2 className="text-[48px] font-bold text-gray-800">{titulo}</h2>
          </div>
          <div className="w-16 h-1 bg-gray-800 border-full"></div>

          <div
            className="text-gray-700 leading-relaxed max-w-md text-[18px] [&>p]:mb-4 [&>p:last-child]:mb-0"
            dangerouslySetInnerHTML={{ __html: texto }}
          />
        </div>
      </div>
    </motion.div>
  );
}
