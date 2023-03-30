import React from "react";
import { Link, useLocation } from "react-router-dom";
import { adminSidebarMenus } from "../../Utils/LocalData";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import localAvatar from "../../Assets/Others/avatar.png";
import { MdLogout } from "react-icons/md";
import { userLoggedOut } from "../../features/auth/authSlice";
const AdminDashboardSidebar = ({ open, setOpen }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
    setOpen(false);
  };

  return (
    <div
      className={`
      bg-black w-72 overflow-y-auto h-screen fixed lg:sticky top-0 p-3 duration-500 transition-all ease-in-out z-50 text-white poppins ${
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
      <h2 className="text-xl lg:mt-5 mb-4 font-bold font-serif">
        Super Tech Dashboard
      </h2>
      <div className="flex items-center gap-5 pb-3">
        <div className="avatar online">
          <div className="w-11 rounded-full ring ring-green-300">
            <img
              src={
                user?.avatar
                  ? `${process.env.REACT_APP_IMG_URL + user?.avatar}`
                  : localAvatar
              }
              alt=""
            />
          </div>
        </div>
        <div>
          <h3 className="font-semibold">{user.name}</h3>
          <p className="capitalize text-xs font-medium">{user.role}</p>
        </div>
      </div>
      <div className="mt-4 flex  flex-col gap-4 relative">
        {adminSidebarMenus?.map((menu, i) => (
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
        <p
          onClick={handleLogout}
          className="flex items-center text-md gap-3.5 font-medium p-2 hover:bg-gray-800  rounded-md cursor-pointer text-red-500"
        >
          {" "}
          <MdLogout size={20} /> Logout
        </p>
      </div>
    </div>
  );
};

export default AdminDashboardSidebar;
