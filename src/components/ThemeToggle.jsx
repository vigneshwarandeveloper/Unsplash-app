import React from 'react'
import {FaMoon} from "react-icons/fa";
import {FaSun} from "react-icons/fa";
import { useGlobalContext } from '../Context/context';

export const ThemeToggle = () => {
  const {IsDark,handleDarktheme}=useGlobalContext();
  return (
    <section className={IsDark?"toggle-container dark-theme":"toggle-container"} >
      <button className="dark-toggle" onClick={handleDarktheme}>
     {IsDark?<FaMoon className="dark-toggle" />:
      <FaSun className="dark-toggle" />}
      </button>
    </section>
  )
}
