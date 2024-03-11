import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
const PostComponent = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center mt-5">
            <div className="bg-white p-8 rounded-lg shadow-md w-full">
                {/* User Info with Three-Dot Menu */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        <img src="https://placekitten.com/40/40" alt="User Avatar" className="w-8 h-8 rounded-full" />
                        <div>
                            <p className="text-gray-800 font-semibold">John Doe</p>
                            <p className="text-gray-500 text-sm">Posted 2 hours ago</p>
                        </div>
                    </div>
                    <div className="text-gray-500 cursor-pointer">
                        {/* Three-dot menu icon */}
                        <button className="hover:bg-gray-50 rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="7" r="1" />
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="17" r="1" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Message */}
                <div className="mb-4">
                    <p className="text-gray-800">Just another day with at the kittens farm🐱 Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sed similique recusandae earum iusto molestias ex repudiandae eaque beatae nostrum.
                        <a href="" className="text-blue-600">#CuteKittenFarm</a>
                    </p>
                </div>
                {/* Image */}
                <div className="mb-4">
                    <img src="https://placekitten.com/400/300" alt="Post Image" className="w-full h-48 object-cover rounded-md" />
                </div>
                {/* Like and Comment Section */}
                <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-2">
                        <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                            <FaRegHeart />
                            <span>Like</span>
                        </button>
                        <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                            <FaRegCommentAlt />
                            <span>Comment</span>
                        </button>
                    </div>
                    <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                        <IoShareSocialOutline />
                        <span>Share</span>
                    </button>
                </div>
                {/* <hr className="mt-2 mb-2" />
                <p className="text-gray-800 font-semibold">Comment</p>
                <hr className="mt-2 mb-2" />
                <div className="mt-4">
                    <div className="flex items-center space-x-2">
                        <img src="https://placekitten.com/32/32" alt="User Avatar" className="w-6 h-6 rounded-full" />
                        <div>
                            <p className="text-gray-800 font-semibold">Jane Smith</p>
                            <p className="text-gray-500 text-sm">Lovely shot! 📸</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-2 ml-6">
                        <img src="https://placekitten.com/40/40" alt="User Avatar" className="w-6 h-6 rounded-full" />
                        <div>
                            <p className="text-gray-800 font-semibold">John Doe</p>
                            <p className="text-gray-500 text-sm">That little furball is from a local shelter. You should check it out! 🏠😺</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default PostComponent