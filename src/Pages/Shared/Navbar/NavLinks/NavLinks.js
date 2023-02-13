import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-2 lg:px-4 text-le md:cursor-pointer group">
            <h1
              className="py-3 flex items-center justify-between md:pr-0 pr-5 text-md px-2 whitespace-nowrap text-slate-700 "
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              {heading === link.name ? (
                <span className="text-md md:mt-1 md:ml-2 inline">
                  <GoChevronUp />
                </span>
              ) : (
                <span className="text-md md:mt-1 md:ml-2 inline">
                  <GoChevronDown />
                </span>
              )}
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute z-50 inset-x-0 container mx-auto content-center top-32 hidden group-hover:md:block hover:md:block duration-500 ease-in-out px-5">
                  <div className="py-3"></div>
                  <div className=" bg-white p-5 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 shadow-xl rounded-md">
                    {link.subLinks?.map((mySubLink) => (
                      <div>
                        <h1 className="text-sm font-semibold md:pr-0 pr-5 text-slate-700 ">
                          {mySubLink.Head}
                        </h1>
                        {mySubLink.subLink?.map((sLink) => (
                          <li className="text-sm text-gray-500 my-2.5">
                            <Link
                              to={sLink.link}
                              className="hover:text-red-400"
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

          {/*=========== Mobile menu ===========*/}

          <div
            className={`
          ${heading === link.name ? "md:hidden" : "hidden"}`}
          >
            {/* SubLinks */}

            {link?.subLinks.map((sLinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== sLinks.Head
                        ? setSubHeading(sLinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex items-center justify-between text-md text-slate-700 "
                  >
                    {sLinks.Head}
                    {subHeading === sLinks.Head ? (
                      <span className="text-sm md:mt-1 md:ml-2 inline">
                        <GoChevronUp />
                      </span>
                    ) : (
                      <span className="text-sm md:mt-1 md:ml-2 inline">
                        <GoChevronDown />
                      </span>
                    )}
                  </h1>
                  <div
                    className={`${
                      subHeading === sLinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {sLinks.subLink.map((sLink) => (
                      <li className="py-3 pl-14 text-sm text-slate-700 ">
                        <Link to={sLink.link} className="hover:text-blue-400">
                          {sLink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="border-b border-gray-200 mr-4 md:hidden"></div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
