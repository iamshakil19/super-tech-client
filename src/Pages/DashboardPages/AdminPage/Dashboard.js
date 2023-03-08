import React from "react";
import LatestOrders from "./Analytics/LatestOrders";
import LatestProducts from "./Analytics/LatestProducts";
import Statistics from "./Analytics/Statistics";
import TotalCount from "./Analytics/TotalCount";

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
