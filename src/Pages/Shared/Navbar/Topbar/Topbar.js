import React from "react";
import logo from "../../../../Assets/Others/logo.png";
import { BsCart3 } from "react-icons/bs";
import { TfiUser } from "react-icons/tfi";
import { MdCall, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import useAuth from "../../../../hooks/useAuth";
import { useGetCurrentUserQuery } from "../../../../features/user/usersApi";

const Topbar = ({ setSearchOpen }) => {
  const isLoggedIn = useAuth();
const {data: user, isError, isLoading, error} = useGetCurrentUserQuery()
  const { role } = user?.data || {};
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
              <span className="cursor-pointer">
                <BsCart3 className="text-2xl text-slate-700 " />
              </span>
              <span className="badge badge-sm indicator-item bg-red-500 border-0 text-white">
                8
              </span>
            </div>
          </div>
          {isLoggedIn && (
            <>
              {role === "user" && (
                <Link to={"/account"}>
                  <div className="p-1.5 border border-slate-400 rounded-2xl cursor-pointer mx-3">
                    <span>
                      <TfiUser className="text-2xl text-slate-700" />
                    </span>
                  </div>
                </Link>
              )}
              {(role === "admin" || role === "moderator") && (
                <Link to={"/dashboard"}>
                  <div className="p-1.5 border border-slate-400 rounded-2xl cursor-pointer ml-3">
                    <span>
                      <HiOutlineViewGridAdd className="text-[26px] cursor-pointer text-slate-700" />
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
