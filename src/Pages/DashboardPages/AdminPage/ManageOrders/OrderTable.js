import React from "react";
import { useGetAllOrderQuery } from "../../../../features/orders/ordersApi";
import OrderTableRow from "./OrderTableRow";
const myOrdersData = [
  {
    _id: "507f1f77bcf86cd799439011",
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "delivered",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "cancelled",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
];
const OrderTable = () => {
  const { data: allOrders, isError, isLoading, error } = useGetAllOrderQuery();
  const { orders } = allOrders?.data || {};

  return (
    <div>
      <div class="overflow-x-auto z-10 shadow-lg sm:rounded-lg poppins pb-36">
        <table class="w-full text-left">
          <thead class="text-sm text-white uppercase bg-slate-900">
            <tr>
              <th class="px-6 py-4 whitespace-nowrap">SL</th>
              <th class="px-6 py-4 whitespace-nowrap xl:hidden">Details</th>
              <th class="px-6 py-4 whitespace-nowrap">Order Id</th>
              <th class="px-6 py-4 whitespace-nowrap">Name</th>
              <th class="px-6 py-4 whitespace-nowrap">Number</th>
              <th class="px-6 py-4 whitespace-nowrap">Date</th>
              <th class="px-6 py-4 whitespace-nowrap">Product</th>
              <th class="px-6 py-4 whitespace-nowrap">City</th>
              <th class="px-6 py-4 whitespace-nowrap">Quantity</th>
              <th class="px-6 py-4 whitespace-nowrap">Price</th>
              <th class="px-6 py-4 whitespace-nowrap">Status</th>
              <th class="px-6 py-4 whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {orders?.map((order, i) => (
              <OrderTableRow order={order} key={i} i={i + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
