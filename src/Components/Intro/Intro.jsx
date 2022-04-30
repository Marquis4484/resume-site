import './intro.scss'
import pdf from './Site-Resume.pdf'

export default function Intro() {
  return (
    <div className='Intro'id='Intro'>
      <div className='left'>
        
          <img src="assets/PortfolioPhoto.jpg" alt="Marquis" className='portfolio-pic'/>
        </div>
    
      <div className='right'>
        <div className='wrapper'>
          <h1>Marquis Sampson</h1>
          <h2>FrontEnd Developer</h2>
          <p>Hello! I am a frontend developer who is interested in creating efficient and innovative projects. 
            I am currently looking for a team to further my development in this field. I am always willing to challenge myself everyday!
            If you'd like to learn more about my skills, you can navigate through this webpage on your PC or Mobile device. 
            You can also check out my github or my resume down below. I hope we can work together in the furture!</p>
            <div className="link-container">
              <a href={pdf} target='_blank' rel="noreferrer" className='resume-button'>View Resume</a>
              <a href='https://github.com/Marquis4484' target='_blank' rel="noreferrer" className='github-button'>View Github</a>
            </div>
            
            
        </div>
      </div>
    </div>
  )
}
