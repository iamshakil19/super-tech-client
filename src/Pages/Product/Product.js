import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProductCard from "../../Components/ProductCard";
import { useGetAllProductsQuery } from "../../features/products/productsApi";
import {
  handleProductLimit,
  handleProductPage,
  handleProductSort,
} from "../../features/products/productsSlice";
import Error from "../Shared/Error/Error";
import Loading from "../Shared/Loading/Loading";
import { motion } from "framer-motion";

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();

  const {
    page,
    sort,
    limit,
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

  let queryString = `page=${page}&limit=${limit}&sort=${sort}`;

  if (collectionPageCategoryFilter) {
    queryString += collectionPageCategoryFilter;
  }
  if (homeCollectionPageCategoryFilter) {
    queryString += homeCollectionPageCategoryFilter;
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

  if (minPriceValue > 0) {
    queryString += `&price[gte]=${minPriceValue}`;
  }
  if (maxPriceValue) {
    queryString += `&price[lte]=${maxPriceValue}`;
  }

  if (location.pathname === "/collections/home-furniture") {
    queryString += `&category=home`;
  } else if (location.pathname === "/collections/home-furniture/bed") {
    queryString += `&category=home&subCategory=bed`;
  } else if (
    location.pathname === "/collections/home-furniture/dressing-table"
  ) {
    queryString += `&category=home&subCategory=dressingTable`;
  } else if (location.pathname === "/collections/home-furniture/cup-board") {
    queryString += `&category=home&subCategory=cupBoard`;
  } else if (location.pathname === "/collections/home-furniture/wardrobe") {
    queryString += `&category=home&subCategory=Wardrobe`;
  } else if (location.pathname === "/collections/home-furniture/tv-trolley") {
    queryString += `&category=home&subCategory=tvTrolley`;
  } else if (location.pathname === "/collections/home-furniture/book-shelf") {
    queryString += `&category=home&subCategory=bookShelf`;
  } else if (
    location.pathname === "/collections/home-furniture/showcase-corner-shelf"
  ) {
    queryString += `&category=home&subCategory=showcaseCornerShelf`;
  } else if (location.pathname === "/collections/home-furniture/dinner-wagon") {
    queryString += `&category=home&subCategory=dinnerWagon`;
  } else if (
    location.pathname === "/collections/home-furniture/dinning-table-chair"
  ) {
    queryString += `&category=home&subCategory=dinningTableChair`;
  }

  if (location.pathname === "/collections/table") {
    queryString += `&category=table`;
  } else if (location.pathname === "/collections/table/director-table") {
    queryString += `&category=table&subCategory=directorTable`;
  } else if (location.pathname === "/collections/table/executive-table") {
    queryString += `&category=table&subCategory=executiveTable`;
  } else if (location.pathname === "/collections/table/manager-table") {
    queryString += `&category=table&subCategory=managerTable`;
  } else if (location.pathname === "/collections/table/computer-table") {
    queryString += `&category=table&subCategory=computerTable`;
  }

  if (location.pathname === "/collections/storage") {
    queryString += `&category=storage`;
  } else if (location.pathname === "/collections/storage/drawer") {
    queryString += `&category=storage&subCategory=drawer`;
  } else if (location.pathname === "/collections/storage/side-cabinet") {
    queryString += `&category=storage&subCategory=sideCabinet`;
  } else if (location.pathname === "/collections/storage/file-cabinet") {
    queryString += `&category=storage&subCategory=fileCabinet`;
  } else if (location.pathname === "/collections/storage/multipurpose-shelf") {
    queryString += `&category=storage&subCategory=multipurposeShelf`;
  } else if (location.pathname === "/collections/storage/shoe-rack") {
    queryString += `&category=storage&subCategory=shoeRack`;
  }

  if (location.pathname === "/collections/steel-furniture") {
    queryString += `&category=steelFurniture`;
  } else if (location.pathname === "/collections/steel-furniture/almirah") {
    queryString += `&category=steelFurniture&subCategory=almirah`;
  } else if (location.pathname === "/collections/steel-furniture/four-drawer") {
    queryString += `&category=steelFurniture&subCategory=4drawer`;
  } else if (
    location.pathname === "/collections/steel-furniture/three-drawer"
  ) {
    queryString += `&category=steelFurniture&subCategory=3drawer`;
  } else if (
    location.pathname === "/collections/steel-furniture/drawer-cum-file-cabinet"
  ) {
    queryString += `&category=steelFurniture&subCategory=drawerCumFileCabinet`;
  } else if (
    location.pathname === "/collections/steel-furniture/slotted-angle-rack"
  ) {
    queryString += `&category=steelFurniture&subCategory=slottedAngleRack`;
  } else if (
    location.pathname === "/collections/steel-furniture/heavy-duty-rack"
  ) {
    queryString += `&category=steelFurniture&subCategory=heavyDutyRack`;
  }

  if (location.pathname === "/collections/chair") {
    queryString += `&category=chair`;
  } else if (location.pathname === "/collections/chair/high-back") {
    queryString += `&category=chair&subCategory=highBack`;
  } else if (location.pathname === "/collections/chair/medium-back") {
    queryString += `&category=chair&subCategory=mediumBack`;
  } else if (location.pathname === "/collections/chair/low-back") {
    queryString += `&category=chair&subCategory=lowBack`;
  } else if (location.pathname === "/collections/chair/fixed-visitor") {
    queryString += `&category=chair&subCategory=fixedVisitor`;
  } else if (location.pathname === "/collections/chair/tool") {
    queryString += `&category=chair&subCategory=tool`;
  } else if (location.pathname === "/collections/chair/auditorium-chair") {
    queryString += `&category=chair&subCategory=auditoriumChair`;
  } else if (location.pathname === "/collections/chair/group-chair") {
    queryString += `&category=chair&subCategory=groupChair`;
  }

  if (location.pathname === "/collections/sofa") {
    queryString += `&category=sofa`;
  } else if (location.pathname === "/collections/sofa/sofa") {
    queryString += `&category=sofa&subCategory=sofa`;
  } else if (location.pathname === "/collections/sofa/center-table") {
    queryString += `&category=sofa&subCategory=centerTable`;
  } else if (location.pathname === "/collections/sofa/divan") {
    queryString += `&category=sofa&subCategory=divan`;
  }

  if (location.pathname === "/collections/work-station") {
    queryString += `&category=workStation`;
  } else if (location.pathname === "/collections/work-station/fabric") {
    queryString += `&category=workStation&subCategory=fabric`;
  } else if (location.pathname === "/collections/work-station/metal") {
    queryString += `&category=workStation&subCategory=metal`;
  } else if (location.pathname === "/collections/work-station/others") {
    queryString += `&category=workStation&subCategory=others`;
  }

  if (location.pathname === "/collections/garments") {
    queryString += `&category=garments`;
  } else if (location.pathname === "/collections/garments/qc-table") {
    queryString += `&category=garments&subCategory=qcTable`;
  } else if (
    location.pathname === "/collections/garments/center-cutting-packing-table"
  ) {
    queryString += `&category=garments&subCategory=centerCuttingPackingTable`;
  } else if (
    location.pathname === "/collections/garments/input-loading-table"
  ) {
    queryString += `&category=garments&subCategory=inputLoadingTable`;
  } else if (location.pathname === "/collections/garments/tagging-poly-table") {
    queryString += `&category=garments&subCategory=taggingPolyTable`;
  } else if (
    location.pathname === "/collections/garments/cut-part-inspection-table"
  ) {
    queryString += `&category=garments&subCategory=cutPartInspectionTable`;
  } else if (
    location.pathname ===
    "/collections/garments/fabric-relaxing-multi-level-rack"
  ) {
    queryString += `&category=garments&subCategory=fabricRelaxingMultiLevelRack`;
  } else if (location.pathname === "/collections/garments/inspection-table") {
    queryString += `&category=garments&subCategory=inspectionTable`;
  } else if (location.pathname === "/collections/garments/measurement-table") {
    queryString += `&category=garments&subCategory=measurementTable`;
  } else if (location.pathname === "/collections/garments/iron-table") {
    queryString += `&category=garments&subCategory=ironTable`;
  } else if (location.pathname === "/collections/garments/worker-chair") {
    queryString += `&category=garments&subCategory=workerChair`;
  }

  if (location.pathname === "/collections/interior") {
    queryString += `&category=interior`;
  } else if (location.pathname === "/collections/interior/living") {
    queryString += `&category=interior&subCategory=living`;
  } else if (location.pathname === "/collections/interior/kitchen") {
    queryString += `&category=interior&subCategory=kitchen`;
  } else if (location.pathname === "/collections/interior/office") {
    queryString += `&category=interior&subCategory=office`;
  } else if (location.pathname === "/collections/interior/restaurant") {
    queryString += `&category=interior&subCategory=restaurant`;
  } else if (location.pathname === "/collections/interior/others") {
    queryString += `&category=interior&subCategory=others`;
  }

  const dispatch = useDispatch();
  const {
    data: allProducts,
    isLoading,
    isError,
    error,
  } = useGetAllProductsQuery(queryString);

  const { data } = allProducts || {};
  const handlePageClick = (event) => {
    dispatch(handleProductPage(event.selected + 1));
  };

  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message={error?.data?.message} />;
  } else if (!isLoading && !isError && data?.products?.length === 0) {
    content = (
      <div className="text-center font-semibold text-lg poppins">
        Oops! No products found
      </div>
    );
  } else if (!isLoading && !isError && data?.products?.length > 0) {
    content = (
      <>
        <div className="mb-5 flex justify-end items-center gap-3">
          <div className="block sm:ml-5 sm:mt-0">
            <select
              onChange={(e) => dispatch(handleProductSort(e.target.value))}
              defaultValue={sort}
              className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-32 border-slate-300"
            >
              <option
                selected
                className="font-medium text-md"
                value="-createdAt"
              >
                Default
              </option>
              <option className=" font-medium text-md" value="price">
                Price (Low → High)
              </option>
              <option className=" font-medium text-md" value="-price">
                Price (High → Low)
              </option>
              <option className=" font-medium text-md" value="views">
                Popular (Low → High)
              </option>
              <option className=" font-medium text-md" value="-views">
                Popular (High → Low)
              </option>
              <option className=" font-medium text-md" value="name">
                Alphabetically (A → Z)
              </option>
              <option className=" font-medium text-md" value="-name">
                Alphabetically (Z → A)
              </option>
              <option className=" font-medium text-md" value="updatedAt">
                Date (Old → New)
              </option>
              <option className=" font-medium text-md" value="-updatedAt">
                Date (New → Old)
              </option>
            </select>
          </div>
          <div className="block">
            <select
              onChange={(e) => dispatch(handleProductLimit(e.target.value))}
              defaultValue={limit}
              className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-28 border-slate-300"
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {data?.products?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
        <div className="my-10">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="flex justify-end gap-2"
            pageLinkClassName="py-1.5 px-4 font-medium hover:bg-slate-800 hover:text-white"
            previousLinkClassName="py-1.5 px-4 font-medium hover:bg-slate-800 bg-slate-300 hover:text-white"
            nextLinkClassName="py-1.5 px-4 font-medium hover:bg-slate-800  bg-slate-300 hover:text-white"
            activeLinkClassName="bg-slate-800 text-white"
          />
        </div>
      </>
    );
  }

  return <div className="">{content}</div>;
};

export default Product;
