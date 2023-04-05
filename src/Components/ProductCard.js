import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, getTotals } from "../features/orders/ordersSlice";
import { motion } from "framer-motion";
const ProductCard = ({ product }) => {
  const { _id, name, price, description, primaryImage, extraImages } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const finalPrimaryImage = process.env.REACT_APP_IMG_URL + primaryImage;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="max-w-xs flex flex-col gap-2 justify-between bg-white px-3 py-5 poppins shadow-xl shadow-gray-200 rounded-md mx-auto "
    >
      <section>
        <section>
          <img
            onClick={() => navigate(`/product-details/${_id}`)}
            className="w-full h-60 lg:h-64 object-cover mx-auto block cursor-pointer"
            src={finalPrimaryImage}
            onMouseOver={(e) =>
              (e.currentTarget.src =
                extraImages.length > 0
                  ? process.env.REACT_APP_IMG_URL + extraImages[0]
                  : finalPrimaryImage)
            }
            onMouseOut={(e) => (e.currentTarget.src = finalPrimaryImage)}
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
          <p className="text-sm">
            {description?.length > 60
              ? description.slice(0, 60) + "..."
              : description}
          </p>
        </section>
      </section>
      <section className="w-full">
        <div className="border-b border-gray-200 my-3"></div>
        <p className="text-center text-lg text-red-500 font-bold">৳ {price}</p>

        <div className="xl:flex gap-5 mt-3">
          <button
            onClick={handleAddToCart}
            className="whitespace-nowrap text-black border border-black hover:text-white hover:bg-black px-2 py-1.5 w-full font-medium rounded-full transition-all duration-200 ease-in-out mb-3 xl:mb-0"
          >
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
    </motion.div>
  );
};

export default ProductCard;
