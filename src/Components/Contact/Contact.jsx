import {useState} from 'react';
import emailjs from 'emailjs-com';
import './contact.scss'

export default function Contact() {

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

  return (
    <div className='Contact' id='Contact'>
      <div className="left">
        <img src='assets/MessageMe.jpeg' alt='MessageMe'/>
    
      </div>
      <div className="right">
      <h2>Let's Get in Touch!</h2>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" name='email'/>
          <textarea placeholder="Message" name='message'></textarea>
          <button className='button-contact' type="submit">Send</button>
          {message && <span>Thank you for reaching out!</span>}
        </form>

      </div>
    </div>
  )
}

