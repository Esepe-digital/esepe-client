export interface InicioResponse {
  data: {
    status: number;
    message: string;
    result: Result;
  };
}

export interface Result {
  ID: number;
  title: string;
  slug: string;
  banner_principal: ResultBannerPrincipal;
  thumbnail: boolean;
  content: string;
  permalink: string;
  acf_fields: AcfFields;
}

export interface AcfFields {
  banner_principal: AcfFieldsBannerPrincipal;
}

export interface AcfFieldsBannerPrincipal {
  tipo_de_banner: string;
  imagen_banner: ImagenBanner;
  imagen_mobile: string;
  video_banner: string;
  titulo_del_banner: string;
  texto_de_bajada: string;
  boton: Boton;
}

export interface Boton {
  title: string;
  url: string;
  target: string;
}

export interface ImagenBanner {
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

export interface ResultBannerPrincipal {
  titulo_del_banner: string;
  texto_de_bajada: string;
  boton: Boton;
  media: Media;
  imagen_mobile: string;
}

export interface Media {
  type: string;
  url: string;
  carrusel?: CarruselItem[];
}

export interface CarruselItem {
  imagen_desktop: string;
  imagen_mobile?: string;
  link?: string;
}
