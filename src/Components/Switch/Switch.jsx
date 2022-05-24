import { useContext } from "react";
import { ThemeContext } from "../../context/context";
import './switch.scss'

export default function Switch() {
    const theme = useContext(ThemeContext);
  
    const handleClick = () => {
      theme.dispatch({ type: "SWITCH" });
    };

  return (
    <label className="switch" >
        <input type='checkbox' onClick={handleClick}/>
        <span className='slider'/>
    </label>
  )
}
