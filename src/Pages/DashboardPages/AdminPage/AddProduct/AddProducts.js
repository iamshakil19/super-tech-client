import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { categories, subCategories } from "../../../../Utils/LocalData";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdCloudUpload } from "react-icons/io";
const product = {
  _id: 1,
  name: "GRID Newon Chair",
  colors: [
    { id: 1, color: "black", extraPrice: 0 },
    { id: 2, color: "red", extraPrice: 400 },
    { id: 3, color: "gold", extraPrice: 900 },
  ],
  sizes: [
    { id: 1, size: "Compact : 36”W x 24”D x 30”H", extraPrice: 0 },
    { id: 2, size: "Regular : 48”W x 24”D x 30”H", extraPrice: 2500 },
    { id: 3, size: "Executive : 60”W x 24”D x 30”H", extraPrice: 4000 },
    { id: 4, size: 'Extended : 7"W x 24”D x 30”H', extraPrice: 5000 },
  ],
  price: "1000",
  primaryImage:
    "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  image2:
    "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
};

const AddProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm();

  const {
    fields: colorFields,
    append: colorAppend,
    remove: colorRemove,
  } = useFieldArray({ control, name: "colors" });
  const {
    fields: sizeFields,
    append: sizeAppend,
    remove: sizeRemove,
  } = useFieldArray({ control, name: "sizes" });

  const onSubmit = (data) => {
    const category = data?.category.split(",")[1];
    const finalData = { ...data, category };
    console.log(finalData);
  };

  const subCategoryFilter = subCategories?.filter(
    (subCategory) =>
      Number(subCategory.id) === Number(selectedCategory.split(",")[0])
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <div className="flex justify-center items-center overflow-auto p-10 poppins">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-200 shadow-lg p-10 rounded-2xl max-w-3xl "
        >
          <h2 className=" text-2xl font-semibold mb-5 font-serif">
            Add New Product
          </h2>
          <div className="flex flex-wrap gap-3 justify-between">
            <div className="flex flex-col w-full max-w-xs">
              <label className=" font-serif mb-2 text-lg" htmlFor="name">
                Product Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Type Product Name"
                className={`border block outline-none py-2 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
                  errors.name
                    ? " border-red-500 focus:border-red-500"
                    : "focus:border-slate-700 border-slate-300"
                }`}
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              {errors.name && (
                <span className="label-text-alt text-red-500 text-sm ">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="flex flex-col w-full max-w-xs">
              <label className=" font-serif mb-2 text-lg" htmlFor="price">
                Price
              </label>
              <input
                id="price"
                type="number"
                placeholder="Type Product Price"
                className={`border block outline-none py-2 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
                  errors.price
                    ? " border-red-500 focus:border-red-500"
                    : "focus:border-slate-700 border-slate-300"
                }`}
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is required",
                  },
                  min: {
                    value: 0,
                    message: "Price can't be negative",
                  },
                })}
              />
              {errors.price && (
                <span className="label-text-alt text-red-500 text-sm ">
                  {errors.price.message}
                </span>
              )}
            </div>

            <div className="flex flex-col w-full max-w-xs">
              <label className=" font-serif mb-2 text-lg" htmlFor="category">
                Product Category
              </label>
              <select
                defaultValue={selectedCategory}
                id="category"
                type="text"
                placeholder="Type Product Name"
                className={`border capitalize cursor-pointer block outline-none py-2 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
                  errors.category
                    ? " border-red-500 focus:border-red-500"
                    : "focus:border-slate-700 border-slate-300"
                }`}
                {...register("category", {
                  required: {
                    value: true,
                    message: "Category is required",
                  },
                  onChange: (e) => setSelectedCategory(e.target.value),
                })}
              >
                <option className="" disabled selected value={""}>
                  Select Category
                </option>
                {categories.map((category) => (
                  <option
                    value={[category.id, category.value]}
                    className="capitalize"
                  >
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.category && (
                <span className="label-text-alt text-red-500 text-sm ">
                  {errors.category.message}
                </span>
              )}
            </div>

            <div className="flex flex-col w-full max-w-xs">
              <label className=" font-serif mb-2 text-lg" htmlFor="subCategory">
                Product Sub Category
              </label>
              <select
                id="subCategory"
                placeholder="Type Product Name"
                className={`border capitalize cursor-pointer block outline-none py-2 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
                  errors.subCategory
                    ? " border-red-500 focus:border-red-500"
                    : "focus:border-slate-700 border-slate-300"
                }`}
                {...register("subCategory", {
                  required: {
                    value: true,
                    message: "Sub Category is required",
                  },
                })}
              >
                <option className="" disabled selected value={""}>
                  Select Sub Category
                </option>
                {subCategoryFilter?.map((subCategory) => (
                  <option value={subCategory.value} className="capitalize">
                    {subCategory.name}
                  </option>
                ))}
              </select>
              {errors.subCategory && (
                <span className="label-text-alt text-red-500 text-sm ">
                  {errors.subCategory.message}
                </span>
              )}
            </div>
            <div className="flex flex-col w-full max-w-xs ">
              <label className=" font-serif mb-2 text-lg" htmlFor="unit">
                Primary Image
              </label>
              <input
                type="file"
                name="primaryImage"
                id="primaryImage"
                className="hidden"
                accept="image/jpg, image/jpeg, image/png"
                {...register("primaryImage", {
                  required: {
                    value: true,
                    message: "Primary Image is required",
                  },
                })}
              />
              <label
                htmlFor="primaryImage"
                className="cursor-pointer text-white bg-green-500 hover:bg-green-600 transition-all duration-200 ease-in-out flex items-center justify-center py-2 px-4 rounded-md shadow-xl shadow-green-200"
              >
                {" "}
                <span className="text-2xl mr-3">
                  <IoMdCloudUpload />
                </span>{" "}
                Upload Image
              </label>
              {errors.primaryImage && (
                <span className="label-text-alt text-red-500 text-sm lg:ml-7">
                  {errors.primaryImage.message}
                </span>
              )}
            </div>
            <div className="flex flex-col w-full max-w-xs">
              <label className=" font-serif mb-2 text-lg" htmlFor="unit">
                Unit Type
              </label>
              <select
                id="unit"
                placeholder="Type Product Name"
                className={`border block outline-none py-2 px-3 max-w-sm w-full capitalize cursor-pointer rounded-md drop-shadow-md focus:drop-shadow-none ${
                  errors.unit
                    ? " border-red-500 focus:border-red-500"
                    : "focus:border-slate-700 border-slate-300"
                }`}
                {...register("unit", {
                  required: {
                    value: true,
                    message: "Unit Type is required",
                  },
                })}
              >
                <option className="" disabled selected value="">
                  Select Unit Type
                </option>
                <option className="capitalize" value="pcs">
                  piece
                </option>
              </select>
              {errors.unit && (
                <span className="label-text-alt text-red-500 text-sm ">
                  {errors.unit.message}
                </span>
              )}
            </div>
            <div className="flex flex-col w-full max-w-xs ">
              <label className=" font-serif mb-2 text-lg" htmlFor="unit">
                Extra Multiple Images ( Optional )
              </label>
              <input
                multiple
                type="file"
                name="extraImages"
                id="extraImages"
                className="hidden"
                accept="image/jpg, image/jpeg, image/png"
                {...register("extraImages")}
              />
              <label
                htmlFor="extraImages"
                className="cursor-pointer text-white bg-[#12B0E8] hover:bg-[#0499cf] duration-200 transition-all ease-in-out flex items-center justify-center py-2 px-4 rounded-md shadow-xl shadow-[#12afe83e]"
              >
                {" "}
                <span className="text-2xl mr-3">
                  <IoMdCloudUpload />
                </span>{" "}
                Upload Images
              </label>
            </div>

            <div className="border-b border-gray-300 mt-5 mb-3"></div>

            <div className="flex flex-col w-full">
              <label className=" font-serif mb-2 text-lg" htmlFor="description">
                Description
              </label>
              <textarea
                className={`border outline-none py-2 px-3 rounded-md drop-shadow-md focus:drop-shadow-none ${
                  errors.description
                    ? " border-red-500 focus:border-red-500"
                    : "focus:border-slate-700 border-slate-300"
                }`}
                id="description"
                cols="10"
                rows="5"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is required",
                  },
                })}
              ></textarea>
              {errors.description && (
                <span className="label-text-alt text-red-500 text-sm ">
                  {errors.description.message}
                </span>
              )}
            </div>
            <div className="border-b border-gray-300 mt-5 mb-3 w-full"></div>
          </div>
          {colorFields.map((color, index) => {
            return (
              <div className="flex mt-3 flex-wrap gap-3 justify-between">
                <div key={color.key} className="flex flex-col w-full max-w-xs">
                  <label className=" font-serif mb-2 text-lg">Color Name</label>
                  <input
                    type="text"
                    placeholder="Type Product Color Name"
                    className={`border block outline-none py-2 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
                      errors?.colors?.[index]?.colorName?.message
                        ? " border-red-500 focus:border-red-500"
                        : "focus:border-slate-700 border-slate-300"
                    }`}
                    {...register(`colors[${index}].colorName`, {
                      required: {
                        value: true,
                        message: "Color Name is required",
                      },
                    })}
                  />
                  {errors?.colors?.[index]?.colorName?.message && (
                    <span className="label-text-alt text-red-500 text-sm ">
                      {errors?.colors?.[index]?.colorName?.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col w-full max-w-xs">
                  <label className=" font-serif mb-2 text-lg">
                    Extra Price
                  </label>
                  <section className="flex justify-between items-center">
                    <div>
                      <input
                        type="number"
                        defaultValue={0}
                        placeholder="Type Extra Price"
                        className={`border block outline-none py-2 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
                          errors?.colors?.[index]?.extraPrice
                            ? " border-red-500 focus:border-red-500"
                            : "focus:border-slate-700 border-slate-300"
                        }`}
                        {...register(`colors[${index}].extraPrice`, {
                          min: {
                            value: 0,
                            message: "Price can't be negative",
                          },
                        })}
                      />
                      {errors?.colors?.[index]?.extraPrice?.message && (
                        <span className="label-text-alt text-red-500 text-sm ">
                          {errors?.colors?.[index]?.extraPrice?.message}
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => colorRemove(index)}
                      className="grid ml-2 place-items-center rounded-full flex-shrink-0 bg-red-500/20 border border-red-500 h-10 w-10 group transition-all hover:bg-red-500"
                    >
                      <MdDeleteOutline
                        className="text-red-500 group-hover:text-white transition-all"
                        size="20"
                      />
                    </button>
                  </section>
                </div>
              </div>
            );
          })}

          <div>
            <button
              type="button"
              onClick={() => colorAppend("")}
              className="bg-slate-600 text-white py-2 px-3 hover:bg-slate-800 rounded-md my-5 w-28 shadow-xl shadow-gray-400 transition-all duration-200 ease-in-out"
            >
              Add Color
            </button>
          </div>

          {sizeFields.map((size, index) => {
            return (
              <div className="flex mt-3 flex-wrap gap-3 justify-between">
                <div key={size.key} className="flex flex-col w-full max-w-xs">
                  <label className=" font-serif mb-2 text-lg">Size Name</label>
                  <input
                    type="text"
                    placeholder="Type Product Color Name"
                    className={`border block outline-none py-2 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
                      errors?.sizes?.[index]?.sizeName?.message
                        ? " border-red-500 focus:border-red-500"
                        : "focus:border-slate-700 border-slate-300"
                    }`}
                    {...register(`sizes[${index}].sizeName`, {
                      required: {
                        value: true,
                        message: "Size Name is required",
                      },
                    })}
                  />
                  {errors?.sizes?.[index]?.sizeName?.message && (
                    <span className="label-text-alt text-red-500 text-sm ">
                      {errors?.sizes?.[index]?.sizeName?.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col w-full max-w-xs">
                  <label className=" font-serif mb-2 text-lg">
                    Extra Price
                  </label>
                  <section className="flex justify-between items-center">
                    <div>
                      <input
                        type="number"
                        defaultValue={0}
                        placeholder="Type Extra Price"
                        className={`border block outline-none py-2 px-3 max-w-sm w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
                          errors?.sizes?.[index]?.extraPrice
                            ? " border-red-500 focus:border-red-500"
                            : "focus:border-slate-700 border-slate-300"
                        }`}
                        {...register(`sizes[${index}].extraPrice`, {
                          min: {
                            value: 0,
                            message: "Price can't be negative",
                          },
                        })}
                      />
                      {errors?.sizes?.[index]?.extraPrice?.message && (
                        <span className="label-text-alt text-red-500 text-sm ">
                          {errors?.sizes?.[index]?.extraPrice?.message}
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => sizeRemove(index)}
                      className="grid ml-2 place-items-center rounded-full flex-shrink-0 bg-red-500/20 border border-red-500 h-10 w-10 group transition-all hover:bg-red-500"
                    >
                      <MdDeleteOutline
                        className="text-red-500 group-hover:text-white transition-all"
                        size="20"
                      />
                    </button>
                  </section>
                </div>
              </div>
            );
          })}

          <div>
            <button
              type="button"
              onClick={() => sizeAppend("")}
              className="bg-slate-600 text-white py-2 px-3 hover:bg-slate-800 rounded-md my-5 w-28 shadow-xl shadow-gray-400 transition-all duration-200 ease-in-out"
            >
              Add Size
            </button>
          </div>

          <div className="text-center">
            <input
              type="submit"
              value="Submit"
              className="mt-5 bg-slate-600 text-white w-full max-w-xs px-4 py-2.5 rounded-md hover:bg-slate-800 font-semibold cursor-pointer transition-all duration-200 ease-in-out shadow-xl shadow-gray-400"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
