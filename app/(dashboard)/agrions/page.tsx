import Agrions from "@/components/(dashboard)/agrions";

const page = () => {
<<<<<<< HEAD
  return <Agrions />;
};
=======
    return (
        <div>
            <Nav />
            <div className="flex justify-between items-end mt-[40px]">
                <div className="w-[67%] h-[210px] rounded-xl agrion-banner flex items-center">
                    <div className="ml-11">
                        <span></span>
                        <h2 className="mt-4 mb-4 text-[30px] text-black font-bold">Hello, Apostle Paul</h2>
                        <p className="font-bold text-[15px]">Get <span className="text-[#7EB693]">FREE DELIVERY</span> on every weekend</p>
                        <button className="bg-[#7EB693] p-2 rounded-md text-white text-[12px] mt-4">Post an Advert</button>
                    </div>
                </div>
                <div className="w-[31%] h-36 rounded-xl hamburger-img"></div>
            </div>
            {/* Posts Section */}
            <div className="flex justify-between mt-[40px] w-[100%] h-[200vh] relative">
                <div className="w-[72%]">
                    <UploadPost />
                    <PostComponent />
                    <PostComponent />
                    <PostComponent />
                </div>
                <div className="w-[23%]">
                    <div className="bg-white rounded-lg shadow-md w-full sticky top-[20px]">
                        <div className="p-3 text-black">
                            <h2 className=" font-semibold">Trends For You</h2>
                        </div>
                        <div>
                            <div className="px-3 pb-2 hover:bg-slate-200 text-slate-800">
                                <p>Only On Agric me</p>
                                <h2 className="font-semibold text-black">#IncreaseInSales</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, fuga.</p>
                            </div>
                            <div className="px-3 pb-2 hover:bg-slate-200 text-slate-800">
                                <p>Only On Agric me</p>
                                <h2 className="font-semibold text-black">#IncreaseInSales</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, fuga.</p>
                            </div>
                            <div className="px-3 pb-2 hover:bg-slate-200 text-slate-800">
                                <p>Only On Agric me</p>
                                <h2 className="font-semibold text-black">#IncreaseInSales</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, fuga.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
>>>>>>> 58ddc5db5457f465b066956098eae620ef9d24b3

export default page;
