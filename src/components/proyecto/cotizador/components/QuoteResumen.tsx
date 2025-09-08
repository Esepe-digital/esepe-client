import { AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { QuoteResumenProps } from '@/interfaces/cotizador';
import { formatPrice } from '@/lib/utils';
import { PropertyCard } from './PropertyCard';

export const QuoteResumen = ({
  formData,
  quotationsResponse,
  data,
}: QuoteResumenProps) => {
  if (!quotationsResponse) return null;

  const { cotizacion } = quotationsResponse.mensaje;
  const bien = cotizacion.bienes[0];
  const fechaVencimiento = new Date(cotizacion.fechaCotizacion);
  fechaVencimiento.setDate(fechaVencimiento.getDate() + cotizacion.diasValidez);

  // Validar que tenemos todos los datos necesarios
  const hasCompleteData =
    formData.nombre &&
    formData.apellido &&
    formData.modelo &&
    formData.propiedad &&
    formData.proyecto;

  // Encuentra el modelo correspondiente
  const modelo = data.find((m) => m.nombre === formData.modelo);
  // Elimina la variable propiedad, ya que no se usa
  // Usa solo la imagen del modelo, ya que la propiedad no tiene imágenes
  const imagenPropiedad = modelo?.imagenes?.[0] || '/placeholder.png';
  const isValidImage =
    typeof imagenPropiedad === 'string' &&
    imagenPropiedad.length > 0 &&
    (imagenPropiedad.startsWith('/') || imagenPropiedad.startsWith('http'));

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Cotización</h2>
        <p className="text-gray-600">
          Comenzaste el proceso de cotización de tu nueva propiedad
        </p>
      </div>

      <Alert className="bg-amber-50 border-amber-200">
        <AlertTriangle className="w-4 h-4" style={{ color: '#FCC203' }} />
        <AlertDescription className="text-[#654E01]">
          Esta cotización tiene una validez de 7 días (vence el{' '}
          {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()})
          desde el momento de la confirmación.
        </AlertDescription>
      </Alert>

      {hasCompleteData ? (
        <div className="mt-auto mb-12">
          <p className="text-center text-gray-700">
            {formData.nombre} {formData.apellido}, este es detalle de
            cotización, también te hemos enviado una copia por email.
          </p>
        </div>
      ) : (
        <div className="mt-auto mb-12">
          <p className="text-center text-gray-700">
            Este es el detalle de tu cotización, también te hemos enviado una
            copia por email.
          </p>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:gap-16 lg:gap-24">
        <div className="w-full md:w-[365px] space-y-6">
          {/* Resumen completo */}
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-gray-200">
              <span className="text-[#5C5C5C]">Código:</span>
              <span className="font-bold text-[#5C5C5C]">
                {cotizacion.codigo}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-200">
              <span className="text-[#5C5C5C]">Tipo de Bien:</span>
              <span className="font-bold text-[#5C5C5C]">{bien.tipoBien}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-200">
              <span className="text-[#5C5C5C]">Número de Bien:</span>
              <span className="font-bold text-[#5C5C5C]">
                {bien.numeroDeBien}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-200">
              <span className="text-[#5C5C5C]">Superficie Total:</span>
              <span className="font-bold text-[#5C5C5C]">
                {bien.superficieTotal} m²
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-200">
              <span className="text-[#5C5C5C]">Valor total:</span>
              <span className="font-bold text-[#FF0900]">
                UF {formatPrice(cotizacion.totalCotizacion)}
              </span>
            </div>
          </div>

          {/* Información adicional del formulario */}
          {formData.proyecto && (
            <div className="space-y-4">
              <h3 className="font-semibold text-[#5C5C5C]">
                Información del Proyecto
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-1">
                  <span className="text-sm text-[#5C5C5C]">Proyecto:</span>
                  <span className="text-sm font-medium text-[#5C5C5C]">
                    {formData.proyecto}
                  </span>
                </div>
                {formData.modelo && (
                  <div className="flex items-center justify-between py-1">
                    <span className="text-sm text-[#5C5C5C]">Modelo:</span>
                    <span className="text-sm font-medium text-[#5C5C5C]">
                      {formData.modelo}
                    </span>
                  </div>
                )}
                {formData.propiedad && (
                  <div className="flex items-center justify-between py-1">
                    <span className="text-sm text-[#5C5C5C]">Propiedad:</span>
                    <span className="text-sm font-medium text-[#5C5C5C]">
                      {formData.propiedad}
                    </span>
                  </div>
                )}
                {formData.etapa && (
                  <div className="flex items-center justify-between py-1">
                    <span className="text-sm text-[#5C5C5C]">Etapa:</span>
                    <span className="text-sm font-medium text-[#5C5C5C]">
                      {formData.etapa}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="w-full mt-8 md:flex-1 md:mt-0">
          <PropertyCard
            formData={{
              ...formData,
              imagen_del_modelo: isValidImage
                ? imagenPropiedad
                : '/placeholder.png',
            }}
          />
        </div>
      </div>
    </div>
  );
};
