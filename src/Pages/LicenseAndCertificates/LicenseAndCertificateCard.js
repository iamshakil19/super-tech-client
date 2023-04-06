import React from "react";
import { ImArrowDown2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";
const LicenseAndCertificateCard = ({ license }) => {
  const { title, name, date, colorFrom, colorTo, link } = license;
  console.log(colorTo);
  const gradientClass = `bg-gradient-to-r from-${colorFrom} to-${colorTo}`;
  return (
    <div className="border shadow-md w-full mx-auto border-gray-300 max-w-xs h-96 rounded-md poppins">
      <div
        className={`bg-gradient-to-r ${colorFrom} ${colorTo} rounded-t-md h-[60%] flex justify-center items-center relative`}
      >
        <p className="text-white font-medium text-lg">{title}</p>
        <Link
          to={link}
          target="blank"
          className="text-white bg-slate-900 p-3 rounded-full absolute -bottom-5 right-2"
        >
          <ImArrowDown2 size={18} />
        </Link>
      </div>
      <p className="mt-10 px-3">{name}</p>
      <p className="mt-5 px-3 flex items-center gap-2">
        <BiTime size={20} /> <span className="text-sm">{date}</span>
      </p>
    </div>
  );
};

export default LicenseAndCertificateCard;
