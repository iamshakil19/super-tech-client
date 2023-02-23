import React from "react";
import FeaturedCategory from "./../FeaturedCategory/FeaturedCategory";
import HomeProduct from "../HomeProduct/HomeProduct";
import MainSlider from "../MainSlider/MainSlider";
import Policy from "../Policy/Policy";
import Reviews from "../Reviews/Reviews";
import Companies from "../Companies/Companies";
import AboutProduct from "../AboutProduct/AboutProduct";
import WhySuperTech from "../../Shared/WhySuperTech/WhySuperTech";
import { useGetUsersQuery } from "../../../features/api/apiSlice";

const Home = () => {
  const { data, isError, isSuccess, isLoading, error } = useGetUsersQuery();
  const users = data?.data;

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  // if (isError) {
  //   return error
  // }
  console.log(users);
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
