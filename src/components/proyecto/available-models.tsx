'use client';
import { ModelCard } from '@/components/proyecto/model-card';
import { ModelCardInterface } from '@/interfaces/proyectos/model-card';

export default function AvailableModels({
  data,
}: {
  data: ModelCardInterface[];
}) {
  const scrollToCotizador = (isReserva: boolean, selectedModel?: string) => {
    if (data[0]?.link_de_cotizador_externo) {
      window.location.href = data[0]?.link_de_cotizador_externo;
      return;
    }

    const cotizadorElement = document.getElementById('cotizador');
    if (cotizadorElement) {
      const url = new URL(window.location.href);

      url.searchParams.set('isReserva', isReserva ? 'true' : 'false');
      if (selectedModel) {
        url.searchParams.set('modelo', selectedModel);
      }

      window.history.pushState({}, '', url.toString());

      cotizadorElement.scrollIntoView({ behavior: 'smooth' });

      window.dispatchEvent(
        new CustomEvent('goToStep1', { detail: { selectedModel } })
      );

      // Forzar un re-render del componente Cotizador
      window.dispatchEvent(new Event('popstate'));
    }
  };

  return (
    <div className="px-6 py-12 mx-auto max-w-7xl" id="modelos">
      <h2 className="flex items-center justify-center mb-8 text-3xl font-medium text-center">
        <span className="w-16 h-px mr-4 bg-gray-300"></span>
        Modelos <span className="w-16 h-px ml-4 bg-gray-300"></span>
      </h2>

      <div className="space-y-2">
        {data.map((modelo, index) => (
          <div key={index} className="space-y-4">
            <ModelCard modelo={modelo} scrollToCotizador={scrollToCotizador} />
          </div>
        ))}
      </div>
    </div>
  );
}
