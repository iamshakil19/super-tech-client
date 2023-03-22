import React from "react";
import { BiDotsVertical } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";

const OrderTableRow = ({ i, order }) => {
  const {
    _id,
    name,
    number,
    date,
    productName,
    city,
    area,
    streetAddress,
    quantity,
    status,
  } = order;
  return (
    <tr class="bg-white border-b border-gray-300 hover:bg-gray-300">
      <td class="px-6 py-4 whitespace-nowrap text-[15px]">{i}</td>
      <td class="px-6 py-4 whitespace-nowrap xl:hidden">
        <BsEyeFill size={24} className="cursor-pointer" />
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-[15px]">{_id}</td>
      <td class="px-6 py-4 whitespace-nowrap capitalize text-[15px]">{name}</td>
      <td class="px-6 py-4 whitespace-nowrap text-[15px]">{number}</td>
      <td class="px-6 py-4 whitespace-nowrap text-[15px]">{date}</td>
      <td class="px-6 py-4 whitespace-nowrap capitalize text-[15px]">
        {productName.length > 20
          ? productName.slice(0, 20) + "..."
          : productName}
      </td>
      <td class="px-6 py-4 whitespace-nowrap capitalize text-[15px]">{city}</td>
      <td class="px-6 py-4 whitespace-nowrap text-[15px]">{quantity}</td>
      <td class="px-6 py-4 whitespace-nowrap text-[15px]">{45000}</td>
      <td class={`px-6 py-4 whitespace-nowrap capitalize`}>
        <span
          className={`block text-center ${
            status === "pending" &&
            "text-orange-500 bg-orange-200 px-3 py-1 rounded-full font-medium text-sm"
          } ${
            status === "cancelled" &&
            "text-red-500 bg-red-200 px-3 py-1 rounded-full font-medium text-sm"
          } ${
            status === "delivered" &&
            "text-green-500 bg-green-200 px-3 py-1 rounded-full font-medium text-sm"
          }`}
        >
          {status}
        </span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap dropdown dropdown-bottom dropdown-left">
        {" "}
        <label htmlFor="" tabIndex={2}>
          <BiDotsVertical className="text-blue-500 cursor-pointer" size={24} />{" "}
        </label>
        <ul
          tabIndex={2}
          className="dropdown-content menu rounded-md  shadow-md shadow-gray-400 w-52"
        >
          <li className="text-white text-[15px] bg-slate-900 p-2 hover:bg-slate-600 cursor-pointer font-medium">
            Details
          </li>
          <li className="text-white text-[15px] bg-slate-900 p-2 hover:bg-slate-600 cursor-pointer font-medium">
            Update Status
          </li>
          <li className="text-red-500 text-[15px] bg-slate-900 p-2 hover:bg-slate-600 cursor-pointer font-medium">
            Delete
          </li>
        </ul>
      </td>
    </tr>
  );
};

export default OrderTableRow;
