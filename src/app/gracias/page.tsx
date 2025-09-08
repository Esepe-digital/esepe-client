'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Gracias from '@/components/gracias';
import TransaccionFallida from '@/components/failedTransaction';
import { FormDataCotizador } from '@/interfaces/cotizador';
import { TransactionDetail } from '@/interfaces/transaction/transactionDetail';

function GraciasContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token_ws');

  const [reservaExitosa, setReservaExitosa] = useState<boolean | null>(null);
  const [formData, setFormData] = useState<FormDataCotizador | null>(null);
  const [transactionDetail, setTransactionDetail] = useState<TransactionDetail>(
    {} as TransactionDetail
  );
  const [quoteId, setQuoteId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mensajeError, setMensajeError] = useState(
    'No pudimos confirmar tu reserva. Puede que el pago haya fallado o que la propiedad ya haya sido reservada.'
  );

  useEffect(() => {
    const storedQuoteId = localStorage.getItem('quote_id');
    const rawForm = localStorage.getItem('form_data');

    if (rawForm) setFormData(JSON.parse(rawForm));
    setQuoteId(storedQuoteId);

    if (token && storedQuoteId) {
      fetch('/api/reservar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, quoteId: storedQuoteId }),
      })
        .then(async (res) => {
          const data = (await res.json()) as {
            message?: string;
            result?: {
              mensaje?: string;
              transaction?: {
                status?: string;
              };
              ['mensaje-mobysuit']?: {
                error?: string;
              };
            };
          };

          const transactionStatus = data?.result?.transaction?.status;
          const backendError = data?.result?.['mensaje-mobysuit']?.error;

          if (transactionStatus === 'AUTHORIZED' && !backendError) {
            setReservaExitosa(true);
            const completeDetail = data?.result?.transaction;

            setTransactionDetail(completeDetail as TransactionDetail);
          } else {
            if (backendError === 'The quote belongs to an existing contract') {
              setMensajeError('La propiedad ya está reservada.');
            } else {
              const mensajePrincipal = data?.message;
              const mensajeDetalle = data?.result?.mensaje;

              const mensajeCompleto = [mensajePrincipal, mensajeDetalle]
                .filter(Boolean)
                .join('. ');

              setMensajeError((prev) => mensajeCompleto || prev);
            }

            setReservaExitosa(false);
          }

          localStorage.removeItem('quote_id');
          localStorage.removeItem('form_data');
        })
        .catch((err) => {
          console.error('❌ Error al confirmar reserva:', err);
          setReservaExitosa(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      console.warn('🚫 Faltan token o quoteId');
      setReservaExitosa(false);
      setIsLoading(false);
    }
  }, [token]);

  if (isLoading) {
    return (
      <div className="py-16 text-center text-gray-600">
        Procesando tu reserva...
      </div>
    );
  }

  return reservaExitosa && formData && quoteId ? (
    <Gracias
      formData={formData}
      transactionDetail={transactionDetail}
      quoteId={quoteId}
    />
  ) : (
    <TransaccionFallida mensaje={mensajeError} />
  );
}

export default function GraciasPage() {
  return (
    <Suspense
      fallback={
        <div className="py-16 text-center text-gray-600">Cargando...</div>
      }
    >
      <GraciasContent />
    </Suspense>
  );
}
