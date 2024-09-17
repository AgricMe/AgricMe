import Image from "next/image";
const Testimonial = () => {
  return (
    <div className="h-full lg:h-[500px] relative flex justify-center items-center bg-white py-[3rem] lg:py-0  px-[1.5rem] md:px-[3rem] lg:px-[4rem]">
      <div>
        <Image
          src={"/component-images/Imagebg.jpg"}
          alt="testimonial"
          fill
          style={{ zIndex: -1, objectFit: "cover" }}
        />
      </div>
      <div className="text-center">
        <div className="testimonial-items-text">
          <p className="custom-txt">Testimonial</p>
          <h2 className="text-[28px] md:text-[40px] mt-[10px] text-[#274c5b]">
            What Our Customer is Saying?
          </h2>
        </div>
        <div>
          <div className="mt-[30px] flex flex-col justify-center items-center">
            <Image
              src={"/component-images/testimonial-author.png"}
              alt="testimonial-author"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="flex justify-center gap-[5px] mt-[10px]">
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
          <div className="flex flex-col items-center mt-[10px]">
            <p className="w-full lg:w-[55%] mb-[15px]">
              Agricme has revolutionized the way I connect with other farmers.
              It&#39;s more than just a platform - it is a thriving community
              where i can share knowledge, trade goods, and find the support i
              need to grow my business.
            </p>
            <h3 className="text-[20px] text-[#274c5b]">Sara Taylor</h3>
            <small>Consumer</small>
          </div>
          <div className="flex justify-center gap-[5px] mt-[5px]">
            <div className="w-[10px] h-[10px] rounded-full bg-[#c4c4c4]"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-[#7eb693]"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-[#c4c4c4]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
