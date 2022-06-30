import { createApi } from "@reduxjs/toolkit/query/react";
import { LoginDto } from "../models/Auth/Login.dto";
import { LoginFacebookDto } from "../models/Auth/LoginFacebook.dto";
import { LoginResult } from "../models/Auth/LoginResult.dto";
import { RegisterDto } from "../models/Auth/Register.dto";
import { TokenVerificationDto } from "../models/Auth/TokenVerification.dto";
import { UserInDbDto } from "../models/User/UserInDb.dto";

import { baseQueryWithReauth } from "./baseQuery";

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Authentication"],

  endpoints: (build) => ({
    login: build.mutation<LoginResult, LoginDto>({
      query: (credentials) => ({
        url: "/authentication/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: build.mutation<UserInDbDto, RegisterDto>({
      query: (credentials) => ({
        url: "/authentication/register",
        method: "POST",
        body: credentials,
      }),
    }),
    google: build.mutation<LoginResult, TokenVerificationDto>({
      query: (credentials) => ({
        url: "/authentication/google",
        method: "POST",
        body: credentials,
      }),
    }),
    facebook: build.mutation<LoginResult, LoginFacebookDto>({
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
  useRegisterMutation,
  useGoogleMutation,
  useFacebookMutation,
} = authenticationApi;
