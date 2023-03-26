import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import numberWithComma from "../../../Utils/numberWithComa";
import OrderCard from "./OrderCard";

const OrderInfo = () => {
  const { shippingCost, cart, cartTotalAmount } = useSelector(
    (state) => state.orders
  );
  console.log(cart);
  const total = cartTotalAmount + shippingCost;

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="p-2 poppins max-w-lg hidden lg:block">
      {location.pathname === "/checkouts/thank-you" && (
        <p className="mb-5 font-medium text-lg">Order Summary</p>
      )}
      {cart?.map((cartProduct) => (
        <OrderCard cartProduct={cartProduct} key={cartProduct._id} />
      ))}

      <div className="border-b border-gray-300 my-5"></div>
      {location.pathname !== "/checkouts/thank-you" && (
        <>
          <div className="flex items-center gap-5">
            <input
              className="outline-none border border-gray-300 px-3 py-2.5 rounded-md w-full focus:border-gray-700 transition-all duration-200"
              placeholder="Promo Code"
              type="text"
              name=""
              id=""
            />
            <button className="bg-slate-400 text-white px-4 py-2.5 rounded-md font-semibold">
              Apply
            </button>
          </div>
          <div className="border-b border-gray-300 my-5"></div>
        </>
      )}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p>Subtotal</p>
          <p className="font-medium">৳ {numberWithComma(cartTotalAmount)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Shipping</p>
          <p className="font-medium">৳ {shippingCost}</p>
        </div>
      </div>
      <div className="border-b border-gray-300 my-5"></div>
      <div className="flex items-center justify-between mb-3">
        <p className="text-lg font-semibold">Total</p>
        <p className="text-xl font-bold">৳ {numberWithComma(total)}</p>
      </div>
    </div>
  );
};

export default OrderInfo;
