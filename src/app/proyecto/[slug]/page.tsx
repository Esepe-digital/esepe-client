import FeatureSection from '@/components/proyecto/feature-section';
import Gallery from '@/components/proyecto/gallery';
import HeroBannerProject from '@/components/proyecto/hero';
import Location from '@/components/proyecto/location';
import Cotizador from '@/components/proyecto/cotizador';

import AvailableModels from '@/components/proyecto/available-models';
import ContactForm from '@/components/contact-form';
import { PropertiesResponse } from '@/interfaces/api/propiedadesResponse';

async function fetchProjectData(slug: string) {
  const projectBySlugResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/proyectos/${slug}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 120 },
    }
  );

  if (!projectBySlugResponse.ok) {
    throw new Error('Error al obtener el proyecto');
  }

  const ProjectResponse = await projectBySlugResponse.json();
  return ProjectResponse.result;
}

async function fetchPropertiesData(api_id: string) {
  const propertiesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/propiedades/${api_id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    }
  );

  if (!propertiesResponse.ok) {
    throw new Error('Error al obtener las propiedades');
  }

  const PropertiesResponse: PropertiesResponse =
    await propertiesResponse.json();
  return PropertiesResponse.result;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const result = await fetchProjectData(slug);
  const { thumbnail, title, acf_fields } = result;

  const arrayOfFeatures = () => {
    const { caracteristicas_del_proyecto } = acf_fields;
    const {
      descripcion_general,
      descripcion_modelos,
      descripcion_cocina,
      descripcion_lujos,
      numero_de_dormitorios,
      numero_de_banos,
      terreno_medidas,
    } = caracteristicas_del_proyecto;
    return [
      descripcion_general,
      descripcion_modelos,
      descripcion_cocina,
      descripcion_lujos,
      numero_de_dormitorios,
      numero_de_banos,
      terreno_medidas,
    ];
  };

  return {
    title: `Inmobiliaria ESEPE - ${title}`,
    description: acf_fields.descripcion_corta,
    keywords: arrayOfFeatures(),
    images: [thumbnail],
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/proyecto/${slug}`,
    },
    openGraph: {
      title: `Inmobiliaria ESEPE - ${title}`,
      description: acf_fields.descripcion_corta,
      images: [thumbnail],
    },
  };
}
function obtenerNombreProyecto(slug: string): string {
  switch (slug) {
    case 'barrio-vina-carmen':
      return 'Viña Carmen';
    case 'altos-del-valle':
      return 'Altos del Valle';
    case 'altos-del-valle-oriente':
      return 'Altos del Valle Oriente';
    case 'san-francisco':
      return 'San Francisco';
    case 'volare':
      return 'Volare';
    case 'matta-sur':
      return 'Matta Sur';
    default:
      return '';
  }
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  try {
    // Fetch en paralelo
    const [result, properties] = await Promise.all([
      fetchProjectData(slug),
      fetchProjectData(slug).then((project) =>
        fetchPropertiesData(project.api_id)
      ),
    ]);

    // Define los proyectos que tienen masterplan
    const proyectosConMasterplan = [
      'barrio-vina-carmen',
      'altos-del-valle',
      'altos-del-valle-oriente',
      'san-francisco',
    ];

    // Verifica si el proyecto actual tiene masterplan
    const tieneMasterplan = proyectosConMasterplan.includes(slug);

    const { title, acf_fields, modelos, resumen_proyecto, media, ID, comuna } =
      result;

    const {
      caracteristicas_del_proyecto,
      galeria_de_fotos,
      descripcion,
      direccion,
      caracteristacas_a_destacar,
      mapa,
      lat_lon_ubication,
      color_proyecto,
      id_formulario,
      link_de_cotizador_externo,
      direccion_de_contacto,
      telefono_de_atencion,
      horario_atencion,
      dias_de_atencion,
      whatsapp,
      texto_informativo,
    } = acf_fields;

    const heroBanner = {
      media,
      title: title,
      description: acf_fields?.descripcion_corta,
      avance_de_obra: acf_fields?.avance_de_obra,
      price: resumen_proyecto?.precio_minimo?.toString(),
      commune: comuna[0],
      projectColor: color_proyecto,
    };

    const featureSection = {
      title: title,
      generalDescription: caracteristicas_del_proyecto?.descripcion_general,
      modelsDescription: caracteristicas_del_proyecto?.descripcion_modelos,
      kitchenDescription: caracteristicas_del_proyecto?.descripcion_cocina,
      luxuryDescription:
        acf_fields?.caracteristicas_del_proyecto.descripcion_lujos,
      amenitiesDescription: caracteristicas_del_proyecto?.numero_de_dormitorios,
      floorplansDescription: caracteristicas_del_proyecto?.numero_de_banos,
      terrainDescription: caracteristicas_del_proyecto?.terreno_medidas,
      tipoPropiedad: result?.tipo_propiedad,
      materialConstruction:
        caracteristicas_del_proyecto?.materiales_de_construccion,
    };

    const galleryImages = galeria_de_fotos.map(
      (image: {
        id: string;
        url: string;
        title: string;
        mediaType?: string;
        thumbnail?: string;
      }) => ({
        id: image.id,
        src: image.url,
        alt: image.title,
        type: image.mediaType as 'image' | 'video',
        thumbnail: image.thumbnail,
      })
    );

    const privilegedLocation = {
      title: 'Ubicación privilegiada',
      description: descripcion,
      image: 'https://via.placeholder.com/600x400',
      address: direccion + ', ' + comuna[0],
      features: caracteristacas_a_destacar.map(
        (feature: {
          caracteristica: { imagen_icono: { url: string }; texto: string };
        }) => ({
          icon: feature.caracteristica.imagen_icono.url,
          text: feature.caracteristica.texto,
        })
      ),
      mapIframe: mapa,
      latLon: lat_lon_ubication,
      accentColor: color_proyecto,
    };

    const models = modelos.map(
      (modelo: {
        codigo_modelo: string;
        nombre_del_modelo: string;
        bedrooms: number;
        bathrooms: number;
        superficie_util_minimo: number;
        superficie_total_minimo: number;
        precio_minimo: number;
        galeria_de_fotos_del_modelo: { sizes: { large: string } }[];
        tour_virtual: string;
        pdf_plantas_arquitectonicas: { url_del_archivo: string };
        bruchure: { url_del_archivo: string };
      }) => ({
        id: modelo.codigo_modelo,
        nombre: modelo.nombre_del_modelo,
        recamaras: modelo.bedrooms,
        banos: modelo.bathrooms,
        construccion: modelo.superficie_util_minimo,
        terreno: modelo.superficie_total_minimo,
        precio: modelo.precio_minimo,
        imagenes: modelo.galeria_de_fotos_del_modelo.map(
          (image) => image.sizes.large
        ),
        virtualTour: modelo.tour_virtual,
        arquitectonicPlans: modelo.pdf_plantas_arquitectonicas.url_del_archivo,
        brochure: modelo.bruchure.url_del_archivo,
        link_de_cotizador_externo: acf_fields.link_de_cotizador_externo,
        properties: properties?.INMUEBLES?.filter(
          (property) =>
            property.MODELO.toLowerCase() === modelo.codigo_modelo.toLowerCase()
        ).map((property) => ({
          id: property.ID_INMUEBLE,
          nombre: property.NRO_INMUEBLE + ' - ' + property.TIPO,
          modelo: property.MODELO,
          tipo: property.TIPO,
          etapa: property.ETAPA,
          precio: property.PRECIO_LISTA,
          region: properties.REGION,
          comuna: properties.COMUNA,
        })),
      })
    );

    const datosDeAtencion = {
      direccion_de_contacto,
      telefono_de_atencion,
      horario_atencion,
      dias_de_atencion,
      whatsapp,
      texto_informativo,
      calendly_url: acf_fields.calendly_url || '',
    };

    return (
      <main>
        <HeroBannerProject data={heroBanner} />
        <FeatureSection data={featureSection} />
        <Gallery images={galleryImages} />
        <AvailableModels data={models} />
        <Location data={privilegedLocation} />
        {!link_de_cotizador_externo ? (
          <Cotizador
            data={models}
            masterPlan={tieneMasterplan}
            idProyecto={ID}
            nombreProyecto={obtenerNombreProyecto(slug)}
          />
        ) : null}
        <ContactForm formId={id_formulario} data={datosDeAtencion} />
      </main>
    );
  } catch (error) {
    console.error('Error al cargar el proyecto:', error);
    return (
      <main>
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-lg text-gray-600">
            Error al cargar el proyecto. Por favor, intente nuevamente más
            tarde.
          </p>
        </div>
      </main>
    );
  }
}
