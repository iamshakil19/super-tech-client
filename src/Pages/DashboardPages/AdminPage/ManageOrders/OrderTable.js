import React from "react";
import { useGetAllOrderQuery } from "../../../../features/orders/ordersApi";
import OrderTableRow from "./OrderTableRow";
const OrderTable = () => {
  const { data: allOrders, isError, isLoading, error } = useGetAllOrderQuery();
  const { orders } = allOrders?.data || {};

  return (
    <div>
      <div class="overflow-x-auto z-10  sm:rounded-lg poppins pb-36">
        <table class="w-full text-left">
          <thead class="text-sm text-white uppercase bg-slate-900">
            <tr>
              <th class="px-6 py-4 whitespace-nowrap">SL</th>
              <th class="px-6 py-4 whitespace-nowrap">Details</th>
              <th class="px-6 py-4 whitespace-nowrap">Order Id</th>
              <th class="px-6 py-4 whitespace-nowrap">Name</th>
              <th class="px-6 py-4 whitespace-nowrap">Number</th>
              
              <th class="px-6 py-4 whitespace-nowrap">Date</th>
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
