import moment from "moment";
import React from "react";
import { BiDotsVertical } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { handleOrderDetails } from "../../../../features/orders/ordersSlice";
import numberWithComma from "../../../../Utils/numberWithComa";
const MyOrdersRow = ({ myOrder, i }) => {
  const dispatch = useDispatch();
  const {
    name,
    phoneNumber,
    createdAt,
    orderId,
    division,
    totalPrice,
    totalQuantity,
    status,
  } = myOrder;

  const handleDetails = () => {
    dispatch(handleOrderDetails(myOrder));
  };

  return (
    <tr className="bg-white border-b border-gray-300 hover:bg-gray-300">
      <td className="px-6 py-4 whitespace-nowrap text-[15px]">{i}</td>

      <td className="px-6 py-4 whitespace-nowrap capitalize text-[15px]">
        <button
          onClick={handleDetails}
          className="bg-slate-800 text-white py-0.5 px-3 rounded-full text-sm font-medium"
        >
          Details
        </button>
      </td>
      <td className="px-6 py-4 whitespace-nowrap capitalize text-[15px]">
        {orderId}
      </td>
      <td className="px-6 py-4 whitespace-nowrap capitalize text-[15px]">
        {name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-[15px]">{phoneNumber}</td>
      <td className="px-6 py-4 whitespace-nowrap text-[15px]">
        {moment(createdAt).format("lll")}
      </td>
      <td className="px-6 py-4 whitespace-nowrap capitalize text-[15px]">
        {division}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-[15px]">
        {totalQuantity}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
        ৳ {totalPrice ? numberWithComma(totalPrice) : ""}
      </td>
      <td
        className={`px-6 py-4 whitespace-nowrap capitalize w-24 text-center text-[15px] `}
      >
        <span
          className={`capitalize rounded-full block px-2 py-0.5 text-sm font-medium ${
            status === "pending" &&
            "text-orange-500 bg-orange-200 border border-orange-400"
          } ${
            status === "canceled" &&
            "text-red-600 bg-red-200 border border-red-400"
          } ${
            status === "completed" &&
            "text-green-600 bg-green-200 border border-green-400"
          }`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
};

export default MyOrdersRow;
