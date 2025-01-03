import React from "react";
import { ProductCard } from "./ProductCard";
import { trendingProductsData } from "@/lib/data/data";
const Products = () => {
  return (
    <div
      id="products"
      className="flex justify-center mt-10 mb-12 flex-col items-center  px-[1.5rem] md:px-[3rem] lg:px-[4rem]"
    >
      <div>
        <h2 className="font-bold text-black text-2xl pb-8 text-center">
          View The Trending Products
        </h2>
      </div>
      <div className="w-full grid grid-cols-2 gap-2 md:gap-[2rem] lg:flex lg:justify-between lg:flex-wrap">
        {trendingProductsData.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
