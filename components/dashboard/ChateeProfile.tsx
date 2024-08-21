import Image from "next/image";
import { MdClose } from "react-icons/md";
import avatar4 from "@/public/dashboard/avatar4.png";
import { IoToggleSharp } from "react-icons/io5";

interface Props {
  closeProfile(): void;
}

const ChateeProfile = ({ closeProfile }: Props) => {
  return (
    <div className="w-full h-screen bg-white p-3 flex flex-col shadow-md rounded-sm transition-all duration-300">
      <div className="flex justify-end items-center">
        <div
          className="w-8 h-8 border border-gray-300 rounded-full flex justify-center items-center cursor-pointer"
          onClick={closeProfile}
        >
          <MdClose size={20} className="text-[#758A89]" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={avatar4}
          alt="profile-img"
          width={120}
          height={120}
          className="rounded-full border-4 border-[#EFD372]"
        />
        <h2 className="text-[1.35rem] text-[#000] font-bold mt-2">
          Robert Fox
        </h2>
        <p className="text-[#758A89] text-[.85rem] pt-0.5 mb-2">
          @robert.fox12
        </p>
      </div>
      <div className="flex justify-between items-center py-2.5 mt-1 border-y border-gray-200">
        <h2 className="text-[.95rem] text-[#333] font-bold">Notifications</h2>
        <IoToggleSharp size={28} className="text-[#7EB693]" />
      </div>
    </div>
  );
};
export default ChateeProfile;
