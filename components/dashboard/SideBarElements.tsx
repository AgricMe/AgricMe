"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/shared/SideBar";
import { sideBarLinks } from "@/components/dashboard/SideBarLinks";
import { PiExportBold } from "react-icons/pi";
import { Courgette } from "next/font/google";
import { logout } from "@/services/auth.service";

const cursive = Courgette({
  subsets: ["latin"],
  weight: "400",
});

const SideBarElements = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-[4rem] lg:mt-8 flex flex-col gap-2">
              {sideBarLinks.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Logout",
                icon: (
                  <PiExportBold
                    size={20}
                    className="flex-shrink-0 rotate-90 text-red-600"
                    onClick={() => {
                      logout();
                    }}
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
    </>
  );
};

export default SideBarElements;

export const Logo = () => {
  return (
    <Link
      href="#"
      className={`${cursive.className} flex space-x-2 items-center py-1 relative z-20`}
    >
      <div className="h-5 w-6 dark:bg-[#7EB693] bg-[#7EB693] rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-semibold text-[1.8rem] text-neutral-200 dark:text-black whitespace-pre"
      >
        <span className="text-[#7EB693] ml-2">Agric</span>me
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-[#7EB693] dark:bg-[#7EB693] rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
