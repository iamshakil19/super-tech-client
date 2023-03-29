import moment from "moment/moment";
import React from "react";
import { BiDotsVertical } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import numberWithComma from "../../../../Utils/numberWithComa";
import { FaCartArrowDown } from "react-icons/fa";
import { useUpdateOrderStatusMutation } from "../../../../features/orders/ordersApi";
const OrderTableRow = ({ i, order }) => {
  const [updateOrderStatus, { isSuccess }] = useUpdateOrderStatusMutation();
  const {
    _id,
    orderId,
    name,
    phoneNumber,
    division,
    createdAt,
    totalPrice,
    area,
    streetAddress,
    totalQuantity,
    cart,
    status,
  } = order;

  const handleStatus = (e, id) => {
    const status = { status: e.target.value };
    updateOrderStatus({ id, status });
  };

  return (
    <tr class="bg-white border-b poppins border-gray-300 hover:bg-gray-200">
      <td class="px-6 py-4 whitespace-nowrap text-[15px]">{i}</td>
      <td class="px-6 py-4 whitespace-nowrap capitalize text-[15px]">
        <button className="bg-slate-800 text-white py-0.5 px-3 rounded-full text-sm font-medium">
          Details
        </button>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-[15px]">{orderId}</td>
      <td class="px-6 py-4 whitespace-nowrap capitalize text-[15px]">{name}</td>
      <td class="px-6 py-4 whitespace-nowrap text-[15px]">{phoneNumber}</td>

      <td class="px-6 py-4 whitespace-nowrap text-[15px]">
        {moment(createdAt).format("lll")}
      </td>

      <td class="px-6 py-4 whitespace-nowrap capitalize text-[15px]">
        {division}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-[15px]">{totalQuantity}</td>
      <td class="px-6 py-4 whitespace-nowrap text-[15px] font-semibold">
        ৳ {numberWithComma(totalPrice)}
      </td>
      {/* <td class={`px-6 py-4 whitespace-nowrap capitalize`}>
        <span
          className={`block text-center ${
            status === "pending" &&
            "text-orange-600 bg-orange-200 px-3 py-1 rounded-full font-medium text-xs"
          } ${
            status === "canceled" &&
            "text-red-600 bg-red-200 px-3 py-1 rounded-full font-medium text-xs"
          } ${
            status === "completed" &&
            "text-green-600 bg-green-200 px-3 py-1 rounded-full font-medium text-xs"
          }`}
        >
          {status}
        </span>
      </td> */}
      <td>
        <select
          // disabled={status === "completed"}
          defaultValue={status}
          onChange={(e) => handleStatus(e, _id)}
          className={`outline-none border rounded-full text-sm px-2 font-medium ${
            status === "pending" &&
            "bg-orange-200 text-orange-600 border-orange-300"
          } ${
            status === "completed" &&
            "bg-green-200 text-green-600 border-green-300"
          } ${
            status === "canceled" && "bg-red-200 text-red-600 border-red-300"
          }`}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="canceled">Canceled</option>
        </select>
      </td>
      <td class="px-6 py-4 whitespace-nowrap capitalize text-[15px]">
        <button className="bg-red-500 text-white py-0.5 px-3 rounded-full text-sm font-medium">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default OrderTableRow;
