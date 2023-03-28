import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../../../../features/products/productsApi";
import ManageProductCard from "./ManageProductCard";
import ManageProductsFilter from "./ManageProductsFilter";
import ManageProductsHeaders from "./ManageProductsHeaders";
import ProductDeleteModal from "./ProductDeleteModal";

const ManageProducts = () => {
  const {
    data: allProducts,
    isError,
    isLoading,
    error,
  } = useGetAllProductsQuery();
  const { products } = allProducts?.data || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-5 poppins">
      <ManageProductsHeaders />
      <ManageProductsFilter />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2 gap-5">
        {products?.map((product) => (
          <ManageProductCard key={product._id} product={product} />
        ))}
      </div>
      <ProductDeleteModal />
    </div>
  );
};

export default ManageProducts;
