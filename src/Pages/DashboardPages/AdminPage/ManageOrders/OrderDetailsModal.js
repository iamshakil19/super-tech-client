import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCloseCircle } from "react-icons/io";
import { handleOrderDetails } from "../../../../features/orders/ordersSlice";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import numberWithComma from "../../../../Utils/numberWithComa";
import { AiOutlineClockCircle } from "react-icons/ai";
import moment from "moment";
const OrderDetailsModal = () => {
  const dispatch = useDispatch();
  const { orderForDetails } = useSelector((state) => state.orders);
  const {
    area,
    billingAddress,
    cart,
    company,
    division,
    email,
    name,
    phoneNumber,
    orderId,
    postalCode,
    paymentMethod,
    shippingCost,
    shippingMethod,
    status,
    streetAddress,
    subTotal,
    totalPrice,
    totalQuantity,
    createdAt,
    deliveryDate,
    _id,
    advanceAmount,
  } = orderForDetails;
  return (
    _id && (
      <div className="fixed overflow-auto w-full h-full inset-0 z-50 bg-black/70 poppins">
        <div className="rounded overflow-auto w-full max-w-2xl space-y-8 bg-white p-5 absolute translate-y-20 left-1/2 z-20 -translate-x-1/2">
          <div>
            <div className="flex justify-between">
              <p>
                {status === "completed" && (
                  <BsFillCheckCircleFill size={25} className="text-green-500" />
                )}
                {status === "canceled" && (
                  <MdCancel size={28} className="text-red-500" />
                )}
                {status === "pending" && (
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-300 fill-orange-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                )}
              </p>
              <p>
                <IoMdCloseCircle
                  size={32}
                  className="cursor-pointer"
                  onClick={() => dispatch(handleOrderDetails({}))}
                />
              </p>
            </div>
            <h2 className="text-xl font-semibold font-serif mb-3">
              Order Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className=" sm:mb-0">
                <h3 className="mb-2 font-semibold">Shipping Info</h3>
                <p className="text-sm leading-relaxed">
                  Order Id : <span className="font-medium">{orderId}</span>
                </p>
                <p className="text-sm leading-relaxed">
                  Name : <span className="font-medium capitalize">{name}</span>
                </p>
                <p className="text-sm leading-relaxed">
                  Number : <span className="font-medium">{phoneNumber}</span>
                </p>
                <p className="text-sm leading-relaxed">
                  Email : <span className="font-medium">{email}</span>
                </p>
                {company && (
                  <p className="text-sm leading-relaxed">
                    Company : <span className="font-medium">{company}</span>
                  </p>
                )}
                <p className="text-sm leading-relaxed">
                  City :{" "}
                  <span className="font-medium capitalize">{division}</span>
                </p>
                <p className="text-sm leading-relaxed">
                  Area : <span className="font-medium capitalize">{area}</span>
                </p>
                {postalCode && (
                  <p className="text-sm leading-relaxed">
                    Postal Code :{" "}
                    <span className="font-medium capitalize">{postalCode}</span>
                  </p>
                )}
                <p className="text-sm leading-relaxed">
                  Street Address :{" "}
                  <span className="font-medium capitalize">
                    {streetAddress}
                  </span>
                </p>
              </div>
              {!billingAddress.sameAsShippingAddress && (
                <div className="">
                  <h3 className="mb-2 font-semibold">Billing Info</h3>

                  <p className="text-sm leading-relaxed">
                    Name :{" "}
                    <span className="font-medium capitalize">
                      {billingAddress.name}
                    </span>
                  </p>
                  <p className="text-sm leading-relaxed">
                    Number :{" "}
                    <span className="font-medium">
                      {billingAddress.phoneNumber}
                    </span>
                  </p>
                  {billingAddress.company && (
                    <p className="text-sm leading-relaxed">
                      Company :{" "}
                      <span className="font-medium">
                        {billingAddress.company}
                      </span>
                    </p>
                  )}
                  <p className="text-sm leading-relaxed">
                    City :{" "}
                    <span className="font-medium capitalize">
                      {billingAddress.division}
                    </span>
                  </p>
                  <p className="text-sm leading-relaxed">
                    Area :{" "}
                    <span className="font-medium capitalize">
                      {billingAddress.area}
                    </span>
                  </p>
                  <p className="text-sm leading-relaxed">
                    Street Address :{" "}
                    <span className="font-medium capitalize">
                      {billingAddress.streetAddress}
                    </span>
                  </p>
                  {postalCode && (
                    <p className="text-sm leading-relaxed">
                      Postal Code :{" "}
                      <span className="font-medium capitalize">
                        {postalCode}
                      </span>
                    </p>
                  )}
                </div>
              )}
              <div className="">
                <h3 className="mb-1 font-semibold ">Order Date</h3>
                <p className="mb-5 flex items-center gap-2">
                  <AiOutlineClockCircle />{" "}
                  <span className="text-sm">
                    {moment(createdAt).format("lll")}
                  </span>
                </p>

                {deliveryDate && (
                  <>
                    <h3 className="mb-1 font-semibold ">Delivery Date</h3>
                    <p className="mb-5 flex items-center gap-2">
                      <AiOutlineClockCircle />{" "}
                      <span className="text-sm">
                        {moment(deliveryDate).format("ll")}
                      </span>
                    </p>
                  </>
                )}

                <h3 className="mb-2 font-semibold ">Amount</h3>
                <p className="text-sm leading-relaxed">
                  Subtotal :{" "}
                  <span className="font-medium">
                    ৳ {subTotal ? numberWithComma(subTotal) : ""}
                  </span>
                </p>
                <p className="text-sm leading-relaxed">
                  Shipping Cost :{" "}
                  <span className="font-medium">৳ {shippingCost}</span>
                </p>
                <p className="border-b border-gray-300 max-w-xs my-2"></p>
                <p className="text-sm leading-relaxed font-semibold">
                  Total :{" "}
                  <span className="">
                    ৳ {totalPrice ? numberWithComma(totalPrice) : ""}
                  </span>
                </p>
                <p className="text-sm leading-relaxed font-semibold">
                  Advance :{" "}
                  <span className="">
                    ৳ {advanceAmount ? numberWithComma(advanceAmount) : ""}
                  </span>
                </p>
                <p className="border-b border-gray-300 max-w-xs my-2"></p>
                <p className="text-sm leading-relaxed font-semibold">
                  Due Amount :{" "}
                  <span className="">
                    ৳{" "}
                    {totalPrice
                      ? numberWithComma(totalPrice - advanceAmount)
                      : ""}
                  </span>
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  Payment Method :{" "}
                  <span className="font-medium">
                    {paymentMethod === "codInsideDhaka" &&
                      "Cash On Delivery Inside Dhaka"}
                    {paymentMethod === "bankTransfer" && "bank Transfer"}{" "}
                    {paymentMethod === "bKashorNagad" && "bKash Or Nagad"}
                    {paymentMethod === "codOutsideDhaka" &&
                      "Cash On Delivery Outside Dhaka"}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Products</h3>

            {cart?.map((product) => (
              <div
                key={product._id}
                className="border-b py-2 grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                <div>
                  <p className="text-sm leading-relaxed">
                    Name : <span className="font-medium">{product.name}</span>
                  </p>
                  <p className="text-sm leading-relaxed">
                    Quantity :{" "}
                    <span className="font-medium">{product.quantity}</span>
                  </p>
                  {product.discount && (
                    <p className="text-sm leading-relaxed">
                      Discount :{" "}
                      <span className="font-medium">{product.discount} %</span>
                    </p>
                  )}
                  <p className="text-sm leading-relaxed">
                    Price : {""} ৳{" "}
                    <span className="font-medium">
                      {product.price ? numberWithComma(product.price) : ""}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-relaxed">
                    Color : <span className="font-medium">{product.color}</span>
                  </p>
                  <p className="text-sm leading-relaxed">
                    Color Cost :{" "}
                    <span className="font-medium">{product.colorCost}</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-relaxed">
                    Size : <span className="font-medium">{product.size}</span>
                  </p>
                  <p className="text-sm leading-relaxed">
                    Size Cost :{" "}
                    <span className="font-medium">{product.sizeCost}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default OrderDetailsModal;
