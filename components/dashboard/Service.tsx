import { Service as IService } from "@/schema/interfaces";
import Image from "next/image";
import Link from "next/link";

const Service = ({
  id,
  img,
  name,
  profession,
  projects,
  tasks,
  insights,
}: IService) => {
  return (
    <div
      className={`w-full h-auto col-span-1 ${
        id === 1
          ? "bg-[#ffa858] opacity-75"
          : id === 2
          ? "bg-[#ffc500] opacity-75"
          : "bg-[#fff]"
      } py-4 md:py-6 shadow-md rounded-xl`}
    >
      <div className="flex flex-col justify-start items-center">
        <Image
          src={img}
          alt={name}
          className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] rounded-full"
        />
        <h3 className="text-[.85rem] text-gray-500 md:text-[1.05rem]">
          {name}
        </h3>
        <p className="text-[#222] font-medium text-[.75rem] md:text-[.90rem]">
          {profession}
        </p>
        <div className="flex justify-between items-center my-6">
          <div className="flex flex-col justify-center items-center pr-4 border-r border-gray-200">
            <p className="text-[#222] font-medium text-[.85rem]">Projects</p>
            <p className="text-[#222] font-medium text-[.85rem]">{projects}</p>
          </div>
          <div className="flex flex-col justify-center items-center px-4 border-r border-gray-200">
            <p className="text-[#222] font-medium text-[.85rem]">Tasks</p>
            <p className="text-[#222] font-medium text-[.85rem]">{tasks}</p>
          </div>
          <div className="flex flex-col justify-center items-center pl-4">
            <p className="text-[#222] font-medium text-[.85rem]">Insights</p>
            <p className="text-[#222] font-medium text-[.85rem]">{insights}</p>
          </div>
        </div>
        <Link
          href={`/services/${id}/profile`}
          className={`bg-[#fff] ${
            id > 2 ? "border shadow-sm" : "shadow-md"
          } border-gray-300 py-1.5 px-3 font-semibold text-[#222] text-[.85rem] rounded-3xl`}
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};
export default Service;
