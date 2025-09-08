import { API_URL } from '@/config/env';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id_proyecto: string }> }
) {
  const { id_proyecto } = await params;
  try {
    const response = await fetch(`${API_URL}/propiedades?id=${id_proyecto}`);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error al obtener las promociones:', error);
    return NextResponse.json(
      { error: 'Error al obtener las promociones' },
      { status: 500 }
    );
  }
}
