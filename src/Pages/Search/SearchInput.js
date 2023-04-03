import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { handleProductSearchText } from "../../features/products/productsSlice";
const SearchInput = () => {
  const { productSearchText } = useSelector((state) => state.productsFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex gap-2 max-w-sm mx-auto justify-between border border-black">
        <input
          type="text"
          defaultValue={productSearchText}
          onChange={(e) => dispatch(handleProductSearchText(e.target.value))}
          name=""
          id=""
          placeholder="Search here"
          className="outline-none px-2 w-full"
        />
        <button className="bg-black text-white block py-2 px-3">
          {" "}
          <BiSearchAlt2 size={25} />{" "}
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
