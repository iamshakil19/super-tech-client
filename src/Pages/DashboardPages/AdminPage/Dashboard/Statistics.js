import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const Statistics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 poppins">
      <div className="border border-gray-200 p-5 rounded-md shadow-lg shadow-gray-200 bg-white">
        <h2 className="text-lg mb-3 font-semibold">Sales Analytics</h2>
        <div>
          <BarChart />
        </div>
      </div>
      <div className="border border-gray-200 p-5 rounded-md shadow-lg shadow-gray-200 bg-white">
        <h2 className="text-lg font-semibold">Products Analytics</h2>
        <div>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
