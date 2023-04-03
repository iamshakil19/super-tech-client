import { useState } from "react";
import OrderCard from "../../Pages/CheckOut/OrderInfo/OrderCard";
import { BsCart3 } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import numberWithComma from "../../Utils/numberWithComa";
const OrderInfoForSmallDevice = () => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  const { shippingCost, cart, cartTotalAmount, orderResponse } = useSelector(
    (state) => state.orders
  );

  const {
    shippingCost: shippingCostFromOrderRes,
    cart: cartFromOrderRes,
    totalPrice,
    subTotal,
  } = orderResponse || {};

  const total = cartTotalAmount + shippingCost;

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
        {location.pathname !== "/checkouts/thank-you" ? (
          <p className="font-semibold">
            ৳ {total ? numberWithComma(total) : ""}
          </p>
        ) : (
          <p className="font-semibold">
            ৳ {totalPrice ? numberWithComma(totalPrice) : ""}
          </p>
        )}
      </div>
      {location.pathname !== "/checkouts/thank-you" ? (
        <div className="p-2 poppins border-b border-gray-300">
          {cart?.map((cartProduct) => (
            <OrderCard cartProduct={cartProduct} key={cartProduct._id} />
          ))}
          <div className="border-b border-gray-300 my-5"></div>
          {location.pathname !== "/checkouts/thank-you" && (
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
              <p className="font-semibold">
                ৳ {cartTotalAmount ? numberWithComma(cartTotalAmount) : ""}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p>Shipping</p>
              <p className="font-semibold">৳ {shippingCost}</p>
            </div>
          </div>
          <div className="border-b border-gray-300 my-5"></div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-lg font-bold">
              ৳ {total ? numberWithComma(total) : ""}
            </p>
          </div>
        </div>
      ) : (
        <div className="p-2 poppins border-b border-gray-300">
          {cartFromOrderRes?.map((cartProduct) => (
            <OrderCard cartProduct={cartProduct} key={cartProduct._id} />
          ))}
          <div className="border-b border-gray-300 my-5"></div>
          {location.pathname !== "/checkouts/thank-you" && (
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
              <p className="font-semibold">
                ৳ {subTotal ? numberWithComma(subTotal) : ""}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p>Shipping</p>
              <p className="font-semibold">৳ {shippingCostFromOrderRes}</p>
            </div>
          </div>
          <div className="border-b border-gray-300 my-5"></div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-lg font-bold">
              ৳ {totalPrice ? numberWithComma(totalPrice) : ""}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderInfoForSmallDevice;
