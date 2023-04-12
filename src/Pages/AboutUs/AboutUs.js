import React, { useEffect } from "react";
import PageTitle from "../../Utils/PageTitle";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="poppins my-10 px-5">
      <PageTitle
        title={"About us - Super Tech Furniture & Interior"}
      ></PageTitle>

      <div className="max-w-3xl mx-auto text-black">
        <h3 className="lg:text-3xl text-xl text-center font-serif font-semibold">
          About Us
        </h3>

        <p className="mt-10 text-justify">
          <span className="text-lg">SUPER TECH</span> Furniture is an ISO
          9001:2015 certified, member of the Furniture Association, we also have
          a fire and industrial license. We are stylish and a unique symbol of
          contemporary furniture. Our office furniture has Director, Manager,
          executive tables, including file cabinet and sofa sets that can be
          used at all management levels. Home furniture such as dining tables,
          TV cabinets, cupboards, dressing tables, study tables, computer
          tables, and more for your home. We provide storage solutions for home
          and office with a of variety steel and wooden almirahs, wardrobes,
          filing cabinets, multipurpose shelves and metal racks.
        </p>
        <p className="mt-5 text-justify">
          We have furniture designs in solid wood, engineered wood, Malaysian
          wood, MDF board HPL board, with lacquer or franc polish. We also
          furniture designs in board and metal combination for longevities. It
          gives a unique finish and offers a one-of-a-kind look. All our
          laminated board furniture is crafted from the best quality chipboard
          and our range of metal furniture is second to none in quality and
          design. Furniture breathes life into any home or office. It is not
          only important for furniture to look good but it needs to be
          functional and at times even multi-functional, especially now-a-days
          since most people face a space constraint.
        </p>
        <p className="mt-5 text-justify">
          Keeping this in mind we at Hatim Furniture offer space-saving and
          multipurpose furniture too. It is constant effort to provide our
          customers with new and innovative designs. This online store is our
          effort to help you furnish or redecorate your house or office from the
          comfort of your home.
        </p>

        <p className="text-2xl font-bold font-serif mt-5">Our Aims:</p>
        <p className="mt-5 text-justify">
          <span className="text-lg font-semibold">MISSION:</span> Guided by
          relentless focus, we strive to achieve our mission by taking constant
          critical initiatives. Delivering operational excellence in every
          aspect of manufacturing and meeting or exceeding our commitments to
          our customers is our top priority. All of our long-term strategies and
          short-term actions are mounded by a set of core values. We are
          committed to implementing them and providing the best personal
          experience to customers through our innovative design solutions and
          customer service.
        </p>
        <p className="mt-5 text-justify">
          Vision: Reinforces our vision that every customer is a member of SUPER
          TECH Furniture. This vision enhances our passion for our customers,
          pushing us to provide innovative solutions to uniquely meet their
          needs. We are proud of our work, and the passion to build unparalleled
          customer loyalty of our brands with a performance that excites and
          rewards clients with higher returns.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
