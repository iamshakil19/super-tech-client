import React from "react";
import logo from "../../../Assets/Others/logo.png";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { black } from "tailwindcss/colors";
import { footerLinks } from "../../../Utils/LocalData";
import { MdCall, MdEmail } from "react-icons/md";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black py-24 poppins">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="md:mx-auto">
          <img
            className="w-36 mt-1 bg-white py-1 px-2 rounded-sm"
            src={logo}
            alt=""
          />

          <div className="mt-5 text-white">
            <div className="flex items-center">
              <MdCall size={19} className="mr-3" /> <span>01716-926040</span>
            </div>
            <div className="flex items-center mt-2">
              <MdEmail size={19} className="mr-3" />{" "}
              <span>super.tech767@gmail.com</span>
            </div>
            <div className="flex mt-2">
              <IoLocationSharp size={21} className="mr-3" />

              <span className="w-full">
                Plot 31/B, Avenue 05, Road 15/1, Block C, Mirpur - 11,
                Dhaka-1216, Bangladesh
              </span>
            </div>
          </div>

          <div className="text-3xl flex items-center text-white mt-5">
            <Link
              target={black}
              to="https://www.facebook.com/supertechfurniture01?mibextid=ZbWKwL"
            >
              <BsFacebook className="mr-5 cursor-pointer" />
            </Link>
            <Link to="#">
              <BsYoutube className="mr-5 cursor-pointer" />
            </Link>
            <Link to="#">
              <BsInstagram className=" cursor-pointer" />
            </Link>
          </div>
          <div className="border-b mt-5 md:hidden border-slate-600"></div>
        </div>
        <div className="md:mx-auto">
          {footerLinks?.[0]?.map((link) => (
            <div key={link.path}>
              <Link
                to={link.path}
                className="text-white poppins hover:underline  inline-block mb-3 capitalize"
              >
                {link.name}
              </Link>
              <br />
            </div>
          ))}
          <div className="border-b mt-5 md:hidden border-slate-600"></div>
        </div>
        <div className="md:mx-auto">
          {footerLinks?.[1]?.map((link) => (
            <div key={link.path}>
              <Link
                to={link.path}
                className="text-white poppins hover:underline  inline-block mb-3  capitalize"
              >
                {link.name}
              </Link>
              <br />
            </div>
          ))}
          <div className="border-b mt-5 md:hidden border-slate-600"></div>
        </div>
        <div className="md:mx-auto">
          {footerLinks?.[2]?.map((link) => (
            <div key={link.path}>
              <Link
                to={link.path}
                className="text-white poppins hover:underline  inline-block mb-3 capitalize"
              >
                {link.name}
              </Link>
              <br />
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-white mt-20 px-5 poppins">
        Copyright © {currentYear} - Super Tech Furniture & Interior, All rights
        reserved
      </p>
    </div>
  );
};

export default Footer;
