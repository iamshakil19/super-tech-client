import { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import bkashLogo from "../../../Assets/Others/bkash.png";
import nagadLogo from "../../../Assets/Others/nagad.png";
import qrCode from "../../../Assets/Others/qr-code.png";
import numberWithComma from "../../../Utils/numberWithComa";
import PageTitle from "../../../Utils/PageTitle";
import moment from "moment/moment";
const ThankYou = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderResponse } = useSelector((state) => state?.orders);

  useEffect(() => {
    if (orderResponse === null) {
      navigate("/");
    }
  }, [navigate, orderResponse]);
  const {
    orderId,
    paymentMethod,
    email,
    name,
    phoneNumber,
    division,
    area,
    streetAddress,
    shippingMethod,
    billingAddress,
    totalPrice,
    createdAt
  } = orderResponse || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-5 poppins">
      <PageTitle
        title={"Thank You - Super Tech Furniture & Interior"}
      ></PageTitle>
      <div className="border border-gray-300 rounded-md p-3">
        <AiOutlineCheckCircle className="mx-auto text-green-600" size={70} />
        <p className="text-center font-medium text-lg mt-3 font-sans">
          Hey {name}
        </p>
        <p className="text-center font-medium text-lg mt-3 font-sans">
          Thank You For Your Order
        </p>
        <p className="text-center font-bold text-2xl mt-3 [word-spacing:5px]">
          Your Order Is Confirmed!
        </p>
        <p className="text-center leading-9">
          Order Id : <span className="font-medium">#{orderId}</span>
        </p>
        <p className="text-sm text-center mb-3">
          You will be receive a confirmation email with order number shortly
        </p>
        <div className="border-b border-dashed max-w-xs mx-auto border-gray-400 my-2"></div>

        {(paymentMethod === "codOutsideDhaka" ||
          paymentMethod === "codInsideDhaka") && (
          <p className="text-sm text-justify">
            Payment can be done through bKash - Payment -{" "}
            <span className="text-pink-500 whitespace-nowrap">
              01716-926040
            </span>{" "}
            Or Nagad - Merchant Payment -{" "}
            <span className="text-orange-500 whitespace-nowrap">
              01716-926040
            </span>{" "}
            Or Through Cards. Please contact through our Facebook page for
            details. You can also call us at{" "}
            <span className="whitespace-nowrap">01716-926040</span>
          </p>
        )}
        {paymentMethod === "bKashorNagad" && (
          <div className="text-sm">
            <div className="xl:flex flex-row-reverse items-center justify-between gap-2">
              <div>
                <img className="w-24 mx-auto" src={bkashLogo} alt="" />
                <img className="w-36 mx-auto" src={qrCode} alt="" />
              </div>
              <div>
                <p>Go to your Bkash app</p>
                <p>Select " Payment " Option</p>
                <p>
                  Input "{" "}
                  <span className="font-medium text-pink-500">01404431331</span>{" "}
                  " as merchant number or Scan QR code
                </p>
                <p>Input the due amount and press next</p>
                <p>
                  Put your order ID as reference number and make the payment
                </p>
                <p>
                  We will check the transaction history and update your order
                </p>
              </div>
            </div>
            <div className="border-b border-dashed max-w-xs mx-auto border-gray-400 my-2"></div>

            <div className="xl:flex flex-row-reverse items-center justify-between gap-2">
              <div>
                <img className="w-24 mx-auto" src={nagadLogo} alt="" />
                <img className="w-36 mx-auto" src={qrCode} alt="" />
              </div>
              <div>
                <p>Go to your Nagad app</p>
                <p>Select " Merchant Pay " Option</p>
                <p>
                  Input "{" "}
                  <span className="font-medium text-orange-500">
                    01404431331
                  </span>{" "}
                  " as merchant number or Scan QR code
                </p>
                <p>Input the due amount and press next</p>
                <p>
                  Put your order ID as reference number and make the payment
                </p>
                <p>
                  We will check the transaction history and update your order
                </p>
              </div>
            </div>
          </div>
        )}

        {paymentMethod === "bankTransfer" && (
          <div className="text-sm">
            <p className="mb-2">
              You can transfer the invoice amount to following Bank Account:
            </p>
            <p>Bank Name: Jamuna Bank Limited</p>
            <p>Account Name: Super Tech Furniture & Interior</p>
            <p>
              Account Number:{" "}
              <span className="font-semibold">5008000013501</span>
            </p>
            <p>Routing Number: 130260431</p>
            <p>Branch Name: Banani</p>
            <div className="border-b border-dashed max-w-xs mx-auto border-gray-400 my-2"></div>
            <p>Bank Name: Prime Bank Limited</p>
            <p>Account Name: Super Tech Engineering</p>
            <p>
              Account Number:{" "}
              <span className="font-semibold">2152113021994</span>
            </p>
            <p>Routing Number: 170263106</p>
            <p>Branch Name: Mirpur-1</p>
            <p className="mt-2">
              Please call us at 01716-926040 to confirm the payment after the
              transfer
            </p>
          </div>
        )}
      </div>

      <div className="border border-gray-300 rounded-md p-3 mt-5">
        <h2 className="text-lg mb-2 font-medium">Order Updates</h2>
        <p className="text-sm">
          You'll get shipping and delivery updates by email and If you want, you
          can go to my orders from the account and see the order details.{" "}
          <Link className="underline hover:text-blue-400" to="/account/orders">
            My Orders
          </Link>
        </p>
      </div>
      <div className="border border-gray-300 rounded-md p-3 mt-5">
        <h2 className="text-lg mb-3 font-medium">Customer Information</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <h3 className="font-medium mb-2">Contact Information</h3>
            <p className="text-sm">{email}</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Payment method</h3>
            <p className="text-sm">
              {paymentMethod === "codInsideDhaka" &&
                "Cash On Delivery - Inside Dhaka"}
              {paymentMethod === "codOutsideDhaka" &&
                "Cash On Delivery - Outside Dhaka"}
              {paymentMethod === "bKashorNagad" && "bkash Or Nagad"}
              {paymentMethod === "bankTransfer" &&
                "Bank Transfer - BEFTN/NPSB"}{" "}
              -
              <span className="text-sm font-semibold whitespace-nowrap">
                ৳ {totalPrice ? numberWithComma(totalPrice) : ""}
              </span>
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Shipping Address</h3>
            <p className="text-sm">{name}</p>
            <p className="text-sm">{phoneNumber}</p>
            <p className="text-sm">{division}</p>
            <p className="text-sm">{area}</p>
            <p className="text-sm">{streetAddress}</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Billing Address</h3>
            {billingAddress?.sameAsShippingAddress ? (
              <p className="text-sm">Same as shipping address</p>
            ) : (
              <>
                <p className="text-sm">{billingAddress?.name}</p>
                <p className="text-sm">{billingAddress?.phoneNumber}</p>
                <p className="text-sm">{billingAddress?.division}</p>
                <p className="text-sm">{billingAddress?.area}</p>
                <p className="text-sm">{billingAddress?.streetAddress}</p>
              </>
            )}
          </div>
          <div>
            <h3 className="font-medium mb-2">Order Date</h3>
            <p className="text-sm">{moment(createdAt).format("lll")}</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Shipping Method</h3>
            <p className="text-sm">
              {shippingMethod === "insideDhaka"
                ? "Inside Dhaka City"
                : "Outside Dhaka City"}
            </p>
          </div>
        </div>
      </div>
      <div className="my-10 sm:flex justify-between items-center flex-row-reverse">
        <div>
          <Link
            to="/"
            className="bg-black lg:bg-slate-700 lg:hover:bg-black text-white font-semibold w-full py-3 px-5 rounded-md transition-all ease-in-out duration-200 cursor-pointer text-sm"
          >
            Continue Shopping
          </Link>
        </div>
        <p className="flex items-center text-sm mt-5 sm:mt-0">
          Need help?{" "}
          <Link to="/contact-us" className="">
            <span className=" ml-2 whitespace-nowrap font-medium">
              Contact Us
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
