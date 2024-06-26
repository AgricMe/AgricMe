import Image from "next/image";
import React from "react";

import image from "@/public/icons/firstscetionicons/image.svg";
import firstIcon from "@/public/icons/firstscetionicons/first-icon.png";
import secondIcon from "@/public/icons/firstscetionicons/second-icon.png";

// FONTS
import { Yellowtail } from "next/font/google";
const yelllowTail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
});

const FirstSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 px-9 bg-[#7EB6934D]">
      {/* <section>
      </section> */}
      <div className="relative lg:w-[50vw] max-w-[875px] aspect-[5/4]">
        <Image src={image} alt="first section" fill />
      </div>
      {/* <section>
        <article className="topp"> */}
      <div className="flex flex-col justify-center items-center lg:items-start p-5 lg:w-1/2 max-w-[700px]">
        <span
          className={`${yelllowTail.className} text-[#7EB693]`}
          style={{ fontSize: "clamp(17px, 2vw, 36px)" }}
        >
          About Us
        </span>
        <span
          className="mb-4 text-[#274C5B]"
          style={{ fontSize: "clamp(23px, 3vw, 50px)" }}
        >
          A Social Platform for Farmers
        </span>
        <span
          className="leading-7 mb-4 text-[#525C60]"
          style={{ fontSize: "clamp(8.5px, 1vw, 18px)" }}
        >
          Agricme is a pioneering social platform exclusively designed to unite
          farmers, fostering a robust community-driven network within the
          agricultural landscape. Our platform serves as a digital hub,
          providing farmers with the tools and resources to connect,
          collaborate, and thrive together.
        </span>
        {/* </article>
        <article className="middlee"> */}
        <div className="flex flex-col !gap-[50px]">
          <div className="first flex items-start">
            <div>
              <Image
                src={firstIcon}
                alt="first section"
                width={46}
                height={38}
              />
            </div>
            <div>
              <span style={{ fontSize: "clamp(12px, 2vw, 25px)" }}>
                Community-Driven
              </span>
              <span style={{ fontSize: "clamp(8.5px, 2vw, 18px)" }}>
                Agricme brings farmers together, creating a supportive network
                where members can share experiences and grow collectively.
              </span>
            </div>
          </div>
          <div className="first flex items-start">
            <div>
              <Image
                src={secondIcon}
                alt="first section"
                width={46}
                height={38}
              />
            </div>
            <div>
              <span style={{ fontSize: "clamp(12px, 2vw, 25px)" }}>
                Trade and Commerce
              </span>
              <span style={{ fontSize: "clamp(8.5px, 2vw, 18px)" }}>
                Agricme facilitates efficient trade, allowing farmers to buy,
                sell, and exchange goods and services within the community.
              </span>
            </div>
          </div>
        </div>
        {/* </article>
        <article className="bottomm"> */}
        <button className="py-7 px-8 mt-[50px] flex items-center gap-[10px] text-xl text-white rounded-2xl bg-black">
          Shop now
          <svg
            width="9"
            height="8"
            viewBox="0 0 9 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.4769 1.12891L7.87144 4.19342L4.4769 7.25794M7.39998 4.19342H0.516602"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* </article> 
      </section> */}
    </div>
  );
};

export default FirstSection;
