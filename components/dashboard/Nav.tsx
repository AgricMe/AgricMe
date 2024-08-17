import { FaAngleRight } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="w-[100%] relative dash-nav shadow-slate-300 flex flex-col-reverse md:flex-row">
      <div className="inp-btn w-full md:w-auto mt-2">
        <div className="w-full md:w-auto">
          <label className="input input-bordered h-[40px] flex items-center gap-2 bg-white rounded-full border-slate-200 focus-within:outline-none focus-within:border-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70 text-slate-600"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              className="grow outline-none text-[.95rem]"
              placeholder="Search"
            />
          </label>
        </div>
        <div>
          <button className="hidden bg-[#274C5B] rounded-2xl text-[.95rem] text-white py-2 px-6 md:flex items-center gap-2">
            Explore <FaAngleRight />
          </button>
          <button className="md:hidden bg-green-400 rounded-2xl text-[.95rem] text-white py-2 px-6 flex items-center gap-2">
            <FaAngleRight />
          </button>
        </div>
      </div>
      <div className="hidden md:flex profile-acct items-center gap-5">
        <div>
          {" "}
          <FaBell className="text-gray-400 text-2xl rotate-12" />
        </div>
        <div>
          <Image
            src={"/dashboard/dash-profile-img.jpg"}
            alt="pfp-img"
            width={35}
            height={35}
            className="object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex md:hidden absolute top-[-95%] left-3 profile-acct items-center gap-5">
        <div>
          <Image
            src={"/dashboard/dash-profile-img.jpg"}
            alt="pfp-img"
            width={35}
            height={35}
            className="object-cover rounded-full"
          />
        </div>
        <div>
          {" "}
          <FaBell className="text-gray-400 text-2xl rotate-12" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
