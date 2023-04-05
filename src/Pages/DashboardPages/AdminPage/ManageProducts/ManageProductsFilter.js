import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleProductCategory,
  handleProductLimit,
  handleProductSort,
  handleProductSubCategory,
} from "../../../../features/products/productsSlice";
import { categories, subCategories } from "../../../../Utils/LocalData";

const ManageProductsFilter = () => {
  const dispatch = useDispatch();
  const { limit, sort, category, subCategory } = useSelector(
    (state) => state.productsFilter
  );
  const [selectedCategory, setSelectedCategory] = useState("");

  const subCategoryFilter = subCategories?.filter(
    (subCategory) =>
      Number(subCategory.id) === Number(selectedCategory.split(",")[0])
  );
  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    if (selectedCategory) {
      dispatch(handleProductCategory(selectedCategory.split(",")[1]));
    } else {
      dispatch(handleProductCategory(""));
    }
  }, [dispatch, selectedCategory]);

  return (
    <div className="my-5 sm:flex justify-between items-center gap-3 poppins">
      <div className="flex items-center gap-5">
        <div className=" mb-5 sm:mb-0 flex items-center">
          <p className="hidden xl:block mr-2">Category :</p>
          <select
            onChange={handleCategory}
            defaultValue={category}
            className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-32 xl:w-40 border-slate-300 capitalize"
          >
            <option className="font-medium text-md capitalize" value="">
              Default
            </option>
            {categories.map((category) => (
              <option
                key={category.id}
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
            onChange={(e) => dispatch(handleProductSubCategory(e.target.value))}
            defaultValue={subCategory}
            className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-32 xl:w-40 border-slate-300"
          >
            <option className="font-medium text-md" value="">
              Default
            </option>
            {subCategoryFilter.map((subCategory) => (
              <option
                key={subCategory.id}
                value={subCategory.value}
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
            onChange={(e) => dispatch(handleProductSort(e.target.value))}
            defaultValue={sort}
            className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-32 xl:w-40 border-slate-300"
          >
            <option className="font-medium text-md" value="-createdAt">
              Default
            </option>
            <option className=" font-medium text-md" value="createdAt">
              Date (Old → New)
            </option>
            <option className=" font-medium text-md" value="price">
              Price (Low → High)
            </option>
            <option className=" font-medium text-md" value="-price">
              Price (High → Low)
            </option>
            <option className=" font-medium text-md" value="name">
              Alphabetically (A → Z)
            </option>
            <option className=" font-medium text-md" value="-name">
              Alphabetically (Z → A)
            </option>
            <option className=" font-medium text-md" value="views">
              Views (Low → High)
            </option>
            <option className=" font-medium text-md" value="-views">
              Views (High → Low)
            </option>
          </select>
        </div>
        <div className="flex items-center">
          <p className="hidden xl:block mr-2">Show :</p>
          <select
            onChange={(e) => dispatch(handleProductLimit(e.target.value))}
            defaultValue={limit}
            className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-32 xl:w-40 border-slate-300"
          >
            <option className="font-medium" value="10">
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
