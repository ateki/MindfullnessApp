import { NavLink } from 'react-router-dom';
import logo from "../assets/MindfullLogo.png"

const activeStyle = { color: "#1f7676", border: "2px solid #1f7676", padding: "10px", top: "-11px" };

function Header() {
  return (
    <div className="header">
      <div className="logo">
        
        <NavLink className="logo" to="/" ><img src={logo}></img></NavLink>
      </div>
      <div className="nav-items">
        <ul>

       {/*    <li><NavLink to="/menu">MENU</NavLink></li>
          <li className='gardenBorder'><NavLink to="/garden">GARDEN</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
          <li><NavLink to="/about">ABOUT</NavLink></li> */}

          <li><NavLink 
                to="/menu"
                style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
                MENU
              </NavLink></li>

          <li>
         {/*  <li className='gardenBorder'> */}
              <NavLink 
                to="/garden"
                style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
                GARDEN
              </NavLink></li>
          
          <li><NavLink
                to="/contact"            
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
              }>
                  CONTACT
              </NavLink></li>

          <li><NavLink 
                to="/about"           
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
              }>
                  ABOUT
              </NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

