import React, { useState } from "react";
import localAvatar from "../../../../Assets/Others/avatar.png";
import { FiEdit } from "react-icons/fi";
import ProfileInfo from "./ProfileInfo";
import ProfileInfoEdit from "./ProfileInfoEdit";
import { useSelector } from "react-redux";
import { useUpdateAvatarMutation } from "../../../../features/user/usersApi";
import { AiOutlineCamera } from "react-icons/ai";
const Profile = () => {
  const [isEditable, setEditable] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { _id } = user || {};
  const [updateAvatar, { isSuccess }] = useUpdateAvatarMutation();
  const handleAvatar = (e) => {
    const formData = new FormData();
    formData.append("avatar", e.target.files[0]);
    updateAvatar({ id: _id, formData });
  };
  return (
    <div>
      <div className="flex justify-center items-center overflow-auto poppins p-5">
        <div className="bg-slate-100 border border-gray-200 shadow-lg p-8 rounded-2xl max-w-3xl">
          <h2 className=" text-xl mb-5 font-semibold">My Profile</h2>
          <div className="flex flex-wrap gap-3 justify-between">
            <label htmlFor="avatar" className="relative group">
              <img
                src={
                  user?.avatar
                    ? `${process.env.REACT_APP_IMG_URL + user?.avatar}`
                    : localAvatar
                }
                alt=""
                className="w-20 h-20 rounded-full object-cover"
              />
              <span className="bg-black/40 w-20 h-20 hidden group-hover:flex items-center justify-center cursor-pointer absolute top-0 rounded-full">
                <AiOutlineCamera className="text-white" size={27} />{" "}
              </span>
            </label>
            <input
              onChange={(e) => handleAvatar(e)}
              type="file"
              id="avatar"
              name="avatar"
              className="hidden"
              accept="image/jpg, image/jpeg, image/png"
            />

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
            <ProfileInfoEdit user={user} setEditable={setEditable} />
          ) : (
            <ProfileInfo user={user} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
