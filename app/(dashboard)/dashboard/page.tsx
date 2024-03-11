import Nav from "@/components/dashboard/Nav"
import PostComponent from "@/components/dashboard/PostComponent"
import UploadPost from "@/components/dashboard/UploadPost"

const page = () => {
    return (
        <div>
            <Nav />
            <div className="flex justify-between items-end mt-[40px]">
                <div className="w-[67%] h-40 bg-slate-800 rounded-xl"></div>
                <div className="w-[31%] h-32 bg-red-500 rounded-xl"></div>
            </div>
            {/* Posts Section */}
            <div className="flex justify-between mt-[40px]">
                <div className="w-[72%]">
                    <UploadPost />
                    <PostComponent />
                    <PostComponent />
                    <PostComponent />
                </div>
                <div className="w-[19%] fixed right-6">
                    <div className="bg-white rounded-lg shadow-md w-full">
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

export default page