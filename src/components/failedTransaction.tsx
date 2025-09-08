'use client';

import Link from 'next/link';
import { AlertCircle, ArrowLeft } from 'lucide-react';

interface Props {
  mensaje: string;
}

export default function TransaccionFallida({ mensaje }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero */}
        <div className="bg-[#123752] text-white py-8 px-4">
          <div className="container mx-auto text-center">
            <h1 className="mb-4 text-3xl font-bold">Transacción fallida</h1>
            <p className="max-w-2xl mx-auto mb-6">
              Te recomendamos volver al inicio e intentar nuevamente. Si el
              problema persiste,{' '}
              <a href="tel:+56223712969" className="underline">
                contáctanos por los canales oficiales.
              </a>
            </p>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="container px-4 py-12 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex justify-center">
              <AlertCircle className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-xl font-semibold text-red-600">
              Error en la transacción
            </h2>
            <p className="text-gray-700">{mensaje}</p>

            <div className="text-center pt-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 text-[#4A6793] border-2 border-[#4A6793] rounded-full hover:bg-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                VOLVER AL INICIO
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
