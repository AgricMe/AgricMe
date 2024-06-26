import Image from "next/image";

// FONTS
import { Yellowtail } from "next/font/google";
const yelllowTail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
});

const ThirdSection = () => {
  return (
    <section className="sec flex flex-col items-center gap-6 py-10 ">
      <article className="top">
        <span className={`tail ${yelllowTail.className}`}>What we Offer</span>
        <span>Better Agriculture for Better Future</span>
      </article>
      <article className="art flex w-11/12 lg:w-4/5 md:gap-10 gap-2 justify-center">
        <div className="div w-[30%] ">
          <section className="sect">
            <article>
              <span>
                <Image
                  src="/icons/thirdSectionIcons/dairy-icon.png"
                  alt="groundnut"
                  fill
                />
                <div></div>
              </span>
              <h1>Community-Driven</h1>
              <span className="desc">
                Agricme brings farmers together, creating a supportive network
                where members can share experiences and grow collectively.
              </span>
            </article>
            <article>
              <span>
                <Image
                  src="/icons/thirdSectionIcons/store-service-icon.png"
                  alt="groundnut"
                  fill
                />
                <div></div>
              </span>
              <h1>Streamlined Communication</h1>
              <span className="desc">
                Our user-centric interface simplifies communication, making it
                easier for farmers to connect and collaborate.
              </span>
            </article>
            {/* <article>
              <span>
                <Image
                  src="/icons/thirdSectionIcons/delivery-icon.png"
                  alt="groundnut"
                  fill
                />
                <div></div>
              </span>
              <h1>lorem</h1>
              <span className="desc">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </span>
            </article> */}
          </section>
        </div>
        <div className="w-[40%] md:grid  hidden">
          {/*  */}
          <div className="relative my-auto aspect-[4/6]">
            <Image
              src="/icons/thirdSectionIcons/groundnut-img2.png"
              alt="groundnut"
              fill
            />
          </div>
        </div>
        <div className="div w-[30%] ">
          <section className="sect2">
            <article>
              <span>
                <Image
                  src="/icons/thirdSectionIcons/agricultural-service-icon.png"
                  alt="groundnut"
                  fill
                />
                <div></div>
              </span>
              <h1>Trade and Commerce</h1>
              <span className="desc2">
                Agricme facilitates efficient trade, allowing farmers to buy,
                sell, and exchange goods and services within the community.
              </span>
            </article>
            <article>
              <span>
                <Image
                  src="/icons/thirdSectionIcons/organic-product-icon.png"
                  alt="groundnut"
                  fill
                />
                <div></div>
              </span>
              <h1>Knowledge Sharing</h1>
              <span className="desc2">
                Access valuable insights, tips, and best practices from fellow
                farmers and agricultural experts.
              </span>
            </article>
            {/* <article>
              <span>
                <Image
                  src="/icons/thirdSectionIcons/fresh-vegetable-icon.png"
                  alt="groundnut"
                  fill
                />
                <div></div>
              </span>
              <h1>lorem</h1>
              <span className="desc2">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </span>
            </article> */}
          </section>
        </div>
      </article>
      <button className="bottom 2xl:py-[28px] 2xl:px-11 py-2 px-3">
        <span>Explore more</span>
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
    </section>
  );
};

export default ThirdSection;
