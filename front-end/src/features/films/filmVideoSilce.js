import { createEntityAdapter } from "@reduxjs/toolkit";
import { bunnyApiSlice } from '../api/bunnyApiSlice'

const videoAdaptor = createEntityAdapter();
const initialState = videoAdaptor.getInitialState({
  status: 'idle',
  error: null,
})

export const extendedBunnyApiSlice = bunnyApiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllVideoUrls: builder.query({
      query: () => `/`,
      transformResponse: (response) => {
        console.log(response)
        return response.map(file => ({
          url: `https://${file.StorageZoneName}-pull-zone.b-cdn.net/${file.ObjectName}`,
          name: file.name,
          id: file.Guid,
          size: file.size
        }))
      }
    })
  })
})

export const {
  useGetAllVideoUrlsQuery
} = extendedBunnyApiSlice

export const selectVideoUrlResults = extendedBunnyApiSlice.endpoints.getAllVideoUrls.select()

export const {
  selectAll: selectAllVideoUrls,
  selectById: selectVideoUrlsById
} = videoAdaptor.getSelectors(state => selectVideoUrlResults(state).data ?? initialState)