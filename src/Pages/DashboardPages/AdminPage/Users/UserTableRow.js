import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import localAvatar from "../../../../Assets/Others/avatar.png";
import {
  useUpdateUserAccessMutation,
  useUpdateUserRoleMutation,
} from "../../../../features/user/usersApi";
import { handleDeleteUserModal } from "../../../../features/user/usersSlice";
const UserTableRow = ({ user, i }) => {
  const [updateUserRole, { isSuccess }] = useUpdateUserRoleMutation();
  const [updateUserAccess, { isSuccess: userAccessSuccess }] =
    useUpdateUserAccessMutation();
  const {
    avatar,
    area,
    birthday,
    phoneNumber,
    division,
    email,
    gender,
    name,
    role,
    access,
    streetAddress,
    postalCode,
    _id,
  } = user;
  const dispatch = useDispatch();

  const handleStatus = (e, id) => {
    const role = { role: e.target.value };
    updateUserRole({ id, role });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully updated user role", { id: "userRole" });
    }
  }, [isSuccess]);

  return (
    <tr className="bg-white border-b poppins border-gray-300 hover:bg-gray-200">
      <td className="px-6 py-4 whitespace-nowrap text-[15px]">{i}</td>
      <td className="px-6">
        <div className="">
          <img
            className="w-11 h-11 object-cover rounded-full shadow-md shadow-gray-300"
            src={
              user?.avatar
                ? `${process.env.REACT_APP_IMG_URL + user?.avatar}`
                : localAvatar
            }
            alt=""
          />
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-[15px] capitalize">
        {name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-[15px]">{email}</td>
      <td className="px-6 py-4 whitespace-nowrap text-[15px] capitalize">
        {phoneNumber}
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-[15px] capitalize">
        {email !== "super.tech767@gmail.com" && (
          <select
            defaultValue={role}
            onChange={(e) => handleStatus(e, _id)}
            className={`outline-none border rounded-full text-sm px-2 font-medium capitalize ${
              role === "moderator" &&
              "bg-blue-200 text-blue-600 border-blue-300"
            } ${
              role === "admin" && "bg-green-200 text-green-600 border-green-300"
            } ${role === "user" && "bg-gray-200 text-black border-gray-300"}`}
          >
            <option value="user">user</option>
            <option value="moderator">moderator</option>
            <option value="admin">Admin</option>
          </select>
        )}
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-[15px] capitalize">
        {email !== "super.tech767@gmail.com" && (
          <>
            <button
              onClick={() =>
                updateUserAccess({ id: _id, access: { access: !access } })
              }
              className={`font-medium text-white ${
                access
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              } text-sm w-20 py-0.5 rounded-full`}
            >
              {access ? "Active" : "Disabled"}
            </button>

            {/* <button className="font-medium text-white bg-red-500 text-sm w-20 py-0.5 rounded-full hover:bg-red-600 ">
              In Active
            </button> */}
          </>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-[15px] capitalize">
        {email !== "super.tech767@gmail.com" && (
          <button
            onClick={() =>
              dispatch(handleDeleteUserModal({ isOpen: true, _id: _id }))
            }
            className="font-medium text-white bg-red-500 text-sm px-3 py-0.5 rounded-full hover:bg-red-600 "
          >
            Delete
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserTableRow;
