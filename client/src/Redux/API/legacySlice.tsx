import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const legacySlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getLegacy: builder.query({
      query: (userID) => `api/legacy/${userID}`,
    }),
    patchLegacy: builder.mutation({
      query: (data) => ({
        url: `api/legacy/${data.userID}`,
        method: 'PATCH',
        body: { updates: data.updates },
      }),
    }),

    postLegacy: builder.mutation({
      query: (data: any) => ({
        url: `api/legacy/${data.userID}`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetLegacyQuery,
  usePatchLegacyMutation,
  usePostLegacyMutation,
} = legacySlice;
