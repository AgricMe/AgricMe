"use client";
import Image from "next/image";
import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../subcomponents/ProductCardAnimated";
import { IoMdStar } from "react-icons/io";
import { MarketProduct as IProduct } from "@/schema/interfaces";

export function ProductCard({ name, img, price }: IProduct) {
  return (
    <CardContainer className="inter-var w-[100%]">
      <CardBody className="bg-[#367b63] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[white] dark:border-white/[0.2] border-black/[0.1] w-full sm:w-full h-auto rounded-xl p-2 md:p-6 border product-cont">
        <CardItem translateZ="100" className="w-full">
          <Image
            src={img}
            height={180}
            width={180}
            className="h-[180px] w-full object-cover rounded-xl group-hover/card:shadow-xl bg-[#f6f8fb]"
            alt={name}
          />
        </CardItem>
        <div className="flex justify-center items-center mt-5 flex-col">
          <CardItem
            translateZ={20}
            as="p"
            className="dark:text-black text-[1rem] md:text-[1.15rem] text-white text-xs font-semibold py-2"
          >
            {name}
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
            className="dark:text-black text-white text-[15px] md:text-[18px] font-semibold py-2"
          >
            {price}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
