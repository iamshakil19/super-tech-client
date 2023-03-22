import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/user/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    updateAvatar: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/api/v1/user/avatar/${id}`,
        method: "PATCH",
        body: formData,
      }),
    }),
    getCurrentUser: builder.query({
      query: () => ({
        url: `/api/v1/user/me`,
      }),
      providesTags: ["user"],
    }),
  }),
});

export const {
  useUpdateUserMutation,
  useUpdateAvatarMutation,
  useGetCurrentUserQuery,
} = userApi;
