"use client";
import React, { useState } from "react";
import Nav from "@/components/dashboard/Nav";
import { productsData } from "@/utils/data";
import MarketProduct from "@/components/dashboard/MarketProduct";
import SelectField from "@/components/forms/selectField";
import { Courgette } from "next/font/google";
import { MdGridView, MdViewList } from "react-icons/md";

const cursive = Courgette({
  subsets: ["latin"],
  weight: "400",
});

const Page = () => {
  const [page, setPage] = useState<string>();
  const [sort, setSort] = useState<string>();
  const [grid, setGrid] = useState<boolean>(true);
  return (
    <section className="pb-10 px-1">
      <div className="bg-[#fff] pb-2 px-1.5">
        <Nav />
      </div>
      <div className="bg-[#eff6f1] min-h-screen py-8 px-4 md:px-8 lg:px-[3.5rem]">
        <div className="flex flex-col lg:flex-row justify-between items-center pb-8">
          <div className="w-full flex flex-row justify-between items-center lg:items-start lg:flex-col mb-6 lg:mb-0">
            <h1
              className={`text-[.95rem] md:text-[1.3rem] lg:text-[1.55rem] text-gray-500 font-normal ${cursive.className}`}
            >
              E-commerce Accessories & Fashion Items
            </h1>
            <h3
              className={`text-[.8rem] md:text-[1rem] lg:text-[1.1rem] text-green-500 font-normal ${cursive.className}`}
            >
              About 9,620 results
            </h3>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
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
            <div className="flex gap-4 justify-center items-center md:justify-start md:items-start">
              <p className={`text-[.9rem]`}>View:</p>
              <div className="flex gap-2">
                <MdGridView
                  size={18}
                  onClick={() => setGrid(true)}
                  className={`${
                    grid && "text-green-600"
                  } cursor-pointer duration-300`}
                />
                <MdViewList
                  size={18}
                  onClick={() => setGrid(false)}
                  className={`${
                    !grid && "text-green-600"
                  } cursor-pointer duration-300`}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`grid ${
            grid ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" : "grid-cols-1"
          } gap-8 duration-300`}
        >
          {productsData.map((product) => {
            return <MarketProduct key={product.id} {...product} grid={grid} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Page;
