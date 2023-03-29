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
    updateOrderStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/api/v1/order/${id}`,
        method: "PATCH",
        body: status,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log(result.data);
          if (result?.data?.data?.modifiedCount > 0) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getAllOrder",
                undefined,
                (draft) => {
                  const updatedOrder = draft.data.orders.find(
                    (item) => item._id === arg.id
                  );
                  if (updatedOrder) {
                    updatedOrder.status = arg.status.status;
                  }
                }
              )
            );
          }
        } catch (err) {
          console.error("Failed to update task status in cache", err);
        }
      },
    }),
  }),
});

export const {
  useGetAllOrderQuery,
  useCreateOrderMutation,
  useGetOrderByEmailQuery,
  useUpdateOrderStatusMutation,
} = orderApi;
