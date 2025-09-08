export interface QuotationResponse {
  code: number;
  mensaje: Mensaje;
}

export interface Mensaje {
  cotizacion: Cotizacion;
  message: string;
}

export interface Cotizacion {
  id: number;
  codigo: string;
  fechaCotizacion: Date;
  totalCotizacion: number;
  valorUf: number;
  diasValidez: number;
  glosaCreditoHipotecarioUno: string;
  glosaCreditoHipotecarioUnoCuotas: string;
  cliente: Cliente;
  origen: string;
  bienes: Biene[];
  cotizacionFormaPago: CotizacionFormaPago[];
  idProyecto: number;
  idUsuario: number;
}

export interface Biene {
  id: number;
  numeroDeBien: string;
  numeroDeDormitorios: number;
  numeroDeBanos: number;
  superficieLogia: number;
  superficieUtil: number;
  superficieTerraza: number;
  superficieDespensa: number;
  superficieTotal: number;
  valorBase: number;
  valorLista: number;
  valorVenta: number;
  piso: number;
  urlImagenDelBienAComercializarUno: string;
  proyecto: number;
  tipoBien: string;
  tipo: string;
  orientacion: string;
}

export interface Cliente {
  id: number;
  rut: string;
  razonSocial: string;
  tipoRazonSocial: string;
  email: string;
  telefonoDos: string;
  rating: string;
  fechaIngreso: Date;
  profesion: string;
  cantidadNegocios: number;
  webActivo: boolean;
}

export interface CotizacionFormaPago {
  descripcionFormaPago: string;
  pagoEnMonedaLocal: number;
  pagoEnPorcentaje: number;
  pagoEnValorDeAjuste: number;
}
