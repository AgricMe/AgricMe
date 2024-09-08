import Nav from "@/components/dashboard/Nav";
import avatar2 from "@/public/dashboard/avatar2.jpg";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import {
  MdEmail,
  MdLocationOn,
  MdOutlineCheckCircle,
  MdOutlineEdit,
} from "react-icons/md";

const page = () => {
  return (
    <section className="pb-10 px-1">
      <div className="bg-[#fff] pb-2 px-1.5">
        <Nav />
      </div>
      <h3 className="text-[1.2rem] md:text-[1.6rem] text-[#222] font-bold my-4 px-4 md:px-6 lg:px-[3.5rem]">
        Edit Profile
      </h3>
      <div className="bg-[#eff6f1] min-h-screen px-4 md:px-6 lg:px-[3.5rem]">
        <div
          className={`bg-[#fff] flex flex-col md:flex-row justify-between items-center w-full h-auto px-6 py-8 md:py-6 shadow-md rounded-xl`}
        >
          <div className="flex flex-col">
            <Image
              src={avatar2}
              alt="profile-img"
              width={120}
              height={120}
              className="rounded-full border-4 border-gray-400"
            />
            <p className="text-[#222] font-semibold text-[.95rem] mt-4">
              Edit Profile Picture
            </p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default page;
