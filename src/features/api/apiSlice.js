import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/user",
      }),
    }),
    signUpUser: builder.mutation({
      query: (data) => ({
        url: "/user/signup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useSignUpUserMutation } = userApi;
