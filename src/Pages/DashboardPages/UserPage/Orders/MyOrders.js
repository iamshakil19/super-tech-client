import React, { useEffect, useState } from "react";
import { useGetOrderByEmailQuery } from "../../../../features/orders/ordersApi";
import { useGetCurrentUserQuery } from "../../../../features/user/usersApi";
import Error from "../../../Shared/Error/Error";
import Loading from "../../../Shared/Loading/Loading";
import emptyOrderImg from "../../../../Assets/Others/emptyOrder.gif";
import MyOrdersRow from "./MyOrdersRow";

const myOrdersData = [
  {
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
  {
    name: "Shakil Ahmed",
    number: "01877018851",
    date: "2023-2-25",
    productName: "high back chair with head rest and something",
    city: "Dhaka",
    area: "Mirpur",
    streetAddress:
      "Mirpur 13, Block B, Road 9, House 13, Floor 2, Front  Side dffd dfdf dfdf dfdf dfdf",
    quantity: 6,
    status: "pending",
  },
];

const MyOrders = () => {
  const [limit, setLimit] = useState(10);
  const {
    data: user,
    isError: isCurrentUserError,
    isLoading: currentUserLoading,
    error: currentError,
  } = useGetCurrentUserQuery();
  const { email } = user?.data || {};

  const {
    data: ordersData,
    isError,
    isLoading,
    error,
  } = useGetOrderByEmailQuery(email);

  const orders = ordersData?.data || [];

  let content = null;

  if (isLoading && currentUserLoading) {
    content = <Loading />;
  } else if (
    !isLoading &&
    !currentUserLoading &&
    isError &&
    isCurrentUserError
  ) {
    content = <Error error="There was an error" />;
  } else if (!isLoading && !isError && orders?.length === 0) {
    content = (
      <div className="flex justify-center items-center min-h-screen poppins">
        <div>
          <img className="block mx-auto w-44" src={emptyOrderImg} alt="" />
          <p className="text-center font-semibold text-slate-800 text-xl">
            No Orders Yet
          </p>
        </div>
      </div>
    );
  } else if (!isLoading && !isError && orders?.length > 0) {
    content = (
      <div className="bg-[#F2F3F8] p-3">
        <h2 className="text-xl font-serif font-semibold my-5">All Orders</h2>
        <div className="my-5 sm:flex">
          <div className="flex items-center">
            <p className="mr-2">Show :</p>
            <select
              onChange={(e) => setLimit(e.target.value)}
              defaultValue={limit}
              className="py-1.5 px-2 bg-slate-100  font-medium outline-none focus:border-slate-700 border rounded-md poppins cursor-pointer w-40 border-slate-300"
            >
              <option selected className="font-medium" value="10">
                10
              </option>
              <option className="font-medium" value="15">
                15
              </option>
              <option className="font-medium" value="25">
                25
              </option>
              <option className="font-medium" value="50">
                50
              </option>
              <option className="font-medium" value="100">
                100
              </option>
            </select>
          </div>
        </div>

        <div class="overflow-x-auto z-10 shadow-lg sm:rounded-lg poppins pb-20">
          <table class="w-full text-left">
            <thead class="text-sm text-white uppercase bg-slate-900">
              <tr>
                <th class="px-6 py-4 whitespace-nowrap">SL</th>
                <th class="px-6 py-4 whitespace-nowrap xl:hidden">Details</th>
                <th class="px-6 py-4 whitespace-nowrap">Name</th>
                <th class="px-6 py-4 whitespace-nowrap">Number</th>
                <th class="px-6 py-4 whitespace-nowrap">Date</th>
                <th class="px-6 py-4 whitespace-nowrap">Product</th>
                <th class="px-6 py-4 whitespace-nowrap">City</th>
                <th class="px-6 py-4 whitespace-nowrap">Area</th>
                <th class="px-6 py-4 whitespace-nowrap">Street Address</th>
                <th class="px-6 py-4 whitespace-nowrap">Quantity</th>
                <th class="px-6 py-4 whitespace-nowrap">Price</th>
                <th class="px-6 py-4 whitespace-nowrap">Status</th>
                <th class="px-6 py-4 whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {orders?.map((myOrder, i) => (
                <MyOrdersRow myOrder={myOrder} key={i} i={i + 1} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return content;
};

export default MyOrders;
