import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import parse from 'html-react-parser';
import Whatsapp from '@/assets/icons/whatsapp-tag.png';
import Facebook from '@/assets/icons/facebook-tag.png';
import { BlogResponse } from '@/interfaces/blog/blog';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const postResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 120 },
    }
  );

  const post: BlogResponse = await postResponse.json();
  const { result } = post;

  const { title, excerpt, categories, thumbnail_image } = result[0];

  return {
    title: `Inmobiliaria ESEPE - ${title}`,
    description: excerpt,
    keywords: categories.map((category) => category.name),
    images: [thumbnail_image],
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: `Inmobiliaria ESEPE - ${title}`,
      description: excerpt,
      images: [thumbnail_image],
    },
  };
}

// Forzar renderizado dinámico para evitar errores en build
export const dynamic = 'force-dynamic';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const postResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 120 },
    }
  );

  const post: BlogResponse = await postResponse.json();
  const { result } = post;

  const { title, date, content, categories, thumbnail_image } = result[0];

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = title;

  return (
    <article className="container max-w-3xl px-4 py-8 mx-auto">
      {/* Botón para volver */}
      <Link
        href="/blog"
        className="flex items-center gap-1 text-[#4A6793] hover:underline mb-6"
      >
        <ArrowLeft size={16} className="text-[#4A6793]" />
        Volver a novedades
      </Link>

      {/* Título */}
      <h1 className="mb-4 text-3xl font-bold text-gray-800">{title}</h1>

      {/* Fecha y Categoría */}
      <div className="flex flex-wrap items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>
              {new Date(date).toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
            {categories[0].name}
          </span>
        </div>

        {/* Botones para compartir */}
        <div className="flex items-center gap-2 ">
          <span className="text-sm text-gray-500">Compartir:</span>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`${shareTitle} ${shareUrl}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en WhatsApp"
            className="text-[#4A6793] hover:text-green-600"
          >
            <Image src={Whatsapp} alt="X" width={20} height={20} />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en Facebook"
            className="text-[#4A6793] hover:text-blue-600"
          >
            <Image src={Facebook} alt="X" width={20} height={20} />
          </a>
        </div>
      </div>

      {/* Imagen destacada */}
      <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-6">
        <Image
          src={thumbnail_image || '/placeholder.svg?height=600&width=800'}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Contenido */}
      <div className="blog-content">{parse(content)}</div>

      <div className="flex justify-between items-center mb-6 mt-8">
        <Link
          href="/blog"
          className="flex items-center gap-1 text-[#4A6793] hover:underline"
        >
          <ArrowLeft size={16} className="text-[#4A6793]" />
          Volver a novedades
        </Link>

        {/* Contenedor de los botones de compartir (derecha) */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Compartir:</span>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`${shareTitle} ${shareUrl}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en WhatsApp"
            className="text-[#4A6793] hover:text-green-600"
          >
            <Image src={Whatsapp} alt="X" width={20} height={20} />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en Facebook"
            className="text-[#4A6793] hover:text-blue-600"
          >
            <Image src={Facebook} alt="X" width={20} height={20} />
          </a>
        </div>
      </div>
    </article>
  );
}
