import React from "react";
import numberWithComma from "../../../Utils/numberWithComa";

const OrderCard = ({ cartProduct }) => {
  return (
    <div className="flex justify-between gap-5 items-center mb-5">
      <div className="flex items-center gap-5">
        <div className="indicator">
          <span className="indicator-item badge bg-gray-600">
            {cartProduct?.quantity}
          </span>
          <img
            className="w-14 lg:w-20 rounded-lg border border-gray-300 p-2"
            src={`${process.env.REACT_APP_IMG_URL + cartProduct?.primaryImage}`}
            alt=""
          />
        </div>
        <div>
          <h2 className="font-medium text-sm lg:text-base overflow-hidden max-w-xs">
            {cartProduct?.name}
          </h2>
          {cartProduct?.color && (
            <p className="text-xs lg:text-sm">{cartProduct?.color}</p>
          )}
          {cartProduct?.size && (
            <p className="text-xs lg:text-sm">{cartProduct?.size}</p>
          )}
        </div>
      </div>
      <div>
        <p className="font-semibold whitespace-nowrap text-sm lg:text-base">
          ৳{" "}
          {numberWithComma(
            (cartProduct?.price +
              cartProduct?.colorCost +
              cartProduct?.sizeCost) *
              cartProduct?.quantity
          )}
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
