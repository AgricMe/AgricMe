import Image from "next/image"
import SideBarIcons from "../dashboard/SideBarIcons";
import { IoHelpCircleSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
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
                                {/* <Image
                                src={"/dashboard/lightbulb.png"}
                                alt="lightbulb"
                                width={120}
                                height={150}
                                className="lightbulb object-cover"
                                /> */}
                                {/* <img src="/dashboard/lightbulb.png" alt="lightbulb"  className="lightbulb object-cover h-[130px] w-[120px]"/> */}
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-[12px] flex flex-col items-center text-black">
                        <span className="text-[10px]">Thoughts time</span>
                        <p className="w-[90%] leading-4 mt-1">If you aren’t willing to own a stock for 10 years, don’t even think about owning it for 10 minutes.</p>
                    </div>
                </div>
           </div>
           <Link href={""} className="flex items-center gap-3 text-[#D4D4D4] px-[20px] py-[10px]">
                <IoIosLogOut className="text-[20px] text-red-400"/>
                <p>Logout</p>
            </Link>
            
        </div>
    )
}

export default SideBar