export interface TransactionDetail {
  status: string;
  amount: number;
  order: string;
  session: string;
  card_detail: CardDetail;
  transaction_date: Date;
  authorization_code: string;
  payment_type_code: string;
  response_code: number;
  installments_number: number;
  vci: string;
  accounting_date: string;
}

export interface CardDetail {
  card_number: string;
}
