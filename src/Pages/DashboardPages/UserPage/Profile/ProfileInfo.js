import React from "react";

const ProfileInfo = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-between">
      <div className="flex flex-col w-full max-w-xs">
        <h3 className="font-semibold mb-1">Name</h3>
        <p>Shakil Ahmed</p>
      </div>
      <div className="flex flex-col w-full max-w-xs">
        <h3 className="font-semibold  mb-1">Email</h3>
        <p>sakil@gmail.com</p>
      </div>
      <div className="flex flex-col w-full max-w-xs">
        <h3 className="font-semibold  mb-1">Mobile Number</h3>
        <p>01877018851</p>
      </div>
      <div className="flex flex-col w-full max-w-xs">
        <h3 className="font-semibold mb-1">Profession</h3>
        <p>Developer</p>
      </div>
      <div className="flex flex-col w-full max-w-xs">
        <h3 className="font-semibold mb-1">Birthday</h3>
        <p>1999-01-09</p>
      </div>
      <div className="flex flex-col w-full max-w-xs">
        <h3 className="font-semibold mb-1">Gender</h3>
        <p>Male</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
