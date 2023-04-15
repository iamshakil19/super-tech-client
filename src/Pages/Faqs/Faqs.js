import React, { useEffect } from "react";
import PageTitle from "../../Utils/PageTitle";
import { IoMdArrowDropdown } from "react-icons/io";
const Faqs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="poppins my-10 px-5">
      <PageTitle title={"FAQS - Super Tech Furniture & Interior"}></PageTitle>

      <div className="max-w-3xl mx-auto text-black">
        <h3 className="lg:text-3xl text-xl text-center font-serif font-semibold">
          FAQS
        </h3>

        <div className="collapse mt-5">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-100">
            <p className="flex justify-between items-center ">
              <span>What types of furniture do you offer?</span>
              <span>
                <IoMdArrowDropdown />
              </span>
            </p>
          </div>
          <div className="collapse-content mt-2">
            <p>
              We offer a wide range of furniture for home and office, including
              sofas, tables, chairs, beds, and storage solutions.
            </p>
          </div>
        </div>

        <div className="collapse mt-2">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-100">
            <p className="flex justify-between items-center ">
              <span>Do you offer custom furniture?</span>
              <span>
                <IoMdArrowDropdown />
              </span>
            </p>
          </div>
          <div className="collapse-content mt-2">
            <p>
              Yes, we offer custom furniture options for many of our products.
              You can work with our design team to create a unique piece that
              meets your specific needs and style preferences.
            </p>
          </div>
        </div>

        <div className="collapse mt-2">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-100">
            <p className="flex justify-between items-center ">
              <span>How do I place an order?</span>
              <span>
                <IoMdArrowDropdown />
              </span>
            </p>
          </div>
          <div className="collapse-content mt-2">
            <p>
              You can place an order on our website or can knock us in Facebook
              Messanger or you can visit our Store and speak with one of our
              consultants.
            </p>
          </div>
        </div>

        <div className="collapse mt-2">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-100">
            <p className="flex justify-between items-center ">
              <span>What is your return policy?</span>
              <span>
                <IoMdArrowDropdown />
              </span>
            </p>
          </div>
          <div className="collapse-content mt-2">
            <p>To learn more about the refund policy please visit the link</p>
          </div>
        </div>

        <div className="collapse mt-2">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-100">
            <p className="flex justify-between items-center ">
              <span>How long does delivery take?</span>
              <span>
                <IoMdArrowDropdown />
              </span>
            </p>
          </div>
          <div className="collapse-content mt-2">
            <p>
              Delivery times vary depending on the product, your location and
              order queue. Our team will provide you with an estimated delivery
              time when you place your order.
            </p>
          </div>
        </div>

        <div className="collapse mt-2">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-100">
            <p className="flex justify-between items-center ">
              <span>Do you offer assembly services?</span>
              <span>
                <IoMdArrowDropdown />
              </span>
            </p>
          </div>
          <div className="collapse-content mt-2">
            <p>
              Yes, we offer assembly services inside Dhaka city only. Please
              contact us for more information.
            </p>
          </div>
        </div>

        <div className="collapse mt-2">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-100">
            <p className="flex justify-between items-center ">
              <span>Do you offer any discounts or promotions?</span>
              <span>
                <IoMdArrowDropdown />
              </span>
            </p>
          </div>
          <div className="collapse-content mt-2">
            <p>
              Yes, we occasionally offer discounts and promotions on select
              products. You can sign up for our newsletter to stay updated on
              the latest deals and offers.
            </p>
          </div>
        </div>

        <div className="collapse mt-2">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-100">
            <p className="flex justify-between items-center ">
              <span>Do you have a warranty on your products?</span>
              <span>
                <IoMdArrowDropdown />
              </span>
            </p>
          </div>
          <div className="collapse-content mt-2">
            <p>
              Yes, we offer a warranty on most of our products for manufaturing
              defect. The length of the warranty will vary depending on the
              product.
            </p>
          </div>
        </div>

        <div className="collapse mt-2">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-100">
            <p className="flex justify-between items-center ">
              <span>Do you offer delivery to my area?</span>
              <span>
                <IoMdArrowDropdown />
              </span>
            </p>
          </div>
          <div className="collapse-content mt-2">
            <p>
              We offer delivery to most locations within the Bangladesh. Inside
              Dhaka city we do provide delivery using your company vehicle and
              for outside Dhaka city we use courier service they provide door to
              door shipping.
            </p>
          </div>
        </div>

        <div className="collapse mt-2">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-100">
            <p className="flex justify-between items-center ">
              <span>Do you offer delivery to my area?</span>
              <span>
                <IoMdArrowDropdown />
              </span>
            </p>
          </div>
          <div className="collapse-content mt-2">
            <p>
              We offer delivery to most locations within the Bangladesh. Inside
              Dhaka city we do provide delivery using your company vehicle and
              for outside Dhaka city we use courier service they provide door to
              door shipping.
            </p>
          </div>
        </div>

        <div className="collapse mt-2">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-100">
            <p className="flex justify-between items-center ">
              <span>Do you offer a trade discount?</span>
              <span>
                <IoMdArrowDropdown />
              </span>
            </p>
          </div>
          <div className="collapse-content mt-2">
            <p>
              Yes, we offer trade discounts to interior designers, architects,
              and other industry professionals. Please contact us for more
              information.
            </p>
          </div>
        </div>

        <div className="collapse mt-2">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-100">
            <p className="flex justify-between items-center ">
              <span>Can I cancel my order?</span>
              <span>
                <IoMdArrowDropdown />
              </span>
            </p>
          </div>
          <div className="collapse-content mt-2">
            <p>
              If you need to cancel your order, please contact us as soon as
              possible. If your order has not yet processed, we may be able to
              cancel it for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
