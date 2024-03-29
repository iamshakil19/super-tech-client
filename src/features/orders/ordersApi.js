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
      query: ({ id, data }) => ({
        url: `/api/v1/order/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {
        const { page, limit, sort, status } = getState().orders.orderFilter;
        let queryString = `page=${page}&limit=${limit}&sort=${sort}`;
        if (status) {
          queryString += `&status=${status}`;
        }
        try {
          const result = await queryFulfilled;
          if (result?.data?.data?.modifiedCount > 0) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getAllOrder",
                queryString,
                (draft) => {
                  const updatedOrder = draft.data.orders.find(
                    (item) => item._id === arg.id
                  );
                  if (updatedOrder) {
                    updatedOrder.status = arg.data.status;
                    updatedOrder.deliveryDate = arg.data.deliveryDate;
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
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {
        const { page, limit, sort, status } = getState().orders.orderFilter;
        let queryString = `page=${page}&limit=${limit}&sort=${sort}`;
        if (status) {
          queryString += `&status=${status}`;
        }
        try {
          await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllOrder",
              queryString,
              (draft) => {
                return {
                  ...draft,
                  data: {
                    ...draft.data,
                    orders: draft.data.orders.filter(
                      (item) => item._id !== arg
                    ),
                  },
                };
              }
            )
          );
        } catch (error) {}
      },
    }),
    getInvoiceNo: builder.query({
      query: () => ({
        url: `/api/v1/invoice`,
      }),
    }),
    updateInvoiceNo: builder.mutation({
      query: () => ({
        url: `/api/v1/invoice`,
        method: "PATCH",
      }),
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          if (result?.data?.data?.modifiedCount > 0) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getInvoiceNo",
                undefined,
                (draft) => {
                  draft.data.invoiceNo = draft.data.invoiceNo + 1;
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
  useDeleteOrderMutation,
  useGetInvoiceNoQuery,
  useUpdateInvoiceNoMutation,
} = orderApi;
