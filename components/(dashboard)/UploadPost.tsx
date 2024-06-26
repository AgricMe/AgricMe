import Image from "next/image"
import { FaRegImage } from "react-icons/fa6";
import { GoVideo } from "react-icons/go";
import { LuUsers2 } from "react-icons/lu";
import { PiArticleBold } from "react-icons/pi";

const UploadPost = () => {
    return (
        <div className="w-full h-[100px] bg-[#F9F8F8]" style={{ height: "100px", backgroundColor: "#F9F8F8", boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="w-[85%]">
                <div className="flex items-center gap-10 w-full">
                    <div>
                        <Image
                            src={"/dashboard/dash-profile-img.jpg"}
                            alt='pfp-img'
                            width={40}
                            height={40}
                            className='object-cover rounded-full'
                        />
                    </div>
                    <div className="w-full">
                        <input type="text" placeholder="Make a post here" className="input border-slate-300 bg-white h-9 w-full focus:border-slate-400 focus:outline-none" />
                    </div>
                </div>
                <div className="flex items-center justify-center gap-7 mt-3">
                    <div>
                        <label htmlFor="image" className="cursor-pointer flex items-center gap-2">
                            <FaRegImage className="text-[#378FE9]" />
                            <p className="text-[#666666] text-[14px]">A photo</p>
                        </label>
                        <input type="file" id="image" className="hidden" />
                    </div>
                    <div>
                        <label htmlFor="video" className="cursor-pointer flex items-center gap-2">
                            <GoVideo className="text-[#5F9B41]" />
                            <p className="text-[#666666] text-[14px]">Video</p>
                        </label>
                        <input type="file" id="video" className="hidden" />
                    </div>
                    <div>
                        <label htmlFor="services" className="cursor-pointer flex items-center gap-2">
                            <LuUsers2 className="text-[#758A88]" />
                            <p className="text-[#666666] text-[14px]">Services</p>
                        </label>
                        <input type="file" id="services" className="hidden" />
                    </div>
                    <div>
                        <label htmlFor="article" className="cursor-pointer flex items-center gap-2">
                            <PiArticleBold className="text-[#E16745]" />
                            <p className="text-[#666666] text-[14px]">Article</p>
                        </label>
                        <input type="file" id="article" className="hidden" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadPost