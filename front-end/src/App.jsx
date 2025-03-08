import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilmPage from './components/FilmPage'
import SingleFilmPage from './components/SingleFilmPage'
import Login from './components/Login'
import { setTheme } from './features/theme/themeSlice'

import { Route, Routes, Navigate } from 'react-router-dom'

import './App.css'


function App() {
  const dispatch = useDispatch()
  const lightMode = useSelector((state) => state.theme.lightMode)

  useEffect(() => {
    const savedTheme = localStorage.getItem('lightMode') === 'true';
    dispatch(dispatch(setTheme(savedTheme)))
  }, [dispatch])

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
