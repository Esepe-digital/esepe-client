import Image from 'next/image';
import { PropertyCardProps } from '@/interfaces/cotizador';
import { formatPrice } from '@/lib/utils';

export const PropertyCard = ({
  formData,
  isPromotion = false,
}: PropertyCardProps) => {
  return (
    <div
      className="rounded-[16px] border bg-[#f8fafc] overflow-hidden"
      style={{
        width: '440px',
        height: '262px',
        padding: '16px',
        borderColor: '#ADCAF9',
        borderWidth: '1px',
      }}
    >
      <div className="flex flex-row h-full gap-8">
        <div className="flex-shrink-0">
          <div className="relative w-[170px] h-[170px]">
            <Image
              src={formData.imagen_del_modelo || '/placeholder'}
              alt="Imagen de la propiedad"
              fill
              className="object-cover rounded-[8px]"
            />
          </div>
        </div>

        <div className="flex-1 space-y-3 min-w-[250px]">
          {isPromotion && (
            <div>
              <p className="text-sm text-gray-500">Proyecto</p>
              <p className="font-medium text-gray-800">{formData.proyecto}</p>
            </div>
          )}

          <div>
            <p className="text-sm text-gray-500">Modelo</p>
            <p className="font-medium text-gray-800">{formData.modelo}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Propiedad</p>
            <p className="font-medium text-gray-800">
              {formData.propiedad || 'No seleccionada'}
            </p>
          </div>

          {!isPromotion && (
            <div>
              <p className="text-sm text-gray-500">Etapa</p>
              <p className="font-medium text-gray-800">{formData.etapa}</p>
            </div>
          )}

          <div className="pb-6 rounded-md">
            <p className="text-sm text-gray-500">Precio</p>
            <p className="font-medium text-gray-800">
              UF {formatPrice(formData?.uf)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
