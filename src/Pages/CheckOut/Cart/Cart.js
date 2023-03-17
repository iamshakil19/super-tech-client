import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WhySuperTech from "../../Shared/WhySuperTech/WhySuperTech";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-10 poppins">
      <h2 className="text-3xl font-bold font-serif text-center mb-5">Cart</h2>
      <p className="text-center hover:underline underline-offset-2 hover:text-blue-500 transition-all duration-200 ease-in-out">
        <Link to="/collections" className="">
          Continue Shopping
        </Link>
      </p>
      <WhySuperTech />
    </div>
  );
};

export default Cart;
