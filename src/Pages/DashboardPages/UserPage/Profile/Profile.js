import React, { useState } from "react";
import localAvatar from "../../../../Assets/Others/avatar.png";
import { FiEdit } from "react-icons/fi";
import ProfileInfo from "./ProfileInfo";
import ProfileInfoEdit from "./ProfileInfoEdit";
import { useSelector } from "react-redux";
import {
  useGetCurrentUserQuery,
  useUpdateAvatarMutation,
} from "../../../../features/user/usersApi";
const Profile = () => {
  const [isEditable, setEditable] = useState(false);
  const { data: user, isError, isLoading, error } = useGetCurrentUserQuery();
  const { _id } = user?.data || {};
  const [updateAvatar, { isSuccess }] = useUpdateAvatarMutation();
  const handleAvatar = (e) => {
    const formData = new FormData();
    formData.append("avatar", e.target.files[0]);
    updateAvatar({ id: _id, formData });
  };
  console.log(process.env.REACT_APP_IMG_URL + user?.data?.avatar);
  return (
    <div>
      <div className="flex justify-center items-center overflow-auto poppins p-5">
        <div className="bg-slate-100 border border-gray-200 shadow-lg p-8 rounded-2xl max-w-3xl">
          <h2 className=" text-xl mb-5 font-semibold">My Profile</h2>
          <div className="flex flex-wrap gap-3 justify-between">
            <div className="md:flex w-full">
              <img
                src={
                  user?.data?.avatar
                    ? `${process.env.REACT_APP_IMG_URL + user?.data?.avatar}`
                    : localAvatar
                }
                alt=""
                className="w-20 h-20 rounded-full object-cover"
              />
              <input
                onChange={(e) => handleAvatar(e)}
                type="file"
                id="avatar"
                name="avatar"
                className="hidden"
                accept="image/jpg, image/jpeg, image/png"
              />
              <label
                htmlFor="avatar"
                className="flex items-center cursor-pointer md:mx-5 mt-3 md:mt-0 font-semibold"
              >
                {" "}
                <FiEdit className="text-lg mr-3 md:mx-3" /> Place Image
              </label>
            </div>

            <div className="flex w-full">
              <button
                onClick={() => setEditable(!isEditable)}
                className="flex items-center my-3 font-semibold"
              >
                Update Info <FiEdit className="text-lg mx-3" />{" "}
              </button>
            </div>
          </div>

          {isEditable ? (
            <ProfileInfoEdit user={user?.data} setEditable={setEditable} />
          ) : (
            <ProfileInfo user={user?.data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
