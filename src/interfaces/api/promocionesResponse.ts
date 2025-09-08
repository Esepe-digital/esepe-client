import { StaticImageData } from 'next/image';

export interface PromocionesResponse {
  status: number;
  message: string;
  result: Result[];
}

export interface Result {
  ID_PROYECTO: string;
  ID_PROMOCION_DETALLE: string;
  ID_INMUEBLE: string;
  TIPO: string;
  PROYECTO: string;
  ETAPA: string;
  NRO_INMUEBLE: string;
  MODELO: string;
  PRECIO_LISTA: string;
  SUPERFICIE_TOTAL: string;
  SUPERFICIE_UTIL: string;
  PRECIO_DESCUENTO: string;
  PROGRAMA: string;
  DESCUENTO: string;
  imagen_del_modelo: {
    url: string | StaticImageData;
  };
  bedrooms: number;
  bathrooms: number;
}

export interface ImagenModelo {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: Date;
  modified: Date;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: Sizes;
}

export interface Sizes {
  thumbnail: string;
  'thumbnail-width': number;
  'thumbnail-height': number;
  medium: string;
  'medium-width': number;
  'medium-height': number;
  medium_large: string;
  'medium_large-width': number;
  'medium_large-height': number;
  large: string;
  'large-width': number;
  'large-height': number;
  '1536x1536': string;
  '1536x1536-width': number;
  '1536x1536-height': number;
  '2048x2048': string;
  '2048x2048-width': number;
  '2048x2048-height': number;
}
