import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleUserRole,
  handleUserLimit,
  handleUserSort,
} from "../../../../features/user/usersSlice";

const UserFilter = () => {
  const { limit, sort, userFilter } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <div className="my-5 sm:flex justify-between items-center gap-3 poppins">
      <div>
        <div className=" mb-5 sm:mb-0 flex items-center">
          <p className="hidden md:block mr-2">Filter :</p>
          <select
            onChange={(e) => dispatch(handleUserRole(e.target.value))}
            defaultValue={userFilter}
            className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-40 border-slate-300"
          >
            <option selected className="font-medium text-md" value="">
              Default
            </option>
            <option className=" font-medium text-md" value="user">
              User
            </option>
            <option className=" font-medium text-md" value="moderator">
              Moderator
            </option>
            <option className=" font-medium text-md" value="admin">
              Admin
            </option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="sm:ml-5 sm:mt-0 flex items-center">
          <p className="hidden md:block mr-2">Sort By :</p>
          <select
            onChange={(e) => dispatch(handleUserSort(e.target.value))}
            defaultValue={sort}
            className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-40 border-slate-300"
          >
            <option selected className="font-medium text-md" value="-createdAt">
              Default
            </option>
            <option className=" font-medium text-md" value="createdAt">
              Date (Old → New)
            </option>
            <option className=" font-medium text-md" value="name">
              Name (A → Z)
            </option>
            <option className=" font-medium text-md" value="-name">
              Name (Z → A)
            </option>
            <option className=" font-medium text-md" value="email">
              Email (A → Z)
            </option>
            <option className=" font-medium text-md" value="-email">
              Email (Z → A)
            </option>
          </select>
        </div>
        <div className="flex items-center">
          <p className="hidden md:block mr-2">Show :</p>
          <select
            onChange={(e) => dispatch(handleUserLimit(e.target.value))}
            defaultValue={limit}
            className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-40 border-slate-300"
          >
            <option selected className="font-medium" value="10">
              10
            </option>
            <option className="font-medium" value="15">
              15
            </option>
            <option className="font-medium" value="25">
              25
            </option>
            <option className="font-medium" value="50">
              50
            </option>
            <option className="font-medium" value="100">
              100
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserFilter;
