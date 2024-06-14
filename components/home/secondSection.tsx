import Image from "next/image";
import image1 from "@/public/icons/secondSections/image1.jpg";
import image2 from "@/public/icons/secondSections/image2.jpg";

// FONTS
import { Yellowtail, Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});
const yelllowTail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
});

const SecondSection = () => {
  return (
    <section className="blog">
      <div className="w-11/12 lg:w-9/12">
        <div className="blogTop">
          <span className={`tail text-lightgreen ${yelllowTail.className}`}>
            News
          </span>
          <div>
            <span className={`w-1/2 ${roboto.className}`}>
              Discover weekly content about organic food, & more
            </span>
            <button className="bottom 2xl:py-[28px] 2xl:px-11 py-2 px-3">
              <span className="lg:text-xl whitespace-nowrap">More news</span>
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
        <div className="blogMid pt-3 pb-12 overflow-x-auto">
          <article
            className="min-w-72 max-w-[677px] w-[48%] aspect-[5/4]"
            style={{
              backgroundImage: `url(${image1.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <span className="aspect-square p-1 px-3 2xl:px-6 2xl:p-2 text-black">
                25 <br /> Nov
              </span>
            </div>
            <div className="-bottom-[2rem] 2xl:-bottom-7 flex flec-col justify-between h-4/6 p-4 2xl:p-10">
              <span>
                <Image
                  src="/icons/secondSections/Vectorperson.png"
                  alt="admin"
                  width={15}
                  height={15}
                />
                <span>By Rachi Card</span>
              </span>
              <span>The Benefits of Vitamin D & How to Get It</span>
              <span>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </span>
              <button className="2xl:w-56 2xl:h-20 md:w-32 md:h-10 w-24 h-6">
                Read More
              </button>
            </div>
          </article>
          <article
            className="min-w-72 max-w-[677px] w-[48%] aspect-[5/4]"
            style={{
              backgroundImage: `url(${image2.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <span className="aspect-square p-1 px-3 2xl:px-6 2xl:p-2 text-black">
                25 <br /> Nov
              </span>
            </div>
            <div className="-bottom-[2rem] 2xl:-bottom-7 flex flex-col justify-between h-4/6 2xl:p-10 p-4">
              <span>
                <Image
                  src="/icons/secondSections/Vectorperson.png"
                  alt="admin"
                  width={15}
                  height={15}
                />
                <span>By Rachi Card</span>
              </span>
              <span>The Benefits of Vitamin D & How to Get It</span>
              <span>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </span>
              <button className="2xl:w-56 2xl:h-20 md:w-32 md:h-10 w-24 h-6">
                Read More
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
