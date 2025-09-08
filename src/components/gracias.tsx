'use client';

import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';
import { QuoteResumenReserva } from '@/components/proyecto/cotizador/components/QuoteResumenReserva';
import { FormDataCotizador } from '@/interfaces/cotizador';
import { TransactionDetail } from '@/interfaces/transaction/transactionDetail';
import { useEffect, useState } from 'react';

interface GraciasProps {
  formData: FormDataCotizador;
  quoteId: string;
  transactionDetail: TransactionDetail;
}

export default function Gracias({
  formData,
  quoteId,
  transactionDetail,
}: GraciasProps) {
  type Html2PdfType = typeof import('html2pdf.js') | null;
  const [html2pdfInstance, setHtml2pdfInstance] = useState<Html2PdfType>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('html2pdf.js').then((module) => {
        setHtml2pdfInstance(() => module.default || module);
      });
    }
  }, []);

  const handleDownloadPdf = () => {
    if (!html2pdfInstance) {
      console.error('html2pdf library not loaded yet.');
      return;
    }

    const element = document.getElementById('quote-resumen');
    if (element) {
      html2pdfInstance().set({ margin: 10 }).from(element).save();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="bg-[#123752] text-white py-8 px-4">
          <div className="container mx-auto text-center">
            <h1 className="mb-4 text-3xl font-bold">
              ¡Gracias por tu reserva!
            </h1>
            <p className="max-w-2xl mx-auto mb-6">
              Tu reserva fue confirmada exitosamente. A continuación te
              mostramos los detalles.
            </p>
          </div>
        </div>

        <div className="container px-4 py-12 mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <div id="quote-resumen">
              <QuoteResumenReserva
                formData={formData}
                quoteId={quoteId}
                transactionDetail={transactionDetail}
              />
            </div>

            <div className="text-center flex flex-col md:flex-row justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 text-[#4A6793] border-2 border-[#4A6793] rounded-full hover:bg-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                VOLVER AL INICIO
              </Link>
              <button
                onClick={handleDownloadPdf}
                disabled={!html2pdfInstance}
                className="inline-flex items-center justify-center px-8 py-3 text-[#4A6793] border-2 border-[#4A6793] rounded-full hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-4 h-4 mr-1" />
                DESCARGAR PDF
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
