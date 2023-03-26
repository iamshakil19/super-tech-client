import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  email: "",
  name: "",
  phoneNumber: "",
  company: "",
  postalCode: "",
  division: "",
  area: "",
  streetAddress: "",
  shippingMethod: "",
  shippingCost: 0,
  paymentMethod: "codInsideDhaka",

  billingAddress: {
    sameAsShippingAddress: true,
    email: "",
    name: "",
    phoneNumber: "",
    company: "",
    postalCode: "",
    division: "",
    area: "",
    streetAddress: "",
  },
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const ordersSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    handleContactInformation: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.phoneNumber = action.payload.phoneNumber;
      state.company = action.payload.company;
      state.postalCode = action.payload.postalCode;
      state.division = action.payload.division;
      state.area = action.payload.area;
      state.streetAddress = action.payload.streetAddress;
    },
    handleShippingMethod: (state, action) => {
      state.shippingMethod = action.payload.shippingMethod;
      state.shippingCost = action.payload.shippingCost;
    },
    handlePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    handleBillingAddress: (state, action) => {
      state.billingAddress.sameAsShippingAddress =
        action.payload.sameAsShippingAddress;
    },
    handleDifferentBillingAddress: (state, action) => {
      state.billingAddress.email = action.payload.email;
      state.billingAddress.name = action.payload.name;
      state.billingAddress.phoneNumber = action.payload.phoneNumber;
      state.billingAddress.company = action.payload.company;
      state.billingAddress.postalCode = action.payload.postalCode;
      state.billingAddress.division = action.payload.division;
      state.billingAddress.area = action.payload.area;
      state.billingAddress.streetAddress = action.payload.streetAddress;
    },
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
        toast.success(`Increase ${state.cart[itemIndex].name} cart quantity`, {
          id: "cartSlice",
        });
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cart.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`, {
          id: "cartSlice",
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const nextCart = state.cart.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );
      state.cart = nextCart;
      localStorage.setItem("cart", JSON.stringify(state.cart));

      toast.error(`${action.payload.name} remove from cart`, {
        id: "cartSlice",
      });
    },
    decreaseCartQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
        toast.error(`Decreased ${action.payload.name} cart quantity`, {
          id: "cartSlice",
        });
      } else if (state.cart[itemIndex].quantity === 1) {
        const nextCart = state.cart.filter(
          (cartItem) => cartItem._id !== action.payload._id
        );
        state.cart = nextCart;

        toast.error(`${action.payload.name} remove from cart`, {
          id: "cartSlice",
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state, action) => {
      state.cart = [];
      toast.error(`Cart cleared`, {
        id: "cartSlice",
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    getTotals: (state, action) => {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const {
  handleContactInformation,
  handleShippingMethod,
  handlePaymentMethod,
  handleBillingAddress,
  handleDifferentBillingAddress,
  addToCart,
  removeFromCart,
  decreaseCartQuantity,
  clearCart,
  getTotals,
} = ordersSlice.actions;
export default ordersSlice.reducer;
