import React, { useEffect } from "react";
import FeaturedCategory from "./../FeaturedCategory/FeaturedCategory";
import HomeProduct from "../HomeProduct/HomeProduct";
import MainSlider from "../MainSlider/MainSlider";
import Policy from "../Policy/Policy";
import Reviews from "../Reviews/Reviews";
import Companies from "../Companies/Companies";
import AboutProduct from "../AboutProduct/AboutProduct";
import WhySuperTech from "../../Shared/WhySuperTech/WhySuperTech";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <MainSlider />
      <FeaturedCategory />
      <HomeProduct />
      <Policy />
      {/* <Reviews /> */}
      <Companies />
      <AboutProduct />
      <WhySuperTech />
    </div>
  );
};

export default Home;
