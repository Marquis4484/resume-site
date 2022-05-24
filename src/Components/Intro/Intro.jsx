import './intro.scss';
import pdf from './MarquisS-Resume-Website.pdf';
import { ThemeContext } from "../../context/context";
import { useContext } from "react";

export default function Intro() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='Intro'id='Intro' style={{backgroundColor: darkMode && '#333'}} >
      <div className='left'>
        
          <img src="assets/PortfolioPhoto.jpg" alt="Marquis" className='portfolio-pic'/>
        </div>
    
      <div className='right'>
        <div className='wrapper'>
          <h1 style={{color: darkMode && 'white'}}>Marquis Sampson</h1>
          <h2 style={{color: darkMode && 'white'}}>Front-end Developer</h2>
          <p style={{color: darkMode && 'white'}}>Hello! I am a frontend developer who is interested in creating efficient and innovative projects. 
            I am currently looking for a team to further my development in this field. I am always willing to challenge myself everyday!
            If you'd like to learn more about my skills, you can view my resume down below. I hope we can work together in the future!</p>
            <div className="link-container">
              <a href={pdf} target='_blank' rel="noreferrer" className='resume-button'>View Resume</a>
              <a href='https://github.com/Marquis4484' target='_blank' rel="noreferrer" className='github-button'>View Github</a>
            </div>
            
            
        </div>
      </div>
    </div>
  )
}
