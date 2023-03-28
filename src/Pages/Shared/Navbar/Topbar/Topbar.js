import React, { useEffect } from "react";
import logo from "../../../../Assets/Others/logo.png";
import { BsCart3 } from "react-icons/bs";
import { TfiUser } from "react-icons/tfi";
import { MdCall, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import useAuth from "../../../../hooks/useAuth";
import { useSelector } from "react-redux";

const Topbar = ({ setSearchOpen }) => {
  const isLoggedIn = useAuth();
  const { cartTotalQuantity } = useSelector((state) => state.orders);
  const { user } = useSelector((state) => state.auth) || {};
  const { role } = user || {};
  return (
    <div className="lg:block hidden">
      <div className="grid grid-cols-2 md:grid-cols-3 ">
        <div className="hidden md:block">
          <span className="flex items-center poppins mb-2">
            {" "}
            <MdCall className="text-xl mr-3" />
            <span className="text-sm hover:text-red-500 cursor-pointer text-slate-700 ">
              01716-926040
            </span>{" "}
          </span>
          <span className="flex items-center poppins">
            {" "}
            <MdEmail className="text-xl mr-3" />{" "}
            <span className="text-sm hover:text-red-500 cursor-pointer text-slate-700 ">
              super.tech767@gmail.com
            </span>{" "}
          </span>
        </div>

        <div className="mx-auto">
          <Link to="/">
            <img className="w-44 inline-block" src={logo} alt="" />
          </Link>
        </div>

        <div className="flex items-center justify-end">
          <div>
            <label htmlFor="searchBar">
              <AiOutlineSearch
                onClick={() => setSearchOpen(true)}
                className="text-3xl cursor-pointer text-slate-700 "
              />
            </label>
          </div>
          <div className="px-5 mt-2">
            <div className="indicator">
              <Link to="/cart" className="cursor-pointer">
                <BsCart3 className="text-2xl text-slate-700 " />
              </Link>
              <span className="badge badge-sm indicator-item bg-red-500 border-0 text-white">
                {cartTotalQuantity}
              </span>
            </div>
          </div>
          {isLoggedIn && (
            <>
              {role === "user" && (
                <Link to={"/account"}>
                  <div className="p-1.5 border border-slate-500 rounded-2xl cursor-pointer mx-3">
                    <span>
                      <TfiUser className="text-xl text-slate-700" />
                    </span>
                  </div>
                </Link>
              )}
              {(role === "admin" || role === "moderator") && (
                <Link to={"/dashboard"}>
                  <div className="p-1.5 border border-slate-500 rounded-2xl cursor-pointer ml-3">
                    <span>
                      <HiOutlineViewGridAdd className="text-[21px] cursor-pointer text-slate-700" />
                    </span>
                  </div>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
