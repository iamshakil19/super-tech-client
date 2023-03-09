import React from "react";
import { forAllCollectionFilterData } from "../../../Utils/LocalData";

const ForAllCollection = () => {
  return (
    <div>
      {forAllCollectionFilterData.map((data) => (
        <div
          key={data.value}
          className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm"
        >
          <input
            type="checkbox"
            name=""
            value={""}
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
