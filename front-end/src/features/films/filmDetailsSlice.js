import { createSelector, createEntityAdapter } from "@reduxjs/toolkit"
import { supabaseApiSlice } from "../api/supabaseApiSlice"

const filmsAdapter = createEntityAdapter();
const initialState = filmsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

export const extendedSupabaseApiSlice = supabaseApiSlice.injectEndpoints({
  endpoints: builder => ({
    getFilms: builder.query({
      query: () => 'rest/v1/Films',
      providesTags: (result = []) => [
        { type: 'Film', id: 'LIST' },
        ...result.map(film => ({ type: 'Film', id: film.id }))
      ]
    }),
    addNewFilm: builder.mutation({
      query: film => ({
        url: 'rest/v1/Films',
        method: 'POST',
        body: film
      })
    }),
    uploadFilmVideoFile: builder.mutation({
      query: ({ storageZone, file }) => {
        const fileName = encodeURIComponent(file.name);
        return {
          url: `${storageZone}/${fileName}`,
          method: 'PUT',
          body: file,
          headers: {
            'apiKey': import.meta.env.BUNNY_API_KEY,
            'Content-Type': 'application/octet-stream',
          },
        }
      }
    }),
    updateFilm: builder.mutation({
      query: film => ({
        url: `rest/v1/Films/${film.id}`,
        method: 'PUT',
        body: {
          ...film,
        }
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Film', id: arg.id }
      ]
    }),
    deleteFilm: builder.mutation({
      query: ({ id }) => ({
        url: `rest/v1/Films/${id}`,
        method: 'DELETE',
        body: { id }
      })
    }),
    getVideoFiles: builder.query({
      query: () => 'rest/v1/Films',
    })
  })
})

export const {
  useGetFilmsQuery,
  useAddNewFilmMutation,
  useUpdateFilmMutation,
  useDeleteFilmMutation,
  useUploadFilmVideoFileMutation
} = extendedSupabaseApiSlice

export const selectFilmResults = extendedSupabaseApiSlice.endpoints.getFilms.select()

export const {
  selectAll: selectAllFilms,
  selectById: selectFilmById,
} = filmsAdapter.getSelectors(state => selectFilmResults(state).data ?? initialState);



