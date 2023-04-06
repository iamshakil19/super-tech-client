import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { handleOrderSearchText } from "../../../../features/orders/ordersSlice";
import { useDispatch, useSelector } from "react-redux";
const ManageOrdersHeaders = () => {
  const dispatch = useDispatch();
  const { orderFilter } = useSelector((state) => state.orders);
  return (
    <div className="md:flex items-center justify-between">
      <h2 className="text-2xl font-serif font-bold hidden md:block">
        Manage Orders
      </h2>
      <div className="flex items-center bg-black px-4 py-1.5 max-w-xs rounded-full mx-auto md:mx-0">
        <input
          onChange={(e) => dispatch(handleOrderSearchText(e.target.value))}
          defaultValue={orderFilter?.orderSearchText}
          type="text"
          title="Search by order id, name, number"
          placeholder="Search here"
          className="w-full outline-none text-white bg-black p-1"
        />
        <BiSearchAlt2 className="ml-2 text-white cursor-pointer" size={25} />
      </div>
    </div>
  );
};

export default ManageOrdersHeaders;
