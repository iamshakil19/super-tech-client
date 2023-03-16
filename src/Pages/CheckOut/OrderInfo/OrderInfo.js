import { useLocation } from "react-router-dom";
import OrderCard from "./OrderCard";

const OrderInfo = () => {
  const location = useLocation();
  return (
    <div className="p-2 poppins max-w-lg hidden lg:block">
      {location.pathname === "/checkouts/thank_you" && (
        <p className="mb-5 font-medium text-lg">Order Summary</p>
      )}
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <div className="border-b border-gray-300 my-5"></div>
      {location.pathname !== "/checkouts/thank_you" && (
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
          <p className="font-medium">৳ 145,000.00</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Shipping</p>
          <p className="font-medium">Free</p>
        </div>
      </div>
      <div className="border-b border-gray-300 my-5"></div>
      <div className="flex items-center justify-between mb-3">
        <p className="text-lg font-semibold">Total</p>
        <p className="text-xl font-bold">৳ 145,000.00</p>
      </div>
    </div>
  );
};

export default OrderInfo;
