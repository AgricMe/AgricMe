import Nav from "@/components/dashboard/Nav";
import { notificationsData } from "@/lib/data/data";
import { Courgette } from "next/font/google";
import Image from "next/image";
import avatar from "@/public/dashboard/avatar8.jpg";
import { IoIosArrowForward } from "react-icons/io";

const cursive = Courgette({
  subsets: ["latin"],
  weight: "400",
});

const page = () => {
  return (
    <section className="pb-10 px-1">
      <div className="bg-[#fff] pb-2 px-1.5">
        <Nav />
      </div>
      <div className="py-8 px-2 md:w-[80vw] lg:w-[60vw] mx-auto">
        <h1
          className={`text-[1.65rem] md:text-[1.75rem] lg:text-[1.85rem] mt-1.5 mb-5 md:mt-6 md:mb-8 text-gray-500 font-normal ${cursive.className}`}
        >
          Notifications
        </h1>
        <div
          className={`flex justify-start items-center py-2.5 px-1.5 md:px-4 bg-[#7EB693] rounded-2xl cursor-pointer mb-3`}
        >
          <Image
            src={avatar}
            alt={"features-img"}
            width={60}
            height={60}
            className="rounded-full mr-4"
          />
          <div className="flex flex-col">
            <h3 className={`text-[.9rem] text-[#fff] font-semibold`}>
              We released some new features
            </h3>
            <p className={`text-[.85rem] text-[#fff] mt-1.5`}>
              Check them out!
            </p>
          </div>
          <IoIosArrowForward
            size={20}
            className="cursor-pointer text-[#fff] ml-auto"
          />
        </div>
        <div className="bg-[#fff] py-2 rounded-2xl shadow-lg">
          {notificationsData.map((notification) => {
            return (
              <div
                className={`flex justify-start items-start md:items-center py-4 ${
                  notification.id < notificationsData.length &&
                  "border-b border-gray-100"
                }`}
                key={notification.id}
              >
                <Image
                  src={notification.img}
                  alt={notification.name}
                  width={60}
                  height={60}
                  className="rounded-full ml-1.5 md:ml-4 mr-4"
                />
                <div className="flex flex-col mr-1.5 md:mr-4">
                  <h3 className={`text-[.85rem] text-[#666]`}>
                    <span
                      className={`${
                        notification.id === 1 && "text-[#333] font-bold"
                      }`}
                    >
                      {notification.name}
                    </span>{" "}
                    {notification.content}
                  </h3>
                  <p className={`text-[.75rem] text-[#666] mt-1.5`}>
                    {notification.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
