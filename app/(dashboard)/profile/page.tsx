"use client";
import React from "react";
import Nav from "@/components/dashboard/Nav";
import { Courgette } from "next/font/google";
import { MdOutlineLocationOn } from "react-icons/md";
import Image from "next/image";
import avatar2 from "@/public/dashboard/avatar2.jpg";
import Link from "next/link";
import { useGetProfile } from "@/services/user.service";
import { User } from "@/schema/interfaces/user.interface";
import Loader from "@/components/shared/loader";

const cursive = Courgette({
  subsets: ["latin"],
  weight: "400",
});

const Page = () => {
  const { data, isPending } = useGetProfile();
  const user: User = data;
  return (
    <section className="pb-10 px-1">
      <div className="bg-[#fff] pb-2 px-1.5">
        <Nav />
      </div>
      <div className="bg-[#eff6f1] min-h-screen py-8 px-4 md:px-8 lg:px-[3.5rem]">
        {isPending ? (
          <Loader loading={isPending} loadingText="Fetching User Details..." />
        ) : (
          <div
            className={`bg-[#fff] flex flex-col md:flex-row justify-between items-end w-full h-[70vh] px-4 md:px-10 py-8 md:py-6 shadow-md rounded-xl`}
          >
            <div className="w-full flex flex-col items-center md:flex-row md:items-end gap-8">
              <Image
                src={user?.profilePicture || avatar2}
                alt="profile-img"
                width={120}
                height={120}
                className="rounded-full border-4 border-gray-200 mb-[1rem] md:mb-[3.5rem]"
              />
              <div className="flex flex-col mb-4 md:mb-10">
                <h2
                  className={`${cursive.className} text-[#222] text-[1.35rem] text-center md:text-start`}
                >
                  {user?.lastName} {user?.firstName}
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <MdOutlineLocationOn size={18} className="text-gray-400" />
                  <p className="text-[#444] font-semibold text-[.95rem]">
                    {user?.location}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[#444] font-semibold text-[.95rem]">
                  {user?.job}
                </p>
                <p className="text-[#444] font-semibold text-[.95rem]">
                  {user?.email}
                </p>
                <p className="text-[#444] font-semibold text-[.95rem]">
                  {user?.phoneNumber}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center md:justify-end gap-4">
              <Link
                href={`/profile/edit`}
                className="bg-[#fff] text-[#444] border border-gray-400 px-8 py-2.5 rounded-md shadow-sm text-[.85rem] font-medium"
              >
                Edit Profile
              </Link>
              <Link
                href={`/profile/settings`}
                className="bg-[#fff] text-[#444] border border-gray-400 px-8 py-2.5 rounded-md shadow-sm text-[.85rem] font-medium"
              >
                Settings
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;
