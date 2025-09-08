'use client';

import { FC } from 'react';
import { FormDataCotizador } from '@/interfaces/cotizador';
import { TransactionDetail } from '@/interfaces/transaction/transactionDetail';
import { formatPrice } from '@/lib/utils';

interface Props {
  formData: FormDataCotizador;
  quoteId: string;
  transactionDetail: TransactionDetail;
}

export const QuoteResumenReserva: FC<Props> = ({
  formData,
  quoteId,
  transactionDetail,
}) => {
  const { card_detail, installments_number, transaction_date, amount } =
    transactionDetail;

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Reserva confirmada</h2>
        <p className="text-gray-600">
          ¡Gracias, {formData.nombre}! A continuación te mostramos el resumen de
          tu reserva.
        </p>
      </div>

      <div className="border rounded-lg p-6 bg-green-50 border-green-200">
        <p className="text-green-700 font-semibold">
          Código de reserva: <span className="font-bold">{quoteId}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Información de contacto
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <strong>Nombre:</strong> {formData.nombre} {formData.apellido}
            </li>
            <li>
              <strong>Rut:</strong> {formData.rut}
            </li>
            <li>
              <strong>Email:</strong> {formData.email}
            </li>
            <li>
              <strong>Teléfono:</strong> {formData.celular}
            </li>
          </ul>

          <h3 className="text-lg font-semibold my-4 text-gray-700">
            Detalles de la operación
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <strong>Fecha de la operación:</strong>{' '}
              {new Date(transaction_date).toLocaleDateString()}
            </li>
            <li>
              <strong>Monto de reserva:</strong> $ {formatPrice(amount)}
            </li>
            <li>
              <strong>Número de cuotas:</strong> {installments_number}
            </li>
            <li>
              <strong>Número de tarjeta:</strong> **** **** ****{' '}
              {card_detail?.card_number}
            </li>
          </ul>

          <h3 className="text-lg font-semibold my-4 text-gray-700">
            Detalles de la propiedad
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <strong>Modelo:</strong> {formData.modelo}
            </li>
            <li>
              <strong>Etapa:</strong> {formData.etapa}
            </li>
            <li>
              <strong>Propiedad:</strong> {formData.propiedad}
            </li>
            <li>
              <strong>Valor UF:</strong> {formatPrice(formData.uf)}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
