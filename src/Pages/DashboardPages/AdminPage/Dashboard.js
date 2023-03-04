import React from "react";
import LatestOrders from "./Analytics/LatestOrders";
import TotalCount from "./Analytics/TotalCount";

const Dashboard = () => {
  return (
    <div className="">
      <TotalCount />
      <LatestOrders />
    </div>
  );
};

export default Dashboard;
