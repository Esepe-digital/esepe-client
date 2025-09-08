import { barrioVinaCarmen } from '@/data/barrios/barrio-vina-carmen';
import { barrioAltosDelValle } from '@/data/barrios/altosdelvalle';
import { barrioAltosDelValleOriente } from '@/data/barrios/altosdelvalleoriente';
import { barrioSanFrancisco } from '@/data/barrios/sanfrancisco';
import { StaticImageData } from 'next/image';

export interface BarrioData {
  image: StaticImageData;
  lotesCoords: Record<string, { top: number; left: number }>;
  modeloImages: Record<string, StaticImageData>;
}

export const barriosData: Record<string, BarrioData> = {
  'Viña Carmen': barrioVinaCarmen,
  'Altos del Valle': barrioAltosDelValle,
  'Altos del Valle Oriente': barrioAltosDelValleOriente,
  'San Francisco': barrioSanFrancisco,
};
