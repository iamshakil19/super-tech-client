import React, { useState } from "react";
import localAvatar from "../../../../Assets/Others/avatar.png";
import { FiEdit } from "react-icons/fi";
import ProfileInfo from "./ProfileInfo";
import ProfileInfoEdit from "./ProfileInfoEdit";
const Profile = () => {
  const [isEditable, setEditable] = useState(false);
  return (
    <div>
      <div className="flex justify-center items-center overflow-auto poppins p-5">
        <div className="bg-slate-100 border border-gray-200 shadow-lg p-8 rounded-2xl max-w-3xl">
          <h2 className=" text-xl mb-5 font-semibold">My Profile</h2>
          <div className="flex flex-wrap gap-3 justify-between">
            <div className="md:flex w-full">
              <img src={localAvatar} alt="" className="w-20" />
              <input
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

          {isEditable ? <ProfileInfoEdit setEditable={setEditable} /> : <ProfileInfo />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
