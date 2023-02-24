import React from 'react';
import { Outlet } from 'react-router-dom';
import UserDashboardSidebar from './UserDashboardSidebar';

const UserDashboardLayout = () => {
    return (
        <div>
      <section className="flex gap-3">
        <div>
          <UserDashboardSidebar />
        </div>
        <div className="m-3 w-full">
          <Outlet />
        </div>
      </section>
    </div>
    );
};

export default UserDashboardLayout;