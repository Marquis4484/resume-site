import React, { useContext } from 'react'
import { ThemeContext } from '../Content/Content'
import './switch.scss'

export default function Switch() {

    const {theme,setTheme} = useContext(ThemeContext)
    

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark': 'light'))
      }


  return (
    <label className="switch" onChange={toggleTheme} checked={theme === "dark"}>
        <input type='checkbox'/>
        <span className='slider'/>
    </label>
  )
}
