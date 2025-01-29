import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SUPABASE_URL,
    prepareHeaders: (headers) => {
      headers.set('apikey', import.meta.env.VITE_SUPABASE_KEY)
      headers.set('Content-Type', 'application/json')
      headers.set('Prefer', 'return=minimal')
      return headers
    },
  }),
  tagTypes: ['Post'],
  endpoints: builder => ({})
})