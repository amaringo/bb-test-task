export interface Client {
  id: number;
  organizationName: string;
  inn: number;
  openingDate: Date;
  accountBalance: number;
}

export interface ClientDetails {
  phoneNumber: string;
  transactions: Transaction[];
}

export interface Transaction {
  date: Date;
  contractor: string;
  amount: number;
  type: TransactionTypes;
}

export enum TransactionTypes {
  Incoming = 'Incoming',
  Outcoming = 'Outcoming'
}

