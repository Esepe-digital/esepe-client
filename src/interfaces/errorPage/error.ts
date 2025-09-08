export interface CotizacionErrorProps {
  codigo?: string;
  mensaje?: string;
  onRetry?: () => void;
  onBack?: () => void;
}
