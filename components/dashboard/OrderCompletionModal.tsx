import { BsCheckLg } from "react-icons/bs";
import ModalOverlay from "../shared/modalOverlay";
import { Courgette } from "next/font/google";
import Link from "next/link";

const cursive = Courgette({
  subsets: ["latin"],
  weight: "400",
});

const OrderCompletionModal = () => {
  return (
    <ModalOverlay width={800}>
      <div className="flex flex-col justify-center items-center py-8">
        <div className="bg-[#fff] p-3 rounded-full shadow-sm mb-4">
          <BsCheckLg size={60} className={`text-green-500`} />
        </div>
        <h1
          className={`text-[1.35rem] md:text-[1.6rem] lg:text-[1.95rem] text-gray-500 font-normal my-6 ${cursive.className}`}
        >
          Your Order Is Completed!
        </h1>
        <h3
          className={`text-[.95rem] text-gray-400 mb-6 ${cursive.className} max-w-[580px] text-center`}
        >
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </h3>
        <Link
          href={`/market-place`}
          className="bg-green-500 text-[#fff] text-[.85rem] px-6 py-3 rounded-md mt-4"
        >
          Continue Shopping
        </Link>
      </div>
    </ModalOverlay>
  );
};
export default OrderCompletionModal;
