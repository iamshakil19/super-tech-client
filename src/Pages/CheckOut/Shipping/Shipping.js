import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getTotals,
  handleShippingMethod,
} from "../../../features/orders/ordersSlice";
import PageTitle from "../../../Utils/PageTitle";

const Shipping = () => {
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
    shippingMethod: shippingMethodFromState,
    shippingCost: shippingCostFromState,
  } = useSelector((state) => state.orders);

  const [shippingMethod, setShippingMethod] = useState(shippingMethodFromState);
  const [shippingCost, setShippingCost] = useState(shippingCostFromState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      email === "" &&
      name === "" &&
      phoneNumber === "" &&
      division === "" &&
      area === "" &&
      streetAddress === ""
    ) {
      toast.error("Please fill the previous form first", { id: "shipping" });
      navigate("/");
    } else if (cart.length < 1) {
      toast.error("Please add items first", { id: "shipping" });
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
  ]);

  useEffect(() => {
    if (shippingMethod === "insideDhaka") {
      setShippingCost(250);
    } else if (shippingMethod === "outsideDhaka") {
      setShippingCost(450);
    }
  }, [shippingMethod]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleShippingMethod({ shippingCost, shippingMethod }));
    dispatch(getTotals());
    navigate("/checkouts/payment");
  };
  return (
    <div className="my-5 lg:my-10 poppins">
      <PageTitle
        title={"Shipping - Super Tech Furniture & Interior"}
      ></PageTitle>
      <div className="border border-gray-300 rounded-md p-3 text-[15px]">
        <section className="flex justify-between">
          <div className="sm:flex gap-7 lg:gap-7">
            <p className="font-medium w-16">Contact</p>
            <p className="text-sm">shakil@gmail.com, 01877018851</p>
          </div>
          <div>
            <Link to="/checkouts" className="cursor-pointer text-sm">
              Change
            </Link>
          </div>
        </section>
        <div className="border-b my-3 border-gray-300 mx-5"></div>
        <section className="flex justify-between">
          <div className="sm:flex gap-7 lg:gap-7">
            <p className="font-medium whitespace-nowrap  w-16">Ship To </p>
            <p className="capitalize text-sm">
              mirpur 13, block B, Road 9, Mirpur, Dhaka
            </p>
          </div>
          <div>
            <Link to="/checkouts" className="cursor-pointer text-sm">
              Change
            </Link>
          </div>
        </section>
      </div>

      <div className="mt-5 sm:mt-10">
        <h2 className="font-medium text-lg">Shipping Method</h2>
        <form onSubmit={handleSubmit}>
          <div className="border border-gray-300 rounded-md p-3 text-[15px] mt-4">
            <label
              htmlFor="insideDhaka"
              className="flex justify-between py-1.5 cursor-pointer"
            >
              <div className="flex items-center gap-5 lg:gap-7">
                <input
                  required
                  type="radio"
                  id="insideDhaka"
                  name="shippingMethod"
                  className="radio radio-sm"
                  // defaultValue="insideDhaka"
                  checked={shippingMethod === "insideDhaka"}
                  onChange={() => setShippingMethod("insideDhaka")}
                />
                <label htmlFor="insideDhaka" className="text-sm cursor-pointer">
                  Inside Dhaka City
                </label>
              </div>
              <div>
                <p className="font-semibold">৳ 250</p>
              </div>
            </label>
            <div className="border-b my-3 border-gray-300 mx-5"></div>
            <label
              htmlFor="outsideDhaka"
              className="flex justify-between py-1.5 cursor-pointer"
            >
              <div className="flex items-center gap-5 lg:gap-7">
                <input
                  required
                  type="radio"
                  id="outsideDhaka"
                  name="shippingMethod"
                  className="radio radio-sm"
                  checked={shippingMethod === "outsideDhaka"}
                  onChange={() => setShippingMethod("outsideDhaka")}
                />
                <label
                  htmlFor="outsideDhaka"
                  className="text-sm cursor-pointer"
                >
                  Outside Dhaka
                </label>
              </div>
              <div>
                <p className="font-semibold">৳ 450</p>
              </div>
            </label>
          </div>
          <div className="my-7 sm:flex justify-between items-center flex-row-reverse">
            <div>
              <input
                type="submit"
                className="bg-black lg:bg-slate-700 lg:hover:bg-black text-white font-semibold w-full py-3 text-sm px-5 rounded-md transition-all ease-in-out duration-200 cursor-pointer"
                value="Continue To Payment"
              />
            </div>
            <Link
              to="/checkouts"
              className="flex items-center justify-center mt-5 sm:mt-0"
            >
              <RiArrowLeftSLine size={25} />
              <p className="text-sm ml-2 whitespace-nowrap">
                Return to information
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
