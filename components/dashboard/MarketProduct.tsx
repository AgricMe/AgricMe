import { MarketProduct as IProduct } from "@/schema/interfaces";
import { Courgette } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { MdOutlineShoppingCart, MdOutlineStar } from "react-icons/md";

const cursive = Courgette({
  subsets: ["latin"],
  weight: "400",
});

const MarketProduct = ({ id, img, name, price, grid }: IProduct) => {
  return (
    <Link
      href={`/market-place/product/${id}/`}
      className={`w-full h-full flex ${
        !grid
          ? "flex-col md:flex-row justify-center items-center md:items-start px-6 py-4 md:gap-[2rem] lg:gap-[6rem]"
          : "flex-col justify-center items-center px-2 py-4"
      }  bg-[#fff] rounded-lg shadow-md`}
    >
      <div
        className={`${
          grid && "w-full"
        } h-[200px] flex justify-center items-center`}
      >
        <Image src={img} alt={name} />
      </div>
      <div className="mt-4">
        {grid ? (
          <>
            <p className="text-[1.05rem] text-blue-600 pb-1">{name}</p>
            <div className="flex justify-center items-center gap-2 my-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            </div>
            <p className="text-[.85rem] text-green-400 text-center">{price}</p>
          </>
        ) : (
          <div className="w-full h-full flex flex-col justify-start items-start">
            <div className="flex gap-6">
              <h1
                className={`text-[1rem] md:text-[1.15rem] text-gray-500 ${cursive.className}`}
              >
                {name}
              </h1>
              <div className="flex justify-center items-center gap-1.5 my-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex gap-2 md:gap-6 mt-2">
              <div className="flex gap-2 md:gap-4">
                <p className="text-[.85rem] text-gray-500">{price}</p>
                <p className="text-[.85rem] text-green-400 line-through">
                  $50.00
                </p>
              </div>
              <div className="flex justify-start items-center gap-0.5">
                <MdOutlineStar size={15} className="text-yellow-500" />
                <MdOutlineStar size={15} className="text-yellow-500" />
                <MdOutlineStar size={15} className="text-yellow-500" />
                <MdOutlineStar size={15} className="text-yellow-500" />
                <MdOutlineStar size={15} className="text-gray-400" />
              </div>
            </div>
            <p className="text-[.85rem] text-gray-400 mt-2 max-w-[650px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit exercitationem debitis corporis modi itaque beatae
              adipisci.
            </p>
            <div className="flex gap-8 mt-6 mx-auto md:mx-0">
              <MdOutlineShoppingCart
                size={18}
                className="text-gray-500 cursor-pointer"
              />
              <FaRegHeart size={16} className="text-gray-500 cursor-pointer" />
              <HiMagnifyingGlassPlus
                size={18}
                className="text-gray-500 cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};
export default MarketProduct;
