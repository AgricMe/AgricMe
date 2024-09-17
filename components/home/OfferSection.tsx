"use client";
import React from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { HoverEffect } from "../subcomponents/CardHoverEffect";
const OfferSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${0} ${1}`, `${1.33} ${1}`],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const offers = [
    {
      title: "Social Networking and Collaboration",
      description: "Empowering farmers by offering a social space to network.",
      link: "#",
    },
    {
      title: "Market Access and Authenticity",
      description: "Enabling market access for local farmers.",
      link: "#",
    },
    {
      title: "Supportive Community",
      description:
        "Building a supportive community where knowledge-sharing, ethical practices, and economic growth thrive.",
      link: "#",
    },
    {
      title: "Economic Growth and Sustainability",
      description:
        "Supporting sustainable farming methods that benefit both the environment and the community.",
      link: "#",
    },
    {
      title: "Interconnected Farming Community",
      description:
        "Fostering relationships between farmers, consumers, and stakeholders for mutual benefit.",
      link: "#",
    },
    {
      title: "Education and Training",
      description:
        "Enhancing skills and knowledge in modern farming techniques and business practices.",
      link: "#",
    },
  ];

  return (
    <div
      id="services"
      className="flex justify-center bg-[#fff] px-[1.5rem] md:px-[3rem] lg:px-[4rem]"
    >
      <motion.div
        className="w-full bg-[#1b3e32] rounded-[20px] my-[10px] pb-0 md:pb-[20px]"
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
      >
        <div className="offers h-[270px] w-full flex justify-center items-center text-[#fff]">
          <div className="flex flex-col items-center gap-[15px]">
            <h1 className="text-[50px] font-bold text-center">What we Offer</h1>
            <p>Better Agriculture for Better Future</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[95%]">
            <HoverEffect items={offers} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OfferSection;
