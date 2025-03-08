import { useEffect, useState } from 'react'
import FilmPage from './components/FilmPage'
import SingleFilmPage from './components/SingleFilmPage'
import Login from './components/Login'

import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'

function App() {



  return (
    <Routes>
      <Route path="/">
        <Route index element={<FilmPage />} />
        <Route path="/film">
          <Route path=':filmId' element={<SingleFilmPage />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
