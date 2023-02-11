import React, { useState } from "react";
import Menubar from "./Menubar/Menubar";
import "./Navbar.css";
import Topbar from "./Topbar/Topbar";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="navbar-container">
      <section className="container mx-auto text-justify px-5 pt-2 md:pt-5">
        <Topbar setSearchOpen={setSearchOpen}/>
        <div className="border-b border-gray-300 pt-5 md:block hidden"></div>
        <Menubar setSearchOpen={setSearchOpen} searchOpen={searchOpen}/>
      </section>
    </div>
  );
};

export default Navbar;
