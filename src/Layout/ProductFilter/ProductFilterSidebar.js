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
import {
  handleSetMaxPriceToState,
  handleSetMinPriceToState,
} from "../../features/products/productsSlice";

const ProductFilterSidebar = () => {
  const location = useLocation();
  const [initialMaxValue, setInitialMaxValue] = useState(0);
  const {
    minPriceValue,
    maxPriceValue,
    collectionPageCategoryFilter,
    homeCollectionPageCategoryFilter,
    tableCollectionPageCategoryFilter,
    storageCollectionPageCategoryFilter,
    steelFurnitureCollectionPageCategoryFilter,
    chairCollectionPageCategoryFilter,
    sofaCollectionPageCategoryFilter,
    workStationCollectionPageCategoryFilter,
    garmentsCollectionPageCategoryFilter,
    interiorCollectionPageCategoryFilter,
  } = useSelector((state) => state.productsFilter);
  let queryString = ``;

  if (collectionPageCategoryFilter) {
    queryString += collectionPageCategoryFilter;
  }
  if (homeCollectionPageCategoryFilter) {
    queryString +=  homeCollectionPageCategoryFilter;
  }
  if (tableCollectionPageCategoryFilter) {
    queryString += tableCollectionPageCategoryFilter;
  }
  if (storageCollectionPageCategoryFilter) {
    queryString += storageCollectionPageCategoryFilter;
  }
  if (steelFurnitureCollectionPageCategoryFilter) {
    queryString += steelFurnitureCollectionPageCategoryFilter;
  }
  if (chairCollectionPageCategoryFilter) {
    queryString += chairCollectionPageCategoryFilter;
  }
  if (sofaCollectionPageCategoryFilter) {
    queryString += sofaCollectionPageCategoryFilter;
  }
  if (workStationCollectionPageCategoryFilter) {
    queryString += workStationCollectionPageCategoryFilter;
  }
  if (garmentsCollectionPageCategoryFilter) {
    queryString += garmentsCollectionPageCategoryFilter;
  }
  if (interiorCollectionPageCategoryFilter) {
    queryString += interiorCollectionPageCategoryFilter;
  }

  if (location.pathname === "/collections/home-furniture") {
    queryString = `category=home`;
  } else if (location.pathname === "/collections/home-furniture/bed") {
    queryString = `category=home&subCategory=bed`;
  } else if (
    location.pathname === "/collections/home-furniture/dressing-table"
  ) {
    queryString = `category=home&subCategory=dressingTable`;
  } else if (location.pathname === "/collections/home-furniture/cup-board") {
    queryString = `category=home&subCategory=cupBoard`;
  } else if (location.pathname === "/collections/home-furniture/wardrobe") {
    queryString = `category=home&subCategory=Wardrobe`;
  } else if (location.pathname === "/collections/home-furniture/tv-trolley") {
    queryString = `category=home&subCategory=tvTrolley`;
  } else if (location.pathname === "/collections/home-furniture/book-shelf") {
    queryString = `category=home&subCategory=bookShelf`;
  } else if (
    location.pathname === "/collections/home-furniture/showcase-corner-shelf"
  ) {
    queryString = `category=home&subCategory=showcaseCornerShelf`;
  } else if (location.pathname === "/collections/home-furniture/dinner-wagon") {
    queryString = `category=home&subCategory=dinnerWagon`;
  } else if (
    location.pathname === "/collections/home-furniture/dinning-table-chair"
  ) {
    queryString = `category=home&subCategory=dinningTableChair`;
  }

  if (location.pathname === "/collections/table") {
    queryString = `category=table`;
  } else if (location.pathname === "/collections/table/director-table") {
    queryString = `category=table&subCategory=directorTable`;
  } else if (location.pathname === "/collections/table/executive-table") {
    queryString = `category=table&subCategory=executiveTable`;
  } else if (location.pathname === "/collections/table/manager-table") {
    queryString = `category=table&subCategory=managerTable`;
  } else if (location.pathname === "/collections/table/computer-table") {
    queryString = `category=table&subCategory=computerTable`;
  }

  if (location.pathname === "/collections/storage") {
    queryString = `category=storage`;
  } else if (location.pathname === "/collections/storage/drawer") {
    queryString = `category=storage&subCategory=drawer`;
  } else if (location.pathname === "/collections/storage/side-cabinet") {
    queryString = `category=storage&subCategory=sideCabinet`;
  } else if (location.pathname === "/collections/storage/file-cabinet") {
    queryString = `category=storage&subCategory=fileCabinet`;
  } else if (location.pathname === "/collections/storage/multipurpose-shelf") {
    queryString = `category=storage&subCategory=multipurposeShelf`;
  } else if (location.pathname === "/collections/storage/shoe-rack") {
    queryString = `category=storage&subCategory=shoeRack`;
  }

  if (location.pathname === "/collections/steel-furniture") {
    queryString = `category=steelFurniture`;
  } else if (location.pathname === "/collections/steel-furniture/almirah") {
    queryString = `category=steelFurniture&subCategory=almirah`;
  } else if (location.pathname === "/collections/steel-furniture/four-drawer") {
    queryString = `category=steelFurniture&subCategory=4drawer`;
  } else if (
    location.pathname === "/collections/steel-furniture/three-drawer"
  ) {
    queryString = `category=steelFurniture&subCategory=3drawer`;
  } else if (
    location.pathname === "/collections/steel-furniture/drawer-cum-file-cabinet"
  ) {
    queryString = `category=steelFurniture&subCategory=drawerCumFileCabinet`;
  } else if (
    location.pathname === "/collections/steel-furniture/slotted-angle-rack"
  ) {
    queryString = `category=steelFurniture&subCategory=slottedAngleRack`;
  } else if (
    location.pathname === "/collections/steel-furniture/heavy-duty-rack"
  ) {
    queryString = `category=steelFurniture&subCategory=heavyDutyRack`;
  }

  if (location.pathname === "/collections/chair") {
    queryString = `category=chair`;
  } else if (location.pathname === "/collections/chair/high-back") {
    queryString = `category=chair&subCategory=highBack`;
  } else if (location.pathname === "/collections/chair/medium-back") {
    queryString = `category=chair&subCategory=mediumBack`;
  } else if (location.pathname === "/collections/chair/low-back") {
    queryString = `category=chair&subCategory=lowBack`;
  } else if (location.pathname === "/collections/chair/fixed-visitor") {
    queryString = `category=chair&subCategory=fixedVisitor`;
  } else if (location.pathname === "/collections/chair/tool") {
    queryString = `category=chair&subCategory=tool`;
  } else if (location.pathname === "/collections/chair/auditorium-chair") {
    queryString = `category=chair&subCategory=auditoriumChair`;
  } else if (location.pathname === "/collections/chair/group-chair") {
    queryString = `category=chair&subCategory=groupChair`;
  }

  if (location.pathname === "/collections/sofa") {
    queryString = `category=sofa`;
  } else if (location.pathname === "/collections/sofa/sofa") {
    queryString = `category=sofa&subCategory=sofa`;
  } else if (location.pathname === "/collections/sofa/center-table") {
    queryString = `category=sofa&subCategory=centerTable`;
  } else if (location.pathname === "/collections/sofa/divan") {
    queryString = `category=sofa&subCategory=divan`;
  }

  if (location.pathname === "/collections/work-station") {
    queryString = `category=workStation`;
  } else if (location.pathname === "/collections/work-station/fabric") {
    queryString = `category=workStation&subCategory=fabric`;
  } else if (location.pathname === "/collections/work-station/metal") {
    queryString = `category=workStation&subCategory=metal`;
  } else if (location.pathname === "/collections/work-station/others") {
    queryString = `category=workStation&subCategory=others`;
  }

  if (location.pathname === "/collections/garments") {
    queryString = `category=garments`;
  } else if (location.pathname === "/collections/garments/qc-table") {
    queryString = `category=garments&subCategory=qcTable`;
  } else if (
    location.pathname === "/collections/garments/center-cutting-packing-table"
  ) {
    queryString = `category=garments&subCategory=centerCuttingPackingTable`;
  } else if (
    location.pathname === "/collections/garments/input-loading-table"
  ) {
    queryString = `category=garments&subCategory=inputLoadingTable`;
  } else if (location.pathname === "/collections/garments/tagging-poly-table") {
    queryString = `category=garments&subCategory=taggingPolyTable`;
  } else if (
    location.pathname === "/collections/garments/cut-part-inspection-table"
  ) {
    queryString = `category=garments&subCategory=cutPartInspectionTable`;
  } else if (
    location.pathname ===
    "/collections/garments/fabric-relaxing-multi-level-rack"
  ) {
    queryString = `category=garments&subCategory=fabricRelaxingMultiLevelRack`;
  } else if (location.pathname === "/collections/garments/inspection-table") {
    queryString = `category=garments&subCategory=inspectionTable`;
  } else if (location.pathname === "/collections/garments/measurement-table") {
    queryString = `category=garments&subCategory=measurementTable`;
  } else if (location.pathname === "/collections/garments/iron-table") {
    queryString = `category=garments&subCategory=ironTable`;
  } else if (location.pathname === "/collections/garments/worker-chair") {
    queryString = `category=garments&subCategory=workerChair`;
  }

  if (location.pathname === "/collections/interior") {
    queryString = `category=interior`;
  } else if (location.pathname === "/collections/interior/living") {
    queryString = `category=interior&subCategory=living`;
  } else if (location.pathname === "/collections/interior/kitchen") {
    queryString = `category=interior&subCategory=kitchen`;
  } else if (location.pathname === "/collections/interior/office") {
    queryString = `category=interior&subCategory=office`;
  } else if (location.pathname === "/collections/interior/restaurant") {
    queryString = `category=interior&subCategory=restaurant`;
  } else if (location.pathname === "/collections/interior/others") {
    queryString = `category=interior&subCategory=others`;
  }
  const {
    data: allProducts,
    isLoading,
    isError,
    error,
  } = useGetAllProductsQuery(queryString);

  const dispatch = useDispatch();
  const { success, products, pageCount, totalProduct } =
    allProducts?.data || {};
    
  useEffect(() => {
    if (!isLoading && !isError && products.length > 0) {
      const prices = products?.map((object) => {
        return object.price;
      });
      const maxPrice = Math?.max(...prices);
      setInitialMaxValue(maxPrice);
    }
  }, [isLoading, isError, products, dispatch]);

  const handleInput = (e) => {
    dispatch(handleSetMinPriceToState(e.minValue));
    dispatch(handleSetMaxPriceToState(e.maxValue));
  };

  const [categoryOpen, setCategoryOpen] = useState(true);

  return (
    <div className="">
      <div className="shadow-xl border border-gray-300 rounded-md p-3 bg-white">
        <div className="border-b border-gray-300 pb-3 h-28">
          <p className="font-semibold mb-2 poppins">Price Range</p>

          {products?.length > 0 && (
            <>
              <p className="flex justify-between mb-5 text-sm font-semibold poppins">
                <span>BDT {minPriceValue}</span>{" "}
                <span>BDT {maxPriceValue}</span>
              </p>

              {isLoading && <p>Loading...</p>}
              {!isLoading && (
                <MultiRangeSlider
                  className="mb-2 mx-5"
                  barInnerColor={"#000000"}
                  ruler={false}
                  label={false}
                  min={0}
                  max={initialMaxValue}
                  step={1}
                  minValue={minPriceValue}
                  maxValue={initialMaxValue}
                  onInput={(e) => {
                    handleInput(e);
                  }}
                />
              )}
            </>
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
