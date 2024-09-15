"use client";
import React, { useState } from "react";
import Nav from "@/components/dashboard/Nav";
import { Courgette } from "next/font/google";
import Image from "next/image";
import img from "@/public/icons/products/vecteezy_fresh-healthy-vegetable-in-wicker-basket-food-concept-ai_28648765 1veg.png";
import { MdOutlineShoppingCart, MdOutlineStar } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const cursive = Courgette({
  subsets: ["latin"],
  weight: "400",
});

const Page = () => {
  return (
    <section className="pb-10 px-1">
      <div className="bg-[#fff] pb-2 px-1.5">
        <Nav />
      </div>
      <div className="bg-[#eff6f1] min-h-screen py-8 px-4 md:px-8 lg:px-[3.5rem]">
        <div className="w-full h-full flex flex-col lg:flex-row justify-between items-start bg-[#fff] rounded-lg shadow-md px-4 md:px-8 py-6">
          <div className="w-full flex flex-col-reverse md:flex-row justify-start items-center gap-2 md:gap-8">
            <div className="flex flex-row md:flex-col gap-1 md:gap-8">
              <Image src={img} alt={"product-img"} width={100} height={100} />
              <Image src={img} alt={"product-img"} width={100} height={100} />
              <Image src={img} alt={"product-img"} width={100} height={100} />
            </div>
            <Image src={img} alt={"product-img"} width={350} height={350} />
          </div>
          <div className="w-full flex flex-col justify-start items-start mt-6 lg:mt-0">
            <h1
              className={`text-[1.35rem] md:text-[1.75rem] text-gray-500 ${cursive.className}`}
            >
              Playwood Veggies
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
            <div className="flex gap-2 md:gap-4">
              <p className="text-[.85rem] text-gray-500">$45.00</p>
              <p className="text-[.85rem] text-green-400 line-through">
                $50.00
              </p>
            </div>
            <p className="text-[.85rem] md:text-[1rem] text-gray-400 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit exercitationem debitis corporis modi itaque beatae
              adipisci.
            </p>
            <div className="flex items-center gap-4 ">
              <div className="flex gap-2">
                <MdOutlineShoppingCart
                  size={18}
                  className="text-green-500 cursor-pointer"
                />
                <p className="text-[.95rem] text-gray-400">Add To Cart</p>
              </div>
              <FaRegHeart size={16} className="text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
