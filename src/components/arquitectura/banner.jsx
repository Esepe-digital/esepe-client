'use client';
import Image from 'next/image';
import ArqBanner from '@/assets/images/arq-banner.jpg';
import ArrowDown from '@/assets/icons/arrowdown.svg';
import { motion } from 'framer-motion';

export default function HeroBannerArquitectura() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full sm:h-[800px]"
    >
      <div className="flex flex-col w-full h-full lg:flex-row">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ backgroundColor: '#123752' }}
          className={`w-full lg:w-[55%] text-white p-6 md:p-10 lg:p-12 flex flex-col justify-center items-center min-h-[600px] relative`}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-start gap-8 pt-20"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-5xl font-bold md:text-6xl lg:text-7xl max-w-[500px]"
            >
              Inmobiliaria <br />
              <span className="border-b-4 border-white pb-3">Es</span>epe
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-base md:text-lg max-w-[500px]"
            >
              Nace a partir de una destacada oficina de arquitectura de dilatada
              trayectoria, Bschneider
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-base md:text-lg max-w-[500px]"
            >
              El diseño se encuentra en nuestro ADN, la preocupación por los
              detalles, la correcta definición de todos los aspectos del
              proyecto sumado a un estricto control sobre el proceso
              constructivo, permite garantizar un estándar acorde a las familias
              modernas.
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute bottom-6 right-6"
          >
            <ArrowDown />
          </motion.div>
        </motion.div>

        {/* Sección derecha con imagen */}
        <div className="w-full lg:w-[65%] relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto">
          <Image
            src={ArqBanner}
            alt="Arquitectura"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 65vw"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}
