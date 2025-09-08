'use client';

import { Suspense } from 'react';
import { usePaginas } from '@/hooks/use-paginas';
import ComoComprarBanner from '@/components/como-comprar/como-comprar-banner';
import PasoProcesoComponent from '@/components/como-comprar/paso-proceso';
import LoadingSpinner from '@/components/ui/loading-spinner';

export default function ComoComprar() {
  const { data, loading, error } = usePaginas('proceso-de-compra');

  if (loading) {
    return (
      <div className="py-16">
        <LoadingSpinner text="Cargando proceso de compra..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 text-center text-red-600">
        Error al cargar el contenido: {error}
      </div>
    );
  }

  if (!data || !data.result || data.result.length === 0) {
    return (
      <div className="py-16 text-center text-gray-600">
        No se encontró información del proceso de compra.
      </div>
    );
  }

  const pagina = data.result[0];
  const { banner_principal, pasos_proceso } = pagina.acf_fields;

  return (
    <Suspense
      fallback={
        <div className="py-16 text-center text-gray-600">Cargando...</div>
      }
    >
      <ComoComprarBanner
        titulo={banner_principal.titulo}
        texto={banner_principal.texto}
        imagen={banner_principal.imagen}
      />

      {pasos_proceso.map((paso, index) => (
        <PasoProcesoComponent
          key={`${paso.numero_indicador}-${index}`}
          paso={paso}
          index={index}
        />
      ))}
    </Suspense>
  );
}
