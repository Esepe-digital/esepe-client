import { useEffect, useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormDataCotizador, Step2Props } from '@/interfaces/cotizador';
import { step2Schema } from '../schemas/validation';
import { formatPrice } from '@/lib/utils';
import { Step2FormData, SelectFieldType } from '../types';
import { PropertyCardInterface } from '@/interfaces/proyectos/model-card';
import Masterplan from '@/components/masterplan/masterplan';
import {
  convertToInmuebleBackend,
  mapInmueblesToLotes,
} from '@/components/utils/mapInmueblesToLotes';
import { barriosData } from '@/data/barrios';
import { useSearchParams, useRouter } from 'next/navigation';

export const Step2 = ({
  formData,
  handleChange,
  data,
  masterPlan,
  proyecto,
  nextStep,
  isModelLoading,
  setIsModelLoading,
}: Step2Props & {
  proyecto: string;
  nextStep?: () => void;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedModel = data.find(
    (model) => model.nombre.toLowerCase() === formData.modelo?.toLowerCase()
  );

  const proyectosConMasterplan = [
    'Viña Carmen',
    'Altos del Valle',
    'Altos del Valle Oriente',
    'San Francisco',
  ];
  const [masterplanImage, setMasterplanImage] = useState<string | null>(null);

  const barrioSeleccionado = barriosData[proyecto || ''];

  const lotes = mapInmueblesToLotes(
    convertToInmuebleBackend(
      data
        .flatMap(
          (model) =>
            model.properties?.map((prop) => ({
              ...prop,
              modelo: model.nombre, // Usar el nombre del modelo padre en lugar del código
            })) || []
        )
        .filter((p): p is PropertyCardInterface => !!p)
    ),
    barrioSeleccionado?.lotesCoords || {}
  );

  // Fetch masterplan image from API
  useEffect(() => {
    const fetchMasterplanImage = async () => {
      if (!proyecto) return;

      try {
        // Convert project name to slug format
        const projectSlug = proyecto.toLowerCase().replace(/\s+/g, '-');

        const response = await fetch(`/api/proyectos/${projectSlug}`);
        if (response.ok) {
          const data = await response.json();
          const masterplanImageUrl =
            data.result?.acf_fields?.imagen_master_plan?.url;
          if (masterplanImageUrl) {
            setMasterplanImage(masterplanImageUrl);
          } else {
            // Fallback to static image if no masterplan image in API
            setMasterplanImage(barrioSeleccionado?.image?.src || null);
          }
        } else {
          // Fallback to static image if API fails
          setMasterplanImage(barrioSeleccionado?.image?.src || null);
        }
      } catch (error) {
        console.error('Error fetching masterplan image:', error);
        // Fallback to static image
        setMasterplanImage(barrioSeleccionado?.image?.src || null);
      }
    };

    fetchMasterplanImage();
  }, [proyecto]);

  const handleMasterplanContinue = (property: PropertyCardInterface) => {
    // Actualizar todos los campos necesarios de manera síncrona
    const updates = {
      propiedad: property.nombre,
      idInmueble: property.id,
      uf: property.precio,
      etapa: property.etapa,
    };

    // Aplicar todas las actualizaciones de una vez
    Object.entries(updates).forEach(([field, value]) => {
      handleChange(field as keyof FormDataCotizador, value);
    });

    // Usar un timeout más corto para asegurar que las actualizaciones se procesen
    setTimeout(() => {
      // Proceed to the next step
      if (nextStep) {
        nextStep();
      } else {
        console.log('nextStep function is undefined!');
      }
    }, 50);
  };

  const handleTooltipClose = () => {
    // This function is no longer needed since we removed the shouldClose mechanism
  };

  const tieneMasterplan = proyectosConMasterplan.includes(proyecto!);

  // Color mapping for property models
  const propertyColorMapping = useMemo(() => {
    const colorMap: Record<string, string> = {
      // Project models with exact names from SASS
      SF100: '#FFFF54',
      SF90: '#75FBFC',
      SF75: '#FF7F17',
      // San Francisco - Nombres correctos de los modelos
      Lux: '#FFFF54',
      Terra: '#75FB4C',
      Aqua: '#75FBFC',
      // Altos del Valle - Nombres de los modelos
      Calbuco: '#FFFF54',
      Osorno: '#75FB4C',
      Lonquimay: '#75FBFC',
      Llaima: '#E933F7',
      'San José': '#28259a',
      SanJose: '#28259a',
      // Viña Carmen - Nombres de los modelos
      Mayal: '#FFFF54',
      Legón: '#75FBFC',
      Barreno: '#E933F7',
      // Altos del Valle Oriente - Nombres de los modelos
      'Calbuco-AV09': '#FFFF54',
      'Osorno-AV07': '#75FBFC',
      'Lonquimay-AV03': '#FF7F17',
      'Llaima-AV08': '#E933F7',
      'SanJose-AV10': '#28259a',
      // Otros modelos
      'tipo-a': '#EF8639',
      'tipo-b': '#78FA50',
      'tipo-c': '#5EC6FA',
      'tipo-d': '#ff4f4d',
    };

    const uniqueModelos = Array.from(
      new Set(selectedModel?.properties?.map((prop) => prop.modelo) || [])
    );

    uniqueModelos.forEach((modelo) => {
      if (!colorMap[modelo]) {
        const fallbackColors = [
          '#FF6B35',
          '#4ECDC4',
          '#45B7D1',
          '#96CEB4',
          '#FFEAA7',
          '#DDA0DD',
          '#98D8C8',
          '#F7DC6F',
          '#BB8FCE',
          '#85C1E9',
        ];

        const colorIndex =
          uniqueModelos.indexOf(modelo) % fallbackColors.length;
        colorMap[modelo] = fallbackColors[colorIndex];
      }
    });

    return colorMap;
  }, [selectedModel?.properties]);

  const etapas = useMemo(() => {
    return selectedModel?.properties
      ? [
          ...new Set(
            selectedModel.properties.map(
              (prop: PropertyCardInterface) => prop.etapa
            )
          ),
        ]
      : [];
  }, [selectedModel?.properties]);

  const propiedadesFiltradas = useMemo(
    () => selectedModel?.properties || [],
    [selectedModel?.properties]
  );

  // Verificar si el modelo seleccionado tiene propiedades disponibles
  const hasAvailableProperties = useMemo(() => {
    return selectedModel?.properties && selectedModel.properties.length > 0;
  }, [selectedModel?.properties]);

  // Verificar si hay etapas disponibles
  const hasAvailableStages = useMemo(() => {
    return etapas.length > 0;
  }, [etapas]);

  const form = useForm<Step2FormData>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      modelo: formData.modelo,
      etapa: formData.etapa || '',
      propiedad: formData.propiedad || '',
    },
  });

  // Actualizar el formulario cuando cambia el modelo seleccionado
  useEffect(() => {
    // Resetear el formulario con los nuevos valores
    form.reset({
      modelo: formData.modelo || '',
      etapa: formData.etapa || '',
      propiedad: formData.propiedad || '',
    });
  }, [formData.modelo, formData.etapa, formData.propiedad, form, data]);

  // Efecto específico para manejar cambios en el query param modelo
  useEffect(() => {
    if (formData.modelo) {
      // Forzar la actualización del formulario cuando cambia el modelo
      form.setValue('modelo', formData.modelo);
      // También resetear los campos relacionados
      form.setValue('etapa', '');
      form.setValue('propiedad', '');
    }
  }, [formData.modelo, form]);

  // Efecto para forzar la actualización inmediata cuando cambia el query param
  useEffect(() => {
    // Forzar la actualización del select cuando cambia formData.modelo
    if (formData.modelo) {
      // Usar setTimeout para asegurar que el DOM se actualice
      setTimeout(() => {
        if (formData.modelo) {
          form.setValue('modelo', formData.modelo as string);
        }
        // También limpiar campos relacionados
        form.setValue('etapa', '');
        form.setValue('propiedad', '');
      }, 0);
    }
  }, [formData.modelo, form]);

  // Seleccionar automáticamente el modelo del query param al cargar
  useEffect(() => {
    const modeloParam = searchParams.get('modelo');
    if (modeloParam && modeloParam !== formData.modelo) {
      handleChange('modelo', modeloParam);
      handleChange('etapa', '');
      handleChange('propiedad', '');
      handleChange('idInmueble', '');
      handleChange('uf', '');
    }
  }, [searchParams, formData.modelo, handleChange]);

  const onSubmit = useCallback(
    (values: Step2FormData) => {
      Object.entries(values).forEach(([key, value]) => {
        if (key === 'modelo') {
          handleChange('modelo', selectedModel?.nombre || value);
        } else {
          handleChange(key as keyof FormDataCotizador, value);
        }
      });
    },
    [handleChange, selectedModel?.nombre]
  );

  useEffect(() => {
    // Only set up form watching for non-masterplan projects
    if (tieneMasterplan) {
      return;
    }

    const subscription = form.watch((value, { name }) => {
      if (name) {
        if (name === 'propiedad') {
          const selectedProperty = propiedadesFiltradas.find(
            (prop) => prop.id === value[name]
          );
          if (selectedProperty?.precio && selectedProperty?.nombre) {
            handleChange('uf', selectedProperty.precio);
            handleChange('propiedad', selectedProperty.nombre);
            handleChange('idInmueble', selectedProperty.id);
          }
        } else if (name === 'modelo') {
          // Actualizar el modelo cuando cambia la selección
          handleChange('modelo', value[name]);
          // Resetear etapa y propiedad cuando cambia el modelo
          handleChange('etapa', '');
          handleChange('propiedad', '');
          handleChange('idInmueble', '');
          handleChange('uf', '');

          // También resetear el formulario para reflejar los cambios
          setTimeout(() => {
            form.setValue('etapa', '');
            form.setValue('propiedad', '');
          }, 0);
        } else {
          handleChange(
            name as keyof FormDataCotizador,
            value[
              name as keyof Step2FormData
            ] as FormDataCotizador[keyof FormDataCotizador]
          );
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [form, handleChange, propiedadesFiltradas, tieneMasterplan]);

  // Verificar si el modelo seleccionado tiene propiedades disponibles
  const isModelDisabled = !hasAvailableProperties;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          {!isModelDisabled && (
            <>
              <h2 className="mb-6 text-xl mt-6 font-bold text-center sm:text-2xl md:mb-8">
                Selecciona tu casa
              </h2>
              <p className="mb-8 text-center text-gray-600">
                Selecciona la propiedad que quieres cotizar
              </p>
            </>
          )}

          <div className="flex flex-col gap-6 mx-auto mb-10">
            <Card className="p-4 mb-6">
              <h3 className="mb-3 text-sm font-medium text-gray-700">
                Selección anterior:
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Modelo:</span>
                  <span className="ml-2 font-medium">
                    {formData.modelo}
                  </span>{' '}
                  {hasAvailableProperties ? (
                    <span className="italic">
                      (Desde UF {formatPrice(selectedModel?.precio)})
                    </span>
                  ) : (
                    <span className="italic">
                      <b>(Este modelo no cuenta con propiedades disponibles)</b>
                    </span>
                  )}
                </div>
              </div>
            </Card>
            {!tieneMasterplan && (
              <div className="flex flex-col gap-6 md:flex-row md:items-end">
                <FormField
                  control={form.control}
                  name="modelo"
                  render={({ field }: { field: SelectFieldType }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Modelo</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          // También actualizar directamente el formData
                          handleChange('modelo', value);
                          // Resetear campos relacionados
                          handleChange('etapa', '');
                          handleChange('propiedad', '');
                          handleChange('idInmueble', '');
                          handleChange('uf', '');
                        }}
                        value={formData.modelo || field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar modelo" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {data.map((modelo, index) => (
                            <SelectItem key={index} value={modelo.nombre}>
                              {modelo.nombre}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="etapa"
                  render={({ field }: { field: SelectFieldType }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Etapa</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          // También actualizar directamente el formData
                          handleChange('etapa', value);
                        }}
                        value={formData.etapa || field.value}
                        disabled={isModelDisabled || !hasAvailableStages}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar etapa" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {etapas.map((etapa, index) => (
                            <SelectItem key={index} value={etapa}>
                              Etapa {etapa}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="propiedad"
                  render={({ field }: { field: SelectFieldType }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Propiedad</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          // También actualizar directamente el formData
                          const selectedProperty = propiedadesFiltradas.find(
                            (prop) => prop.id === value
                          );
                          if (selectedProperty) {
                            handleChange('propiedad', selectedProperty.nombre);
                            handleChange('idInmueble', selectedProperty.id);
                            handleChange('uf', selectedProperty.precio);
                            if (selectedProperty.etapa) {
                              handleChange('etapa', selectedProperty.etapa);
                            }
                          }
                        }}
                        value={formData.idInmueble || field.value}
                        disabled={isModelDisabled}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar propiedad" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {propiedadesFiltradas.map((prop, index) => (
                            <SelectItem key={index} value={prop.id}>
                              {prop.nombre} -{' '}
                              <strong>UF {formatPrice(prop.precio)}</strong>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            {/* Contenedor del mapa */}
            {masterPlan && (
              <div className="mt-4">
                <Masterplan
                  lotes={lotes}
                  allProperties={selectedModel?.properties || []}
                  imageSrc={masterplanImage || barrioSeleccionado.image}
                  modeloImages={barrioSeleccionado.modeloImages}
                  title={proyecto}
                  colorMapping={propertyColorMapping}
                  onContinue={handleMasterplanContinue}
                  onClose={handleTooltipClose}
                  modelData={selectedModel}
                  selectedModelo={formData.modelo}
                  isModelLoading={isModelLoading}
                  proyecto={proyecto}
                  onModeloSelect={(modelo) => {
                    if (setIsModelLoading) setIsModelLoading(true);
                    handleChange('modelo', modelo);
                    handleChange('etapa', '');
                    handleChange('propiedad', '');
                    handleChange('idInmueble', '');
                    handleChange('uf', '');
                    // Actualizar el query param solo con el nombre base
                    const params = new URLSearchParams(searchParams.toString());
                    if (modelo) {
                      params.set('modelo', modelo.split('-')[0]);
                    } else {
                      params.delete('modelo');
                    }
                    router.replace(`?${params.toString()}`, { scroll: false });
                    setTimeout(() => {
                      if (setIsModelLoading) setIsModelLoading(false);
                    }, 200);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
};
