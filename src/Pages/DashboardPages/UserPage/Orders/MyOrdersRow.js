import React from "react";
import { BiDotsVertical } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
const MyOrdersRow = ({ myOrder, i }) => {
  const {
    name,
    number,
    date,
    productName,
    city,
    area,
    streetAddress,
    quantity,
    status,
  } = myOrder;

  return (
    <tr class="bg-white border-b border-gray-300 hover:bg-gray-300">
      <td class="px-6 py-4 whitespace-nowrap text-[15px]">{i}</td>
      <td class="px-6 py-4 whitespace-nowrap xl:hidden">
        <BsEyeFill size={24} className="cursor-pointer" />
      </td>
      <td class="px-6 py-4 whitespace-nowrap capitalize text-[15px]">
        {name}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-[15px]">{number}</td>
      <td class="px-6 py-4 whitespace-nowrap text-[15px]">{date}</td>
      <td class="px-6 py-4 whitespace-nowrap capitalize text-[15px]">
        {productName?.length > 20
          ? productName?.slice(0, 20) + "..."
          : productName}
      </td>
      <td class="px-6 py-4 whitespace-nowrap capitalize text-[15px]">
        {city}
      </td>
      <td class="px-6 py-4 whitespace-nowrap capitalize text-[15px]">
        {area}
      </td>
      <td class="px-6 py-4 whitespace-nowrap capitalize text-[15px]">
        {streetAddress.length > 20
          ? streetAddress.slice(0, 20) + "..."
          : streetAddress}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-[15px]">{quantity}</td>
      <td class="px-6 py-4 whitespace-nowrap text-[15px]">{45000}</td>
      <td class="px-6 py-4 whitespace-nowrap capitalize text-[15px]">{status}</td>
      <td class="px-6 py-4 whitespace-nowrap dropdown dropdown-bottom dropdown-left">
        {" "}
        <label htmlFor="" tabIndex={1}>
          <BiDotsVertical className="text-blue-500 cursor-pointer" size={24} />{" "}
        </label>
        <ul
          tabIndex={1}
          className="dropdown-content menu rounded-md  shadow-md shadow-gray-400 w-52"
        >
          <li className="text-white bg-slate-900 p-2 hover:bg-slate-600 cursor-pointer font-medium">
            Details
          </li>
        </ul>
      </td>
    </tr>
  );
};

export default MyOrdersRow;
