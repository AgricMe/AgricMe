import Image from "next/image";
import React from "react";

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
        <Image
          src="/icons/firstscetionicons/image.svg"
          alt="first section"
          fill
        />
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
          We Believe in Dummie Text
        </span>
        <span
          className="leading-7 mb-4 text-[#525C60]"
          style={{ fontSize: "clamp(8.5px, 1vw, 18px)" }}
        >
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry &apos; s standard dummy text ever since
          the 1500s, when an unknown printer took a galley.
        </span>
        {/* </article>
        <article className="middlee"> */}
        <div className="flex flex-col !gap-[30px]">
          <div className="first flex">
            <div>
              <Image
                src="/icons/firstscetionicons/first-icon.png"
                alt="first section"
                width={46}
                height={38}
              />
            </div>
            <div>
              <span style={{ fontSize: "clamp(12px, 2vw, 25px)" }}>
                Organic Foods Only
              </span>
              <span style={{ fontSize: "clamp(8.5px, 2vw, 18px)" }}>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </span>
            </div>
          </div>
          <div className="first flex">
            <div>
              <Image
                src="/icons/firstscetionicons/second-icon.png"
                alt="first section"
                width={46}
                height={38}
              />
            </div>
            <div>
              <span style={{ fontSize: "clamp(12px, 2vw, 25px)" }}>
                Organic Foods Only
              </span>
              <span style={{ fontSize: "clamp(8.5px, 2vw, 18px)" }}>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </span>
            </div>
          </div>
        </div>
        {/* </article>
        <article className="bottomm"> */}
        <button className="py-7 px-8 mt-[46px] flex items-center gap-[10px] text-xl text-white rounded-2xl bg-black">
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
