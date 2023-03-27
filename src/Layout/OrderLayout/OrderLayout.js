import React from "react";
import { useLocation } from "react-router-dom";
import OrderInfo from "../../Pages/CheckOut/OrderInfo/OrderInfo";
import CheckoutsInformationHeader from "./CheckoutsInformationHeader";
const OrderLayout = () => {
  return (
    <div className="container mx-auto lg:mt-10 p-5">
      <div className="lg:grid grid-cols-2 gap-5 ">
        <div className="w-full">
          <CheckoutsInformationHeader />
        </div>
        <div className="">
          <OrderInfo />
        </div>
      </div>
    </div>
  );
};

export default OrderLayout;
