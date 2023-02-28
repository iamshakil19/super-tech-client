import React from "react";
import { useForm } from "react-hook-form";
import { IoMdStar } from "react-icons/io"

const ProfileInfoEdit = ({ setEditable }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const user = {
    name: "Shakil Ahmed",
    email: "shakilahmed@gmail.com",
    // phoneNumber: "01877018851",
    birthday: "1999-01-09",
    gender: "male",
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap gap-5 justify-between mt-3">
        <div className="w-full">
          <h3 className="font-semibold mb-1 text-lg">Basic Info</h3>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <h3 className="font-semibold mb-1 flex">Name <IoMdStar className="text-red-500"size={11}/> </h3>
          <input
            type="text"
            defaultValue={user.name}
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
            value={user.email}
            className={`border block outline-none py-1.5 px-3 max-w-sm w-full rounded-md shadow-md cursor-not-allowed`}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <h3 className="font-semibold flex mb-1">Mobile Number <IoMdStar className="text-red-500"size={11}/></h3>
          <input
            type="text"
            placeholder="Type your phone number"
            defaultValue={user.phoneNumber && user.phoneNumber}
            className={`border block outline-none py-1.5 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
              errors.phoneNumber
                ? " border-red-500 focus:border-red-500"
                : "focus:border-slate-700 border-slate-300"
            }`}
            {...register("phoneNumber", {
              required: {
                value: true,
                message: "Phone Number is required",
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
            defaultValue={user.profession && user.profession}
            className={`border block outline-none py-1.5 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none focus:border-slate-700 border-slate-300`}
            {...register("profession")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <h3 className="font-semibold mb-1">Birthday</h3>
          <input
            defaultValue={user?.birthday && user?.birthday}
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
                checked
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
          <h3 className="font-semibold mb-1 flex">Division <IoMdStar className="text-red-500"size={11}/></h3>
          <input
            type="text"
            placeholder="Type your division"
            defaultValue={user.division && user.division}
            className={`border block outline-none py-1.5 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
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
          />
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
            defaultValue={user.postalCode && user.postalCode}
            className={`border block outline-none py-1.5 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none focus:border-slate-700 border-slate-300`}
            {...register("postalCode")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <h3 className="font-semibold mb-1 flex">Area <IoMdStar className="text-red-500"size={11}/></h3>
          <input
            type="text"
            placeholder="Type your area"
            defaultValue={user.area && user.area}
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
          <h3 className="font-semibold mb-1 flex">Street Address <IoMdStar className="text-red-500"size={11}/></h3>
          <input
            type="text"
            placeholder="Type your street address"
            defaultValue={user.streetAddress && user.streetAddress}
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
