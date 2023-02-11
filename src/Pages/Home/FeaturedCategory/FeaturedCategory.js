import React from "react";
import all from "../../../Assets/Main-Category/all.png";
import table from "../../../Assets/Main-Category/table.png";
import chair from "../../../Assets/Main-Category/chair.png";
import drawer from "../../../Assets/Main-Category/drawer.png";
import cabinet from "../../../Assets/Main-Category/cabinet.png";
import shelf from "../../../Assets/Main-Category/shelf.png";
import shoe_rack from "../../../Assets/Main-Category/shoe-rack.png";
import work_station from "../../../Assets/Main-Category/work-station.png";
import steel_furniture from "../../../Assets/Main-Category/steel-furniture.png";
import sofa from "../../../Assets/Main-Category/sofa.png";
import home from "../../../Assets/Main-Category/home.png";
import garments from "../../../Assets/Main-Category/garments.png";
import interior from "../../../Assets/Main-Category/interior.png";
import CategoryCard from "../../../Components/CategoryCard";

const categoryData = [
  { image: all, name: "all collection", path: "/all-collection" },
  { image: home, name: "home", path: "/home-furniture" },
  { image: table, name: "table", path: "/table" },
  { image: chair, name: "chair", path: "/chair" },
  { image: drawer, name: "drawer", path: "/drawer" },
  { image: cabinet, name: "cabinet", path: "/cabinet" },
  { image: shelf, name: "shelf", path: "/shelf" },
  { image: shoe_rack, name: "shoe rack", path: "/shoe-rack" },
  { image: work_station, name: "work station", path: "/work-station" },
  { image: steel_furniture, name: "steel furniture", path: "/steel-furniture" },
  { image: sofa, name: "sofa", path: "/sofa" },

  { image: garments, name: "garments", path: "/garments" },
  { image: interior, name: "interior", path: "/interior" },
];

const FeaturedCategory = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center poppins-font mt-10 lg:mt-14 text-2xl lg:text-3xl text-slate-600 font-semibold">
        Featured Category
      </h1>
      <p className="text-center text-sm md:text-[15px] poppins-font mt-2">
        Get Your Desired Product From Featured Category!
      </p>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6 mt-8 mx-auto px-5">
        {categoryData.map((data) => (
          <CategoryCard data={data} />
        ))}
      </div>

      {/* <div>
        <img
        className="h-96 cursor-pointer"
          src="https://cdn.shopify.com/s/files/1/0521/4434/1176/products/img_9144_hP59y8_360x.jpg?v=1672571683"
          alt=""
          onMouseOver={e => (e.currentTarget.src = "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/S10G120L_BK_BK_01_Black_360x.jpg?v=1673771839")}
          onMouseOut={e => (e.currentTarget.src = "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/img_9144_hP59y8_360x.jpg?v=1672571683")}
        />
      </div> */}
    </div>
  );
};

export default FeaturedCategory;
