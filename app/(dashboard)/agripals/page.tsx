"use client";
import ChateeProfile from "@/components/dashboard/ChateeProfile";
import ChatInterface from "@/components/dashboard/chatInterface";
import ChatList from "@/components/dashboard/chatList";
import Nav from "@/components/dashboard/Nav";
import { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  return (
    <section className="relative pb-1.5">
      <div className="md:hidden">
        <Nav />
      </div>
      <div className="pt-2 md:pt-0 flex flex-col md:flex-row">
        <div
          className={`${
            isOpen && "hidden md:block"
          } w-full md:w-[30%] md:mr-0.5 transition-all duration-300`}
        >
          <ChatList openChat={() => setIsOpen(true)} />
        </div>
        {isOpen ? (
          <div className="absolute top-[5%] md:top-0 right-0 md:w-[70%] transition-all duration-300">
            <ChatInterface openProfile={() => setIsProfileOpen(true)} />
          </div>
        ) : (
          <div className="hidden md:block">
            <div className="bg-[#fff] w-[70vw] h-full flex flex-col justify-center items-start pl-[5rem]">
              <h1 className="text-[1.95rem] text-[#000] font-bold">
                Select a message
              </h1>
              <p className="text-[#758A89] text-[.95rem] pt-0.5">
                Choose from your existing conversations, start a new one or just
                keep swimming.
              </p>
              <button
                type="button"
                className="px-3 py-2 mt-2 bg-[#7EB693] text-[.85rem] text-[#fff] rounded-full"
              >
                New message
              </button>
            </div>
          </div>
        )}
        <div>
          {isProfileOpen && (
            <div className="absolute top-[5%] md:top-[1%] right-0 w-full md:w-[25%] transition-all duration-300">
              <ChateeProfile closeProfile={() => setIsProfileOpen(false)} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Page;
