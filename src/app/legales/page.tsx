import esepeLogo from '@/assets/logos/esepe-logo.png';
import { Metadata } from 'next';
import Image from 'next/image';

interface PageData {
  ID: number;
  title: string;
  slug: string;
  thumbnail: string;
  content: string;
  permalink: string;
  acf_fields: unknown[];
}

interface ApiResponse {
  status: number;
  message: string;
  result: PageData[];
}

async function getLegalesData(): Promise<PageData | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/paginas?name=legales`,
      {
        cache: 'no-store', // Asegura datos frescos
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data: ApiResponse = await response.json();

    if (data.status === 200 && data.result && data.result.length > 0) {
      return data.result[0];
    }

    return null;
  } catch (error) {
    console.error('Error fetching legales data:', error);
    return null;
  }
}

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description:
    'Todas la promociones, acciones y actividades de Inmobiliaria ESEPE cuentan con unos términos y condiciones. Haz clic aquí y conócelos de primera mano.',
  openGraph: {
    title: 'Términos y condiciones de nuestras actividades',
    description:
      'Todas la promociones, acciones y actividades de Inmobiliaria ESEPE cuentan con unos términos y condiciones. Haz clic aquí y conócelos de primera mano.',
    images: [esepeLogo.src],
  },
};

export default async function LegalesPage() {
  const pageData = await getLegalesData();

  if (!pageData) {
    return (
      <main>
        <section className="max-w-6xl mx-auto bg-white px-4 py-8">
          <h1 className="text-2xl font-bold text-center text-[#123752] mb-8">
            Error al cargar el contenido
          </h1>
          <p className="text-center text-gray-600">
            No se pudo cargar el contenido de la página. Intenta nuevamente más
            tarde.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="max-w-6xl mx-auto bg-white">
        {/* Header Banner */}
        {pageData.thumbnail && (
          <div className="relative w-full h-[200px] md:h-[250px]">
            <Image
              src={pageData.thumbnail}
              alt={pageData.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content Section */}
        <div className="px-4 py-8 md:px-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold uppercase text-[#123752] mb-4">
              {pageData.title}
            </h1>
          </div>

          {/* Contenido dinámico desde la API */}
          <div
            className="prose prose-lg max-w-none text-justify space-y-6"
            dangerouslySetInnerHTML={{ __html: pageData.content }}
          />
        </div>
      </section>
    </main>
  );
}
