// Modelo data type
export interface ModelCardInterface {
  id: string;
  nombre: string;
  recamaras: number;
  banos: number;
  construccion: string;
  terreno: string;
  precio?: string;
  imagenes: string[];
  virtualTour: string;
  arquitectonicPlans: string;
  brochure: string;
  properties?: PropertyCardInterface[];
  link_de_cotizador_externo: string;
  proyecto: string;
}

export interface PropertyCardInterface {
  id: string;
  nombre: string;
  modelo: string;
  tipo: string;
  etapa: string;
  precio?: string;
  region: string;
  comuna: string;
}
