import React from "react";
import Nav from "@/components/dashboard/Nav";
import Products from "@/components/home/Products";
const page = () => {
  return (
    <div className="pl-3">
      <Nav />
      <Products />
    </div>
  );
};

export default page;
