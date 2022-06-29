import React from 'react'
import './projects.scss'
import {useContext} from 'react';
import {ThemeContext} from '../../context/context';

export default function Projects() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const data = [
    {
      id: 1,
      name: "MS Portfolio",
      img: "assets/Resume-site.png",
      website:"https://ms-portfolio-site.netlify.app/",
      repo: "https://github.com/Marquis4484/resume-site",
      desc:"My personal website that displays most of the projects that I've done. This website was specifically made in React.js by utilizing css, html, and javascript. ",
      status: 'Online',
    },
    {
      id: 2,
      name: "Mock Ecommerce Site",
      img:"assets/Recipe-Roulette.png",
      desc:"An ecommerce website that uses sanity as a backend and stripe to make real transactions. This website was created in Next.js. ",
      website:"https://mock-ecommerce-site.vercel.app/",
      repo: "https://github.com/Marquis4484/mock-ecommerce-site",
      status: 'Online',
    },
    {
      id: 3,
      name: "Music Player",
      img:"assets/blank.png",
      desc:"I'm planning on creating a website that plays music in a specified playlist using inspiration from spotify. This application will be built with only CSS,HTML, and vanilla Javascript without the use of any framework.",
      status: 'Coming Soon',
    },
  ];

  return (
    <div className="Projects" id='Projects' style={{backgroundColor: darkMode && '#333'}}>
      
     <div className='top-part'>
        <h2 className='header' style={{color: darkMode && '#d6d6d6'}}>Web Projects</h2>
     </div>

    
      <div className="container">
        {data.map((d) => (
          <div className="card">
            <div className="top">
              
              <img
                className="website"
                src={d.img}
                alt=""
              />
             
            </div>
            <div className="links">

              <a href={d.website} style={{backgroundColor: darkMode && '#333'}} target='_blank' rel="noreferrer" className='link-button'>View Project</a>
              <a href={d.repo} style={{backgroundColor: darkMode && '#333'}} target='_blank' rel="noreferrer" className='link-button'>View Repo</a>
            </div>
         
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom"  style={{color: darkMode && '#d6d6d6'}}>
              <h3>{d.name}</h3>
              <h4>Status: {d.status}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  )
}
