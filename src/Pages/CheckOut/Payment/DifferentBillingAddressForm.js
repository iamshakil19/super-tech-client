import { useForm } from "react-hook-form";
import { IoMdStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { divisions } from "../../../Utils/LocalData";

const DifferentBillingAddressForm = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm();
  const onSubmit = (data) => {
    navigate("/checkouts/shipping");
  };
  return (
    <div className="mt-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div className="w-full mb-3">
            <label className="font-medium flex" htmlFor="email">
              Email <IoMdStar className="text-red-500" size={11} />
            </label>
            <input
              id="email"
              readOnly
              type="text"
              value={"shakil@gmail.com"}
              placeholder="Email"
              className={`bg-slate-200/70 border block mt-1 text-[15px] outline-none py-1.5 lg:py-2.5 px-3 w-full rounded-md cursor-not-allowed`}
              {...register("email")}
            />
          </div>
          <section className="mb-3 lg:flex items-center gap-3 justify-between">
            <div className="w-full">
              <label className="font-medium flex" htmlFor="name">
                Name <IoMdStar className="text-red-500" size={11} />
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Name"
                className={`border block outline-none mt-1 text-[15px] py-1.5 lg:py-2.5 px-3 w-full rounded-md  ${
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
            <div className="w-full mt-3 lg:mt-0">
              <label className="font-medium flex" htmlFor="phoneNumber">
                Number <IoMdStar className="text-red-500" size={11} />
              </label>
              <input
                id="phoneNumber"
                type="text"
                placeholder="Enter Number"
                className={`border block outline-none mt-1 text-[15px] py-1.5 lg:py-2.5 px-3 w-full rounded-md  ${
                  errors.phoneNumber
                    ? " border-red-500 focus:border-red-500"
                    : "focus:border-slate-700 border-slate-300"
                }`}
                {...register("phoneNumber", {
                  required: {
                    value: true,
                    message: "Number is required",
                  },
                })}
              />
              {errors.phoneNumber && (
                <span className="label-text-alt text-red-500 text-sm ">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>
          </section>
          <section className="mb-3 lg:flex items-center gap-3 justify-between">
            <div className="w-full">
              <label className="font-medium" htmlFor="company">
                Company <span className="text-sm">(optional)</span>
              </label>
              <input
                id="company"
                type="text"
                placeholder="Enter Company Name"
                className={`border block outline-none mt-1 text-[15px] py-1.5 lg:py-2.5 px-3 w-full rounded-md focus:border-slate-700 border-slate-300`}
                {...register("company")}
              />
            </div>
            <div className="w-full mt-3 lg:mt-0">
              <label className="font-medium" htmlFor="postalCode">
                Postal Code <span className="text-sm">(optional)</span>
              </label>
              <input
                id="postalCode"
                type="text"
                placeholder="Enter Post Code"
                className={`border block outline-none mt-1 text-[15px] py-1.5 lg:py-2.5 px-3 w-full rounded-md focus:border-slate-700 border-slate-300`}
                {...register("postalCode")}
              />
            </div>
          </section>

          <section className="mb-3 lg:flex items-center gap-3 justify-between">
            <div className="w-full">
              <label className="font-medium flex" htmlFor="division">
                Division <IoMdStar className="text-red-500" size={11} />
              </label>
              <select
                defaultValue=""
                id="division"
                type="text"
                placeholder="division"
                className={`border block outline-none mt-1 text-[15px] py-1.5 lg:py-2.5 px-3 w-full rounded-md cursor-pointer capitalize ${
                  errors.division
                    ? " border-red-500 focus:border-red-500"
                    : "focus:border-slate-700 border-slate-300"
                }`}
                {...register("division", {
                  required: {
                    value: true,
                    message: "Division is required",
                  },
                })}
              >
                <option className="" disabled selected value={""}>
                  Select Division
                </option>
                {divisions.map((division) => (
                  <option value={division} className="capitalize">
                    {division}
                  </option>
                ))}
              </select>
              {errors.division && (
                <span className="label-text-alt text-red-500 text-sm ">
                  {errors.division.message}
                </span>
              )}
            </div>
            <div className="w-full mt-3 lg:mt-0">
              <label className="font-medium flex" htmlFor="area">
                Area <IoMdStar className="text-red-500" size={11} />
              </label>
              <input
                id="area"
                type="text"
                placeholder="Enter Area"
                className={`border block outline-none mt-1 text-[15px] py-1.5 lg:py-2.5 px-3 w-full rounded-md  ${
                  errors.area
                    ? " border-red-500 focus:border-red-500"
                    : "focus:border-slate-700 border-slate-300"
                }`}
                {...register("area", {
                  required: {
                    value: true,
                    message: "Area is required",
                  },
                })}
              />
              {errors.area && (
                <span className="label-text-alt text-red-500 text-sm ">
                  {errors.area.message}
                </span>
              )}
            </div>
          </section>
          <div className="w-full mb-5">
            <label className="font-medium flex" htmlFor="streetAddress">
              Street Address <IoMdStar className="text-red-500" size={11} />
            </label>
            <input
              id="streetAddress"
              type="text"
              placeholder="Enter Street Address"
              className={`border block outline-none mt-1 text-[15px] py-1.5 lg:py-2.5 px-3 w-full rounded-md  ${
                errors.streetAddress
                  ? " border-red-500 focus:border-red-500"
                  : "focus:border-slate-700 border-slate-300"
              }`}
              {...register("streetAddress", {
                required: {
                  value: true,
                  message: "Street address is required",
                },
              })}
            />
            {errors.streetAddress && (
              <span className="label-text-alt text-red-500 text-sm ">
                {errors.streetAddress.message}
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default DifferentBillingAddressForm;
