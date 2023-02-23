import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div>
      <section className="flex gap-3">
        <div>
          <DashboardSidebar />
        </div>
        <div className="m-3 w-full">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
