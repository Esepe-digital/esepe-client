export interface BlogResponse {
  status: number;
  message: string;
  result: Result[];
}

export interface Result {
  ID: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: Date;
  status: string;
  type: string;
  author: string;
  categories: Category[];
  author_name: string;
  thumbnail_image: string;
  permalink: string;
  acf_fields: [];
}

export interface Category {
  term_id: number;
  name: Name;
  slug: CategoryNicename;
  term_group: number;
  term_taxonomy_id: number;
  taxonomy: Taxonomy;
  description: string;
  parent: number;
  count: number;
  filter: Filter;
  cat_ID: number;
  category_count: number;
  category_description: string;
  cat_name: Name;
  category_nicename: CategoryNicename;
  category_parent: number;
}

export enum Name {
  Consejos = 'Consejos',
  Destacado = 'Destacado',
  Finanzas = 'Finanzas',
}

export enum CategoryNicename {
  Consejos = 'consejos',
  Destacado = 'destacado',
  Finanzas = 'finanzas',
}

export enum Filter {
  Raw = 'raw',
}

export enum Taxonomy {
  Category = 'category',
}

export interface BlogPost {
  title: string;
  date: string;
  category: string;
  featuredImage: string;
  content: string;
}
