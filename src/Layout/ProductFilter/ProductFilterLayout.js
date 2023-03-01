import React, { useEffect } from "react";
import { FiFilter } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import ProductFilterSidebar from "./ProductFilterSidebar";
const ProductFilterLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Navbar />
      <div className="bg-[#F2F3F8] py-10">
        <div className="px-3 container mx-auto">
          <button className="bg-[#f9a51a] font-poppins text-white py-1.5 px-4 text-md rounded-md shadow-md fixed bottom-5 left-[50%] -translate-x-2/4 z-10 flex items-center lg:hidden">
            <FiFilter className="font-bold mr-1" />
            Filter
          </button>

          <div className="flex">
            <section className="w-[350px] mr-3 hidden lg:block">
              <ProductFilterSidebar />
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
