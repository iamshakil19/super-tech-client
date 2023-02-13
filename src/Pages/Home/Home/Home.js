import React from "react";
import FeaturedCategory from "./../FeaturedCategory/FeaturedCategory";
import HomeProduct from "../HomeProduct/HomeProduct";
import MainSlider from "../MainSlider/MainSlider";
import Policy from "../Policy/Policy";
import Reviews from "../Reviews/Reviews";
import Companies from "../Companies/Companies";
import AboutProduct from "../AboutProduct/AboutProduct";

const Home = () => {
  return (
    <div className="">
      <MainSlider />
      <FeaturedCategory />
      <HomeProduct />
      <Policy />
      <Reviews />
      <Companies />
      <AboutProduct />
    </div>
  );
};

export default Home;
