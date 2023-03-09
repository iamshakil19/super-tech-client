import React, { useEffect } from "react";
import ManageOrderFilter from "./ManageOrderFilter";
import ManageOrdersHeaders from "./ManageOrdersHeaders";
import OrderTable from "./OrderTable";

const ManageOrders = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-5 poppins">
      <ManageOrdersHeaders />
      <ManageOrderFilter />
      <OrderTable />
    </div>
  );
};

export default ManageOrders;
