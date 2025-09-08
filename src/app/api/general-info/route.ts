import { NextResponse } from 'next/server';
import { API_URL } from '@/config/env';

export async function GET() {
  try {
    // Construir la URL base
    const url = `${API_URL}/general-info`;

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
    console.error('Error al obtener información general:', error);
    return NextResponse.json(
      { error: 'Error al obtener la información general' },
      { status: 500 }
    );
  }
}
