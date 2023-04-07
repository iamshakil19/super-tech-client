import React, { useState } from "react";
import DiscountModal from "./DiscountModal";

const Settings = () => {
  const [discountModalOpen, setDiscountModalOpen] = useState(false);
  return (
    <div className="poppins">
      <p className="">
        <span className="font-semibold">Update All Product Discount</span>
        <button
          onClick={() => setDiscountModalOpen(true)}
          className="ml-5 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500"
        >
          Update
        </button>
      </p>
      <DiscountModal
        setDiscountModalOpen={setDiscountModalOpen}
        discountModalOpen={discountModalOpen}
      />
    </div>
  );
};

export default Settings;
