import * as z from 'zod';

// función para validar RUT
function validarRut(rutCompleto: string) {
  if (!rutCompleto) return false;

  const [rut, dvUsuario] = rutCompleto.split('-');
  if (!rut || !dvUsuario) return false;

  const cleanRut = rut.replace(/\./g, '');
  let suma = 0;
  let multiplo = 2;

  for (let i = cleanRut.length - 1; i >= 0; i--) {
    suma += Number(cleanRut[i]) * multiplo;
    multiplo = multiplo === 7 ? 2 : multiplo + 1;
  }

  const dvEsperado = 11 - (suma % 11);
  const dvCalculado =
    dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'k' : dvEsperado.toString();

  return dvCalculado.toLowerCase() === dvUsuario.toLowerCase();
}

export const step2Schema = z.object({
  modelo: z.string().min(1, 'Debes seleccionar un modelo'),
  etapa: z.string().min(1, 'Debes seleccionar una etapa'),
  propiedad: z.string().min(1, 'Debes seleccionar una propiedad'),
});

export const step3Schema = z.object({
  apellido: z.string().min(1, 'El apellido es requerido'),
  nombre: z.string().min(1, 'El nombre es requerido'),
  rut: z
    .string()
    .min(1, 'El RUT es requerido')
    .refine((value) => validarRut(value), {
      message: 'Por favor, ingresa un RUT válido',
    }),
  email: z.string().email('Ingresa un email válido'),
  celular: z
    .string()
    .min(1, 'El celular es requerido')
    .max(9, 'Máximo 9 dígitos') // ⚡ Ojo: máximo 9 no 10
    .regex(/^\d+$/, 'Solo números permitidos'),
  aceptaTerminos: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar los términos y condiciones',
  }),
  IdComuna: z.string().min(1, 'Debes seleccionar una comuna'),
  IdRegion: z.string().min(1, 'Debes seleccionar una región'),
});
