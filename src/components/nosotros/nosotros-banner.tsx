'use client';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface NosotrosBannerProps {
  titulo: string;
  texto: string;
  imagen: string;
}

export default function NosotrosBanner({
  titulo,
  texto,
  imagen,
}: NosotrosBannerProps) {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight - 489,
      behavior: 'smooth',
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-auto lg:h-[439px] flex flex-col lg:flex-row"
    >
      {/* Left Column - Text Content */}
      <div
        className="w-full lg:w-[45%] h-auto lg:h-full flex flex-col justify-center items-center relative"
        style={{ backgroundColor: '#123752' }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-6 sm:px-12 lg:px-24 py-12 lg:py-0"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-5">
            {titulo}
          </h1>
          <div className="w-12 sm:w-16 h-0.5 bg-white mb-6 lg:mb-8"></div>
          <p className="text-white text-base sm:text-lg leading-relaxed max-w-md line-clamp-3">
            {texto}
          </p>
        </motion.div>

        <div className="pb-8 md:pb-0 md:absolute bottom-6 right-6 lg:bottom-8 lg:right-8">
          <button
            onClick={handleScroll}
            className="rounded-full border-2 border-white p-3 text-white hover:bg-white/10 transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="w-full lg:flex-1 h-[450px] sm:h-[350px] lg:h-auto relative overflow-hidden">
        <Image
          src={imagen}
          alt="Nosotros Banner"
          fill
          className="object-cover transform scale-98"
          priority
        />
      </div>
    </motion.section>
  );
}
