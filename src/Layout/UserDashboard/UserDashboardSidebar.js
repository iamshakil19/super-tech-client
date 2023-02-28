import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { userSidebarMenus } from "../../Utils/LocalData";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";

const UserDashboardSidebar = ({ open, setOpen }) => {
  const location = useLocation();
  return (
    <div
      className={`
     bg-black w-72 overflow-y-auto h-full lg:min-h-screen bottom-0 p-3 duration-500 transition-all ease-in-out z-50 fixed lg:static text-white ${
       !open ? "left-0" : "left-[-100%]"
     }`}
    >
      <div className="flex justify-end lg:hidden">
        <div className="py-2">
          <AiOutlineCloseCircle
            className="text-3xl cursor-pointer mr-4"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
      <h2 className="text-xl lg:mt-5 mb-5 font-bold text-center font-serif">
        Shakil Ahmed
      </h2>
      <div className="mt-4 flex  flex-col gap-4 relative">
        {userSidebarMenus?.map((menu, i) => (
          <Link
            to={menu?.path}
            key={i}
            className={`${
              menu?.margin && "mb-5"
            } flex items-center text-md gap-3.5 font-medium p-2 ${
              location.pathname === menu.path && "bg-gray-700"
            } hover:bg-gray-800 rounded-md`}
          >
            <div>{React.createElement(menu.icon, { size: "20" })}</div>
            <h2
              className={`whitespace-pre poppins capitalize
                 "opacity-0 overflow-hidden"
              `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserDashboardSidebar;
