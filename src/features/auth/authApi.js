import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: "/api/v1/user/signup",
        method: "POST",
        body: userData,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result?.data?.data?.token,
              user: result?.data?.data?.user,
            })
          );
          dispatch(
            userLoggedIn({
              accessToken: result?.data?.data?.token,
              user: result?.data?.data?.user,
            })
          );
        } catch (error) {
          // nothing
        }
      },
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: "/api/v1/user/login",
        method: "POST",
        body: userData,
      }),

      //getCurrentUser
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result?.data?.data?.token,
              user: result?.data?.data?.user,
            })
          );
          dispatch(
            userLoggedIn({
              accessToken: result?.data?.data?.token,
              user: result?.data?.data?.user,
            })
          );
        } catch (error) {
          // nothing
        }
      },
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
