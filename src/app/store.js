import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import homeProductBuyNowButtonSlice from "../features/homeProductBuyNowButton/homeProductBuyNowButton";
import { userApi } from "../features/api/apiSlice";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    homeProductBuyNowButton: homeProductBuyNowButtonSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;
