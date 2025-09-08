import { API_URL } from '@/config/env';

async function getProjects() {
  try {
    const response = await fetch(`${API_URL}/proyectos`);
    const data = await response.json();
    return data.result || [];
  } catch (error) {
    console.error('Error al obtener proyectos:', error);
    return [];
  }
}
async function getBlogs() {
  try {
    const response = await fetch(`${API_URL}/blog`);
    const data = await response.json();
    return data.result || [];
  } catch (error) {
    console.error('Error al obtener blogs:', error);
    return [];
  }
}

export default async function sitemap() {
  const [projects, blogs] = await Promise.all([getProjects(), getBlogs()]);

  const projectUrls = projects.map((project) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/proyecto/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogUrls = blogs.map((blog) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/proyectos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/promociones`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...projectUrls,
    ...blogUrls,
  ];
}
