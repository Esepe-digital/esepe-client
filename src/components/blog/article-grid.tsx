import { Result } from '@/interfaces/blog/blog';
import ArticleCard from './article-card';

interface ArticleGridProps {
  articles: Result[];
}

export default function ArticleGrid({ articles }: ArticleGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles?.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  );
}
