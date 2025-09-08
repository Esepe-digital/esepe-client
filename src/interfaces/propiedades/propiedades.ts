import { StaticImageData } from 'next/image';

export interface Property {
  id: string;
  name: string;
  model: string;
  project: string;
  discount: number;
  bedrooms: number;
  bathrooms: number;
  totalArea: number;
  constructionArea: number;
  originalPrice: number;
  discountedPrice: number;
  image: string | StaticImageData;
  projectTag: string;
  id_proyecto: string;
  id_inmueble: string;
}
