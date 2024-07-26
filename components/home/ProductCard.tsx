"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../subcomponents/ProductCardAnimated";
import { IoMdStar } from "react-icons/io";

export function ProductCard() {
  return (
    <CardContainer className="inter-var w-[100%]">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[white] dark:border-white/[0.2] border-black/[0.1] w-full sm:w-full h-auto rounded-xl p-6 border product-cont">
        <CardItem translateZ="100" className="w-full">
          <Image
            src="/icons/products/vecteezy_fresh-healthy-vegetable-in-wicker-basket-food-concept-ai_28648765 1veg.png"
            height="0"
            width={100}
            className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-xl bg-[#f6f8fb]"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-5 flex-col">
          <CardItem
            translateZ={20}
            as="p"
            className="dark:text-black text-white text-xs font-semibold py-2"
          >
            Fresh Vegetable
          </CardItem>
          <CardItem className="flex">
            <CardItem
                translateZ={20}
                as="p"
                className="dark:text-[#EFD372] text-[white] text-[20px] font-semibold py-2"
            >
                <IoMdStar />
            </CardItem>
            <CardItem
                translateZ={20}
                as="p"
                className="dark:text-[#EFD372] text-[white] text-[20px] font-semibold py-2"
            >
                <IoMdStar />
            </CardItem>
            <CardItem
                translateZ={20}
                as="p"
                className="dark:text-[#EFD372] text-[white] text-[20px] font-semibold py-2"
            >
                <IoMdStar />
            </CardItem>
            <CardItem
                translateZ={20}
                as="p"
                className="dark:text-[#EFD372] text-[white] text-[20px] font-semibold py-2"
            >
                <IoMdStar />
            </CardItem>
            <CardItem
                translateZ={20}
                as="p"
                className="dark:text-[#EFD372] text-[white] text-[20px] font-semibold py-2"
            >
                <IoMdStar />
            </CardItem>
          </CardItem>
          <CardItem
            translateZ={20}
            as="p"
            className="dark:text-black text-white text-[20px] font-semibold py-2"
          >
            #2000
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
