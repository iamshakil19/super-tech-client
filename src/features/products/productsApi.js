import { toast } from "react-hot-toast";
import { apiSlice } from "../api/apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (queryString) => ({
        url: `/api/v1/product?${queryString}`,
      }),
    }),
    getProduct: builder.query({
      query: (id) => `/api/v1/product/${id}`,
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/api/v1/product",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllProducts",
              undefined,
              (draft) => {
                console.log(JSON.parse(JSON.stringify(draft)));
                draft.data.products.push(data?.data);
              }
            )
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/product/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          if (result?.data?.data?.modifiedCount > 0) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getAllProducts",
                undefined,
                (draft) => {
                  const updatedProduct = draft.data.products.find(
                    (item) => item._id == arg.id
                  );
                  console.log(JSON.parse(JSON.stringify(updatedProduct)));
                  console.log(JSON.parse(JSON.stringify(draft)));
                  if (updatedProduct) {
                    updatedProduct.name = arg.data.name;
                    updatedProduct.price = arg.data.price;
                    updatedProduct.description = arg.data.description;
                    updatedProduct.category = arg.data.category;
                    updatedProduct.subCategory = arg.data.subCategory;
                  }
                }
              )
            );
          } else {
            return;
          }
        } catch (error) {
          toast.error("Something went wrong");
          console.log(error);
        }
      },
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/api/v1/product/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllProducts",
              undefined,
              (draft) => {
                console.log(arg);
                console.log(JSON.parse(JSON.stringify(draft)));
                return {
                  ...draft,
                  data: {
                    ...draft.data,
                    products: draft.data.products.filter(
                      (product) => product._id !== arg
                    ),
                  },
                };
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;
