import { StaticImageData } from 'next/image';
import { QuotationResponse } from './api/quotationRsponse';
import { ModelCardInterface } from './proyectos/model-card';

export interface CotizadorProps {
  data: ModelCardInterface[];
  masterPlan: boolean;
  idProyecto: string;
  nombreProyecto: string;
}

export interface FormDataCotizador {
  modelo?: string;
  pie?: string;
  plazo?: string;
  uf?: string;
  etapa?: string;
  propiedad?: string;
  apellido?: string;
  nombre?: string;
  rut?: string;
  email?: string;
  celular?: string;
  aceptaTerminos?: boolean;
  cuotaMensual?: string;
  cuotaInicial?: string;
  idInmueble?: string;
  imagen_del_modelo?: string | StaticImageData;
  proyecto?: string;
  IdComuna?: number;
  IdRegion?: number;
}

export interface StepProps {
  selectedModel?: ModelCardInterface;
  formData: FormDataCotizador;
  handleChange: (
    field: keyof FormDataCotizador,
    value: FormDataCotizador[keyof FormDataCotizador]
  ) => void;
  setIsStep3FormValid?: (isValid: boolean) => void;
  isStep3FormValid?: boolean;
}

export interface PropertyCardProps {
  formData: FormDataCotizador;
  isPromotion?: boolean;
}

export interface Propiedad {
  id: string;
  nombre: string;
  etapa: string;
  precio: string;
}

export interface QuoteResumenProps {
  selectedModel?: ModelCardInterface;
  formData: FormDataCotizador;
  quotationsResponse: QuotationResponse | null;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  data: ModelCardInterface[];
}

export interface Step1Props extends StepProps {
  data: ModelCardInterface[];
}

export interface Step2Props extends StepProps {
  data: ModelCardInterface[];
  masterPlan?: boolean;
  isModelLoading?: boolean;
  setIsModelLoading?: (loading: boolean) => void;
}

export interface PropertyCardProps {
  formData: FormDataCotizador;
}

export interface StepperProps {
  currentStep: number;
  isReserva?: boolean;
}

export interface LoteConCoord {
  ID_INMUEBLE: string;
  NRO_INMUEBLE: string;
  MODELO: string;
  PRECIO_LISTA: string;
  ORIENTACION: string;
  SUPERFICIE_TOTAL: string;
  top: number;
  left: number;
  etapa: string;
}
export interface InmuebleBackend {
  NRO_INMUEBLE: string;
  modelo: string;
  precio: string | number;
  orientacion?: string;
  superficie_total?: string;
  nombre: string;
  etapa?: string;
}
