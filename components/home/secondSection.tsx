import Image from "next/image";
import image1 from "@/public/icons/secondSections/image1.jpg";
import image2 from "@/public/icons/secondSections/image2.jpg";
const SecondSection = () => {
  return (
    <section className="w-full bg-[#fff] grid place-items-center pt-[3rem] md:py-[3rem] lg:py-0 px-[1.5rem] md:px-[3rem] lg:px-[4rem]">
      <section className="w-full pt-[20px] pb-[40px] flex gap-[46px] flex-col">
        <div className="flex gap-[9px] flex-col">
          <span className="text-[20px] text-[#7eb693] text-center md:text-start">
            News
          </span>
          <div className="flex flex-col md:flex-row items-center text-center md:text-start">
            <span className="mr-auto text-[28px] md:text-[35px] lg:text-[40px] text-[#274c5b] w-full md:max-w-[600px] font-bold">
              Discover weekly content about organic food, & more
            </span>
            <button className="bottom mt-2.5 md:mt-0">
              <span>More news</span>
              <div>
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
              </div>
            </button>
          </div>
        </div>
        <div className="blogMid flex flex-col lg:flex-row gap-[7rem] md:gap-[5rem] lg:gap-[46px]">
          <article
            style={{
              backgroundImage: `url(${image1.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="relative w-full h-[380px] md:h-[350px] rounded-[32px]"
          >
            <div>
              <span className="text-[18px] md:text-[20px]">25 Nov</span>
            </div>
            <div>
              <span className="text-[8px] mb-[3px] md:text-[13px] md:mb-[14px]">
                <Image
                  src="/icons/secondSections/Vectorperson.png"
                  alt="admin"
                  width={15}
                  height={15}
                />
                <span>By Rachi Card</span>
              </span>
              <span className="text-[15px] md:text-[18px] mb-[8px]">
                The Benefits of Vitamin D & How to Get It
              </span>
              <span>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </span>
              <button>Read More</button>
            </div>
          </article>
          <article
            style={{
              backgroundImage: `url(${image2.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="relative w-full h-[380px] md:h-[350px] rounded-[32px]"
          >
            <div>
              <span className="text-[18px] md:text-[20px]">25 Nov</span>
            </div>
            <div>
              <span className="text-[8px] mb-[3px] md:text-[13px] md:mb-[14px]">
                <Image
                  src="/icons/secondSections/Vectorperson.png"
                  alt="admin"
                  width={15}
                  height={15}
                />
                <span>By Rachi Card</span>
              </span>
              <span className="text-[15px] md:text-[18px] mb-[8px]">
                The Benefits of Vitamin D & How to Get It
              </span>
              <span>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </span>
              <button>Read More</button>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
};

export default SecondSection;
