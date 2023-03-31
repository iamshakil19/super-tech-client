import React from "react";
import { forWorkStationFilterData } from "../../../Utils/LocalData";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { handleWorkStationCollectionPageCategoryFilter } from "../../../features/products/productsSlice";

const ForWorkStation = () => {
  const [subCategoryFilter, setSubCategoryFilter] = useState([]);
  const dispatch = useDispatch();
  const handleOnchange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSubCategoryFilter([...subCategoryFilter, value]);
    } else {
      setSubCategoryFilter((pre) => {
        return [...pre.filter((category) => category !== value)];
      });
    }
  };
  useEffect(() => {
    let categoryFilterString = "";
    if (subCategoryFilter?.length === 1) {
      categoryFilterString = `&subCategory=${subCategoryFilter.toString()}`;
    } else if (subCategoryFilter?.length > 1) {
      categoryFilterString =
        "&subCategory=" +
        subCategoryFilter.toString().split(",").join("&subCategory=");
    }
    dispatch(
      handleWorkStationCollectionPageCategoryFilter(categoryFilterString)
    );
  }, [subCategoryFilter, dispatch]);
  return (
    <div>
      {forWorkStationFilterData.map((data) => (
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

export default ForWorkStation;
