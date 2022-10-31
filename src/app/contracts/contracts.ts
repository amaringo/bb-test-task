export interface Client {
  id: number;
  organizationName: string;
  inn: number;
  openingDate: Date;
  accountBalance: CurrencyAmount;
}

export interface ClientDetails {
  phoneNumber: string;
  transactions: Transaction[];
}

export interface Transaction {
  date: Date;
  contractor: string;
  amount: CurrencyAmount;
  type: TransactionTypes;
}

export enum TransactionTypes {
  Incoming = 'Входящий',
  Outcoming = 'Исходящий'
}

export interface CurrencyAmount {
  amount: number,
  currencyCode: string
}

