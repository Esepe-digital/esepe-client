import Link from 'next/link';
import { ArrowLeft, Check, Home } from 'lucide-react';

export default function ThankYouComponent() {
  return (
    <>
      {/* Hero section with full width and centered text */}
      <div className="bg-red-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-2 flex justify-center">
            <Link
              href="/"
              className="text-white/80 hover:text-white text-sm flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Volver
            </Link>
          </div>
          <h1 className="text-3xl font-bold mb-4">¡Gracias por tu reserva!</h1>
          <p className="mb-6 max-w-2xl mx-auto">
            Tu reserva ha sido procesada correctamente. Pronto nos pondremos en
            contacto contigo para los siguientes pasos.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 rounded-full p-2 mr-3">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-green-800">
                Pago completado con éxito
              </h2>
            </div>
            <p className="text-green-700 mb-2">
              Tu reserva ha sido confirmada.
            </p>
            <p className="text-green-700">
              Número de referencia:{' '}
              <span className="font-medium">
                REF-{Math.floor(100000 + Math.random() * 900000)}
              </span>
            </p>
          </div>

          <h2 className="text-2xl font-bold text-center mb-8">
            Detalles de tu reserva
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">
                Información de contacto
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-medium w-24">Nombre:</span>
                  <span>Juan Pérez</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24">Email:</span>
                  <span>juan.perez@ejemplo.com</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24">Teléfono:</span>
                  <span>+56 9 1234 5678</span>
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">
                Detalles de propiedad
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-medium w-24">Modelo:</span>
                  <span>Casa Barreno</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24">Valor:</span>
                  <span className="font-semibold">UF 3.066</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-8">
            Próximos pasos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-4">
              <div className="bg-gray-100 rounded-full p-4 inline-flex items-center justify-center mb-4">
                <Home className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="font-medium mb-2">Visita a la propiedad</h3>
              <p className="text-sm text-gray-600">
                Coordinaremos una visita al proyecto
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-gray-100 rounded-full p-4 inline-flex items-center justify-center mb-4">
                <svg
                  className="h-8 w-8 text-red-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Documentación</h3>
              <p className="text-sm text-gray-600">
                Te enviaremos los documentos necesarios
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-gray-100 rounded-full p-4 inline-flex items-center justify-center mb-4">
                <svg
                  className="h-8 w-8 text-red-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Seguimiento</h3>
              <p className="text-sm text-gray-600">
                Te mantendremos informado del proceso
              </p>
            </div>
          </div>

          <div className="text-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-red-800 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              VOLVER AL INICIO
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
