'use client';

import Image from 'next/image';
import { MapPin, ArrowRight, Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import AngleIcon from '@/assets/icons/angle-tool.svg';
import BathIcon from '@/assets/icons/bathroom.svg';
import RoomIcon from '@/assets/icons/bedroom.svg';
import { ProjectCard } from '@/interfaces/home/projectCardHome';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ProyectosFilter } from './proyectos-filter';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

interface MapComponentProps {
  projects: ProjectCard[];
}

// Componente del mapa que solo se carga en el cliente
const MapComponent = dynamic<MapComponentProps>(
  () => import('./map-component'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[723px] bg-gray-100 flex items-center justify-center">
        <p>Cargando mapa...</p>
      </div>
    ),
  }
);

const getUniqueCommunesFromProjects = (
  projects: ProjectCard[],
  saleStatus: SaleStatus
): { value: string; label: string }[] => {
  const excludedCommunes = ['Vitacura'];

  // Filtrar los proyectos según el estado de venta
  const filteredProjects = projects.filter((project) =>
    saleStatus === 'en-venta'
      ? project.status === 'En Venta'
      : project.status === 'Vendido'
  );

  // Obtener las comunas correspondientes a los proyectos filtrados
  const uniqueCommunes = [
    ...new Set(
      filteredProjects
        .map((project) => project.commune)
        .filter(
          (commune): commune is string =>
            commune !== undefined &&
            commune !== '' &&
            !excludedCommunes.includes(commune)
        )
    ),
  ];

  return uniqueCommunes.sort().map((commune) => ({
    value: commune.toLowerCase(),
    label: commune,
  }));
};

type SaleStatus = 'en-venta' | 'vendidos';
type PropertyType = 'casas' | 'departamentos' | 'ambos';

