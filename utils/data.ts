import productImg from "@/public/icons/products/vecteezy_fresh-healthy-vegetable-in-wicker-basket-food-concept-ai_28648765 1veg.png";
import { TransactionStatus } from "@/schema/enums";

export const metrixData = [
  {
    id: 1,
    icon: productImg,
    title: "Revenue",
    value: "$166,580",
    percentage: "↗ 5",
  },
  {
    id: 2,
    icon: productImg,
    title: "Product Sold",
    value: "5679",
    percentage: "↗ 2",
  },
  {
    id: 3,
    icon: productImg,
    title: "Customer",
    value: "51,801",
    percentage: "↙ 3",
  },
];

export const topProductsData = [
  {
    id: 1,
    img: productImg,
    name: "Veggies",
    category: "Levis",
    price: 35,
    quantity: 498,
  },
  {
    id: 2,
    img: productImg,
    name: "Veggies",
    category: "Champion",
    price: 55,
    quantity: 367,
  },
  {
    id: 3,
    img: productImg,
    name: "Veggies",
    category: "Champion",
    price: 48,
    quantity: 255,
  },
];

export const transactionData = [
  {
    id: 1,
    customer: "Eleanor Pena",
    product: "Roaster",
    brand: "Levis",
    quantity: "1 pc",
    status: TransactionStatus.DONE,
  },
  {
    id: 2,
    customer: "Wade Warren",
    product: "Vet Doctor",
    brand: "Levis",
    quantity: "2 ppl",
    status: TransactionStatus.PENDING,
  },
  {
    id: 3,
    customer: "Brooklyn Simmons",
    product: "Plumber",
    brand: "Champion",
    quantity: "1 pc",
    status: TransactionStatus.FAILED,
  },
  {
    id: 4,
    customer: "Kathryn Murphy",
    product: "Veggies",
    brand: "Pull & Bear",
    quantity: "1 pc",
    status: TransactionStatus.DONE,
  },
];
