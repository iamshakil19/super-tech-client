import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllOrderQuery } from "../../../../features/orders/ordersApi";
import { handlePagination } from "../../../../features/orders/ordersSlice";
import OrderTableRow from "./OrderTableRow";
const OrderTable = () => {
  const dispatch = useDispatch();
  const { orderFilter } = useSelector((state) => state.orders);
  const { page, limit, sort, status, orderSearchText } = orderFilter;
  let queryString = `page=${page}&limit=${limit}&sort=${sort}`;
  if (status) {
    queryString += `&status=${status}`;
  }
  if (orderSearchText) {
    queryString += `&orderSearchText=${orderSearchText}`;
  }
  const {
    data: allOrders,
    isError,
    isLoading,
    error,
  } = useGetAllOrderQuery(queryString);
  const { orders, pageCount } = allOrders?.data || {};
  console.log(allOrders);

  const handlePageClick = (event) => {
    dispatch(handlePagination(event.selected + 1));
  };
  return (
    <div>
      <div class="overflow-x-auto z-10  sm:rounded-lg poppins mb-10">
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
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-end gap-2"
        pageLinkClassName="py-1.5 px-4 font-medium hover:bg-slate-800 hover:text-white"
        previousLinkClassName="py-1.5 px-4 font-medium hover:bg-slate-800 bg-slate-300 hover:text-white"
        nextLinkClassName="py-1.5 px-4 font-medium hover:bg-slate-800  bg-slate-300 hover:text-white"
        activeLinkClassName="bg-slate-800 text-white"
      />
    </div>
  );
};

export default OrderTable;
