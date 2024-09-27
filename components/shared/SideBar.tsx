"use client";
import { cn } from "@/utils/cn";
import Link, { LinkProps } from "next/link";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose, MdMenu } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import Image from "next/image";

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
      <motion.div
        className={cn(
          "h-full px-4 py-4 hidden md:flex md:flex-col dark:bg-neutral-100 bg-neutral-800 w-[250px] flex-shrink-0",
          className
        )}
        animate={{
          width: animate ? (open ? "250px" : "60px") : "250px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "h-10 px-4 py-4 flex flex-row md:hidden  items-center justify-between dark:bg-neutral-100 bg-neutral-800 w-full"
        )}
        {...props}
      >
        <div className="flex md:hidden profile-acct items-center gap-5">
          <div>
            <Image
              src={"/dashboard/dash-profile-img.jpg"}
              alt="pfp-img"
              width={55}
              height={55}
              className="object-cover rounded-full"
            />
          </div>
          <div className="relative">
            {" "}
            <Link href={"/notifications"}>
              <FaBell className="text-gray-400 text-2xl rotate-12 cursor-pointer" />
            </Link>
            <div className="absolute top-0 right-0 bg-red-600 w-3.5 h-3.5 rounded-full text-white text-[.6rem] font-bold flex justify-center items-center">
              6
            </div>
          </div>
        </div>
        <div className="flex justify-end z-20 w-full">
          <MdMenu
            size={35}
            onClick={() => setOpen(!open)}
            className="text-[#758A89] cursor-pointer"
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 dark:bg-white bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
                className
              )}
            >
              <div
                className="absolute right-10 top-10 z-50 dark:text-neutral-800 text-neutral-200"
                onClick={() => setOpen(!open)}
              >
                {/* <IconX /> */}
                <MdClose size={28} className="text-[#758A89] cursor-pointer" />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
  props?: LinkProps;
}) => {
  const { open, animate } = useSidebar();
  // const [label, setLabel] = useState<string>();
  // const [isActive, setIsActive] = useState<boolean>(false);
  // const handleClick = (clickedLabel: string) => {
  //   if (label === clickedLabel) {
  //     setIsActive(true);
  //   } else if (label !== clickedLabel) {
  //     setIsActive(false);
  //   }
  // };
  return (
    <Link
      href={link.href}
      className={cn(
        `flex items-center justify-start gap-2  group/sidebar py-2.5 mb-6 lg:mb-0`,
        className
      )}
      // onClick={() => {
      //   setLabel(link.label);
      //   handleClick(link.label);
      // }}
      {...props}
    >
      {link.icon}
      {/* <div className={`${isActive && "stroke-[#7EB693] fill-[#7EB693]"}`}>
      </div> */}

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className={`text-neutral-200 dark:text-black text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0`}
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
