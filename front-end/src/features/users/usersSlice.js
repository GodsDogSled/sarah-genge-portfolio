import { createSelector, createEntityAdapter } from "@reduxjs/toolkit"
import { apiSlice } from "../api/apiSlice"

const usersAdapter = createEntityAdapter({})

const initialState = usersAdapter.getInitialState({
  status:'idle',
  error:null
})

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints:builder=>({
    addNewUser: builder.mutation({
      query: userInfo=>({
        url:,
        method:'POST',
        body:{
          
        }
      })
    })
  })
})