import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useDeleteProductMutation } from "../../../../features/products/productsApi";
import { handleDeleteProductModal } from "../../../../features/products/productsSlice";

const ProductDeleteModal = () => {
  const dispatch = useDispatch();
  const { deleteProductModal, deletingId } = useSelector(
    (state) => state.productsFilter
  );
  const [deleteProduct, { isSuccess }] = useDeleteProductMutation();

  const dandleDelete = () => {
    deleteProduct(deletingId);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully deleted");
      dispatch(handleDeleteProductModal({ isOpen: false, _id: "" }));
    }
  }, [dispatch, isSuccess]);
  return (
    deleteProductModal && (
      <div className="fixed w-full h-full inset-0 z-50 bg-black/70 cursor-pointer poppins">
        <div className="rounded w-full max-w-lg space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <div>
            <p className="text-red-500 font-semibold">
              Are you sure you want to delete this product ?
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
                  dispatch(handleDeleteProductModal({ isOpen: false, _id: "" }))
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

export default ProductDeleteModal;
