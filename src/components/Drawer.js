import React, { useState } from 'react';
import '../styles/drawer.css';
import BurgerButton from './BurgerButton';
import { NavLink } from 'react-router-dom';
import logo from "../assets/MindfullLogo.png";

function Drawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  }

//   Burger Icon
  

  return (
    <>
     
    <div className='drawerToggle' onClick={handleDrawerToggle}><BurgerButton /></div>
   
    <div className="Drawer">
      
      <main>
        <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
          <ul>
          <NavLink className="logoMobile" to="/">
          <img src={logo}></img>
        </NavLink>
          <ul className='burger-menu-list'>
        <li><NavLink to="/menu">MENU</NavLink></li>
        <li><NavLink to="/garden">GARDEN</NavLink></li>
        <li><NavLink to="/contact">CONTACT</NavLink></li>
        <li><NavLink to="/about">ABOUT</NavLink></li>
      </ul>
          </ul>
        </div>
      </main>
    </div>
    </>
  );
}

export default Drawer;
