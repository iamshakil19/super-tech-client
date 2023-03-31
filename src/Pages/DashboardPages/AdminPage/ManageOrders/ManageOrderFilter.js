import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleFields,
  handleLimit,
  handleSort,
} from "../../../../features/orders/ordersSlice";

const ManageOrderFilter = () => {
  // const [limit, setLimit] = useState(10);
  const { orderFilter } = useSelector((state) => state.orders);
  const { page, limit, sort, status } = orderFilter;
  const dispatch = useDispatch();
  return (
    <div className="my-5 sm:flex justify-between items-center gap-3 poppins">
      <div>
        <div className=" mb-5 sm:mb-0 flex items-center">
          <p className="hidden md:block mr-2">Filter :</p>
          <select
            onChange={(e) => dispatch(handleFields(e.target.value))}
            defaultValue={status}
            className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-40 border-slate-300"
          >
            <option selected className="font-medium text-md" value="">
              Default
            </option>
            <option className=" font-medium text-md" value="pending">
              Pending
            </option>
            <option className=" font-medium text-md" value="completed">
              Completed
            </option>
            <option className=" font-medium text-md" value="canceled">
              Canceled
            </option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="sm:ml-5 sm:mt-0 flex items-center">
          <p className="hidden md:block mr-2">Sort By :</p>
          <select
            onChange={(e) => dispatch(handleSort(e.target.value))}
            defaultValue={sort}
            className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-40 border-slate-300"
          >
            <option selected className="font-medium text-md" value="-createdAt">
              Default
            </option>
            <option className=" font-medium text-md" value="createdAt">
              Date (Old → New)
            </option>
            <option className=" font-medium text-md" value="totalPrice">
              Price (Low → High)
            </option>
            <option className=" font-medium text-md" value="-totalPrice">
              Price (High → Low)
            </option>
            <option className=" font-medium text-md" value="totalQuantity">
              Quantity (Low → High)
            </option>
            <option className=" font-medium text-md" value="-totalQuantity">
              Quantity (High → Low)
            </option>
          </select>
        </div>
        <div className="flex items-center">
          <p className="hidden md:block mr-2">Show :</p>
          <select
            onChange={(e) => dispatch(handleLimit(e.target.value))}
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
