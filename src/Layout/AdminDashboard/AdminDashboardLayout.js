import React from "react";
import { Outlet } from "react-router-dom";
import AdminDashboardSidebar from "./AdminDashboardSidebar";

const AdminDashboardLayout = () => {
  return (
    <div>
      <section className="flex gap-3">
        <div>
          <AdminDashboardSidebar />
        </div>
        <div className="m-3 w-full">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default AdminDashboardLayout;
