import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, price, primaryImage, description, image2 } = product;
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/checkouts");
  };
  return (
    <div className="max-w-xs flex flex-col gap-2 justify-between bg-white px-3 py-5 poppins shadow-xl shadow-gray-200 rounded-md mx-auto ">
      <section>
        <section>
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
        </section>
        <section className="">
          <h2
            onClick={() => navigate(`/product-details/${_id}`)}
            className="text-md font-semibold my-3 cursor-pointer"
          >
            {name}
          </h2>
          <p className="text-sm">{description}</p>
        </section>
      </section>
      <section className="w-full">
        <div className="border-b border-gray-200 my-3"></div>
        <p className="text-center text-lg text-red-500 font-bold">৳ {price}</p>

        <div className="xl:flex gap-5 mt-3">
          <button className="whitespace-nowrap text-black border border-black hover:text-white hover:bg-black px-2 py-1.5 w-full font-medium rounded-full transition-all duration-200 ease-in-out mb-3 xl:mb-0">
            Add To Cart
          </button>
          <button
            onClick={handleBuyNow}
            className=" whitespace-nowrap text-white  border border-black bg-black px-2 py-1.5 w-full font-medium rounded-full  transition-all duration-200 ease-in-out"
          >
            Buy Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
