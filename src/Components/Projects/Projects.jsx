import {useState} from 'react';
import './projects.scss';

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      
      title: "Weather App",
      desc:
        "I've created a weather app using API data from openweathermap.org. I will give you weather data from over 200,000 cities.",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Curency Calculator",
      desc:
        "This app uses currency data from over 30 cities and displays their rate based on the euro. ",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "More To Come!",
      desc:
        "I'm still learning how to create more apps in the future.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "More To Come!",
      desc:
        "Definitely check out my github if you get the chance!",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className='Projects' id='Projects'>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((item) => (
          <div key={item.id} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={item.icon} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
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