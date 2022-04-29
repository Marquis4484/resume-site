import './menu.scss'

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"Menu " + (menuOpen && 'active')}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#Intro'>Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#Projects'>Projects</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#Contact'>Contact</a>
            </li>
        </ul>
    </div>
  )
}
