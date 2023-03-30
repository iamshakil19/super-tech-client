import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { IoMdStar } from "react-icons/io";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  clearAll,
  handleDifferentBillingAddress,
  handleOrderResponse,
} from "../../../features/orders/ordersSlice";
import { divisions } from "../../../Utils/LocalData";
import { useCreateOrderMutation } from "../../../features/orders/ordersApi";
const DifferentBillingAddressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createOrder, { data, isSuccess }] = useCreateOrderMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm();

  const {
    email,
    name,
    phoneNumber,
    company,
    postalCode,
    division,
    area,
    streetAddress,
    cart,
    shippingMethod,
    paymentMethod,
    shippingCost,
    billingAddress,
    cartTotalAmount,
    cartTotalQuantity,
  } = useSelector((state) => state.orders);

  useEffect(() => {
    if (
      email === "" &&
      name === "" &&
      phoneNumber === "" &&
      division === "" &&
      area === "" &&
      streetAddress === "" &&
      shippingMethod === ""
    ) {
      toast.error("Please fill the previous form first", { id: "billing" });
      navigate("/");
    } else if (cart.length < 1) {
      toast.error("Please add items first", { id: "billing" });
      navigate("/");
    }
  }, [
    cart.length,
    email,
    name,
    phoneNumber,
    company,
    postalCode,
    division,
    area,
    streetAddress,
    navigate,
    shippingMethod,
  ]);

  const onSubmit = (data) => {
    dispatch(handleDifferentBillingAddress(data));
    const orderId = Math.floor(10000000 + Math.random() * 90000000);
    createOrder({
      email,
      name,
      phoneNumber,
      company,
      postalCode,
      division,
      area,
      streetAddress,
      cart,
      shippingMethod,
      paymentMethod,
      shippingCost,
      billingAddress: data,
      orderId,
      totalQuantity: cartTotalQuantity,
      subTotal: cartTotalAmount,
      totalPrice: cartTotalAmount + shippingCost,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Order completed successfully", { id: "payment" });
      dispatch(handleOrderResponse(data?.data));
      dispatch(clearAll());
      navigate("/checkouts/thank-you");
    }
  }, [isSuccess, navigate, data?.data, dispatch]);

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
              value={email}
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
        <div className="my-5 sm:flex justify-between items-center flex-row-reverse">
          <div>
            <input
              type="submit"
              className="bg-black lg:bg-slate-700 lg:hover:bg-black text-white font-semibold w-full py-3 px-5 rounded-md transition-all ease-in-out duration-200 cursor-pointer text-sm"
              value="Complete Order"
            />
          </div>
          <Link
            to="/checkouts/shipping"
            className="flex items-center justify-center mt-5 sm:mt-0"
          >
            <RiArrowLeftSLine size={25} />
            <p className="text-sm ml-2 whitespace-nowrap">Return to shipping</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default DifferentBillingAddressForm;
