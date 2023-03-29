import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useCreateOrderMutation } from "../../../features/orders/ordersApi";
import {
  clearAll,
  createOrderId,
  handleOrderResponse,
} from "../../../features/orders/ordersSlice";
import BillingSection from "./BillingSection";
import PaymentSection from "./PaymentSection";

const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const { sameAsShippingAddress } = billingAddress || {};
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
      toast.error("Please fill the previous form first", { id: "payment" });
      navigate("/");
    } else if (cart.length < 1) {
      toast.error("Please add items first", { id: "payment" });
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

  const [createOrder, { data, isSuccess, isError, isLoading, error }] =
    useCreateOrderMutation();
  const handleCompleteOrder = () => {
    const orderId = Math.floor(10000000 + Math.random() * 90000000);
    dispatch(createOrderId(orderId));
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
      billingAddress,
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="my-5 lg:my-10 poppins">
      <div className="border border-gray-300 rounded-md p-3 text-[15px]">
        <section className="flex justify-between">
          <div className="sm:flex gap-7 lg:gap-7">
            <p className="font-medium w-16">Contact</p>
            <p className="text-sm">
              {email}, {phoneNumber}
            </p>
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
            <p className="font-medium whitespace-nowrap w-16">Ship To </p>
            <p className="capitalize text-sm">{streetAddress}</p>
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
            <p className="font-medium whitespace-nowrap w-16">Method </p>
            <p className="capitalize text-sm">
              {shippingMethod === "insideDhaka"
                ? "Inside Dhaka"
                : "Outside Dhaka"}{" "}
              <span className="font-semibold">৳ {shippingCost}</span>
            </p>
          </div>
          <div>
            <Link to="/checkouts/shipping" className="cursor-pointer text-sm">
              Change
            </Link>
          </div>
        </section>
      </div>

      <PaymentSection />
      <BillingSection />

      {sameAsShippingAddress && (
        <div className="my-5 sm:flex justify-between items-center flex-row-reverse">
          <div>
            <button
              disabled={isLoading}
              onClick={handleCompleteOrder}
              className="bg-black lg:bg-slate-700 lg:hover:bg-black text-white font-semibold w-full py-3 px-5 rounded-md transition-all ease-in-out duration-200 cursor-pointer text-sm"
            >
              Complete Order
            </button>
          </div>
          <Link
            to="/checkouts/shipping"
            className="flex items-center justify-center mt-5 sm:mt-0"
          >
            <RiArrowLeftSLine size={25} />
            <p className="text-sm ml-2 whitespace-nowrap">Return to shipping</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Payment;
