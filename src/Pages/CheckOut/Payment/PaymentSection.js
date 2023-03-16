import React, { useState } from "react";
import BankTransfer from "./BankTransfer";
import bkashLogo from "../../../Assets/Others/bkash.png";
import nagadLogo from "../../../Assets/Others/nagad.png";
const PaymentSection = () => {
  const [paymentOpen, setPaymentOpen] = useState(1);
  return (
    <div className="mt-5">
      <h2 className="text-lg">Payment</h2>
      <p className="text-[15px] mt-2">All Transaction are secure</p>
      <div className="border border-gray-300 rounded-md mt-3">
        <section
          className={`${
            paymentOpen === 1 ? "" : "h-12"
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <label
            htmlFor="codInsideDhaka"
            className="flex items-center gap-5 lg:gap-7 cursor-pointer px-3 h-12 border-b border-gray-300"
          >
            <input
              required
              type="radio"
              id="codInsideDhaka"
              className="radio radio-sm"
              checked={paymentOpen === 1}
              onChange={() => setPaymentOpen(1)}
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
            paymentOpen === 2 ? "max-h-[1000px] w-[100%]" : "h-12"
          } overflow-hidden transition-all duration-700 ease-in-out`}
        >
          <label
            htmlFor="bankTransfer"
            className="flex items-center gap-5 lg:gap-7 cursor-pointer px-3 h-12 border-b border-gray-300"
          >
            <input
              required
              type="radio"
              id="bankTransfer"
              className="radio radio-sm"
              checked={paymentOpen === 2}
              onChange={() => setPaymentOpen(2)}
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
            paymentOpen === 3 ? "" : "h-12"
          } overflow-hidden transition-all duration-300 ease-out`}
        >
          <label
            htmlFor="bkashManual"
            className="flex items-center gap-5 lg:gap-7 cursor-pointer px-3 h-12 border-b border-gray-300"
          >
            <input
              required
              type="radio"
              id="bkashManual"
              className="radio radio-sm"
              checked={paymentOpen === 3}
              onChange={() => setPaymentOpen(3)}
            />
            <label
              htmlFor="bkashManual"
              className="text-[15px] font-medium cursor-pointer"
            >
              Mobile Banking - Manual
            </label>
          </label>
          <div className="bg-slate-100/60 px-3 min-h-12 border-b border-gray-300 py-2 text-center">
            <img src={bkashLogo} className="w-24 mx-auto block" alt="" />
            <div className="border-b border-dashed max-w-xs mx-auto border-gray-400 my-2"></div>
            <p className="text-sm leading-6">
              <span className="font-semibold text-pink-500">01716-926040</span>{" "}
              - Merchant Account (Make Payment)
            </p>
            <p className="text-sm leading-6">
              Put your order ID as reference number
            </p>
            <div className="border-b border-dashed max-w-xs mx-auto border-gray-400 my-2"></div>
            <img src={nagadLogo} className="w-24 mx-auto block" alt="" />
            <div className="border-b border-dashed max-w-xs mx-auto border-gray-400 my-2"></div>
            <p className="text-sm leading-6">
              <span className="font-semibold text-orange-500">
                01716-926040
              </span>{" "}
              - Merchant Account (Make Payment)
            </p>
            <p className="text-sm leading-6">
              Put your order ID as reference number
            </p>
          </div>
        </section>
        <section
          className={`${
            paymentOpen === 4 ? "" : "h-12"
          } overflow-hidden transition-all duration-300 ease-out`}
        >
          <label
            htmlFor="codOutsideDhaka"
            className="flex items-center gap-5 lg:gap-7 cursor-pointer px-3 h-12 border-b border-gray-300"
          >
            <input
              required
              type="radio"
              id="codOutsideDhaka"
              className="radio radio-sm"
              checked={paymentOpen === 4}
              onChange={() => setPaymentOpen(4)}
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
