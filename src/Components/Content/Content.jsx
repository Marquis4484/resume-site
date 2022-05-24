import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import Nav from '../Nav/Nav';
import Menu from '../Menu/Menu';
import { useState,useContext} from 'react';
import {ThemeContext} from '../../context/context';
import './content.scss'


export default function Content() { 

  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

    return (
        <>
         <div className="Content" setMenuOpen={setMenuOpen} style={{backgroundColor: darkMode && '#333'}} >
           <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
           <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
           <div className='sections'>
            <Intro/> 
            <Projects/>
            <Contact/> 
           </div>
         </div>
        </>
       );
}
