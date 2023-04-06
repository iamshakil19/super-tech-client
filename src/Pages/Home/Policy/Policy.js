import React from "react";
import delivery from "../../../Assets/Others/delivery.png";
import warranty from "../../../Assets/Others/warranty.png";
import policy from "../../../Assets/Others/policy.png";

const Policy = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="text-center py-4">
          <img className="w-14 mx-auto py-2" src={delivery} alt="" />
          <h2 className="text-3xl font-bold poppins text-black  py-2">
            Free Delivery
          </h2>
          <p className="poppins py-2 max-w-md mx-auto px-5">
            FREE home delivery with assembling inside Dhaka within 3 days and
            5-7 days anywhere in Bangladesh.
          </p>
        </div>
        <div className="text-center py-4">
          <img className="w-14 mx-auto py-2" src={warranty} alt="" />
          <h2 className="text-3xl font-bold poppins text-black  py-2">
            Returns & Warranty
          </h2>
          <p className="poppins py-2 max-w-md mx-auto px-5">
            Returns & Warranty GRID provides an easy, hassle-free servicing
            system where we pick up your product from your home if there is any
            problem and get it back to you.
          </p>
        </div>
        <div className="text-center py-4">
          <img className="w-14 mx-auto py-2" src={policy} alt="" />
          <h2 className="text-3xl font-bold poppins text-black  py-2">
            0% EMI Policy
          </h2>
          <p className="poppins py-2 max-w-md mx-auto px-5">
            To avail EMI, Place your order through Website and share your order
            ID in our Inbox. We will share the EMI payment link.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
