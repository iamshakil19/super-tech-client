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
      async onQueryStarted(arg, { queryFulfilled, getState, dispatch }) {
        const { page, limit, sort, category, subCategory, productSearchText } =
          getState().productsFilter;
        let queryString = `page=${page}&limit=${limit}&sort=${sort}`;
        if (category) {
          queryString += `&category=${category}`;
        }
        if (subCategory) {
          queryString += `&subCategory=${subCategory}`;
        }
        if (productSearchText) {
          queryString += `&productSearchText=${productSearchText}`;
        }
        try {
          const { data } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllProducts",
              queryString,
              (draft) => {
                draft.data.products.push(data?.data);
              }
            )
          );
        } catch (error) {}
      },
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/product/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {
        const { page, limit, sort, category, subCategory, productSearchText } =
          getState().productsFilter;
        let queryString = `page=${page}&limit=${limit}&sort=${sort}`;
        if (category) {
          queryString += `&category=${category}`;
        }
        if (subCategory) {
          queryString += `&subCategory=${subCategory}`;
        }
        if (productSearchText) {
          queryString += `&productSearchText=${productSearchText}`;
        }
        try {
          const result = await queryFulfilled;
          if (result?.data?.data?.modifiedCount > 0) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getAllProducts",
                queryString,
                (draft) => {
                  const updatedProduct = draft.data.products.find(
                    (item) => item._id == arg.id
                  );
                  if (updatedProduct) {
                    updatedProduct.name = arg.data.name;
                    updatedProduct.price = arg.data.price;
                    updatedProduct.description = arg.data.description;
                    updatedProduct.category = arg.data.category;
                    updatedProduct.subCategory = arg.data.subCategory;
                    updatedProduct.discount = arg.data.discount;
                  }
                }
              )
            );
          } else {
            return;
          }
        } catch (error) {
          toast.error("Something went wrong");
        }
      },
    }),
    productBulkUpdate: builder.mutation({
      query: (data) => ({
        url: `/api/v1/product/bulk-update`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/api/v1/product/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {
        const { page, limit, sort, category, subCategory, productSearchText } =
          getState().productsFilter;
        let queryString = `page=${page}&limit=${limit}&sort=${sort}`;
        if (category) {
          queryString += `&category=${category}`;
        }
        if (subCategory) {
          queryString += `&subCategory=${subCategory}`;
        }
        if (productSearchText) {
          queryString += `&productSearchText=${productSearchText}`;
        }
        try {
          await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllProducts",
              queryString,
              (draft) => {
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
        } catch (err) {}
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
  useProductBulkUpdateMutation,
} = productsApi;
