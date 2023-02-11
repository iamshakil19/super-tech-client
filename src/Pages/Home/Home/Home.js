import React from "react";
import FeaturedCategory from "../FeaturedCategory/FeaturedCategory";
import HomeProduct from "../HomeProduct/HomeProduct";
import MainSlider from "../MainSlider/MainSlider";

const Home = () => {
  return (
    <div className="">
      <MainSlider />
      <FeaturedCategory />
      <HomeProduct/>
    </div>
  );
};

export default Home;
