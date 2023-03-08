import React from "react";
import ManageOrderFilter from "./ManageOrderFilter";
import ManageOrdersHeaders from "./ManageOrdersHeaders";

const ManageOrders = () => {
  return (
    <div className="mt-5 poppins">
      <ManageOrdersHeaders />
      <ManageOrderFilter/>
      
    </div>
  );
};

export default ManageOrders;
