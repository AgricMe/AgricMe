"use client";

import React, { useState } from "react";
import "../css/home.css";
import Link from "next/link";
import "../css/home.css";
import Image from "next/image";
import Button from "../shared/Button";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <div className="relative flex justify-center items-center h-[60px] md:h-[90px] px-[1.5rem] md:px-[3rem] lg:px-[4rem] z-50">
      <div className="w-full flex justify-between">
        <Image
          src="/logo/agricme-logo.png"
          alt="logo"
          width={160}
          height={36.91}
          className="w-[100px] md:w-[160px]"
        />
        <div className="lg:flex hidden justify-between items-center w-[50%]">
          <Link href={"/#home"} className={`text-[17px] text-[#274c5b]`}>
            Home
          </Link>
          <Link href={"/#about"} className={`text-[17px] text-[#274c5b] `}>
            About
          </Link>
          <Link href={"/#services"} className={`text-[17px] text-[#274c5b]`}>
            Services
          </Link>
          <Link href={"/#products"} className={`text-[17px] text-[#274c5b] `}>
            Product
          </Link>
          <Link href={"/#contact"} className={`text-[17px] text-[#274c5b] `}>
            Contact
          </Link>
        </div>
        <div className="flex lg:hidden duration-500">
          {toggleMenu ? (
            <RiCloseLine
              size={27}
              className="text-[#367b63] cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              size={27}
              className="text-[#367b63] cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
      </div>
      {toggleMenu && (
        <ul className="w-full h-auto absolute top-[100%] left-0 bg-[#f6f8fb] flex flex-col px-6 py-4 md:py-8 shadow-md text-center z-50">
          <Link
            href={"/#home"}
            className={`hover:bg-[#1b3e32] hover:text-[#fff] py-2.5 md:py-4 px-6 rounded-lg text-[1.1rem] md:text-[1.4rem] text-[#274c5b] mb-4 duration-300`}
          >
            Home
          </Link>
          <Link
            href={"/#about"}
            className={`hover:bg-[#1b3e32] hover:text-[#fff] py-2.5 md:py-4 px-6 rounded-lg text-[1.1rem] md:text-[1.4rem] text-[#274c5b] mb-4 duration-300`}
          >
            About
          </Link>
          <Link
            href={"/#services"}
            className={`hover:bg-[#1b3e32] hover:text-[#fff] py-2.5 md:py-4 px-6 rounded-lg text-[1.1rem] md:text-[1.4rem] text-[#274c5b] mb-4 duration-300`}
          >
            Services
          </Link>
          <Link
            href={"/#products"}
            className={`hover:bg-[#1b3e32] hover:text-[#fff] py-2.5 md:py-4 px-6 rounded-lg text-[1.1rem] md:text-[1.4rem] text-[#274c5b] mb-4 duration-300`}
          >
            Product
          </Link>
          <Link
            href={"/#contact"}
            className={`hover:bg-[#1b3e32] hover:text-[#fff] py-2.5 md:py-4 px-6 rounded-lg text-[1.1rem] md:text-[1.4rem] text-[#274c5b] duration-300`}
          >
            Contact
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Nav;
