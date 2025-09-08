export interface PropertiesResponse {
  status: number;
  message: string;
  result: Result;
}

export interface Result {
  ID_PROYECTO: string;
  VALOR_RESERVA: string;
  NRO_INMUEBLES: string;
  FECHA_UF: Date;
  VALOR_UF: string;
  PROYECTO: string;
  TIPO: Tipo;
  DIRECCION: string;
  REGION: string;
  COMUNA: string;
  HORARIO_SEMANA: string;
  FONO: string;
  MAIL: string;
  INMUEBLES: Inmueble[];
}

export interface Inmueble {
  ID_INMUEBLE: string;
  TIPO: Tipo;
  ETAPA: string;
  MODELO: Modelo;
  NRO_INMUEBLE: string;
  ORIENTACION: Orientacion;
  PISO: string;
  PRECIO_LISTA: string;
  EN_PROMOCION: EnPromocion;
  SUPERFICIE_TOTAL: string;
  SUPERFICIE_UTIL: string;
  SUPERFICIE_TERRAZA: string;
  PIE_CLP: string;
  SIMULACION_20: Simulacion[];
  SIMULACION_25: Simulacion[];
  SIMULACION_30: Simulacion[];
  PROGRAMA: Programa;
  PRECIO_DESCUENTO: string;
  DESCUENTO: string;
}

export enum EnPromocion {
  No = 'NO',
}

export enum Modelo {
  Barreno = 'Barreno',
  Legón = 'Legón',
  Mayal = 'Mayal',
}

export enum Orientacion {
  Norte = 'NORTE',
}

export enum Programa {
  The3D1B = '3D-1B',
  The3D2B = '3D-2B',
}

export interface Simulacion {
  PRECIO_INMUEBLE: string;
  PERIODO_CREDITO: string;
  MONTO_PIE: string;
  VALOR_DIVIDENDO: string;
  VALOR_SEGUROS: string;
  RENTA_MINIMA_ACREDITABLE: string;
  MONEDA_OPERACION: MonedaOperacion;
  PORCENTAJE_CREDITO: string;
  PORCENTAJE_PIE: string;
  TASA_INTERES: string;
}

export enum MonedaOperacion {
  Cl = 'CL',
  Uf = 'UF',
}

export enum Tipo {
  Casa = 'CASA',
}
