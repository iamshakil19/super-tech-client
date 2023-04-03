import React, { useEffect } from "react";
import WhySuperTech from "../Shared/WhySuperTech/WhySuperTech";
import SearchInput from "./SearchInput";
import { useGetAllProductsQuery } from "../../features/products/productsApi";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Shared/Loading/Loading";
import Error from "../Shared/Error/Error";
import ProductCard from "../../Components/ProductCard";
import ReactPaginate from "react-paginate";
import { handleProductPage } from "../../features/products/productsSlice";
import PageTitle from "../../Utils/PageTitle";

const Search = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { page, limit, sort, category, subCategory, productSearchText } =
    useSelector((state) => state.productsFilter);
  const dispatch = useDispatch();
  let queryString = `page=${page}&limit=${limit}&sort=${sort}`;

  if (productSearchText) {
    queryString += `&productSearchText=${productSearchText}`;
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

  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  } else if (!isLoading && !isError && products?.length === 0) {
    content = (
      <div className="font-medium text-center">Oops! No product found</div>
    );
  } else if (!isLoading && !isError && products?.length > 0) {
    content = (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="mt-10">
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
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#F2F3F8] pt-10">
      <PageTitle title={"Search - Super Tech Furniture & Interior"}></PageTitle>
      <div className=" poppins container mx-auto px-5">
        <h2 className="text-3xl font-bold font-serif text-center mb-5">
          Search
        </h2>
        <SearchInput />
        <div className="mt-10">{content}</div>

        <WhySuperTech />
      </div>
    </div>
  );
};

export default Search;
