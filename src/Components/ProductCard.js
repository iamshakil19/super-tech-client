import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, price, primaryImage, description, image2 } = product;
  const navigate = useNavigate();
  return (
    <div className="max-w-xs h-[620px] xl:h-[580px] bg-white p-3 poppins shadow-xl shadow-gray-300 rounded-md relative mx-auto">
      <img
        onClick={() => navigate(`/product-details/${_id}`)}
        className="w-full object-cover mx-auto block cursor-pointer"
        src={primaryImage}
        onMouseOver={(e) =>
          (e.currentTarget.src = image2 ? image2 : primaryImage)
        }
        onMouseOut={(e) => (e.currentTarget.src = primaryImage)}
        alt=""
      />
      <div className="border-b border-gray-200 mt-3"></div>
      <h2
        onClick={() => navigate(`/product-details/${_id}`)}
        className="text-md font-semibold my-3 cursor-pointer"
      >
        {name.length > 50 ? name.slice(0, 50) + "..." : name}
      </h2>
      <p className="text-sm">
        {description.length > 80
          ? description.slice(0, 80) + "..."
          : description}
      </p>
      <div className="absolute w-full bottom-3 left-[50%] -translate-x-2/4 px-3">
        <div className="border-b border-gray-200 my-3"></div>
        <p className="flex justify-center items-center text-lg text-red-500 font-bold">
          {price} <TbCurrencyTaka size={25} className="mb-1" />{" "}
        </p>

        <div className="xl:flex gap-3 mt-3">
          <button className="bg-slate-300 whitespace-nowrap text-black hover:text-white  p-2 w-full font-medium rounded-md hover:bg-black transition-all duration-200 ease-in-out mb-3 xl:mb-0">
            Add To Cart
          </button>
          <button className="bg-slate-300 whitespace-nowrap text-black hover:text-white  p-2 w-full font-medium rounded-md hover:bg-black transition-all duration-200 ease-in-out">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
