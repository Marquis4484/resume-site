import {useState} from 'react';
import emailjs from 'emailjs-com';
import {useContext} from 'react';
import {ThemeContext} from '../../context/context';
import './contact.scss';

export default function Contact() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    
  emailjs.sendForm(`${process.env.REACT_APP_SERVICE_KEY}`, `${process.env.REACT_APP_TEMPLATE_KEY}`, e.target, `${process.env.REACT_APP_API_KEY}`)
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
      <h2 style={{color: darkMode && 'white'}}>Let's Get in Touch!</h2>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" name='email'/>
          <textarea placeholder="Message" name='message'></textarea>
          <button className='button-contact' type="submit">Send</button>
          {message && <span style={{color: darkMode && 'white'}}>Thank you for reaching out!</span>}
        </form>

      </div>
    </div>
  )
}



