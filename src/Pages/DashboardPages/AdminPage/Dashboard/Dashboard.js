import React from "react";
import LatestOrders from "./LatestOrders";
import LatestProducts from "./LatestProducts";
import Statistics from "./Statistics";
import TotalCount from "./TotalCount";

const Dashboard = () => {
  return (
    <div className="">
      <TotalCount />
      <Statistics/>
      <LatestProducts/>
      <LatestOrders />
    </div>
  );
};

export default Dashboard;
