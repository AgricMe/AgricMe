"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";
import { RiCommunityFill } from "react-icons/ri";
import { GiSatelliteCommunication } from "react-icons/gi";
import { GiTrade } from "react-icons/gi";
import { GiGiftOfKnowledge } from "react-icons/gi";

const AnimatedSection = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevIsVisible) => !prevIsVisible);
    }, 7000);

    return () => clearInterval(interval);
  }, [isVisible]);
  return (
    <div className="relative w-full flex justify-between flex-col-reverse lg:flex-row-reverse overflow-hidden">
      <section
        className={`w-full lg:w-[47%] relative ease-in-out duration-[0.6s] ${
          isVisible ? "left-0 opacity-100" : "left-[103%] opacity-0"
        }`}
      >
        <Image
          src="/component-images/about-us-img.jpeg"
          alt="first section"
          width={600}
          height={0}
          className="w-full lg:w-[600px]"
        />
      </section>
      <section
        className={`relative flex flex-col justify-center gap-[20px] w-full lg:w-[50%] ease-in-out duration-[0.6s] ${
          isVisible ? "left-0 opacity-100" : "left-[-103%] opacity-0"
        } mb-12 lg:mb-0`}
      >
        <article className="topp">
          <span className="text-[24px] md:text-[36px]">About Us</span>
          <span className="text-[35px] md:text-[50px]">Why Agric Me?</span>
          <span className="mb-8 md:mb-0">
            Agricme is a pioneering social platform exclusively designed to
            unite farmers, fostering a robust community-driven network within
            the agricultural landscape. Our platform serves as a digital hub,
            providing farmers with the tools and resources to connect,
            collaborate, and thrive together.
          </span>
        </article>
        <article className="flex flex-col gap-[20px]">
          <div className="first h-auto flex justify-start items-start gap-[19px] mb-3 md:mb-0">
            <div className="p-1.5">
              <RiCommunityFill className="community-icon" />
            </div>
            <div>
              <span>Community-Driven</span>
              <span>
                Agricme brings farmers together, creating a supportive network
                where members can share experiences and grow collectively.
              </span>
            </div>
          </div>
          <div className="first h-auto flex justify-start items-start gap-[19px]">
            <div className="p-1.5">
              <GiSatelliteCommunication className="community-icon" />
            </div>
            <div>
              <span>Streamlined Communication</span>
              <span>
                Our user-centric interface simplifies communication, making it
                easier for farmers to connect and collaborate.
              </span>
            </div>
          </div>
        </article>
        <article className="bottomm mt-2.5">
          <button>
            <div>
              <span>Connect Now</span>
              <span>
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
              </span>
            </div>
          </button>
        </article>
      </section>

      <section
        className={`w-full lg:w-[47%] absolute duration-[0.5s] ease-in-out ${
          isVisible ? "left-[-103%] w-full lg:w-[47%]" : "left-0 opacity-100"
        }`}
      >
        <Image
          src="/component-images/about-img-2.jpeg"
          alt="first section"
          width={600}
          height={0}
          className="w-full lg:w-[600px]"
        />
      </section>
      <section
        className={`absolute top-0 flex flex-col justify-center gap-[20px] w-full lg:w-[50%] ease-in-out duration-[0.5s] ${
          isVisible
            ? "left-[103%] opacity-0"
            : "left-0 lg:left-[51%] opacity-100"
        }`}
      >
        <article className="topp">
          <span className="text-[24px] md:text-[36px]">About Us</span>
          <span className="text-[35px] md:text-[50px]">Why Choose us?</span>
          <span className="mb-8 md:mb-0">
            Agricme revolutionizes the way farmers engage with each other and
            the broader agricultural ecosystem. By providing a platform for
            seamless interaction, we empower farmers to achieve greater success
            and sustainability.
          </span>
        </article>
        <article className="flex flex-col gap-[20px]">
          <div className="first h-auto flex justify-start items-start gap-[19px] mb-3 md:mb-0">
            <div className="p-1.5">
              <GiTrade className="community-icon" />
            </div>
            <div>
              <span>Trade and Commerce</span>
              <span>
                Agricme facilitates efficient trade, allowing farmers to buy,
                sell, and exchange goods and services within the community.
              </span>
            </div>
          </div>
          <div className="first h-auto flex justify-start items-start gap-[19px]">
            <div className="p-1.5">
              <GiGiftOfKnowledge className="community-icon" />
            </div>
            <div>
              <span>Knowledge sharing</span>
              <span>
                Access valuable insights, tips, and best practices from fellow
                farmers and agricultural experts.
              </span>
            </div>
          </div>
        </article>
        <article className="bottomm mt-2.5">
          <button>
            <div>
              <span>Shop now</span>
              <span>
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
              </span>
            </div>
          </button>
        </article>
      </section>
    </div>
  );
};

export default AnimatedSection;
