import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
const SearchInput = () => {
  return (
    <div>
      <form className="">
        <div className="flex gap-2 max-w-sm mx-auto justify-between border border-black">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search here"
            className="outline-none px-2 w-full"
          />
          <button type="submit" className="bg-black text-white block py-2 px-3">
            {" "}
            <BiSearchAlt2 size={25} />{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