export default function PropertyMapListing({ data }: { data: ProjectCard[] }) {
  const [saleStatus, setSaleStatus] = useState<SaleStatus>('en-venta');
  const [propertyType, setPropertyType] = useState<PropertyType>('ambos');
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCommunes, setSelectedCommunes] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<ProjectCard[]>(data);
  const [loadingProject, setLoadingProject] = useState<string | null>(null);

  const communes = getUniqueCommunesFromProjects(data, saleStatus);

  useEffect(() => {
    let filtered = [...data];

    // Filtrar por estado de venta
    if (saleStatus === 'en-venta') {
      filtered = filtered.filter((project) => project.status === 'En Venta');
    } else if (saleStatus === 'vendidos') {
      filtered = filtered.filter((project) => project.status === 'Vendido');
    }

    // Filtrar por tipo de propiedad
    if (propertyType !== 'ambos') {
      filtered = filtered.filter((project) =>
        propertyType === 'casas'
          ? project.type === 'Casa'
          : project.type === 'Departamento'
      );
    }

    // Filtrar por comunas seleccionadas (también para 'vendidos')
    if (selectedCommunes.length > 0) {
      filtered = filtered.filter((project) => {
        const projectCommune = project.commune?.toLowerCase();
        return (
          projectCommune &&
          selectedCommunes.some(
            (commune) => commune.toLowerCase() === projectCommune
          )
        );
      });
    }

    setFilteredProjects(filtered);
  }, [saleStatus, propertyType, selectedCommunes, data]);

  const handleCommuneSelect = (value: string) => {
    setSelectedCommunes((current) => {
      if (current.includes(value)) {
        return current.filter((item) => item !== value);
      }
      return [...current, value];
    });
  };

  const getSelectedCommunesLabel = () => {
    if (selectedCommunes.length === 0) {
      return 'Todas las comunas';
    }
    if (selectedCommunes.length === 1) {
      return (
        communes.find((commune) => commune.value === selectedCommunes[0])
          ?.label || 'Comuna seleccionada'
      );
    }
    return `${selectedCommunes.length} comunas seleccionadas`;
  };

  const handleProjectClick = (slug: string | undefined) => {
    if (slug) {
      setLoadingProject(slug);
    }
  };

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ProyectosFilter
        saleStatus={saleStatus}
        setSaleStatus={setSaleStatus}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        open={open}
        setOpen={setOpen}
        selectedRegions={selectedCommunes}
        handleRegionSelect={handleCommuneSelect}
        getSelectedRegionsLabel={getSelectedCommunesLabel}
        regions={communes}
      />

      <motion.div
        className="flex flex-col-reverse md:flex-row w-full h-auto"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Map Section */}
        <motion.div
          className="relative z-10 w-full h-[500px] sm:h-[400px] md:h-[500px] lg:h-[723px] mt-20 md:mt-0"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <MapComponent projects={filteredProjects} />
        </motion.div>

        {/* Projects Scroll List */}
        <motion.div
          className="flex flex-col w-full h-[70vh] md:h-[723px] bg-white"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ScrollArea className="h-full">
            <div className="p-4 space-y-6">
              {filteredProjects?.length > 0 ? (
                filteredProjects?.map((project, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col gap-4 sm:gap-6 sm:flex-row shadow-lg p-4 rounded-lg md:shadow-none`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 * index,
                      ease: 'easeOut',
                    }}
                  >
                    {/* Image */}
                    <motion.div
                      className="relative w-full sm:w-1/2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={300}
                        height={200}
                        className="w-full h-auto object-cover aspect-[3/2]"
                      />
                    </motion.div>

                    {/* Text content */}
                    <motion.div
                      className="flex flex-col justify-between w-full space-y-2 sm:w-1/2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-5 h-5" />
                          <span className="whitespace-pre-line">
                            {project.location && (
                              <span>{project.location}</span>
                            )}
                          </span>
                        </div>
                        <div>
                          <h2 className="font-semibold text-gray-800">
                            {project.commune}
                          </h2>
                        </div>

                        <h3 className="text-xl font-semibold sm:text-l">
                          <motion.span
                            style={{
                              backgroundColor: project.accentColor,
                              color: 'white',
                              padding: '0.2rem',
                              borderRadius: '0.25rem',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: 'inline-block',
                              maxWidth: '100%',
                            }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            {project.name}
                          </motion.span>
                        </h3>
                        <div className="text-gray-500 text-md">
                          {project.status}
                        </div>
                        {project.status !== 'Vendido' && (
                          <div className="flex flex-wrap items-center text-sm text-gray-700 gap-x-6 gap-y-2">
                            <div className="flex items-center gap-1">
                              <RoomIcon className="w-7 h-7" />
                              <span>{project?.bedrooms}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BathIcon className="w-7 h-7" />
                              <span>{project?.bathrooms}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <AngleIcon className="w-7 h-7" />
                              <span>
                                {/* {project?.construccion
                                  ?.replace('.00', '')
                                  .replace('.', ',')} */}
                                  {project.name === 'Altos del Valle Oriente'(
                                    <span>74,71</spa></span>
                                  )}{' '}
                                m²
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                      {project.status !== 'Vendido' && (
                        <motion.div
                          className="flex flex-col gap-3 mt-4 sm:flex-row"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            href={`/proyecto/${project.slug}`}
                            onClick={(e) => {
                              if (project.status === 'Vendido') {
                                e.preventDefault();
                              } else {
                                handleProjectClick(project.slug);
                              }
                            }}
                            className={`w-full sm:w-[149px] h-[40px] px-4 flex items-center justify-center gap-1.5 rounded-full border-2 transition-colors text-sm whitespace-nowrap
                              ${
                                project.status === 'Vendido'
                                  ? 'border-[#AFAFAF] text-[#AFAFAF] bg-gray-100 cursor-not-allowed'
                                  : 'border-[#4A6793] text-[#4A6793] hover:bg-[#4A6793]/5'
                              }
                              ${loadingProject === project.slug ? 'opacity-50' : ''}
                            `}
                          >
                            {loadingProject === project.slug ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <>
                                Ver Proyecto
                                <ArrowRight className="w-4 h-4" />
                              </>
                            )}
                          </Link>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className="flex items-center justify-center h-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-center text-gray-500">
                    No hay proyectos disponibles
                  </p>
                </motion.div>
              )}
            </div>
          </ScrollArea>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
