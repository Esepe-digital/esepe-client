import Image from 'next/image';
import CategoryBadge from './category-badge';
import ArticleButton from './article-button';
import CalendarIcon from '@/assets/icons/calendar.svg';
import { Result } from '@/interfaces/blog/blog';

export default function ArticleCard({
  title,
  slug,
  excerpt,
  date,
  categories,
  thumbnail_image,
}: Result) {
  return (
    <div className="flex gap-4 border-b pb-6">
      <div className="relative w-1/3 aspect-square overflow-hidden rounded-lg shrink-0">
        <Image
          src={thumbnail_image || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between w-2/3">
        <div className="space-y-2">
          <h3 className="font-semibold line-clamp-2">{title}</h3>
          <div className="flex items-center gap-3">
            <time className="text-xs text-muted-foreground flex items-center gap-1">
              <CalendarIcon
                className="w-2 h-2 sm:w-[14px] sm:h-[24px] text-black"
                viewBox="0 0 24 24"
              />
              {date?.toString()}
            </time>
            <CategoryBadge category={categories[0]?.name} />
          </div>
          <p className="text-xs text-muted-foreground line-clamp-3">
            {excerpt}
          </p>
        </div>
        <ArticleButton slug={slug} />
      </div>
    </div>
  );
}
