import React from "react";
import bg from "@/public/component-images/Agricme-logo-bg.png";

type textVariant = {
  text: String;
  small: String;
};

export default function LeftSection({ text, small }: textVariant) {
  return (
    <>
      <div
        className="side-display h-[90vh] aspect-[5/9.3] flex flex-col items-start justify-center overflow-hidden px-6"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-start leading-tight text-black text-[50px] font-extrabold">
          {text}
        </h1>
        <p className="text-start leading-tight text-black font-semibold">
          {small}
        </p>
      </div>
    </>
  );
}
