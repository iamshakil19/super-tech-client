import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
const LatestOrders = () => {
  const orderData = [
    {
      _id: "df44545df45455",
      name: "Samim Ahmed",
      number: "01974354343",
      price: 344,
      status: "pending",
      date: "",
    },
    {
      _id: "df44545dsfds455",
      name: "Tombel",
      number: "01974334343",
      price: 5676,
      status: "cancelled",
      date: "",
    },
    {
      _id: "df44545df45455",
      name: "Hasan Islam",
      number: "01974354343",
      price: 37844,
      status: "delivered",
      date: "",
    },
    {
      _id: "df44545df45455",
      name: "Samim Ahmed",
      number: "01974354343",
      price: 344,
      status: "delivered",
      date: "",
    },
    {
      _id: "df44545df45455",
      name: "Samim Ahmed",
      number: "01974354343",
      price: 344,
      status: "pending",
      date: "",
    },
    {
      _id: "df44545df45455",
      name: "Samim Ahmed",
      number: "01974354343",
      price: 344,
      status: "cancelled",
      date: "",
    },
    {
      _id: "df44545df45455",
      name: "Samim Ahmed",
      number: "01974354343",
      price: 344,
      status: "pending",
      date: "",
    },
  ];

  const newLatestOrders = orderData.slice(0, 5)
  return (
    <div>
      <div>
        <h2 className="text-xl font-bold poppins my-5">Latest Orders</h2>
        <div className="grid grid-cols-4 lg:grid-cols-5 gap-3">
          <p className="font-bold lg:block hidden">ID</p>
          <p className="font-bold">Name</p>
          <p className="font-bold">Number</p>
          <p className="font-bold">Price</p>
          <p className="font-bold">Status</p>
        </div>
        <div className="border-b my-3 border-gray-300"></div>
        {newLatestOrders.map((order) => (
          <div key={order._id}>
            <div className="grid grid-cols-4 lg:grid-cols-5 gap-3">
              <p className="hidden lg:block">{order._id}</p>
              <p className="capitalize whitespace-nowrap overflow-hidden">
                {order.name}
              </p>
              <p className="overflow-hidden">{order.number}</p>
              <p className="flex items-center">
                {" "}
                <TbCurrencyTaka size={20} /> 456
              </p>
              <p
                className={`capitalize w-24 text-center rounded-full px-2 py-0.5 shadow-md text-sm font-medium ${
                  order.status === "pending" &&
                  "text-orange-500 bg-orange-100 border border-orange-200"
                } ${
                  order.status === "cancelled" &&
                  "text-red-500 bg-red-100 border border-red-300"
                } ${
                  order.status === "delivered" &&
                  "text-green-500 bg-green-100 border border-green-300"
                }`}
              >
                {order.status}
              </p>
            </div>
            <div className="border-b my-3 border-gray-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestOrders;
