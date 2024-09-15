import { MarketProduct as IProduct } from "@/schema/interfaces";
import Image from "next/image";
import Link from "next/link";

const MarketProduct = ({ id, img, name, price }: IProduct) => {
  return (
    <Link
      href={`/market-place/product/${id}/`}
      className="w-full h-full flex flex-col justify-center items-center bg-[#fff] rounded-lg shadow-md px-2 py-4"
    >
      <div className="w-full h-[200px] flex justify-center items-center">
        <Image src={img} alt={name} />
      </div>
      <div className="mt-4">
        <p className="text-[1.05rem] text-blue-600 pb-1">{name}</p>
        <div className="flex justify-center items-center gap-2 my-2">
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
        </div>
        <p className="text-[.85rem] text-green-400">{price}</p>
      </div>
    </Link>
  );
};
export default MarketProduct;
