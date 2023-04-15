import React, { useEffect } from "react";
import PageTitle from "../../Utils/PageTitle";

const ShippingPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="poppins my-10 px-5">
      <PageTitle
        title={"Shipping Policy - Super Tech Furniture & Interior"}
      ></PageTitle>

      <div className="max-w-3xl mx-auto text-black">
        <h3 className="lg:text-3xl text-xl text-center font-serif font-semibold">
          Shipping Policy
        </h3>

        <p className="text-lg font-bold font-serif mt-5">Delivery Time</p>
        <p className="mt-2 text-justify">
          Standard delivery time is between 7 to 10 working days for regular
          orders but for corporate and special cases it may take much time. As
          we produce products on-demand that’s why delivery time may vary
          depending on factory workload. However, the customers will be informed
          regarding the delivery timeline.
        </p>

        <p className="text-lg font-bold font-serif mt-5">Delivery Method:</p>
        <p className="mt-2 text-justify">
          Inside Dhaka city, we do provide home delivery and provide free
          assembly using our /third party transport. For outside Dhaka city we
          do provide door to door shipping, in that case, we don’t provide
          assemble service physically but we do help to assemble via video call
          if required.
        </p>

        <p className="text-lg font-bold font-serif mt-5">Assembling</p>
        <p className="mt-2 text-justify">
          In Dhaka city, customers will get fitting service on the same day of
          delivery. For outside Dhaka delivery customers, self-assembly is
          required.
        </p>

        <p className="text-lg font-bold font-serif mt-5">Mode of Payment</p>
        <p className="mt-2 text-justify">
          For the range of shopping up to BDT Fifty Thousand order the 10%
          payment has to pay on order as confirmation payment, rest have to pay
          one the same day of delivery. For the above shopping volume and
          corporate order, the confirmation money amount is 50% of the total
          shopping volume.
        </p>

        <p className="text-lg font-bold font-serif mt-5">
          Order Change or cancellation
        </p>
        <p className="mt-2 text-justify">
          Regular orders can be changed or cancelled within 2 days. A
          cancellation charge is applicable depending on work progress.{" "}
        </p>

        <p className="text-lg font-bold font-serif mt-5">Service Warranty</p>
        <p className="mt-2 text-justify">
          1-year free service Warranty for any manufacturing fault. No
          warranty/guarantee for glass, fabric and artificial leather.
        </p>

        <p className="text-lg font-bold font-serif mt-5">Delay Penalty</p>
        <p className="mt-2 text-justify">
          SUPER TECH will pay a delayed penalty valuing 0.5% of the value of the
          goods per week if the delivery is not done within the standard
          deadline. However, there will be 7 days buffer before any such penalty
          is applied.
        </p>

        <p className="text-lg font-bold font-serif mt-5">
          Inventory Holding Cost
        </p>
        <p className="mt-2 text-justify">
          The customer will pay inventory holding cost valuing 0.5% of the value
          of the goods per week if the customer doesn’t take delivery of the
          completed goods. However, there will be 7 days buffer before any such
          cost becomes due.
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
