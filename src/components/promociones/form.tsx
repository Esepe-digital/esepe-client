'use client';

import Link from 'next/link';
import Image from 'next/image';
import { RefObject, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  Step3FormData,
  TextFieldType,
  CheckboxFieldType,
  SelectFieldType,
} from '../proyecto/cotizador/types';
import { step3Schema } from '../proyecto/cotizador/schemas/validation';
import { Result } from '@/interfaces/api/promocionesResponse';
import { PropertyCard } from '../proyecto/cotizador/components/PropertyCard';
import WebpayLogo from '@/assets/logos/webpay.png';

interface FormPromocionesProps {
  formData: Step3FormData;
  promotion?: Result;
  isReserva?: boolean;
  onReservaClick?: () => void;
  formRef: RefObject<HTMLDivElement | null>;
}
interface Communes {
  id_comuna: number;
  id_region: number;
  nombre_comuna: string;
}

export const FormPromociones = ({
  formData,
  promotion,
  isReserva = false,
  onReservaClick,
  formRef,
}: FormPromocionesProps) => {
  const [communes, setCommunes] = useState<Communes[]>([]);
  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('1');
  const [isCommuneSelected, setIsCommuneSelected] = useState(false);
  const router = useRouter();

  const form = useForm<Step3FormData>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      apellido: formData?.apellido,
      nombre: formData?.nombre,
      rut: formData?.rut,
      email: formData?.email,
      celular: formData?.celular,
      aceptaTerminos: formData?.aceptaTerminos,
      IdComuna: formData.IdComuna?.toString(),
      IdRegion: selectedRegion,
    },
    mode: 'onChange',
  });

  const getCommunes = async (search: string) => {
    const communes = await fetch(`/api/communes?search=${search}`);

    const response = await communes.json();
    setCommunes(response.result);
  };

  useEffect(() => {
    if (search.length > 2 && !isCommuneSelected) {
      getCommunes(search);
    } else if (search.length <= 2) {
      setCommunes([]);
    }
  }, [search, isCommuneSelected]);

  const pagarReserva = async (userData: Step3FormData) => {
    try {
      const response = await fetch('/api/pagar-reserva', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          NombreCliente: `${userData.nombre} ${userData.apellido}`,
          Rut: userData.rut,
          Mail: userData.email,
          Fono: userData.celular,
          IdRegion: 1,
          IdComuna: 10,
          IdInmueble: promotion?.ID_INMUEBLE,
          IdEstacionamiento: 0,
          IdPromocion: promotion?.ID_PROMOCION_DETALLE,
          IdProyecto: promotion?.ID_PROYECTO,
          return_url: window.location.origin + '/gracias',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error en la solicitud de reserva');
      }

      if (!data.redirect_url) {
        throw new Error('No se pudo obtener el link de pago');
      }

      localStorage.setItem('quote_id', data.quote_id);
      localStorage.setItem('quote_data', JSON.stringify(data));
      localStorage.setItem('form_data', JSON.stringify(formData));

      window.location.href = data.redirect_url;
    } catch (error) {
      console.error(error);
      router.push('/leads/error');
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: Step3FormData) => {
    if (!promotion) return;

    if (isReserva) {
      pagarReserva(data);
      return;
    }

    setIsLoading(true);
    const body = {
      NombreCliente: data.nombre + ' ' + data.apellido,
      Rut: data.rut,
      Mail: data.email,
      Fono: data.celular,
      IdInmueble: promotion.ID_INMUEBLE,
      IdPromocion: promotion.ID_PROMOCION_DETALLE,
      IdRegion: selectedRegion,
      IdComuna: data.IdComuna,
      IdEstacionamiento: 0,
    };

    try {
      const response = await fetch('/api/cotizacion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || 'Error en la solicitud de cotización'
        );
      }

      setShowSuccess(true);
    } catch (error) {
      console.error('Error en cotización:', error);
      router.push('/leads/error');
    } finally {
      setIsLoading(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="container mx-auto my-20 text-center">
        <h2 className="mb-6 text-2xl font-bold">¡Gracias por cotizar!</h2>
        <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-xl font-semibold">
            Detalles de la cotización
          </h3>
          <div className="space-y-2 text-left">
            <p>
              <span className="font-medium">Propiedad:</span> {promotion?.TIPO}{' '}
              {promotion?.NRO_INMUEBLE}
            </p>
            <p>
              <span className="font-medium">Modelo:</span> {promotion?.MODELO}
            </p>
            <p>
              <span className="font-medium">Proyecto:</span>{' '}
              {promotion?.PROYECTO}
            </p>
            <p>
              <span className="font-medium">Superficie total:</span>{' '}
              {promotion?.SUPERFICIE_TOTAL} m²
            </p>
            <p>
              <span className="font-medium">Superficie útil:</span>{' '}
              {promotion?.SUPERFICIE_UTIL} m²
            </p>
            <p>
              <span className="font-medium">Precio con descuento:</span> UF{' '}
              {promotion?.PRECIO_DESCUENTO}
            </p>
          </div>
          <Button
            className="mt-6 bg-[#123752] hover:bg-[#0e2c42] text-white rounded-[32px]"
            onClick={() => window.location.reload()}
          >
            Realizar otra cotización
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <div ref={formRef} className="flex items-center justify-center mb-8">
        <div className="w-16 h-px bg-gray-300 md:w-32"></div>
        <h2 className="px-4 text-2xl font-bold text-center md:text-3xl">
          {isReserva ? 'Reservar' : 'Cotizar'}
        </h2>
        <div className="w-16 h-px bg-gray-300 md:w-32"></div>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-12 px-0 lg:flex-row md:px-8"
      >
        <div className="flex-1">
          {/* Resumen de pasos anteriores */}
          <Card className="p-4 mb-8">
            <h3 className="mb-3 text-sm font-medium text-gray-700">
              Resumen de selección:
            </h3>
            {promotion && (
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-24">
                  <Image
                    src={promotion.imagen_del_modelo.url || '/placeholder.svg'}
                    alt={promotion.TIPO + ' ' + promotion.NRO_INMUEBLE}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="font-medium">
                    {promotion.TIPO} {promotion.NRO_INMUEBLE}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {promotion.MODELO} | {promotion.PROYECTO}
                  </p>
                  <p className="text-sm text-gray-600">
                    Superficie total: {promotion.SUPERFICIE_TOTAL} m²
                  </p>
                  <p className="text-sm text-gray-600">
                    Superficie útil: {promotion.SUPERFICIE_UTIL} m²
                  </p>
                  <p className="text-sm text-gray-600">
                    Precio con descuento: UF {promotion.PRECIO_DESCUENTO}
                  </p>
                </div>
              </div>
            )}
          </Card>

          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="apellido"
                render={({ field }: { field: TextFieldType }) => (
                  <FormItem>
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => field.onChange(e.target.value)}
                        className="w-full h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nombre"
                render={({ field }: { field: TextFieldType }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => field.onChange(e.target.value)}
                        className="w-full h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col gap-6 md:flex-row md:items-end">
              <FormField
                control={form.control}
                name="IdComuna"
                render={({ field }: { field: SelectFieldType }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Comuna</FormLabel>
                    <div className="relative">
                      <Input
                        placeholder="Buscar comuna..."
                        value={search}
                        onChange={(e) => {
                          setSearch(e.target.value);
                          setIsCommuneSelected(false); // Reset flag cuando usuario escribe
                        }}
                        className="w-full h-12"
                      />
                      {search.length > 2 && communes.length > 0 && (
                        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                          {communes.map((comuna) => (
                            <div
                              key={comuna.id_comuna}
                              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                              onClick={() => {
                                field.onChange(comuna?.id_comuna?.toString());
                                setSelectedRegion(
                                  comuna?.id_region?.toString()
                                );
                                setSearch(comuna.nombre_comuna);
                                setCommunes([]);
                                setIsCommuneSelected(true);
                              }}
                            >
                              {comuna.nombre_comuna}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:items-end">
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="rut"
                  render={({ field }: { field: TextFieldType }) => (
                    <FormItem>
                      <FormLabel>RUT</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          onChange={(e) => {
                            let rut = e.target.value.replace(/\D/g, '');

                            rut = rut.substring(0, 9);

                            if (rut.length >= 8) {
                              // Formatear el RUT: agregar el guion y el dígito verificador
                              rut = rut.replace(/^(\d{1,8})(\d{1})$/, '$1-$2');
                            }

                            field.onChange(rut);
                          }}
                          className="h-12"
                          placeholder="Ingresa tu RUT"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }: { field: TextFieldType }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          onChange={(e) => field.onChange(e.target.value)}
                          className="w-full h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="celular"
              render={({ field }: { field: TextFieldType }) => (
                <FormItem>
                  <FormLabel>Celular</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value
                          .replace(/\D/g, '')
                          .substring(0, 9);
                        field.onChange(value);
                      }}
                      className="w-full max-w-[264px] h-12"
                      placeholder="+56"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="aceptaTerminos"
              render={({ field }: { field: CheckboxFieldType }) => (
                <FormItem className="flex flex-row items-start pt-6 space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      He leído y acepto los{' '}
                      <Link
                        href="/legales"
                        className="underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        términos y condiciones
                      </Link>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <Button
                type="submit"
                className="flex-1 bg-[#123752] hover:bg-[#0e2c42] text-white rounded-[32px]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {isReserva ? 'Reservando...' : 'Cotizando...'}
                  </div>
                ) : isReserva ? (
                  'Reservar'
                ) : (
                  'Cotizar'
                )}
              </Button>

              {isReserva ? (
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-[#4A6793] border-2 text-[#4A6793] bg-white hover:bg-gray-50 rounded-[32px]"
                  onClick={onReservaClick}
                  disabled={isLoading}
                >
                  Volver a cotizar
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-[#4A6793] border-2 text-[#4A6793] bg-white hover:bg-gray-50 rounded-[32px]"
                  onClick={onReservaClick}
                  disabled={isLoading}
                >
                  Reservar
                </Button>
              )}
            </div>
            {isReserva && (
              <div className="mt-8">
                <Image
                  src={WebpayLogo}
                  alt="WebPay"
                  width={200}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="w-full lg:w-auto lg:pt-13">
          <div className="flex justify-center lg:justify-start">
            {promotion && (
              <PropertyCard
                isPromotion
                formData={{
                  modelo: promotion.MODELO,
                  propiedad: `${promotion.TIPO} ${promotion.NRO_INMUEBLE}`,
                  etapa: promotion.ETAPA,
                  uf: promotion.PRECIO_DESCUENTO,
                  proyecto: promotion.PROYECTO,
                  imagen_del_modelo: promotion.imagen_del_modelo.url,
                }}
              />
            )}
          </div>
        </div>
      </form>
    </Form>
  );
};
