export interface IProduct {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: IRating;
    quantity?: number;
  }
  
  export interface IRating {
    rate: number;
    count: number;
  }