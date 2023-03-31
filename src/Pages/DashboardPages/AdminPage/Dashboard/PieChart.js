import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useGetAllProductsQuery } from "../../../../features/products/productsApi";
import { useSelector } from "react-redux";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { page, limit, sort } = useSelector((state) => state.productsFilter);
  const {
    data: allProducts,
    isError,
    isLoading,
    error,
  } = useGetAllProductsQuery({page, limit, sort});
  const { products } = allProducts?.data || {};

  const homeProducts = products?.filter(
    (product) => product.category === "home"
  );
  const tableProducts = products?.filter(
    (product) => product.category === "table"
  );
  const storageProducts = products?.filter(
    (product) => product.category === "storage"
  );
  const steelFurnitureProducts = products?.filter(
    (product) => product.category === "steelFurniture"
  );
  const chairProducts = products?.filter(
    (product) => product.category === "chair"
  );
  const sofaProducts = products?.filter(
    (product) => product.category === "sofa"
  );
  const workStationProducts = products?.filter(
    (product) => product.category === "workStation"
  );
  const garmentsProducts = products?.filter(
    (product) => product.category === "garments"
  );
  const interiorProducts = products?.filter(
    (product) => product.category === "interior"
  );

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
        data: [
          Number(homeProducts?.length),
          Number(tableProducts?.length),
          Number(storageProducts?.length),
          Number(steelFurnitureProducts?.length),
          Number(chairProducts?.length),
          Number(sofaProducts?.length),
          Number(workStationProducts?.length),
          Number(garmentsProducts?.length),
          Number(interiorProducts?.length),
        ],
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
