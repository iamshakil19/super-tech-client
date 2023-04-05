import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllUserQuery } from "../../../../features/user/usersApi";
import { handleUserPage } from "../../../../features/user/usersSlice";
import UserTableRow from "./UserTableRow";

const UserTable = () => {
  const dispatch = useDispatch();
  const { page, limit, sort, role, userSearchText } = useSelector(
    (state) => state.users
  );

  let queryString = `page=${page}&limit=${limit}&sort=${sort}`;
  if (role) {
    queryString += `&role=${role}`;
  }
  if (userSearchText) {
    queryString += `&userSearchText=${userSearchText}`;
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
      <div className="overflow-x-auto z-10 sm:rounded-lg poppins mb-10">
        <table className="w-full text-left">
          <thead className="text-sm text-white uppercase bg-slate-900">
            <tr>
              <th className="px-6 py-4 whitespace-nowrap">SL</th>
              <th className="px-6 py-4 whitespace-nowrap">Avatar</th>
              <th className="px-6 py-4 whitespace-nowrap">Name</th>
              <th className="px-6 py-4 whitespace-nowrap">Email</th>
              <th className="px-6 py-4 whitespace-nowrap">Number</th>
              <th className="px-6 py-4 whitespace-nowrap">Role</th>
              <th className="px-6 py-4 whitespace-nowrap">Access</th>
              <th className="px-6 py-4 whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {users?.map((user, i) => (
              <UserTableRow user={user} key={user._id} i={i + 1} />
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
