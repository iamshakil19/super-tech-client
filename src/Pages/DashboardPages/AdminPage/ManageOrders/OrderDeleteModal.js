import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useDeleteOrderMutation } from "../../../../features/orders/ordersApi";
import { handleDeleteOrderModal } from "../../../../features/orders/ordersSlice";

const OrderDeleteModal = () => {
  const dispatch = useDispatch();
  const { deleteOrderModal, deletingId } = useSelector((state) => state.orders);
  const [deleteOrder, { isSuccess }] = useDeleteOrderMutation();

  const dandleDelete = () => {
    deleteOrder(deletingId);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully deleted");
      dispatch(handleDeleteOrderModal({ isOpen: false, _id: "" }));
    }
  }, [dispatch, isSuccess]);
  return (
    deleteOrderModal && (
      <div className="fixed w-full h-full inset-0 z-50 bg-black/70 poppins">
        <div className="rounded w-full max-w-lg space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <div>
            <p className="text-red-500 font-semibold">
              Are you sure you want to delete this order ?
            </p>

            <p className="text-red-500 mt-3 text-sm">
              Once you delete it, you can,t bring it back.
            </p>

            <div className="mt-5 flex justify-end gap-5">
              <button
                onClick={dandleDelete}
                className="py-2 px-4 bg-red-500 text-white rounded-md font-medium"
              >
                Delete
              </button>
              <button
                onClick={() =>
                  dispatch(handleDeleteOrderModal({ isOpen: false, _id: "" }))
                }
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

export default OrderDeleteModal;
