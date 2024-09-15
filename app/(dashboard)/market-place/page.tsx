"use client";
import React, { useState } from "react";
import Nav from "@/components/dashboard/Nav";
import { productsData } from "@/utils/data";
import MarketProduct from "@/components/dashboard/MarketProduct";
import SelectField from "@/components/forms/selectField";
import { Courgette } from "next/font/google";

const cursive = Courgette({
  subsets: ["latin"],
  weight: "400",
});

const Page = () => {
  const [page, setPage] = useState<string>();
  const [sort, setSort] = useState<string>();
  return (
    <section className="pb-10 px-1">
      <div className="bg-[#fff] pb-2 px-1.5">
        <Nav />
      </div>
      <div className="bg-[#eff6f1] min-h-screen py-8 px-4 md:px-8 lg:px-[3.5rem]">
        <div className="flex justify-between items-center pb-8">
          <div className="w-full flex flex-col">
            <h1
              className={`text-[1.05rem] md:text-[1.55rem] text-gray-500 ${cursive.className}`}
            >
              Lorem ipsum dolor sit amet
            </h1>
            <h3
              className={`text-[.85rem] md:text-[1.1rem] text-green-500 ${cursive.className}`}
            >
              dolor sit amet
            </h3>
          </div>
          <div className="w-full flex justify-between items-center gap-8">
            <SelectField
              label="Per Page"
              value={page}
              LabelProps={{
                className: "w-full !text-[.9rem] my-auto font-[500]",
              }}
              flex={true}
              onChange={(e) => setPage(e.target.value)}
            >
              <option value={"Select-Page"} disabled>
                Select Page
              </option>
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
            </SelectField>

            <SelectField
              label="Sort By"
              value={sort}
              LabelProps={{
                className: "w-full !text-[.9rem] my-auto font-[500]",
              }}
              onChange={(e) => setSort(e.target.value)}
              flex={true}
            >
              <option value={"Select-Page"} disabled>
                Sort By
              </option>
              <option value={"Best Match"}>Best Match</option>
            </SelectField>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productsData.map((product) => {
            return <MarketProduct key={product.id} {...product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Page;
