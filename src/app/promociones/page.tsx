import PromoBanner from '@/components/promociones/promo-banner';
import PromoGrid from '@/components/promociones/property-promotions';
import {
  PromocionesResponse,
  Result,
} from '@/interfaces/api/promocionesResponse';
import esepeLogo from '@/assets/logos/esepe-logo.png';
import { Metadata } from 'next';
import { PromoBannerProps } from '@/components/promociones/promo-banner';
import DefaultImage from '@/assets/images/default-image.jpg';
import { StaticImageData } from 'next/image';
interface TransformedPromotion {
  id: string;
  name: string;
  model: string;
  project: string;
  discount: number;
  bedrooms: number;
  bathrooms: number;
  totalArea: number;
  constructionArea: number;
  originalPrice: number;
  discountedPrice: number;
  projectTag: string;
  image: string | StaticImageData;
  id_inmueble: string;
  id_proyecto: string;
}

export const metadata: Metadata = {
  title: 'Conoce las promociones que tenemos en Inmobiliaria ESEPE',
  description:
    'Aprovecha descuentos y gift cards en casas nuevas. Conoce las promociones vigentes y reserva tu nuevo hogar hoy mismo. ¡Cotiza ahora!',
  openGraph: {
    title: 'Conoce las promociones que tenemos en Inmobiliaria ESEPE',
    description:
      'Aprovecha descuentos y gift cards en casas nuevas. Conoce las promociones vigentes y reserva tu nuevo hogar hoy mismo. ¡Cotiza ahora!',
    images: [esepeLogo.src],
  },
};
interface Imagen {
  url?: string;
  alt?: string;
  link?: string;
}

interface CarruselImagen {
  imagen_desktop: string;
  imagen_mobile?: string | false;
  link?: string;
}

interface WordPressBanner {
  tipo_de_banner?: 'imagen' | 'video' | 'carrusel';
  imagen?: Imagen;
  imagen_mobile?: string;
  video_banner?: string;
  carrusel_de_imagenes?: CarruselImagen[];
}

let bannerData: PromoBannerProps | null = null;

function parseBanner(data: WordPressBanner): PromoBannerProps | null {
  const tipo = data?.tipo_de_banner;

  if (tipo === 'carrusel') {
    return {
      type: 'carrusel',
      carruselItems: data.carrusel_de_imagenes || [],
    };
  }

  if (tipo === 'video') {
    return {
      type: 'video',
      videoUrl: data.video_banner,
    };
  }

  if (tipo === 'imagen') {
    return {
      type: 'image',
      imageUrl: data.imagen?.url || '',
      imageMobileUrl: data.imagen_mobile || '',
      altText: data.imagen?.alt || '',
      linkUrl: data.imagen?.link || '#',
    };
  }

  return null;
}

export default async function Home() {
  let promotions: TransformedPromotion[] = [];
  let errorMessage = '';

  // FETCH de promociones
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/promociones`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 120 },
      }
    );

    const data = await response.json();

    if (!response.ok || !Array.isArray(data.result)) {
      errorMessage =
        data?.message || 'Ocurrió un error al obtener las promociones.';
    } else {
      const promociones: PromocionesResponse['result'] = data.result;

      promotions = promociones.map((promotion: Result) => ({
        id: promotion.ID_PROMOCION_DETALLE,
        name: promotion.TIPO + ' ' + promotion.NRO_INMUEBLE,
        model: promotion.MODELO,
        project: promotion.PROYECTO,
        discount: parseInt(promotion.DESCUENTO),
        bedrooms: promotion.bedrooms,
        bathrooms: promotion.bathrooms,
        totalArea: parseFloat(promotion.SUPERFICIE_TOTAL),
        constructionArea: parseFloat(promotion.SUPERFICIE_UTIL),
        originalPrice: parseFloat(promotion.PRECIO_LISTA),
        discountedPrice: parseFloat(promotion.PRECIO_DESCUENTO),
        projectTag: promotion.PROYECTO,
        image: promotion.imagen_del_modelo?.url || DefaultImage,
        id_inmueble: promotion.ID_INMUEBLE,
        id_proyecto: promotion.ID_PROYECTO,
      }));
    }
  } catch (error) {
    console.error('Error inesperado:', error);
    errorMessage = 'No se pudo cargar la información de promociones.';
  }

  // FETCH del banner de WordPress
  try {
    const bannerRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/paginas?slug=promociones`,
      {
        next: { revalidate: 120 },
      }
    );
    const bannerJson = await bannerRes.json();
    const bannerFields = bannerJson?.result?.[0]?.acf_fields?.banner_principal;

    bannerData = parseBanner(bannerFields);
  } catch (error) {
    console.error('Error al obtener el banner:', error);
  }

  return (
    <main>
      <section className="-mt-12">
        {bannerData && <PromoBanner {...bannerData} autoplayInterval={5000} />}

        {errorMessage ? (
          <div className="container mx-auto py-20 text-center text-red-600 font-semibold">
            {errorMessage}
          </div>
        ) : (
          <PromoGrid data={promotions} />
        )}
      </section>
    </main>
  );
}
