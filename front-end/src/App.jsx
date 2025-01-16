import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FilmsPage from './features/films/FilmsPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FilmsPage />
    </>
  )
}

export default App
