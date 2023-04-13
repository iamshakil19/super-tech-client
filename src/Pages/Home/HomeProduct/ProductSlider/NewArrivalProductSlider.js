import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeProductCard from "../../../../Components/HomeProductCard";
import { useGetAllProductsQuery } from "../../../../features/products/productsApi";
import Error from "../../../Shared/Error/Error";
import Loading from "../../../Shared/Loading/Loading";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const NewArrivalProductSlider = () => {
  const queryString = `page=1&limit=10&sort=-createdAt`;
  const {
    data: allProducts,
    isError,
    isLoading,
    error,
  } = useGetAllProductsQuery(queryString);
  const { products } = allProducts?.data || {};
  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message={JSON.stringify(error)} />;
  } else if (!isLoading && !isError && products.length === 0) {
    content = <p>No product found </p>;
  } else if (!isLoading && !isError && products.length > 0) {
    content = (
      <Carousel
        className="mt-10 z-20"
        responsive={responsive}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        arrows={true}
      >
        {products?.map((product) => (
          <HomeProductCard product={product} key={product._id} />
        ))}
      </Carousel>
    );
  }

  return content;
};

export default NewArrivalProductSlider;
