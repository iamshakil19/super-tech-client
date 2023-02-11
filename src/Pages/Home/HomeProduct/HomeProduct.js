import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopularSlider from "./ProductSlider/PopularSlider";
import RecentSlider from "./ProductSlider/RecentSlider";

const HomeProduct = () => {
  const [isSelected, setSelected] = useState(true);
  const navigate = useNavigate();

  const handleRecent = () => {
    setSelected(true);
    navigate("/");
  };
  const handlePopular = () => {
    setSelected(false);
    navigate("/");
  };
  return (
    <div className="container mx-auto mt-5">
      <div>
        <section className="px-2 sm:px-0 pt-2">
          <div className="flex space-x-1 rounded-xl p-1 max-w-md mx-auto mb-4">
            <button
              onClick={handleRecent}
              className={`w-full py-2.5 text-xl poppins-font font-semibold ${
                isSelected
                  ? " text-slate-600 border-b border-gray-500"
                  : "text-slate-600"
              }`}
            >
              Recent
            </button>
            <button
              onClick={handlePopular}
              className={` w-full py-2.5 poppins-font text-xl font-semibold ${
                !isSelected
                  ? "text-slate-600 border-b border-gray-500"
                  : "text-slate-600 "
              } `}
            >
              Popular
            </button>
          </div>
        </section>
        {isSelected ? <RecentSlider /> : <PopularSlider />}
      </div>
    </div>
  );
};

export default HomeProduct;
