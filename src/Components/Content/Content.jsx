import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import Nav from '../Nav/Nav';
import Menu from '../Menu/Menu';
import { useState,createContext } from 'react';
import './content.scss'

export const ThemeContext = createContext(null);

export default function Content() { 
  const [theme,setTheme] = useState('light')
  const [menuOpen, setMenuOpen] = useState(false)

 console.log(theme)
    return (
        <>
        <ThemeContext.Provider value={{theme,setTheme}}>
         <div className="Content" id={theme}>
           <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
           <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
           <div className='sections'>
            <Intro/> 
            <Projects/>
            <Contact/>  
           </div>
         </div>
         </ThemeContext.Provider>
        </>
       );
}
