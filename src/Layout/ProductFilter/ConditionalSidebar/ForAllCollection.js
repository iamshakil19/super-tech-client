import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleCollectionPageCategoryFilter } from "../../../features/products/productsSlice";
import { forAllCollectionFilterData } from "../../../Utils/LocalData";

const ForAllCollection = () => {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const dispatch = useDispatch();
  const handleOnchange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCategoryFilter([...categoryFilter, value]);
    } else {
      setCategoryFilter((pre) => {
        return [...pre.filter((category) => category !== value)];
      });
    }
  };

  useEffect(() => {
    let categoryFilterString = "";
    if (categoryFilter?.length === 1) {
      categoryFilterString = `&category=${categoryFilter.toString()}`;
    } else if (categoryFilter?.length > 1) {
      categoryFilterString =
        "&category=" + categoryFilter.toString().split(",").join("&category=");
    }
    dispatch(handleCollectionPageCategoryFilter(categoryFilterString));
  }, [categoryFilter?.length, categoryFilter, dispatch]);
  return (
    <div>
      {forAllCollectionFilterData.map((data) => (
        <div
          key={data.value}
          className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm"
        >
          <input
            onChange={handleOnchange}
            type="checkbox"
            name=""
            value={data.value}
            id={data.value}
            className="mr-3 checkbox checkbox-success checkbox-xs"
          />
          <label
            className="poppins cursor-pointer block w-full text-md font-medium capitalize"
            htmlFor={data.value}
          >
            {data.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ForAllCollection;
