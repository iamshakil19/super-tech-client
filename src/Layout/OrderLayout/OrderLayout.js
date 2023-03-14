import React from "react";
import { Outlet } from "react-router-dom";
import OrderInfo from "../../Pages/CheckOut/OrderInfo/OrderInfo";

const OrderLayout = () => {
  return (
    <div className="container mx-auto mt-10 p-5">
      <div className="lg:grid grid-cols-2 gap-5">
        <div className="bg-red-500">
          <Outlet />
        </div>
        <div className="">
          <OrderInfo />
        </div>
      </div>
    </div>
  );
};

export default OrderLayout;
