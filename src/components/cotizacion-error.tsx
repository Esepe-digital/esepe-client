'use client';

import { Button } from '@/components/ui/button';
import { CotizacionErrorProps } from '@/interfaces/errorPage/error';
import { AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CotizacionError({
  mensaje = 'No pudimos procesar tu solicitud de cotización en este momento.',
}: CotizacionErrorProps) {
  const router = useRouter();

  const onBack = () => {
    router.push('/');
  };

  return (
    <div className="max-w-4xl px-4 py-8 mx-auto">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-2xl font-semibold">Lo sentimos!</h1>
        <p className="text-gray-600">
          Hubo un problema al procesar tu solicitud
        </p>
      </div>

      <div className="flex items-center gap-3 p-4 mb-8 border border-red-200 rounded-lg bg-red-50">
        <AlertCircle className="flex-shrink-0 w-5 h-5 text-red-500" />
        <p className="text-red-700">
          No pudimos completar el proceso de la solicitud. Por favor, intenta
          nuevamente o contacta a nuestro equipo de soporte.
        </p>
      </div>

      <div className="p-8 mb-8 bg-white border rounded-lg shadow-sm">
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="p-6 mb-6 rounded-full bg-red-50">
            <AlertCircle className="w-16 h-16 text-red-500" />
          </div>

          <h2 className="mb-3 text-xl font-medium">
            No pudimos procesar tu solicitud
          </h2>
          <p className="max-w-md mb-2 text-gray-600">{mensaje}</p>

          <div className="flex flex-col gap-4 mt-2 sm:flex-row">
            <Button
              variant="outline"
              className="flex items-center gap-2 px-6 py-2 text-blue-600 border-blue-600 rounded-full hover:bg-blue-50"
              onClick={onBack}
            >
              Volver a la página principal
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white border rounded-lg shadow-sm">
        <h3 className="mb-4 font-medium">¿Necesitas ayuda?</h3>
        <div className="space-y-3 text-sm">
          <p className="flex items-start gap-2">
            <span className="font-medium min-w-[120px]">Teléfono:</span>
            <a href="tel:+56223712969" className="text-gray-600">
              +56 2 2 371 2969
            </a>
          </p>
          <p className="flex items-start gap-2">
            <span className="font-medium min-w-[120px]">Email:</span>
            <a href="mailto:esepe@esepe.cl" className="text-gray-600">
              esepe@esepe.cl
            </a>
          </p>
          <p className="flex items-start gap-2">
            <span className="font-medium min-w-[120px]">Dirección:</span>
            <span className="text-gray-600">
              Alcántara 656, Las Condes, Santiago
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
