'use client';

import Link from 'next/link';
import Image from 'next/image';
import parse from 'html-react-parser';
import { MapPin } from 'lucide-react';
import CheckCircle from '@/assets/icons/check-circle.svg';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { formatPrice } from '@/lib/utils';

import { HeroBanner } from '@/interfaces/proyectos/heroBanner';

const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
});

const itemsMiniNavbar = [
  { id: 'descripcion', label: 'Descripción' },
  { id: 'galeria', label: 'Galería' },
  { id: 'modelos', label: 'Modelos' },
  { id: 'ubicacion', label: 'Ubicación' },
  { id: 'cotizador', label: 'Cotizar' },
];

export default function HeroBannerProject({ data }: { data: HeroBanner }) {
  const {
    media,
    title,
    description,
    price,
    commune,
    projectColor,
    avance_de_obra,
  } = data;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full md:h-[500px] xl:h-[600px] 2xl:h-[800px]"
    >
      <div className="flex flex-col w-full h-full lg:flex-row">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ backgroundColor: projectColor || '#8B1A3A' }}
          className={`w-full lg:w-[25%]  text-white p-6 flex flex-col justify-center`}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center mb-3 2xl:mb-8 max-w-[500px]"
          >
            <MapPin className="w-5 h-5 mr-2" />
            <span className="text-md 2xl:text-lg">{commune}</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-3 2xl:mb-6 text-4xl font-bold 2xl:text-5xl max-w-[500px]"
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-6 text-sm 2xl:text-base max-w-[500px]"
          >
            {parse(description)}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mb-6 text-base md:text-lg max-w-[500px] flex items-center gap-2"
          >
            <span>Etapa:</span>
            <CheckCircle className="w-4 h-4" />
            <div className="flex flex-wrap gap-2">
              {avance_de_obra.length &&
                avance_de_obra?.map((e, index) => (
                  <div
                    key={index}
                    className="flex items-center px-4 py-2 bg-[#F5F8FF] rounded-full"
                  >
                    <span className="text-sm text-gray-600">{e}</span>
                  </div>
                ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mb-6 xl:mb-12 max-w-[500px]"
          >
            <p className="text-sm">Desde</p>
            <p className="text-3xl font-bold md:text-4xl">
              {price ? 'UF ' + formatPrice(price) : 'No disponible'}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <Link
              href="#modelos"
              onClick={(e) => handleScroll(e, 'modelos')}
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white py-3 px-8 rounded-full hover:bg-white hover:text-[#8B1A3A] transition-colors duration-300 w-[227px] h-[50px] xl:h-[60px]"
            >
              Ver modelos
            </Link>
          </motion.div>
        </motion.div>

        {/* Sección derecha con imagen */}
        <div className="w-full md:w-[75%] relative h-[250px] sm:h-[400px] md:h-[500px] lg:h-auto">
          {media?.type === 'video' ? (
            <div className="absolute inset-0 overflow-hidden">
              <ReactPlayer
                url={media?.url}
                playing={true}
                loop={true}
                controls={false}
                muted={true}
                width="100%"
                height="100%"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                config={{
                  file: {
                    attributes: {
                      style: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      },
                    },
                  },
                }}
                playsinline={true}
              />
            </div>
          ) : (
            <Image
              src={media?.url || '/placeholder'}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 65vw"
              priority
            />
          )}
        </div>
      </div>

      {/* Mini navbar */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="sm:absolute bottom-0 right-0 lg:w-[52%] w-full bg-white shadow-md"
      >
        <div className="grid grid-cols-3 lg:flex lg:flex-row lg:justify-between">
          {itemsMiniNavbar.map((item) => (
            <Link
              key={item.id}
              href={
                item.id === 'cotizador' && title === 'Parque Germania'
                  ? 'https://cotizador.saladeventasdigital.com/cotizador/index.php?id_subagrupaciones=24&key=ileben&portal=&open_dialog=true' // URL externa
                  : `#${item.id}`
              }
              onClick={(e) => {
                if (item.id !== 'cotizador' || title !== 'Parque Germania') {
                  handleScroll(e, item.id);
                }
              }}
              className="px-4 py-4 text-sm text-center whitespace-nowrap transition-colors duration-200 text-gray-600 hover:text-[#8B1A3A]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
