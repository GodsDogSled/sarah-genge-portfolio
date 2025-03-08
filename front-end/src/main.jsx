import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { extendedSupabaseApiSlice } from './features/films/filmDetailsSlice.js'
import { extendedBunnyApiSlice } from './features/films/filmVideoSilce.js'


store.dispatch(extendedSupabaseApiSlice.endpoints.getFilms.initiate())
store.dispatch(extendedBunnyApiSlice.endpoints.getAllVideoUrls.initiate())

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </Provider>

  </StrictMode>
)
