import { createSlice, createSelector } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    session: null,
    loading: true,
    error: null
  },
  reducers: {
    setSession: (state, action) => {
      state.session = action.payload,
        state.loading = action.payload,
        state.error = action.payload
    },
    setError: (state, action) => {
      state.loading = action.payload,
        state.error = action.payload
    },
    logout: (state, action) => {
      state.session = action.payload,
        state.loading = action.payload,
        state.error = action.payload
    }
  }
})

export const { setSession, setError, logout } = authSlice.actions;

export const selectAuthState = (state) => state.auth;

export const selectSession = createSelector(
  selectAuthState,
  (auth) => auth.session
);

export const selectIsAuthenticated = createSelector(
  selectSession,
  (session) => !!session
);

export default authSlice.reducer;