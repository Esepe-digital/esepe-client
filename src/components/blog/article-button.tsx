import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ArticleButtonProps {
  slug: string;
}

export default function ArticleButton({ slug }: ArticleButtonProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="inline-flex items-center mt-2 text-sm transition-colors text-[#4A6793] hover:text-[#4A6793]/80 [&>span]:text-[#4A6793]"
    >
      <span>Ver artículo</span> <ArrowRight className="w-4 h-4 ml-1" />
    </Link>
  );
}
