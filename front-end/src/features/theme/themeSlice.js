import { createSlice } from "@reduxjs/toolkit"

const initialState = { lightMode: localStorage.getItem('lightMode') === 'true' || false };

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.lightMode = !state.lightMode;
      localStorage.setItem('lightMode', state.lightMode)
      document.documentElement.setAttribute('data-theme', state.lightMode ? 'light' : 'dark');
    },
    setTheme: (state, action) => {
      state.lightMode = action.payload;
      localStorage.setItem('lightMode', state.lightMode)
      document.documentElement.setAttribute('data-theme', state.lightMode ? 'light' : 'dark')
    }
  }
})

export const { toggleTheme, setTheme } = themeSlice.actions

export default themeSlice.reducer