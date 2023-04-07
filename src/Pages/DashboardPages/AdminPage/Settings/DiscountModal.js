import React, { useEffect } from "react";
import { useState } from "react";
import {
  useGetAllProductsQuery,
  useProductBulkUpdateMutation,
} from "../../../../features/products/productsApi";
import { toast } from "react-hot-toast";

const DiscountModal = ({ setDiscountModalOpen, discountModalOpen }) => {
  const [productBulkUpdate, { isSuccess }] = useProductBulkUpdateMutation();
  const {
    data: allProducts,
    isLoading,
    isError,
    error,
  } = useGetAllProductsQuery();

  const { products } = allProducts?.data || {};
  const ids = [...new Set(products?.map((item) => item._id))];
  const [discount, setDiscount] = useState(0);
  const data = {
    ids,
    data: { discount: discount },
  };
  const handleUpdate = () => {
    productBulkUpdate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully discount updated for all products", {
        id: "bulkUpdate",
      });
    }
    setDiscountModalOpen(false);
  }, [isSuccess, setDiscountModalOpen]);

  return (
    discountModalOpen && (
      <div className="fixed w-full h-full inset-0 z-50 bg-black/70 poppins">
        <div className="rounded-lg w-full max-w-lg space-y-8 bg-[#F2F3F8] p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <div>
            <p className="text-orange-400 font-semibold mb-1">Warning</p>
            <p className="text-orange-400 font-semibold text-sm mb-3">
              If you update the discount using this then all products will be
              discounted.
            </p>

            <div>
              <input
                onChange={(e) => setDiscount(e.target.value)}
                type="number"
                placeholder="Discount number"
                className="outline-none px-2 border border-gray-600 py-1"
              />
            </div>

            <div className="mt-5 flex gap-5">
              <button
                onClick={handleUpdate}
                className="py-2 px-4 bg-blue-600 text-white rounded-md font-medium"
              >
                Update
              </button>
              <button
                onClick={() => setDiscountModalOpen(false)}
                className="py-2 px-4 bg-slate-800 text-white rounded-md font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DiscountModal;
