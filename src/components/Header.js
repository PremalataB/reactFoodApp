import { useState } from "react";
import { LOGO_URL } from "../utils/constants";




const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");
    return(
      <div className='header'>
        <div className='logo-container'>
          <img className='logo'
          src= {LOGO_URL} alt='hifoodies'></img>
  
        </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
            <button className="login" onClick = {() => {btnNameReact === "login"? setbtnNameReact("logout"): setbtnNameReact("login");}}>
            {btnNameReact}
            </button>
        
          </ul>
        </div>
      </div>
    )
  }

  export default Header; 
  