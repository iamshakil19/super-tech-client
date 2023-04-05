import React, { useEffect, useState } from "react";
import { useGetOrderByEmailQuery } from "../../../../features/orders/ordersApi";
import Error from "../../../Shared/Error/Error";
import Loading from "../../../Shared/Loading/Loading";
import emptyOrderImg from "../../../../Assets/Others/emptyOrder.gif";
import MyOrdersRow from "./MyOrdersRow";
import { useSelector } from "react-redux";
import OrderDetailsModal from "../../AdminPage/ManageOrders/OrderDetailsModal";

const MyOrders = () => {
  const { user } = useSelector((state) => state.auth);
  const { email } = user || {};

  const {
    data: ordersData,
    isError,
    isLoading,
    error,
  } = useGetOrderByEmailQuery(email);

  const orders = ordersData?.data || [];

  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error error="There was an error" />;
  } else if (!isLoading && !isError && orders?.length === 0) {
    content = (
      <div className="flex justify-center items-center min-h-screen poppins">
        <div>
          <img className="block mx-auto w-44" src={emptyOrderImg} alt="" />
          <p className="text-center font-semibold text-slate-800 text-xl">
            No Orders Yet
          </p>
        </div>
      </div>
    );
  } else if (!isLoading && !isError && orders?.length > 0) {
    content = (
      <div className="p-3 pb-10">
        <h2 className="text-xl font-serif font-semibold my-5">All Orders</h2>
        <div className="overflow-x-auto z-10 sm:rounded-lg poppins mb-10">
          <table className="w-full text-left">
            <thead className="text-sm text-white uppercase bg-slate-900">
              <tr>
                <th className="px-6 py-4 whitespace-nowrap">SL</th>
                <th className="px-6 py-4 whitespace-nowrap">Details</th>
                <th className="px-6 py-4 whitespace-nowrap">Order ID</th>
                <th className="px-6 py-4 whitespace-nowrap">Name</th>
                <th className="px-6 py-4 whitespace-nowrap">Number</th>
                <th className="px-6 py-4 whitespace-nowrap">Date</th>
                <th className="px-6 py-4 whitespace-nowrap">City</th>
                <th className="px-6 py-4 whitespace-nowrap">Quantity</th>
                <th className="px-6 py-4 whitespace-nowrap">Price</th>
                <th className="px-6 py-4 whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody className="">
              {orders?.map((myOrder, i) => (
                <MyOrdersRow myOrder={myOrder} key={myOrder._id} i={i + 1} />
              ))}
            </tbody>
          </table>
        </div>
        <OrderDetailsModal />
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return content;
};

export default MyOrders;
