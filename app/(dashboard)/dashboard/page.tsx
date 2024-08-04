import DashboardInfoContainer from "@/components/dashboard/DashboardInfoContainer";
import Metrix from "@/components/dashboard/Metrix";
import Nav from "@/components/dashboard/Nav";
import { metrixData, topProductsData, transactionData } from "@/utils/data";
import Image from "next/image";
import img1 from "@/public/component-images/butcher-image.jpg";
import Product from "@/components/dashboard/Product";
import Transaction from "@/components/dashboard/Transaction";

const page = () => {
  return (
    <section className="pb-10">
      <Nav />
      <div className="grid grid-cols-3 mt-8 gap-2 md:gap-8">
        {metrixData.map((item) => {
          return <Metrix key={item.id} {...item} />;
        })}
      </div>
      <DashboardInfoContainer
        leftSide={
          <>
            <div className="flex justify-between items-start pb-4">
              <h3 className="text-[1.2rem] text-[#000] font-bold">
                Sales Data
              </h3>
              <p className="text-[.85rem] text-green-400">Detail</p>
            </div>
            <Image src={img1} alt="Sales Data Image" className="h-[250px]" />
          </>
        }
        rightSide={
          <>
            <div className="flex justify-between items-start pb-4">
              <h3 className="text-[1.2rem] text-[#000] font-bold">
                Top Products
              </h3>
              <select
                name="period"
                id="period"
                className="border-gray-200 border-2 bg-gray-50 text-gray-400 text-[.85rem] p-2 rounded-xl outline-none"
              >
                <option value="This Month">This Month</option>
                <option value="This Year">This Year</option>
              </select>
            </div>
            <div className="flex justify-between items-start py-3 border-b-2 border-gray-100">
              <p className="basis-[10%] text-[.85rem] text-gray-400">No</p>
              <p className="basis-[50%] text-[.85rem] text-gray-400">
                Products
              </p>
              <p className="basis-[20%] text-[.85rem] text-gray-400">Price</p>
              <p className="basis-[20%] text-[.85rem] text-gray-400">
                Item Sold
              </p>
            </div>
            {topProductsData.map((product) => {
              return (
                <div
                  className={`flex justify-between items-center font-medium ${
                    product.id === topProductsData.length
                      ? "pt-3"
                      : "border-b-2 border-gray-100 pt-3 pb-2.5"
                  }`}
                  key={product.id}
                >
                  <Product {...product} />
                </div>
              );
            })}
          </>
        }
      />
      <DashboardInfoContainer
        leftSide={
          <>
            <div className="flex justify-between items-start pb-4">
              <h3 className="text-[1.2rem] text-[#000] font-bold">
                Latest Transactions
              </h3>
              <select
                name="period"
                id="period"
                className="border-gray-200 border-2 bg-gray-50 text-gray-400 text-[.85rem] p-2 rounded-xl outline-none"
              >
                <option value="Today">Today</option>
                <option value="Yesterday">Yesterday</option>
              </select>
            </div>
            <div className="flex justify-between items-start pb-3 border-b-2 border-gray-100">
              <p className="basis-[26%] text-[.85rem] text-gray-400">
                Customer
              </p>
              <p className="basis-[22%] text-[.85rem] text-gray-400 text-center">
                Product
              </p>
              <p className="basis-[19%] text-[.85rem] text-gray-400 text-center">
                Brand
              </p>
              <p className="basis-[17%] text-[.85rem] text-gray-400 text-center">
                Qty
              </p>
              <p className="basis-[17%] text-[.85rem] text-gray-400 text-center">
                Status
              </p>
            </div>
            {transactionData.map((transaction) => {
              return (
                <div
                  className={`flex justify-between items-center font-medium ${
                    transaction.id === transactionData.length
                      ? "pt-3"
                      : "border-b-2 border-gray-100 pt-3 pb-2.5"
                  }`}
                  key={transaction.id}
                >
                  <Transaction {...transaction} />
                </div>
              );
            })}
          </>
        }
        rightSide={
          <>
            <div className="flex justify-between items-start pb-4">
              <h3 className="text-[1.2rem] text-[#000] font-bold">
                Customer Segmentation
              </h3>
              <select
                name="period"
                id="period"
                className="border-gray-200 border-2 bg-gray-50 text-gray-400 text-[.85rem] p-2 rounded-xl outline-none"
              >
                <option value="Country">Country</option>
                <option value="Nigeria">Nigeria</option>
              </select>
            </div>
            <Image src={img1} alt="Sales Data Image" className="h-[255px]" />
          </>
        }
      />
    </section>
  );
};

export default page;
