import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../../Assets/Others/logo.png";
import OrderInfoForSmallDevice from "./OrderInfoForSmallDevice";
const CheckoutsInformationHeader = () => {
  const location = useLocation();
  return (
    <div className="p-2 poppins max-w-xl mx-auto ">
      <div>
        <Link to="/">
          <img className="w-48 cursor-pointer inline-block" src={logo} alt="" />
        </Link>
      </div>

      <OrderInfoForSmallDevice />

      {location.pathname !== "/checkouts/thank-you" && <div className="flex items-center gap-1 mt-5">
        <span className="text-sm cursor-pointer">
          <Link to="/cart">Cart</Link>
        </span>{" "}
        <RiArrowRightSLine size={19} />{" "}
        <span
          className={`text-sm ${
            location.pathname === "/checkouts" && "font-semibold"
          }`}
        >
          Information
        </span>{" "}
        <RiArrowRightSLine size={19} />{" "}
        <span
          className={`text-sm ${
            location.pathname === "/checkouts/shipping" && "font-semibold"
          }`}
        >
          Shipping
        </span>{" "}
        <RiArrowRightSLine size={19} />{" "}
        <span
          className={`text-sm ${
            location.pathname === "/checkouts/payment" && "font-semibold"
          }`}
        >
          Payment
        </span>
      </div>}
      <Outlet />
    </div>
  );
};

export default CheckoutsInformationHeader;
