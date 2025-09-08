'use client';

import Image from 'next/image';
import Autokas from '@/assets/bschneider/autokas.png';
import Cummins from '@/assets/bschneider/cummins-antofagasta.png';
import Kaufmann from '@/assets/bschneider/kaufman-temuco.png';
import Oficina from '@/assets/bschneider/oficinabsc.png';
import Aerocardal from '@/assets/bschneider/aerocardal.png';
import KaufmannLampa from '@/assets/bschneider/kaufmann-lampa.png';

const projects = [
  { id: 1, name: 'Autokas', image: Autokas, area: 'autokas' },
  { id: 2, name: 'Kaufmann Lampa', image: KaufmannLampa, area: 'lampa' },
  { id: 3, name: 'Oficina B | Schneider', image: Oficina, area: 'oficina' },
  { id: 4, name: 'Cummins Antofagasta', image: Cummins, area: 'cummins' },
  { id: 5, name: 'Kaufmann Temuco', image: Kaufmann, area: 'temuco' },
  { id: 6, name: 'Aerocardal', image: Aerocardal, area: 'aerocardal' },
];

export default function ProjectsGrid() {
  return (
    <div id="proyectos" className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
      {/* Título */}
      <div className="flex items-center justify-center mb-8 md:mb-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-px bg-gray-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center whitespace-nowrap">
            Algunos proyectos
          </h2>
          <div className="w-12 h-px bg-gray-400" />
        </div>
      </div>

      {/* Grid personalizada */}
      <div
        className="grid gap-4 md:gap-6"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(4, 1fr)',
          gridTemplateAreas: `
            "autokas cummins"
            "lampa cummins"
            "oficina temuco"
            "oficina aerocardal"
          `,
          height: '1000px',
        }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            style={{ gridArea: project.area }}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-lg md:text-xl font-semibold">
                {project.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
