import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeProductCard from "../../../../Components/HomeProductCard";
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
const productData = [
  {
    _id: 1,
    name: "GRID Newon Chair",
    price: "84000",
    category: "home",
    subCategory: "bed",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: 2,
    name: "GRID Newon Chair",
    price: "84000",
    category: "home",
    subCategory: "bed",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/simplextsizes_720x.jpg?v=1652878756",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: 3,
    name: "GRID Newon Chair, GRID Newon Chair, GRID Newon Chair",
    price: "84000",
    category: "home",
    subCategory: "bed",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/industrioustable_1080x.jpg?v=1652877979",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: 4,
    name: "GRID Newon Chair",
    price: "84000",
    category: "home",
    subCategory: "bed",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/industrioustable_1080x.jpg?v=1652877979",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: 5,
    name: "GRID Newon Chair, GRID Newon Chair, GRID Newon Chair",
    price: "84000",
    category: "home",
    subCategory: "bed",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: 6,
    name: "GRID Newon Chair",
    price: "84000",
    category: "home",
    subCategory: "bed",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/simplextsizes_720x.jpg?v=1652878756",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
];
const NewArrivalProductSlider = () => {
  return (
    <Carousel
      className="mt-10 z-20"
      responsive={responsive}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      arrows={true}
    >
      {productData.map((product) => (
        <HomeProductCard product={product} key={product._id} />
      ))}
    </Carousel>
  );
};

export default NewArrivalProductSlider;
