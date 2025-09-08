export interface PaginaResponse {
  status: number;
  message: string;
  result: Pagina[];
}

export interface Pagina {
  ID: number;
  title: string;
  slug: string;
  thumbnail: boolean;
  content: string;
  permalink: string;
  acf_fields: {
    banner_principal: {
      titulo: string;
      texto: string;
      imagen: string;
      media: {
        type: string;
        url: string;
      };
    };
    pasos_proceso: PasoProceso[];
  };
}

export interface PaginaNosotrosResponse {
  status: number;
  message: string;
  result: PaginaNosotros[];
}

export interface PaginaNosotros {
  ID: number;
  title: string;
  slug: string;
  thumbnail: boolean;
  content: string;
  permalink: string;
  acf_fields: {
    banner_principal: {
      titulo: string;
      texto: string;
      imagen: string;
      media: {
        type: string;
        url: string;
      };
    };
    seccion_descrpicion_1: {
      titulo: string;
      texto: string;
      imagen: string;
    };
    seccion_descrpicion_2: {
      titulo: string;
      texto: string;
      imagen: string;
    };
    seccion_eslogan: {
      imagen: string;
      texto: string;
    };
    seccion_valores: {
      imagen: string;
      titulo: string;
      valores: Valor[];
    };
    seccion_mision_y_vison: {
      item_1: {
        titulo: string;
        descripcion: string;
      };
      item_2: {
        titulo: string;
        descripcion: string;
      };
    };
  };
}

export interface Valor {
  titulo: string;
  descripcion: string;
}

export interface PasoProceso {
  acf_fc_layout: 'seccion_paso_simple' | 'seccion_paso_doble';
  numero_indicador: string;
  posicion_columna_imagen: 'izquierda' | 'derecha';
  imagen: string | number;
  titulo: string;
  descripcion: string;
  paso?: PasoProceso[];
}
