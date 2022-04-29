import './nav.scss'

export default function Nav({menuOpen, setMenuOpen}) { console.log(menuOpen)
  return (
   
    <div className = {"Nav " + (menuOpen && "active")}>  
      <div className="wrapper">
          
          <div className="hamburger" onClick={()=>setMenuOpen((menuOpen)=>!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
          
          <a href='#Projects'className='ProjectNav' onClick={()=>setMenuOpen(false)} >Projects</a>
            <a href='#Intro' className='Home' onClick={()=>setMenuOpen(false)}>MS</a>
            <a href='#Contact' className='ContactNav' onClick={()=>setMenuOpen(false)}>Contact</a>
         
        <div className="right-section">
          <a href='#Projects'>Switch</a>
        </div>
      </div>
    </div>
  )
}
