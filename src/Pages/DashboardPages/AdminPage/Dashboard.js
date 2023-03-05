import React from "react";
import LatestOrders from "./Analytics/LatestOrders";
import Statistics from "./Analytics/Statistics";
import TotalCount from "./Analytics/TotalCount";

const Dashboard = () => {
  return (
    <div className="">
      <TotalCount />
      <Statistics/>
      <LatestOrders />
    </div>
  );
};

export default Dashboard;
