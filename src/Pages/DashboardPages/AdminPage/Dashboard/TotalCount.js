import React from "react";
import { FaUser } from "react-icons/fa";
import { BsFillCartCheckFill, BsFillBagCheckFill } from "react-icons/bs";
import { HiCheck } from "react-icons/hi";
import { FiLoader } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useGetAllProductsQuery } from "../../../../features/products/productsApi";
import { useGetAllUserQuery } from "../../../../features/user/usersApi";
import { useGetAllOrderQuery } from "../../../../features/orders/ordersApi";
import numberWithComma from "../../../../Utils/numberWithComa";
import { useSelector } from "react-redux";
const TotalCount = () => {
  const queryString = "";
  const {
    data: allProducts,
    isError,
    isLoading,
    error,
  } = useGetAllProductsQuery(queryString);
  const { totalProduct } = allProducts?.data || {};

  const {
    data: allUsers,
    isError: isUserError,
    isLoading: userLoading,
    error: userError,
  } = useGetAllUserQuery(queryString);
  const { totalUser: totalUserCount } = allUsers?.data || {};

  const {
    data: allOrders,
    isError: isOrderError,
    isLoading: orderLoading,
    error: orderError,
  } = useGetAllOrderQuery(queryString);
  const { totalOrders: totalOrderCount } = allOrders?.data || {};
  const completedOrder = allOrders?.data?.orders?.filter(
    (order) => order.status === "completed"
  );
  const totalSales = completedOrder?.reduce(
    (accum, item) => accum + item.totalPrice,
    0
  );
  const pendingOrder = allOrders?.data?.orders?.filter(
    (order) => order.status === "pending"
  );
  const cancelOrder = allOrders?.data?.orders?.filter(
    (order) => order.status === "canceled"
  );

  return (
    <div className="poppins my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      <div className="flex items-center gap-5 bg-white p-3 py-5 rounded-md shadow-lg shadow-gray-200 border border-gray-200">
        <div className="bg-orange-500 h-10 w-10 ml-3 flex items-center justify-center rounded-full text-white ring-8 ring-orange-200/70">
          <span className="font-semibold mt-1">৳</span>
        </div>
        <div>
          <h2 className="text-lg font-bold text-black ">Total Sales</h2>
          {orderLoading && <p>Loading...</p>}
          {!isOrderError && !orderLoading && (
            <p className="flex items-center font-semibold ">
              ৳ {totalSales ? numberWithComma(totalSales) : ""}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-5 bg-white p-3 py-5 rounded-md shadow-lg shadow-gray-200 border border-gray-200">
        <div className="bg-green-500 h-10 w-10 ml-3 flex items-center justify-center rounded-full text-white ring-8 ring-green-200/70">
          <BsFillCartCheckFill size={20} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-black ">Total Orders</h2>
          {orderLoading && <p>Loading...</p>}
          {!orderError && !orderLoading && (
            <p className="flex items-center font-semibold ">
              {totalOrderCount}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-5 bg-white p-3 py-5 rounded-md shadow-lg shadow-gray-200 border border-gray-200">
        <div className="bg-blue-500 h-10 w-10 ml-3 flex items-center justify-center rounded-full text-white ring-8 ring-blue-200/70">
          <BsFillBagCheckFill size={18} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-black ">Total Products</h2>
          {isLoading && <p>Loading...</p>}
          {!isError && !isLoading && (
            <p className="flex items-center font-semibold ">{totalProduct}</p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-5 bg-white p-3 py-5 rounded-md shadow-lg shadow-gray-200 border border-gray-200">
        <div className="bg-rose-500 h-10 w-10 ml-3 flex items-center justify-center rounded-full text-white ring-8 ring-rose-200/70">
          <FaUser size={18} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-black ">Total Users</h2>
          {userLoading && <p>Loading...</p>}
          {!isUserError && !userLoading && (
            <p className="flex items-center font-semibold ">{totalUserCount}</p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-5 bg-white p-3 py-5 rounded-md shadow-lg shadow-gray-200 border border-gray-200">
        <div className="bg-green-500 h-10 w-10 ml-3 flex items-center justify-center rounded-full text-white ring-8 ring-green-200/70">
          <HiCheck size={20} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-black ">Completed Order</h2>
          {orderLoading && <p>Loading...</p>}
          {!isOrderError && !orderLoading && (
            <p className="flex items-center font-semibold ">
              {completedOrder?.length}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-5 bg-white p-3 py-5 rounded-md shadow-lg shadow-gray-200 border border-gray-200">
        <div className="bg-orange-500 h-10 w-10 ml-3 flex items-center justify-center rounded-full text-white ring-8 ring-orange-200/70">
          <FiLoader size={18} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-black ">Pending Order</h2>
          {orderLoading && <p>Loading...</p>}
          {!isOrderError && !orderLoading && (
            <p className="flex items-center font-semibold ">
              {pendingOrder?.length}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-5 bg-white p-3 py-5 rounded-md shadow-lg shadow-gray-200 border border-gray-200">
        <div className="bg-red-500 h-10 w-10 ml-3 flex items-center justify-center rounded-full text-white ring-8 ring-red-200/70">
          <IoClose size={18} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-black ">Cancel Order</h2>
          {orderLoading && <p>Loading...</p>}
          {!isOrderError && !orderLoading && (
            <p className="flex items-center font-semibold ">
              {cancelOrder?.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TotalCount;
