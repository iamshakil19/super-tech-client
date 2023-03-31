import { apiSlice } from "../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: (queryString) => ({
        url: `/api/v1/order?${queryString}`,
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
          if (result?.data?.data?.modifiedCount > 0) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getAllOrder",
                undefined,
                (draft) => {
                  console.log(JSON.parse(JSON.stringify(draft)));
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
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/api/v1/order/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getAllOrder", undefined, (draft) => {
              return {
                ...draft,
                data: {
                  ...draft.data,
                  orders: draft.data.orders.filter((item) => item._id !== arg),
                },
              };
            })
          );
        } catch (error) {
          console.log(error);
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
  useDeleteOrderMutation,
} = orderApi;
