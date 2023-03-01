import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import MultiRangeSlider from "multi-range-slider-react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useLocation } from "react-router-dom";

const ProductFilterSidebar = () => {
  const max = 5000;
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(max);
  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  const [categoryOpen, setCategoryOpen] = useState(true);
  const [subcategoryOpen, setSubCategoryOpen] = useState(true);

  const location = useLocation()
  console.log(location.pathname);
  return (
    <div className="">
      <div className="shadow-xl border border-gray-300 rounded-md p-3 bg-white">
        <div className="border-b border-gray-300 pb-3">
          <p className="font-semibold mb-2 poppins">Price Range</p>

          <p className="flex justify-between mb-5 text-sm font-semibold poppins">
            <span>BDT {minValue}</span> <span>BDT {maxValue}</span>
          </p>

          <MultiRangeSlider
            className="mb-2 mx-5"
            barInnerColor={"#000000"}
            ruler={false}
            label={false}
            min={0}
            max={max}
            step={1}
            minValue={minValue}
            maxValue={maxValue}
            onInput={(e) => {
              handleInput(e);
            }}
          />
        </div>

        {location.pathname === "/collections" && <div
          className={`border-b border-gray-300 pb-3 overflow-hidden ${
            categoryOpen ? "h-full" : "h-12"
          }`}
        >
          <p
            className={`font-semibold my-4 poppins cursor-pointer flex justify-between items-center border-b pb-2`}
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            Category {categoryOpen ? <GoChevronUp /> : <GoChevronDown />}{" "}
          </p>

          <div className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm">
            <input
              type="checkbox"
              name=""
              value={""}
              id="home"
              className="mr-3 checkbox checkbox-success checkbox-xs"
            />
            <label
              className="poppins cursor-pointer block w-full text-md font-medium"
              htmlFor="home"
            >
              Home
            </label>
          </div>
          <div className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm">
            <input
              type="checkbox"
              name=""
              value={""}
              id="table"
              className="mr-3 checkbox checkbox-success checkbox-xs"
            />
            <label
              className="poppins cursor-pointer block w-full text-md font-medium"
              htmlFor="table"
            >
              Table
            </label>
          </div>
          <div className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm">
            <input
              type="checkbox"
              name=""
              value={""}
              id="storage"
              className="mr-3 checkbox checkbox-success checkbox-xs"
            />
            <label
              className="poppins cursor-pointer block w-full text-md font-medium"
              htmlFor="storage"
            >
              Storage
            </label>
          </div>
          <div className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm">
            <input
              type="checkbox"
              name=""
              value={""}
              id="steelFurniture"
              className="mr-3 checkbox checkbox-success checkbox-xs"
            />
            <label
              className="poppins cursor-pointer block w-full text-md font-medium"
              htmlFor="steelFurniture"
            >
              Steel Furniture
            </label>
          </div>
          <div className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm">
            <input
              type="checkbox"
              name=""
              value={""}
              id="chair"
              className="mr-3 checkbox checkbox-success checkbox-xs"
            />
            <label
              className="poppins cursor-pointer block w-full text-md font-medium"
              htmlFor="chair"
            >
              Chair
            </label>
          </div>
          <div className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm">
            <input
              type="checkbox"
              name=""
              value={""}
              id="sofa"
              className="mr-3 checkbox checkbox-success checkbox-xs"
            />
            <label
              className="poppins cursor-pointer block w-full text-md font-medium"
              htmlFor="sofa"
            >
              Sofa
            </label>
          </div>
          <div className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm">
            <input
              type="checkbox"
              name=""
              value={""}
              id="workStation"
              className="mr-3 checkbox checkbox-success checkbox-xs"
            />
            <label
              className="poppins cursor-pointer block w-full text-md font-medium"
              htmlFor="workStation"
            >
              workStation
            </label>
          </div>
          <div className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm">
            <input
              type="checkbox"
              name=""
              value={""}
              id="garments"
              className="mr-3 checkbox checkbox-success checkbox-xs"
            />
            <label
              className="poppins cursor-pointer block w-full text-md font-medium"
              htmlFor="garments"
            >
              Garments
            </label>
          </div>
          <div className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm">
            <input
              type="checkbox"
              name=""
              value={""}
              id="interior"
              className="mr-3 checkbox checkbox-success checkbox-xs"
            />
            <label
              className="poppins cursor-pointer block w-full text-md font-medium"
              htmlFor="interior"
            >
              Interior
            </label>
          </div>

        </div>}

         <div
          className={`border-b border-gray-300 pb-3 overflow-hidden ${
            subcategoryOpen ? "h-full" : "h-12"
          }`}
        >
          <p
            className={`font-semibold my-4 poppins cursor-pointer flex justify-between items-center border-b pb-2`}
            onClick={() => setSubCategoryOpen(!subcategoryOpen)}
          >
            Sub Category {subcategoryOpen ? <GoChevronUp /> : <GoChevronDown />}{" "}
          </p>

          <div className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm">
            <input
              type="checkbox"
              name=""
              value={""}
              id="home"
              className="mr-3 checkbox checkbox-success checkbox-xs"
            />
            <label
              className="poppins cursor-pointer block w-full text-md font-medium"
              htmlFor="home"
            >
              Home
            </label>
          </div>
          <div className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm">
            <input
              type="checkbox"
              name=""
              value={""}
              id="table"
              className="mr-3 checkbox checkbox-success checkbox-xs"
            />
            <label
              className="poppins cursor-pointer block w-full text-md font-medium"
              htmlFor="table"
            >
              Table
            </label>
          </div>
          <div className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm">
            <input
              type="checkbox"
              name=""
              value={""}
              id="storage"
              className="mr-3 checkbox checkbox-success checkbox-xs"
            />
            <label
              className="poppins cursor-pointer block w-full text-md font-medium"
              htmlFor="storage"
            >
              Storage
            </label>
          </div>
          <div className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm">
            <input
              type="checkbox"
              name=""
              value={""}
              id="steelFurniture"
              className="mr-3 checkbox checkbox-success checkbox-xs"
            />
            <label
              className="poppins cursor-pointer block w-full text-md font-medium"
              htmlFor="steelFurniture"
            >
              Steel Furniture
            </label>
          </div>
          <div className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm">
            <input
              type="checkbox"
              name=""
              value={""}
              id="chair"
              className="mr-3 checkbox checkbox-success checkbox-xs"
            />
            <label
              className="poppins cursor-pointer block w-full text-md font-medium"
              htmlFor="chair"
            >
              Chair
            </label>
          </div>
          <div className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm">
            <input
              type="checkbox"
              name=""
              value={""}
              id="sofa"
              className="mr-3 checkbox checkbox-success checkbox-xs"
            />
            <label
              className="poppins cursor-pointer block w-full text-md font-medium"
              htmlFor="sofa"
            >
              Sofa
            </label>
          </div>
          <div className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm">
            <input
              type="checkbox"
              name=""
              value={""}
              id="workStation"
              className="mr-3 checkbox checkbox-success checkbox-xs"
            />
            <label
              className="poppins cursor-pointer block w-full text-md font-medium"
              htmlFor="workStation"
            >
              workStation
            </label>
          </div>
          <div className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm">
            <input
              type="checkbox"
              name=""
              value={""}
              id="garments"
              className="mr-3 checkbox checkbox-success checkbox-xs"
            />
            <label
              className="poppins cursor-pointer block w-full text-md font-medium"
              htmlFor="garments"
            >
              Garments
            </label>
          </div>
          <div className="flex items-center hover:bg-slate-100 px-2 py-1 mb-2 rounded-sm">
            <input
              type="checkbox"
              name=""
              value={""}
              id="interior"
              className="mr-3 checkbox checkbox-success checkbox-xs"
            />
            <label
              className="poppins cursor-pointer block w-full text-md font-medium"
              htmlFor="interior"
            >
              Interior
            </label>
          </div>

        </div>

        <div>
          <button className="bg-[#f9a51a] w-full poppins text-white py-1 rounded-sm mt-3 mb-1 shadow-lg">
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterSidebar;
