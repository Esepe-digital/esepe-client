import BlogSection from '@/components/blog/blog-section';
import { BlogResponse } from '@/interfaces/blog/blog';
import esepeLogo from '@/assets/logos/esepe-logo.png';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explora nuestro blog y aprende con Inmobiliaria ESEPE',
  description:
    'Encuentra consejos para comprar casa, decorar y más. Lee nuestro blog y toma decisiones informadas para tu futuro hogar. ¡Descúbrelo ahora!',
  openGraph: {
    title: 'Explora nuestro blog y aprende con Inmobiliaria ESEPE',
    description:
      'Encuentra consejos para comprar casa, decorar y más. Lee nuestro blog y toma decisiones informadas para tu futuro hogar. ¡Descúbrelo ahora!',
    images: [esepeLogo.src],
  },
};

// Forzar renderizado dinámico para evitar errores en build
export const dynamic = 'force-dynamic';

export default async function Home() {
  let response = { result: [], status: 200, message: '' };

  try {
    const r = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 120 },
    });
    response = await r?.json();
  } catch (error) {
    console.log(error);
  }

  const blogData: BlogResponse = response;
  const { result } = blogData;

  return (
    <main className="container max-w-6xl px-4 py-8 mx-auto">
      <BlogSection blogData={result} />
    </main>
  );
}
