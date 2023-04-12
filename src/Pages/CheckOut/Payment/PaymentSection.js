import React, { useEffect, useState } from "react";
import BankTransfer from "./BankTransfer";
import bkashLogo from "../../../Assets/Others/bkash.png";
import nagadLogo from "../../../Assets/Others/nagad.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handlePaymentMethod } from "../../../features/orders/ordersSlice";
const PaymentSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { paymentMethod: paymentMethodFromState } = useSelector(
    (state) => state.orders
  );

  const [paymentMethod, setPaymentMethod] = useState(paymentMethodFromState);

  useEffect(() => {
    dispatch(handlePaymentMethod(paymentMethod));
  }, [dispatch, paymentMethod]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-5">
      <h2 className="text-lg">Payment</h2>
      <p className="text-[15px] mt-2">All Transaction are secure</p>
      <div className="border border-gray-300 rounded-md mt-3">
        <section
          className={`${
            paymentMethod === "codInsideDhaka" ? "" : "h-12"
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <label
            htmlFor="codInsideDhaka"
            className="flex items-center gap-5 lg:gap-7 cursor-pointer px-3 h-12 border-b border-gray-300"
          >
            <input
              required
              type="radio"
              name="payment"
              id="codInsideDhaka"
              className="radio radio-sm"
              checked={paymentMethod === "codInsideDhaka"}
              onChange={() => setPaymentMethod("codInsideDhaka")}
            />
            <label
              htmlFor="codInsideDhaka"
              className="text-[15px] font-medium cursor-pointer"
            >
              Cash On Delivery - Inside Dhaka
            </label>
          </label>
          <div className="bg-slate-100/60 px-3 min-h-12 flex justify-center items-center border-b border-gray-300 py-2">
            <p className="text-sm">
              Minimum 10% of total invoice amount + shipping charge needs to be
              paid in Advance.
            </p>
          </div>
        </section>

        <section
          className={`${
            paymentMethod === "bankTransfer"
              ? "max-h-[1000px] w-[100%]"
              : "h-12"
          } overflow-hidden transition-all duration-700 ease-in-out`}
        >
          <label
            htmlFor="bankTransfer"
            className="flex items-center gap-5 lg:gap-7 cursor-pointer px-3 h-12 border-b border-gray-300"
          >
            <input
              required
              type="radio"
              name="payment"
              id="bankTransfer"
              className="radio radio-sm"
              checked={paymentMethod === "bankTransfer"}
              onChange={() => setPaymentMethod("bankTransfer")}
            />
            <label
              htmlFor="bankTransfer"
              className="text-[15px] font-medium cursor-pointer"
            >
              Bank Transfer - BEFTN/NPSB
            </label>
          </label>
          <div className="bg-slate-100/60 px-3 min-h-12 text-center border-b border-gray-300">
            <div className="text-sm py-3">
              <p>
                You can transfer the invoice amount to following Bank Account :
              </p>
              <BankTransfer />
              <p>
                Please call us at 01716-926040 to confirm the payment after the
                transfer
              </p>
            </div>
          </div>
        </section>
        <section
          className={`${
            paymentMethod === "bKashorNagad" ? "" : "h-12"
          } overflow-hidden transition-all duration-300 ease-out`}
        >
          <label
            htmlFor="bKashorNagad"
            className="flex items-center gap-5 lg:gap-7 cursor-pointer px-3 h-12 border-b border-gray-300"
          >
            <input
              required
              type="radio"
              name="payment"
              id="bKashorNagad"
              className="radio radio-sm"
              checked={paymentMethod === "bKashorNagad"}
              onChange={() => setPaymentMethod("bKashorNagad")}
            />
            <label
              htmlFor="bKashorNagad"
              className="text-[15px] font-medium cursor-pointer"
            >
              bKash or Nagad - Manual
            </label>
          </label>
          <div className="bg-slate-100/60 px-3 min-h-12 border-b border-gray-300 py-2 text-center">
            <img src={bkashLogo} className="w-24 mx-auto block" alt="" />
            <div className="border-b border-dashed max-w-xs mx-auto border-gray-400 my-2"></div>
            <p className="text-sm leading-6">
              <span className="font-semibold text-pink-500">01853-870017</span>{" "}
              - Personal Account (Send Money)
            </p>
            <p className="text-sm leading-6">
              Put your order ID as reference number
            </p>
            <div className="border-b border-dashed max-w-xs mx-auto border-gray-400 my-2"></div>
            <img src={nagadLogo} className="w-24 mx-auto block" alt="" />
            <div className="border-b border-dashed max-w-xs mx-auto border-gray-400 my-2"></div>
            <p className="text-sm leading-6">
              <span className="font-semibold text-orange-500">
                01853-870017
              </span>{" "}
              - Personal Account (Send Money)
            </p>
            <p className="text-sm leading-6">
              Put your order ID as reference number
            </p>
          </div>
        </section>
        <section
          className={`${
            paymentMethod === "codOutsideDhaka" ? "" : "h-12"
          } overflow-hidden transition-all duration-300 ease-out`}
        >
          <label
            htmlFor="codOutsideDhaka"
            className="flex items-center gap-5 lg:gap-7 cursor-pointer px-3 h-12 border-b border-gray-300"
          >
            <input
              required
              type="radio"
              name="payment"
              id="codOutsideDhaka"
              className="radio radio-sm"
              checked={paymentMethod === "codOutsideDhaka"}
              onChange={() => setPaymentMethod("codOutsideDhaka")}
            />
            <label
              htmlFor="codOutsideDhaka"
              className="text-[15px] font-medium cursor-pointer"
            >
              Cash On Delivery - Outside Dhaka
            </label>
          </label>
          <div className="bg-slate-100/60 px-3 min-h-12 py-2 text-center">
            <p className="text-sm leading-6">
              Minimum 20% of total invoice amount + shipping charge needs to be
              paid in Advance.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaymentSection;
