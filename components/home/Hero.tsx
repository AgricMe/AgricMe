"use client";
import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import "../css/home.css";
import heroImg from "@/public/component-images/butcher-image.jpg";

import Button from "../shared/Button";

import { Yellowtail, Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});
const yelllowTail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  const router = useRouter();
  return (
    <div className="relative flex justify-center items-center md:justify-end py-20">
      <div className="2xl:w-[85vw] w-[90vw] px-10 flex justify-center items-end md:justify-between">
        <div className="hero-btn-txt w-[27%] max-w-[530px] md:pb-8 flex flex-col gap-6">
          <div>
            <p
              className={`custom-txt text-lightgreen ${yelllowTail.className}`}
            >
              Welcome to Agricme
            </p>
            <h2 className={`${roboto.className} font-extrabold w-4/5`}>
              {/* <br className="hidden md:block lg:hidden" />{" "} */}
              {/* <br className="hidden md:block lg:hidden" /> */}
              Empowering Farmers, Building Communities
            </h2>
          </div>
          <div className="flex gap-2 lg:gap-4">
            <Button
              click={() => router.push("/signup")}
              clas={"yellow-btn py-[15px] px-[21px] 2xl:py-[28px] 2xl:px-10"}
              text={"Sign up"}
            />
            <Button
              click={() => router.push("/login")}
              clas={"green-btn py-[15px] px-[21px] 2xl:py-[28px] 2xl:px-10"}
              text={"Login"}
            />
          </div>
        </div>
        <div className="relative hidden md:block aspect-[5/4] 2xl:h-[675px] max-w-[907px] w-1/2">
          <div className="hero-border absolute h-full -top-[34px]"></div>
          <div className="absolute h-full w-full top-[0] left-[40px]">
            <Image className="" src={heroImg} alt="hero-img" fill priority />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
