import { Hero } from '@/components/hero';
import { ProjectsGrid } from '@/components/projects-grid';
import ProcesoDeCompra from '@/components/proceso-de-compra';
import VideoPlayer from '@/components/video-player';

import { ProjectsResponse } from '@/interfaces/api/proyectosResponse';
import { ProjectCard } from '@/interfaces/home/projectCardHome';
import Script from 'next/script';
import esepeLogo from '@/assets/logos/esepe-logo.png';
import { Metadata } from 'next';
import ResponsiveIframe from '@/components/responsive-iframe';

export const metadata: Metadata = {
  title: 'Encuentra tu casa o departamento aquí | Inmobiliaria ESEPE',
  description:
    'Explora proyectos en venta en Chile con ESEPE. Encuentra tu hogar ideal y comienza el proceso hoy. ¡Contáctanos y da el primer paso!',
  openGraph: {
    title: 'Encuentra tu casa o departamento aquí | Inmobiliaria ESEPE',
    description:
      'Explora proyectos en venta en Chile con ESEPE. Encuentra tu hogar ideal y comienza el proceso hoy. ¡Contáctanos y da el primer paso!',
    images: [esepeLogo.src],
  },
};

export default async function Home() {
  let r: ProjectsResponse = { result: [], status: 200, message: '' };
  let rInicio = {
    result: {
      ID: 0,
      title: '',
      slug: '',
      banner_principal: {
        titulo_del_banner: '',
        texto_de_bajada: '',
        boton: { title: '', url: '', target: '' },
        media: { type: '', url: '' },
        imagen_mobile: '',
      },
      thumbnail: false,
      content: '',
      permalink: '',
      acf_fields: {
        banner_principal: {
          tipo_de_banner: '',
          imagen_banner: {
            ID: 0,
            id: 0,
            title: '',
            filename: '',
            filesize: 0,
            url: '',
            link: '',
            alt: '',
            author: '',
            description: '',
            caption: '',
            name: '',
            status: '',
            uploaded_to: 0,
            date: new Date(),
            modified: new Date(),
            menu_order: 0,
            mime_type: '',
            type: '',
            subtype: '',
            icon: '',
            width: 0,
            height: 0,
            sizes: {
              thumbnail: '',
              'thumbnail-width': 0,
              'thumbnail-height': 0,
              medium: '',
              'medium-width': 0,
              'medium-height': 0,
              medium_large: '',
              'medium_large-width': 0,
              'medium_large-height': 0,
              large: '',
              'large-width': 0,
              'large-height': 0,
              '1536x1536': '',
              '1536x1536-width': 0,
              '1536x1536-height': 0,
              '2048x2048': '',
              '2048x2048-width': 0,
              '2048x2048-height': 0,
            },
          },
          imagen_mobile: '',
          video_banner: '',
          titulo_del_banner: '',
          texto_de_bajada: '',
          boton: { title: '', url: '', target: '' },
        },
      },
    },
    status: 200,
    message: '',
  };

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

    const ProjectsResponse: ProjectsResponse = await response.json();
    r = ProjectsResponse;
  } catch (error) {
    console.error('Error al obtener proyectos:', error);
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/inicio`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 120 },
      }
    );

    rInicio = await response.json();
  } catch (error) {
    console.error('Error al obtener datos de inicio:', error);
  }

  const projectsParsed: ProjectCard[] = r?.result
    ?.filter((e) => e.estado[0] == 'En Venta')
    ?.map(
      ({ resumen_proyecto, thumbnail, title, slug, acf_fields, comuna }) => {
        return {
          image: thumbnail,
          location: acf_fields?.direccion,
          commune: comuna[0],
          name: title,
          price: resumen_proyecto?.precio_minimo,
          bedrooms: resumen_proyecto?.bedrooms,
          bathrooms: resumen_proyecto?.bathrooms,
          area: resumen_proyecto?.superficie_total_minimo,
          construccion: resumen_proyecto?.superficie_util_minimo,
          accentColor: acf_fields?.color_proyecto,
          href: `${process.env.NEXT_PUBLIC_BASE_URL}/proyecto/${slug}`,
        };
      }
    );

  return (
    <main>
      <Script
        id="real-estate-agent"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Inmobiliaria ESEPE",
            "image": "https://esepe.cl/wp-content/uploads/LOGO-ESEPE_LOGOTIPO-ESEPE-AZUL-F_BLANCO-1.png",
            "@id": "",
            "url": "https://esepe.cl/",
            "telephone": "+56 2 2 371 2969",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Alcántara 656",
              "addressLocality": "Santiago de Chile",
              "postalCode": "7550000",
              "addressCountry": "CL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -33.42095778676576,
              "longitude": -70.5875309736366
            },
            "sameAs": [
              "https://www.facebook.com/inmobiliariaesepe",
              "https://www.instagram.com/inmobiliaria_esepe/"
            ]
          }`,
        }}
      />

      <Script
        id="corporation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "Inmobiliaria ESEPE",
            "alternateName": "ESEPE",
            "url": "https://esepe.cl/",
            "logo": "https://esepe.cl/wp-content/uploads/LOGO-ESEPE_LOGOTIPO-ESEPE-AZUL-F_BLANCO-1.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+56 2 2 371 2969",
              "contactType": "customer service",
              "areaServed": "CL",
              "availableLanguage": "es"
            },
            "sameAs": [
              "https://www.facebook.com/inmobiliariaesepe",
              "https://www.instagram.com/inmobiliaria_esepe/"
            ]
          }`,
        }}
      />

      <Hero data={rInicio} />
      <section>
        <ProjectsGrid projects={projectsParsed} />
        <ProcesoDeCompra />

        <div>
          <div className="mb-10 text-center">
            <h2 className="flex items-center justify-center mb-6 text-3xl font-bold md:text-4xl">
              <span className="hidden w-32 h-px mr-6 text-center bg-gray-300 md:block heading-2"></span>
              Explora nuestros proyectos
              <span className="hidden w-32 h-px ml-6 bg-gray-300 md:block"></span>
            </h2>
          </div>
          <div className="p-4">
            <ResponsiveIframe
              url={`https://topclass-entertainment.com/iframe-3d-esepe/index.html `}
              isZoomable
            />
          </div>
        </div>

        <VideoPlayer />
      </section>
    </main>
  );
}
