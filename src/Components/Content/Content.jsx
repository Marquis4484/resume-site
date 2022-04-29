import Contact from '../Contact/Contact'
import Intro from '../Intro/Intro'
import Projects from '../Projects/Projects'
import Nav from '../Nav/Nav'
import Menu from '../Menu/Menu'
import { useState } from 'react'
import './content.scss'

export default function Content() { 
  const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
         <div className="Content">
           <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
           <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
           <div className='sections'>
            <Intro/> 
            <Projects/>
            <Contact/>  
           </div>
         </div>
        </>
       );
}
