import React from 'react';
import './skills.scss';
import { ThemeContext } from "../../context/context";
import { useContext } from "react";

export default function Skills() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='Skills' id='Skills' style={{backgroundColor: darkMode && '#333'}}>
    <div className='top'>
        <h2 className='header'  style={{color: darkMode && '#d6d6d6'}} >Programming Skills</h2>
      </div>
      <div className="bottom"  style={{color: darkMode && '#d6d6d6'}}>
        <div className="row-1" ><p>JavaScript</p> <p>HTML</p><p>CSS</p> <p>React</p></div>
        <div className="row-2"> <p>Git</p> <p>Next.js</p><p>Node.js</p> <p>SASS</p></div>
        <div className="row-3"> <p>C++</p> <p>Swift</p><p>Ruby</p></div>
      </div>
    </div>
  )
}
