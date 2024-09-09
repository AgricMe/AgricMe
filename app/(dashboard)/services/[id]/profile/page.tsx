"use client";

import Nav from "@/components/dashboard/Nav";
import ServiceHistory from "@/components/dashboard/ServiceHistory";
import avatar2 from "@/public/dashboard/avatar2.jpg";
import { serviceHistoryData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BsExclamationCircle } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import {
  MdEmail,
  MdLocationOn,
  MdOutlineCheckCircle,
  MdOutlineEdit,
} from "react-icons/md";

const EditPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <section className="pb-10 px-1">
      <div className="bg-[#fff] pb-2 px-1.5">
        <Nav />
      </div>
      <div className="bg-[#eff6f1] h-screen py-8 px-4 md:px-6 lg:px-[3.5rem]">
        <div
          className={`bg-[#fff] flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start w-full h-auto px-6 py-8 md:py-6 shadow-md rounded-xl`}
        >
          <div className="flex flex-col justify-center items-center md:pr-6 lg:pr-10 lg:border-r border-gray-200">
            <Image
              src={avatar2}
              alt="user image"
              className="w-[90px] h-[90px] md:w-[75px] md:h-[75px] rounded-full mb-6"
            />
            <h3 className="text-[1.05rem] md:text-[.85rem] text-gray-500">
              ID Number
            </h3>
            <p className="text-[#222] font-semibold text-[.95rem] md:text-[.90rem]">
              487441
            </p>
          </div>
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start md:pr-4 my-4 md:my-0">
            <h3 className="text-[1.05rem] md:text-[.8rem] text-gray-700">
              Name
            </h3>
            <p className="text-[#222] font-semibold text-[.95rem] md:text-[.90rem]">
              Apostle Peter
            </p>
            <h3 className="text-[1.05rem] md:text-[.8rem] text-gray-700 pt-2.5 md:pt-4">
              Services
            </h3>
            <p className="text-[#222] font-semibold text-[.95rem] md:text-[.90rem]">
              Veterinary Doctor
            </p>
          </div>
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start md:pr-4">
            <h3 className="text-[1.05rem] md:text-[.85rem] text-gray-400">
              Contact Info
            </h3>
            <div className="flex py-2 md:py-4">
              <MdEmail size={18} className="mr-4 text-gray-200" />
              <p className="text-[#222] text-[1rem] md:text-[.80rem]">
                name@email.com
              </p>
            </div>
            <div className="flex">
              <FaPhone size={18} className="mr-4 text-gray-200" />
              <p className="text-[#222] text-[1rem] md:text-[.80rem]">
                337570005467
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <div className="flex justify-center items-center md:justify-start md:items-start mt-4 md:mt-9">
              <MdLocationOn
                size={18}
                className="mr-2 md:mr-4 text-gray-200 w-[40px] h-[40px] md:w-[20px] md:h-[20px]"
              />
              <p className="text-[#222] text-[1rem] md:text-[.80rem]">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mt-4 md:mt-0">
            <Link
              href={`/services/${id}/profile/edit`}
              className="flex justify-center items-center"
            >
              <div className="flex justify-center items-center bg-gray-200 p-1.5 rounded-full mr-4 md:mr-2">
                <MdOutlineEdit size={18} className="text-[#222]" />
              </div>
              <p className="text-[#222] text-[1.05rem] md:text-[.80rem]">
                Edit Profile
              </p>
            </Link>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div
            className={`bg-[#fff] w-full h-auto col-span-3 lg:col-span-2 p-4 lg:p-6 shadow-md rounded-xl`}
          >
            <div className="flex justify-between items-start pb-6">
              <h3 className="text-[1rem] lg:text-[1.2rem] text-[#000] font-bold">
                Service Job History
              </h3>
              <p className="text-[#222] text-[.85rem] text-center cursor-pointer">
                View all
              </p>
            </div>
            <div className="flex justify-between items-start pb-3 border-b-2 border-gray-100">
              <p className="basis-[14%] text-[.7rem] md:text-[.85rem] text-gray-400">
                Date
              </p>
              <p className="basis-[19%] text-[.7rem] md:text-[.85rem]] text-gray-400 text-center">
                Type
              </p>
              <p className="basis-[30%] text-[.7rem] md:text-[.85rem] text-gray-400 text-center">
                Address
              </p>
              <p className="basis-[20%] text-[.7rem] md:text-[.85rem] text-gray-400 text-center">
                Payment Method
              </p>
              <p className="basis-[17%] text-[.7rem] md:text-[.85rem] text-gray-400 text-center">
                Total Amount
              </p>
            </div>
            {serviceHistoryData.map((job) => {
              return (
                <div
                  className={`flex justify-between items-center font-medium ${
                    job.id === serviceHistoryData.length
                      ? "pt-3"
                      : "border-b-2 border-gray-100 pt-3 pb-2.5"
                  }`}
                  key={job.id}
                >
                  <ServiceHistory {...job} />
                </div>
              );
            })}
          </div>
          <div
            className={`bg-[#fff] w-full h-auto col-span-3 lg:col-span-1 p-4 md:p-6 shadow-md rounded-xl`}
          >
            <div className="flex justify-between items-start pb-6">
              <h3 className="text-[1rem] lg:text-[1.2rem] text-[#000] font-bold">
                Payment History
              </h3>
              <p className="text-[#222] text-[.85rem] text-center cursor-pointer">
                View all
              </p>
            </div>
            <div className="flex justify-start items-center">
              <div className="flex flex-col mr-10">
                <h3 className="text-[.85rem] text-[#000] font-bold mb-4">
                  Pending Payments
                </h3>
                <div className="bg-[#fff] w-[123px] h-auto p-4 shadow-md rounded-xl">
                  <div className="flex justify-center items-center mb-4">
                    <BsExclamationCircle
                      size={32}
                      className="text-yellow-600"
                    />
                  </div>
                  <p className="text-[#222] text-[.65rem] text-center font-semibold py-4">
                    Pending
                  </p>
                  <p className="text-gray-400 text-[.85rem] text-center">
                    ₦20000
                  </p>
                </div>
              </div>
              <h3 className="text-[.75rem] md:text-[.95rem] text-[#222]">
                2 Service Jobs
              </h3>
            </div>
            <div className="flex flex-col mt-6">
              <h3 className="text-[.85rem] text-[#000] font-bold mb-4">
                Confirmed Payments
              </h3>
              <div className="bg-[#fff] w-[123px] h-auto p-4 shadow-md rounded-xl">
                <div className="flex justify-center items-center mb-4">
                  <MdOutlineCheckCircle size={40} className="text-green-600" />
                </div>
                <p className="text-[#222] text-[.65rem] font-semibold text-center py-4">
                  Paid
                </p>
                <p className="text-gray-400 text-[.85rem] text-center">
                  ₦40500
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditPage;
