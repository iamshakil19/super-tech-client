import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Outlet } from "react-router-dom";
import AdminDashboardSidebar from "./AdminDashboardSidebar";

const AdminDashboardLayout = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <section className="flex gap-3">
        <div>
          <AdminDashboardSidebar open={open} setOpen={setOpen} />
        </div>
        <div className="w-full">
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

export default AdminDashboardLayout;