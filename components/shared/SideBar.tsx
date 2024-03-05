import Image from "next/image"
import SideBarIcons from "../dashboard/SideBarIcons";
import { IoHelpCircleSharp } from "react-icons/io5";
import Link from "next/link";

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className="p-[20px]">
                <Image
                    src={"/logo/agricme-logo.png"}
                    alt="logo"
                    width={160}
                    height={36.91}
                />
            </div>
            <div className="sidebar-links px-[20px]">
                <SideBarIcons />
            </div>
           <div>
            <div className="border-t border-[#D4D4D4] mt-[20px]"></div>
                <Link href={""} className="flex items-center gap-3 text-[#D4D4D4] px-[20px] py-[10px]">
                    <IoHelpCircleSharp  className="text-[20px]"/>
                    <p>Help</p>
                </Link>
           </div>
           <div className="mt-[40px] flex justify-center">
                <div className="bg-[#EFD372] h-[130px] w-[170px] rounded-[12px]">
                    <div className="flex justify-center">
                        <div className="bg-[#EFD372] h-[60px] w-[60px] rounded-full mt-[-30px] flex justify-center items-center">
                            <div className="flex justify-center">
                                <Image
                                src={"/dashboard/lightbulb.png"}
                                alt="lightbulb"
                                width={120}
                                height={150}
                                className="lightbulb"
                                />
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default SideBar