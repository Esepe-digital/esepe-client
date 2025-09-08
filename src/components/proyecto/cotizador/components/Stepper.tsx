import { StepperProps } from '@/interfaces/cotizador';

export function Stepper({ currentStep, isReserva = false }: StepperProps) {
  const steps = isReserva
    ? ['Selección de propiedad', 'Datos personales']
    : [
        'Modelo y condiciones',
        'Selección de propiedad',
        'Datos personales',
        'Resumen',
      ];

  return (
    <div className="w-full py-4">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep > index + 1
                  ? 'bg-[#123752] text-white'
                  : currentStep === index + 1
                    ? 'bg-[#123752] text-white'
                    : 'bg-gray-200 text-gray-600'
              }`}
            >
              {currentStep > index + 1 ? '✓' : index + 1}
            </div>
            <span
              className={`mt-2 text-sm ${
                currentStep === index + 1
                  ? 'text-[#123752] font-medium'
                  : 'text-gray-500'
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
      <div className="relative mt-4">
        <div className="absolute top-0 w-full h-1 bg-gray-200 rounded-full">
          <div
            className="absolute h-full bg-[#123752] rounded-full transition-all duration-300"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
