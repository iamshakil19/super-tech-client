import React from "react";
import logo from "../../../Assets/Others/logo.png";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const footerLinks = [
  [
    {
      name: "search",
      path: "/search",
    },
    {
      name: "Terms of Service",
      path: "/terms-of-service",
    },
    {
      name: "Return & Warranty Policy",
      path: "/return-warranty-policy",
    },
    {
      name: "privacy policy",
      path: "/privacy-policy",
    },
    {
      name: "privacy policy",
      path: "/privacy-policy",
    },
  ],
  [
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "License & Certificates",
      path: "/license-certificates",
    },
    {
      name: "Return & Warranty Policy",
      path: "/return-warranty-policy",
    },
    {
      name: "privacy policy",
      path: "/privacy-policy",
    },
    {
      name: "privacy policy",
      path: "/privacy-policy",
    },
  ],
  [
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "License & Certificates",
      path: "/license-certificates",
    },
    {
      name: "Return & Warranty Policy",
      path: "/return-warranty-policy",
    },
    {
      name: "privacy policy",
      path: "/privacy-policy",
    },
    {
      name: "privacy policy",
      path: "/privacy-policy",
    },
  ],
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="md:mx-auto">
          <img className="w-32 mt-1" src={logo} alt="" />

          <div className="text-3xl flex items-center text-white mt-5">
            <Link to="#">
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
          {footerLinks[0]?.map((link) => (
            <div>
              <Link
                to={link.path}
                className="text-white poppins hover:underline  inline-block mb-3"
              >
                {link.name}
              </Link>
              <br />
            </div>
          ))}
          <div className="border-b mt-5 md:hidden border-slate-600"></div>
        </div>
        <div className="md:mx-auto">
          {footerLinks[1]?.map((link) => (
            <div>
              <Link
                to={link.path}
                className="text-white poppins hover:underline  inline-block mb-3"
              >
                {link.name}
              </Link>
              <br />
            </div>
          ))}
          <div className="border-b mt-5 md:hidden border-slate-600"></div>
        </div>
        <div className="md:mx-auto">
          {footerLinks[2]?.map((link) => (
            <div>
              <Link
                to={link.path}
                className="text-white poppins hover:underline  inline-block mb-3"
              >
                {link.name}
              </Link>
              <br />
            </div>
          ))}
        </div>
        
      </div>
      <p className="text-center text-white mt-20 px-5">
          Copyright © {currentYear} - Super Tech Furniture & Interior, All rights reserved
        </p>
    </div>
  );
};

export default Footer;
