import React from "react";
import { useNavigate } from "react-router-dom";
import chair from "../../../Assets/Others/chair.jpg";

const AboutProduct = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-5 mb-20">
      <div className="md:grid grid-cols-2 gap-5">
        <div>
          <img
            className="w-[500px] mx-auto md:float-right"
            src={chair}
            alt=""
          />
        </div>
        <div className="my-auto md:ml-5 py-5">
          <h1 className="text-3xl text-black  font-bold poppins py-5">
            We Create Meaningful Design
          </h1>

          <p className="poppins my-5 max-w-xl text-justify">
            Super Tech ensures you 100% authenticity and originality of the
            products. We never want you to compromise with the quality that is
            why we ensure you get the best furniture delivered via Super Tech!
          </p>
          <p className="poppins my-5  max-w-xl text-justify">
            1. We assure you 100% premium quality of our products and before the
            delivery of each product, we have 3 product experts who do the
            quality check while the product is ready for delivery.
          </p>
          <p className="poppins my-5  max-w-xl text-justify">
            2. At Super Tech, we deliver you premium quality and stylish design
            which also delivers the meaning of elegance at your home.
          </p>

          <button
            onClick={() => navigate("/collections")}
            className="py-2 px-4 text-white bg-black poppins font-semibold whitespace-nowrap flex justify-center items-center rounded-md custom-shadow"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
