import Image from 'next/image';
import CategoryBadge from './category-badge';
import ArticleButton from './article-button';
import CalendarIcon from '@/assets/icons/calendar.svg';
import { Result } from '@/interfaces/blog/blog';

export default function FeaturedArticle({
  title,
  excerpt,
  date,
  slug,
  categories,
  thumbnail_image,
}: Result) {
  return (
    <div className="grid md:grid-cols-2 gap-6  border-b py-8">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={thumbnail_image || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div className="flex items-center gap-3">
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <CalendarIcon
                className="w-2 h-2 sm:w-[18px] sm:h-[24px] text-black"
                viewBox="0 0 24 24"
              />
              {date?.toString()}
            </div>
            <CategoryBadge category={categories[0]?.name} />
          </div>
          <p className="text-muted-foreground line-clamp-4">{excerpt}</p>
        </div>
        <ArticleButton slug={slug} />
      </div>
    </div>
  );
}
