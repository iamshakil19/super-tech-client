import React, { useEffect } from "react";
import LatestOrders from "./LatestOrders";
import LatestProducts from "./LatestProducts";
import Statistics from "./Statistics";
import TotalCount from "./TotalCount";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <TotalCount />
      <Statistics />
      <LatestOrders />
      <LatestProducts />
    </div>
  );
};

export default Dashboard;
