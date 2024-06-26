import { Yellowtail } from "next/font/google";
import Image from "next/image";

const yelllowTail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
});
const Testimonial = () => {
  return (
    <div className="testimonial relative flex justify-center items-center py-20">
      {/* <div className="sticks h-full w-1/4 bg-right"></div> */}
      <div className="testimonial-items">
        <div className="testimonial-items-text">
          <p className={`text-lightgreen ${yelllowTail.className}`}>
            Testimonial
          </p>
          <h2>What Our Customer is Saying?</h2>
        </div>
        <div>
          <div className="flex flex-col items-center">
            <div className="relative aspect-square testimonial-img-icon">
              <Image
                src={"/component-images/testimonial-author.png"}
                alt="testimonial-author"
                fill
                className="testimonial-author"
              />
            </div>
            <div className="testimonial-icon">
              <Image
                src={"/icons/testimonial-icons/star-icon.png"}
                alt="star-icon"
                width={26}
                height={24}
              />
              <Image
                src={"/icons/testimonial-icons/star-icon.png"}
                alt="star-icon"
                width={26}
                height={24}
              />
              <Image
                src={"/icons/testimonial-icons/star-icon.png"}
                alt="star-icon"
                width={26}
                height={24}
              />
              <Image
                src={"/icons/testimonial-icons/star-icon.png"}
                alt="star-icon"
                width={26}
                height={24}
              />
              <Image
                src={"/icons/testimonial-icons/star-icon.png"}
                alt="star-icon"
                width={26}
                height={24}
              />
            </div>
          </div>
          <div className="testimonial-msg">
            <p>
              Agricme has transformed the way I connect with other farmers. The
              community support and resources have been invaluable for my
              farm&apos;s growth.
            </p>
            <h3>Sara Taylor</h3>
            <small>Consumer</small>
          </div>
          <div className="testimonial-chng-icons">
            <div></div>
            <div className="active"></div>
            <div></div>
          </div>
        </div>
      </div>
      {/* <div className="sticks h-full w-1/4 bg-left"></div> */}
    </div>
  );
};

export default Testimonial;
