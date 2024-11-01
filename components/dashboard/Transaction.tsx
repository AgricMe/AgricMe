import { TransactionStatus } from "@/schema/enums";
import { Transaction as ITransaction } from "@/schema/interfaces";

const Transaction = ({
  id,
  product,
  customer,
  brand,
  quantity,
  status,
}: ITransaction) => {
  return (
    <>
      <p className="basis-[26%] text-[#000] text-[.85rem]">{customer}</p>
      <p className="basis-[22%] text-[#000] text-[.85rem] text-center">
        {product}
      </p>
      <p className="basis-[19%] text-[#000] text-[.85rem] text-center">
        {brand}
      </p>
      <p className="basis-[17%] text-[#000] text-[.85rem] text-center">
        {quantity}
      </p>
      <p
        className={`basis-[17%] ${
          status === TransactionStatus.COMPLETED
            ? "bg-green-100 text-green-600 text-[.85rem] text-center p-2 rounded-full"
            : status === TransactionStatus.FAILED
            ? "bg-red-100 text-red-600 text-[.75rem] text-center p-2 rounded-full"
            : "bg-orange-100 text-orange-600 text-center text-[.7rem] p-2 rounded-full"
        }`}
      >
        {status}
      </p>
    </>
  );
};
export default Transaction;
