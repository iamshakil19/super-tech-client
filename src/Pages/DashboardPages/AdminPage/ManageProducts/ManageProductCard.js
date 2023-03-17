import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const ManageProductCard = ({ product }) => {
  const { _id, name, primaryImage, price, category, subCategory } = product;
  return (
    <div className="bg-white max-w-xs xl:min-w-full p-3 mx-auto xl:mx-0 rounded-md shadow-md shadow-gray-300 xl:flex justify-between gap-5">
      <div className="xl:flex gap-5">
        <section className="flex items-center overflow-hidden">
          <img
            className="w-[100%] xl:w-48 object-cover h-60 xl:h-full rounded-md cursor-pointer"
            src={primaryImage}
            alt=""
          />
        </section>
        <section>
          <div>
            <h2 className="my-3 xl:mt-0 font-semibold text-lg capitalize max-w-sm whitespace-pre-wrap">
              {name}
            </h2>
            <div className="flex xl:flex-col items-center xl:items-start justify-between xl:justify-around">
              <p className="flex items-center font-semibold text-red-500">
                {" "}
                ৳ {price}
              </p>
              <p className="capitalize inline-block bg-slate-700 xl:bg-teal-500 px-2 py-0.5 text-white rounded-full text-sm shadow-md shadow-gray-300 xl:mt-3">
                {category}
              </p>
              <p className="capitalize bg-slate-700 px-2 py-0.5 text-white rounded-full text-sm shadow-md shadow-gray-300 xl:mt-3 hidden xl:block">
                {subCategory}
              </p>
            </div>
            <div className="flex xl:hidden items-center gap-5 mt-5 mb-2">
              <button className="bg-red-600 text-white w-full px-3 py-1.5 rounded-full font-medium shadow-lg shadow-gray-300 hover:shadow-none">
                Delete
              </button>
              <button className="bg-green-600 text-white w-full px-3 py-1.5 rounded-full font-medium shadow-lg shadow-gray-300 hover:shadow-none">
                Update
              </button>
            </div>
          </div>
        </section>
      </div>

      <section className="hidden xl:flex flex-col justify-between">
        <label
          for=""
          className=" w-8 h-8 text-center bg-indigo-200 text-xl text-indigo-800 border border-indigo-300 rounded-md cursor-pointer flex justify-center items-center hover:bg-indigo-500 hover:text-white hover:border-indigo-600 transition-all ease-in-out duration-200"
        >
          <span className="">
            <MdEdit />
          </span>
        </label>
        <label
          for=""
          className=" w-8 h-8 text-center bg-red-200 text-xl text-red-500 border border-red-300 rounded-md cursor-pointer flex justify-center items-center hover:bg-red-500 hover:text-white hover:border-red-600 transition-all ease-in-out duration-200"
        >
          <span className="">
            <MdDelete />
          </span>
        </label>
      </section>
    </div>
  );
};

export default ManageProductCard;
