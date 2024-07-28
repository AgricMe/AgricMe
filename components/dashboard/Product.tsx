import { Product as IProduct } from "@/schema/interfaces";
import Image from "next/image";

const Product = ({ id, img, name, category, price, quantity }: IProduct) => {
  return (
    <>
      <p className="basis-[10%] text-[.85rem] text-gray-400">{id}</p>
      <div className="basis-[50%] flex justify-start items-center">
        <div className="w-[25px] h-[25px]">
          <Image src={img} alt={name} />
        </div>
        <div className="ml-4">
          <p className="text-[.85rem] pb-1">{name}</p>
          <p className="text-[.75rem] text-gray-400">{category}</p>
        </div>
      </div>
      <p className="basis-[20%] text-[.85rem] text-green-400">${price}</p>
      <p className="basis-[20%] text-[.85rem] text-gray-400">{quantity} pcs</p>
    </>
  );
};
export default Product;
