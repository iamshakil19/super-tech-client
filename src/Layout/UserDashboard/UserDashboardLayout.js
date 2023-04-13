import React from "react";
import { Outlet } from "react-router-dom";
import UserDashboardSidebar from "./UserDashboardSidebar";
import { HiMenuAlt3 } from "react-icons/hi";
import PageTitle from "../../Utils/PageTitle";
const UserDashboardLayout = () => {
  return (
    <div>
      <PageTitle title={"Account - Super Tech Furniture & Interior"}></PageTitle>
      <div className="drawer drawer-mobile">
        <input
          id="adminDashboardSidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-5">

          <label htmlFor="adminDashboardSidebar" className="py-3 ml-4 lg:hidden">
            <HiMenuAlt3
              className="text-3xl cursor-pointer"
            />
          </label>

          <Outlet />
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="adminDashboardSidebar"
            className="drawer-overlay"
          ></label>
          <UserDashboardSidebar/>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
