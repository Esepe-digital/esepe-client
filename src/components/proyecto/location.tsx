'use client';

import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ProjectCard } from '@/interfaces/home/projectCardHome';

export default function Location({
  data,
}: {
  data: {
    title: string;
    description: string;
    image: string;
    address: string;
    features: {
      icon: string;
      text: string;
    }[];
    mapIframe: string;
    latLon: {
      latitud: string;
      longitud: string;
    };
    accentColor?: string;
  };
}) {
  const { latitud, longitud } = data.latLon;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Creamos un ProjectCard compatible
  const mapProjects: ProjectCard[] = [
    {
      id: 999,
      name: data.title,
      location: data.address,
      latitude: latitud,
      longitude: longitud,
      accentColor: data.accentColor || '#FF6347',
      image: '', // si no tenés imagen, lo dejamos vacío
      price: '',
    },
  ];

  const handleComoLlegar = () => {
    if (isMounted) {
      window.open(
        `https://www.google.com/maps/dir/Current+Location/?q=${latitud},${longitud}`,
        '_blank'
      );
    }
  };

  const MapComponent = dynamic<{ projects: ProjectCard[] }>(
    () => import('../map-component'),
    {
      ssr: false,
      loading: () => (
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[723px] bg-gray-100 flex items-center justify-center">
          <p>Cargando mapa...</p>
        </div>
      ),
    }
  );

  return (
    <section
      className="container mx-auto py-12 md:py-16 lg:py-20"
      id="ubicacion"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="relative w-full max-w-3xl">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <h2 className="px-6 text-3xl font-bold tracking-tight text-gray-900 bg-white">
                {data.title}
              </h2>
            </div>
          </div>
        </div>

        <div className="grid gap-8 mt-10 lg:grid-cols-2">
          {/* Mapa */}
          <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow h-full z-0 min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
            <div className="h-full w-full relative">
              {isMounted ? (
                <MapComponent projects={mapProjects} />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-100">
                  <p className="text-gray-500">Cargando mapa...</p>
                </div>
              )}
            </div>
          </div>

          {/* Información */}
          <div className="flex flex-col space-y-6">
            <div className="text-lg text-gray-700">
              {parse(data.description)}
            </div>

            <div className="space-y-4">
              {data.features.map((feature, index) => (
                <div className="flex items-start space-x-3" key={index}>
                  <Image
                    src={feature.icon || '/placeholder'}
                    alt={feature.text}
                    width={25}
                    height={25}
                  />
                  <p className="text-gray-600">{feature.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 mt-auto border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start space-x-2">
                  <p className="text-gray-700">{data.address}</p>
                </div>
                <a
                  onClick={handleComoLlegar}
                  className="bg-white border-2 border-[#4A6793] text-[#4A6793] rounded-full w-[173px] h-[48px] flex items-center justify-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://maps.google.com/maps?daddr=${latitud},${longitud}`}
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>Como llegar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
