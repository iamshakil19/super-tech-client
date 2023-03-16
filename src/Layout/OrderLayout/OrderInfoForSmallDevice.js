import { useState } from "react";
import OrderCard from "../../Pages/CheckOut/OrderInfo/OrderCard";
import { BsCart3 } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
const OrderInfoForSmallDevice = () => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  console.log(isOpen);
  return (
    <div
      className={`${
        isOpen ? "h-auto" : "h-16"
      } duration-500 transition-all overflow-hidden lg:hidden`}
    >
      <div
        onClick={() => setOpen(!isOpen)}
        className="flex items-center justify-between bg-slate-200 px-2 py-3 my-3 rounded-sm cursor-pointer"
      >
        <div className="flex items-center gap-3 text-sm">
          <BsCart3 size={17} />
          <p>Order summary</p>
          <RiArrowDownSLine
            size={20}
            className={`transition-transform duration-500 rotate-0 ${
              isOpen && "rotate-180"
            }`}
          />
        </div>
        <p className="font-semibold">৳ 145,000</p>
      </div>
      <div className="p-2 poppins border-b border-gray-300">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <div className="border-b border-gray-300 my-5"></div>
        {location.pathname !== "/checkouts/thank_you" && (
          <>
            <div className="flex items-center gap-5">
              <input
                className="outline-none border border-gray-300 px-3 py-1 rounded-md w-full focus:border-gray-700 transition-all duration-200"
                placeholder="Promo Code"
                type="text"
                name=""
                id=""
              />
              <button className="bg-slate-400 text-white px-4 py-1 rounded-md font-semibold">
                Apply
              </button>
            </div>
            <div className="border-b border-gray-300 my-5"></div>
          </>
        )}
        <div className="text-[15px]">
          <div className="flex items-center justify-between mb-3">
            <p>Subtotal</p>
            <p className="font-semibold">৳ 145,000.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Shipping</p>
            <p className="font-semibold">Free</p>
          </div>
        </div>
        <div className="border-b border-gray-300 my-5"></div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-lg font-semibold">Total</p>
          <p className="text-lg font-bold">৳ 145,000.00</p>
        </div>
      </div>
    </div>
  );
};

export default OrderInfoForSmallDevice;
