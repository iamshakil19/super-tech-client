import React, { useEffect, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useLocation } from "react-router-dom";
import ForAllCollection from "./ConditionalSidebar/ForAllCollection";
import ForHome from "./ConditionalSidebar/ForHome";
import ForTable from "./ConditionalSidebar/ForTable";
import ForStorage from "./ConditionalSidebar/ForStorage";
import ForSteelFurniture from "./ConditionalSidebar/ForSteelFurniture";
import ForChair from "./ConditionalSidebar/ForChair";
import ForSofa from "./ConditionalSidebar/ForSofa";
import ForWorkStation from "./ConditionalSidebar/ForWorkStation";
import ForGarments from "./ConditionalSidebar/ForGarments";
import ForInterior from "./ConditionalSidebar/ForInterior";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../../features/products/productsApi";
import { handleSetMaxPriceToState } from "../../features/products/productsSlice";

const ProductFilterSidebar = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const { minPriceValue, maxPriceValue } = useSelector(
    (state) => state.productsFilter
  );
  console.log(maxPriceValue);


  const {
    data: allProducts,
    isLoading,
    isError,
    error,
  } = useGetAllProductsQuery({ minPriceValue, maxPriceValue });

  // const [max, setMaxPriceValue] = useState();
  const dispatch = useDispatch();
  const { success, products, pageCount, totalProduct } =
    allProducts?.data || {};

  useEffect(() => {
    if (!isLoading && !isError && products.length > 0) {
      const prices = products?.map((object) => {
        return object.price;
      });
      const maxPrice = Math?.max(...prices);
      dispatch(handleSetMaxPriceToState(maxPrice));
    }
  }, [isLoading, isError, products, dispatch]);

  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  const [categoryOpen, setCategoryOpen] = useState(true);
  // const [subcategoryOpen, setSubCategoryOpen] = useState(true);

  const location = useLocation();
  return (
    <div className="">
      <div className="shadow-xl border border-gray-300 rounded-md p-3 bg-white">
        <div className="border-b border-gray-300 pb-3">
          <p className="font-semibold mb-2 poppins">Price Range</p>

          <p className="flex justify-between mb-5 text-sm font-semibold poppins">
            <span>BDT {minValue}</span> <span>BDT {maxValue}</span>
          </p>

          {isLoading && <p>Loading...</p>}
          {!isLoading && (
            <MultiRangeSlider
              className="mb-2 mx-5"
              barInnerColor={"#000000"}
              ruler={false}
              label={false}
              min={0}
              max={maxPriceValue}
              step={1}
              minValue={minValue}
              maxValue={maxPriceValue}
              onInput={(e) => {
                handleInput(e);
              }}
            />
          )}
        </div>

        {(location.pathname === "/collections" ||
          location.pathname === "/collections/home-furniture" ||
          location.pathname === "/collections/table" ||
          location.pathname === "/collections/storage" ||
          location.pathname === "/collections/steel-furniture" ||
          location.pathname === "/collections/chair" ||
          location.pathname === "/collections/sofa" ||
          location.pathname === "/collections/work-station" ||
          location.pathname === "/collections/garments" ||
          location.pathname === "/collections/interior") && (
          <div
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
            {location.pathname === "/collections" && <ForAllCollection />}
            {location.pathname === "/collections/home-furniture" && <ForHome />}
            {location.pathname === "/collections/table" && <ForTable />}
            {location.pathname === "/collections/storage" && <ForStorage />}
            {location.pathname === "/collections/steel-furniture" && (
              <ForSteelFurniture />
            )}
            {location.pathname === "/collections/chair" && <ForChair />}
            {location.pathname === "/collections/sofa" && <ForSofa />}
            {location.pathname === "/collections/work-station" && (
              <ForWorkStation />
            )}
            {location.pathname === "/collections/garments" && <ForGarments />}
            {location.pathname === "/collections/interior" && <ForInterior />}
          </div>
        )}
        <div>
          <button className="bg-black w-full poppins text-white py-1 rounded-sm mt-3 mb-1 shadow-lg">
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterSidebar;
