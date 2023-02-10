import React from "react";
import { FaSearch } from "react-icons/fa";
import Menubar from "./Menubar/Menubar";
import "./Navbar.css";
import Topbar from "./Topbar/Topbar";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <section className="container mx-auto text-justify px-5 pt-2 md:pt-5">
        <Topbar />
        <div className="border-b border-gray-300 pt-5 md:block hidden"></div>
        <Menubar />
      </section>
    </div>
  );
};

export default Navbar;
