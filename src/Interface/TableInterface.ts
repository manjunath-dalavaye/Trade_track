export interface TableInterface {
  id: string;
  name: string;
  price: string;
  today: string;
  balance: string;
  marketcap: string;
  "1Y": string;
  "7D": string;
  "30D": string;
}

export interface TableInterfaceCollection{
    TableInterface:TableInterface[]
}