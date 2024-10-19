import Nav from "@/components/dashboard/Nav";
import Service from "@/components/dashboard/Service";
import { servicesData } from "@/lib/data/data";

const page = () => {
  return (
    <section className="pb-10 px-1">
      <div className="bg-[#fff] pb-2 px-1.5">
        <Nav />
      </div>
      <div className="bg-[#eff6f1] min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8 gap-8 px-4 md:px-8 lg:px-[3.5rem]">
        {servicesData.map((item) => {
          return <Service key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default page;
