import { apiSlice } from "../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: () => ({
        url: `/api/v1/order`,
      }),
    }),
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/api/v1/order",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllOrderQuery, useCreateOrderMutation } = orderApi;
