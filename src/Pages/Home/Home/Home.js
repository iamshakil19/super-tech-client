import React, { useEffect } from "react";
import FeaturedCategory from "./../FeaturedCategory/FeaturedCategory";
import HomeProduct from "../HomeProduct/HomeProduct";
import MainSlider from "../MainSlider/MainSlider";
import Policy from "../Policy/Policy";
import Companies from "../Companies/Companies";
import AboutProduct from "../AboutProduct/AboutProduct";
import WhySuperTech from "../../Shared/WhySuperTech/WhySuperTech";
import PageTitle from "../../../Utils/PageTitle";
import MessengerCustomerChat from "react-messenger-customer-chat";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <PageTitle title={"Super Tech Furniture & Interior"}></PageTitle>
      <MainSlider />
      <FeaturedCategory />
      <HomeProduct />
      {/* <Policy /> */}
      <Companies />
      <AboutProduct />
      <WhySuperTech />
      <MessengerCustomerChat
        pageId="104781992532592"
        appId="172220599059465"
      />
    </div>
  );
};

export default Home;
