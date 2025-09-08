import { NextResponse } from 'next/server';
import { API_URL } from '@/config/env';

export async function GET() {
  try {
    const url = `${API_URL}/paginas/inicio`;

    console.log('=== API INICIO DEBUG ===');
    console.log('URL de la API:', url);
    console.log('API_URL:', API_URL);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error al obtener la página de inicio:', error);
    return NextResponse.json(
      { error: 'Error al obtener la página de inicio' },
      { status: 500 }
    );
  }
}
