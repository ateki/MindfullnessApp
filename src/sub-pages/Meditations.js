import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/meditations.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



let i;
let j;
let k;

function Meditations() {
    
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
            <FontAwesomeIcon className="icn" icon="fa-solid fa-brain" />
                Mindfullness Meditation
            </button>
            {isDropdownOpen && (
                <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=ssss7V1_eyA')}>5 min - Mindfulness Meditation</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=kH-OQn5Ui8g')}>7 min - Beginner Mindfulness Meditation</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=ZToicYcHIOU')}>10 min - Daily Mindfulness Meditation</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=6DQTcdOhRb8')}>10 min - Mindfulness Meditation</button>
                </div>
                )}
            </div>
            <div className="dropdown">
            <button className={style2} onClick={() => {toggleDropdown2(); changeStyle2()}}>
            <FontAwesomeIcon className="icn" icon="fa-solid fa-bed" />
                Sleep Meditation
            </button>
            {isDropdownOpen2 && (
                <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=aEqlQvczMJQ')}>10 min - Meditation For Sleep</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=rvaqPPjtxng')}>20 min - Guided Sleep & Deep Relaxation</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=TP2gb2fSYXY')}>12 min - Guided Sleep Meditation</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=U6Ay9v7gK9w')}>3 hour - Sleep Talk-Down Guided Meditation</button>
                </div>
                )}
            </div>
            <div className="dropdown">
            <button className={style3} onClick={() => {toggleDropdown3(); changeStyle3()}}>
            <FontAwesomeIcon className="icn" icon="fa-solid fa-lungs" />
                Progressive Meditation
            </button>
            {isDropdownOpen3 && (
                <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=D7QoBABZu8k')}>11 min - Progressive Muscle Relaxation</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=9GURt2pvdAg')}>8min - Progressive Relaxation</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=Tt_zQcNbpg8')}>18 to 30 min - Alpha Guided Relaxation</button>
                <button className="dropdown-item" onClick={() => redirect('https://www.youtube.com/watch?v=F28MGLlpP90')}>13 min - Breathing and Relaxation</button>
                </div>
                )}
            </div>
        </div>
    </div>
    )
}

export default Meditations;