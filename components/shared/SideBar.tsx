// import Image from "next/image"
// import SideBarIcons from "../dashboard/SideBarIcons";
// import { IoHelpCircleSharp } from "react-icons/io5";
// import { IoIosLogOut } from "react-icons/io";
// import Link from "next/link";

// const SideBar = () => {
//     return (
//         <div className='sidebar'>
//             <div className="p-[20px]">
//                 <Image
//                     src={"/logo/agricme-logo.png"}
//                     alt="logo"
//                     width={160}
//                     height={36.91}
//                 />
//             </div>
//             <div className="sidebar-links px-[20px]">
//                 <SideBarIcons />
//             </div>
//            <div>
//             <div className="border-t border-[#D4D4D4] mt-[20px]"></div>
//                 <Link href={""} className="flex items-center gap-3 text-[#D4D4D4] px-[20px] py-[10px]">
//                     <IoHelpCircleSharp  className="text-[20px]"/>
//                     <p>Help</p>
//                 </Link>
//            </div>
//            <div className="mt-[40px] flex justify-center">
//                 <div className="bg-[#EFD372] h-[130px] w-[170px] rounded-[12px]">
//                     <div className="flex justify-center">
//                         <div className="bg-[#EFD372] h-[60px] w-[60px] rounded-full mt-[-30px] flex justify-center items-center">
//                             <div className="flex justify-center">
//                                 {/* <Image
//                                 src={"/dashboard/lightbulb.png"}
//                                 alt="lightbulb"
//                                 width={120}
//                                 height={150}
//                                 className="lightbulb object-cover"
//                                 /> */}
//                                 {/* <img src="/dashboard/lightbulb.png" alt="lightbulb"  className="lightbulb object-cover h-[130px] w-[120px]"/> */}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="text-center text-[12px] flex flex-col items-center text-black">
//                         <span className="text-[10px]">Thoughts time</span>
//                         <p className="w-[90%] leading-4 mt-1">If you aren’t willing to own a stock for 10 years, don’t even think about owning it for 10 minutes.</p>
//                     </div>
//                 </div>
//            </div>
//            <Link href={""} className="flex items-center gap-3 text-[#D4D4D4] px-[20px] py-[10px]">
//                 <IoIosLogOut className="text-[20px] text-red-400"/>
//                 <p>Logout</p>
//             </Link>

//         </div>
//     )
// }

// export default SideBar
"use client";
import { cn } from "@/utils/cn";
import Link, { LinkProps } from "next/link";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { IconMenu2, IconX } from "@tabler/icons-react";

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
          "h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[250px] flex-shrink-0",
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
          "h-10 px-4 py-4 flex flex-row md:hidden  items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
        )}
        {...props}
      >
        <div className="flex justify-end z-20 w-full">
          <button onClick={() => setOpen(!open)}>Open Up</button>
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
                "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
                className
              )}
            >
              <div
                className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
                onClick={() => setOpen(!open)}
              >
                {/* <IconX /> */}
                <button className="text-yellow-400">Close Up</button>
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
  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center justify-start gap-2  group/sidebar py-2",
        className
      )}
      {...props}
    >
      {link.icon}

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
