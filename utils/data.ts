import productImg from "@/public/icons/products/vecteezy_fresh-healthy-vegetable-in-wicker-basket-food-concept-ai_28648765 1veg.png";
import { TransactionStatus } from "@/schema/enums";
import avatar2 from "@/public/dashboard/avatar2.jpg";
import avatar3 from "@/public/dashboard/avatar3.jpg";
import avatar4 from "@/public/dashboard/avatar4.png";
import avatar5 from "@/public/dashboard/avatar5.jpg";
import avatar6 from "@/public/dashboard/avatar6.jpg";
import avatar7 from "@/public/dashboard/avatar7.jpg";
import avatar8 from "@/public/dashboard/avatar8.jpg";

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

export const chatListData = [
  {
    id: 1,
    name: "Bessie Cooper",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, laboriosam.",
    img: avatar2,
  },
  {
    id: 2,
    name: "Cameron Williamson",
    content: "Lorem ipsum dolor sit amet consectetur adipisiores, laboriosam.",
    img: avatar3,
  },
  {
    id: 3,
    name: "Robert Fox",
    content: "Lorem nsectetur adipisicing elit. Dolores, laboriosam.",
    img: avatar4,
  },
  {
    id: 4,
    name: "Courtney Henry",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, laboriosam.",
    img: avatar5,
  },
  {
    id: 5,
    name: "Kathryn Murphy",
    content:
      "Lorem ipsum dolor sectetur adipisicing elit. Dolores, laboriosam.",
    img: avatar6,
  },
  {
    id: 6,
    name: "Eleanor Pena",
    content: "Lorem ipsum dolor sit amet consectetur Dolores, laboriosam.",
    img: avatar7,
  },
  {
    id: 7,
    name: "Jenny Wilson",
    content: "Lorem ipsum dolor sit amet boriosam.",
    img: avatar8,
  },
  {
    id: 8,
    name: "Guy Hawkins",
    content: "Lorem ipsum dolor sit amet el.",
    img: avatar4,
  },
  {
    id: 9,
    name: "Robert Fox",
    content: "Lorem nsectetur adipisicing elit. Dolores, laboriosam.",
    img: avatar4,
  },
  {
    id: 10,
    name: "Courtney Henry",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, laboriosam.",
    img: avatar5,
  },
  {
    id: 11,
    name: "Jenny Wilson",
    content: "Lorem ipsum dolor sit amet boriosam.",
    img: avatar8,
  },
];


/* services page data */
export const servicesData = [
  {
    id: 1,
    name: "Robert Watkins",
    profession: "Vet Doctor",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 2,
    name: "Robert Watkins",
    profession: "Brick Layer",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 3,
    name: "Robert Watkins",
    profession: "Plumber",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 4,
    name: "Robert Watkins",
    profession: "Electrician",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 5,
    name: "Robert Watkins",
    profession: "Product Manager",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 6,
    name: "Robert Watkins",
    profession: "Product Manager",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 7,
    name: "Robert Watkins",
    profession: "Product Manager",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 8,
    name: "Robert Watkins",
    profession: "Product Manager",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 9,
    name: "Robert Watkins",
    profession: "Product Manager",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 10,
    name: "Robert Watkins",
    profession: "Product Manager",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 11,
    name: "Robert Watkins",
    profession: "Product Manager",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 12,
    name: "Robert Watkins",
    profession: "Product Manager",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
];

export const serviceHistoryData = [
  {
    id: 1,
    date: "12-09-2022",
    type: "Vaccination",
    address: "Address 1",
    paymentMethod: "Online",
    amount: 50000,
  },
  {
    id: 2,
    date: "12-09-2022",
    type: "Checkup",
    address: "Address 2",
    paymentMethod: "Online",
    amount: 50000,
  },
  {
    id: 3,
    date: "12-09-2022",
    type: "Anti Rubies",
    address: "Address 2",
    paymentMethod: "Cash On Delivery",
    amount: 50000,
  },
  {
    id: 4,
    date: "12-09-2022",
    type: "NewCastle",
    address: "Address 2",
    paymentMethod: "Online",
    amount: 50000,
  },
  {
    id: 5,
    date: "12-09-2022",
    type: "LA Treatment",
    address: "Address 2",
    paymentMethod: "Cash On Delivery",
    amount: 50000,
  },
  {
    id: 6,
    date: "12-09-2022",
    type: "Castration",
    address: "Address 2",
    paymentMethod: "Online",
    amount: 50000,
  },
];
