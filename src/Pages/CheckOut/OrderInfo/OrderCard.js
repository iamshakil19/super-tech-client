import React from 'react';

const OrderCard = () => {
    return (
        <div className="flex justify-between gap-5 items-center mb-5">
        <div className="flex items-center gap-5">
          <div className="indicator">
            <span className="indicator-item badge bg-gray-600">8</span>
            <img
              className="w-14 lg:w-20 rounded-lg border border-gray-300 p-2"
              src="https://cdn.shopify.com/s/files/1/0521/4434/1176/products/J17G120L_BK_02_Black_720x.webp?v=1673788413"
              alt=""
            />
          </div>
          <div>
            <h2 className="font-medium text-sm lg:text-base overflow-hidden">GRID X Steelcase Leap</h2>
            <p className="text-xs lg:text-sm">Black Fabric</p>
          </div>
        </div>
        <div>
          <p className="font-semibold whitespace-nowrap text-sm lg:text-base">৳ 145,000.00</p>
        </div>
      </div>
    );
};

export default OrderCard;