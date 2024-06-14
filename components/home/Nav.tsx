import React from "react";
import "../css/home.css";
import Link from "next/link";
import { Roboto } from "next/font/google";
import "../css/home.css";
import Image from "next/image";
const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

const Nav = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-10/12 max-w-[1596px] h-[36px] lg:h-24 2xl:h-[175px] flex items-center justify-between">
        <Link href={"/"} className="relative h-[37px] w-[160px]">
          <Image src="/logo/agricme-logo.png" alt="logo" fill />
        </Link>
        <div className="flex justify-between w-[38vw] max-w-[621px] h-fit">
          <Link
            href={"/"}
            className={`nav-link text-[#274C5B] leading-6 font-bold ${roboto.className}`}
          >
            Home
          </Link>
          <Link
            href={"/"}
            className={`nav-link text-[#274C5B] leading-6 font-bold ${roboto.className}`}
          >
            About
          </Link>
          <Link
            href={"/"}
            className={`nav-link text-[#274C5B] leading-6 font-bold ${roboto.className}`}
          >
            Services
          </Link>
          <Link
            href={"/"}
            className={`nav-link text-[#274C5B] leading-6 font-bold ${roboto.className}`}
          >
            Product
          </Link>
          <Link
            href={"/"}
            className={`nav-link text-[#274C5B] leading-6 font-bold ${roboto.className}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
