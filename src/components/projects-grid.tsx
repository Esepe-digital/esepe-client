'use client';

import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { ProjectCard } from './project-card';
import { ProjectCard as ProjectCardInterface } from '@/interfaces/home/projectCardHome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function ProjectsGrid({
  projects,
}: {
  projects: ProjectCardInterface[];
}) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const handleProjectsClick = () => {
    if (pathname !== '/proyectos') {
      setIsLoading(true);
    }
  };

  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 2xl:px-[156px] py-20"
      id="next-section"
    >
      <div className="w-full">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px bg-border flex-1 max-w-[100px]" />
          <h2 className="px-4 text-2xl sm:text-3xl font-semibold text-center heading-2">
            Proyectos en venta
          </h2>
          <div className="h-px bg-border flex-1 max-w-[100px]" />
        </div>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects?.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/proyectos"
            onClick={handleProjectsClick}
            className={`inline-flex items-center gap-2 text-[#4A6793] font-medium hover:underline ${
              isLoading && pathname !== '/proyectos'
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
          >
            {isLoading && pathname !== '/proyectos' ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <ArrowRight className="w-5 h-5 text-[#4A6793]" />
                Ver todos los proyectos
              </>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}
