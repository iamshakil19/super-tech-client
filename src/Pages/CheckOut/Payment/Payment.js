import { RiArrowLeftSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import BillingSection from "./BillingSection";
import PaymentSection from "./PaymentSection";

const Payment = () => {
  const navigate = useNavigate();
  const handleCompleteOrder = () => {
    console.log("handleCompleteOrder");
    navigate("/checkouts/thank_you");
  };
  return (
    <div className="my-5 lg:my-10 poppins">
      <div className="border border-gray-300 rounded-md p-3 text-[15px]">
        <section className="flex justify-between">
          <div className="sm:flex gap-7 lg:gap-7">
            <p className="font-medium w-16">Contact</p>
            <p className="text-sm">shakil@gmail.com, 01877018851</p>
          </div>
          <div>
            <Link to="/checkouts" className="cursor-pointer text-sm">
              Change
            </Link>
          </div>
        </section>
        <div className="border-b my-3 border-gray-300 mx-5"></div>
        <section className="flex justify-between">
          <div className="sm:flex gap-7 lg:gap-7">
            <p className="font-medium whitespace-nowrap w-16">Ship To </p>
            <p className="capitalize text-sm">
              mirpur 13, block B, Road 9, Mirpur, Dhaka
            </p>
          </div>
          <div>
            <Link to="/checkouts" className="cursor-pointer text-sm">
              Change
            </Link>
          </div>
        </section>
        <div className="border-b my-3 border-gray-300 mx-5"></div>
        <section className="flex justify-between">
          <div className="sm:flex gap-7 lg:gap-7">
            <p className="font-medium whitespace-nowrap w-16">Method </p>
            <p className="capitalize text-sm">
              Outside Dhaka - <span className="font-semibold">৳ 450</span>
            </p>
          </div>
          <div>
            <Link to="/checkouts/shipping" className="cursor-pointer text-sm">
              Change
            </Link>
          </div>
        </section>
      </div>

      <PaymentSection />
      <BillingSection />

      <div className="my-5 sm:flex justify-between items-center flex-row-reverse">
        <div>
          <button
            onClick={handleCompleteOrder}
            className="bg-black lg:bg-slate-700 lg:hover:bg-black text-white font-semibold w-full py-3 px-5 rounded-md transition-all ease-in-out duration-200 cursor-pointer text-sm"
          >
            Complete Order
          </button>
        </div>
        <Link
          to="/checkouts/shipping"
          className="flex items-center justify-center mt-5 sm:mt-0"
        >
          <RiArrowLeftSLine size={25} />
          <p className="text-sm ml-2 whitespace-nowrap">Return to shipping</p>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
