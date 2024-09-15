"use client";
import React, { useState } from "react";
import Nav from "@/components/dashboard/Nav";
import { Courgette } from "next/font/google";
import Image from "next/image";
import img from "@/public/icons/products/vecteezy_fresh-healthy-vegetable-in-wicker-basket-food-concept-ai_28648765 1veg.png";
import { MdOutlineStar } from "react-icons/md";

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
        <div className="w-full h-full flex justify-between items-start bg-[#fff] rounded-lg shadow-md px-8 py-6">
          <div className="w-full flex justify-start items-center gap-8">
            <div className="flex flex-col gap-8">
              <Image src={img} alt={"product-img"} width={100} height={100} />
              <Image src={img} alt={"product-img"} width={100} height={100} />
              <Image src={img} alt={"product-img"} width={100} height={100} />
            </div>
            <Image src={img} alt={"product-img"} width={350} height={350} />
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <h1
              className={`text-[1.05rem] md:text-[1.75rem] text-gray-500 ${cursive.className}`}
            >
              Playwood Veggies
            </h1>
            <div className="flex justify-start items-center gap-2">
              <MdOutlineStar size={15} className="text-yellow-500" />
              <MdOutlineStar size={15} className="text-yellow-500" />
              <MdOutlineStar size={15} className="text-yellow-500" />
              <MdOutlineStar size={15} className="text-yellow-500" />
              <MdOutlineStar size={15} className="text-yellow-500" />
              <p className="text-gray-400 font-normal text-[.95rem] md:text-[.90rem]">
                (22)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
