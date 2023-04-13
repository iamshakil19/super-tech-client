import React from "react";
import all from "../../../Assets/Main-Category/all.png";
import table from "../../../Assets/Main-Category/table.png";
import chair from "../../../Assets/Main-Category/chair.png";
import cabinet from "../../../Assets/Main-Category/cabinet.png";
import work_station from "../../../Assets/Main-Category/work-station.png";
import steel_furniture from "../../../Assets/Main-Category/steel-furniture.png";
import sofa from "../../../Assets/Main-Category/sofa.png";
import home from "../../../Assets/Main-Category/home.png";
import garments from "../../../Assets/Main-Category/garments.png";
import interior from "../../../Assets/Main-Category/interior.png";
import CategoryCard from "../../../Components/CategoryCard";

const categoryData = [
  { image: all, name: "all collection", path: "/collections" },
  { image: home, name: "home", path: "/collections/home-furniture" },
  { image: table, name: "table", path: "/collections/table" },
  { image: cabinet, name: "storage", path: "/collections/storage" },
  {
    image: steel_furniture,
    name: "steel furniture",
    path: "/collections/steel-furniture",
  },
  { image: chair, name: "chair", path: "/collections/chair" },
  { image: sofa, name: "sofa", path: "/collections/sofa" },
  {
    image: work_station,
    name: "work station",
    path: "/collections/work-station",
  },
  { image: garments, name: "garments", path: "/collections/garments" },
  { image: interior, name: "interior", path: "/collections/interior" },
];

const FeaturedCategory = () => {
  return (
    <div className="container pt-2 pb-10 mx-auto">
      <h1 className="text-center poppins mt-10 lg:mt-14 text-2xl lg:text-3xl text-black font-semibold">
        Featured Category
      </h1>
      <p className="text-center px-2 text-sm md:text-[15px] poppins text-black mt-2">
        Get Your Desired Product From Featured Category!
      </p>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6 mt-8 mx-auto px-5">
        {categoryData.map((data) => (
          <CategoryCard key={data.name} data={data} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
