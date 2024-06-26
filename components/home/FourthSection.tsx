import Image from "next/image";

import butcher from "@/public/component-images/hero-image.jpg";

const FourthSection = () => {
  return (
    <>
      <div className="relative" style={{ height: "clamp(190px, 90vw, 930px)" }}>
        {/* <div> */}
        <div className="relative md:w-1/2 md:h-full h-3/4">
          <Image
            src={butcher}
            alt="butcher-image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* </div> */}
        <div className="flex flex-col items-start absolute md:top-0 bottom-0 my-auto right-0 left-0 md:left-auto mx-auto md:mx-0 rounded-xl p-10 md:py-10 xl:py-20 md:pl-[90px] w-3/5 md:h-3/4 bg-[#EFD37233]">
          <div>
            <p style={{ fontSize: "clamp(8.5px, 3vw, 36px)" }}>Eco Friendly</p>
            <h3
              className="text-black mt-[15px]"
              style={{ fontSize: "clamp(12px, 4vw, 50px)" }}
            >
              AgricMe is a Dummie Text
            </h3>
          </div>
          <div className="mt-[15px]">
            <div className="mt-[10px]">
              <h4
                className="mb-[10px] text-black"
                style={{ fontSize: "clamp(6px, 2vw, 25px)" }}
              >
                Start with Our Company First
              </h4>
              <p style={{ fontSize: "clamp(4px, 1.5vw, 18px)" }}>
                Become part of a thriving community of farmers. Sign up now to
                start connecting, collaborating, and growing with Agricme.
              </p>
            </div>
            <div className="mt-[10px]">
              <h4
                className="mb-[10px] text-black"
                style={{ fontSize: "clamp(6px, 2vw, 25px)" }}
              >
                Start with Our Company First
              </h4>
              <p style={{ fontSize: "clamp(4px, 1.5vw, 18px)" }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div className="mt-[10px]">
              <h4
                className="mb-[10px] text-black"
                style={{ fontSize: "clamp(6px, 2vw, 25px)" }}
              >
                Start with Our Company First
              </h4>
              <p style={{ fontSize: "clamp(4px, 1.5vw, 18px)" }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthSection;
