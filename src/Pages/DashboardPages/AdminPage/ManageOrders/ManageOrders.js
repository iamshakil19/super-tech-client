import React, { useEffect } from "react";
import ManageOrderFilter from "./ManageOrderFilter";
import ManageOrdersHeaders from "./ManageOrdersHeaders";
import OrderTable from "./OrderTable";
import { useGetAllOrderQuery } from "../../../../features/orders/ordersApi";
import Loading from "../../../Shared/Loading/Loading";
import Error from "../../../Shared/Error/Error";
import emptyOrderImg from "../../../../Assets/Others/emptyOrder.gif";
const ManageOrders = () => {
  const { data: allOrders, isError, isLoading, error } = useGetAllOrderQuery();
  const { orders } = allOrders?.data || {};

  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message="There was an error" />;
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
      <div className="mt-5 poppins">
        <ManageOrdersHeaders />
        <ManageOrderFilter />
        <OrderTable />
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return content;
};

export default ManageOrders;
