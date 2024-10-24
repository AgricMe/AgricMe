import React from "react";
import Link from "next/link";
import "../css/home.css";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
const Hero = () => {
  return (
    <div
      id="home"
      className="flex justify-center relative py-[4rem] lg:py-0 px-[1.5rem] md:px-[3rem] lg:px-[4rem] z-30"
    >
      <div className="w-full h-full lg:h-[500px] flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-[50%] mb-[4rem] lg:mb-0 text-start">
          <p className="font-bold text-[1.05rem] text-[#274C5B]/70">
            A Robust Agricultural Platform
          </p>
          <h2 className="text-[35px] md:text-[33px] text-[#274c5b] w-full lg:w-[90%] font-bold my-4 lg:my-0">
            Connecting a Global market and bringing visibility
          </h2>
          <div className="flex justify-start items-center">
            <Link href={"/signup"}>
              <button
                className={cn(
                  "px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden",
                  "bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn green-btn py-3 px-6 rounded-lg"
                )}
              >
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                  Get Started
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20 yellow-btn">
                  Join Us
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <div className="relative">
            <div className="hero-border"></div>
            <Image
              src="/component-images/hero-img.jpeg"
              alt="hero-img"
              width={650}
              height={400}
              className="w-full lg:w-[650px] h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
