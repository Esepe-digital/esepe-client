'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { FormPromociones } from './form';

import AngleIcon from '@/assets/icons/angle-tool.svg';
import BathIcon from '@/assets/icons/bathroom.svg';
import RoomIcon from '@/assets/icons/bedroom.svg';
import FrameIcon from '@/assets/icons/frame.svg';
import { Property } from '@/interfaces/propiedades/propiedades';
import { Result } from '@/interfaces/api/promocionesResponse';
import { useMemo } from 'react';
import DefaultImage from '@/assets/images/default-image.jpg';
import { formatPrice } from '@/lib/utils';

export default function PropertyPromotions({ data }: { data: Property[] }) {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  // Dynamically generate filter options based on available properties
  const filterOptions = useMemo(() => {
    const options = [{ id: 'todos', label: 'Todos' }];

    // Get unique project names from the data
    const uniqueProjects = Array.from(
      new Set(data.map((property) => property.project))
    );

    // Add each unique project as a filter option
    uniqueProjects.forEach((project) => {
      // Map project names to filter IDs (lowercase, no spaces)
      const projectId = project.toLowerCase().replace(/\s+/g, '-');
      options.push({
        id: projectId,
        label: project,
      });
    });

    return options;
  }, [data]);

  const filteredProperties = useMemo(() => {
    if (activeFilter === 'todos') return data;
    return data.filter((property) => {
      const propertyProjectId = property.project
        .toLowerCase()
        .replace(/\s+/g, '-');
      return propertyProjectId === activeFilter;
    });
  }, [activeFilter, data]);

  const [selectedPromotion, setSelectedPromotion] = useState<Result | null>(
    null
  );
  const [isReserva, setIsReserva] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleReservaClick = () => {
    setIsReserva(!isReserva);
  };

  const handlePromotionClick = (mappedPromotion: Result) => {
    setSelectedPromotion(mappedPromotion);
  };

  useEffect(() => {
    if (selectedPromotion && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedPromotion]);

  return (
    <motion.div
      className="container px-4 py-8 mx-auto max-w-7xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Title with decorative lines */}
      <motion.div
        className="flex items-center justify-center mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="w-16 h-px bg-gray-300 md:w-32"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.h2
          className="px-4 text-2xl font-bold text-center md:text-3xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Promociones exclusivas
        </motion.h2>
        <motion.div
          className="w-16 h-px bg-gray-300 md:w-32"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </motion.div>

      {/* Filter Buttons - Responsive */}
      <div className="w-full mb-8">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-full">
            <div className="flex items-center justify-center gap-4">
              <h2 className="text-xl font-semibold text-gray-900 whitespace-nowrap">
                Proyectos
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {filterOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant={activeFilter === option.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveFilter(option.id)}
                    className={`
                      px-4 py-2 rounded-md text-sm font-medium transition-colors
                      ${
                        activeFilter === option.id
                          ? 'bg-[#6785B5] hover:bg-[#6785B5] text-white'
                          : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                      }
                    `}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProperties.map((property, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-sm"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.1 * index,
              ease: 'easeOut',
            }}
            whileHover={{ y: -5 }}
          >
            {/* Property image with discount badge */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative w-full h-[263px]">
                <Image
                  src={property.image || DefaultImage}
                  alt={property.name}
                  fill
                  className="object-cover rounded-t-[8px]"
                />
              </div>
              <motion.div
                className="absolute top-0 right-0 bg-[#D24A46] text-white px-3 h-[49px] flex items-center font-medium text-base rounded-bl-[16px] min-w-[80px] justify-center"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="flex flex-col leading-tight text-center ml-[-10px]">
                  <span className="font-bold text-base">
                    {property.discount}%
                  </span>
                  <span className="font-bold"> Dcto.</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Property details */}
            <motion.div
              className="p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {/* Property name */}
              <motion.h3
                className="text-xl font-bold"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {property.name}
              </motion.h3>

              {/* Model and project */}
              <motion.p
                className="mb-3 text-sm text-gray-600"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                {property.model} | {property.project}
              </motion.p>

              {/* Specifications */}
              <motion.div
                className="grid grid-cols-2 gap-2 mb-3"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div className="flex items-center gap-1">
                  <RoomIcon className="w-8 h-8 text-gray-500" />
                  <span className="text-sm">{property.bedrooms}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BathIcon className="w-8 h-8 text-gray-500" />
                  <span className="text-sm">{property.bathrooms}</span>
                </div>
                <div className="flex items-center gap-1">
                  <AngleIcon className="w-8 h-8 text-gray-500" />
                  <span className="text-sm">
                    {property.constructionArea} m²
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <FrameIcon className="w-8 h-8 text-gray-500" />

                  <span className="text-sm">{property.totalArea} m²</span>
                </div>
              </motion.div>

              {/* Divider */}
              <motion.hr
                className="my-3"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              />

              {/* Pricing */}
              <motion.div
                className="mb-4"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <p className="text-sm text-gray-600">
                  Precio lista:{' '}
                  <span className="line-through text-[#404040]">
                    UF {formatPrice(property.originalPrice)}
                  </span>
                </p>
                <p className="text-lg font-bold">
                  Precio con descuento:{' '}
                  <span className="text-[#404040]">
                    UF {formatPrice(property.discountedPrice)}
                  </span>
                </p>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                className="flex gap-2"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <Button
                  variant="outline"
                  className="flex-1 border-[#4A6793] border-2 text-[#4A6793] bg-white hover:bg-gray-50 rounded-[32px]"
                  onClick={() => {
                    setIsReserva(false);
                    const mappedPromotion: Result = {
                      ID_PROYECTO: property.id_proyecto,
                      ID_PROMOCION_DETALLE: property.id,
                      ID_INMUEBLE: property.id_inmueble,
                      TIPO: property.name.split(' ')[0],
                      PROYECTO: property.project,
                      ETAPA: '',
                      NRO_INMUEBLE: property.name.split(' ')[1],
                      MODELO: property.model,
                      PRECIO_LISTA: property.originalPrice.toString(),
                      SUPERFICIE_TOTAL: property.totalArea.toString(),
                      SUPERFICIE_UTIL: property.constructionArea.toString(),
                      PRECIO_DESCUENTO: property.discountedPrice.toString(),
                      PROGRAMA: '',
                      DESCUENTO: property.discount.toString(),
                      imagen_del_modelo: {
                        url: property.image || DefaultImage,
                      },
                      bedrooms: property.bedrooms,
                      bathrooms: property.bathrooms,
                    };
                    handlePromotionClick(mappedPromotion);
                  }}
                >
                  Cotizar
                </Button>
                <Button
                  className="flex-1 bg-[#123752] hover:bg-[#0e2c42] text-white rounded-[32px]"
                  onClick={() => {
                    setIsReserva(true);
                    const mappedPromotion: Result = {
                      ID_PROYECTO: property.id_proyecto,
                      ID_PROMOCION_DETALLE: property.id,
                      ID_INMUEBLE: property.id_inmueble,
                      TIPO: property.name.split(' ')[0],
                      PROYECTO: property.project,
                      ETAPA: '',
                      NRO_INMUEBLE: property.name.split(' ')[1],
                      MODELO: property.model,
                      PRECIO_LISTA: property.originalPrice.toString(),
                      SUPERFICIE_TOTAL: property.totalArea.toString(),
                      SUPERFICIE_UTIL: property.constructionArea.toString(),
                      PRECIO_DESCUENTO: property.discountedPrice.toString(),
                      PROGRAMA: '',
                      DESCUENTO: property.discount.toString(),
                      imagen_del_modelo: {
                        url: property.image || DefaultImage,
                      },
                      bedrooms: property.bedrooms,
                      bathrooms: property.bathrooms,
                    };
                    handlePromotionClick(mappedPromotion);
                  }}
                >
                  Reservar
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Form section */}
      {selectedPromotion && (
        <motion.section
          className="container mx-auto my-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          ref={formRef}
        >
          <FormPromociones
            promotion={selectedPromotion}
            formData={{
              apellido: '',
              nombre: '',
              rut: '',
              email: '',
              celular: '',
              aceptaTerminos: false,
              IdComuna: '1',
              IdRegion: '1',
            }}
            isReserva={isReserva}
            onReservaClick={handleReservaClick}
            formRef={formRef}
          />
        </motion.section>
      )}
    </motion.div>
  );
}
