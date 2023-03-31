import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllUserQuery } from "../../../../features/user/usersApi";
import { handleUserPage } from "../../../../features/user/usersSlice";
import UserTableRow from "./UserTableRow";

const UserTable = () => {
  const dispatch = useDispatch();
  const { page, limit, sort, role } = useSelector((state) => state.users);
  let queryString = `page=${page}&limit=${limit}&sort=${sort}`;
  if (role) {
    queryString += `&role=${role}`;
  }
  const {
    data: allUsers,
    isError,
    isLoading,
    error,
  } = useGetAllUserQuery(queryString);
  const { users, pageCount } = allUsers?.data || {};

  const handlePageClick = (event) => {
    dispatch(handleUserPage(event.selected + 1));
  };

  return (
    <div>
      <div class="overflow-x-auto z-10 sm:rounded-lg poppins mb-10">
        <table class="w-full text-left">
          <thead class="text-sm text-white uppercase bg-slate-900">
            <tr>
              <th class="px-6 py-4 whitespace-nowrap">SL</th>
              <th class="px-6 py-4 whitespace-nowrap">Avatar</th>
              <th class="px-6 py-4 whitespace-nowrap">Name</th>
              <th class="px-6 py-4 whitespace-nowrap">Email</th>
              <th class="px-6 py-4 whitespace-nowrap">Number</th>
              <th class="px-6 py-4 whitespace-nowrap">Role</th>
              <th class="px-6 py-4 whitespace-nowrap">Access</th>
              <th class="px-6 py-4 whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {users?.map((user, i) => (
              <UserTableRow user={user} key={i} i={i + 1} />
            ))}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-end gap-2"
        pageLinkClassName="py-1.5 px-4 font-medium hover:bg-slate-800 hover:text-white"
        previousLinkClassName="py-1.5 px-4 font-medium hover:bg-slate-800 bg-slate-300 hover:text-white"
        nextLinkClassName="py-1.5 px-4 font-medium hover:bg-slate-800  bg-slate-300 hover:text-white"
        activeLinkClassName="bg-slate-800 text-white"
      />
    </div>
  );
};

export default UserTable;
