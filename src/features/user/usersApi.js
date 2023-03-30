import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: `/api/v1/user`,
      }),
    }),
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
    updateUserRole: builder.mutation({
      query: ({ id, role }) => ({
        url: `/api/v1/user/${id}`,
        method: "PATCH",
        body: role,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log(result.data);
          if (result?.data?.data?.modifiedCount > 0) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getAllUser",
                undefined,
                (draft) => {
                  const updatedUser = draft.data.users.find(
                    (item) => item._id === arg.id
                  );
                  if (updatedUser) {
                    updatedUser.role = arg.role.role;
                  }
                }
              )
            );
          }
        } catch (err) {
          console.error("Failed to update task role in cache", err);
        }
      },
    }),
    updateUserAccess: builder.mutation({
      query: ({ id, access }) => ({
        url: `/api/v1/user/${id}`,
        method: "PATCH",
        body: access,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          console.log(arg, "arg");
          const result = await queryFulfilled;
          console.log(result);
          if (result?.data?.data?.modifiedCount > 0) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getAllUser",
                undefined,
                (draft) => {
                  const updatedUser = draft.data.users.find(
                    (item) => item._id === arg.id
                  );
                  if (updatedUser) {
                    updatedUser.access = arg.access.access;
                  }
                }
              )
            );
          }
        } catch (err) {
          console.error("Failed to update task role in cache", err);
        }
      },
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/api/v1/user/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getAllUser", undefined, (draft) => {
              return {
                ...draft,
                data: {
                  ...draft.data,
                  users: draft.data.users.filter((item) => item._id !== arg),
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
  useUpdateUserMutation,
  useUpdateAvatarMutation,
  useGetAllUserQuery,
  useUpdateUserRoleMutation,
  useDeleteUserMutation,
  useUpdateUserAccessMutation
} = userApi;
