"use client";
import React, { useState } from "react";
import Nav from "@/components/dashboard/Nav";
import { Courgette } from "next/font/google";
import Image from "next/image";
import img from "@/public/icons/products/vecteezy_fresh-healthy-vegetable-in-wicker-basket-food-concept-ai_28648765 1veg.png";
import {
  MdArrowForward,
  MdOutlineShoppingCart,
  MdOutlineStar,
} from "react-icons/md";
import { FaFacebook, FaInstagram, FaRegHeart, FaTwitter } from "react-icons/fa";
import { productsData, singleServiceData } from "@/utils/data";
import MarketProduct from "@/components/dashboard/MarketProduct";

const cursive = Courgette({
  subsets: ["latin"],
  weight: "400",
});

const Page = () => {
  const [index, setIndex] = useState(0);
  const item = singleServiceData[index];
  return (
    <section className="pb-10 px-1">
      <div className="bg-[#fff] pb-2 px-1.5">
        <Nav />
      </div>
      <div className="bg-[#eff6f1] min-h-screen py-8 px-4 md:px-8 lg:px-[3.5rem]">
        <div className="w-full h-full flex flex-col lg:flex-row justify-between items-start bg-[#fff] rounded-lg shadow-md px-4 md:px-8 py-6">
          <div className="w-full flex flex-col-reverse md:flex-row justify-start items-center gap-2 md:gap-8">
            <div className="flex flex-row md:flex-col gap-1 md:gap-8">
              <Image
                src={img}
                alt={"product-img"}
                width={100}
                height={100}
                className="w-[90px] h-[90px] md:w-[110px] md:h-[110px]"
              />
              <Image
                src={img}
                alt={"product-img"}
                width={100}
                height={100}
                className="w-[90px] h-[90px] md:w-[110px] md:h-[110px]"
              />
              <Image
                src={img}
                alt={"product-img"}
                width={100}
                height={100}
                className="w-[90px] h-[90px] md:w-[110px] md:h-[110px]"
              />
            </div>
            <Image src={img} alt={"product-img"} width={350} height={350} />
          </div>
          <div className="w-full flex flex-col justify-start items-start mt-6 lg:mt-0">
            <h1
              className={`text-[1.35rem] md:text-[1.75rem] text-gray-500 ${cursive.className}`}
            >
              Ultricies Condimentum
            </h1>
            <div className="flex justify-start items-center gap-2">
              <MdOutlineStar size={15} className="text-yellow-500" />
              <MdOutlineStar size={15} className="text-yellow-500" />
              <MdOutlineStar size={15} className="text-yellow-500" />
              <MdOutlineStar size={15} className="text-yellow-500" />
              <MdOutlineStar size={15} className="text-gray-400" />
              <p className="text-gray-400 font-normal text-[.95rem] md:text-[.90rem]">
                (22)
              </p>
            </div>
            <div className="flex gap-2 md:gap-4 mt-1">
              <p className="text-[.85rem] text-gray-500">$45.00</p>
              <p className="text-[.85rem] text-green-400 line-through">
                $50.00
              </p>
            </div>
            <p
              className={`text-[1rem] text-gray-400 ${cursive.className} mt-4`}
            >
              Color
            </p>
            <p className="text-[.85rem] md:text-[.9rem] text-gray-400 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit exercitationem debitis corporis modi itaque beatae
              adipisci.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <MdOutlineShoppingCart
                  size={18}
                  className="text-green-500 cursor-pointer"
                />
                <p className={`text-[1rem] text-gray-400 ${cursive.className}`}>
                  Add To Cart
                </p>
              </div>
              <FaRegHeart size={16} className="text-gray-500 cursor-pointer" />
            </div>
            <p
              className={`text-[1rem] text-gray-400 mt-5 ${cursive.className}`}
            >
              Categories
            </p>
            <p
              className={`text-[1rem] text-gray-400 my-5 ${cursive.className}`}
            >
              Tags
            </p>
            <div className="flex gap-8">
              <p className={`text-[1rem] text-gray-400 ${cursive.className}`}>
                Share
              </p>
              <div className="flex justify-center items-center gap-4">
                <FaFacebook
                  size={15}
                  className="text-[#274c5b] cursor-pointer"
                />
                <FaInstagram
                  size={15}
                  className="text-green-500 cursor-pointer"
                />
                <FaTwitter
                  size={15}
                  className="text-[#274c5b] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full bg-[#fff] rounded-lg shadow-md mt-12 px-4 md:px-8 py-6">
          <div className="flex justify-start items-start md:items-center gap-4 md:gap-12 mb-8">
            {singleServiceData.map((item) => {
              return (
                <div key={item.id}>
                  <h1
                    className={`text-[.85rem] md:text-[1.1rem] lg:text-[1.3rem] md:mb-6 ${
                      index === item.id
                        ? "text-green-500 underline"
                        : "text-gray-500"
                    } ${
                      item.id === 1 && "text-center"
                    } font-normal cursor-pointer duration-300 ${
                      cursive.className
                    }`}
                    onClick={() => setIndex(item.id)}
                  >
                    {item.title}
                  </h1>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col">
            <p
              className={`text-[1rem] md:text-[1.15rem] text-gray-400 duration-300 capitalize ${cursive.className}`}
            >
              {item.name}
            </p>
            <p className="text-[.75rem] md:text-[.9rem] text-gray-400 duration-300 my-4">
              {item.desc}
            </p>
            <p
              className={`text-[1rem] md:text-[1.15rem] text-gray-400 duration-300 mb-3 ${cursive.className}`}
            >
              More details
            </p>
            <div className="flex flex-col">
              {item.details.map((detail) => {
                return (
                  <div
                    key={detail.id}
                    className="flex justify-start items-center gap-1.5 md:gap-4 duration-300"
                  >
                    <MdArrowForward
                      size={18}
                      className="w-[10%] md:w-auto text-[#274c5b] duration-300"
                    />
                    <p className="text-[.7rem] md:text-[.9rem] text-gray-400 my-4 capitalize duration-300">
                      {detail.info}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full h-full mt-[3rem]">
          <h1
            className={`text-[1.2rem] lg:text-[1.45rem] mb-6 text-gray-500 font-normal ${cursive.className}`}
          >
            Related Products
          </h1>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
             gap-4`}
          >
            {productsData.slice(0, 4).map((product) => {
              return (
                <MarketProduct key={product.id} {...product} grid={true} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
