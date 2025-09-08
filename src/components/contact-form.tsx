'use client';
import type React from 'react';
import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import CalendarIcon from '@/assets/icons/calendar.svg';
import ClockIcon from '@/assets/icons/clock.svg';
import PhoneIcon from '@/assets/icons/smartphone-device.svg';
import Calendly from '@/assets/icons/canlendly.svg';
import Script from 'next/script';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidgets: () => void;
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface dataProp {
  direccion_de_contacto: string;
  telefono_de_atencion: string;
  horario_atencion: string;
  dias_de_atencion: string;
  whatsapp: string;
  texto_informativo: string;
  calendly_url: string;
}

export default function ContactForm({
  formId,
  data,
}: {
  formId: string;
  data: dataProp;
}) {
  const {
    direccion_de_contacto,
    telefono_de_atencion,
    horario_atencion,
    dias_de_atencion,
    whatsapp,
    texto_informativo,
    calendly_url,
  } = data;

  const [formData, setFormData] = useState({
    apellido: '',
    nombre: '',
    email: '',
    celular: '',
    origenContacto: 'website',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'celular') {
      // Remove any non-digit characters and the +56 prefix if present
      const digitsOnly = value.replace(/\D/g, '').replace('56', '');
      // Limit to 9 digits
      const limitedDigits = digitsOnly.slice(0, 9);
      setFormData((prev) => ({ ...prev, [name]: limitedDigits }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`/api/contact/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apellido: formData.apellido,
          nombre: formData.nombre,
          email: formData.email,
          celular: `+56${formData.celular}`,
          origenContacto: formData.origenContacto,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      setSubmitStatus('success');
      //reset form
      setFormData({
        apellido: '',
        nombre: '',
        email: '',
        celular: '',
        origenContacto: '',
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="w-full px-4 py-8 sm:py-12 mx-auto max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Left column - Information */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] leading-[120%] font-bold mb-8">
                Asesoría
                <br />
                personalizada
              </h1>
              {texto_informativo && (
                <p className="font-normal text-sm sm:text-base leading-relaxed text-gray-600 mt-4 max-w-md">
                  {texto_informativo}
                </p>
              )}
            </div>

            <div className="mt-6 sm:mt-8 space-y-6">
              <div className="flex flex-col gap-4">
                {whatsapp && (
                  <Button
                    variant="outline"
                    className="max-w-[250px] flex items-center justify-center gap-2 text-[#4A6793] border-[2px] border-[#4A6793] rounded-full text-base font-medium py-4 px-6"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#4A6793"
                        stroke="#4A6793"
                        strokeWidth="0"
                        className="mr-1"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Contactar por Whatsapp
                    </a>
                  </Button>
                )}
                {calendly_url && (
                  <Button
                    type="button"
                    variant="outline"
                    className="max-w-[250px] flex justify-start items-center gap-2 text-white border-[2px] border-[#123752] bg-[#123752] rounded-full text-base font-medium py-4 px-6"
                    onClick={() => setShowModal(true)}
                  >
                    <Calendly className="w-5 h-5" />
                    Agendar atención
                  </Button>
                )}

                {showModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-3xl p-6 rounded-lg relative">
                      <button
                        onClick={() => setShowModal(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                      >
                        ✕
                      </button>
                      <div className="w-full h-[630px]">
                        <iframe
                          src={calendly_url}
                          width="100%"
                          height="100%"
                          frameBorder="0"
                          title="Calendly"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="w-full sm:w-[456px] flex flex-col gap-4 sm:gap-[16px]">
                {dias_de_atencion && (
                  <div className="flex items-center gap-3 sm:gap-[16px]">
                    <CalendarIcon
                      className="w-5 h-5 sm:w-[24px] sm:h-[24px] text-black"
                      viewBox="0 0 24 24"
                    />
                    <div className="text-[#5C5C5C]">{dias_de_atencion}</div>
                  </div>
                )}
                {horario_atencion && (
                  <div className="flex items-center gap-3 sm:gap-[16px] text-gray-600">
                    <ClockIcon
                      className="w-5 h-5 sm:w-[24px] sm:h-[24px] text-black"
                      viewBox="0 0 24 24"
                    />
                    <p>{horario_atencion}</p>
                  </div>
                )}

                {telefono_de_atencion && (
                  <div className="flex items-center gap-3 sm:gap-[16px] text-gray-600">
                    <PhoneIcon
                      className="w-5 h-5 sm:w-[24px] sm:h-[24px] [&_path]:stroke-black"
                      viewBox="0 0 24 24"
                    />
                    <p>{telefono_de_atencion}</p>
                  </div>
                )}

                {direccion_de_contacto && (
                  <div className="flex items-center gap-3 sm:gap-[16px] text-gray-600">
                    <MapPin
                      className="w-5 h-5 sm:w-[24px] sm:h-[24px] text-black"
                      viewBox="0 0 24 24"
                    />
                    <p>{direccion_de_contacto}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                <div className="space-y-2 sm:space-y-[4px]">
                  <label
                    htmlFor="apellido"
                    className="block text-sm sm:text-base text-black"
                  >
                    Apellido
                  </label>
                  <Input
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    className="w-full h-10 sm:h-12 border-gray-300"
                    required
                  />
                </div>
                <div className="space-y-2 sm:space-y-[4px]">
                  <label
                    htmlFor="nombre"
                    className="block text-sm sm:text-base text-black"
                  >
                    Nombre
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full h-10 sm:h-12 border-gray-300"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 sm:space-y-[4px]">
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base text-black"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-10 sm:h-12 border-gray-300"
                />
              </div>

              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                <div className="space-y-2 sm:space-y-[4px]">
                  <label
                    htmlFor="celular"
                    className="block text-sm sm:text-base text-black"
                  >
                    Celular
                  </label>
                  <div className="relative">
                    <Input
                      id="celular"
                      name="celular"
                      value={`+56${formData.celular}`}
                      onChange={handleChange}
                      className="w-full h-10 sm:h-12 border-gray-300"
                      placeholder="+569XXXXXXXX"
                      maxLength={12}
                      pattern="\+56[0-9]{9}"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-[4px]">
                  <label
                    htmlFor="origenContacto"
                    className="block text-sm sm:text-base text-black"
                  >
                    ¿Cómo llegaste a nosotros?
                  </label>
                  <Select
                    onValueChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        origenContacto: value,
                      }))
                    }
                  >
                    <SelectTrigger className="w-full h-10 sm:h-12 border-gray-300">
                      <SelectValue placeholder="Seleccione una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">
                        Portales inmobiliarios
                      </SelectItem>
                      <SelectItem value="social-media">
                        Redes Sociales
                      </SelectItem>
                      <SelectItem value="marketing">Google</SelectItem>
                      <SelectItem value="public-way">Vía Pública</SelectItem>
                      <SelectItem value="recommendation">
                        Recomendación
                      </SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  type="submit"
                  className="w-full sm:w-[264px] h-[48px] sm:h-[60px] px-4 sm:px-[32px] py-3 sm:py-[16px] gap-2 sm:gap-[8px] rounded-full bg-[#1a3049] hover:bg-[#12243a] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </Button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-sm">
                    ¡Formulario enviado con éxito!
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-sm">
                    Error al enviar el formulario. Por favor, intente
                    nuevamente.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
