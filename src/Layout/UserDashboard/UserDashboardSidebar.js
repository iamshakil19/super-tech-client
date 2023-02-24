import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { userSidebarMenus } from "../../Utils/LocalData";

const UserDashboardSidebar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  return (
    <div
      className={`bg-black min-h-screen sticky top-0 ${
        open ? "w-72" : "w-16"
      } duration-500 text-white px-4`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          className="text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex  flex-col gap-4 relative">
        {userSidebarMenus?.map((menu, i) => (
          <Link
            to={menu?.path}
            key={i}
            className={`${
              menu?.margin && "mb-5"
            } group flex items-center text-md gap-3.5 font-medium p-2 ${
              location.pathname === menu.path && "bg-gray-700"
            } hover:bg-gray-800 rounded-md`}
          >
            <div>{React.createElement(menu.icon, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${i + 1}00ms`,
              }}
              className={`whitespace-pre duration-500 poppins capitalize ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold capitalize whitespace-pre text-black poppins rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
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
