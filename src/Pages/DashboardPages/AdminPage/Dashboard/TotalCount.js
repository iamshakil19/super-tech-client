import React from "react";
import { FaUser } from "react-icons/fa";
import { BsFillCartCheckFill, BsFillBagCheckFill } from "react-icons/bs";
const TotalCount = () => {
  return (
    <div className="poppins my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      <div className="flex items-center justify-center gap-5 bg-white p-3 py-5 rounded-md shadow-lg shadow-gray-200 border border-gray-200">
        <div className="bg-orange-500 h-10 w-10 flex items-center justify-center rounded-full text-white ring-8 ring-orange-200/70">
          <span className="font-semibold mt-1">৳</span>
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-400 whitespace-nowrap">
            Total Sales
          </h2>
          <p className="flex items-center font-semibold ">৳ 4455455</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 bg-white p-3 py-5 rounded-md shadow-lg shadow-gray-200 border border-gray-200">
        <div className="bg-green-500 h-10 w-10 flex items-center justify-center rounded-full text-white ring-8 ring-green-200/70">
          <BsFillCartCheckFill size={20} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-400 whitespace-nowrap">
            Total Orders
          </h2>
          <p className="flex items-center font-semibold ">445</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 bg-white p-3 py-5 rounded-md shadow-lg shadow-gray-200 border border-gray-200">
        <div className="bg-blue-500 h-10 w-10 flex items-center justify-center rounded-full text-white ring-8 ring-blue-200/70">
          <BsFillBagCheckFill size={18} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-400 whitespace-nowrap">
            Total Products
          </h2>
          <p className="flex items-center font-semibold ">45</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 bg-white p-3 py-5 rounded-md shadow-lg shadow-gray-200 border border-gray-200">
        <div className="bg-rose-500 h-10 w-10 flex items-center justify-center rounded-full text-white ring-8 ring-rose-200/70">
          <FaUser size={18} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-400 whitespace-nowrap">
            Total Users
          </h2>
          <p className="flex items-center font-semibold ">325</p>
        </div>
      </div>
    </div>
  );
};

export default TotalCount;
