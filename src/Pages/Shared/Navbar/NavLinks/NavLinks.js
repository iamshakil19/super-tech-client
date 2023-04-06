import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const NavLinks = ({ setOpen }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-2 relative xl:px-4 text-left lg:cursor-pointer group">
            <h1
              className={`py-3 flex items-center justify-between  lg:pr-0 pr-5 text-sm px-2 whitespace-nowrap text-black `}
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              {heading === link.name ? (
                <span className="text-md lg:mt-1 lg:ml-2 inline">
                  <GoChevronUp />
                </span>
              ) : (
                <span className="text-md lg:mt-1 lg:ml-2 inline">
                  <GoChevronDown />
                </span>
              )}
            </h1>
            {link.submenu && (
              <div className="">
                <div className="absolute hidden group-hover:lg:block hover:lg:block z-40 duration-500 ease-in-out">
                  <div className="py-3 "></div>
                  <div className=" bg-white p-5 border w-80 shadow-xl rounded-md">
                    {link.subLinks?.map((mySubLink, i) => (
                      <div key={i}>
                        {mySubLink.subLink?.map((sLink, i) => (
                          <li key={i} className="text-[13px] text-black my-2.5">
                            <Link
                              to={sLink.link}
                              className="hover:bg-black hover:text-white block p-2 transition-all duration-75 rounded-md ease-in-out"
                            >
                              {sLink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/*=========== Mobile menus ===========*/}

          <div
            className={`
          ${heading === link.name ? "lg:hidden" : "hidden"}`}
          >
            {/* SubLinks */}

            {link?.subLinks.map((sLinks, i) => (
              <div key={i}>
                {sLinks.subLink.map((sLink, i) => (
                  <li key={i} className="py-3 pl-10 text-sm text-black ">
                    <Link
                      onClick={() => setOpen(false)}
                      to={sLink.link}
                      className="hover:text-red-500"
                    >
                      {sLink.name}
                    </Link>
                  </li>
                ))}
                <div></div>
              </div>
            ))}
          </div>
          <div className="border-b border-gray-200 mr-4 lg:hidden"></div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
