import Nav from "@/components/dashboard/Nav";
import Service from "@/components/dashboard/Service";
import { notificationsData } from "@/utils/data";
import Image from "next/image";

const page = () => {
  return (
    <section className="pb-10 px-1">
      <div className="bg-[#fff] pb-2 px-1.5">
        <Nav />
      </div>
      <div className="bg-[#eff6f1] min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8 gap-8 px-4 md:px-8 lg:px-[3.5rem]">
        {notificationsData.map((notification) => {
          return (
            <div
              className="flex justify-start items-start"
              key={notification.id}
            >
              <Image src={notification.img} alt={notification.name} />
              <div className="flex flex-col"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default page;
