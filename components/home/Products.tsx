import React from "react";
import { ProductCard } from "./ProductCard";
const Products = () => {
  return (
    <div className="flex justify-center mt-10 mb-12 flex-col items-center  px-[1.5rem] md:px-[3rem] lg:px-[4rem]">
      <div>
        <h2 className="font-bold text-black text-2xl pb-8 text-center">
          View The Trending Products
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[2rem] lg:flex lg:justify-between lg:flex-wrap">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
