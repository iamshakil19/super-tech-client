import React from "react";
import { useGetAllUserQuery } from "../../../../features/user/usersApi";
import UserTableRow from "./UserTableRow";

const UserTable = () => {
  const { data: allUsers, isError, isLoading, error } = useGetAllUserQuery();
  const { users } = allUsers?.data || {};

  return (
    <div>
      <div class="overflow-x-auto z-10  sm:rounded-lg poppins pb-36">
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
    </div>
  );
};

export default UserTable;
