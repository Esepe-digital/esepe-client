import { NextResponse } from 'next/server';
import { API_URL } from '@/config/env';

export async function GET(request: Request) {
  try {
    // Obtener los parámetros de la URL
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');

    // Construir la URL base
    let url = `${API_URL}/proyectos`;

    // Agregar el parámetro name si existe
    if (name) {
      url += `?name=${encodeURIComponent(name)}`;
    }

    // Realizar la petición a la API
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status}`);
    }

    // Obtener los datos
    const data = await response.json();

    // Retornar la respuesta
    return NextResponse.json(data);
  } catch (error) {
    // Manejar errores
    console.error('Error al obtener proyectos:', error);
    return NextResponse.json(
      { error: 'Error al obtener los proyectos' },
      { status: 500 }
    );
  }
}
