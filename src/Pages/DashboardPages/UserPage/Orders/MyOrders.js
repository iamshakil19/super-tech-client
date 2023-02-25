import React from "react";

import MyOrdersRow from "./MyOrdersRow";

const myOrdersData = [
  {
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
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
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

const MyOrders = () => {
  return (
    <div className="bg-[#F2F3F8] p-5">
      <h2 className="text-xl font-serif font-semibold my-5">All Orders</h2>
      {myOrdersData.length > 0 ? (
        <div class="overflow-x-auto shadow-lg sm:rounded-lg poppins pb-20">
          <table class="w-full text-left">
            <thead class="text-sm text-white uppercase bg-slate-900">
              <tr>
                <th class="px-6 py-4 whitespace-nowrap">SL</th>
                <th class="px-6 py-4 whitespace-nowrap">Name</th>
                <th class="px-6 py-4 whitespace-nowrap">Number</th>
                <th class="px-6 py-4 whitespace-nowrap">Date</th>
                <th class="px-6 py-4 whitespace-nowrap">Product</th>
                <th class="px-6 py-4 whitespace-nowrap">City</th>
                <th class="px-6 py-4 whitespace-nowrap">Area</th>
                <th class="px-6 py-4 whitespace-nowrap">Street Address</th>
                <th class="px-6 py-4 whitespace-nowrap">Quantity</th>
                <th class="px-6 py-4 whitespace-nowrap">Status</th>
                <th class="px-6 py-4 whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {
                myOrdersData.map((myOrder, i) => <MyOrdersRow myOrder={myOrder} key={i} i={i + 1} />)
              }
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h2 className="text-center font-medium">No Order Found</h2>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
