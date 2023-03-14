import React from "react";

const OrderInfo = () => {
  return (
    <div className="p-2 poppins max-w-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <div className="indicator">
            <span className="indicator-item badge bg-gray-600">8</span>
            <img
              className="w-20 rounded-lg border border-gray-300 p-2"
              src="https://cdn.shopify.com/s/files/1/0521/4434/1176/products/J17G120L_BK_02_Black_720x.webp?v=1673788413"
              alt=""
            />
          </div>
          <div>
            <h2 className="font-medium">GRID X Steelcase Leap</h2>
            <p className="text-sm">Black Fabric</p>
          </div>
        </div>
        <div>
          <p className="font-medium">৳ 145,000.00</p>
        </div>
      </div>
      <div className="border-b border-gray-300 my-5"></div>
      <div className="flex items-center gap-5">
        <input
          className="outline-none border border-gray-300 px-3 py-2 rounded-md w-full focus:border-gray-700 transition-all duration-200"
          placeholder="Promo Code"
          type="text"
          name=""
          id=""
        />
        <button className="bg-slate-400 text-white px-4 py-2 rounded-md font-semibold">
          Apply
        </button>
      </div>
      <div className="border-b border-gray-300 my-5"></div>
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
