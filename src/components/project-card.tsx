'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { MapPin, ArrowRight, Loader2 } from 'lucide-react';
import { ProjectCard as ProjectCardInterface } from '@/interfaces/home/projectCardHome';
import { formatPrice } from '@/lib/utils';
import AngleIcon from '@/assets/icons/angle-tool.svg';
import BathIcon from '@/assets/icons/bathroom.svg';
import RoomIcon from '@/assets/icons/bedroom.svg';
import { useState } from 'react';

export function ProjectCard({
  image,
  location,
  name,
  price,
  bedrooms,
  bathrooms,
  construccion,
  accentColor,
  href,
  commune,
}: ProjectCardInterface) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (!href) return;
    setIsLoading(true);
  };

  return (
    <Card className="w-full max-w-[548px] h-full flex flex-col border-none overflow-hidden">
      <div className="flex flex-col h-full lg:flex-row">
        {/* Image section */}
        <div className="relative w-full lg:w-[263px] h-[200px] lg:h-auto flex-shrink-0">
          <Image
            src={image || '/placeholder.svg'}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 263px"
          />
        </div>

        {/* Content section */}
        <div className="flex flex-col justify-between flex-1 p-4 sm:p-6">
          {/* Location */}
          <div className="flex items-start gap-1 mb-2 text-sm text-[#6E6E6E]">
            <MapPin size={16} className="w-4 h-4 flex-shrink-0 mt-0.5" />{' '}
            <span className="flex-1">{location}</span>
          </div>
          <div className="flex items-start gap-1 mb-2 text-sm text-[#6E6E6E]">
            <span className="flex-1 font-bold">{commune}</span>
          </div>

          <h3 className="mb-3 text-lg font-semibold">
            <span
              className="px-3 py-1"
              style={{
                backgroundColor: accentColor,
                color: 'white',
                borderRadius: '0.25rem',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: 'inline-block',
                maxWidth: '100%',
              }}
            >
              {name}
            </span>
          </h3>

          {/* Price */}
          <div className="mb-4">
            <div className="text-sm text-[#6E6E6E]">Desde</div>
            <div className="font-semibold">
              {price ? 'UF ' + formatPrice(price) : 'No disponible'}
            </div>
          </div>

          {/* Specs */}
          <div className="flex flex-wrap items-center justify-start gap-4 mb-4 text-sm text-[#6E6E6E]">
            <div className="flex items-center gap-1">
              <RoomIcon className="w-4 h-4" viewBox="0 0 24 24" />
              <span>{bedrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <BathIcon className="w-4 h-4" viewBox="0 0 24 24" />
              <span>{bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <AngleIcon className="w-4 h-4" viewBox="0 0 24 24" />
              <span>
                {construccion?.replace('.00', '').replace('.', ',')} m²
                <br />
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href={href || '#'}
            onClick={handleClick}
            className={`w-fit inline-flex items-center gap-2 px-4 py-1.5 text-sm text-[#4A6793] border-2 border-[#4A6793] rounded-full hover:bg-[#f0f4f9] transition-colors whitespace-nowrap ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 text-[#4A6793] animate-spin" />
            ) : (
              <ArrowRight className="w-5 h-5 text-[#4A6793]" />
            )}
            {isLoading ? 'Cargando...' : 'Ver proyecto'}
          </Link>
        </div>
      </div>
    </Card>
  );
}
