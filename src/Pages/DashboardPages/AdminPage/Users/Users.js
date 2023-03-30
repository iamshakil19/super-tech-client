import React, { useEffect } from "react";
import { useGetAllUserQuery } from "../../../../features/user/usersApi";
import Error from "../../../Shared/Error/Error";
import Loading from "../../../Shared/Loading/Loading";
import emptyUsers from "../../../../Assets/Others/emptyUsers.gif";
import UsersSearchBox from "./UsersSearchBox";
import UserFilter from "./UserFilter";
import UserTable from "./UserTable";
import UserDeleteModal from "./UserDeleteModal";
const Users = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: allUsers, isError, isLoading, error } = useGetAllUserQuery();
  const { users } = allUsers?.data || {};
  console.log(allUsers);

  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  } else if (!isLoading && !isError && users?.length === 0) {
    content = (
      <div className="flex justify-center items-center min-h-screen poppins">
        <div>
          <img className="block mx-auto w-44" src={emptyUsers} alt="" />
          <p className="text-center font-semibold text-slate-800 text-xl">
            No Orders Yet
          </p>
        </div>
      </div>
    );
  } else if (!isLoading && !isError && users?.length > 0) {
    content = (
      <div className="mt-5 poppins">
        <UsersSearchBox />
        <UserFilter />
        <UserTable />
        <UserDeleteModal />
      </div>
    );
  }
  return content;
};

export default Users;
