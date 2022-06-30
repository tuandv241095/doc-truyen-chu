import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RefreshResultDto } from "../models/Auth/RefreshResult.dto";
const baseUrl = process.env.REACT_APP_BACKEND_DOMAIN;

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: async (headers, { getState }) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryRefresh = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: async (headers, { getState }) => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      headers.set("Authorization", `Bearer ${refreshToken}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQueryRefresh(
      {
        url: "/auth/refresh",
        method: "GET",
      },
      api,
      extraOptions
    );
    if (refreshResult.data) {
      localStorage.setItem(
        "token",
        (refreshResult.data as RefreshResultDto).accessToken as string
      );
      result = await baseQuery(args, api, extraOptions);
    } else {
      // window.location.href = "/login";
    }
  }
  return result;
};
