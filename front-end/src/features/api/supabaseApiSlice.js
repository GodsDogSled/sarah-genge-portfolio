import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const supabaseApiSlice = createApi({
  reducerPath: 'supabaseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SUPABASE_URL,
    prepareHeaders: (headers) => {
      headers.set('apikey', import.meta.env.VITE_SUPABASE_KEY)
      headers.set('Content-Type', 'application/json')
      headers.set('Prefer', 'return=minimal')
      return headers
    },
  }),
  tagTypes: ['FilmTextDetails'],
  endpoints: builder => ({})
})

