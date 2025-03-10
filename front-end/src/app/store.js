import { configureStore } from "@reduxjs/toolkit";
import { supabaseApiSlice } from "../features/api/supabaseApiSlice";
import { bunnyApiSlice } from "../features/api/bunnyApiSlice";
import authReducer from "../features/auth/authSlice"
import themeReducer from "../features/theme/themeSlice"


export const store = configureStore({
  reducer: {
    [supabaseApiSlice.reducerPath]: supabaseApiSlice.reducer,
    [bunnyApiSlice.reducerPath]: bunnyApiSlice.reducer,
    auth: authReducer,
    theme: themeReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(supabaseApiSlice.middleware, bunnyApiSlice.middleware),

})