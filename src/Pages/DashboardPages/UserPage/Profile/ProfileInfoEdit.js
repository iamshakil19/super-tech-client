import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { IoMdStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useUpdateUserMutation } from "../../../../features/user/usersApi";
import { divisions } from "../../../../Utils/LocalData";

const ProfileInfoEdit = ({ setEditable, user }) => {
  const [updateUser, { isError, isLoading, isSuccess }] =
    useUpdateUserMutation();
  const {
    name,
    email,
    phoneNumber,
    profession,
    birthday,
    gender,
    division,
    postalCode,
    area,
    streetAddress,
    _id,
  } = user || {};
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Your info updated");
      setEditable(false);
    }
  }, [isError, isSuccess, setEditable]);

  const onSubmit = (data) => {
    updateUser({ id: _id, data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap gap-5 justify-between mt-3">
        <div className="w-full">
          <h3 className="font-semibold mb-1 text-lg">Basic Info</h3>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <h3 className="font-semibold mb-1 flex">
            Name <IoMdStar className="text-red-500" size={11} />{" "}
          </h3>
          <input
            type="text"
            defaultValue={name}
            className={`border block outline-none py-1.5 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
              errors.name
                ? " border-red-500 focus:border-red-500"
                : "focus:border-slate-700 border-slate-300"
            }`}
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          {errors.name && (
            <span className="label-text-alt text-red-500 text-sm ">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <h3 className="font-semibold  mb-1">Email</h3>
          <input
            type="text"
            disabled
            value={email}
            className={`border block outline-none py-1.5 px-3 max-w-sm w-full rounded-md shadow-md cursor-not-allowed`}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <h3 className="font-semibold flex mb-1">
            Mobile Number <IoMdStar className="text-red-500" size={11} />
          </h3>
          <input
            type="text"
            placeholder="Type your phone number"
            defaultValue={phoneNumber}
            className={`border block outline-none py-1.5 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
              errors.phoneNumber
                ? " border-red-500 focus:border-red-500"
                : "focus:border-slate-700 border-slate-300"
            }`}
            {...register("phoneNumber", {
              required: {
                value: true,
                message: "Contact Number is required",
              },
              maxLength: {
                value: 11,
                message: "Must be 11 characters",
              },
              minLength: {
                value: 11,
                message: "Must be 11 characters",
              },
            })}
          />
          {errors.phoneNumber && (
            <span className="label-text-alt text-red-500 text-sm ">
              {errors.phoneNumber.message}
            </span>
          )}
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <h3 className="font-semibold mb-1">Profession</h3>
          <input
            type="text"
            placeholder="Type you profession"
            defaultValue={profession}
            className={`border block outline-none py-1.5 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none focus:border-slate-700 border-slate-300`}
            {...register("profession")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <h3 className="font-semibold mb-1">Birthday</h3>
          <input
            defaultValue={birthday}
            type="date"
            className={`border block outline-none py-1.5 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none focus:border-slate-700 border-slate-300`}
            {...register("birthday")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <h3 className="font-semibold mb-1 lg:ml-6">Gender</h3>
          <div className="flex items-center lg:ml-6">
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                defaultChecked={gender === "male"}
                value="male"
                className="radio radio-success"
                {...register("gender")}
              />
              <label className="ml-2 text-lg cursor-pointer" htmlFor="male">
                Male
              </label>
            </div>
            <div className="flex items-center ml-5">
              <input
                type="radio"
                id="female"
                name="gender"
                defaultChecked={gender === "female"}
                value="female"
                className="radio radio-success"
                {...register("gender")}
              />
              <label className="ml-2 text-lg cursor-pointer" htmlFor="female">
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-300 w-full"></div>
        <div className="w-full">
          <h3 className="font-semibold mb-1 text-lg">Address</h3>
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <h3 className="font-semibold mb-1 flex">
            Division <IoMdStar className="text-red-500" size={11} />
          </h3>
          <select
            type="text"
            selected={division}
            placeholder="Type your division"
            defaultValue={division}
            className={`border capitalize block outline-none py-1.5 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
              errors.division
                ? " border-red-500 focus:border-red-500"
                : "focus:border-slate-700 border-slate-300"
            }`}
            {...register("division", {
              required: {
                value: true,
                message: "Division is required",
              },
            })}
          >
            <option className="" disabled value={""}>
              Select Division
            </option>
            {divisions.map((division) => (
              <option value={division} className="capitalize">
                {division}
              </option>
            ))}
          </select>
          {errors.division && (
            <span className="label-text-alt text-red-500 text-sm ">
              {errors.division.message}
            </span>
          )}
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <h3 className="font-semibold mb-1">Postal Code</h3>
          <input
            type="number"
            placeholder="Type you postal code"
            defaultValue={postalCode}
            className={`border block outline-none py-1.5 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none focus:border-slate-700 border-slate-300`}
            {...register("postalCode")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <h3 className="font-semibold mb-1 flex">
            Area <IoMdStar className="text-red-500" size={11} />
          </h3>
          <input
            type="text"
            placeholder="Type your area"
            defaultValue={area}
            className={`border block outline-none py-1.5 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
              errors.area
                ? " border-red-500 focus:border-red-500"
                : "focus:border-slate-700 border-slate-300"
            }`}
            {...register("area", {
              required: {
                value: true,
                message: "Area is required",
              },
            })}
          />
          {errors.area && (
            <span className="label-text-alt text-red-500 text-sm ">
              {errors.area.message}
            </span>
          )}
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <h3 className="font-semibold mb-1 flex">
            Street Address <IoMdStar className="text-red-500" size={11} />
          </h3>
          <input
            type="text"
            placeholder="Type your street address"
            defaultValue={streetAddress}
            className={`border block outline-none py-1.5 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
              errors.streetAddress
                ? " border-red-500 focus:border-red-500"
                : "focus:border-slate-700 border-slate-300"
            }`}
            {...register("streetAddress", {
              required: {
                value: true,
                message: "Street address is required",
              },
            })}
          />
          {errors.streetAddress && (
            <span className="label-text-alt text-red-500 text-sm ">
              {errors.streetAddress.message}
            </span>
          )}
        </div>

        <div className="w-full mt-5">
          <button
            onClick={() => setEditable(false)}
            className="font-semibold border-2 border-slate-400 py-2 px-4 rounded-md shadow-lg shadow-gray-400 hover:shadow-none duration-200 transition-all ease-in-out w-24"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="font-semibold ml-5 border-2 border-slate-800 py-2 px-4 rounded-md shadow-lg shadow-gray-400 hover:shadow-none duration-200 transition-all ease-in-out w-24 bg-slate-800 text-white hover:bg-transparent hover:text-black hover:border-slate-400"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileInfoEdit;
