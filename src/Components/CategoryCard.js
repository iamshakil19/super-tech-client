import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ data }) => {
  const { image, name, path } = data;
  return (
    <Link to={path}>
      <div className="mx-auto hover:shadow-xl w-24 md:w-40 h-28 md:h-32 hover:text-red-400 text-black flex rounded-md cursor-pointer justify-center items-center hover:scale-105 transition-all duration-200">
        <div>
          <img className="w-10 md:w-12 mx-auto " src={image} alt="" />
          <p className="text-md poppins capitalize text-center whitespace-pre-wrap mt-3">
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
