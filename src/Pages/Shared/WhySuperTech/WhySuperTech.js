import React from "react";

const WhySuperTech = () => {
  return (
    <div className="border-t border-slate-200 py-14 mt-5">
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="p-5 ">
          <img
            className="w-96 h-96 object-cover mx-auto"
            src="https://cdn.shopify.com/s/files/1/0521/4434/1176/files/Group_834_540x.png?v=1633346197"
            alt=""
          />
          <h2 className="text-2xl font-semibold poppins text-center pt-4 pb-3 text-slate-700 max-w-md mx-auto">
            Exceptional Furniture For The Taskmasters
          </h2>
          <p className="poppins text-justify max-w-md mx-auto">
            We founded GRID: to make it easy for teams of all sizes to create an
            office you love. We sell direct, so our collection costs half as
            much as premium furniture of comparable quality.
          </p>
        </div>
        <div className="p-5 ">
          <img
            className="w-96 h-96 object-cover mx-auto"
            src="https://cdn.shopify.com/s/files/1/0521/4434/1176/files/ASDASDA_540x.jpg?v=1652694147"
            alt=""
          />
          <h2 className="text-2xl font-semibold poppins text-center pt-4 pb-3 text-slate-700 max-w-md mx-auto">
            Ergonomic Design
          </h2>
          <p className="poppins text-justify max-w-md mx-auto">
            Enjoy stylish and ergonomic work seating for every budget, from the
            home office to the open office. Durable, adjustable and built to
            inspire: make your office feel like home with contract-grade desks &
            chairs from GRID Furniture.
          </p>
        </div>
        <div className="p-5 ">
          <img
            className="w-96 h-96 object-cover mx-auto"
            src="https://cdn.shopify.com/s/files/1/0521/4434/1176/files/5A2A5635_540x.jpg?v=1613715225"
            alt=""
          />
          <h2 className="text-2xl font-semibold poppins text-center pt-4 pb-3 text-slate-700 max-w-md mx-auto">
            Wherever you are, work your best.
          </h2>
          <p className="poppins text-justify max-w-md mx-auto">
            Our breathable mesh material provides an optimal air flow to avoid
            sweating and sticking, keep air circulation for extra comfy, and the
            mesh office chair resists abrasion and transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhySuperTech;
