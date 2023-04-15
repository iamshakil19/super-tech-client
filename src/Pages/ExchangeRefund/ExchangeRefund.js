import React, { useEffect } from "react";
import PageTitle from "../../Utils/PageTitle";

const ExchangeRefund = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="poppins my-10 px-5">
      <PageTitle
        title={"Refund & Exchange - Super Tech Furniture & Interior"}
      ></PageTitle>

      <div className="max-w-3xl mx-auto text-black">
        <h3 className="lg:text-3xl text-xl text-center font-serif font-semibold">
          Refund & Exchange
        </h3>

        <p className="text-lg font-bold font-serif mt-5">
          SUPER TECH Refund Policy
        </p>
        <p className="mt-2 text-justify">
          Thank you for shopping at SUPER TECH!
        </p>
        <p className="mt-2 text-justify">
          We offer a refund and/or exchange within the first 5 days of your
          purchase, if 5 days have passed since your purchase, you will not be
          offered a refund and/or exchange of any kind.
        </p>

        <p className="text-lg font-bold font-serif mt-5">
          Eligibility for Return and Refunds
        </p>
        <ul className="list-disc list-inside mt-5">
          <li className="leading-relaxed">
            Your item must be unworn or unused and in the same condition that
            you received it.
          </li>
          <li className="leading-relaxed">
            The item must be in the original packaging.
          </li>
          <li className="leading-relaxed">
            To complete your return, we require a receipt or proof of purchase.
          </li>
          <li className="leading-relaxed">
            Only regular priced items may eligible to refunded/exchange. On
            sale/ discounted/ Customized (color, size and other) than the
            regular items cannot be refunded.
          </li>
        </ul>

        <p className="text-lg font-bold font-serif mt-5">
          Return/ Exchanges Charge:
        </p>
        <ul className="list-disc list-inside mt-5">
          <li className="leading-relaxed">
            20% of item invoiced – return fee applicable, if the request is
            eligible
          </li>
          <li className="leading-relaxed">
            15% of item invoiced – exchange fee applicable, if the request is
            eligible
          </li>
        </ul>

        <p className="text-lg font-bold font-serif mt-5">Damages and issues</p>
        <p className="mt-2 text-justify">
          Please inspect your order upon reception and contact us immediately if
          the item is defective, damaged or if you receive the wrong item so
          that we can evaluate the issue and make it right. After the delivery
          person leaves – a damage report may not be except (As per the rule of
          the delivery company)
        </p>
        <p className="mt-2 text-justify">
          To start a return or exchange, you can contact us at
          super.tech767@gmail.com If your return is accepted, we’ll send you a
          return shipping label, as well as for instructions on how and where to
          send your package. Items sent back to us without first requesting a
          return will not be accepted.
        </p>
        <p className="mt-2 text-justify">
          The fastest way to ensure you get what you want is to return the item
          you have, and once the return is accepted, make a separate purchase
          for the new item.
        </p>
        <p className="mt-2 text-justify">
          You can always contact us for any return questions at
          super.tech767@gmail.com
        </p>

        <p className="text-lg font-bold font-serif mt-5">
          Exceptions / non-returnable items
        </p>
        <p className="mt-2 text-justify">
          Certain types of items cannot be returned, on sale/ discounted/
          Customized in terms of color, size and other than the regular items
          cannot be refunded. Please get in touch if you have questions or
          concerns about your specific item.
        </p>

        <p className="text-lg font-bold font-serif mt-5">Refunds</p>
        <p className="mt-2 text-justify">
          We will notify you once we’ve received and inspected your return, and
          let you know if the refund was approved or not. If approved, you’ll be
          automatically refunded on your advised payment method. Please remember
          it can take up to 10 days for the refund of the agreed amount.
        </p>
      </div>
    </div>
  );
};

export default ExchangeRefund;
