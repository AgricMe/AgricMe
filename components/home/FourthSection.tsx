import Image from "next/image";
const FourthSection = () => {
  return (
    <div className="relative mb-[140%] md:mb-[50%] lg:mb-0">
      <div>
        <Image
          src={"/component-images/butcher-image.jpg"}
          alt="butcher-image"
          width={700}
          height={476}
          style={{ objectFit: "cover" }}
          className="w-full lg:w-[700px]"
        />
      </div>
      <div className="bg-[#efd37233] absolute h-auto lg:h-[370px] w-full lg:w-[50%] right-0 top-[100%] lg:top-[12%] rounded-[12px] px-[1.5rem] md:px-[3rem] lg:px-[90px] py-[3rem] lg:py-0 flex flex-col lg:flex-row items-center">
        <div className="w-full">
          <div>
            <p className="custom-text">Eco Friendly</p>
            <h3 className="text-[#274c5b] text-[20px] mt-[15px]">
              AgricMe is a Dummie Text
            </h3>
          </div>
          <div className="mt-[15px]">
            <div className="mt-[10px]">
              <h4 className="text-[15px] mb-[10px] text-[#274c5b]">
                Start with Our Company First
              </h4>
              <p className="text-[12px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div className="mt-[10px]">
              <h4 className="text-[15px] mb-[10px] text-[#274c5b]">
                Start with Our Company First
              </h4>
              <p className="text-[12px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div className="mt-[10px]">
              <h4 className="text-[15px] mb-[10px] text-[#274c5b]">
                Start with Our Company First
              </h4>
              <p className="text-[12px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
