import React from 'react'
import UploadPost from '../UploadPost'
import PostComponent from '../PostComponent'
import Nav from '../Nav'

const Agrions = () => {
  return (
    <>
        <div>
            <Nav />
            <div className="flex justify-between items-end mt-[40px]">
                <div className="w-[67%] h-40 bg-[green] rounded-xl"></div>
                <div className="w-[31%] h-32 bg-[red] rounded-xl"></div>
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
    </>
  )
}

export default Agrions