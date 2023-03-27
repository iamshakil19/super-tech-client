import React from "react";
const user = {
  name: "Shakil Ahmed",
  email: "shakilahmed@gmail.com",
  phoneNumber: "01877018851",
  birthday: "1999-01-09",
  profession: "",
  gender: "male",
};
const ProfileInfo = ({ user }) => {
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
  } = user || {};
  return (
    <div className="flex flex-wrap gap-5 justify-between mt-3">
      <div className="w-full">
        <h3 className="font-semibold mb-1 text-lg">Basic Info</h3>
      </div>
      <div className="flex flex-col w-full max-w-xs">
        <h3 className="font-semibold mb-1">Name</h3>
        <p className="capitalize">{name}</p>
      </div>
      <div className="flex flex-col w-full max-w-xs">
        <h3 className="font-semibold  mb-1">Email</h3>
        <p>{email}</p>
      </div>
      <div className="flex flex-col w-full max-w-xs">
        <h3 className="font-semibold  mb-1">Mobile Number</h3>
        <p>{phoneNumber}</p>
      </div>
      <div className="flex flex-col w-full max-w-xs">
        <h3 className="font-semibold mb-1">Profession</h3>
        <p>{profession}</p>
      </div>
      <div className="flex flex-col w-full max-w-xs">
        <h3 className="font-semibold mb-1">Birthday</h3>
        <p>{birthday}</p>
      </div>
      <div className="flex flex-col w-full max-w-xs">
        <h3 className="font-semibold mb-1">Gender</h3>
        <p className="capitalize">{gender}</p>
      </div>
      <div className="border-b border-gray-300 w-full"></div>
      <div className="w-full">
        <h3 className="font-semibold mb-1 text-lg">Address</h3>
      </div>
      <div className="flex flex-col w-full max-w-xs">
        <h3 className="font-semibold mb-1">Division</h3>
        <p className="capitalize">{division}</p>
      </div>
      <div className="flex flex-col w-full max-w-xs">
        <h3 className="font-semibold mb-1">Postal Code</h3>
        <p className="capitalize">{postalCode}</p>
      </div>
      <div className="flex flex-col w-full max-w-xs">
        <h3 className="font-semibold mb-1">Area</h3>
        <p className="capitalize">{area}</p>
      </div>
      <div className="flex flex-col w-full max-w-xs">
        <h3 className="font-semibold mb-1">Street Address</h3>
        <p className="capitalize">{streetAddress}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
