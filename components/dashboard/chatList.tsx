import { Chat as IChat } from "@/schema/interfaces";
import { chatListData } from "@/utils/data";
import Link from "next/link";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { FaEllipsisH } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Chat from "./singleChat";

interface Props {
  openChat(): void;
}

const ChatList = ({ openChat }: Props) => {
  return (
    <div className="w-full h-screen bg-white shadow-md rounded-sm">
      <div className="w-full">
        <div className="flex justify-between items-center pl-2 pr-4 py-2 shadow-sm">
          <h1 className="text-[1.3rem] text-[#000] font-bold">Messages</h1>
          <FaEllipsisH size={16} className="text-[#758A89]" />
        </div>
      </div>
      <div className="w-full h-[92.5vh] overflow-y-scroll">
        <label className="input input-bordered h-[38px] flex items-center gap-2 mx-2 bg-white rounded-full border-slate-200 focus-within:outline-none focus-within:border-slate-400 mt-4 mb-2">
          <BiSolidMessageRoundedDots size={17} className="text-[#758A89]" />
          <input
            type="text"
            className="grow text-[.75rem] outline-none"
            placeholder="Search for chats..."
          />
        </label>
        <Link
          href={"#"}
          className="flex justify-center items-center px-3 py-2 mx-2 bg-[#7EB693] rounded-full"
        >
          <FaPlus size={15} className="text-[#fff]" />
          <p className="text-[.75rem] text-[#fff] ml-3">Start New Chat</p>
        </Link>
        <div className="w-full flex flex-col overflow-y-scroll py-2 ">
          {chatListData.map((chat: IChat) => {
            return <Chat key={chat.id} setIsOpen={openChat} {...chat} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default ChatList;
