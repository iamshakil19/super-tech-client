import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { categories, subCategories } from "../../../../Utils/LocalData";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdCloudUpload, IoMdStar } from "react-icons/io";
import { useAddProductMutation } from "../../../../features/products/productsApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [addProduct, { isError, isLoading, error, isSuccess }] =
    useAddProductMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
    watch,
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

  useEffect(() => {
    if (isError) {
      if (error?.data?.error) {
        toast.error("Use unique name", {
          id: "addProducts",
        });
      }
    }
    if (isError) {
      if (!error?.data?.error) {
        toast.error(error?.data?.message, { id: "addProducts" });
      }
    }
    if (isSuccess) {
      toast.success("Products added", { id: "addProducts" });
      reset();
    }
  }, [isError, error?.data?.message, isSuccess, reset, error?.data?.error]);

  const onSubmit = (data) => {
    const formData = new FormData();
    const { primaryImage, extraImages, category, ...others } = data;
    const finalCategory = category.split(",")[1];
    formData.append("primaryImage", primaryImage[0]);
    [...data?.extraImages].forEach((image) => {
      formData.append("extraImages", image);
    });

    formData.append(
      "others",
      JSON.stringify({ category: finalCategory, ...others })
    );
    addProduct(formData);
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
      <div className=" poppins mx-auto w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-200 border border-gray-300/75 shadow-lg p-10 rounded-2xl max-w-3xl mx-auto"
        >
          <h2 className=" text-2xl font-semibold mb-5 ">Add New Product</h2>
          <div className="">
            <section className="sm:flex items-center justify-between gap-5 mb-4">
              <div className="flex flex-col w-full mb-4 sm:mb-0">
                <label
                  className="mb-2 text-base font-semibold flex"
                  htmlFor="name"
                >
                  Product Name <IoMdStar className="text-red-500" size={11} />
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Type Product Name"
                  className={`border block outline-none py-2 px-3 w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
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
              <div className="flex flex-col w-full">
                <label
                  className="mb-2 text-base font-semibold flex"
                  htmlFor="price"
                >
                  Price <IoMdStar className="text-red-500" size={11} />
                </label>
                <input
                  id="price"
                  type="number"
                  placeholder="Type Product Price"
                  className={`border block outline-none py-2 px-3 w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
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
                    valueAsNumber: true,
                  })}
                />
                {errors.price && (
                  <span className="label-text-alt text-red-500 text-sm ">
                    {errors.price.message}
                  </span>
                )}
              </div>
            </section>
            <section className="sm:flex items-center justify-between gap-5 mb-4">
              <div className="flex flex-col w-full">
                <label
                  className="mb-2 text-base font-semibold"
                  htmlFor="discount"
                >
                  Discount
                </label>
                <input
                  id="discount"
                  type="number"
                  defaultValue={0}
                  placeholder="Type Product discount"
                  className={`border block outline-none py-2 px-3 w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
                    errors.discount
                      ? " border-red-500 focus:border-red-500"
                      : "focus:border-slate-700 border-slate-300"
                  }`}
                  {...register("discount", {
                    min: {
                      value: 0,
                      message: "Discount can't be negative",
                    },
                    valueAsNumber: true,
                  })}
                />
                {errors.discount && (
                  <span className="label-text-alt text-red-500 text-sm ">
                    {errors.discount.message}
                  </span>
                )}
              </div>
              <div className="w-full"></div>
            </section>

            <section className="sm:flex items-center justify-between gap-5 mb-4">
              <div className="flex flex-col w-full mb-4 sm:mb-0">
                <label
                  className="mb-2 text-base font-semibold flex"
                  htmlFor="category"
                >
                  Product Category{" "}
                  <IoMdStar className="text-red-500" size={11} />
                </label>
                <select
                  defaultValue={selectedCategory}
                  id="category"
                  type="text"
                  placeholder="Type Product Name"
                  className={`border capitalize cursor-pointer block outline-none py-2 px-3 w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
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
                  {categories?.map((category) => (
                    <option
                      key={category.id}
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
              <div className="flex flex-col w-full">
                <label
                  className="mb-2 text-base font-semibold flex"
                  htmlFor="subCategory"
                >
                  Product Sub Category{" "}
                  <IoMdStar className="text-red-500" size={11} />
                </label>
                <select
                  id="subCategory"
                  placeholder="Type Product Name"
                  className={`border capitalize cursor-pointer block outline-none py-2 px-3 w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
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
                    <option
                      key={subCategory.id}
                      value={subCategory.value}
                      className="capitalize"
                    >
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
            </section>

            <section className="sm:flex items-center justify-between gap-5 mb-4">
              <div className="flex flex-col w-full mb-4 sm:mb-0">
                <label
                  className="mb-2 text-base font-semibold flex"
                  htmlFor="unit"
                >
                  Primary Image <IoMdStar className="text-red-500" size={11} />
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
                  className="cursor-pointer text-white bg-green-500 hover:bg-green-600 border border-dashed border-green-700 transition-all duration-200 ease-in-out flex items-center justify-center py-2 px-4 rounded-full shadow-xl shadow-green-200"
                >
                  {" "}
                  <span className="text-2xl mr-3">
                    <IoMdCloudUpload />
                  </span>{" "}
                  Upload Image
                </label>
                {errors.primaryImage && (
                  <span className="label-text-alt text-red-500 text-sm">
                    {errors.primaryImage.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col w-full ">
                <label className="mb-2 text-base font-semibold" htmlFor="unit">
                  Extra Multiple Images{" "}
                  <span className="text-sm">(optional)</span>
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
                  className="cursor-pointer text-white bg-[#12B0E8] hover:bg-[#0499cf] duration-200 transition-all ease-in-out flex items-center justify-center py-2 px-4 rounded-full border border-dashed border-[#067ca7] shadow-xl shadow-[#12afe83e]"
                >
                  {" "}
                  <span className="text-2xl mr-3">
                    <IoMdCloudUpload />
                  </span>{" "}
                  Upload Images
                </label>
              </div>
            </section>

            <div className="border-b border-gray-300 mt-5 mb-3"></div>

            <div className="flex flex-col w-full">
              <label
                className="mb-2 text-base font-semibold flex"
                htmlFor="description"
              >
                Description <IoMdStar className="text-red-500" size={11} />
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
          {colorFields?.map((color, index) => {
            return (
              <div key={index} className="sm:flex mt-3 gap-3 justify-between">
                <div
                  key={color.key}
                  className="flex flex-col w-full  mb-4 sm:mb-0"
                >
                  <label className="mb-2 text-base font-semibold">
                    Color Name
                  </label>
                  <input
                    type="text"
                    placeholder="Type Product Color Name"
                    className={`border block outline-none py-2 px-3 w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
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

                <div className="flex flex-col w-full">
                  <label className="mb-2 text-base font-semibold">
                    Extra Price
                  </label>

                  <div>
                    <div className="flex items-center">
                      <input
                        type="number"
                        placeholder="Type Extra Price"
                        className={`border block outline-none py-2 px-3 w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
                          errors?.colors?.[index]?.extraPrice
                            ? " border-red-500 focus:border-red-500"
                            : "focus:border-slate-700 border-slate-300"
                        }`}
                        {...register(`colors[${index}].extraPrice`, {
                          required: {
                            value: true,
                            message: "Color Extra price is required",
                          },
                          min: {
                            value: 0,
                            message: "Price can't be negative",
                          },
                          valueAsNumber: true,
                        })}
                      />

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
                    </div>
                    {errors?.colors?.[index]?.extraPrice?.message && (
                      <span className="label-text-alt text-red-500 text-sm ">
                        {errors?.colors?.[index]?.extraPrice?.message}
                      </span>
                    )}
                  </div>
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
          {sizeFields?.map((size, index) => {
            return (
              <div key={index} className="sm:flex mt-3 gap-3 justify-between">
                <div
                  key={size.key}
                  className="flex flex-col w-full  mb-4 sm:mb-0"
                >
                  <label className="mb-2 text-base font-semibold">
                    Size Name
                  </label>
                  <input
                    type="text"
                    placeholder="Type Product Color Name"
                    className={`border block outline-none py-2 px-3 w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
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

                <div className="flex flex-col w-full">
                  <label className="mb-2 text-base font-semibold">
                    Extra Price
                  </label>

                  <div>
                    <div className="flex items-center">
                      <input
                        type="number"
                        placeholder="Type Extra Price"
                        className={`border block outline-none py-2 px-3 w-full rounded-md drop-shadow-md focus:drop-shadow-none ${
                          errors?.sizes?.[index]?.extraPrice
                            ? " border-red-500 focus:border-red-500"
                            : "focus:border-slate-700 border-slate-300"
                        }`}
                        {...register(`sizes[${index}].extraPrice`, {
                          required: {
                            value: true,
                            message: "Size extra price is required",
                          },
                          min: {
                            value: 0,
                            message: "Price can't be negative",
                          },
                          valueAsNumber: true,
                        })}
                      />
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
                    </div>
                    {errors?.sizes?.[index]?.extraPrice?.message && (
                      <span className="label-text-alt text-red-500 text-sm ">
                        {errors?.sizes?.[index]?.extraPrice?.message}
                      </span>
                    )}
                  </div>
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
