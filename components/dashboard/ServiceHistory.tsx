import { ServiceHistory as IServiceHistory } from "@/schema/interfaces";

const ServiceHistory = ({
  id,
  date,
  type,
  address,
  paymentMethod,
  amount,
}: IServiceHistory) => {
  return (
    <>
      <p className="basis-[14%] text-[#000] text-[.6rem] md:text-[.85rem]">
        {date}
      </p>
      <p className="basis-[19%] text-[#000] text-[.6rem] md:text-[.85rem] text-center">
        {type}
      </p>
      <p className="basis-[30%] text-[#000] text-[.6rem] md:text-[.85rem] text-center">
        {address}
      </p>
      <p
        className={`basis-[20%] ${
          paymentMethod === "Online"
            ? "bg-green-100 text-green-600 text-[.6rem] md:text-[.85rem] text-center p-3 rounded-md"
            : "bg-orange-100 text-orange-600 text-center text-[.6rem] md:text-[.85rem] p-3 rounded-md"
        }`}
      >
        {paymentMethod}
      </p>
      <p className="basis-[17%] text-[#000] text-[.6rem] md:text-[.85rem] text-center pl-1.5">
        ₦{amount}.00
      </p>
    </>
  );
};
export default ServiceHistory;
