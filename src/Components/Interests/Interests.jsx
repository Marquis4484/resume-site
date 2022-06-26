import {useState} from 'react';
import './interests.scss';
import { ThemeContext } from "../../context/context";
import { useContext } from "react";


export default function Interests() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [flip, setFlip] = useState(false);

  const data = [
    {
      id: "1",
      title: "🎹 Music 🎹",
      description: "I'm currently learing how to play the guitar. I also know how to program music in FL Studio!",
    },
    {
      id: "2",
      title: "🖌 Art 🖌",
      description: "I've designed logos in Adobe illustator and I use Adobe photoshop to edit photos and draw artwork.",
     
    },
    {
      id: "3",
      title: " ✨ Social Media ✨",
      description: "I am very active on LinkedIn and Twitter. Please connect with me an don't be afraid to say hello!",
      
    },
    {
      id: "4",
      title: "💻 Github 💻 ",
      description: "I am also working on other projects that are featured on Github. You should take a look at them if you get the chance!",
      
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className='Interests' id='Interests' style={{backgroundColor: darkMode && '#333'}}>
      <div className='top'>
        <h2 className='header' style={{color: darkMode && '#d6d6d6'}}>Click the Cards for More Info</h2>
      </div>


      <div className='carousel'>
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          {data.map((item) => (
            <div key={item.id} className="container">
              <div className= 'wrapper' style={{backgroundColor: darkMode && '#d6d6d6'}} onClick={() => setFlip(!flip)}>   
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

      
    </div>
  );
}