import React, { useState } from "react";

const ManageOrderFilter = () => {
  const [limit, setLimit] = useState(10);
  const [price, setPrice] = useState(10);
  return (
    <div className="my-5 sm:flex justify-between items-center gap-3">
      <div>
        <div className="block mb-5 sm:mb-0">
          <select
            onChange={(e) => setPrice(e.target.value)}
            defaultValue={price}
            className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-40 border-slate-300"
          >
            <option selected className="font-medium text-md" value="">
              Default
            </option>
            <option className=" font-medium text-md" value="pending">
              Pending
            </option>
            <option className=" font-medium text-md" value="cancelled">
              Cancelled
            </option>
            <option className=" font-medium text-md" value="delivered">
              Delivered
            </option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="block sm:ml-5 sm:mt-0">
          <select
            onChange={(e) => setPrice(e.target.value)}
            defaultValue={price}
            className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-40 border-slate-300"
          >
            <option selected className="font-medium text-md" value="latest">
              Default
            </option>
            <option className=" font-medium text-md" value="dateOldToNew">
              Date (Old → New)
            </option>
            <option className=" font-medium text-md" value="priceHighToLow">
              Price (High → Low)
            </option>
            <option className=" font-medium text-md" value="priceLowToHigh">
              Price (Low → High)
            </option>
            <option className=" font-medium text-md" value="quantityHighToLow">
              Quantity (High → Low)
            </option>
            <option className=" font-medium text-md" value="quantityLowToHigh">
              Quantity (Low → High)
            </option>
          </select>
        </div>
        <div className="block">
          <select
            onChange={(e) => setLimit(e.target.value)}
            defaultValue={limit}
            className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-40 border-slate-300"
          >
            <option selected className="font-medium" value="10">
              10
            </option>
            <option className="font-medium" value="15">
              15
            </option>
            <option className="font-medium" value="25">
              25
            </option>
            <option className="font-medium" value="50">
              50
            </option>
            <option className="font-medium" value="100">
              100
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ManageOrderFilter;
