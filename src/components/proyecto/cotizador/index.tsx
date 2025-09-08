'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CotizadorProps, FormDataCotizador } from '@/interfaces/cotizador';
import { Stepper } from './components/Stepper';
import { Step1 } from './steps/Step1';
import { Step2 } from './steps/Step2';
import { Comuna, Step3 } from './steps/Step3';
import { QuoteResumen } from './components/QuoteResumen';
import { useRouter, useSearchParams } from 'next/navigation';
import { QuotationResponse } from '@/interfaces/api/quotationRsponse';
import WebpayLogo from '@/assets/logos/webpay.png';
import Image from 'next/image';

export default function Cotizador({
  data,
  masterPlan,
  idProyecto,
  nombreProyecto,
}: CotizadorProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isReserva = searchParams.get('isReserva') === 'true';
  const selectedModelFromUrl = searchParams.get('modelo');
  const [currentStep, setCurrentStep] = useState(1);
  const [communes, setCommunes] = useState<Comuna[]>([]);
  const [idRegion, setIdRegion] = useState<number>(1);
  const [idCommune, setIdCommune] = useState<number>(2);

  // Inicializar formData con valores por defecto
  const [formData, setFormData] = useState<FormDataCotizador>({
    modelo: selectedModelFromUrl || '',
    pie: '',
    plazo: '',
    uf: '',
    etapa: '',
    propiedad: '',
    apellido: '',
    nombre: '',
    rut: '',
    email: '',
    celular: '',
    aceptaTerminos: false,
    cuotaMensual: '',
    cuotaInicial: '',
    idInmueble: '',
    proyecto: nombreProyecto,
  });

  // Efecto para inicializar el proyecto
  useEffect(() => {
    if (nombreProyecto) {
      setFormData((prev) => ({
        ...prev,
        proyecto: nombreProyecto,
      }));
    }
  }, [nombreProyecto]);

  // Efecto para actualizar el modelo cuando cambia en la URL
  useEffect(() => {
    if (selectedModelFromUrl) {
      setIsModelLoading(true);
      setFormData((prev) => ({
        ...prev,
        modelo: selectedModelFromUrl,
        // Resetear campos relacionados cuando cambia el modelo
        propiedad: '',
        etapa: '',
        uf: '',
        idInmueble: '',
      }));
      setTimeout(() => setIsModelLoading(false), 300);
    } else if (selectedModelFromUrl === null) {
      setIsModelLoading(true);
      setFormData((prev) => ({
        ...prev,
        modelo: '',
        propiedad: '',
        etapa: '',
        uf: '',
        idInmueble: '',
      }));
      setTimeout(() => setIsModelLoading(false), 300);
    }
  }, [selectedModelFromUrl]);

  // Efecto para resetear el formulario al cambiar entre cotización y reserva
  useEffect(() => {
    setCurrentStep(1); // <-- Solo para cambio de cotización/reserva
    setFormData((prev) => ({
      ...prev,
      // Mantener el modelo seleccionado por el usuario, solo usar query params si están disponibles
      modelo: selectedModelFromUrl || prev.modelo || '',
      proyecto: nombreProyecto,
      // Resetear campos específicos del formulario
      propiedad: '',
      apellido: '',
      nombre: '',
      rut: '',
      email: '',
      celular: '',
      etapa: '',
      uf: '',
      idInmueble: '',
      aceptaTerminos: false,
      cuotaMensual: '',
      cuotaInicial: '',
    }));
  }, [isReserva, nombreProyecto]);

  // Efecto para inicializar modelo por defecto SOLO cuando no hay modelo seleccionado y no hay query params
  useEffect(() => {
    if (!formData.modelo && !selectedModelFromUrl && data.length > 0) {
      setFormData((prev) => ({
        ...prev,
        modelo: data[0]?.nombre || '',
      }));
    }
  }, [formData.modelo, selectedModelFromUrl, data]);
  const [isStep3FormValid, setIsStep3FormValid] = useState(false);
  const [isCotizacionLoading, setIsQuotationLoading] = useState(false);
  const [quotationsResponse, setQuotationsResponse] =
    useState<QuotationResponse | null>(null);
  const [isPagarReservaLoading, setIsPagarReservaLoading] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(false);

  // Event listener para ir al paso 2 desde el model-card
  useEffect(() => {
    const handleGoToStep2 = (event: CustomEvent) => {
      const { selectedModel } = event.detail;
      if (selectedModel) {
        setFormData((prev) => ({
          ...prev,
          modelo: selectedModel,
          // Resetear campos del paso 2
          propiedad: '',
          etapa: '',
          uf: '',
          idInmueble: '',
        }));
      }
      setCurrentStep(2);
    };

    const handleGoToStep1 = (event: CustomEvent) => {
      const { selectedModel } = event.detail;
      if (selectedModel) {
        setFormData((prev) => ({
          ...prev,
          modelo: selectedModel,
          // Resetear campos del paso 1
          pie: '',
          plazo: '',
        }));
      }
      setCurrentStep(1);
    };

    window.addEventListener('goToStep2', handleGoToStep2 as EventListener);
    window.addEventListener('goToStep1', handleGoToStep1 as EventListener);
    return () => {
      window.removeEventListener('goToStep2', handleGoToStep2 as EventListener);
      window.removeEventListener('goToStep1', handleGoToStep1 as EventListener);
    };
  }, []);

  // Función reutilizable para validar campos requeridos
  const validateRequiredFields = (
    fields: Record<string, string | number | undefined>,
    context: string
  ) => {
    const missingFields = Object.entries(fields)
      .filter(([, value]) => !value)
      .map(([field]) => field);

    if (missingFields.length > 0) {
      console.error(`Campos faltantes para ${context}:`, missingFields);
      return false;
    }
    return true;
  };

  const onSubmit = async () => {
    setIsModelLoading(false); // Apaga el loader de modelo
    setIsQuotationLoading(true);

    // Validar que todos los campos requeridos estén presentes
    const requiredFields = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      rut: formData.rut,
      email: formData.email,
      celular: formData.celular,
      idInmueble: formData.idInmueble,
    };

    if (!validateRequiredFields(requiredFields, 'cotización')) {
      setIsQuotationLoading(false);
      return;
    }

    const body = {
      NombreCliente: formData.nombre + ' ' + formData.apellido,
      Rut: formData.rut,
      Mail: formData.email,
      Fono: formData.celular,
      IdRegion: idRegion,
      IdComuna: idCommune,
      IdInmueble: parseInt(formData.idInmueble || '0'),
      IdEstacionamiento: 0,
      IdPromocion: null,
    };

    if (isReserva) {
      try {
        const reservaResponse = await fetch('/api/reservar', {
          method: 'POST',
          body: JSON.stringify({
            ...formData,
            return_url: window.location.origin + '/gracias',
          }),
        });

        const reservaData = await reservaResponse.json();

        if (reservaResponse.ok && reservaData?.url) {
          // Guardar datos en localStorage antes de redirigir
          localStorage.setItem('quote_id', reservaData.quote_id || '');
          localStorage.setItem('quote_data', JSON.stringify(reservaData));
          localStorage.setItem('form_data', JSON.stringify(formData));
          window.location.href = reservaData.url;
        } else {
          console.error('Error en la respuesta de reserva:', reservaData);
        }
      } catch (err) {
        console.error('Error al enviar datos de reserva:', err);
      } finally {
        setIsQuotationLoading(false);
      }
      return;
    }

    try {
      const response = await fetch('/api/cotizacion', {
        method: 'POST',
        body: JSON.stringify(body),
      });

      const data = await response.json();

      localStorage.setItem('quote_id', data.mensaje?.cotizacion?.codigo || '');
      localStorage.setItem('quote_data', JSON.stringify(data));
      localStorage.setItem('form_data', JSON.stringify(formData));

      setQuotationsResponse(data);

      if (data?.code === 200) {
        nextStep();
      } else {
        router.push(`/leads/error?urlToBack=${window.location.href}`);
      }
    } catch (error) {
      console.error('Error al enviar datos de cotización:', error);
      router.push(`/leads/error?urlToBack=${window.location.href}`);
    } finally {
      setIsQuotationLoading(false);
    }
  };

  const handleChange = (
    field: keyof FormDataCotizador,
    value: FormDataCotizador[keyof FormDataCotizador]
  ) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      return updated;
    });
  };

  const isStep1Valid = () => {
    return !!formData.modelo;
  };

  const isStep2Valid = () => {
    if (currentStep !== (isReserva ? 1 : 2)) return true;

    // Check if we have all required fields
    const hasModelo = !!formData.modelo;
    const hasEtapa = !!formData.etapa;
    const hasPropiedad = !!formData.propiedad;
    const hasIdInmueble = !!formData.idInmueble;

    const isValid = hasModelo && hasEtapa && hasPropiedad && hasIdInmueble;
    return isValid;
  };

  const nextStep = () => {
    setTimeout(() => {
      if (currentStep === (isReserva ? 2 : 3) && !isStep3FormValid) {
        return;
      }
      if (currentStep < (isReserva ? 2 : 4)) {
        setCurrentStep((prev) => {
          return prev + 1;
        });
      } else {
        console.log('Already at max step');
      }
    }, 50);
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const pagarReserva = async () => {
    setIsModelLoading(false); // Apaga el loader de modelo
    setIsPagarReservaLoading(true);
    // Validar que todos los campos requeridos estén presentes
    const requiredFields = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      rut: formData.rut,
      email: formData.email,
      celular: formData.celular,
      idInmueble: formData.idInmueble,
    };

    if (!validateRequiredFields(requiredFields, 'reserva')) {
      setIsPagarReservaLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/pagar-reserva', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          NombreCliente: `${formData.nombre} ${formData.apellido}`,
          Rut: formData.rut,
          Mail: formData.email,
          Fono: formData.celular,
          IdRegion: idRegion,
          IdComuna: idCommune,
          IdInmueble: formData.idInmueble,
          IdEstacionamiento: 0,
          IdPromocion: null,
          IdProyecto: idProyecto,
          return_url: window.location.origin + '/gracias',
        }),
      });

      const data = await response.json();

      if (response.ok && data.redirect_url) {
        localStorage.setItem('quote_id', data.quote_id);
        localStorage.setItem('quote_data', JSON.stringify(data));
        localStorage.setItem('form_data', JSON.stringify(formData));
        window.location.href = data.redirect_url;
      } else {
        console.error('Error en respuesta:', data);
      }
    } catch (err) {
      console.error('Error al enviar datos de reserva:', err);
    } finally {
      setIsPagarReservaLoading(false);
    }
  };

  const renderStepContent = () => {
    if (isReserva) {
      switch (currentStep) {
        case 1:
          return (
            <Step2
              formData={formData}
              handleChange={handleChange}
              data={data}
              masterPlan={masterPlan}
              proyecto={nombreProyecto}
              nextStep={nextStep}
              isModelLoading={isModelLoading}
              setIsModelLoading={setIsModelLoading}
            />
          );
        case 2:
          return (
            <>
              <Step3
                selectedModel={data.find(
                  (model) => model.nombre === formData.modelo
                )}
                formData={formData}
                handleChange={handleChange}
                setIsStep3FormValid={setIsStep3FormValid}
                communes={communes}
                setCommunes={setCommunes}
                setIdCommune={setIdCommune}
                setIdRegion={setIdRegion}
              />
              <div className="flex flex-col mt-8 space-y-6">
                <div className="flex gap-4">
                  <Button
                    onClick={() => pagarReserva()}
                    disabled={!isStep3FormValid || isPagarReservaLoading}
                    className="bg-[#123752] hover:bg-[#0e2c42] text-white rounded-full px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPagarReservaLoading ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <ArrowRight className="w-5 h-5 mr-2" />
                    )}
                    Pagar reserva
                  </Button>
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    className="rounded-full border-[#123752] text-[#123752] hover:bg-[#123752]/10"
                  >
                    Cancelar
                  </Button>
                </div>
                <div className="mt-8">
                  <Image
                    src={WebpayLogo}
                    alt="WebPay"
                    width={200}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>
            </>
          );
        default:
          return null;
      }
    }

    const tieneMasterplan = masterPlan;

    switch (currentStep) {
      case 1:
        return (
          <Step1
            formData={formData}
            handleChange={handleChange}
            data={data}
            proyecto={nombreProyecto}
          />
        );

      case 2:
        return (
          <>
            {tieneMasterplan ? (
              <Step2
                formData={formData}
                handleChange={handleChange}
                data={data}
                masterPlan={masterPlan}
                proyecto={nombreProyecto}
                nextStep={nextStep}
                isModelLoading={isModelLoading}
                setIsModelLoading={setIsModelLoading}
              />
            ) : (
              <Step2
                formData={formData}
                handleChange={handleChange}
                data={data}
                proyecto={nombreProyecto}
                nextStep={nextStep}
              />
            )}
          </>
        );
      case 3:
        return (
          <Step3
            selectedModel={data.find(
              (model) => model.nombre === formData.modelo
            )}
            formData={formData}
            handleChange={handleChange}
            setIsStep3FormValid={setIsStep3FormValid}
            communes={communes}
            setCommunes={setCommunes}
            setIdCommune={setIdCommune}
            setIdRegion={setIdRegion}
          />
        );
      case 4:
        return (
          <>
            {/* Aquí va el resumen final, probablemente un componente QuoteResumen o similar */}
            <QuoteResumen
              selectedModel={data.find(
                (model) => model.nombre === formData.modelo
              )}
              formData={formData}
              quotationsResponse={quotationsResponse}
              setCurrentStep={setCurrentStep}
              data={data}
            />
            <div className="flex justify-center gap-4 mt-8">
              <button
                className="bg-[#123752] text-white rounded-full px-8 py-3 text-lg font-semibold hover:bg-[#0e2c42] transition-colors"
                onClick={() => setCurrentStep(1)}
              >
                ← Volver a cotizar
              </button>
              <button
                className="bg-[#123752] text-white rounded-full px-8 py-3 text-lg font-semibold hover:bg-[#0e2c42] transition-colors"
                onClick={pagarReserva}
                disabled={isPagarReservaLoading}
              >
                {isPagarReservaLoading ? 'Procesando...' : 'Reservar'}
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section id="cotizador" data-step={currentStep}>
      <div className="w-full p-4 mx-auto bg-white shadow-none max-w-7xl rounded-xl sm:p-6 lg:p-8">
        <h1 className="mb-12 text-2xl font-bold text-center md:text-3xl lg:text-4xl lg:mb-16 flex items-center justify-center">
          <span className="w-32 h-px bg-gray-300 mr-4 hidden sm:inline-block"></span>
          {isReserva ? 'Reservar' : 'Cotizar'}
          <span className="w-32 h-px bg-gray-300 ml-4 hidden sm:inline-block"></span>
        </h1>

        <Stepper currentStep={currentStep} isReserva={isReserva} />

        {renderStepContent()}

        {((isReserva && currentStep === 1) ||
          (!isReserva &&
            (currentStep === 1 ||
              (currentStep === 2 && !masterPlan) ||
              currentStep === 3))) && (
          <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row">
            {currentStep > 1 && (
              <Button
                onClick={prevStep}
                variant="outline"
                className="w-full sm:w-auto rounded-full border-[#123752] text-[#123752] hover:bg-[#123752]/10"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Volver
              </Button>
            )}
            <Button
              onClick={currentStep === 3 ? onSubmit : nextStep}
              disabled={
                (currentStep === 1 && !isStep1Valid()) ||
                (currentStep === (isReserva ? 1 : 2) && !isStep2Valid()) ||
                (currentStep === 3 && !isStep3FormValid) ||
                isCotizacionLoading
              }
              className="w-full sm:w-auto bg-[#123752] hover:bg-[#0e2c42] text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center justify-center gap-2">
                {isCotizacionLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <ArrowRight className="w-5 h-5" />
                )}
                <span>Continuar</span>
              </div>
            </Button>
          </div>
        )}
        <div className=" mt-10 border-t-2 border-gray-200"></div>
      </div>
    </section>
  );
}
