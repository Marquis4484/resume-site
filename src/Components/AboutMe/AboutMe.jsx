import React from 'react'
import './aboutme.scss';
import { ThemeContext } from "../../context/context";
import { useContext } from "react";

export default function AboutMe() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id='AboutMe' className='AboutMe' style={{backgroundColor: darkMode && '#333'}}>

      <div className='top' style={ {color: darkMode && '#d6d6d6'}}>
        <h2 className='header'>A Little About Myself</h2>
      </div>
      
      <div className='bottom' style={{color: darkMode && '#d6d6d6'}}>
        <div className='column-1' >  
          <h3>Programming Knowledge</h3> 
          <p>I have experience working in frontend and backend development. I am also comfortable developing projects in modern framworks such as React.</p>
        </div>
        <div className='verticalLine'></div>
        <div className='column-2'> 
          <h3>Active And Friendly</h3> 
          <p>I am very open to meeting new poeple. I also have prior experience working on a team.</p>
        </div>
        <div className='verticalLine'></div> 
        <div className='column-3'>
          <h3>Willingness To Learn</h3>
          <p> I am willing to work and learn from others who have more experience than me. I undertand how important it is to continue to learn in this field.</p>
        </div>
      </div>

    </div>
  )
}
