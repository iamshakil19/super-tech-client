import React, { useEffect } from "react";
import aboutUsImg from "../../../Assets/Others/aboutUs-top.jpg";
import { MdCall, MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import PageTitle from "../../../Utils/PageTitle";
const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative poppins">
      <PageTitle
        title={"Contact Us - Super Tech Furniture & Interior"}
      ></PageTitle>
      <div
        className="bg-black bg-opacity-75 object-cover bg-cover bg-center h-36 md:h-[300px] lg:h-[400px] bg-no-repeat bg-blend-overlay"
        style={{
          backgroundImage: `url(${aboutUsImg})`,
        }}
      >
        <h2 className="text-white text-center font-serif text-2xl lg:text-3xl font-bold pt-5 lg:pt-10">
          Contact Us
        </h2>
        <p className="text-white text-center mt-2 font-serif text-lg">
          HOME / <span className="text-red-500">contact-us</span>
        </p>
      </div>
      <div className="bg-white w-full md:max-w-3xl lg:shadow-lg lg:shadow-black/20 rounded-md md:h-80 lg:border border-gray-300 lg:absolute lg:top-56 lg:left-[50%] lg:-translate-x-2/4 mx-auto my-3 lg:my-0 p-5 lg:p-7 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Address</h2>
          <div className="flex items-center gap-3 mb-5">
            <div>
              <MdCall className="border border-gray-500 h-8 w-8 p-1.5 rounded-full" />
            </div>
            <p className="text-sm">01716-926040</p>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <div>
              <MdEmail className="border border-gray-500 h-8 w-8 p-1.5 rounded-full" />
            </div>
            <p className="text-sm">super.tech767@gmail.com</p>
          </div>
          <div className="flex items-start gap-3">
            <div>
              <IoLocationSharp className="border border-gray-500 h-8 w-8 p-1.5 rounded-full" />
            </div>
            <p className="text-sm">
              Plot 31/B, Avenue 05, Road 15/1, Block C, Mirpur - 11, Dhaka-1216,
              Bangladesh
            </p>
          </div>
        </div>
        <div className="border-b border-dashed border-gray-400 md:hidden max-w-xs"></div>
        <div>
          <h2 className="text-lg font-semibold mb-3">Get In Touch</h2>

          <div>
            <form>
              <input
                type="text"
                placeholder="Name"
                name=""
                id=""
                className="outline-none border-b border-gray-400 py-1 w-full max-w-sm mb-3"
              />
              <input
                type="text"
                placeholder="Email"
                name=""
                id=""
                className="outline-none border-b border-gray-400 py-1 w-full max-w-sm mb-3"
              />
              <textarea
                name=""
                id=""
                rows="3"
                placeholder="Message"
                className="outline-none w-full max-w-sm border-b border-gray-400 mb-3"
              ></textarea>
              <input
                type="submit"
                value="Send Message"
                className="bg-black text-white px-4 py-2 rounded-sm text-sm font-medium cursor-pointer block"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 h-72 md:h-96 lg:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d542.6037762539812!2d90.37740285555182!3d23.811892918760847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ecc8eb6009%3A0xb50c2f65c4076bde!2sSuper%20Tech%20Furniture%20%26%20Interior!5e0!3m2!1sen!2sbd!4v1679045382849!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          title="superTech"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
