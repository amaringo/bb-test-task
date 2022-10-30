import {Client, ClientDetails, TransactionTypes} from "../contracts/contracts";

export class MockData {
  public static readonly clientsMock: Client[] = [
    {
      id: 1,
      organizationName: 'Название организации 1',
      inn: 7565677563,
      openingDate: new Date(),
      accountBalance: {amount: 92.1, currencyCode: 'RUB'},
    },
    {
      id: 2,
      organizationName: 'Название организации 2',
      inn: 8375623943,
      openingDate: new Date(),
      accountBalance: {amount: 0, currencyCode: 'USD'},
    },
    {
      id: 3,
      organizationName: 'Название организации 3',
      inn: 2947837985,
      openingDate: new Date(),
      accountBalance: {amount: 2934232.00, currencyCode: 'USD'},
    },
    {
      id: 4,
      organizationName: 'Название организации 4',
      inn: 2344322345,
      openingDate: new Date(),
      accountBalance: {amount: -67893, currencyCode: 'RUB'},
    },
    {
      id: 5,
      organizationName: 'Название организации 5',
      inn: 3544536878,
      openingDate: new Date(),
      accountBalance: {amount: 4789342692, currencyCode: 'RUB'},
    },
    {
      id: 6,
      organizationName: 'Название организации 6',
      inn: 9844899845,
      openingDate: new Date(),
      accountBalance: {amount: 8692.234, currencyCode: 'USD'},
    },
    {
      id: 7,
      organizationName: 'Название организации 7',
      inn: 5433455438,
      openingDate: new Date(),
      accountBalance: {amount: 34532, currencyCode: 'RUB'},
    },
  ];

  public static readonly clientDetailsMockData: ClientDetails = {
    phoneNumber: '79999999999',
    transactions: [
      {
        amount: {amount: 123123, currencyCode: 'USD'},
        contractor: 'Наименование контрагента 1',
        date: new Date(),
        type: TransactionTypes.Incoming
      },
      {
        amount: {amount: 123123.34, currencyCode: 'USD'},
        contractor: 'Наименование контрагента 2',
        date: new Date(),
        type: TransactionTypes.Outcoming
      },
      {
        amount: {amount: 100000000.01, currencyCode: 'RUB'},
        contractor: 'Наименование контрагента 3',
        date: new Date(),
        type: TransactionTypes.Incoming
      },
      {
        amount: {amount: 555523.43, currencyCode: 'RUB'},
        contractor: 'Наименование контрагента 4',
        date: new Date(),
        type: TransactionTypes.Outcoming
      },
      {
        amount: {amount: 123123, currencyCode: 'RUB'},
        contractor: 'Наименование контрагента 5',
        date: new Date(),
        type: TransactionTypes.Incoming
      },
      {
        amount: {amount: 123123.34, currencyCode: 'RUB'},
        contractor: 'Наименование контрагента 6',
        date: new Date(),
        type: TransactionTypes.Outcoming
      },
      {
        amount: {amount: 100000000.01, currencyCode: 'USD'},
        contractor: 'Наименование контрагента 7',
        date: new Date(),
        type: TransactionTypes.Incoming
      },
      {
        amount: {amount: 0.1, currencyCode: 'RUB'},
        contractor: 'Наименование контрагента 8',
        date: new Date(),
        type: TransactionTypes.Outcoming
      },
    ],
  };
}
