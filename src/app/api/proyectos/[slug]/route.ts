//GET BY SLUG

import { NextResponse } from 'next/server';
import { API_URL } from '@/config/env';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const response = await fetch(
      `${API_URL}/proyectos?name=${slug}&modelos=true`
    );
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error al obtener el proyecto:', error);
    return NextResponse.json(
      { error: 'Error al obtener el proyecto' },
      { status: 500 }
    );
  }
}
