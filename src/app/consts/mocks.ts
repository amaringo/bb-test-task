import {Client, ClientDetails, TransactionTypes} from "../contracts/contracts";

export class MockData {
  public static readonly clientsMock: Client[] = [
    {
      id: 1,
      organizationName: 'Название организации 1',
      inn: 7565677563,
      openingDate: new Date(),
      accountBalance: 92.1,
    },
    {
      id: 2,
      organizationName: 'Название организации 2',
      inn: 8375623943,
      openingDate: new Date(),
      accountBalance: 0,
    },
    {
      id: 3,
      organizationName: 'Название организации 3',
      inn: 2947837985,
      openingDate: new Date(),
      accountBalance: 2934232.00,
    },
    {
      id: 4,
      organizationName: 'Название организации 4',
      inn: 2344322345,
      openingDate: new Date(),
      accountBalance: -67893,
    },
    {
      id: 5,
      organizationName: 'Название организации 5',
      inn: 3544536878,
      openingDate: new Date(),
      accountBalance: 4789342692,
    },
    {
      id: 6,
      organizationName: 'Название организации 6',
      inn: 9844899845,
      openingDate: new Date(),
      accountBalance: 8692.234,
    },
    {
      id: 7,
      organizationName: 'Название организации 7',
      inn: 5433455438,
      openingDate: new Date(),
      accountBalance: 34532,
    },
  ];

  public static readonly clientDetailsMockData: ClientDetails = {
    phoneNumber: '79995551111',
    transactions: [
      {
        amount: 123123,
        contractor: 'Наименование контрагента 1',
        date: new Date(),
        type: TransactionTypes.Incoming
      },
      {
        amount: 123123.34,
        contractor: 'Наименование контрагента 2',
        date: new Date(),
        type: TransactionTypes.Outcoming
      },
      {
        amount: 100000000.01,
        contractor: 'Наименование контрагента 3',
        date: new Date(),
        type: TransactionTypes.Incoming
      },
      {
        amount: 555523.43,
        contractor: 'Наименование контрагента 4',
        date: new Date(),
        type: TransactionTypes.Outcoming
      },
    ],
  };
}
