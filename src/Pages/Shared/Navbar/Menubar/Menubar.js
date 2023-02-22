import React, { useState } from "react";
import logo from "../../../../Assets/Others/logo.png";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const Menubar = ({ setSearchOpen, searchOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className=" p-3 pl-2 lg:w-auto w-full flex items-center justify-between lg:hidden">
          <Link to={"/"} ><img src={logo} alt="logo" className="md:cursor-pointer h-8" /></Link>

          <div className="flex items-center">
            <div>
              <AiOutlineSearch
                onClick={() => setSearchOpen(true)}
                className="text-2xl mr-5 text-slate-700 cursor-pointer"
              />
            </div>

            <div className="pr-2 mt-2 mr-5 z-0">
              <div className="indicator">
                <span className="cursor-pointer">
                  <BsCart3 className="text-xl text-slate-700 " />
                </span>
                <span className="badge badge-xs indicator-item bg-red-500 border-0 text-white">
                  8
                </span>
              </div>
            </div>
            <div
              onClick={() => setOpen(true)}
              className="text-2xl transition-all duration-100 lg:hidden"
            >
              <RxHamburgerMenu className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="z-20">
          <ul className="lg:flex lg:flex-wrap items-center hidden uppercase poppins">
            <li>
              <Link
                to="/all-collection"
                className="py-3 px-4 inline-block text-sm text-slate-700 whitespace-nowrap"
              >
                All Collection
              </Link>
            </li>
            <NavLinks />
            <li>
              <Link
                to="/login"
                className="py-3 px-4 inline-block text-sm text-slate-700 whitespace-nowrap"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>



        {/*========== Mobile Navbar ============*/}
        <ul
          className={`
        lg:hidden bg-white  w-full overflow-y-auto h-full bottom-0 py-2 pl-4 duration-500 z-50 fixed ${
          open ? "left-0" : "left-[-100%]"
        }`}
        >
          <li className="pr-8 mt-4 pb-3">
            <MdClose
              onClick={() => setOpen(false)}
              className="float-right text-2xl cursor-pointer"
            />
          </li>
          <li>
            <Link
            
              to="/all-collection"
              className="py-4 px-4 inline-block text-sm whitespace-nowrap"
            >
              All Collection
            </Link>
          </li>
          <div className="border-b border-gray-200 mr-4"></div>
          <NavLinks setOpen={setOpen}/>
          <li>
            <Link
            onClick={() => setOpen(false)}
              to="/login"
              className="py-4 px-4 inline-block text-sm text-slate-700 whitespace-nowrap"
            >
              Login
            </Link>
          </li>
          <div className="border-b border-gray-200 mr-4"></div>
        </ul>
      </div>

      {/* Searchbar */}
      <div
        className={`absolute w-full top-0 left-0 duration-300 ease-in-out z-50 shadow-2xl bg-white ${
          searchOpen ? "top-0" : "top-[-100%]"
        }`}
      >
        <div
          className={`container flex justify-between items-center py-5 md:py-7 mx-auto`}
        >
          <div className="flex items-center">
            <span>
              <AiOutlineSearch className="text-2xl mx-5 cursor-pointer" />
            </span>
            <form action="" className="">
              <input
                autoComplete="off"
                type="text"
                placeholder="Search here"
                name=""
                className=" poppins bg-transparent text-black outline-none text-lg h-10"
              />
            </form>
          </div>
          <span>
            <MdClose
              onClick={() => setSearchOpen(false)}
              className="text-2xl mr-3 cursor-pointer"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
