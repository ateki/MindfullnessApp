import { NavLink } from 'react-router-dom';
import logo from "../assets/MindfullLogo.png"


function Header() {
  return (
    <div className="header">
      <div className="logo">
        
        <NavLink className="logo" to="/" ><img src={logo}></img></NavLink>
      </div>
      <div className="nav-items">
        <ul>
          <li><NavLink to="/menu">MENU</NavLink></li>
          <li className='gardenBorder'><NavLink to="/garden">GARDEN</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
          <li><NavLink to="/about">ABOUT</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;




