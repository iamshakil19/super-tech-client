import React from "react";
import { FaBoxOpen } from "react-icons/fa";
const productData = [
  {
    _id: "507f1f77bcf86cd799439011",
    name: "GRID Newon Chair",
    price: 84000,
    views: 5,
    category: "Home",
    subCategory: "Dressing Table",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "GRID Newon Chair",
    price: 84000,
    views: 54,
    category: "Home",
    subCategory: "Cup Board",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/simplextsizes_720x.jpg?v=1652878756",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "GRID Newon Chair, GRID Newon Chair, GRID Newon Chair",
    price: 84000,
    views: 82,
    category: "Home",
    subCategory: "Wardrobe",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/industrioustable_1080x.jpg?v=1652877979",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "GRID Newon Chair",
    price: 84000,
    views: 9,
    category: "Home",
    subCategory: "Cup Board",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/industrioustable_1080x.jpg?v=1652877979",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "GRID Newon Chair, GRID Newon Chair, GRID Newon Chair",
    price: 84000,
    views: 139,
    category: "Home",
    subCategory: "Dressing Table",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: "507f1f77bcf86cd799439011",
    name: "GRID Newon Chair",
    price: 84000,
    views: 2,
    category: "Home",
    subCategory: "Wardrobe",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/simplextsizes_720x.jpg?v=1652878756",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
];
const LatestProducts = () => {
  const newLatestProducts = productData.slice(0, 5);
  return (
    <div>
      <div className="my-10 poppins border border-gray-200 bg-white p-5 rounded-md shadow-lg shadow-gray-300">
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
        {newLatestProducts.map((product) => (
          <div key={product._id}>
            <div className="grid grid-cols-5 lg:grid-cols-6 gap-3">
              <p className="hidden lg:block border-l border-gray-300 pl-2">
                {product._id}
              </p>
              <p className="capitalize whitespace-nowrap overflow-hidden border-l border-gray-300 pl-2">
                {product.name}
              </p>

              <p className="flex items-center border-l border-gray-300 pl-2">
                456
              </p>
              <p className="overflow-hidden whitespace-nowrap border-l border-gray-300 pl-2">
                {product.category}
              </p>
              <p className="overflow-hidden whitespace-nowrap border-l border-gray-300 pl-2">
                {product.subCategory}
              </p>
              <p className="overflow-hidden border-l border-gray-300 pl-2">
                {product.views}
              </p>
            </div>
            <div className="border-b my-3 border-gray-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;