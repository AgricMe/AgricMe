import Image, { StaticImageData } from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Post } from "@/schema/interfaces";

const PostComponent = ({ img, content, tag }: Post) => {
  return (
    <div className="bg-gray-100 flex items-center justify-center mt-5">
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-md w-full">
        {/* User Info with Three-Dot Menu */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {/* <Image
              src="/dashboard/dash-profile-img.jpg"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            /> */}
            <div>
              <p className="text-gray-800 font-semibold">Farmer Duro</p>
              <p className="text-gray-500 text-sm">Posted 2 hours ago</p>
            </div>
          </div>
          <div className="text-gray-500 cursor-pointer">
            {/* Three-dot menu icon */}
            <button className="hover:bg-gray-50 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="7" r="1" />
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="17" r="1" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`grid ${
            img.length >= 2 ? "grid-cols-2" : "grid-cols-1"
          } gap-2 lg:gap-4 mb-4`}
        >
          {img.map((image, index) => {
            return (
              <div key={index} className={`w-full`}>
                <Image
                  src={image}
                  alt="post-img"
                  className={`${
                    img.length >= 2 &&
                    "md:w-[250px] md:h-[250px] lg:w-full lg:h-[300px]"
                  } rounded-md`}
                />
              </div>
            );
          })}
        </div>

        {/* Message */}
        <div className="mb-4">
          <p className="text-gray-800 text-[.85rem] md:text-[.95rem]">
            {content}
            <a href="" className="text-blue-600">
              {tag}
            </a>
          </p>
        </div>
        {/* Image */}
        <div className="mb-4">
          {/* <img src="/dashboard/post-image.jpeg" alt="Post Image" className="w-full object-cover rounded-md" /> */}
        </div>
        {/* Like and Comment Section */}
        <div className="flex items-center justify-between text-[gray]">
          <div className="flex items-center space-x-2">
            <button className="flex justify-center items-center gap-2 px-2 hover:bg-[#ececec] rounded-full p-1">
              <FaRegHeart />
              <span className="text-[.85rem] md:text-[.95rem]">Like</span>
            </button>
            <button className="flex justify-center items-center gap-2 px-2 hover:bg-[#ececec] rounded-full p-1">
              <FaRegCommentAlt />
              <span className="text-[.85rem] md:text-[.95rem]">Comment</span>
            </button>
          </div>
          <button className="flex justify-center items-center gap-2 px-2 hover:bg-[#ececec] rounded-full p-1">
            <IoShareSocialOutline />
            <span className="text-[.85rem] md:text-[.95rem]">Share</span>
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
  );
};

export default PostComponent;
