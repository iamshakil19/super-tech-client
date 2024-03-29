import React, { useState } from "react";
import logo from "../../../../Assets/Others/logo.png";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { TfiUser } from "react-icons/tfi";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import useAuth from "../../../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../../../features/auth/authSlice";
import { useSelector } from "react-redux";
import { handleProductSearchText } from "../../../../features/products/productsSlice";

const Menubar = ({ setSearchOpen, searchOpen }) => {
  const [open, setOpen] = useState(false);
  const isLoggedIn = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
  };
  const { cartTotalQuantity } = useSelector((state) => state.orders);
  const { user } = useSelector((state) => state.auth) || {};
  const { role } = user || {};

  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
    setOpen(false);
  };

  const [searchText, setSearchText] = useState("");
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(handleProductSearchText(searchText));
    navigate("/search");
    setSearchOpen(false);
    setSearchText("");
  };
  return (
    <div className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className=" p-3 pl-2 lg:w-auto w-full flex items-center justify-between lg:hidden">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="md:cursor-pointer h-8" />
          </Link>

          <div className="flex items-center">
            <label htmlFor="searchBar">
              <AiOutlineSearch
                onClick={() => setSearchOpen(true)}
                className="text-2xl mr-5 text-black cursor-pointer"
              />
            </label>

            <div className="pr-2 mt-2 mr-5 z-0">
              <div className="indicator">
                <Link to="/cart" className="cursor-pointer">
                  <BsCart3 className="text-xl text-black " />
                </Link>
                <span className="badge badge-xs indicator-item bg-red-500 border-0 text-white">
                  {cartTotalQuantity}
                </span>
              </div>
            </div>
            {isLoggedIn && (
              <>
                {(role === "admin" || role === "moderator") && (
                  <div className="text-2xl mr-5 transition-all duration-100 lg:hidden">
                    <Link to="/dashboard">
                      <HiOutlineViewGridAdd className="cursor-pointer" />
                    </Link>
                  </div>
                )}
                {role === "user" && (
                  <div className="text-xl mr-5 transition-all duration-100 lg:hidden">
                    <Link to="/account">
                      <TfiUser className="cursor-pointer" />
                    </Link>
                  </div>
                )}
              </>
            )}

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
                to="/collections"
                className="py-3 px-4 inline-block text-sm text-black whitespace-nowrap"
              >
                All Collection
              </Link>
            </li>
            <NavLinks />
            {isLoggedIn ? (
              <li>
                <span
                  onClick={logout}
                  className="py-1.5 px-3 inline-block text-xs whitespace-nowrap bg-black/80 text-white rounded-full cursor-pointer"
                >
                  Log Out
                </span>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="py-1.5 px-3 inline-block text-xs whitespace-nowrap bg-black/80 text-white rounded-full cursor-pointer"
                >
                  Login
                </Link>
              </li>
            )}
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
              to="/collections"
              className="py-4 px-4 inline-block text-sm whitespace-nowrap"
            >
              All Collection
            </Link>
          </li>
          <div className="border-b border-gray-200 mr-4"></div>
          <NavLinks setOpen={setOpen} />
          {isLoggedIn ? (
            <li
              onClick={handleLogout}
              className="py-4 px-4 inline-block text-sm text-black
            whitespace-nowrap"
            >
              Log Out
            </li>
          ) : (
            <li>
              <Link
                onClick={() => setOpen(false)}
                to="/login"
                className="py-4 px-4 inline-block text-sm text-black whitespace-nowrap"
              >
                Login
              </Link>
            </li>
          )}
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
          <div className=" w-full">
            <form
              action=""
              className="w-full flex items-center"
              onSubmit={handleSearchSubmit}
            >
              <button type="submit">
                <AiOutlineSearch className="text-2xl mx-5 cursor-pointer" />
              </button>
              <input
                autoComplete="off"
                type="text"
                placeholder="Search here"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                name="search"
                id="searchBar"
                className=" poppins bg-transparent w-full text-black outline-none text-lg h-10"
              />
            </form>
          </div>
          <span className="w-12">
            <MdClose
              onClick={() => setSearchOpen(false)}
              className="text-2xl mx-3 cursor-pointer"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
