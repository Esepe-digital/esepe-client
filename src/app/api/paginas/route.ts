import { API_URL } from '@/config/env';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const name = searchParams.get('name');

    // Construye la URL base
    let url = `${API_URL}/paginas`;
    // Agrega parámetros de consulta si existen
    const params = new URLSearchParams();
    if (slug) {
      params.append('slug', slug);
    }
    if (name) {
      params.append('name', name);
    }
    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error al obtener las páginas:', error);
    return NextResponse.json(
      { error: 'Error al obtener las páginas' },
      { status: 500 }
    );
  }
}
