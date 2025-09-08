import { useEffect, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FormDataCotizador, StepProps } from '@/interfaces/cotizador';
import { PropertyCard } from '../components/PropertyCard';
import { step3Schema } from '../schemas/validation';
import { formatPrice } from '@/lib/utils';
import {
  Step3FormData,
  TextFieldType,
  CheckboxFieldType,
  SelectFieldType,
} from '../types';
import Link from 'next/link';

export interface Comuna {
  id_comuna: number;
  id_region: number;
  nombre_comuna: string;
}

export const Step3 = ({
  selectedModel,
  formData,
  handleChange,
  setIsStep3FormValid,
  communes = [],
  setCommunes,
  setIdRegion,
  setIdCommune,
}: StepProps & {
  communes?: Comuna[];
  setCommunes: React.Dispatch<React.SetStateAction<Comuna[]>>;
  setIdRegion: React.Dispatch<React.SetStateAction<number>>;
  setIdCommune: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [search, setSearch] = useState<string>('');
  const [selectedComunaName, setSelectedComunaName] = useState<string>('');

  const form = useForm<Step3FormData>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      apellido: formData.apellido,
      nombre: formData.nombre,
      rut: formData.rut,
      email: formData.email,
      celular: formData.celular,
      aceptaTerminos: formData.aceptaTerminos,
      IdComuna: formData.IdComuna?.toString(),
      IdRegion: formData.IdRegion?.toString(),
    },
    mode: 'onChange',
  });

  useEffect(() => {
    const getCommunes = async (search: string) => {
      const communes = await fetch(`/api/communes?search=${search}`);
      const response = await communes.json();
      setCommunes(response.result);
    };

    if (search.length > 2) {
      getCommunes(search);
    }
  }, [search, setCommunes]);

  // Observar cambios en el formulario y actualizar el estado global
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      // Actualizar el estado global cuando cambia cualquier campo
      if (name && value[name as keyof Step3FormData] !== undefined) {
        const fieldValue = value[name as keyof Step3FormData];
        handleChange(
          name as keyof FormDataCotizador,
          fieldValue as FormDataCotizador[keyof FormDataCotizador]
        );
      }

      // Verificar la validación completa
      const values = form.getValues();
      const isComplete = Boolean(
        values.apellido?.trim() &&
          values.nombre?.trim() &&
          values.rut?.trim() &&
          values.email?.trim() &&
          values.celular?.trim() &&
          values.aceptaTerminos === true
      );

      // Verificar si hay errores en el formulario, excluyendo el checkbox
      const errors = form.formState.errors;
      const hasErrors = Object.keys(errors).some(
        (key) => key !== 'aceptaTerminos'
      );

      // Si el checkbox está marcado, ignoramos sus errores
      const isValid = isComplete && !hasErrors;
      setIsStep3FormValid?.(isValid);
    });

    return () => subscription.unsubscribe();
  }, [form, handleChange, setIsStep3FormValid]);

  // Efecto para sincronizar los valores iniciales del formulario
  useEffect(() => {
    const currentValues = form.getValues();
    const shouldUpdate = Object.keys(currentValues).some((key) => {
      const formValue = currentValues[key as keyof Step3FormData];
      const formDataValue = formData[key as keyof FormDataCotizador];
      return formValue !== formDataValue;
    });

    if (shouldUpdate) {
      form.reset({
        apellido: formData.apellido || '',
        nombre: formData.nombre || '',
        rut: formData.rut || '',
        email: formData.email || '',
        celular: formData.celular || '',
        aceptaTerminos: formData.aceptaTerminos || false,
        IdComuna: formData.IdComuna?.toString() || '',
        IdRegion: formData.IdRegion?.toString() || '',
      });
    }
  }, [form, formData]);

  const onSubmit = useCallback(
    (values: Step3FormData) => {
      if (form.formState.isValid) {
        Object.entries(values).forEach(([key, value]) => {
          handleChange(
            key as keyof FormDataCotizador,
            value as FormDataCotizador[keyof FormDataCotizador]
          );
        });
      }
    },
    [form.formState.isValid, handleChange]
  );

  function formatearRut(rut: string) {
    rut = rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase();
    if (rut.length <= 1) return rut;

    const cuerpo = rut.slice(0, -1);
    const dv = rut.slice(-1);

    let formatted = '';
    let count = 0;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
      formatted = cuerpo[i] + formatted;
      count++;
      if (count % 3 === 0 && i !== 0) {
        formatted = '.' + formatted;
      }
    }

    return `${formatted}-${dv}`;
  }

  return (
    <Form {...form}>
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
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Modelo:</span>
                <span className="ml-2 font-medium">{formData.modelo}</span>
              </div>
              <div>
                <span className="text-gray-500">UF:</span>
                <span className="ml-2 font-medium">
                  {formData.uf ? `${formatPrice(formData.uf)} UF` : '-'}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Etapa:</span>
                <span className="ml-2 font-medium">{formData.etapa}</span>
              </div>
              <div>
                <span className="text-gray-500">Propiedad:</span>
                <span className="ml-2 font-medium">{formData.propiedad}</span>
              </div>
            </div>
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
                    <FormLabel>Comuna donde vives</FormLabel>
                    <div className="relative">
                      <Input
                        placeholder="Buscar comuna..."
                        value={search !== '' ? search : selectedComunaName}
                        onChange={(e) => {
                          setSearch(e.target.value);
                          setSelectedComunaName('');
                        }}
                        className="w-full h-12"
                      />
                      {search.length > 2 && communes.length > 0 && (
                        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                          {communes.map((comuna: Comuna) => (
                            <div
                              key={comuna.id_comuna}
                              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                              onClick={() => {
                                field.onChange(comuna.id_comuna.toString());
                                handleChange(
                                  'IdRegion',
                                  comuna.id_region.toString()
                                );
                                setSelectedComunaName(comuna.nombre_comuna);
                                setSearch('');
                                setIdCommune(comuna.id_comuna);
                                setIdRegion(comuna.id_region);
                                setCommunes([]); // Cerrar los resultados
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
                          maxLength={12}
                          onChange={(e) => {
                            let value = e.target.value;
                            if (value.length > 12) {
                              value = value.slice(0, 12);
                            }
                            const formatted = formatearRut(value);
                            field.onChange(formatted);
                          }}
                          value={field.value}
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
                    <div className="relative w-full">
                      {/* Fixed +56 prefix */}
                      <span className="absolute left-0 top-0 mt-3 ml-2 text-gray-600">
                        +56
                      </span>
                      <Input
                        {...field}
                        onChange={(e) => {
                          let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters

                          // Only allow up to 9 digits after +56
                          if (value.length > 9) value = value.substring(0, 9);

                          // Set the field value with +56 and the user-entered digits
                          field.onChange(`${value}`);
                        }}
                        className="w-full h-12 pl-14 pr-4 border-gray-300 rounded-md" // Add padding for the +56 prefix
                        placeholder=""
                      />
                    </div>
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
          </div>
        </div>

        <div className="w-full lg:w-auto lg:pt-13">
          <div className="flex justify-center lg:justify-start">
            <PropertyCard
              formData={{
                ...formData,
                imagen_del_modelo: selectedModel?.imagenes[0],
              }}
            />
          </div>
        </div>
      </form>
    </Form>
  );
};
