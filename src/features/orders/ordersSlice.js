import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  orderResponse: null,
  email: "",
  orderId: 0,
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

  deleteOrderModal: false,
  deletingId: "",
  orderForDetails: {},
  orderFilter: {
    page: 1,
    sort: "-createdAt",
    limit: 10,
    status: "",
    orderSearchText: "",
  },
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
        (item) => item._id === action.payload.product._id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += action.payload.quantity;
        toast.success(`Increase ${state.cart[itemIndex].name} cart quantity`, {
          id: "cartSlice",
          position: "bottom-center",
        });
      } else {
        const tempProduct = {
          ...action.payload.product,
          quantity: action.payload.quantity > 1 ? action.payload.quantity : 1,
          color: action.payload.color,
          colorCost: action.payload.colorCost,
          size: action.payload.size,
          sizeCost: action.payload.sizeCost,
        };
        state.cart.push(tempProduct);
        toast.success(`${action.payload.product.name} added to cart`, {
          id: "cartSlice",
          position: "bottom-center",
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
        position: "bottom-center",
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
          position: "bottom-center",
        });
      } else if (state.cart[itemIndex].quantity === 1) {
        const nextCart = state.cart.filter(
          (cartItem) => cartItem._id !== action.payload._id
        );
        state.cart = nextCart;

        toast.error(`${action.payload.name} remove from cart`, {
          id: "cartSlice",
          position: "bottom-center",
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state, action) => {
      state.cart = [];
      toast.error(`Cart cleared`, {
        id: "cartSlice",
        position: "bottom-center",
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    getTotals: (state, action) => {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity, colorCost, sizeCost, discount } = cartItem;
          console.log(JSON.parse(JSON.stringify(cartItem)));
          const itemTotal = Math.floor(
            (price + colorCost + sizeCost) * quantity -
              (discount / 100) * ((price + colorCost + sizeCost) * quantity)
          );

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
    createOrderId: (state, action) => {
      state.orderId = action.payload;
    },
    handleOrderResponse: (state, action) => {
      state.orderResponse = action.payload;
    },
    clearAll: (state, action) => {
      state.email = "";
      state.orderId = 0;
      state.name = "";
      state.phoneNumber = "";
      state.company = "";
      state.postalCode = "";
      state.division = "";
      state.area = "";
      state.streetAddress = "";
      state.cart = [];
      state.shippingMethod = "";
      state.shippingCost = 0;
      state.paymentMethod = "codInsideDhaka";
      state.billingAddress = {
        sameAsShippingAddress: true,
        email: "",
        name: "",
        phoneNumber: "",
        company: "",
        postalCode: "",
        division: "",
        area: "",
        streetAddress: "",
      };
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
      localStorage.removeItem("cart");
    },
    handleDeleteOrderModal: (state, action) => {
      state.deleteOrderModal = action.payload.isOpen;
      state.deletingId = action.payload._id;
    },
    handleOrderDetails: (state, action) => {
      state.orderForDetails = action.payload;
    },
    handlePagination: (state, action) => {
      state.orderFilter.page = action.payload;
    },
    handleLimit: (state, action) => {
      state.orderFilter.limit = action.payload;
    },
    handleSort: (state, action) => {
      state.orderFilter.sort = action.payload;
    },
    handleFields: (state, action) => {
      state.orderFilter.status = action.payload;
    },
    handleOrderSearchText: (state, action) => {
      state.orderFilter.orderSearchText = action.payload;
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
  createOrderId,
  handleOrderResponse,
  clearAll,
  handleDeleteOrderModal,
  handleOrderDetails,
  handlePagination,
  handleLimit,
  handleSort,
  handleFields,
  handleOrderSearchText,
} = ordersSlice.actions;
export default ordersSlice.reducer;
