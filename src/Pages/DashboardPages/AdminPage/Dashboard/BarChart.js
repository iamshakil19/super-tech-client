import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Sales Amount",
        data: [2, 5, 8, 34, 87, 2, 87, 4, 90, 34, 134, 83],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="w-full mx-auto">
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
