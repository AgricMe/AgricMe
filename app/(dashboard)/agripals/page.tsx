"use client";
import ChateeProfile from "@/components/dashboard/ChateeProfile";
import ChatInterface from "@/components/dashboard/chatInterface";
import ChatList from "@/components/dashboard/chatList";
import Nav from "@/components/dashboard/Nav";
import { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section className="relative pb-1.5">
      <div className="md:hidden">
        <Nav />
      </div>
      <div className="pt-2 flex flex-col md:flex-row">
        <div
          className={`${
            isOpen && "hidden md:block"
          } w-full md:w-[30%] md:mr-0.5 transition-all duration-300`}
        >
          <ChatList openChat={() => setIsOpen(true)} />
        </div>
        {isOpen && (
          <div className="absolute top-[5%] md:top-[1%] right-0 md:block md:w-[70%] transition-all duration-300">
            <ChatInterface />
          </div>
        )}
        {/* <ChateeProfile /> */}
      </div>
    </section>
  );
};
export default Page;
