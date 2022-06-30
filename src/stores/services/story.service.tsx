import { createApi } from "@reduxjs/toolkit/query/react";
import { StoryInDbDto } from "../models/Story/StoryInDb.dto";
import { UserStoryInfo } from "../models/UserStoryInfo/UserStoryInfo.dto";
import { baseQueryWithReauth } from "./baseQuery";

export const UserApi = createApi({
  reducerPath: "UserApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Stories"],
  endpoints: (build) => ({
    getStories: build.query<StoryInDbDto[], string>({
      query: (query: string) => {
        return {
          url: `/stories/${query}`,
          method: "GET",
        };
      },
      providesTags: (results) =>
        results
          ? [
              ...results.map(({ id }) => ({ type: "Stories" as const, id })),
              { type: "Stories", id: "LIST" },
            ]
          : [{ type: "Stories", id: "LIST" }],
    }),
    getStory: build.query<StoryInDbDto, string>({
      query: (id: string) => ({
        url: `/stories/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Stories", id }],
    }),
  }),
});

export const { useGetStoriesQuery, useGetStoryQuery } = UserApi;
