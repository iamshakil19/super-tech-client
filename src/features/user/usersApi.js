import { apiSlice } from "../api/apiSlice";
import { userUpdate } from "../auth/authSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: (queryString) => ({
        url: `/api/v1/user?${queryString}`,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/user/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          const localObj = JSON.parse(localStorage.getItem("auth"));
          localObj.user = result?.data?.data?.updatedUser;
          localStorage.setItem("auth", JSON.stringify(localObj));
          dispatch(userUpdate(result?.data?.data?.updatedUser));
        } catch (error) {
          // nothing
        }
      },
    }),
    updateAvatar: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/api/v1/user/avatar/${id}`,
        method: "PATCH",
        body: formData,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          const localObj = JSON.parse(localStorage.getItem("auth"));
          localObj.user = result?.data?.data?.updatedUser;
          localStorage.setItem("auth", JSON.stringify(localObj));
          dispatch(userUpdate(result?.data?.data?.updatedUser));
        } catch (error) {
          // nothing
        }
      },
    }),
    updateUserRole: builder.mutation({
      query: ({ id, role }) => ({
        url: `/api/v1/user/${id}`,
        method: "PATCH",
        body: role,
      }),
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {
        const { page, limit, sort, role } = getState().users;
        let queryString = `page=${page}&limit=${limit}&sort=${sort}`;
        if (role) {
          queryString += `&role=${role}`;
        }
        try {
          const result = await queryFulfilled;
          console.log(result.data);
          if (result?.data?.data?.modifiedCount > 0) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getAllUser",
                queryString,
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
          console.error("Failed to update role in cache", err);
        }
      },
    }),
    updateUserAccess: builder.mutation({
      query: ({ id, access }) => ({
        url: `/api/v1/user/${id}`,
        method: "PATCH",
        body: access,
      }),
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {
        const { page, limit, sort, role } = getState().users;
        let queryString = `page=${page}&limit=${limit}&sort=${sort}`;
        if (role) {
          queryString += `&role=${role}`;
        }
        try {
          console.log(arg, "arg");
          const result = await queryFulfilled;
          console.log(result);
          if (result?.data?.data?.modifiedCount > 0) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getAllUser",
                queryString,
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
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {
        const { page, limit, sort, role } = getState().users;
        let queryString = `page=${page}&limit=${limit}&sort=${sort}`;
        if (role) {
          queryString += `&role=${role}`;
        }
        try {
          await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllUser",
              queryString,
              (draft) => {
                return {
                  ...draft,
                  data: {
                    ...draft.data,
                    users: draft.data.users.filter((item) => item._id !== arg),
                  },
                };
              }
            )
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
  useUpdateUserAccessMutation,
} = userApi;
