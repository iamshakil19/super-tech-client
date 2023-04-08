import React from "react";
import { FaBoxOpen } from "react-icons/fa";
import { useGetAllProductsQuery } from "../../../../features/products/productsApi";
import Error from "../../../Shared/Error/Error";
import Loading from "../../../Shared/Loading/Loading";

const LatestProducts = () => {
  const queryString = `page=1&limit=5&sort=-createdAt`;
  const { data, isError, isLoading, error } =
    useGetAllProductsQuery(queryString);
  const productsData = data?.data;

  const { products } = productsData || {};

  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  } else if (!isLoading && !isError && products?.length === 0) {
    <div>No product found</div>;
  } else if (!isLoading && !isError && products?.length > 0) {
    content = products?.map((product) => (
      <div key={product._id}>
        <div className="grid grid-cols-5 lg:grid-cols-6 gap-3">
          <p className="hidden lg:block border-l border-gray-300 pl-2 overflow-hidden">
            {product._id}
          </p>
          <p className="capitalize whitespace-nowrap overflow-hidden border-l border-gray-300 pl-2">
            {product.name}
          </p>

          <p className="flex items-center border-l border-gray-300 pl-2">456</p>
          <p className="overflow-hidden whitespace-nowrap border-l border-gray-300 pl-2 capitalize">
            {product.category}
          </p>
          <p className="overflow-hidden whitespace-nowrap border-l border-gray-300 pl-2 capitalize">
            {product.subCategory}
          </p>
          <p className="overflow-hidden border-l border-gray-300 pl-2">
            {product.views}
          </p>
        </div>
        <div className="border-b my-3 border-gray-300"></div>
      </div>
    ));
  }
  return (
    <div>
      <div className="my-10 poppins border border-gray-200 bg-white p-5 rounded-md shadow-lg shadow-gray-200">
        <h2 className="text-xl font-bold my-5 flex items-center text-red-500">
          {" "}
          <FaBoxOpen size={19} className="mr-2" />
          New Products
        </h2>
        <div className="grid grid-cols-5 lg:grid-cols-6 gap-3">
          <p className="font-bold lg:block hidden text-red-500">ID</p>
          <p className="font-bold text-red-500 capitalize">Name</p>
          <p className="font-bold text-red-500">Price</p>
          <p className="font-bold text-red-500 capitalize">Category</p>
          <p className="font-bold text-red-500 capitalize">Sub Category</p>
          <p className="font-bold text-red-500">Views</p>
        </div>
        <div className="border-b my-3 border-gray-300"></div>
        {content}
      </div>
    </div>
  );
};

export default LatestProducts;
