'use client';

import { useState } from 'react';
import FeaturedArticle from './featured-article';
import ArticleGrid from './article-grid';
import { Button } from '@/components/ui/button';
import { Result } from '@/interfaces/blog/blog';
import { motion } from 'framer-motion';

export default function BlogSection({ blogData }: { blogData: Result[] }) {
  const [articles, setArticles] = useState<Result[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const articlesPerPage = 6;

  const loadMoreArticles = () => {
    const nextPage = page + 1;
    const startIndex = 1 + page * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;

    const newArticles = blogData.slice(startIndex, endIndex);

    if (newArticles.length === 0) {
      setHasMore(false);
      return;
    }

    setArticles([...articles, ...newArticles]);
    setPage(nextPage);
  };

  const featuredArticle =
    blogData && blogData.length
      ? blogData?.[0]
      : {
          ID: 0,
          title: '',
          slug: '',
          content: '',
          excerpt: '',
          date: new Date(),
          status: '',
          type: '',
          author: '',
          categories: [],
          author_name: '',
          thumbnail_image: '',
          permalink: '',
          acf_fields: [] as [],
        };

  const regularArticles = blogData?.slice(1);

  return (
    <motion.section
      className="space-y-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center space-y-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center justify-center gap-4">
          <div className="h-px bg-gray-200 w-16"></div>
          <h1 className="text-3xl font-semibold">Novedades</h1>
          <div className="h-px bg-gray-200 w-16"></div>
        </div>
        <p className="text-muted-foreground text-[#5C5C5C]">
          Noticias, proyectos, entorno y ciudad
        </p>
      </motion.div>

      {featuredArticle && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FeaturedArticle {...featuredArticle} />
        </motion.div>
      )}

      {regularArticles.length && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ArticleGrid articles={regularArticles} />
        </motion.div>
      )}

      {hasMore && (
        <motion.div
          className="flex justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            variant="outline"
            onClick={loadMoreArticles}
            className="rounded-full border-2 border-[#4A6793] text-[#4A6793] bg-white hover:bg-[#f0f4f9] hover:text-[#4A6793]"
          >
            <span className="mr-2">+</span> Ver más
          </Button>
        </motion.div>
      )}
    </motion.section>
  );
}
