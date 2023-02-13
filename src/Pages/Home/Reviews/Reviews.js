import React from "react";
import Carousel from "react-multi-carousel";
import ReviewCard from "../../../Components/ReviewCard";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const reviewsData = [
  {
    _id: 1,
    name: "Shakil Ahmed",
    image: "https://i.ibb.co/txkpQVq/avatar-Image.jpg",
    rating: 4,
    position: "Web Instructor",
    text: "Needed comfortable chairs for my office. Grid provided the best quality chairs on our budget.",
  },
  {
    _id: 2,
    name: "Ahmed Rifat",
    image: "https://i.ibb.co/txkpQVq/avatar-Image.jpg",
    rating: 3,
    position: "Web Instructor",
    text: "Needed comfortable chairs for my office. Grid provided the best quality chairs on our budget. ",
  },
  {
    _id: 3,
    name: "Tanvir Khan",
    image: "https://i.ibb.co/txkpQVq/avatar-Image.jpg",
    rating: 5,
    position: "Web Instructor",
    text: "Needed comfortable chairs for my office. Grid provided the best quality chairs on our budget.",
  },
  {
    _id: 4,
    name: "Mahbub Mia",
    image: "https://i.ibb.co/txkpQVq/avatar-Image.jpg",
    rating: 5,
    position: "CEO of Programming hero",
    text: "Needed comfortable chairs for my office. Grid provided the best quality chairs on our budget.",
  },
  {
    _id: 5,
    name: "Akash Ahmed",
    image: "https://i.ibb.co/txkpQVq/avatar-Image.jpg",
    rating: 2,
    position: "Web Instructor",
    text: "Needed comfortable chairs for my office. Grid provided the best quality chairs on our budget.",
  },
];

const Reviews = () => {
  return (
    <div className="bg-[#3E3E3E] py-20 ">
      <h2 className="text-white poppins text-3xl font-semibold text-center mb-14 px-5">
        Don't take our word for it
      </h2>
      <Carousel
        className=" container mx-auto"
        responsive={responsive}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={true}
      >
        {reviewsData.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
