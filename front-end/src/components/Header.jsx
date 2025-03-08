import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../features/theme/themeSlice"
import "../styles/header.css"

export default function Header() {

  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme)

  const handleThemeButton = () => {
    dispatch(toggleTheme())

    console.log("theme state:", theme.lightMode)
  }

  return (
    <header className="flex align items-center justify-between">
      <h1 className=' header-1 m-0 custom-font font-bricolage p-5 uppercase text-lg' >Sarah Genge</h1>
      <button className=" h-min content-center m-0 flex justify-center border-none uppercase bg-inherit text-lg text-inherit " onClick={() => handleThemeButton()}>
        <hr className="light-mode-switch"></hr>
        <p className="light-mode-button-text">{theme.lightMode ? "dark" : "light"}</p>
      </button>
    </header>
  )
}
