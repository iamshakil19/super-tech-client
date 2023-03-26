import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCartQuantity,
  getTotals,
  removeFromCart,
} from "../../../features/orders/ordersSlice";
import numberWithComma from "../../../Utils/numberWithComa";
import WhySuperTech from "../../Shared/WhySuperTech/WhySuperTech";

const Cart = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { cart, cartTotalAmount } = useSelector((state) => state.orders);
  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cart]);

  const handleCheckOut = () => {
    navigate("/checkouts");
  };
  const handleRemoveFormCart = (cartProduct) => {
    dispatch(removeFromCart(cartProduct));
  };
  const handleDecreaseCartQuantity = (cartProduct) => {
    dispatch(decreaseCartQuantity(cartProduct));
  };
  const hanldeIncreaseCartQuantity = (cartProduct) => {
    dispatch(addToCart(cartProduct));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-10 poppins container mx-auto">
      <h2 className="text-3xl font-bold font-serif text-center mb-5">Cart</h2>
      <p className="text-center hover:underline underline-offset-2 hover:text-blue-500 transition-all duration-200 ease-in-out">
        <Link to="/collections" className="">
          Continue Shopping
        </Link>
      </p>

      {cart?.length > 0 && (
        <>
          <section className=" mt-5">
            <table className="w-full text-left">
              <thead className="border-b border-gray-300 pb-5">
                <tr>
                  <th className="uppercase font-semibold">Product</th>
                  <th className="uppercase font-semibold">Price</th>
                  <th className="uppercase font-semibold">Quantity</th>
                  <th className="uppercase font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((cartProduct) => (
                  <tr className="border-b border-gray-300 p-5">
                    <td>
                      {" "}
                      <div className="flex gap-5 items-center">
                        <div>
                          <img
                            className="w-36 py-2"
                            src={`${
                              process.env.REACT_APP_IMG_URL +
                              cartProduct.primaryImage
                            }`}
                            alt={cartProduct.name}
                          />
                        </div>
                        <div>
                          <p className="text-lg font-medium mb-2 max-w-sm">
                            {cartProduct.name}
                          </p>
                          <p>Black</p>
                          <p>6" By 10"</p>
                          <button
                            onClick={() => handleRemoveFormCart(cartProduct)}
                            className="text-sm mt-1 font-medium"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>৳ {numberWithComma(cartProduct.price)}</td>
                    <td>
                      <div className="border border-black inline-block">
                        <button
                          onClick={() =>
                            handleDecreaseCartQuantity(cartProduct)
                          }
                          className="bg-black text-white py-0.5 text-xl w-7"
                        >
                          -
                        </button>
                        <input
                          readOnly
                          type="text"
                          className="text-center outline-none text-lg w-12"
                          value={cartProduct.quantity}
                        />
                        <button
                          onClick={() =>
                            hanldeIncreaseCartQuantity(cartProduct)
                          }
                          className="bg-black text-white text-xl w-7 py-0.5"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      ৳{" "}
                      {numberWithComma(
                        cartProduct.price * cartProduct.quantity
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="flex justify-between items-center gap-5 py-3 mt-3">
            <div>
              <button
                onClick={handleClearCart}
                className="border border-black font-medium text-sm py-2 px-4 rounded-md hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
              >
                Clear Cart
              </button>
            </div>
            <div className="max-w-xs w-full">
              <div className="flex items-center justify-between gap-5">
                <p className="text-lg font-medium">Subtotal</p>
                <p className="text-lg font-semibold">
                  ৳ {numberWithComma(cartTotalAmount)}
                </p>
              </div>
              <p className="text-sm mt-3">
                Shipping charge calculated at checkout
              </p>

              <button
                onClick={handleCheckOut}
                className="bg-black w-full py-3 text-white mt-4 rounded-md "
              >
                Checkout
              </button>
            </div>
          </section>
        </>
      )}

      <WhySuperTech />
    </div>
  );
};

export default Cart;
