import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/meditations.css';


let i;
let j;
let k;

function Music() {
    
    const navigate = useNavigate();
    
    
    const redirect = (id) => {
        navigate(`/sounds`, {state : {trackid : id}});
    }
    
    const [style, setStyle] = useState("dropdown-toggle");
    

    const changeStyle = () => {
        if (i === 1) {
            setStyle("dropdown-toggle");
            i = 0;
        }
        else {
            setStyle("dropdown-toggle2");
            i = 1;
            }

    };

    const [style2, setStyle2] = useState("dropdown-toggle3");
    

    const changeStyle2 = () => {
        if (j === 1) {
            setStyle2("dropdown-toggle3");
            j = 0;
        }
        else {
            setStyle2("dropdown-toggle4");
            j = 1;
            }

    };

    const [style3, setStyle3] = useState("dropdown-toggle5");

    const changeStyle3 = () => {
        if (k === 1) {
            setStyle3("dropdown-toggle5");
            k = 0;
        }
        else {
            setStyle3("dropdown-toggle6");
            k = 1;
            }

    };
    

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
    <div className="meditationsBackground">
        <div className="dropdownContainer">
            <div className="dropdown">
            <button className={style} onClick={() => {toggleDropdown(); changeStyle()}}>
                Music Playlists
            </button>
            {isDropdownOpen && (
                <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=WTsmIbNku5g&list=PLOzDu-MXXLliO9fBNZOQTBDddoA3FzZUo')}>Lofi Hip Hop Playlist</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=XpX_iV3dDaA&list=PL5DAB733F1999178F')}>Sleep Music Playlist</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=IB1URcYIaOE&list=PLRMeEiyZUwNZu2GpOVBTqpwh7sV_YmPqP')}>Low Roar Playlist !!!TRIGGER WARNING!!!</button>
                </div>
                )}
            </div>
        </div>
    </div>
    )
}

export default Music;