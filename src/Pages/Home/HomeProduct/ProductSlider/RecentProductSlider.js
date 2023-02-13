import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeProductCard from "../../../../Components/HomeProductCard";
const responsive = {
  superLargeDesktop: {
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
    name: "GRID Lite Desk - 32 Inch",
    price: "84000",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/914B38WMGUL._AC_SL1500_720x.jpg?v=1652878803",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: 2,
    name: "GRID Newon Chair",
    price: "84000",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/914B38WMGUL._AC_SL1500_720x.jpg?v=1652878803",
  },
  {
    _id: 3,
    name: "GRID Newon Chair, GRID Newon Chair, GRID Newon Chair",
    price: "84000",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-1_1080x.webp?v=1672562358",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: 4,
    name: "GRID Newon Chair",
    price: "84000",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/industrioustable_1080x.jpg?v=1652877979",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: 5,
    name: "GRID Newon Chair, GRID Newon Chair, GRID Newon Chair",
    price: "84000",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: 6,
    name: "GRID Newon Chair",
    price: "84000",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/simplextsizes_720x.jpg?v=1652878756",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: 7,
    name: "GRID Newon Chair",
    price: "84000",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/simplextsizes_720x.jpg?v=1652878756",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
];

const RecentProductSlider = () => {
  return (
    <Carousel
      className="mt-10"
      responsive={responsive}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      arrows={true}
    >
      {productData.map((product) => (
        <HomeProductCard key={product._id} product={product} />
      ))}
    </Carousel>
  );
};

export default RecentProductSlider;
