"use client";

import Image from "next/image";
import React, { useState } from "react";
import avatar2 from "@/public/dashboard/avatar2.jpg";
import avatar1 from "@/public/dashboard/avatar1.jpg";
import { FaEllipsisH, FaEllipsisV, FaPhoneAlt, FaVideo } from "react-icons/fa";
import { BiCheckDouble } from "react-icons/bi";
import {
  HiOutlineClipboard,
  HiOutlineMicrophone,
  HiOutlinePaperClip,
  HiOutlineVideoCamera,
} from "react-icons/hi";
import { VscSmiley } from "react-icons/vsc";
import { MdSend } from "react-icons/md";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "other",
      content: "Hey, how are you? 😊",
      time: "10:29 AM",
    },
    {
      id: 2,
      sender: "me",
      content: "I am good, thanks! How about you?",
      time: "10:30 AM",
    },
    {
      id: 3,
      sender: "other",
      content: "Check out this picture!",
      time: "10:32 AM",
    },
    {
      id: 4,
      sender: "me",
      content: "i haven't implemented the image oh",
      time: "10:34 AM",
    },
    {
      id: 5,
      sender: "other",
      content: "Nice picture! Here’s a document you asked for.",
      time: "10:35 AM",
    },
    {
      id: 6,
      sender: "me",
      content: "same image oh but later sha",
      time: "10:37 AM",
    },
    {
      id: 7,
      sender: "other",
      content: "Thanks a lot! 🙏",
      time: "10:38 AM",
    },
    {
      id: 8,
      sender: "me",
      content: "Anytime! 😁",
      time: "10:40 AM",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    // if (input.trim() !== "") {
    //   setMessages([...messages, { id: , content: input, sender: "me", time }]);
    //   setInput("");
    // }
  };

  return (
    <div className="flex flex-col w-full h-screen transition-all duration-300">
      <div className="w-full h-auto bg-white p-1 shadow-md rounded-sm flex justify-between items-center mb-1.5">
        <div className="flex justify-start items-center">
          <Image
            src={avatar2}
            alt="profile-img"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col pl-4">
            <h2 className="font-semibold">Robert Fox</h2>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <p className="text-[.75rem] text-[#465352] pl-2">Active Now</p>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <div className="w-8 h-8 border border-gray-300 rounded-full flex justify-center items-center">
            <FaPhoneAlt size={13} className="text-[#7EB693]" />
          </div>
          <div className="w-8 h-8 border border-gray-300 rounded-full flex justify-center items-center mx-4">
            <FaVideo size={13} className="text-[#7EB693]" />
          </div>
          <div className="w-8 h-8 border border-gray-300 rounded-full flex justify-center items-center">
            <FaEllipsisH size={13} className="text-[#7EB693]" />
          </div>
        </div>
      </div>
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-scroll py-4 px:1.5 me:p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div>
              <div
                className={`flex ${
                  message.sender === "other" && "flex-row-reverse"
                }`}
              >
                <div
                  className={`p-3 m-2 rounded-2xl text-[.85rem] max-w-xs ${
                    message.sender === "me"
                      ? "bg-[#525C60] text-white rounded-ee-none"
                      : "bg-white text-[#525C60] rounded-es-none"
                  }`}
                >
                  {message.content}
                </div>
                <div className={`flex items-end`}>
                  {message.sender === "me" ? (
                    <Image
                      src={avatar1}
                      alt="profile-img"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    <Image
                      src={avatar2}
                      alt="profile-img"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  )}
                </div>
              </div>
              <div
                className={`flex ${
                  message.sender === "me"
                    ? "justify-end mt-0.5 mr-[2.8rem]"
                    : "justify-start ml-[3.2rem]"
                } items-start`}
              >
                <p className="text-gray-400 text-[.7rem] mt-1">
                  {message.time}
                </p>
                {message.sender === "me" && (
                  <BiCheckDouble size={22} className="text-gray-400 ml-1" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Input Area */}
      <div className="w-full h-auto bg-white p-2 md:py-3 md:px-5 mt-1.5 shadow-md rounded-md">
        <div className="flex">
          <textarea
            maxLength={10000}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
            className="w-full p-2  text-[.95rem] border-none rounded-l-lg focus:outline-none"
          ></textarea>
        </div>
        <hr className="text-gray-400 my-4" />
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <HiOutlineVideoCamera size={20} className="text-[#758A89]" />
            <HiOutlineMicrophone size={20} className="text-[#758A89] mx-4" />
            <VscSmiley size={20} className="text-[#758A89]" />
            <HiOutlinePaperClip size={20} className="text-[#758A89] mx-4" />
            <HiOutlineClipboard size={20} className="text-[#758A89]" />
            <FaEllipsisV size={16} className="text-[#758A89] ml-6" />
          </div>
          <MdSend size={20} className="text-[#758A89] mr-6" />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
