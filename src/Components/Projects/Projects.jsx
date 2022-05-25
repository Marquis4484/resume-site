import {useState} from 'react';
import './projects.scss';

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flip, setFlip] = useState(false);

  const data = [
    {
      id: "1",
      title: "E-commerce App",
      description: "Deployed a functional e-commerce application with an easy to understand user interface that delivers fast and reliable page reloads by utilizing the React framework Next.js.",
    },
    {
      id: "2",
      title: "REST API",
      description: "I created a RESTful API with Node.js that enforces CRUD operations in order to pass, update and delete data from the API platform Postman",
     
    },
    {
      id: "3",
      title: "User Authentication Web App",
      description: "Designed a log-in and sign-up system with the ability to update passwords and emails by utilizing the app development platform Firebase.",
      
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className='Projects' id='Projects'>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((item) => (
          <div key={item.id} className="container">
            <div className= 'wrapper'onClick={() => setFlip(!flip)}>   
            <div className="info" >{flip ? item.description:item.title}</div>   
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/right-double-arrow-icon-.png"
        className="arrow left"
        alt="arrow-left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/right-double-arrow-icon-.png"
        className="arrow right"
        alt="arrow-right"
        onClick={() => handleClick()}
      />
    </div>
  );
}