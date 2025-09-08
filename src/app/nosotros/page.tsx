'use client';

import NosotrosBanner from '@/components/nosotros/nosotros-banner';
import SomosEsepe from '@/components/nosotros/somos-esepe';
import Testimonio from '@/components/nosotros/testimonio';
import MisionVision from '@/components/nosotros/mision-vision';
import Valores from '@/components/nosotros/valores';
import Proposito from '@/components/nosotros/proposito';
import { usePaginaNosotros } from '@/hooks/use-paginas';
import LoadingSpinner from '@/components/ui/loading-spinner';

export default function NosotrosPage() {
  const { data, loading, error } = usePaginaNosotros();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !data?.result?.[0]) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">Error al cargar los datos</p>
      </div>
    );
  }

  const nosotrosData = data.result[0].acf_fields;

  return (
    <section>
      <NosotrosBanner
        titulo={nosotrosData.banner_principal.titulo}
        texto={nosotrosData.banner_principal.texto}
        imagen={nosotrosData.banner_principal.imagen}
      />
      <SomosEsepe
        titulo={nosotrosData.seccion_descrpicion_1.titulo}
        texto={nosotrosData.seccion_descrpicion_1.texto}
        imagen={nosotrosData.seccion_descrpicion_1.imagen}
      />
      <Testimonio />
      <div className="mt-28">
        <MisionVision
          texto={nosotrosData.seccion_eslogan.texto}
          imagen={nosotrosData.seccion_eslogan.imagen}
        />
      </div>
      <Valores
        titulo={nosotrosData.seccion_valores.titulo}
        valores={nosotrosData.seccion_valores.valores}
        imagen={nosotrosData.seccion_valores.imagen}
      />
      <Proposito
        proposito={nosotrosData.seccion_mision_y_vison.item_1}
        vision={nosotrosData.seccion_mision_y_vison.item_2}
      />
    </section>
  );
}
