'use client';

import CotizacionError from '@/components/cotizacion-error';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ErrorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlToRetry = searchParams.get('urlToBack');

  const onRetry = () => {
    router.push(urlToRetry || '/');
  };

  const onBack = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <CotizacionError onRetry={onRetry} onBack={onBack} />
    </div>
  );
}

export default function ErrorPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ErrorContent />
    </Suspense>
  );
}
