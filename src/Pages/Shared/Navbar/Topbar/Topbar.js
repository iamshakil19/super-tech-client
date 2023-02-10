import React from "react";
import logo from "../../../../Assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { TfiUser } from "react-icons/tfi";
import { MdCall, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="md:block hidden">
      <div className="flex justify-between items-center">
        <div className="hidden lg:block">
          <span className="flex items-center poppins-font mb-2">
            {" "}
            <MdCall className="text-xl mr-3" />
            <span className="text-sm hover:text-red-500">01716-926040</span>{" "}
          </span>
          <span className="flex items-center poppins-font">
            {" "}
            <MdEmail className="text-xl mr-3" />{" "}
            <span className="text-sm hover:text-red-500" >super.tech767@gmail.com</span>{" "}
          </span>
        </div>

        <div className="">
          <img className="w-32" src={logo} alt="" />
        </div>

        <div className="flex items-center">
          <div className="">
            <form action="" className="search-bar border border-gray-400">
              <input
                autoComplete="off"
                type="text"
                placeholder="Search here"
                name=""
                className="bg-slate-800 poppins-font"
              />
              <button disabled type="">
                <span className="search-icon cursor-pointer">
                  {" "}
                  <FaSearch />{" "}
                </span>
              </button>
            </form>
          </div>

          <div className="pl-7 pr-2 mt-2">
            <div className="indicator">
              <span className="cursor-pointer">
                <BsCart3 className="text-2xl" />
              </span>
              <span className="badge badge-sm indicator-item bg-red-500 border-0 text-white">
                8
              </span>
            </div>
          </div>

          <div className="pl-7">
            <span>
              <Link to={"/login"}>
                <TfiUser className="text-2xl cursor-pointer" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
