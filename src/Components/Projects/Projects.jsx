import {useState} from 'react';
import './projects.scss';

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flip, setFlip] = useState(false);

  const data = [
    {
      id: "1",
      title: "Weather App",
      description: "This is a small app that I created using API data from openweathermap.org. It will give you weather data from over 200,000 cities. ",
    },
    {
      id: "2",
      title: "Future Projects!",
      description: "I'm planning on creating a music player using the react framework. I'm hoping this will give me some ideas for creating an even bigger project in the future.",
     
    },
    {
      id: "3",
      title: "Check Out My Github!",
      description: "I'm still learning how to create more apps in the future. If you'd like to view my progress, click on the button below this carousel.",
      
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