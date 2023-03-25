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
            })
          );
          dispatch(
            userLoggedIn({
              accessToken: result?.data?.data?.token,
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
          if (result.error) {
            return;
          }
          console.log(result?.data?.data?.user, "result");
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result?.data?.data?.token,
            })
          );
          dispatch(
            // userLoggedIn({
            //   accessToken: result?.data?.data?.token,
            // }),
            apiSlice.util.updateQueryData("login", undefined, (draft) => {
              console.log(draft, "draft");
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
