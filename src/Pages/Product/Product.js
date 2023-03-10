import React, { useState } from "react";
import ProductCard from "../../Components/ProductCard";

const productData = [
  {
    _id: 1,
    name: "GRID Newon Chair",
    price: "84000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Solutaadipisicing elit. Soluta",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: 2,
    name: "GRID Newon Chair",
    price: "84000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/simplextsizes_720x.jpg?v=1652878756",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: 3,
    name: "GRID Newon Chair, GRID Newon Chair, GRID Newon Chair",
    price: "84000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisicing elit. Soluta",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/industrioustable_1080x.jpg?v=1652877979",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: 4,
    name: "GRID Newon Chair",
    price: "84000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/industrioustable_1080x.jpg?v=1652877979",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: 5,
    name: "GRID Newon Chair, GRID Newon Chair, GRID Newon Chair",
    price: "84000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
  {
    _id: 6,
    name: "GRID Newon Chair",
    price: "84000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/simplextsizes_720x.jpg?v=1652878756",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  },
];

const Product = () => {
  const [limit, setLimit] = useState(10);
  const [price, setPrice] = useState(10);
  return (
    <div className="">
      <div className="mb-5 flex justify-end items-center gap-3">
        <div className="block sm:ml-5 sm:mt-0">
          <select
            onChange={(e) => setPrice(e.target.value)}
            defaultValue={price}
            className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-32 border-slate-300"
          >
            <option selected className="font-medium text-md" value="latest">
              Default
            </option>
            <option className=" font-medium text-md" value="lowToHigh">
              Price (Low → High)
            </option>
            <option className=" font-medium text-md" value="highToLow">
              Price (High → Low)
            </option>
            <option className=" font-medium text-md" value="popular">
              Popular
            </option>
            <option className=" font-medium text-md" value="alphabeticallyAToZ">
              Alphabetically (A → Z)
            </option>
            <option className=" font-medium text-md" value="alphabeticallyZToA">
              Alphabetically (Z → A)
            </option>
            <option className=" font-medium text-md" value="dateOldToNew">
              Date (Old → New)
            </option>
            <option className=" font-medium text-md" value="dateNewToOld">
              Date (New → Old)
            </option>
          </select>
        </div>
        <div className="block">
          <select
            onChange={(e) => setLimit(e.target.value)}
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
          {productData.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>

    </div>
  );
};

export default Product;
