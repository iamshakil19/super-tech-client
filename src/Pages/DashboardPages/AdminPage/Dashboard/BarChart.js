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
import { useGetAllOrderQuery } from "../../../../features/orders/ordersApi";
import moment from "moment/moment";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarChart = () => {
  const queryString = ""
  const { data: allOrders, isError, isLoading, error } = useGetAllOrderQuery(queryString);
  const { orders } = allOrders?.data || {};

  const completedOrder = orders?.filter(
    (order) => order.status === "completed"
  );
  const time = [
    ...new Set(
      completedOrder?.map((item) => moment(item.createdAt).format("lll"))
    ),
  ];
  const amount = [...new Set(completedOrder?.map((item) => item.totalPrice))];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  const labels = time;
  const data = {
    labels,
    datasets: [
      {
        label: "Sales Amount",
        data: amount,
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
