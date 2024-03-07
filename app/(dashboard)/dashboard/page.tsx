import Nav from "@/components/dashboard/Nav"

const page = () => {
    return (
        <div>
            <Nav/>
            <div className="flex justify-between items-end mt-[40px]">
                <div className="w-[70%] h-40 bg-slate-800 rounded-xl"></div>
                <div className="w-[27%] h-32 bg-red-500 rounded-xl"></div>
            </div>
            {/* Posts Section */}
            <div></div>
        </div>
    )
}

export default page