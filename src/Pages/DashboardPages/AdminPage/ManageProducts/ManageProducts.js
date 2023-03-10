import React, { useEffect } from "react";
import ManageProductCard from "./ManageProductCard";
import ManageProductsFilter from "./ManageProductsFilter";
import ManageProductsHeaders from "./ManageProductsHeaders";

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

const ManageProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-5 poppins">
      <ManageProductsHeaders />
      <ManageProductsFilter />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5">
{
  productData.map(product => <ManageProductCard key={product._id} product={product} /> )
}
      </div>
    </div>
  );
};

export default ManageProducts;
