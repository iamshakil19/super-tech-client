import React from "react";
import { useState } from "react";
import NewArrivalProductSlider from "./ProductSlider/NewArrivalProductSlider";
import PopularProductSlider from "./ProductSlider/PopularProductSlider";
import { motion } from "framer-motion";
const HomeProduct = () => {
  const [isSelected, setSelected] = useState(true);

  const handleRecent = () => {
    setSelected(true);
  };
  const handlePopular = () => {
    setSelected(false);
  };
  return (
    <div className=" py-5 mt-5 bg-[#F2F3F8]">
      <div className="container mx-auto">
        <section className="px-2 sm:px-0 pt-2">
          <div className="flex space-x-1 rounded-xl p-1 max-w-md mx-auto mb-4">
            <button
              onClick={handleRecent}
              className={`w-full py-2.5 text-xl poppins font-semibold ${
                isSelected
                  ? " text-slate-700 border-b border-gray-500 transition-all duration-500 ease-in-out"
                  : "text-slate-700"
              }`}
            >
              New Arrival
            </button>
            <button
              onClick={handlePopular}
              className={` w-full py-2.5 poppins text-xl font-semibold ${
                !isSelected
                  ? "text-slate-700 border-b border-gray-500 transition-all duration-500 ease-in-out"
                  : "text-slate-700 "
              } `}
            >
              Popular
            </button>
          </div>
        </section>
        {isSelected ? <NewArrivalProductSlider /> : <PopularProductSlider />}
      </div>
    </div>
  );
};

export default HomeProduct;
