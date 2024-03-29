import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleBillingAddress } from "../../../features/orders/ordersSlice";
import DifferentBillingAddressForm from "./DifferentBillingAddressForm";

const BillingSection = () => {
  const dispatch = useDispatch();
  const { billingAddress: billingAddressFromState } = useSelector(
    (state) => state.orders
  );
  const [billingAddress, setBillingAddress] = useState(
    billingAddressFromState?.sameAsShippingAddress
  );

  useEffect(() => {
    dispatch(handleBillingAddress({ sameAsShippingAddress: billingAddress }));
  }, [billingAddress, dispatch]);

  return (
    <div>
      <h2 className="text-xl mt-7">Billing address</h2>
      <p className="text-[15px] mt-2">
        Select the address that matches your card or payment method.
      </p>
      <div className="border border-gray-300 rounded-md mt-3">
        <section className="h-12 overflow-hidden transition-all duration-300 ease-in-out">
          <label
            htmlFor="sameAsShipping"
            className="flex items-center gap-5 lg:gap-7 cursor-pointer px-3 h-12 border-b border-gray-300"
          >
            <input
              required
              type="radio"
              id="sameAsShipping"
              className="radio radio-sm"
              checked={billingAddress}
              onChange={() => setBillingAddress(true)}
            />
            <label
              htmlFor="sameAsShipping"
              className="text-[15px] font-medium cursor-pointer"
            >
              Same as shipping address
            </label>
          </label>
        </section>

        <section
          className={`${
            billingAddress === false ? "" : "h-12"
          } overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <label
            htmlFor="differentBillingAddress"
            className="flex items-center gap-5 lg:gap-7 cursor-pointer px-3 h-12"
          >
            <input
              required
              type="radio"
              id="differentBillingAddress"
              className="radio radio-sm"
              checked={!billingAddress}
              onChange={() => setBillingAddress(false)}
            />
            <label
              htmlFor="differentBillingAddress"
              className="text-[15px] font-medium cursor-pointer"
            >
              Use a different billing address
            </label>
          </label>
          <div className="bg-slate-100/60 px-3 py-2">
            <DifferentBillingAddressForm />
          </div>
        </section>
      </div>
    </div>
  );
};

export default BillingSection;
