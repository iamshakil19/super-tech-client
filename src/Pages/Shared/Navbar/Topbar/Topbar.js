import React from "react";
import logo from "../../../../Assets/Others/logo.png";
import { FaSearch } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { TfiUser } from "react-icons/tfi";
import { MdCall, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Topbar = ({setSearchOpen}) => {
  return (
    <div className="md:block hidden">
      <div className="grid grid-cols-2 md:grid-cols-3 ">
        <div className="hidden md:block">
          <span className="flex items-center poppins-font mb-2">
            {" "}
            <MdCall className="text-xl mr-3" />
            <span className="text-sm hover:text-red-500 cursor-pointer text-slate-600">
              01716-926040
            </span>{" "}
          </span>
          <span className="flex items-center poppins-font">
            {" "}
            <MdEmail className="text-xl mr-3" />{" "}
            <span className="text-sm hover:text-red-500 cursor-pointer text-slate-600">
              super.tech767@gmail.com
            </span>{" "}
          </span>
        </div>

        <div className="">
          <img className="w-32 mx-auto" src={logo} alt="" />
        </div>

        <div className="flex items-center justify-end">
          <div>
            <span>
              <AiOutlineSearch onClick={() => setSearchOpen(true)} className="text-3xl cursor-pointer text-slate-600" />
            </span>
          </div>
          <div className="pl-7 pr-2 mt-2">
            <div className="indicator">
              <span className="cursor-pointer">
                <BsCart3 className="text-2xl text-slate-600" />
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
