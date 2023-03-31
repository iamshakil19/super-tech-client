import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../../../../features/products/productsApi";
import { handleProductPage } from "../../../../features/products/productsSlice";
import ManageProductCard from "./ManageProductCard";
import ManageProductsFilter from "./ManageProductsFilter";
import ManageProductsHeaders from "./ManageProductsHeaders";
import ProductDeleteModal from "./ProductDeleteModal";

const ManageProducts = () => {
  const { page, limit, sort, category, subCategory } = useSelector(
    (state) => state.productsFilter
  );
  const dispatch = useDispatch();
  let queryString = `page=${page}&limit=${limit}&sort=${sort}`;
  if (category) {
    queryString += `&category=${category}`;
  }
  if (subCategory) {
    queryString += `&subCategory=${subCategory}`;
  }
  const {
    data: allProducts,
    isError,
    isLoading,
    error,
  } = useGetAllProductsQuery(queryString);
  const { products, pageCount } = allProducts?.data || {};

  const handlePageClick = (event) => {
    dispatch(handleProductPage(event.selected + 1));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-5 poppins">
      <ManageProductsHeaders />
      <ManageProductsFilter />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2 gap-5 mb-10">
        {products?.map((product) => (
          <ManageProductCard key={product._id} product={product} />
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-end gap-2"
        pageLinkClassName="py-1.5 px-4 font-medium hover:bg-slate-800 hover:text-white"
        previousLinkClassName="py-1.5 px-4 font-medium hover:bg-slate-800 bg-slate-300 hover:text-white"
        nextLinkClassName="py-1.5 px-4 font-medium hover:bg-slate-800  bg-slate-300 hover:text-white"
        activeLinkClassName="bg-slate-800 text-white"
      />
      <ProductDeleteModal />
    </div>
  );
};

export default ManageProducts;
