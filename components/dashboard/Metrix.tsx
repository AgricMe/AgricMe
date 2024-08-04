import { Metrix as IMetrix } from "@/schema/interfaces";
import Image from "next/image";

const Metrix = ({ id, icon, title, value, percentage }: IMetrix) => {
  return (
    <div
      className={`w-full h-auto col-span-1 bg-white p-2 md:p-6 shadow-md rounded-xl`}
    >
      <div className="flex justify-start items-center">
        <Image
          src={icon}
          alt={title}
          className="mr-1 md:mr-4 w-[15px] h-[15px] md:w-[25px] md:h-[25px]"
        />
        <h3 className="text-[.9rem] text-[#222] md:text-[1.2rem]">{title}</h3>
      </div>
      <h1 className="text-[1.2rem] text-[#000] md:text-3xl font-semibold py-2">
        {value}
      </h1>
      <p className="text-gray-400 text-[.85rem]">
        <span className={`${id === 3 ? "text-red-400" : "text-green-400"}`}>
          {percentage}%
        </span>{" "}
        in the last 1 month
      </p>
    </div>
  );
};
export default Metrix;
