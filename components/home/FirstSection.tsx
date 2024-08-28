"use client";
import Image from "next/image";
import React from "react";
import AnimatedSection from "../subcomponents/AnimatedSection";

const FirstSection = () => {
  return (
    <div className="bg-[#1b3e32] relative flex justify-center items-center rounded-tl-[50px] rounded-tr-[50px] h-full lg:h-[650px] text-[rgb(216,233,233)] py-[3rem] lg:py-0 px-[1.5rem] md:px-[3rem] lg:px-[4rem]">
      <AnimatedSection />
    </div>
  );
};

export default FirstSection;
