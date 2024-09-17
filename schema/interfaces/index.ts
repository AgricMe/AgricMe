import { StaticImageData } from "next/image";
import { TransactionStatus } from "../enums";

export interface Metrix {
  id: number;
  icon: StaticImageData;
  title: string;
  value: string;
  percentage: string;
}

export interface Product {
  id: number;
  img: StaticImageData;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

export interface MarketProduct {
  id: number;
  img: StaticImageData;
  name: string;
  price: string;
  grid?: boolean;
}

export interface Transaction {
  id: number;
  customer: string;
  product: string;
  brand: string;
  quantity: string;
  status: TransactionStatus;
}

export interface Chat {
  id: number;
  name: string;
  content: string;
  img: StaticImageData;
}

export interface Service {
  id: number;
  name: string;
  profession: string;
  img: StaticImageData;
  projects: number;
  tasks: number;
  insights: number;
}

export interface ServiceHistory {
  id: number;
  date: string;
  type: string;
  address: string;
  paymentMethod: string;
  amount: number;
}
