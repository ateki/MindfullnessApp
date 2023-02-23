import { useNavigate } from "react-router-dom";
import "../styles/menu.css";

import PomodoraIcon from "../assets/PomodoraIcon.png";
import BreathIcon from "../assets/BreathIcon.png";
import MeditationIcon from "../assets/MeditationIcon.png";
import QuoteIcon from "../assets/QuoteIcon.png";
import JournalIcon from "../assets/JournalIcon.png";

const styles = {

    container: {
        display: 'grid',
        gridAutoFlow: 'column',
        gridGap: '20px',
        margin: 'auto auto',
        gridTemplateRows: '50px 50px ',
        gridTemplateColumns: '200px 200px ',
        padding: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'none',

      },
      
      button: {
        padding: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        textAlign: 'center'
      },

   
};

/* Orig wireframe */
/* import imgBg from '../assets/LandingPage.png'; */
/* const styles = {

    
    backgroundImg: {
        backgroundImage: `url(${imgBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100vw',  
        height: '100vh'
    },


    container: {
        display: 'grid',
        gridAutoFlow: 'column',
        gridGap: '20px',
        margin: 'auto auto',
        gridTemplateRows: '50px 50px ',
        gridTemplateColumns: '200px 200px ',
        padding: '10px',
        justifyContent: 'center',
        alignItems: 'center'

      },
      
      button: {
        padding: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        textAlign: 'center'
      }

   
}; */

    




function Menu(){

    const navigate = useNavigate();


    return (
        <div className="menuBackground">
  
            <div className="menuIconsContainer">
                <div className="iconContainer">
                    <img className="menuIcon1" src={PomodoraIcon} onClick={() => navigate(`/Pomodoro`)}></img>
                    <p className="iconText" >Focus</p>
                </div>
                <div className="iconContainer">
                    <img className="menuIcon2" src={BreathIcon} onClick={() => navigate(`/Breathing`)}></img>
                    <p className="iconText">Breathe</p>
                </div>
                <div className="iconContainer">
                <img className="menuIcon3" src={MeditationIcon} onClick={() => navigate(`/Meditations`)}></img>
                <p className="iconText iconText3">Meditate</p>
                </div>
                <div className="iconContainer">
                <img className="menuIcon4" src={QuoteIcon} onClick={() => navigate(`/Quotes`)}></img>
                <p className="iconText">Quotes</p>
                </div>
                 <div className="iconContainer">
                <img className="menuIcon5" src={JournalIcon} onClick={() => navigate(`/Journal`)}></img>
                <p className="iconText">Journal</p>
                </div>
            </div>
  
            <div className='menu_options_container' style={styles.container}>
                  <input type="button"  disabled='true' style={styles.button}  value="Gratefulness"/>
                  <input type="button"  disabled='true' style={styles.button}  value="Journal"/>
                  <input type="button"  style={styles.button} onClick={() => navigate(`/Breathing`)} value="Breathing"/>
                  <input type="button"  style={styles.button} onClick={() => navigate(`/Meditations`)} value="Meditation"/>
                  <input type="button"  disabled='true' style={styles.button}  value="Priority Helper Matrix"/>
                  <input type="button"  disabled='true' style={styles.button}  value="Worry Tree Time"/>
                  <input type="button"  style={styles.button} onClick={() => navigate(`/Quotes`)} value="Quotes"/>
                  <input type="button"  style={styles.button} onClick={() => navigate(`/Pomodoro`)} value="Pomodoro"/>
                  <input type="button"  style={styles.button} onClick={() => navigate(`/Sounds`)} value="Sounds/Music"/>
            </div>
  
{/*             <div className="menu_options_container" style={styles.container}>
         
            </div> */}
        
      </div>
     
      )
      

            /* Orig WireFrame */
            /* 

            return (
                <div style={styles.backgroundImg}>
                    <h3>Menu</h3>
                    <div className='menu_options_container' style={styles.container}>
                        
                        <input type="button"  disabled={true} style={styles.button}  value="Gratefulness"/>
                        <input type="button"  disabled={true} style={styles.button}  value="Journal"/>
                        <input type="button"  style={styles.button} onClick={() => navigate(`/Breathing`)} value="Breathing"/>
                        <input type="button"  style={styles.button} onClick={() => navigate(`/Meditations`)} value="Meditation"/>
                        <input type="button"  disabled={true} style={styles.button}  value="Priority Helper Matrix"/>
                        <input type="button"  disabled={true} style={styles.button}  value="Worry Tree Time"/>
                        <input type="button"  style={styles.button} onClick={() => navigate(`/Quotes`)} value="Quotes"/>
                        <input type="button"  style={styles.button} onClick={() => navigate(`/Pomodoro`)} value="Pomodoro"/>
                        <input type="button"  style={styles.button} onClick={() => navigate(`/Sounds`)} value="Sounds/Music"/>
                    </div>
                </div>
            )
            */
}

export default Menu;
