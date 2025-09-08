import { RECAPTCHA_SECRET_KEY } from '@/config/env';

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parsear el body de la request
    const { token } = body;

    if (!token) {
      return new Response(
        JSON.stringify({ error: 'Falta el token de reCAPTCHA' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const secretKey = RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      return new Response(
        JSON.stringify({ error: 'Falta la clave secreta de reCAPTCHA' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
        }),
      }
    );

    const data = await response.json();

    if (!data.success) {
      return new Response(
        JSON.stringify({
          error: 'Validación de reCAPTCHA fallida',
          data,
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Error al verificar reCAPTCHA',
        details: error instanceof Error ? error.message : 'Error desconocido',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
