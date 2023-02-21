import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import burgerIcon from "../assets/menu.png"
import "../styles/burgermenu.css"

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="burger-menu">
      
      <img src={burgerIcon} className="burger-menu-button" onClick={toggleMenu}></img>
        <span className="burger-menu-icon" />
      
      {isOpen && (
        <ul className='burger-menu-list'>
        <li><NavLink to="/menu">MENU</NavLink></li>
        <li><NavLink to="/garden">GARDEN</NavLink></li>
        <li><NavLink to="/contact">CONTACT</NavLink></li>
        <li><NavLink to="/about">ABOUT</NavLink></li>
      </ul>
      )}
    </div>
  );
}

export default BurgerMenu;
