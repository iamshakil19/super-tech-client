import React from "react";
import { Link } from "react-router-dom";
import notFoundError from "../../../Assets/Others/notFoundError.gif";
const NotFound = () => {
  return (
    <div className="mt-10">
      <div>
        <img src={notFoundError} alt="" className="mx-auto max-w-md w-[100%]" />
      </div>
      <div className="text-center poppins">
        <p>
          The page you are looking for may have been moved, deleted, or possibly
          never existed
        </p>
        <Link to="/" className="bg-black text-center px-5 py-2 text-white font-medium mt-5 rounded-full cursor-pointer inline-block">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
