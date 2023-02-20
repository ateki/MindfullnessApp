import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/meditations.css';



function Meditations() {

    const navigate = useNavigate();

    const redirect = (id) => {
        navigate(`/sounds`, {state : {trackid : id}});
    }
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
      };

      const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
    const toggleDropdown3 = () => {
        setIsDropdownOpen3(!isDropdownOpen3);
      };

    return(
    <>
        <div className="dropdownContainer">
            <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                Dropdown Menu
            </button>
            {isDropdownOpen && (
                <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=EPGEzXuTg4s&list=RDEPGEzXuTg4s&start_radio=1')}>Button 1</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=EPGEzXuTg4s&list=RDEPGEzXuTg4s&start_radio=1')}>Button 2</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=EPGEzXuTg4s&list=RDEPGEzXuTg4s&start_radio=1')}>Button 3</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=EPGEzXuTg4s&list=RDEPGEzXuTg4s&start_radio=1')}>Button 4</button>
                </div>
                )}
            </div>
            <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown2}>
                Dropdown Menu
            </button>
            {isDropdownOpen2 && (
                <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=cusA8wYBZKU')}>Button 1</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=EPGEzXuTg4s&list=RDEPGEzXuTg4s&start_radio=1')}>Button 2</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=EPGEzXuTg4s&list=RDEPGEzXuTg4s&start_radio=1')}>Button 3</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=EPGEzXuTg4s&list=RDEPGEzXuTg4s&start_radio=1')}>Button 4</button>
                </div>
                )}
            </div>
            <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown3}>
                Dropdown Menu
            </button>
            {isDropdownOpen3 && (
                <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=EPGEzXuTg4s&list=RDEPGEzXuTg4s&start_radio=1')}>Button 1</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=EPGEzXuTg4s&list=RDEPGEzXuTg4s&start_radio=1')}>Button 2</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=EPGEzXuTg4s&list=RDEPGEzXuTg4s&start_radio=1')}>Button 3</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=EPGEzXuTg4s&list=RDEPGEzXuTg4s&start_radio=1')}>Button 4</button>
                </div>
                )}
            </div>
        </div>
    </>
    )
}

export default Meditations;