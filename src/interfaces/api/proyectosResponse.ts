export interface ProjectsResponse {
  status: number;
  message: string;
  result: Result[];
}

export interface Result {
  ID: number;
  slug: string;
  api_id: string;
  title: string;
  thumbnail: string;
  content: string;
  permalink: string;
  acf_fields: AcfFields;
  modelos: ResultModelo[];
  resumen_proyecto: ResumenProyecto;
  estado: string[];
  tipo_propiedad: string[];
  comuna: string[];
}

export interface AcfFields {
  color_proyecto: string;
  descripcion_corta: string;
  caracteristicas_del_proyecto: CaracteristicasDelProyecto;
  galeria_de_fotos: GaleriaDeFoto[];
  modelos_de_casa: ModelosDeCasa[];
  avance_de_obra: string;
  descripcion: string;
  caracteristacas_a_destacar: CaracteristacasADestacar[];
  direccion: string;
  mapa: string;
  lat_lon_ubication: LatLonUbication;
  link_de_cotizador_externo: string;
  texto_informativo: string;
  whatsapp: string;
  dias_de_atencion: string;
  horario_atencion: string;
  telefono_de_atencion: string;
  direccion_de_contacto: string;
  codigo_de_comercio: string;
  apikey: string;
  api_id: string;
  imagen_master_plan: {
    url: string;
  };
  id_formulario: string;
}

export interface CaracteristacasADestacar {
  caracteristica: Caracteristica;
}

export interface Caracteristica {
  imagen_icono: GaleriaDeFoto;
  texto: string;
}

export interface GaleriaDeFoto {
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
  status: Status;
  uploaded_to: number;
  date: Date;
  modified: Date;
  menu_order: number;
  mime_type: MIMEType;
  type: Type;
  subtype: Subtype;
  icon: string;
  width: number;
  height: number;
  sizes: Sizes;
  mediaType?: 'image' | 'video';
  thumbnail?: string;
}

export enum MIMEType {
  ImageJPEG = 'image/jpeg',
  ImagePNG = 'image/png',
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

export enum Status {
  Inherit = 'inherit',
}

export enum Subtype {
  JPEG = 'jpeg',
  PNG = 'png',
}

export enum Type {
  Image = 'image',
}

export interface CaracteristicasDelProyecto {
  descripcion_modelos: string;
  descripcion_cocina: string;
  descripcion_lujos: string;
  numero_de_dormitorios: string;
  numero_de_banos: string;
  terreno_medidas: string;
  descripcion_general: string;
}

export interface LatLonUbication {
  latitud: string;
  longitud: string;
}

export interface ModelosDeCasa {
  nombre_del_modelo: string;
  codigo_modelo: string;
  bruchure: Bruchure;
  pdf_plantas_arquitectonicas: Bruchure;
  tour_virtual: string;
  galeria_de_fotos_del_modelo: GaleriaDeFoto[];
}

export interface Bruchure {
  fuente_del_archivo: FuenteDelArchivo;
  archivo_desde_la_biblioteca: boolean;
  url_del_archivo: string;
}

export enum FuenteDelArchivo {
  URLExterna = 'Url externa',
}

export interface ResultModelo {
  nombre_del_modelo: string;
  codigo_modelo: string;
  bruchure: Bruchure;
  pdf_plantas_arquitectonicas: Bruchure;
  tour_virtual: string;
  galeria_de_fotos_del_modelo: GaleriaDeFoto[];
  inmuebles_disponibles: number;
  precio_minimo: string;
  superficie_total_minimo: string;
  superficie_util_minimo: string;
  bedrooms: number;
  bathrooms: number;
}

export interface ResumenProyecto {
  proyecto: string;
  direccion: string;
  region: string;
  comuna: string;
  precio_minimo: string;
  superficie_total_minimo: string;
  superficie_util_minimo: string;
  bedrooms: number;
  bathrooms: number;
  modelos: ResumenProyectoModelo[];
}

export interface ResumenProyectoModelo {
  codigo_modelo: string;
  inmuebles_disponibles: number;
  precio_minimo: string;
  superficie_total_minimo: string;
  superficie_util_minimo: string;
  bedrooms: number;
  bathrooms: number;
}
