import newsLetter from "@/public/component-images/news-letter.png";

const NewsLetter = () => {
  return (
    <div className="flex justify-center mt-[40px] px-[1.5rem] md:px-[3rem] lg:px-[4rem]">
      <div
        className="w-full h-[300px] rounded-[20px] bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${newsLetter.src})` }}
      >
        <div className="w-[90%] flex flex-col lg:flex-row justify-between">
          <div className="mb-4 lg:mb-0 text-center md:text-start">
            <h1 className="text-[#fff] w-full md:w-[80%]">
              Subscribe to our News Letter
            </h1>
          </div>
          <form
            action=""
            className="w-full md:w-[60%] flex flex-col md:flex-row gap-[5px] items-center"
          >
            <input
              type="email"
              placeholder="Your Email Address"
              className="border-none outline-none h-[70px] px-6 rounded-[15px] w-full text-[#fff] font-bold cursor-pointer"
            />
            <button className="border-none h-[70px] rounded-[15px] w-[45%] md:w-[45%] lg:w-[32%] bg-[#274c5b] text-[#fff] font-bold cursor-pointer mt-2.5 md:mt-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
