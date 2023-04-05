import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, getTotals } from "../features/orders/ordersSlice";
import { motion } from "framer-motion";

const HomeProductCard = ({ product }) => {
  const [isButtonOpen, setIsButtonOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { _id, name, price, primaryImage, extraImages } = product;

  const finalPrimaryImage = process.env.REACT_APP_IMG_URL + primaryImage;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        product,
        quantity: 1,
        color: "",
        colorCost: 0,
        size: "",
        sizeCost: 0,
      })
    );
    dispatch(getTotals());
  };

  const handleBuyNow = () => {
    dispatch(
      addToCart({
        product,
        quantity: 1,
        color: "",
        colorCost: 0,
        size: "",
        sizeCost: 0,
      })
    );
    dispatch(getTotals());
    navigate("/checkouts");
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="mx-3 relative pb-16 pt-8"
    >
      <div
        onMouseOver={() => setIsButtonOpen(true)}
        onMouseOut={() => setIsButtonOpen(false)}
        className="card pt-5 max-w-xs bg-white mx-auto h-[420px]"
      >
        <figure className="cursor-pointer">
          <img
            onClick={() => navigate(`product-details/${_id}`)}
            className="w-72 px-2 h-72 object-cover"
            src={finalPrimaryImage}
            alt={name}
            onMouseOver={(e) =>
              (e.currentTarget.src =
                extraImages.length > 0
                  ? process.env.REACT_APP_IMG_URL + extraImages[0]
                  : finalPrimaryImage)
            }
            onMouseOut={(e) => (e.currentTarget.src = finalPrimaryImage)}
          />
        </figure>
        <div className="p-5 mb-4">
          <h2
            className="card-title poppins cursor-pointer overflow-hidden whitespace-nowrap"
            onClick={() => navigate(`product-details/${_id}`)}
          >
            {name}
          </h2>
          <p className="poppins mt-2 text-lg text-red-500 font-semibold">
            ৳ {price}
          </p>
        </div>
        <div
          onClick={handleBuyNow}
          className={`bg-black flex justify-center items-center p-5 w-16 h-16 cursor-pointer hover:scale-105 rounded-full custom-shadow absolute -top-3 right-0  ${
            isButtonOpen ? "block" : "hidden"
          } `}
        >
          <p className="text-white text-center poppins text-sm">Buy Now</p>
        </div>
        <div className="mx-auto">
          <button
            onClick={handleAddToCart}
            className="bg-black w-36 custom-shadow rounded-full text-white poppins py-2 font-semibold text-sm absolute -bottom-4 -translate-x-2/4"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeProductCard;
