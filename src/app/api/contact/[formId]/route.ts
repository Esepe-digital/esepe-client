import { NextResponse } from 'next/server';
import { CONTACT_FORM_POST_URL } from '@/config/env';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ formId: string }> }
) {
  const { formId } = await params;
  const body = await request.json();

  const formData = new FormData();
  formData.append('apellido', body.apellido);
  formData.append('nombre', body.nombre);
  formData.append('email', body.email);
  formData.append('celular', body.celular);
  formData.append('origen-contacto', body.origenContacto);
  formData.append('_wpcf7_unit_tag', `wpcf7-f${formId}`);

  try {
    const response = await fetch(
      `${CONTACT_FORM_POST_URL}/${formId}/feedback`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok || data.data?.status === 400) {
      throw new Error(JSON.stringify(data));
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    return NextResponse.json({
      error: error || 'Error al enviar el formulario',
    });
  }
}
