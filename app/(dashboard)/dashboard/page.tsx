import Nav from "@/components/dashboard/Nav"

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
                <div className="w-[73%] h-[700px] bg-slate-900"></div>
                <div className="w-[18%] h-32 bg-emerald-900 fixed right-6"></div>
            </div>
        </div>
    )
}

export default page