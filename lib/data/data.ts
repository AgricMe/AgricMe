import productImg from "@/public/icons/products/vecteezy_fresh-healthy-vegetable-in-wicker-basket-food-concept-ai_28648765 1veg.png";
import { TransactionStatus } from "@/schema/enums";
import avatar2 from "@/public/dashboard/avatar2.jpg";
import avatar3 from "@/public/dashboard/avatar3.jpg";
import avatar4 from "@/public/dashboard/avatar4.png";
import avatar5 from "@/public/dashboard/avatar5.jpg";
import avatar6 from "@/public/dashboard/avatar6.jpg";
import avatar7 from "@/public/dashboard/avatar7.jpg";
import avatar8 from "@/public/dashboard/avatar8.jpg";
import tomatoImg from "@/public/component-images/tomato.jpg";
import yamImg from "@/public/component-images/yam.jpg";
import garriImg from "@/public/component-images/garri.jpg";
import turkeyImg from "@/public/component-images/turkey.jpg";
import img1 from "@/public/component-images/post-1.jpg";
import img2 from "@/public/component-images/post-2.jpg";
import img31 from "@/public/component-images/post-3-1.jpg";
import img32 from "@/public/component-images/post-3-2.jpg";
import img33 from "@/public/component-images/post-3-3.jpg";
import img34 from "@/public/component-images/post-3-4.jpg";

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
    status: TransactionStatus.COMPLETED,
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
    status: TransactionStatus.COMPLETED,
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, laborijdkosam.",
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
    name: "Jenny Wilson",
    profession: "Agronomist",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 3,
    name: "Robert Fox",
    profession: "Organic Farmer",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 4,
    name: "Courtney Henry",
    profession: "Fisheries Manager",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 5,
    name: "Ollie Watkins",
    profession: "Diary Farmer",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 6,
    name: "Robert Diaz",
    profession: "Poultry Farmer",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 7,
    name: "Virgil Rodriguez",
    profession: "Crop Consultant",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 8,
    name: "James Jackson",
    profession: "Entomologist",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 9,
    name: "Robert Anderson",
    profession: "Horticulturist",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 10,
    name: "Felipe Curt",
    profession: "Irrigation Specialist",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 11,
    name: "Trent Arnold",
    profession: "Greenhouse Manager",
    img: avatar2,
    projects: 24,
    tasks: 132,
    insights: 31,
  },
  {
    id: 12,
    name: "Curtis Jones",
    profession: "Plant Breeder",
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

export const productsData = [
  {
    id: 1,
    img: tomatoImg,
    name: "Tomato",
    price: "$16.00 - $48.00",
  },
  {
    id: 2,
    img: yamImg,
    name: "Yam",
    price: "$16.00 - $48.00",
  },
  {
    id: 3,
    img: turkeyImg,
    name: "Turkey",
    price: "$16.00 - $48.00",
  },
  {
    id: 4,
    img: productImg,
    name: "Vegetables",
    price: "$16.00 - $48.00",
  },
  {
    id: 5,
    img: garriImg,
    name: "Garri",
    price: "$16.00 - $48.00",
  },
  {
    id: 6,
    img: turkeyImg,
    name: "Turkey",
    price: "$16.00 - $48.00",
  },
  {
    id: 7,
    img: yamImg,
    name: "Yam",
    price: "$16.00 - $48.00",
  },
  {
    id: 8,
    img: productImg,
    name: "Vegetables",
    price: "$16.00 - $48.00",
  },
  {
    id: 9,
    img: tomatoImg,
    name: "Tomato",
    price: "$16.00 - $48.00",
  },
  {
    id: 10,
    img: garriImg,
    name: "Garri",
    price: "$16.00 - $48.00",
  },
  {
    id: 11,
    img: turkeyImg,
    name: "Turkey",
    price: "$16.00 - $48.00",
  },
  {
    id: 12,
    img: yamImg,
    name: "Yam",
    price: "$16.00 - $48.00",
  },
];

export const singleServiceData = [
  {
    id: 0,
    title: "Description",
    name: "Varios Tempor",
    desc: "Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
    details: [
      {
        id: 1,
        info: "dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend",
      },
      {
        id: 2,
        info: "dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend",
      },
      {
        id: 3,
        info: "dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend",
      },
      {
        id: 4,
        info: "dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend",
      },
    ],
  },
  {
    id: 1,
    title: "Additional Info",
    name: "fringilla vulputate",
    desc: "Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Nonetus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
    details: [
      {
        id: 1,
        info: "dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend",
      },
    ],
  },
  {
    id: 2,
    title: "Reviews",
    name: "vulputate integer",
    desc: "Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Melerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo.",
    details: [
      {
        id: 1,
        info: "dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend",
      },
      {
        id: 2,
        info: "dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend",
      },
    ],
  },
  {
    id: 3,
    title: "Video",
    name: "mauris varius",
    desc: "Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est biben, risus ac ante. Velit consectetur neque, elit, aliquet. Non",
    details: [
      {
        id: 1,
        info: "dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend",
      },
      {
        id: 2,
        info: "dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend",
      },
      {
        id: 3,
        info: "dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend",
      },
    ],
  },
];

export const trendingProductsData = [
  {
    id: 1,
    img: tomatoImg,
    name: "Tomato",
    price: "$1.00 - $2.00",
  },
  {
    id: 2,
    img: yamImg,
    name: "Yam",
    price: "$3.00 - $10.00",
  },
  {
    id: 3,
    img: turkeyImg,
    name: "Turkey",
    price: "$16.00 - $48.00",
  },
  {
    id: 4,
    img: garriImg,
    name: "Garri",
    price: "$5.00 - $20.00",
  },
  {
    id: 5,
    img: tomatoImg,
    name: "Tomato",
    price: "$1.00 - $2.00",
  },
  {
    id: 6,
    img: yamImg,
    name: "Yam",
    price: "$3.00 - $10.00",
  },
  {
    id: 7,
    img: turkeyImg,
    name: "Turkey",
    price: "$16.00 - $48.00",
  },
  {
    id: 8,
    img: productImg,
    name: "Vegetables",
    price: "$12.00 - $45.00",
  },
];

export const postsData = [
  {
    id: 1,
    img: [img1],
    content:
      "Raising healthy, happy birds is my passion. From the farm to your table, we ensure quality care every step of the way. Porus to bring you fresh, sustainable produce from my flock! With a commitment to ethical farming practices and the well-being of each bird, we strive to deliver the best quality products while supporting the environment and our local community.",
    tag: "#Passion for farming",
  },
  {
    id: 2,
    img: [img2],
    content:
      "My drive to achieve sustainable farming was heightened when i started my NGO. My goals were clear: promote agricultural development, ensure food security, and empower rural communities. However, reaching and communicating with farmers to adopt new innovatioons proved challenging. That's when the farmer-buyer relationship platform became a game changer.                                                                    By fostering direct connections, it has empowered farmers to embrace new techniques and technologies more readily. The platform streamlined outreach, enabling us to provide timely support and resources. As a result, farmers are now adapting faster, increasing productivity, and driving sustainable farming practices - bringing us closer to our mission.",
    tag: "#Farming made easy",
  },
  {
    id: 3,
    img: [img31, img32, img33, img34],
    content:
      "Bird rearing is my passion, and i take pride in raising healthy birds with care. Though it may seem tough, i ensure that each bird is ethically raised and prepared for consumption, offering customers the freshest and most responsibly sourced poultry possible.",
    tag: "#Take a look at my workshop",
  },
];

export const cartItemsData = [
  {
    id: 1,
    img: productImg,
    name: "Vegetables",
    price: "$20.00",
    quantity: 3,
    total: "$60.00",
  },
  {
    id: 2,
    img: yamImg,
    name: "Yam",
    price: "$20.00",
    quantity: 1,
    total: "$20.00",
  },
  {
    id: 3,
    img: tomatoImg,
    name: "Tomato",
    price: "$10.00",
    quantity: 4,
    total: "$40.00",
  },
  {
    id: 4,
    img: turkeyImg,
    name: "Turkey",
    price: "$20.00",
    quantity: 1,
    total: "$20.00",
  },
  {
    id: 5,
    img: garriImg,
    name: "Garri",
    price: "$20.00",
    quantity: 2,
    total: "$40.00",
  },
];

export const notificationsData = [
  {
    id: 1,
    img: avatar2,
    name: "Brian Griffin",
    content: "wants to collaborate",
    date: "5 days ago",
  },
  {
    id: 2,
    img: avatar3,
    name: "Hey Peter",
    content:
      ", we’ve got a new user research opportunity for you. Adam from The Mayor’s Office is looking for people like you.",
    date: "1 month ago",
  },
  {
    id: 3,
    img: avatar4,
    name: "Hey Peter",
    content:
      ", we’ve got a new user research opportunity for you. Adam from The Mayor’s Office is looking for people like you.",
    date: "1 month ago",
  },
  {
    id: 4,
    img: avatar5,
    name: "Hey Peter",
    content:
      ", we’ve got a new user research opportunity for you. Adam from The Mayor’s Office is looking for people like you.",
    date: "1 month ago",
  },
  {
    id: 5,
    img: avatar6,
    name: "Hey John",
    content:
      ", we’ve got a new user research opportunity for you. Neil is looking for people like you.",
    date: "2 month ago",
  },
  {
    id: 6,
    img: avatar7,
    name: "Hey Peter",
    content:
      ", we’ve got a new user research opportunity for you. Adam from The Mayor’s Office is looking for people like you.",
    date: "1 month ago",
  },
  {
    id: 7,
    img: avatar8,
    name: "Hey John",
    content:
      ", we’ve got a new user research opportunity for you. Neil is looking for people like you.",
    date: "2 month ago",
  },
];

export const navData = [
  {
    id: 1,
    title: "About Us",
    href: "/#about",
  },
  {
    id: 2,
    title: "Services",
    href: "/#services",
  },
  {
    id: 3,
    title: "Products",
    href: "/#products",
  },
  {
    id: 4,
    title: "Contact",
    href: "/#contact",
  },
];

export const settingsData = [
  {
    id: "1",
    title: "General Settings",
  },
  {
    id: "2",
    title: "Email",
  },
  {
    id: "3",
    title: "Change Password",
  },
  {
    id: "4",
    title: "Preferences",
  },
  {
    id: "5",
    title: "Delete Account",
  },
];
