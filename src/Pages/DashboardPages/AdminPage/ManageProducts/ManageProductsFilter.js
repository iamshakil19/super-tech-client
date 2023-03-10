import React, { useState } from "react";
import { categories, subCategories } from "../../../../Utils/LocalData";

const ManageProductsFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortby] = useState("");
  const [filter, setFilter] = useState("");

  const subCategoryFilter = subCategories?.filter(
    (subCategory) =>
      Number(subCategory.id) === Number(selectedCategory.split(",")[0])
  );

  return (
    <div className="my-5 sm:flex justify-between items-center gap-3 poppins">
      <div className="flex items-center gap-5">
        <div className=" mb-5 sm:mb-0 flex items-center">
          <p className="hidden xl:block mr-2">Category :</p>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            defaultValue={filter}
            className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-32 xl:w-40 border-slate-300 capitalize"
          >
            <option
              selected
              className="font-medium text-md capitalize"
              value=""
            >
              Default
            </option>
            {categories.map((category) => (
              <option
                value={[category.id, category.value]}
                className="capitalize font-medium text-md"
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className=" mb-5 sm:mb-0 flex items-center">
          <p className="hidden xl:block mr-2">Sub Category :</p>
          <select
            onChange={(e) => setFilter(e.target.value)}
            defaultValue={filter}
            className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-32 xl:w-40 border-slate-300"
          >
            <option selected className="font-medium text-md" value="">
              Default
            </option>
            {subCategoryFilter.map((subCategory) => (
              <option
                value={[subCategory.id, subCategory.value]}
                className="capitalize font-medium text-md"
              >
                {subCategory.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="sm:ml-5 sm:mt-0 flex items-center">
          <p className="hidden xl:block mr-2">Sort By :</p>
          <select
            onChange={(e) => setSortby(e.target.value)}
            defaultValue={sortBy}
            className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-32 xl:w-40 border-slate-300"
          >
            <option selected className="font-medium text-md" value="">
              Default
            </option>
            <option className=" font-medium text-md" value="dateOldToNew">
              Date (Old → New)
            </option>
            <option className=" font-medium text-md" value="priceHighToLow">
              Price (High → Low)
            </option>
            <option className=" font-medium text-md" value="priceLowToHigh">
              Price (Low → High)
            </option>
            <option className=" font-medium text-md" value="quantityHighToLow">
              Quantity (High → Low)
            </option>
            <option className=" font-medium text-md" value="quantityLowToHigh">
              Quantity (Low → High)
            </option>
          </select>
        </div>
        <div className="flex items-center">
          <p className="hidden xl:block mr-2">Show :</p>
          <select
            onChange={(e) => setLimit(e.target.value)}
            defaultValue={limit}
            className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-32 xl:w-40 border-slate-300"
          >
            <option selected className="font-medium" value="10">
              10
            </option>
            <option className="font-medium" value="15">
              15
            </option>
            <option className="font-medium" value="25">
              25
            </option>
            <option className="font-medium" value="50">
              50
            </option>
            <option className="font-medium" value="100">
              100
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ManageProductsFilter;
