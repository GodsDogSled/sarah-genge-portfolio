import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bunnyApiSlice = createApi({
  reducerPath: 'bunnyPullZoneApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BUNNY_STORAGEZONE_URL,
    prepareHeaders: (headers) => {
      const apiKey = import.meta.env.VITE_BUNNY_API_KEY

      if (!apiKey) {
        throw new Error("Missing bunny API key")
      }

      headers.set('AccessKey', apiKey);

      return headers;
    }
  }),
  tagTypes: ['Video'],
  endpoints: () => ({})
})