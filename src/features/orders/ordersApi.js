import { apiSlice } from "../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: () => ({
        url: `/api/v1/order`,
      }),
    }),
    getOrderByEmail: builder.query({
      query: (email) => ({
        url: `/api/v1/order/${email}`,
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

export const { useGetAllOrderQuery, useCreateOrderMutation, useGetOrderByEmailQuery } = orderApi;
