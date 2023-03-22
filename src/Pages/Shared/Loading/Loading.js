import React from "react";
import spinner from "../../../Assets/Others/spinner.gif";
const Loading = () => {
  return (
    <div className=" mx-auto container flex justify-center items-center">
      <div>
        <img src={spinner} alt="" className="w-24 md:w-32" />
      </div>
    </div>
  );
};

export default Loading;
