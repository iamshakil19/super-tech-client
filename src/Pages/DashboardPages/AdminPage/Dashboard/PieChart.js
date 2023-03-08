import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  const data = {
    labels: [
      "Home",
      "Table",
      "Storage",
      "Steel Furniture",
      "Chair",
      "Sofa",
      "Work Station",
      "Garments",
      "Interior",
    ],
    datasets: [
      {
        label: "Products Count",
        data: [12, 19, 9, 13, 10, 32, 8, 54, 19],
        backgroundColor: [
          "rgb(227, 52, 47, 0.8)",
          "rgb(246, 153, 63, 0.8)",
          "rgb(255, 237, 74, 0.8)",
          "rgb(56, 193, 114, 0.8)",
          "rgb(77, 192, 181, 0.8)",
          "rgb(52, 144, 220, 0.8)",
          "rgb(101, 116, 205, 0.8)",
          "rgb(149, 97, 226, 0.8)",
          "rgb(246, 109, 155, 0.8)",
        ],
        borderColor: [
          "rgb(227, 52, 47, 1)",
          "rgb(246, 153, 63, 1)",
          "rgb(255, 237, 74, 1)",
          "rgb(56, 193, 114, 1)",
          "rgb(77, 192, 181, 1)",
          "rgb(52, 144, 220, 1)",
          "rgb(101, 116, 205, 1)",
          "rgb(149, 97, 226, 1)",
          "rgb(246, 109, 155, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="max-w-sm mx-auto">
      {" "}
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
