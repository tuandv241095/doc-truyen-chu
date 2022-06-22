import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "./baseQuery";

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Authentication"],

  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: "/authentication/login",
        method: "POST",
        body: credentials,
      }),
    }),
    whoami: build.query({
      query: () => ({
        url: "/authentication/whoami",
        method: "GET",
      }),
    }),
    google: build.mutation({
      query: (credentials) => ({
        url: "/authentication/google",
        method: "POST",
        body: credentials,
      }),
    }),
    facebook: build.mutation({
      query: (credentials) => ({
        url: "/authentication/facebook",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useWhoamiQuery,
  useGoogleMutation,
  useFacebookMutation,
} = authenticationApi;
