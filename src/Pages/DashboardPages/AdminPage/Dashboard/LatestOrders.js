import React from "react";
import { TbActivityHeartbeat } from "react-icons/tb";
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
      <div className="my-10 border poppins border-gray-200 bg-white p-5 rounded-md shadow-lg shadow-gray-200">
        <h2 className="text-xl font-bold my-5 flex items-center text-red-500"> <TbActivityHeartbeat size={26} className="mr-2"/> Latest Orders</h2>
        <div className="grid grid-cols-4 lg:grid-cols-5 gap-3">
          <p className="font-bold lg:block hidden text-red-500">ID</p>
          <p className="font-bold text-red-500">Name</p>
          <p className="font-bold text-red-500">Number</p>
          <p className="font-bold text-red-500">Price</p>
          <p className="font-bold text-red-500">Status</p>
        </div>
        <div className="border-b my-3 border-gray-300"></div>
        {newLatestOrders.map((order) => (
          <div key={order._id}>
            <div className="grid grid-cols-4 lg:grid-cols-5 gap-3">
              <p className="hidden lg:block border-l border-gray-300 pl-2">{order._id}</p>
              <p className="capitalize whitespace-nowrap overflow-hidden border-l border-gray-300 pl-2">
                {order.name}
              </p>
              <p className="overflow-hidden border-l border-gray-300 pl-2">{order.number}</p>
              <p className="border-l border-gray-300 pl-2">
                {" "}
                ৳ 456
              </p>
              <p
                className={`capitalize w-24 text-center rounded-full px-2 py-0.5 shadow-md text-sm font-medium ${
                  order.status === "pending" &&
                  "text-orange-500 bg-orange-200 border border-orange-400"
                } ${
                  order.status === "cancelled" &&
                  "text-red-600 bg-red-200 border border-red-400"
                } ${
                  order.status === "delivered" &&
                  "text-green-600 bg-green-200 border border-green-400"
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
