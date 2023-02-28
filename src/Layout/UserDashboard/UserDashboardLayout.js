import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import UserDashboardSidebar from "./UserDashboardSidebar";
import { HiMenuAlt3 } from "react-icons/hi";
const UserDashboardLayout = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <section className="lg:flex gap-3">
        <div>
          <UserDashboardSidebar setOpen={setOpen} open={open} />
        </div>
        <div className=" w-full">
          <div className="py-3 ml-4 lg:hidden">
            <HiMenuAlt3
              className="text-3xl cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default UserDashboardLayout;