"use client";
import React, { useState } from "react";
import Nav from "@/components/dashboard/Nav";
import { Courgette } from "next/font/google";
import { cartItemsData } from "@/utils/data";
import Image from "next/image";
import { CartItem } from "@/schema/interfaces";
import avatar from "@/public/dashboard/avatar1.jpg";
import { BsSendFill } from "react-icons/bs";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaVideo } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import OrderCompletionModal from "@/components/dashboard/OrderCompletionModal";

const cursive = Courgette({
  subsets: ["latin"],
  weight: "400",
});

const Page = () => {
  const [product, setProduct] = useState<CartItem>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      {isModalOpen && <OrderCompletionModal />}
      <section className="pb-10 px-1">
        <div className="bg-[#fff] pb-2 px-1.5">
          <Nav />
        </div>
        <div className="bg-[#eff6f1] min-h-screen py-8 px-2 md:py-0 md:px-4 md:pl-8 lg:pl-[3.5rem]">
          <div className="w-full flex flex-col lg:flex-row gap-8">
            <div className="w-full flex flex-col md:py-8">
              <div className="flex justify-between items-start mb-6">
                <p
                  className={`basis-[40%] text-[1.15rem] text-gray-400 ${cursive.className}`}
                >
                  Product
                </p>
                <p
                  className={`basis-[17%] text-[1.15rem] text-gray-400 text-center ${cursive.className}`}
                >
                  Price
                </p>
                <p
                  className={`basis-[21%] text-[1.15rem] text-gray-400 text-center ${cursive.className}`}
                >
                  Quantity
                </p>
                <p
                  className={`basis-[17%] text-[1.15rem] text-gray-400 text-center ${cursive.className}`}
                >
                  Total
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {cartItemsData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={`flex justify-between items-center cursor-pointer py-3 px-2 md:px-4 rounded-md ${
                        product === item && "bg-[#EFD37250]"
                      }`}
                      onClick={() => setProduct(item)}
                    >
                      <div className="basis-[40%] flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4">
                        <div className="relative bg-[#fff] p-4 rounded-md shadow-md">
                          <Image
                            src={item.img}
                            alt={item.name}
                            width={50}
                            height={50}
                          />
                          <MdCancel
                            size={17}
                            className="absolute top-[-4%] right-[-4%] text-[#000] cursor-pointer"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5 ml-2 mt-2 md:ml-0 md:mt-0">
                          <h3
                            className={`text-[.95rem] text-gray-400 ${cursive.className}`}
                          >
                            {item.name}
                          </h3>
                          <p
                            className={`hidden md:block text-[.8rem] text-gray-400`}
                          >
                            Color:
                          </p>
                          <p
                            className={`hidden md:block text-[.8rem] text-gray-400`}
                          >
                            Size:
                          </p>
                        </div>
                      </div>
                      <p className="basis-[17%] text-[.95rem] text-gray-400 text-center">
                        {item.price}
                      </p>
                      <p className="basis-[21%] text-[.95rem] text-gray-400 text-center">
                        {item.quantity}
                      </p>
                      <p className="basis-[17%] text-[.95rem] text-gray-400 text-center">
                        {item.total}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="w-full flex justify-between items-center mt-10">
                <button
                  type="button"
                  className="bg-[#274C5B] text-[#fff] px-2.5 md:px-4 py-2 rounded-md"
                >
                  Update Cart
                </button>
                <button
                  type="button"
                  className="bg-[#274C5B] text-[#fff] px-2.5 md:px-4 py-2 rounded-md"
                >
                  Clear Cart
                </button>
                <button
                  type="button"
                  className="bg-[#274C5B] text-[#fff] px-2.5 md:px-4 py-2 rounded-md"
                  onClick={() => setIsModalOpen(true)}
                >
                  Checkout
                </button>
              </div>
            </div>
            {product && (
              <div className="w-full lg:w-[45vw] flex flex-col bg-[#F9F8F8] px-2.5 md:px-4 py-[4rem]">
                <div className="w-full h-auto flex items-center gap-3 md:gap-6">
                  <div className="w-full h-[172px] lg:h-full flex justify-center items-center bg-[#F9F8F8] p-4 rounded-md shadow-md cursor-pointer">
                    <Image
                      src={product.img}
                      alt={product.name}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="w-full relative flex flex-col items-center bg-[#fff] p-2 rounded-md shadow-md cursor-pointer">
                    <Image
                      src={avatar}
                      alt={"seller-img"}
                      width={100}
                      height={100}
                    />
                    <div className="absolute top-[46%] right-[30%] w-4 h-4 bg-green-700 border-2 border-[#fff] rounded-full"></div>
                    <p className="text-[.85rem] text-[#333] text-center font-bold py-2">
                      Ronald Richards
                    </p>
                    <div className="flex gap-4 cursor-pointer">
                      <BsSendFill size={20} className="text-[#333]" />
                      <p className="text-[.85rem] text-[#333]">Message</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 mt-8">
                  <h3
                    className={`text-[1.05rem] text-gray-400 ${cursive.className} mb-3`}
                  >
                    {product.name}
                  </h3>
                  <p className={`text-[.8rem] text-gray-400`}>Color:</p>
                  <p className={`text-[.8rem] text-gray-400`}>Size:</p>
                </div>
                <div className="flex flex-col gap-3 mt-8">
                  <div className="flex gap-[8rem]">
                    <h3 className={`text-[.9rem] text-[#15245E]`}>Price</h3>
                    <p className={`text-[.8rem] text-gray-400`}>
                      {product.price}
                    </p>
                  </div>
                  <div className="flex gap-[8rem]">
                    <h3 className={`text-[.9rem] text-[#15245E]`}>Units</h3>
                    <p className={`text-[.8rem] text-gray-400`}>
                      {product.quantity}
                    </p>
                  </div>
                  <div className="flex gap-[6rem]">
                    <h3 className={`text-[.9rem] text-[#15245E]`}>
                      Total Price
                    </h3>
                    <p className={`text-[.8rem] text-gray-400`}>
                      {product.total}
                    </p>
                  </div>
                </div>
                <p className={`text-[.85rem] text-[#222] my-12 text-center`}>
                  Put a call through to complete this transaction
                </p>
                <div className="flex items-center gap-2 md:gap-8">
                  <div className="w-full h-[70px] flex justify-center items-center bg-gradient-to-r from-customBlue to-customPink rounded-xl cursor-pointer">
                    <div className="border border-[#fff] rounded-full p-2">
                      <PiPhoneCallFill size={30} className="text-green-500" />
                    </div>
                  </div>
                  <div className="w-full h-[70px] flex justify-center items-center bg-gradient-to-r from-customDeepBlue to-customLightBlue rounded-xl cursor-pointer">
                    <div className="border border-[#fff] rounded-full p-2">
                      <FaVideo size={30} className="text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
