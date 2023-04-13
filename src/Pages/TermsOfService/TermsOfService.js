import React from "react";
import PageTitle from "../../Utils/PageTitle";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div>
      <PageTitle
        title={"Terms Of Service - Super Tech Furniture & Interior"}
      ></PageTitle>


      
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-300 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <Link to="">Home</Link>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
