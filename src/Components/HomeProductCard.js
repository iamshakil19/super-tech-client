import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";

const HomeProductCard = ({ product }) => {
  const [isButtonOpen, setIsButtonOpen] = useState(false);
  const navigate = useNavigate();

  const { _id, name, price, primaryImage, image2 } = product;
  return (
    <div className="mx-3 relative pb-16 pt-8">
      <div
        onMouseOver={() => setIsButtonOpen(true)}
        onMouseOut={() => setIsButtonOpen(false)}
        className="card pt-5 max-w-xs bg-white mx-auto h-[420px]"
      >
        <figure className="cursor-pointer">
          <img
            onClick={() => navigate(`product-details/${_id}`)}
            className="w-72 px-2"
            src={primaryImage}
            alt={name}
            onMouseOver={(e) =>
              (e.currentTarget.src = image2 ? image2 : primaryImage)
            }
            onMouseOut={(e) => (e.currentTarget.src = primaryImage)}
          />
        </figure>
        <div className="p-5 mb-4">
          <h2
            className="card-title poppins cursor-pointer overflow-hidden whitespace-nowrap"
            onClick={() => navigate(`product-details/${_id}`)}
          >
            {name}
          </h2>
          <p className="poppins mt-2 flex">
            <TbCurrencyTaka className="text-red-500  text-2xl" />{" "}
            <span className="text-lg text-red-500 font-semibold">{price}</span>
          </p>
        </div>
        <div
          className={`bg-black flex justify-center items-center p-5 w-16 h-16 cursor-pointer hover:scale-105 rounded-full custom-shadow absolute -top-3 right-0  ${
            isButtonOpen ? "block" : "hidden"
          } `}
        >
          <p className="text-white text-center poppins text-sm">Buy Now</p>
        </div>
        <div className="mx-auto">
          <button className="bg-black w-36 custom-shadow rounded-full text-white poppins py-2 font-semibold text-sm absolute -bottom-4 -translate-x-2/4">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeProductCard;
