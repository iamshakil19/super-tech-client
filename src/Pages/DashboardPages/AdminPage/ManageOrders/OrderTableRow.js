import moment from "moment/moment";
import React, { useEffect } from "react";
import numberWithComma from "../../../../Utils/numberWithComa";
import { useUpdateOrderStatusMutation } from "../../../../features/orders/ordersApi";
import {
  handleDeleteOrderModal,
  handleOrderDetails,
} from "../../../../features/orders/ordersSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useState } from "react";
import ProcessingModal from "./ProcessingModal";
const OrderTableRow = ({ i, order }) => {
  const dispatch = useDispatch();
  const [processingModal, setProcessingModal] = useState(false);
  const [updateOrderStatus, { isSuccess }] = useUpdateOrderStatusMutation();
  const {
    _id,
    orderId,
    name,
    email,
    phoneNumber,
    division,
    createdAt,
    totalPrice,
    area,
    streetAddress,
    totalQuantity,
    cart,
    status,
  } = order;

  const handleStatus = (e, id) => {
    const status = e.target.value;
    if (e.target.value === "processing") {
      console.log("processing");
      return setProcessingModal(true);
    }
    updateOrderStatus({ id, data: { status, deliveryDate: "" } });
  };
  console.log(processingModal);
  const handleDetails = () => {
    dispatch(handleOrderDetails(order));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully updated the order", { id: "order" });
    }
  }, [isSuccess]);

  return (
    <tr className="bg-white border-b poppins border-gray-300 hover:bg-gray-200">
      <td className="px-6 py-4 whitespace-nowrap text-[15px]">{i}</td>
      <td className="px-6 py-4 whitespace-nowrap capitalize text-[15px]">
        <button
          onClick={handleDetails}
          className="bg-slate-800 text-white py-0.5 px-3 rounded-full text-sm font-medium"
        >
          Details
        </button>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-[15px]">{orderId}</td>
      <td className="px-6 py-4 whitespace-nowrap capitalize text-[15px]">
        {name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-[15px]">{phoneNumber}</td>

      <td className="px-6 py-4 whitespace-nowrap text-[15px]">
        {moment(createdAt).format("lll")}
      </td>

      <td className="px-6 py-4 whitespace-nowrap capitalize text-[15px]">
        {division}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-[15px]">
        {totalQuantity}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-[15px] font-semibold">
        ৳ {totalPrice ? numberWithComma(totalPrice) : ""}
      </td>
      <td>
        <select
          disabled={status === "completed"}
          defaultValue={status}
          onChange={(e) => handleStatus(e, _id)}
          className={`outline-none border rounded-full text-sm px-2 font-medium ${
            status === "pending" &&
            "bg-orange-200 text-orange-600 border-orange-300"
          } ${
            status === "processing" &&
            "bg-blue-200 text-blue-600 border-blue-300"
          } ${
            status === "completed" &&
            "bg-green-200 text-green-600 border-green-300"
          } ${
            status === "canceled" && "bg-red-200 text-red-600 border-red-300"
          }`}
        >
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="completed">Completed</option>
          <option value="canceled">Canceled</option>
        </select>
      </td>
      <td className="px-6 py-4 whitespace-nowrap capitalize text-[15px]">
        <button
          onClick={() =>
            dispatch(handleDeleteOrderModal({ isOpen: true, _id: _id }))
          }
          className="bg-red-500 text-white py-0.5 px-3 rounded-full text-sm font-medium"
        >
          Delete
        </button>
      </td>
      <ProcessingModal
        processingModal={processingModal}
        setProcessingModal={setProcessingModal}
        _id={_id}
      />
    </tr>
  );
};

export default OrderTableRow;
