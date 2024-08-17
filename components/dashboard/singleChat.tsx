import { Chat as IChat } from "@/schema/interfaces";
import Image from "next/image";
import { BiCheckDouble } from "react-icons/bi";

interface Props extends IChat {
  setIsOpen(): void;
}

const Chat = ({ name, content, img, setIsOpen }: Props) => {
  return (
    <div
      className={`w-full flex justify-start items-center pl-[0.32rem] py-2 border-b border-gray-200 cursor-pointer`}
      onClick={setIsOpen}
    >
      <Image
        src={img}
        alt={name}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="w-full ml-2">
        <h2 className="text-[.75rem] text-[#000] font-medium pb-0.5">{name}</h2>
        <p className="text-[#758A89] text-[.55rem]">{content}</p>
      </div>
      <div className="flex flex-col justify-between items-center">
        <p className="text-[#758A89] text-[.55rem] mb-3">2h</p>
        {content.length >= 61 ? (
          <BiCheckDouble size={20} className="text-gray-400" />
        ) : (
          <div className="w-4 h-4 bg-red-700 rounded-full text-[#fff] text-[.55rem] flex justify-center items-center">
            2
          </div>
        )}
      </div>
    </div>
  );
};
export default Chat;
