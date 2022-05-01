import Switch from '../Switch/Switch'
import { ThemeContext } from '../Content/Content'
import { useContext } from 'react'
import './nav.scss'

export default function Nav({menuOpen, setMenuOpen}) { 


  const {theme} = useContext(ThemeContext)

  return (
   
    <div className = {"Nav " + (menuOpen && "active")} id={theme}>  
      <div className="wrapper">
          
          <div className="hamburger" onClick={()=>setMenuOpen((menuOpen)=>!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
          
          <a href='#Projects'className='ProjectNav' onClick={()=>setMenuOpen(false)} >Projects</a>
            <a href='#Intro' className='Home' onClick={()=>setMenuOpen(false)}>MS</a>
            <a href='#Contact' className='ContactNav' onClick={()=>setMenuOpen(false)}>Contact</a>
         
        <div className="right-section">
          
          <Switch/>
        </div>
      </div>
    </div>
  )
}
