import React, { useEffect, useRef } from "react";
import { FiFilter } from "react-icons/fi";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import ProductFilterSidebar from "./ProductFilterSidebar";
import Sheet from "react-modal-sheet";
import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { useGetAllProductsQuery } from "../../features/products/productsApi";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSetMaxPriceToState,
  handleSetMinPriceToState,
} from "../../features/products/productsSlice";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import ForAllCollection from "./ConditionalSidebar/ForAllCollection";
import ForTable from "./ConditionalSidebar/ForTable";
import ForHome from "./ConditionalSidebar/ForHome";
import ForStorage from "./ConditionalSidebar/ForStorage";
import ForSteelFurniture from "./ConditionalSidebar/ForSteelFurniture";
import ForChair from "./ConditionalSidebar/ForChair";
import ForSofa from "./ConditionalSidebar/ForSofa";
import ForWorkStation from "./ConditionalSidebar/ForWorkStation";
import ForGarments from "./ConditionalSidebar/ForGarments";
import ForInterior from "./ConditionalSidebar/ForInterior";
import { MdClose } from "react-icons/md";
import PageTitle from "../../Utils/PageTitle";

const ProductFilterLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(true);
  console.log(location.pathname);
  return (
    <div className="">
      <>
        {location.pathname === "/collections" && (
          <PageTitle
            title={"All Collection - Super Tech Furniture & Interior"}
          ></PageTitle>
        )}
        {location.pathname === "/collections/home-furniture" && (
          <PageTitle
            title={"Home Collection - Super Tech Furniture & Interior"}
          ></PageTitle>
        )}
        {location.pathname === "/collections/table" && (
          <PageTitle
            title={"Table Collection - Super Tech Furniture & Interior"}
          ></PageTitle>
        )}
        {location.pathname === "/collections/storage" && (
          <PageTitle
            title={"Storage Collection - Super Tech Furniture & Interior"}
          ></PageTitle>
        )}
        {location.pathname === "/collections/steel-furniture" && (
          <PageTitle
            title={
              "Steel Furniture Collection - Super Tech Furniture & Interior"
            }
          ></PageTitle>
        )}
        {location.pathname === "/collections/chair" && (
          <PageTitle
            title={"Chair Collection - Super Tech Furniture & Interior"}
          ></PageTitle>
        )}
        {location.pathname === "/collections/sofa" && (
          <PageTitle
            title={"Sofa Collection - Super Tech Furniture & Interior"}
          ></PageTitle>
        )}
        {location.pathname === "/collections/work-station" && (
          <PageTitle
            title={"Work Station Collection - Super Tech Furniture & Interior"}
          ></PageTitle>
        )}
        {location.pathname === "/collections/garments" && (
          <PageTitle
            title={"Garments Collection - Super Tech Furniture & Interior"}
          ></PageTitle>
        )}
        {location.pathname === "/collections/interior" && (
          <PageTitle
            title={"Interior Collection - Super Tech Furniture & Interior"}
          ></PageTitle>
        )}
      </>
      <Navbar />
      <div className="bg-[#F2F3F8] py-10">
        <div className="px-3 container mx-auto">
          <button
            onClick={() => setOpen(true)}
            className={`bg-[#f9a51a] font-poppins text-white py-1.5 px-4 text-md rounded-md shadow-md fixed bottom-5 left-[50%] -translate-x-2/4 z-10 flex items-center lg:hidden 
            }`}
          >
            <FiFilter className="font-bold mr-1" />
            Filter
          </button>

          <div className="flex">
            <section className="w-[350px] mr-3 hidden lg:block">
              <ProductFilterSidebar />
            </section>
            <section className="">
              <Sheet isOpen={open} onClose={() => setOpen(false)}>
                <Sheet.Container>
                  <Sheet.Header />
                  <Sheet.Content>
                    <div className="px-5">
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
                            Category{" "}
                            {categoryOpen ? <GoChevronUp /> : <GoChevronDown />}{" "}
                          </p>
                          {location.pathname === "/collections" && (
                            <ForAllCollection />
                          )}
                          {location.pathname ===
                            "/collections/home-furniture" && <ForHome />}
                          {location.pathname === "/collections/table" && (
                            <ForTable />
                          )}
                          {location.pathname === "/collections/storage" && (
                            <ForStorage />
                          )}
                          {location.pathname ===
                            "/collections/steel-furniture" && (
                            <ForSteelFurniture />
                          )}
                          {location.pathname === "/collections/chair" && (
                            <ForChair />
                          )}
                          {location.pathname === "/collections/sofa" && (
                            <ForSofa />
                          )}
                          {location.pathname ===
                            "/collections/work-station" && <ForWorkStation />}
                          {location.pathname === "/collections/garments" && (
                            <ForGarments />
                          )}
                          {location.pathname === "/collections/interior" && (
                            <ForInterior />
                          )}
                        </div>
                      )}
                    </div>
                  </Sheet.Content>
                </Sheet.Container>

                <Sheet.Backdrop />
              </Sheet>
            </section>
            <section className="w-full mx-auto">
              <Outlet />
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductFilterLayout;
