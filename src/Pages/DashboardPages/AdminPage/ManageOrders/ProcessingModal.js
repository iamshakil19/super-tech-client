import React from "react";
import { useState } from "react";
import { useUpdateOrderStatusMutation } from "../../../../features/orders/ordersApi";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const ProcessingModal = ({ _id, processingModal, setProcessingModal }) => {
  const [deliveryDate, setDeliveryDate] = useState("");
  const [updateOrderStatus, { isSuccess }] = useUpdateOrderStatusMutation();

  const handleUpdate = () => {
    updateOrderStatus({
      id: _id,
      data: {
        status: "processing",
        deliveryDate: deliveryDate,
      },
    });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("The order has been processed successfully", {
        id: "processing",
      });
      setProcessingModal(false);
    }
  }, [isSuccess, setProcessingModal]);
  return (
    processingModal && (
      <div className="fixed w-full h-full inset-0 z-50 bg-black/70 poppins">
        <div className="rounded-lg w-full max-w-lg space-y-8 bg-[#F2F3F8] p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <div>
            <div>
              <input
                required
                onChange={(e) => setDeliveryDate(e.target.value)}
                type="date"
                placeholder="Discount number"
                className="outline-none px-2 border border-gray-600 py-1 w-full"
              />
            </div>

            <div className="mt-5 flex justify-end gap-5">
              <button
                onClick={handleUpdate}
                className="py-2 px-4 bg-blue-600 text-white rounded-md font-medium"
              >
                Update
              </button>
              <button
                onClick={() => setProcessingModal(false)}
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

export default ProcessingModal;
