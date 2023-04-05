import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  handleDeleteProductModal,
  handleUpdateProductModal,
} from "../../../../features/products/productsSlice";

const ManageProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { _id, name, primaryImage, price, category, subCategory } = product;
  const finalPrimaryImage = process.env.REACT_APP_IMG_URL + primaryImage;
  return (
    <div className="bg-white max-w-xs w-full xl:min-w-full p-3 mx-auto xl:mx-0 rounded-md shadow-md shadow-gray-300 xl:flex justify-between gap-5">
      <div className="flex flex-col xl:flex-row justify-between h-full gap-5">
        <section className="flex items-center overflow-hidden">
          <img
            onClick={() => navigate(`/product-details/${_id}`)}
            className=" w-full xl:w-32 xl:h-32 object-cover h-60 rounded-md cursor-pointer"
            src={finalPrimaryImage}
            alt=""
          />
        </section>
        <section>
          <div>
            <h2
              onClick={() => navigate(`/product-details/${_id}`)}
              className="my-3 xl:mt-0 font-semibold text-lg capitalize max-w-sm whitespace-pre-wrap cursor-pointer"
            >
              {name}
            </h2>
            <div className="flex xl:flex-col items-center xl:items-start justify-between xl:justify-around">
              <p className="flex items-center font-semibold text-red-500">
                {" "}
                ৳ {price}
              </p>
              <p className="capitalize inline-block bg-slate-700 xl:bg-emerald-500 px-2 py-0.5 text-white rounded-full text-sm shadow-md shadow-gray-300 xl:mt-3">
                {category === "home" && "home"}
                {category === "table" && "table"}
                {category === "storage" && "storage"}
                {category === "steelFurniture" && "steel furniture"}
                {category === "chair" && "chair"}
                {category === "sofa" && "sofa"}
                {category === "workStation" && "work station"}
                {category === "garments" && "garments"}
                {category === "interior" && "interior"}
              </p>
              <p className="capitalize bg-slate-700 px-2 py-0.5 text-white rounded-full text-xs shadow-md shadow-gray-300 xl:mt-3 hidden xl:block">
                {subCategory === "bed" && "bed"}
                {subCategory === "dressingTable" && "dressing table"}
                {subCategory === "cupBoard" && "cup board"}
                {subCategory === "Wardrobe" && "Wardrobe"}
                {subCategory === "tvTrolley" && "TV Trolley"}
                {subCategory === "bookShelf" && "book Shelf"}
                {subCategory === "showcaseCornerShelf" &&
                  "Showcase & Corner Shelf"}
                {subCategory === "dinnerWagon" && "dinner wagon"}
                {subCategory === "dinningTableChair" && "Dinning Table & Chair"}
                {subCategory === "directorTable" && "director Table"}
                {subCategory === "executiveTable" && "executive Table"}
                {subCategory === "managerTable" && "manager Table"}
                {subCategory === "computerTable" && "computer Table"}
                {subCategory === "drawer" && "drawer"}
                {subCategory === "sideCabinet" && "side Cabinet"}
                {subCategory === "fileCabinet" && "file Cabinet"}
                {subCategory === "multipurposeShelf" && "multipurpose Shelf"}
                {subCategory === "shoeRack" && "shoe Rack"}
                {subCategory === "almirah" && "almirah"}
                {subCategory === "4drawer" && "4 drawer"}
                {subCategory === "3drawer" && "3 drawer"}
                {subCategory === "drawerCumFileCabinet" &&
                  "drawer Cum File Cabinet"}
                {subCategory === "slottedAngleRack" && "slotted Angle Rack"}
                {subCategory === "heavyDutyRack" && "heavy Duty Rack"}
                {subCategory === "highBack" && "high Back"}
                {subCategory === "mediumBack" && "medium Back"}
                {subCategory === "lowBack" && "low Back"}
                {subCategory === "fixedVisitor" && "fixed Visitor"}
                {subCategory === "tool" && "tool"}
                {subCategory === "auditoriumChair" && "auditorium Chair"}
                {subCategory === "groupChair" && "group Chair"}
                {subCategory === "sofa" && "sofa"}
                {subCategory === "centerTable" && "center Table"}
                {subCategory === "divan" && "divan"}
                {subCategory === "fabric" && "fabric"}
                {subCategory === "metal" && "metal"}
                {subCategory === "others" && "others"}
                {subCategory === "qcTable" && "QC Table"}
                {subCategory === "centerCuttingPackingTable" &&
                  "center / Cutting / Packing / Table"}
                {subCategory === "inputLoadingTable" && "input / Loading Table"}
                {subCategory === "taggingPolyTable" && "tagging Poly Table"}
                {subCategory === "cutPartInspectionTable" &&
                  "cut Part Inspection Table"}
                {subCategory === "fabricRelaxingMultiLevelRack" &&
                  "fabric Relaxing Multi Level Rack"}
                {subCategory === "inspectionTable" && "inspection Table"}
                {subCategory === "measurementTable" && "measurement Table"}
                {subCategory === "ironTable" && "iron Table"}
                {subCategory === "workerChair" && "worker Chair"}
                {subCategory === "living" && "living"}
                {subCategory === "kitchen" && "kitchen"}
                {subCategory === "office" && "office"}
                {subCategory === "restaurant" && "restaurant"}
                {subCategory === "others" && "others"}
              </p>
            </div>
            <div className="flex xl:hidden items-center gap-5 mt-5 mb-2">
              <button
                onClick={() =>
                  dispatch(handleDeleteProductModal({ isOpen: true, _id: _id }))
                }
                className="bg-red-500 text-white w-full px-3 py-1.5 rounded-full font-medium shadow-lg shadow-gray-300 hover:shadow-none"
              >
                Delete
              </button>
              <button
                onClick={() =>
                  navigate(`/dashboard/update-product/${{ id: _id }}`)
                }
                className="bg-slate-600 text-white w-full px-3 py-1.5 rounded-full font-medium shadow-lg shadow-gray-300 hover:shadow-none"
              >
                Update
              </button>
            </div>
          </div>
        </section>
      </div>

      <section className="hidden xl:flex flex-col justify-between">
        <label
          onClick={() => navigate(`/dashboard/update-product/${_id}`)}
          htmlFor=""
          className=" w-8 h-8 text-center bg-indigo-200 text-xl text-indigo-800 border border-indigo-300 rounded-md cursor-pointer flex justify-center items-center hover:bg-indigo-500 hover:text-white hover:border-indigo-600 transition-all ease-in-out duration-200"
        >
          <span className="">
            <MdEdit />
          </span>
        </label>
        <label
          onClick={() =>
            dispatch(handleDeleteProductModal({ isOpen: true, _id: _id }))
          }
          htmlFor=""
          className=" w-8 h-8 text-center bg-red-200 text-xl text-red-500 border border-red-300 rounded-md cursor-pointer flex justify-center items-center hover:bg-red-500 hover:text-white hover:border-red-600 transition-all ease-in-out duration-200"
        >
          <span className="">
            <MdDelete />
          </span>
        </label>
      </section>
    </div>
  );
};

export default ManageProductCard;
