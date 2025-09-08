import { NextResponse } from 'next/server';
import { API_URL } from '@/config/env';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Construir la URL usando la variable de entorno
    const url = `${API_URL}/reservar`;

    // Realizar la petición a la API externa
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
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
    console.error('Error al procesar la reserva:', error);
    return NextResponse.json(
      { error: 'Error al procesar la reserva' },
      { status: 500 }
    );
  }
}
