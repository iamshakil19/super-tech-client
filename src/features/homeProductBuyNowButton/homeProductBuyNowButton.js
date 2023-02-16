import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isButtonOpen: false,
};

const homeProductBuyNowButtonSlice = createSlice({
  name: "homeProductBuyNowButton",
  initialState,
  reducers: {
    buyNowButtonOpen: (state, action) => {
      state.isButtonOpen = true;
    },
    buyNowButtonClose: (state, action) => {
      state.isButtonOpen = false;
    },
  },
});

export const { buyNowButtonOpen, buyNowButtonClose } =
  homeProductBuyNowButtonSlice.actions;

export default homeProductBuyNowButtonSlice.reducer;
