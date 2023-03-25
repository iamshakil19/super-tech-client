import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard";
import { useGetAllProductsQuery } from "../../features/products/productsApi";
import {
  handleSetLimitToState,
  handleSetSortToState,
} from "../../features/products/productsSlice";
import Error from "../Shared/Error/Error";
import Loading from "../Shared/Loading/Loading";

const Product = () => {
  const { page, sort, limit } = useSelector((state) => state.productsFilter);

  // console.log("page", page, "sort", sort, "limit", limit);

  const dispatch = useDispatch();
  const {
    data: allProducts,
    isLoading,
    isError,
    error,
  } = useGetAllProductsQuery({ page, limit, sort });

  const { success, data, pageCount, totalProduct } = allProducts || {};

  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message={error?.data?.message} />;
  } else if (!isLoading && !isError && data?.products?.length === 0) {
    content = <div>No product found</div>;
  } else if (!isLoading && !isError && data?.products?.length > 0) {
    content = (
      <>
        <div className="mb-5 flex justify-end items-center gap-3">
          <div className="block sm:ml-5 sm:mt-0">
            <select
              onChange={(e) => dispatch(handleSetSortToState(e.target.value))}
              defaultValue={sort}
              className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-32 border-slate-300"
            >
              <option
                selected
                className="font-medium text-md"
                value="-createdAt"
              >
                Default
              </option>
              <option className=" font-medium text-md" value="price">
                Price (Low → High)
              </option>
              <option className=" font-medium text-md" value="-price">
                Price (High → Low)
              </option>
              <option className=" font-medium text-md" value="-views">
                Popular
              </option>
              <option className=" font-medium text-md" value="name">
                Alphabetically (A → Z)
              </option>
              <option className=" font-medium text-md" value="-name">
                Alphabetically (Z → A)
              </option>
              <option className=" font-medium text-md" value="updatedAt">
                Date (Old → New)
              </option>
              <option className=" font-medium text-md" value="-updatedAt">
                Date (New → Old)
              </option>
            </select>
          </div>
          <div className="block">
            <select
              onChange={(e) => dispatch(handleSetLimitToState(e.target.value))}
              defaultValue={limit}
              className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-28 border-slate-300"
            >
              <option selected className="font-medium" value="10">
                10
              </option>
              <option className="font-medium" value="15">
                15
              </option>
              <option className="font-medium" value="25">
                25
              </option>
              <option className="font-medium" value="50">
                50
              </option>
              <option className="font-medium" value="100">
                100
              </option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {data?.products?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </>
    );
  }

  return <div className="">{content}</div>;
};

export default Product;
