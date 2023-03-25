import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  phoneNumber: "",
  company: "",
  postalCode: "",
  division: "",
  area: "",
  streetAddress: "",
  shipping: "",
  cart: [""],
};

const ordersSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    handleContactInformation: (state, action) => {
      console.log(action.payload);
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.phoneNumber = action.payload.phoneNumber;
      state.company = action.payload.company;
      state.postalCode = action.payload.postalCode;
      state.division = action.payload.division;
      state.area = action.payload.area;
      state.streetAddress = action.payload.streetAddress;
    },
  },
});

export const { handleContactInformation } = ordersSlice.actions;
export default ordersSlice.reducer;
