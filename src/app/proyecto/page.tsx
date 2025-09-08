import PropertyMapListing from '@/components/property-map-listing';
import { ProjectsResponse } from '@/interfaces/api/proyectosResponse';
import esepeLogo from '@/assets/logos/esepe-logo.png';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyectos Inmobiliarios Disponibles | Inmobiliaria ESEPE',
  description:
    'Descubre casas y departamentos en venta en Chile. Filtra por comuna y encuentra tu nuevo hogar ideal. ¡Explora nuestros proyectos ahora!',
  openGraph: {
    title: 'Proyectos Inmobiliarios Disponibles | Inmobiliaria ESEPE',
    description:
      'Descubre casas y departamentos en venta en Chile. Filtra por comuna y encuentra tu nuevo hogar ideal. ¡Explora nuestros proyectos ahora!',
    images: [esepeLogo.src],
  },
};

export default async function Home() {
  let r: ProjectsResponse = { result: [], status: 200, message: '' };
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/proyectos`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 120 },
      }
    );
    r = await response?.json();
  } catch (error) {
    console.log(error);
  }

  const projectsParsed = r?.result?.map(
    ({
      resumen_proyecto,
      ID,
      thumbnail,
      title,
      slug,
      acf_fields,
      estado,
      tipo_propiedad,
      comuna,
    }) => {
      return {
        id: ID,
        slug: slug,
        image: thumbnail,
        location: acf_fields?.direccion,
        name: title,
        status: estado[0],
        bedrooms: resumen_proyecto?.bedrooms,
        bathrooms: resumen_proyecto?.bathrooms,
        area: resumen_proyecto?.superficie_total_minimo,
        construccion: resumen_proyecto?.superficie_util_minimo,
        href: `${process.env.NEXT_PUBLIC_BASE_URL}/proyecto/${slug}`,
        price: resumen_proyecto?.precio_minimo,
        beds: resumen_proyecto?.bedrooms?.toString(),
        baths: resumen_proyecto?.bathrooms?.toString(),
        accentColor: acf_fields?.color_proyecto,
        longitude: acf_fields?.lat_lon_ubication.longitud,
        latitude: acf_fields?.lat_lon_ubication.latitud,
        region: resumen_proyecto?.region,
        commune: comuna[0],
        type: tipo_propiedad[0],
      };
    }
  );

  return (
    <main>
      <section className="w-[90%] mx-auto">
        <PropertyMapListing data={projectsParsed} />
      </section>
    </main>
  );
}
