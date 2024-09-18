import Nav from "@/components/dashboard/Nav";
import PostComponent from "@/components/dashboard/PostComponent";
import UploadPost from "@/components/dashboard/UploadPost";
import { postsData } from "@/utils/data";

const page = () => {
  return (
    <div className="md:pl-3">
      <Nav />
      <div className="flex flex-col md:flex-row justify-between items-center px-1.5 md:px-0">
        <div className="w-full md:w-[67%] h-[210px] rounded-xl agrion-banner flex items-center mt-4">
          <div className="ml-8 md:ml-11">
            <span></span>
            <h2 className="mt-4 mb-4 text-[30px] text-black font-bold">
              Hello, Apostle Paul
            </h2>
            <p className="font-bold text-[15px]">
              Get <span className="text-[#7EB693]">FREE DELIVERY</span> on every
              weekend
            </p>
            <button className="bg-[#7EB693] p-2 rounded-md text-white text-[12px] mt-4">
              Post an Advert
            </button>
          </div>
        </div>
        <div className="w-full md:w-[31%] h-[300px] rounded-xl hamburger-img"></div>
      </div>
      {/* Posts Section */}
      <div className="flex flex-col md:flex-row justify-between mt-[40px] w-[100%] h-[200vh] relative px-1.5 md:px-0">
        <div className="w-full md:w-[72%]">
          <UploadPost />
          {postsData.map((post) => {
            return <PostComponent key={post.id} {...post} />;
          })}
        </div>
        <div className="w-full md:w-[23%] my-6 md:my-0">
          <div className="bg-white rounded-lg shadow-md w-full sticky top-[20px]">
            <div className="p-3 text-black">
              <h2 className=" font-semibold">Trends For You</h2>
            </div>
            <div>
              <div className="px-3 pb-2 hover:bg-slate-200 text-slate-800">
                <p className="text-[.85rem] md:text-[.95rem]">
                  Only On Agric me
                </p>
                <h2 className="font-semibold text-black">
                  #Passion for farming
                </h2>
                <p className="text-[.85rem] md:text-[.95rem]">
                  With a commitment to ethical farming practices and the
                  well-being of each bird, we strive to deliver the best quality
                  products while supporting the environment and our local
                  community.
                </p>
              </div>
              <div className="px-3 pb-2 hover:bg-slate-200 text-slate-800">
                <p className="text-[.85rem] md:text-[.95rem]">
                  Only On Agric me
                </p>
                <h2 className="font-semibold text-black">#Farming made easy</h2>
                <p className="text-[.85rem] md:text-[.95rem]">
                  The platform streamlined outreach, enabling us to provide
                  timely support and resources. As a result, farmers are now
                  adapting faster, increasing productivity, and driving
                  sustainable farming practices - bringing us closer to our
                  mission.
                </p>
              </div>
              <div className="px-3 pb-2 hover:bg-slate-200 text-slate-800">
                <p className="text-[.85rem] md:text-[.95rem]">
                  Only On Agric me
                </p>
                <h2 className="font-semibold text-black">#IncreaseInSales</h2>
                <p className="text-[.85rem] md:text-[.95rem]">
                  The farmer-buyer relationship platform became a game changer,
                  it has empowered farmers to embrace new techniques and
                  technologies more readily thereby increasing productivity and
                  sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
