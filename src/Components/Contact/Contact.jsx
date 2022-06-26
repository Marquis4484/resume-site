import {useState} from 'react';
import emailjs from 'emailjs-com';
import {useContext} from 'react';
import {ThemeContext} from '../../context/context';
import { FaGithubSquare, } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import './contact.scss';

export default function Contact() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    
  emailjs.sendForm(`service_kuc9iaq`, `template_gixkb7p`, e.target, `fqdPTTgbc-SvBi8d_`)
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset()
  };

  console.log(process.env)
  return (
    <div className='Contact' id='Contact' style={{backgroundColor: darkMode && '#333'}}>
      <div className="left">
        <img src='assets/MessageMe.jpeg' alt='MessageMe'/>
    
      </div>
      <div className="right">
      <h2 style={{color: darkMode && '#d6d6d6'}}>Let's Get in Touch!</h2>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" name='email'/>
          <textarea placeholder="Message" name='message'></textarea>
          <button className='button-contact' type="submit">Send</button>
          {message && <span style={{color: darkMode && '#d6d6d6'}}>Thank you for reaching out!</span>}
        </form>
        <div className="links" >
          <a href='https://twitter.com/marquisHTH' style={{color: darkMode && '#d6d6d6'}}> <AiOutlineTwitter/> </a> 
          <a href='https://github.com/Marquis4484' style={{color: darkMode && '#d6d6d6'}}><FaGithubSquare/> </a>  
          <a href='https://www.linkedin.com/in/marquis-sampson/' style={{color: darkMode && '#d6d6d6'}}> <AiFillLinkedin/> </a>
        </div>
      
      </div>
    </div>
  )
}



