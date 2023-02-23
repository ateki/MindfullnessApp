import React, { useState } from 'react';
import '../styles/drawer.css';

const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button className={`burger-button ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <div className="burger-bar"></div>
      <div className="burger-bar"></div>
      <div className="burger-bar"></div>
    </button>
  );
};

export default BurgerButton;
